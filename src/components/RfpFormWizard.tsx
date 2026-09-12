async function verifierEtPayer() {
  const rfpText = document.getElementById('rfp-text').value;
  const btnPayer = document.getElementById('btn-payer');
  const msgZone = document.getElementById('msg-perimetre');

  btnPayer.disabled = true;
  btnPayer.textContent = "Vérification en cours...";
  msgZone.innerHTML = "";

  try {
    // 1. POST au webhook n8n (qui fait le check périmètre)
    const response = await fetch('https://limeade-spiffy-uneasily.ngrok-free.dev/webhook/form-rfp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        rfp_text: rfpText,
        cabinet_nom: document.getElementById('cabinet-nom')?.value || '',
        cabinet_email: document.getElementById('cabinet-email')?.value || '',
        type_procedure: document.getElementById('type-procedure')?.value || '',
        juridiction: document.getElementById('juridiction')?.value || 'FR'
      })
    });

    const result = await response.json();

    // 2. Si HORS PÉRIMÈTRE → BLOQUER
    if (result.status === "HORS_PERIMETRE") {
      btnPayer.disabled = false;
      btnPayer.textContent = "Payer 19 € et générer mon dossier";
      msgZone.innerHTML = `
        <div style="background:#FFF5F5; border:2px solid #e94560; border-radius:8px; padding:20px; margin:15px 0;">
          <strong style="color:#e94560; font-size:16px;">⚠️ Appel d'offres hors périmètre</strong>
          <p style="color:#C53030; margin:10px 0;">${result.raison || result.message}</p>
          <p style="color:#4A5568; font-size:13px;">
            Notre moteur traite exclusivement :<br>
            ✅ AMO & Conseil stratégique<br>
            ✅ Candidatures SAD (référencement)<br>
            ✅ Propositions conseil privé
          </p>
          <p style="color:#718096; font-size:12px; margin-top:10px;">
            Aucun paiement n'a été effectué.
          </p>
        </div>
      `;
      return; // ← ON BLOQUE TOUT ICI
    }

    // 3. Si OK → Le workflow n8n a déjà fait l'INSERT Supabase
    //    On ouvre MAINTENANT Lemon Squeezy
    if (result.status === "OK" && result.checkout_url) {
      window.location.href = result.checkout_url;
    } else {
      // Fallback : ouvrir le lien Lemon Squeezy par défaut
      window.location.href = "https://omarmarco.lemonsqueezy.com/checkout/buy/1246097";
    }

  } catch (error) {
    btnPayer.disabled = false;
    btnPayer.textContent = "Payer 19 € et générer mon dossier";
    msgZone.innerHTML = `<p style="color:#e94560;">Erreur de connexion. Réessayez.</p>`;
  }
}
