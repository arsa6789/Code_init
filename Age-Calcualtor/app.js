const birthday = document.getElementById("birthday");
const Elbtn = document.getElementById("btn");
const result = document.getElementById("result");

function calculateAge() {
    const birthdayValue = birthday.value;
    if (birthdayValue === "") {
        alert("Type  your birthday")
    }
    else {
        const age = getAge(birthdayValue);
        result.innerText = `Your age is : ${age}`;
    }
}

function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    let month = currentDate.getMonth() - birthdayDate.getMonth();
    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }
    return age;
}
Elbtn.addEventListener("click", calculateAge);
