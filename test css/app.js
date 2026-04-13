const buttonClick = document.getElementById("bton");
buttonClick.addEventListener("click", ()=>{
    const userData = prompt("Type your name");
    buttonClick.textContent = userData;
})