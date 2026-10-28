# YOW LE REK — Site vitrine v0.1.0

Site bilingue FR/EN pour la marque sénégalaise de streetwear **YOW LE REK**.

## Prérequis
- Node.js 20.9+ (Node 22 recommandé)
- npm

## Démarrage
```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```
Ouvrir http://localhost:3000 (redirige vers `/fr`). Version anglaise : `/en`.

## Configurer WhatsApp
Dans `.env.local`, renseigner `NEXT_PUBLIC_WHATSAPP_NUMBER=221XXXXXXXXX` (numéro réel au format international, sans `+`). Relancer `npm run dev`. Tant que le numéro n'est pas renseigné, le site affiche un message et **aucun faux lien de commande**.

## Pages
- `/fr` et `/en` : accueil
- `/fr/collection`, `/en/collection` : catalogue de lancement
- `/fr/story`, `/en/story` : histoire de marque
- `/fr/contact`, `/en/contact` : contact WhatsApp

## À personnaliser avant publication
1. Valider les prix et le stock : les tarifs sont indicatifs.
2. Remplacer les illustrations CSS des produits par les vraies photos.
3. Ajouter le numéro WhatsApp professionnel.
4. Vérifier le rendu du logo, les droits d'utilisation et les mentions légales.
5. Ajouter coordonnées, politique de confidentialité et informations commerciales réelles.
6. Faire relire les traductions et vérifier l'accessibilité.

## GitHub
```powershell
git clone https://github.com/TON-COMPTE/yowlerek.git
# Copier le contenu de ce dossier dans le dépôt cloné
git add .
git commit -m "feat: bootstrap bilingual YOW LE REK storefront v0.1.0"
git push origin main
```
Ne pas exécuter la commande `git clone` telle quelle : remplacer `TON-COMPTE` par ton identifiant GitHub.

## Déploiement
Importer le dépôt dans Vercel, choisir le framework Next.js, ajouter `NEXT_PUBLIC_WHATSAPP_NUMBER` dans les variables d'environnement, puis déployer.
