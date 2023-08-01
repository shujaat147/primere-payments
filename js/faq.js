function changeSection(section) {
 if (section === 'general') {
  document.getElementById('generalBtn').classList.add('active');
  document.getElementById('applicationBtn').classList.remove('active');
  document.getElementById('generalContent').style.display = 'block';
  document.getElementById('applicationContent').style.display = 'none';
 } else if (section === 'application') {
  document.getElementById('generalBtn').classList.remove('active');
  document.getElementById('applicationBtn').classList.add('active');
  document.getElementById('generalContent').style.display = 'none';
  document.getElementById('applicationContent').style.display = 'block';
 }
}
