async function loginFormHandler(event) {
    event.preventDefault();
  
    window.location.replace('/Medisearch');
}
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);