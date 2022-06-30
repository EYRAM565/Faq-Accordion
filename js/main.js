document.querySelectorAll('.accordion-question').forEach((element)=>{
    element.addEventListener('click', (e)=>{
        e.preventDefault();
        element.classList.toggle('open');
        element.nextElementSibling.classList.toggle('open');

    })

   
})

