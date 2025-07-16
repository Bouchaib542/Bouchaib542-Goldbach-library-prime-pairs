<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>About this project</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>About This Site</h1>
  <p>This site is dedicated to verifying the strong Goldbach Conjecture for even numbers between <strong>10⁹ and 10³⁰</strong>.</p>
  
  <h2>Method</h2>
  <p>For each even number E in a given range, a pair of prime numbers (p, q) is identified such that <strong>p + q = E</strong>.</p>
  <p>The method follows a strict 3-step protocol:</p>
  <ol>
    <li><strong>Generation</strong> of candidate pairs using the GPS symmetry method.</li>
    <li><strong>Verification</strong> of the primality of both p and q using reliable algorithms.</li>
    <li><strong>Export</strong> of the validated results into structured JSON files.</li>
  </ol>

  <h2>Author</h2>
  <p>This project was created by <strong>Bahbouhi Bouchaib</strong>, independent researcher in mathematics based in Nantes, France.</p>

  <h2>Note</h2>
  <p>Only validated (p, q) pairs are included. No approximations. All data is directly usable via the interface.</p>

</body>
</html>
