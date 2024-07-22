document.addEventListener("turbolinks:load", () => {
  function removeFields(event) {
    event.preventDefault();
    let field = event.target.closest(".nested-fields");
    field.querySelector("input[type='hidden']").value = 1;
    field.style.display = "none";
  }

  function addFields(event) {
    event.preventDefault();
    let time = new Date().getTime();
    let template = document.querySelector(".nested-fields.template");
    let newFields = template.cloneNode(true);
    newFields.classList.remove("template");
    newFields.querySelectorAll("input").forEach((input) => {
      input.name = input.name.replace(/\d+/, time);
    });
    document.getElementById("phone_numbers").appendChild(newFields);
  }

  document.querySelectorAll(".remove_fields").forEach((button) => {
    button.addEventListener("click", removeFields);
  });

  document.getElementById("add_phone_number").addEventListener("click", addFields);
});