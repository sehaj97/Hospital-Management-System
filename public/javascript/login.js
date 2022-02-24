async function loginFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      // check the response status
      if (response.ok) {
        window.location.href = "/Medisearch"
      } else {
        alert(response.statusText);
      }
    }
}

  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);