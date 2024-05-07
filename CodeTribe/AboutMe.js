// Defining personal information variables
var fullName = "Mbadaliga Arehone";
var dateOfBirth = "July 29, 2000";
var email = "mbadaligab@gmail.com";
var phone = "076 171 4986";

// Defining education, work experience, and additional information
var education = "Bachelor of Science Mathematical and Computer Science - University of Limpopo\nGraduation Year: 2024";
var workExperience = "UL ICT Student Computing Support Services - Position: Computer Lab Assistant - Duration: 2024-current\nUL Developers Society - Position: Technician - Duration: 2022-current\nChrist Tabernacle Pneuma - Position: Sound engineer & General director of music - Duration: 2021-current";
var additionalInfo = "Languages: English (Fluent), Tshivenda (Home language), Sepedi (Fluent), Xitsonga (Intermediate)\nSkills: HTML, CSS, JavaScript, Python, Cybersecurity, Computer Networks, Music, Computer repairs and more.\nInterests: Music, Learning, Photography, Singing";
var bioContent = "<p>I'm Arehone, a 24-year-old computer science student at the University of Limpopo, specializing in Cybersecurity and Computer Networking. I'm passionate about learning and spend most of my time on online courses to enhance my skills.</p><p>Music has always been a significant part of my life. I grew up playing instruments at church, including drums, piano, and currently learning to play the guitar. Singing is another hobby of mine.</p><p>I'm driven by curiosity and constantly seeking new challenges to broaden my knowledge and experience in the field of technology. I'm enthusiastic about collaborating on innovative projects and contributing positively to the tech community.</p>";


// Function to update HTML elements with education, work experience, and additional information


// Defining projects
var projects = [
    "Building my home language bot",
    "Configuring Networks in Packet tracer",
    "CHPC NICIS Student cluster competition"
];

// Function to update HTML elements with personal information and projects
function updateAboutMePage() {
    // Updating personal information
    document.getElementById('full-name').innerText = fullName;
    document.getElementById('date-of-birth').innerText = dateOfBirth;
    document.getElementById('email').innerText = email;
    document.getElementById('phone').innerText = phone;
    document.getElementById('education').innerText = education;
    
    // Update work experience
    document.getElementById('work-experience').innerText = workExperience;
    
    // Update additional information
    document.getElementById('additional-info').innerText = additionalInfo;

    // Updating projects
    var projectsList = document.getElementById('projects-list');
    projects.forEach(function(project) {
        var li = document.createElement('li');
        li.innerText = project;
        projectsList.appendChild(li);
    });
    
}
var bioContent = "<p>I'm Arehone, a 24-year-old computer science student at the University of Limpopo, specializing in Cybersecurity and Computer Networking. I'm passionate about learning and spend most of my time on online courses to enhance my skills.</p><p>Music has always been a significant part of my life. I grew up playing instruments at church, including drums, piano, and currently learning to play the guitar. Singing is another hobby of mine.</p><p>I'm driven by curiosity and constantly seeking new challenges to broaden my knowledge and experience in the field of technology. I'm enthusiastic about collaborating on innovative projects and contributing positively to the tech community.</p>";

// Calling the function to update the page
updateAboutMePage();

