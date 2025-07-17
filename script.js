const jsonFiles = [
  "pairs_9.json", "pairs_10.json", "pairs_11.json", "pairs_12.json", "pairs_13.json",
  "pairs_14.json", "pairs_15.json", "pairs_16.json", "pairs_17.json", "pairs_18.json",
  "pairs_19.json", "pairs_20.json"
];

let goldbachData = {};

async function loadAllFiles() {
  for (const file of jsonFiles) {
    try {
      const response = await fetch(file);
      const data = await response.json();

      const keys = Object.keys(data);
      console.log(`✔ ${file} chargé, total clefs: ${keys.length}     - Exemple: "${keys[0]}"`);

      keys.forEach(k => {
        goldbachData[k] = data[k];
      });
    } catch (err) {
      console.error(`❌ Erreur dans ${file}:`, err.message);
    }
  }
}

function findPair(E) {
  const key = E.toString();
  if (goldbachData[key]) {
    const [p, q] = goldbachData[key][0];
    return [p, q];
  }
  return null;
}

document.getElementById("find-btn").addEventListener("click", () => {
  const input = document.getElementById("input-number");
  const result = document.getElementById("result");
  const E = parseInt(input.value.trim(), 10);

  if (isNaN(E) || E < 4 || E % 2 !== 0) {
    result.textContent = "❌ Veuillez entrer un nombre pair ≥ 4.";
    return;
  }

  const pair = findPair(E);
  if (pair) {
    result.textContent = `✅ ${E} = ${pair[0]} + ${pair[1]}`;
  } else {
    result.textContent = "❌ Nombre hors plage ou données manquantes.";
  }
});

loadAllFiles();
