document.querySelector("#formulario").addEventListener("submit",
e => {
  e.preventDefault();
  const n = Number(document.querySelector("#numero").value),
  q = Number(document.querySelector("#quantidade").value),
  r = document.querySelector("#resultado");
  if (!Number.isInteger(n) || !Number.isInteger(q) || n< -50 || n>50 || q<1 || q>12) {
    r.textContent = "Use base inteira entre -50 e 50 e até 12 linhas.";
    return
  }
  r.replaceChildren();
  for (let i = 1; i <= q; i++) {
    const c = document.createElement("div");
    c.className = "cartao";
    c.textContent = `${n} × ${i} = ${n * i}`;
    r.append(c)
  }
});
document.querySelector("#formulario").requestSubmit()



