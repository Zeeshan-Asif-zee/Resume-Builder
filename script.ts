// Get refrences to the form and display area
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

// handle form submission
form.addEventListener("submit",(event:Event)=> {
    event.preventDefault(); // prevent page reload

    // collect input values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (form.elements["email"] as HTMLInputElement).value;
    const phone = (form.elements["phone"] as HTMLInputElement).value;
    const education = (form.elements["education"] as HTMLSelectElement).value;
    const experience = (form.elements["experience"] as HTMLSelectElement).value;
    const skills = (form.elements["skills"] as HTMLSelectElement).value;
   
    // Generate the resume content dynamically
    const resumeHTML =`    
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>phone:</b> ${phone}</p>

    <h3>Education</h3>
    <p> ${education}</p>
    
    <h3>Experience</h3>
    <p>${experience}</p>
    
    <h3>Skills</h3>
    <p>${skills}</p>`

    // display the generated resume

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error("Resume display element not found");
    }
  

})