document.addEventListener('turbo:load', () => {
  function bindRemoveFields() {
    document.querySelectorAll('.remove_fields').forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        let field = button.closest('.nested-fields');
        if (field.dataset.newRecord === 'true') {
          field.remove();
        } else {
          field.style.display = 'none';
          field.querySelector("input[name*='_destroy']").value = '1';
        }
      });
    });
  }

  bindRemoveFields();

  document.getElementById('add_phone_number').addEventListener('click', (event) => {
    event.preventDefault();
    let time = new Date().getTime();
    let template = document.querySelector('#phone_number_template').innerHTML.replace(/NEW_RECORD/g, time);
    document.getElementById('phone_numbers').insertAdjacentHTML('beforeend', template);
    bindRemoveFields();
  });
});
