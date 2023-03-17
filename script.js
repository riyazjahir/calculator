function add(a, b){return a+b}
function sub(a, b){return a-b}
function multiply(a, b){return a*b}
function divide(a, b){return a/b}
function operate(op, a, b){
  switch(op){
    case 'add' : return add(a, b);
    case 'sub' : return sub(a, b);
    case 'multiply' : return multiply(a, b);
    case 'divide' : return divide(a, b);
  }
}
function numClick(){
  if(this.classList[0]=='.' && (display.value.includes('.'))) return;
  if (afterOP) display.value=''
  afterOP=false;
  display.focus();
  display.value += this.classList[0];
}
function opClick(){
  afterOP=true;
  if(this.classList[0]!='equal'){
    this.style.backgroundColor='#22012b';
  }
  if(operator==''){
    display.value = display.value;
  }else{
    document.querySelector(`.${operator}`).style.backgroundColor='#460259';
    display.value = operate(operator, +input, +display.value); 
  }
  operator = (this.classList[0]=='equal')?'':this.classList[0];
  input = display.value;
}
function clearClick(){
  display.value='';
  afterOP = false;
  input = 0;
  operator = '';
}
function btnHover(){
  let r = Math.floor(Math.random()*255);
  let g = Math.floor(Math.random()*255);
  let b = Math.floor(Math.random()*255);
  this.style.color=`rgb(${r}, ${g}, ${b})`;
  this.addEventListener('mouseout', ()=>{
  if (this.classList[0]=='clear') {
    this.style.color='#22012b'; return;
  }
    this.style.color='white';
  })
}

let afterOP = false;
let input = 0;
let operator = '';

const btns = document.querySelectorAll('button');
const numBtns = document.querySelectorAll('.num');
const display = document.querySelector('input');
const opBtns = document.querySelectorAll('.op');
const clear = document.querySelector('.clear');

numBtns.forEach(btn =>{
  btn.addEventListener('click', numClick)
})
opBtns.forEach(btn=>{
  btn.addEventListener('click', opClick)
})
clear.addEventListener('click', clearClick);
btns.forEach(btn=>{
  btn.addEventListener('mouseover', btnHover);
})