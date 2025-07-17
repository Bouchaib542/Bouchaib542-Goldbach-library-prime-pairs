document.getElementById("find").addEventListener("click", () => {
  const input = document.getElementById("input").value.trim();

  if (!/^\d+$/.test(input)) {
    document.getElementById("result").innerText = "❌ Veuillez entrer un nombre pair valide.";
    return;
  }

  const E = BigInt(input);
  const E_str = E.toString();

  let pair = null;

  if (E >= 10n ** 17n && E < 10n ** 18n && typeof pairs_17 !== "undefined") {
    pair = pairs_17[E_str];
  } else {
    document.getElementById("result").innerText = "❌ Nombre hors plage ou données manquantes.";
    return;
  }

  if (pair) {
    const [p, q] = pair;
    document.getElementById("result").innerText = `✅ ${E} = ${p} + ${q}`;
  } else {
    document.getElementById("result").innerText = "❌ Aucune paire trouvée pour ce nombre.";
  }
});
