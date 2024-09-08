



function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('visible');
    });
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('visible');
}

// Show the home section by default
showSection('home');