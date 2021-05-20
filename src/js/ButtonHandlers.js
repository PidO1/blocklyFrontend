document.getElementById("login").addEventListener("click", function() {
    // fetch('https://bbd-levelup-backend.herokuapp.com/login')
    // .then(data => console.log(data)).catch(err => console.log(err));
    const params = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: {
        email: 'pieter@bbd.co.za',
        password: 'password',
      },
      method: 'POST'
    };
    fetch(loginURL, params).then(data => console.log(data)).catch(err => console.log(err));
  }); 