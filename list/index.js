function addProduct() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  // Se il campo è vuoto, non aggiungere nulla
  if (taskText === "") {
    alert("Inserisci un task!");
    return;
  }

  // Crea un nuovo elemento <li>
  const li = document.createElement("li");

  // Crea il checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Crea lo span con il testo del task
  const span = document.createElement("span");
  span.textContent = " " + taskText;

  // Aggiungi listener per barrare il testo se completato
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
      span.style.color = "gray";
    } else {
      span.style.textDecoration = "none";
      span.style.color = "black";
    }
  });

  // Aggiungi checkbox e testo al <li>
  li.appendChild(checkbox);
  li.appendChild(span);

  // Aggiungi il <li> alla lista
  const ul = document.getElementById("taskList");
  ul.appendChild(li);

  // Svuota il campo di input
  input.value = "";
}
