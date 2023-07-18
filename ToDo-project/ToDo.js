let taskConter = 0;
function q() {
  console.log('kjraij');
}
function a(){
  const b = document.querySelector('.Input-task').value
  if (b === '') {
    return;
  }
 console.log(b);
 document.querySelector('.Input-task').value = '';
 taskConter++;
 
 document.querySelector('.DoList').innerHTML += `<div class="divList"><p class="task-${taskConter} List">${b}</p> <button class="task-button-${taskConter} task-button" onclick="q();">Remove</button></div>`;
 
}