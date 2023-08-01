function changeSection(section) {
 if (section === 'premier') {
  document.getElementById('premierBtn').classList.add('active');
  document.getElementById('authorizeBtn').classList.remove('active');
  document.getElementById('playflowBtn').classList.remove('active');
  document.getElementById('linkpointBtn').classList.remove('active');
  document.getElementById('premier').style.display = 'block';
  document.getElementById('authorize').style.display = 'none';
  document.getElementById('playflow').style.display = 'none';
  document.getElementById('linkpoint').style.display = 'none';
 } else if (section === 'authorize') {
  document.getElementById('premierBtn').classList.remove('active');
  document.getElementById('authorizeBtn').classList.add('active');
  document.getElementById('playflowBtn').classList.remove('active');
  document.getElementById('linkpointBtn').classList.remove('active');
  document.getElementById('authorize').style.display = 'block';
  document.getElementById('premier').style.display = 'none';
  document.getElementById('playflow').style.display = 'none';
  document.getElementById('linkpoint').style.display = 'none';
 } else if (section === 'playflow') {
  document.getElementById('premierBtn').classList.remove('active');
  document.getElementById('authorizeBtn').classList.remove('active');
  document.getElementById('playflowBtn').classList.add('active');
  document.getElementById('linkpointBtn').classList.remove('active');
  document.getElementById('playflow').style.display = 'block';
  document.getElementById('premier').style.display = 'none';
  document.getElementById('authorize').style.display = 'none';
  document.getElementById('linkpoint').style.display = 'none';
 } else if (section === 'linkpoint') {
  document.getElementById('premierBtn').classList.remove('active');
  document.getElementById('authorizeBtn').classList.remove('active');
  document.getElementById('playflowBtn').classList.remove('active');
  document.getElementById('linkpointBtn').classList.add('active');
  document.getElementById('linkpoint').style.display = 'block';
  document.getElementById('premier').style.display = 'none';
  document.getElementById('authorize').style.display = 'none';
  document.getElementById('playflow').style.display = 'none';
 }
}