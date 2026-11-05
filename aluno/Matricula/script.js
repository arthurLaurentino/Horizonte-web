var form = document.getElementById("matriculaForm");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  alert("Matrícula enviada com sucesso!");
  form.reset();
});
