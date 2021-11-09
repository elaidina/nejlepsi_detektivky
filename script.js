const toggles = document.querySelectorAll('.faq-toggle')
const open = document.querySelector('#open')
const close = document.querySelector('#close')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})


open.addEventListener('click', () => {
    toggles.forEach(toggle => {

        
    toggle.parentNode.classList.add('active') } 
    
    
    )})

    close.addEventListener('click', () => {
        toggles.forEach(toggle => {
    
            
        toggle.parentNode.classList.remove('active') } 
        
        
        )})