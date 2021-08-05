function generateIdCard(event){
    event.preventDefault();

    const studentName = document.getElementById("student-name").value;
    const targetStudentName = document.getElementById("generated-name");
    targetStudentName.innerHTML = studentName;

    const collegeName = document.getElementById("college-name").value;
    const targetCollegeName = document.getElementById("generated-college-name");
    targetCollegeName.innerHTML = collegeName;

    const className = document.getElementById("class-name").value;
    const targetClassName = document.getElementById("generated-class");
    targetClassName.innerHTML = className;

    const birthDate = document.getElementById("date-of-birth").value;
    const targetBirthDate = document.getElementById("generated-dob");
    targetBirthDate.innerHTML = birthDate;

    const generatedIDCard = document.getElementById("generatedCard")
    generatedIDCard.style.display = "block";
}

function previewImage(event){
    console.log("event", event);
    const output = document.getElementById("student-image");
    output.src = URL.createObjectURL(event.target.files[0]);

}