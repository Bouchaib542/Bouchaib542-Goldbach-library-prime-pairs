const input = document.getElementById("inputE");
const resultDiv = document.getElementById("result");
const findButton = document.getElementById("findButton");

const dataFiles = [
  "pairs_9.json", "pairs_10.json", "pairs_11.json",
  "pairs_12.json", "pairs_13.json", "pairs_14.json",
  "pairs_15.json", "pairs_16.json", "pairs_17.json"
];

let data = {};

async function loadAllData() {
  for (const file of dataFiles) {
    try {
      const response = await fetch(file);
      const json = await response.json();
      Object.assign(data, json);
    } catch (e) {
      console.error("Erreur de chargement :", file, e);
    }
  }
}

function isValidEvenNumber(value) {
  return /^[0-9]+$/.test(value) && BigInt(value) % 2n === 0n;
}

findButton.addEventListener("click", () => {
  const rawInput = input.value.trim().replace(/[^0-9]/g, ''); // 🛠️ Correction ici
  if (!isValidEvenNumber(rawInput)) {
    resultDiv.innerHTML = "❌ Veuillez entrer un nombre pair valide.";
    return;
  }

  const key = rawInput;
  if (key in data) {
    const [p, q] = data[key];
    resultDiv.innerHTML = `✅ ${key} = ${p} + ${q}`;
  } else {
    resultDiv.innerHTML = "❌ Nombre hors plage ou données manquantes.";
  }
});

loadAllData();
