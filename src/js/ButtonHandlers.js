document.getElementById("login").addEventListener("click", function() {
    fetch('https://bbd-levelup-backend.herokuapp.com/login')
    .then(data => console.log(data)).catch(err=> console.log(err));
  });