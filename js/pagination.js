const all__question = document.querySelector(".questions-section");
const Next = document.querySelector('.N');
const single_question = document.getElementsByClassName('questions');
const first = document.querySelector('.F');
const second = document.querySelector('.S');
const  third= document.querySelector('.T');
const four = document.querySelector('.TH');
let next_hover = document.querySelector('.NH');
let second_hover = document.querySelector('.SH');
const Previous = document.querySelector('.P');
let pages = 0;
let questions = [];
for (let i = 1; i < 20; i++){
  let a = all__question.innerHTML;
  questions.push(a);
}
for (let i = 0; i < pages + 4; i++){
  all__question.innerHTML += questions[i];
}
Next.addEventListener('click', () => {
  pages == questions.length - 4 ? (pages = 0) : (pages += 4);
  all__question.innerHTML = ``;
  for (let i = 0; i < pages + 4; i++) {
    all__question.innerHTML += questions[i];

  
  }
  
});
Previous.addEventListener('click', () => {
  pages == 0 ? pages = questions.length - 4 : (pages -= 4);
  all__question.innerHTML = ``;
  for (let i = 0; i < pages + 4; i++) {
    all__question.innerHTML += questions[i];
    
  }
  
});
first.addEventListener('click', () => {
  pages = 1;
  all__question.innerHTML = ``;
  for (let i = 0; i < pages + 4; i++) {
    all__question.innerHTML += questions[i];
    
  }
  
});
second.addEventListener('click', () => {
  pages = 1;
  all__question.innerHTML = ``;
  for (let i = 0; i < pages + 4; i++) {
    all__question.innerHTML += questions[i];
  }
  
});
third.addEventListener('click', () => {
  pages = 8;
  all__question.innerHTML = ``;
  for (let i = 0; i < pages + 4; i++) {
    all__question.innerHTML += questions[i];
    
  }
  
});
four.addEventListener('click', () => {
  pages = 12;
  all__question.innerHTML = ``;
  for (let i = 0; i < pages + 4; i++) {
    all__question.innerHTML += questions[i];
    
  }
  
});