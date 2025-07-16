// Fonction principale pour chercher une paire (p, q) dans les fichiers pairs_X.json
async function findPair() {
  const input = document.getElementById("inputE").value.trim();
  const E = BigInt(input);
  const resultArea = document.getElementById("resultArea");

  if (!/^\d+$/.test(input) || E % 2n !== 0n || E < 4n) {
    resultArea.textContent = "❌ Please enter a valid even number ≥ 4.";
    return;
  }

  // Déduire le bon fichier pairs_X.json
  const exponent = E.toString().length - 1;
  const fileName = `pairs_${exponent}.json`;

  try {
    const response = await fetch(fileName);
    if (!response.ok) throw new Error("File not found");

    const data = await response.json();
    const pair = data[E.toString()];

    if (pair) {
      resultArea.textContent = `✅ ${E} = ${pair[0]} + ${pair[1]}`;
    } else {
      resultArea.textContent = "⚠️ Pair not found in this file.";
    }
  } catch (error) {
    resultArea.textContent = `❌ Error: ${error.message}`;
  }
}
