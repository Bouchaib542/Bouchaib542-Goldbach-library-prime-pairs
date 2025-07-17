document.getElementById("find").addEventListener("click", () => {
  const input = document.getElementById("input").value.trim();

  if (!/^\d+$/.test(input)) {
    document.getElementById("result").innerText = "❌ Veuillez entrer un nombre entier valide.";
    return;
  }

  const E = BigInt(input);
  const E_str = E.toString();

  let pair = null;

  if (E >= 10n ** 9n && E < 10n ** 10n && typeof pairs_9 !== "undefined") {
    pair = pairs_9[E_str];
  } else if (E >= 10n ** 10n && E < 10n ** 11n && typeof pairs_10 !== "undefined") {
    pair = pairs_10[E_str];
  } else if (E >= 10n ** 11n && E < 10n ** 12n && typeof pairs_11 !== "undefined") {
    pair = pairs_11[E_str];
  } else if (E >= 10n ** 12n && E < 10n ** 13n && typeof pairs_12 !== "undefined") {
    pair = pairs_12[E_str];
  } else if (E >= 10n ** 13n && E < 10n ** 14n && typeof pairs_13 !== "undefined") {
    pair = pairs_13[E_str];
  } else if (E >= 10n ** 14n && E < 10n ** 15n && typeof pairs_14 !== "undefined") {
    pair = pairs_14[E_str];
  } else if (E >= 10n ** 15n && E < 10n ** 16n && typeof pairs_15 !== "undefined") {
    pair = pairs_15[E_str];
  } else if (E >= 10n ** 16n && E < 10n ** 17n && typeof pairs_16 !== "undefined") {
    pair = pairs_16[E_str];
  } else if (E >= 10n ** 17n && E < 10n ** 18n && typeof pairs_17 !== "undefined") {
    pair = pairs_17[E_str];
  } else if (E >= 10n ** 18n && E < 10n ** 19n && typeof pairs_18 !== "undefined") {
    pair = pairs_18[E_str];
  } else {
    document.getElementById("result").innerText = "❌ Nombre en dehors de la plage disponible.";
    return;
  }

  if (pair) {
    const [p, q] = pair;
    document.getElementById("result").innerText = `✅ ${E} = ${p} + ${q}`;
  } else {
    document.getElementById("result").innerText = "❌ Aucune paire trouvée pour ce nombre.";
  }
});
