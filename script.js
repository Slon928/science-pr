document.getElementById('goButton').onclick=function()
{
    location.href='index.html';
};
document.getElementById('goButton').addEventListener('click', function()
{
const phone=document.getElementById('n2').value;
const names=document.getElementById('n1').value;
const city=document.getElementById('n3').value;
const email=document.getElementById('n4').value;
localStorage.setItem('phone',phone);
localStorage.setItem('names',names);
localStorage.setItem('city',city);
localStorage.setItem('email',email);
window.location.href='index.html';
});

