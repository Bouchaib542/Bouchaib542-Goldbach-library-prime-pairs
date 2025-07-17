const input = document.getElementById("inputE");
const resultDiv = document.getElementById("result");
const findButton = document.getElementById("findButton");

const dataFiles = ["pairs_17.json"];
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

  console.log("Fichiers chargés :", Object.keys(data));
}

function isValidEvenNumber(value) {
  return /^[0-9]+$/.test(value) && BigInt(value) % 2n === 0n;
}

findButton.addEventListener("click", () => {
  const rawInput = input.value.trim().replace(/[^0-9]/g, '');
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
