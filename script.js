const goldbachData = {
  "10": [[3, 7]],
  "100000000000": [[49999999941, 50000000059]],
  "1000000000": [[499999973, 500000027]],
  "10000000000": [[4999999997, 5000000003]],
  "1000000000000": [[499999999989, 500000000011]],
  "10000000000000": [[4999999999997, 5000000000003]],
  "100000000000000": [[49999999999989, 50000000000011]],
  "1000000000000000": [[499999999999973, 500000000000027]],
  "10000000000000000": [[4999999999999997, 5000000000000003]]
};

document.getElementById("find-btn").addEventListener("click", () => {
  const E = document.getElementById("input-number").value.trim();
  const result = document.getElementById("result");
  if (goldbachData[E]) {
    const [p, q] = goldbachData[E][0];
    result.textContent = `✅ ${E} = ${p} + ${q}`;
  } else {
    result.textContent = "❌ Clé absente ou non supportée.";
  }
});
