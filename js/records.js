let elUserName = document.querySelector('.records__user-name');
let elTime = document.querySelector('.records__max-time');
let elUserBall = document.querySelector('.records__ball');

let userData = JSON.parse(localStorage.getItem('user'));

console.log(userData);

elUserName.innerHTML = userData.name + ' ' + userData.surname;

let userTime = localStorage.getItem('time');

elTime.innerHTML = 'Time: ' + userTime.slice(0, 2) + ' secound';
 
elUserBall.innerHTML =  'Max-ball: ' + localStorage.getItem('ball');
