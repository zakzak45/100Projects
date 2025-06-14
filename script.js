const CalcAge = document.getElementById("CalcAge");
const dateOfBirth = document.getElementById("dateOfBirth");
const displayAge = document.getElementById("displayAge");
const Age = document.getElementById("Age");

CalcAge.addEventListener("click", () => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth.value);

    if (!dateOfBirth.value) {
        Age.innerText = "Please enter a valid date.";
        displayAge.style.visibility = "visible";
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    displayAge.style.visibility = "visible";
    Age.innerText = `You are ${age} year${age !== 1 ? 's' : ''} old.`;
});

