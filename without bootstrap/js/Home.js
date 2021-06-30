

document.getElementById("button").addEventListener("click",
function() {
  document.querySelector('.bg-model').style.display='flex';
});
document.querySelector('.close').addEventListener('click',
function() {
  document.querySelector('.bg-model').style.display='none';
});

document.querySelector('.yes-btn').addEventListener('click',
function() {
  document.querySelector('.bg-model').style.display='none';
});

document.querySelector('.back-btn').addEventListener('click',
function() {
  document.querySelector('.bg-model').style.display='none';
});
