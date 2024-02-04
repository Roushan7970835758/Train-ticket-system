// let radio = function () {
    
// }


let course ={
    name: 'JS',
    price: 33,
    description: 'A good JS Course to learn'
}

console.log(course);

function redirectToHome() {
    // Redirect to ../home/index.html
    //window.location.href = '../../Home/index.html';



    const username = document.getElementById('username11').value;
    const password = document.getElementById('password11').value;

    // Check if username and password are not null
    if (!username || !password) {
      alert('Please enter both username and password.');
    } else {
      // Redirect to ../home/index.html if validation passes
      window.location.href = '../../Home/index.html';
    }
}

function validateAndRedirect() {
    const username = document.getElementById('username11').value;
    const password = document.getElementById('password11').value;

    // Check if username and password are not null
    if (!username || !password) {
      alert('Please enter both username and password.');
    } else {
      // Redirect to ../home/index.html if validation passes
      window.location.href = '../../Home/index.html';
    }
  }