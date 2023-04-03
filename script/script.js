let studentsArray = [];
const bodyElement = document.body;

function clickHandler(event) {
    if (event.target.tagName === 'BUTTON'){
        if(event.target.textContent === 'Submit') {
            const firstNameInput = document.querySelector("#firstname");
            const lastNameInput = document.querySelector("#lastname");
            const progNameInput = document.querySelector("#progname");
            let student = {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                progName: progNameInput.value,
            }
            studentsArray.push(student)
            addStudent();
            firstNameInput.value = '';
            lastNameInput.value = '';
            progNameInput.value = '';
            
        } 
        else if(event.target.id === 'colorButton') {
            
        }
    }
}


bodyElement.addEventListener("click", clickHandler);


function addStudent() {

}