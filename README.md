# Calcul des Paires de Goldbach via la Méthode GPS

**Auteur :** Bahbouhi Bouchaib  
**Statut :** Chercheur indépendant en mathématiques, basé à Nantes (France)

---

## 🎯 Objectif du site

Ce site permet de vérifier la conjecture forte de Goldbach pour les nombres pairs allant de **10⁹ à 10¹⁶** en affichant une paire (p, q) de nombres premiers tels que :

**p + q = E**, avec E un nombre pair présent dans notre base de données.

Les paires (p, q) ont été prédites par la **méthode GPS** (algorithme probabiliste centré autour de E/2) et **vérifiées rigoureusement** par un test de primalité ligne par ligne.

---

## 🔢 Plage de validité

Le site couvre les nombres pairs suivants (inclus dans les fichiers `pairs_X.json`) :

- **10⁹**
- **10¹⁰**
- **10¹¹**
- **10¹²**
- **10¹³**
- **10¹⁴**
- **10¹⁵**
- **10¹⁶**

Chaque fichier contient 20 à 50 paires (p, q) valides. Le site recherche automatiquement dans la bonne décennie en fonction de la valeur de E.

---

## 🧪 Mode d’emploi

1. L'utilisateur saisit un nombre pair **E** dans le champ de recherche.
2. Le site localise le bon fichier JSON.
3. Il vérifie si E est présent comme clé dans la base.
4. Si oui, il affiche une paire (p, q) telle que p + q = E.
5. Si non, il indique que le nombre est hors plage ou absent de la base.

---

## 🛡 Propriété intellectuelle

L’algorithme GPS, les paires prédites et leur structuration en bibliothèque constituent une œuvre mathématique originale de **Bahbouhi Bouchaib**.  
Toute reproduction ou utilisation doit citer explicitement l'auteur.

---

## 🔜 Prochaine étape

Une extension du projet sera ouverte sur un second site dédié aux nombres **≥ 10¹⁷**, dans un nouveau dépôt GitHub. Ce second site prendra en charge les tailles critiques qui dépassent les limites techniques du navigateur et des fichiers JSON standards.

---

## ✉️ Contact

Pour toute question ou suggestion :  
📧 **bahbouhibouchaib524@gmail.com**
