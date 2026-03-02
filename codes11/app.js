function user(){
    let bton = document.getElementById("login");
    function userInput(){
        let usrname = prompt("Enter username");
        if(usrname.length<=6){
            console.log("is ok");
        }
        else{
            console.log("Getout")
        }
    }
        bton.addEventListener("click", userInput)
}
user();

const usrname1 = document.getElementById("usrnam");
const button_submit = document.getElementById("sub")
const outputofthis = document.getElementById("output")

button_submit.addEventListener("click", function(){
    const userInput = usrname1.value;

    if (userInput.length<=6 && userInput != ""){
        outputofthis.textContent = "Welcome"+ " " + userInput;
    }
    else{
        outputofthis.textContent = "add a name / add maximum 6 letters";
    }
})
