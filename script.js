const jsonFiles = [
  "pairs_9.json",
  "pairs_10.json",
  "pairs_11.json",
  "pairs_12.json",
  "pairs_13.json",
  "pairs_14.json",
  "pairs_15.json",
  "pairs_16.json"
];

let goldbachData = {};

async function loadAllJSON() {
  for (const file of jsonFiles) {
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error("Erreur fetch");
      const data = await response.json();
      Object.assign(goldbachData, data);
    } catch (error) {
      console.error(`❌ Erreur chargement ${file}:`, error.message);
    }
  }
}

function findGoldbachPair() {
  const input = document.getElementById("evenInput").value.trim();
  const result = document.getElementById("result");
  result.innerHTML = "";

  if (!/^\d+$/.test(input)) {
    result.innerHTML = "❌ Veuillez entrer un nombre pair valide.";
    return;
  }

  if (!goldbachData.hasOwnProperty(input)) {
    result.innerHTML = "❌ Nombre hors plage ou données manquantes.";
    return;
  }

  const [p, q] = goldbachData[input];
  result.innerHTML = `✅ ${input} = ${p} + ${q}`;
}

window.addEventListener("DOMContentLoaded", loadAllJSON);
