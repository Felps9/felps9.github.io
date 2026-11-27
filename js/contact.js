
 
// Static site without a backend: the form opens the visitor's e-mail client with the message filled in.
(() => {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const emailLink = document.querySelector('[data-contact-email]');
  const { contactEmail } = SITE_CONFIG;
  emailLink.textContent = contactEmail;
  emailLink.href = `mailto:${contactEmail}`;
  const showFeedback = (message, isError) => {
    feedback.textContent = message;
    feedback.classList.toggle('text-red-500', isError);
    feedback.classList.toggle('text-primary', !isError);
  };
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = Array.from(form.elements).filter((element) => element.name);
    fields.forEach((field) => {
      field.closest('.form-field').classList.toggle('is-invalid', !field.checkValidity());
    });
    if (!form.checkValidity()) {
      showFeedback('Preencha todos os campos corretamente.', true);
      return;
    }
    const { name, email, subject, message } = Object.fromEntries(new FormData(form));
    const body = `${message}\n\n${name} <${email}>`;
    window.location.href =
      `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showFeedback('Abrindo seu aplicativo de e-mail...', false);
    form.reset();
  });
})();