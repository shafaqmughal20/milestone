function updateResume() {
    
    
    const name = document.getElementById("name")?.value|| '';
    const email = document.getElementById("email")?.value || '';
    const contact = document.getElementById("contact")?.value || '';
    const address = document.getElementById("address")?.value || '';
    const education = document.getElementById("education")?.value || '';
    const skills = document.getElementById("skills")?.value || '';

    const displayName = document.getElementById("display-name");
    const displayEmail = document.getElementById("display-email");
    const displayContact = document.getElementById("display-contact");
    const displayAddress = document.getElementById("display-address");
    const displayEducation = document.getElementById("display-education");
    const displaySkills = document.getElementById("display-skills");

    if (displayName) displayName.innerText = name;
    if (displayEmail) displayEmail.innerText = email;
    if (displayContact) displayContact.innerText = contact;
    if (displayAddress) displayAddress.innerText = address;
    if (displayEducation) displayEducation.innerText = education;
    if (displaySkills) displaySkills.innerText = skills;
}

function loadProfilePic(event: Event) {
    const image = document.getElementById("profile-display") as HTMLImageElement;
    if (image) {
        const input = event.target as HTMLInputElement;
        if (input && input.files && input.files[0]) {
            image.src = URL.createObjectURL(input.files[0]);
            image.style.display = 'block';
        }
    }
}

function toggleResume() {
    const resumeDiv = document.querySelector('.resume') as HTMLElement;
    if (resumeDiv) {
        if (resumeDiv.style.display === 'none') {
            resumeDiv.style.display = 'block';
        } else {
            resumeDiv.style.display = 'none';
        }
    }
}
