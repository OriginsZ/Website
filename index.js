



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




function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('visible');
    });
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('visible');
}

function toggleFAQ(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.classList.contains('visible')) {
        section.classList.remove('visible');
    } else {
        document.querySelectorAll('.faq-body').forEach(body => body.classList.remove('visible'));
        section.classList.add('visible');
    }
}

// Show the home section by default
showSection('home');
