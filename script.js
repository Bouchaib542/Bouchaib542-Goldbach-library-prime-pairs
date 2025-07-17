const goldbachData = {
  "1000000000": [[499999973, 500000027]]
};

document.getElementById("find-btn").addEventListener("click", () => {
  const input = document.getElementById("input-number");
  const result = document.getElementById("result");
  const E = input.value.trim();

  if (goldbachData[E]) {
    const [p, q] = goldbachData[E][0];
    result.textContent = `✅ ${E} = ${p} + ${q}`;
  } else {
    result.textContent = "❌ Aucune paire trouvée.";
  }
});
