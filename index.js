const navIcon = document.querySelector (".hamburgerIcon")
const hamburger = document.querySelector(".hamburger")
 
  document.addEventListener('click',(e)=>{
    if(e.target.id !== "hamburger" || e.target.id !=="hamburgerIcon"){
      if(hamburger.className.includes('show')){
        hamburger.classList.remove('show')
      }
   }
   })
   
  navIcon.addEventListener('click', ()=>{
    hamburger.classList.toggle('show')
  })