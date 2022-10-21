// Get all variables 
const inputs = document.querySelector(".input-items textarea") ;
const items = document.querySelector(".todolist") ; 
const itemsNumbers = document.querySelector(".element") ; 
const btn = document.querySelector(".clear-btn") ; 

function tasks(){
  const Li_numbers = document.querySelectorAll(".element") ;
  ( itemsNumbers.textContent = Li_numbers.length === 0 ? "No" : (Li_numbers.length - 1 ) ) ;
  const Variable = document.querySelectorAll(".task") ;
  if(Variable.length > 0 ){
    // to make btn work 
    btn.style.pointerEvents = 'auto' ;
    items.style.marginTop = '20px' ;
  }
  items.style.marginTop = '0px' ;
}
inputs.addEventListener('keyup' , (event)=>{
    const textareaValue = inputs.value.trim() ;  
    const textareaValueLength = textareaValue.length ; 
    const LiTags = `<li class="task element" onclick="fun(this)">
    <input type="checkbox">
    <span class="text">${textareaValue}</span>
    <i class="uil uil-trash-alt" onclick = "Delete(this)"></i>
</li>`
function RemoveTask(e){
     e.parentElement.remove();  
}
    if(event.key === 'Enter' && textareaValueLength > 0  ){
         items.insertAdjacentHTML('beforeend' , LiTags ) ;
         inputs.value = '' ;
         tasks() ;
        
    } 
});
function fun(event){
    // get input 
    const inputItem = event.querySelector("input") ;
    inputItem.checked = inputItem.checked ? false : true ; 
    event.classList.toggle("element") ;
    tasks() ;
}
function Delete(e){
    e.parentElement.remove() ;
    tasks() ;
  
}
btn.addEventListener('click' , ()=>{
    items.innerHTML = '' ;
    //call this function to make counter start from 0 
    tasks() ;
 
});



