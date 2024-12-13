function changeMovie(movieFile) 
{
  const moviePlayer = document.getElementById('moviePlayer');
  const movieSource = document.getElementById('movieSource');

  movieSource.src = movieFile;
  moviePlayer.load();  
  moviePlayer.play();  
}


const form = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const birthdate = document.getElementById('birthdate').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (name === 'name' && lastname === 'lastname' && birthdate === 'birthdate' && mobile === 'mobile' && email === 'email' && password === 'password') {
        loginMessage.innerText = 'Login Successful!';
        loginMessage.style.color = '#4CAF50';
    } else {
        loginMessage.innerText = 'Invalid credentials!';
        loginMessage.style.color = '#f44336';
    }
});