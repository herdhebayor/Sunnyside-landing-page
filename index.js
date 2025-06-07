const navIcon = document.querySelector ("#hamburgerIcon")
const hamburger = document.querySelector("#hamburger")
 
   
  navIcon.addEventListener('click', ()=>{
    if (hamburger.className.includes('translate-y-[-500px]')){
      hamburger.classList.remove('translate-y-[-500px]')
    }else{
      hamburger.classList.add('translate-y-[-500px]')
    }
			
  })