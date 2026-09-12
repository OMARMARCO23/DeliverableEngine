import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "25mb" }));

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // Perimeter check endpoint (Vérification du périmètre)
  app.post("/api/check-perimeter", (req, res) => {
    const { rfp_text } = req.body || {};
    const text = String(rfp_text || "").toLowerCase();

    const perimetre_accepte = [
      "AMO & Conseil stratégique",
      "Candidatures SAD (référencement)",
      "Propositions conseil privé"
    ];

    // Mots-clés discriminants hors périmètre (BTP, Fournitures, Services ops, Enquêtes)
    const btpKeywords = [
      "travaux btp", "gros oeuvre", "gros œuvre", "terrassement", "maçonnerie",
      "échafaudage", "charpente", "couverture", "menuiserie", "enrobé",
      "voirie et réseaux", "vrd", "démolition", "ravalement de façade",
      "chantier de construction", "travaux de réfection de toiture"
    ];

    const fournituresKeywords = [
      "fournitures scolaires", "fournitures de bureau", "achat de denrées",
      "livraison de matériel", "achat d'équipements", "quincaillerie",
      "consommables médicaux", "pièces détachées", "achat de véhicules"
    ];

    const servicesOpsKeywords = [
      "gardiennage", "nettoyage des locaux", "surveillance humaine",
      "propreté des bâtiments", "agents de sécurité physique",
      "collecte des déchets", "dératisation", "désinfection",
      "espaces verts", "tonte de pelouse", "déneigement"
    ];

    const enquetesKeywords = [
      "sondage d'opinion", "panel de consommateurs", "panels de consommateurs",
      "sondage téléphonique", "administration de questionnaires en porte-à-porte"
    ];

    let foundCategory: string | null = null;

    if (btpKeywords.some((kw) => text.includes(kw))) {
      foundCategory = "Travaux BTP & Gros œuvre";
    } else if (fournituresKeywords.some((kw) => text.includes(kw))) {
      foundCategory = "Fournitures & Matériel physique";
    } else if (servicesOpsKeywords.some((kw) => text.includes(kw))) {
      foundCategory = "Services opérationnels (nettoyage, gardiennage...)";
    } else if (enquetesKeywords.some((kw) => text.includes(kw))) {
      foundCategory = "Enquêtes, sondages d'opinion & panels";
    }

    if (foundCategory) {
      return res.json({
        status: "HORS_PERIMETRE",
        raison: `Ce dossier relève de la catégorie "${foundCategory}", qui ne fait pas partie des prestations intellectuelles et du conseil pris en charge par le moteur.`,
        perimetre_accepte
      });
    }

    return res.json({
      status: "OK",
      perimetre_accepte
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
