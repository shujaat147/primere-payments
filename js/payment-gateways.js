function changeSection(section) {
  const sections = ['premier', 'authorize', 'playflow', 'linkpoint'];

  sections.forEach(s => {
    const sectionElement = document.getElementById(s);
    const buttonElement = document.getElementById(`${s}Btn`);

    if (s === section) {
      sectionElement.style.display = 'block';
      buttonElement.classList.add('active');
      AOS.refresh();
      // Add data-aos-once='true' to the AOS elements within the active section
      sectionElement.querySelectorAll('[data-aos]').forEach(element => {
        element.setAttribute('data-aos-once', "true");
      });
      AOS.refresh(); // Refresh AOS animations
    } else {
      sectionElement.style.display = 'none';
      buttonElement.classList.remove('active');
    }
  });
}
