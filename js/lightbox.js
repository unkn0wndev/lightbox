const bigmodal = document.querySelectorAll('.bigmodal');
const small = document.querySelectorAll('.small');

let AllInfo = [];

for(let i=0; i<bigmodal.length; i++){
  AllInfo.push(bigmodal[i]);
  AllInfo[i].remove();
}
