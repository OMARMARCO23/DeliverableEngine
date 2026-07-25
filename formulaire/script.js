document.addEventListener('DOMContentLoaded', () => {
  let currentStep = 1;
  const totalSteps = 4;

  const form = document.getElementById('rfpForm');
  const progressFill = document.getElementById('progressFill');
  const stepLabels = document.querySelectorAll('.step-label');

  // ===== Upload principal =====
  const uploadZone = document.getElementById('uploadZone');
  const rfpFile = document.getElementById('rfpFile');
  const uploadContent = document.getElementById('uploadContent');
  const uploadSuccess = document.getElementById('uploadSuccess');
  const fileName = document.getElementById('fileName');
  const removeFileBtn = document.getElementById('removeFile');

  uploadZone.addEventListener('click', (e) => {
    if (e.target !== removeFileBtn) rfpFile.click();
  });

  uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('dragover');
  });

  uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('dragover');
  });

  uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
    if (e.dataTransfer.files.length) {
      rfpFile.files = e.dataTransfer.files;
      handleMainFile();
    }
  });

  rfpFile.addEventListener('change', handleMainFile);

  function handleMainFile() {
    if (rfpFile.files.length) {
      const file = rfpFile.files[0];
      if (file.size > 15 * 1024 * 1024) {
        alert('Fichier trop volumineux (max 15 Mo)');
        rfpFile.value = '';
        return;
      }
      fileName.textContent = file.name;
      uploadContent.classList.add('hidden');
      uploadSuccess.classList.remove('hidden');
    }
  }

  removeFileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    rfpFile.value = '';
    uploadContent.classList.remove('hidden');
    uploadSuccess.classList.add('hidden');
  });

  // ===== Upload références =====
  const refUploadZone = document.getElementById('refUploadZone');
  const refFiles = document.getElementById('refFiles');
  const refUploadContent = document.getElementById('refUploadContent');
  const refUploadSuccess = document.getElementById('refUploadSuccess');
  const refFileNames = document.getElementById('refFileNames');
  const removeRefFilesBtn = document.getElementById('removeRefFiles');

  refUploadZone.addEventListener('click', (e) => {
    if (e.target !== removeRefFilesBtn) refFiles.click();
  });

  refFiles.addEventListener('change', () => {
    if (refFiles.files.length) {
      const names = Array.from(refFiles.files).map(f => f.name).join(', ');
      refFileNames.textContent = names;
      refUploadContent.classList.add('hidden');
      refUploadSuccess.classList.remove('hidden');
    }
  });

  removeRefFilesBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    refFiles.value = '';
    refUploadContent.classList.remove('hidden');
    refUploadSuccess.classList.add('hidden');
  });

  // ===== Objectif "Autre" =====
  const objectiveRadios = document.querySelectorAll('input[name="objective"]');
  const otherObjectiveWrap = document.getElementById('otherObjectiveWrap');

  objectiveRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.value === 'autre') {
        otherObjectiveWrap.classList.remove('hidden');
      } else {
        otherObjectiveWrap.classList.add('hidden');
      }
    });
  });

  // ===== Navigation =====
  function goToStep(step) {
    document.querySelectorAll('.form-step').forEach(s => s.classList.remove('active'));
    document.querySelector(`.form-step[data-step="${step}"]`).classList.add('active');

    stepLabels.forEach(label => {
      label.classList.toggle('active', parseInt(label.dataset.step) <= step);
    });

    progressFill.style.width = `${(step / totalSteps) * 100}%`;
    currentStep = step;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Boutons "Continuer"
  document.getElementById('btnStep1').addEventListener('click', () => {
    const hasFile = rfpFile.files.length > 0;
    const hasText = document.getElementById('rfpText').value.trim().length > 30;

    if (!hasFile && !hasText) {
      alert('Merci d’uploader un fichier RFP ou de coller le texte (minimum 30 caractères).');
      return;
    }
    goToStep(2);
  });

  document.getElementById('btnStep2').addEventListener('click', () => {
    const clientName = document.getElementById('clientName').value.trim();
    const positioning = document.getElementById('positioning').value.trim();
    const objective = document.querySelector('input[name="objective"]:checked');

    if (!clientName || !positioning || !objective) {
      alert('Merci de remplir tous les champs obligatoires.');
      return;
    }
    if (objective.value === 'autre' && !document.getElementById('otherObjective').value.trim()) {
      alert('Merci de préciser ton objectif.');
      return;
    }
    goToStep(3);
  });

  document.getElementById('btnStep3').addEventListener('click', () => {
    buildRecap();
    goToStep(4);
  });

  // Boutons Retour
  document.querySelectorAll('[data-prev]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) goToStep(currentStep - 1);
    });
  });

  // ===== Récap =====
  function buildRecap() {
    const clientName = document.getElementById('clientName').value.trim();
    const positioning = document.getElementById('positioning').value.trim();
    const objectiveRadio = document.querySelector('input[name="objective"]:checked');
    let objectiveText = '';

    if (objectiveRadio) {
      const map = {
        gagner: 'Gagner le deal',
        positionner: 'Se positionner sérieusement',
        contrainte: 'Répondre sous contrainte de temps',
        autre: document.getElementById('otherObjective').value.trim() || 'Autre'
      };
      objectiveText = map[objectiveRadio.value] || '';
    }

    const hasFile = rfpFile.files.length > 0;
    const fileLabel = hasFile ? rfpFile.files[0].name : 'Texte collé';

    const recapCard = document.getElementById('recapCard');
    recapCard.innerHTML = `
      <div class="recap-row">
        <span class="recap-label">Document</span>
        <span class="recap-value">${fileLabel}</span>
      </div>
      <div class="recap-row">
        <span class="recap-label">Client</span>
        <span class="recap-value">${clientName}</span>
      </div>
      <div class="recap-row">
        <span class="recap-label">Positionnement</span>
        <span class="recap-value">${positioning}</span>
      </div>
      <div class="recap-row">
        <span class="recap-label">Objectif</span>
        <span class="recap-value">${objectiveText}</span>
      </div>
    `;
  }

  // ===== Paiement (placeholder) =====
  document.getElementById('btnPay').addEventListener('click', () => {
    const email = document.getElementById('email').value.trim();
    if (!email || !email.includes('@')) {
      alert('Merci d’indiquer un email valide pour la livraison.');
      return;
    }

    // TODO: Remplacer par ton Stripe Payment Link
    // Exemple : window.location.href = 'https://buy.stripe.com/tonlien?prefilled_email=' + encodeURIComponent(email);

    alert('Prochaine étape : connecter ton Stripe Payment Link ici.\n\nPour l’instant le formulaire est prêt côté UX.');
    
    // Plus tard tu enverras les données vers n8n via webhook après paiement confirmé.
  });
});
