export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // ─── GESTION DU CORS (Préflight OPTIONS) ───
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // ─── 1. ENDPOINT DE VÉRIFICATION DU PÉRIMÈTRE ───
    if (url.pathname === '/api/check-perimeter' && request.method === 'POST') {
      try {
        const body = await request.json();
        const rfpText = (body.rfp_text || '').toLowerCase();

        const horsPerimetre = [
          /enquête|sondage|panel|collecte\s+de\s+données|échantillon|terrain\s+par\s+vague/i,
          /travaux|construction|rénovation|génie\s+civil|btp|maçonnerie/i,
          /fourniture|matériel|équipement|mobilier|achat\s+de\s+logiciel/i,
          /nettoyage|gardiennage|surveillance|restauration\s+collective|transport/i,
          /formation\s+professionnelle|e-learning|organisme\s+de\s+formation/i,
          /recherche\s+scientifique|essai\s+clinique/i,
          /prestation\s+médicale|soins\s+infirmiers|aide\s+à\s+domicile|auxiliaire\s+de\s+vie/i
        ];

        for (const pattern of horsPerimetre) {
          if (pattern.test(rfpText)) {
            return new Response(JSON.stringify({
              status: "HORS_PERIMETRE",
              raison: "Ce type de marché (enquête, travaux, fournitures, services opérationnels, formation, recherche ou médical) ne relève pas de notre périmètre.",
              perimetre_accepte: [
                "AMO & Conseil stratégique",
                "Candidatures SAD (référencement)",
                "Propositions conseil privé"
              ]
            }), {
              status: 200,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
              }
            });
          }
        }

        return new Response(JSON.stringify({ status: "OK" }), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          }
        });

      } catch (err) {
        return new Response(JSON.stringify({ status: "OK" }), {
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
        });
      }
    }

    // ─── 2. CHARGEMENT NORMAL DE LA LANDING PAGE / DU SITE STATIQUE ───
    return env.ASSETS.fetch(request);
  }
};
