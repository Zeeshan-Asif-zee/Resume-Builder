// Get refrences to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    // collect input values
    var name = document.getElementById("name").value;
    var email = form.elements["email"].value;
    var phone = form.elements["phone"].value;
    var education = form.elements["education"].value;
    var experience = form.elements["experience"].value;
    var skills = form.elements["skills"].value;
    // Generate the resume content dynamically
    var resumeHTML = "    \n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>phone:</b> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p> ").concat(education, "</p>\n    \n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    \n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>");
    // display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("Resume display element not found");
    }
});
