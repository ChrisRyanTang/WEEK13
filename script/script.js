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
            addStudent(student);
            firstNameInput.value = '';
            lastNameInput.value = '';
            progNameInput.value = '';
            
        } 
        else if(event.target.id === 'colorButton') {
            
        }
    }
}


bodyElement.addEventListener("click", clickHandler);



function addStudent(newStudent) {
    //create an li
    const newLi = document.createElement("li");
    //seelct the two uls using id
    const selectCIT = document.querySelector('#CIT');
    const selectCST = document.querySelector('#CST');
    //update the textContent of the li usig students first name and lastname
    newLi.textContent = `${newStudent.firstName} ${newStudent.lastName}`
    //using students progName decide which ul to append the li to
    if(newStudent.progName === 'CIT') {
        selectCIT.appendChild(newLi);
    } else if(newStudent.progName === 'CST') {
        selectCST.appendChild(newLi);
    }

}

let studentsExists = false;
for (let item of studentsArray) {
    if (
        item.firstName === student.firstName &&
        item.lastName === student.lastName &&
        item.progName === student.progName
    ) {
        alert("Student Exists");
        studentsExists = true;
        break;
    }
}