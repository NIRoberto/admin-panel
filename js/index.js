const body = document.getElementsByTagName('div');
let humber_burg = document.querySelector('.fas');
let burger = document.querySelector('.fa-times');
console.log(humber_burg);
   console.log(humber_burg.classList);

// fas fa-times
 console.log("hello")
const link = document.querySelectorAll('.sidebar-link  span');
 sidebar =()=> {
   body.item(1).classList.toggle('sidebar-expand');
   link.forEach((link, index) => {
     if (link.style.animation) {
       link.style.animation = '';
     }else{
       link.style.animation = `link 3s ease-in forwards`;

       
     }

   })
    humber_burg.classList.toggle('fa-times');

}



//  search input field
const searchbar = document.querySelector('input');
let search_btn = document.querySelector('.fa-search');
search_btn.addEventListener('click', () => {
  const term = searchbar.value.toLowerCase();

  const single_question = document.querySelectorAll('.questions');
  const single_blog = document.querySelectorAll('.single-post');
  const not = document.querySelector('.not-found h5');
  
  Array.from(single_blog).forEach(single_blog => {
    const blog = single_blog.textContent;
  if (blog.toLowerCase().indexOf(term) !== -1) {
    single_blog.style.display = 'flex';

}
  else {
    single_blog.style.display = 'none';
    
    }
    })
Array.from(single_question).forEach( single_question => {
  const quest = single_question.textContent;

  if (quest.toLowerCase().indexOf(term) !== -1) {
    single_question.style.display = 'flex';

}
  else{
    single_question.style.display = 'none';
  }
  })


})



