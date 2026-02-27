//ejemplo 
const nameInput = document.getElementById('nameInput');
const colorPicker = document.getElementById('colorPicker');
const banner = document.querySelector('.banner');
const displayName = document.getElementById('displayName');
const jobInput=document.getElementById('jobInput')
const displayjob=document.querySelector('.card p');
const fontPicker=document.getElementById('fontPicker');
const card= document.getElementById('profileCard');
const darkModeBtn=document.getElementById('darkModeBtn');




//actualizar el nombre a ingresar 
nameInput.addEventListener('input',(e) => {
	displayName.textContent = e.target.value || "escribe tu nombre aqui"   
});

//actualizar el cargo a ingresar
jobInput.addEventListener('input',(e) => {
	displayjob.textContent =e.target.value || "Desarrollador Wed"
});

//actualizar color de fondo 

colorPicker.addEventListener('input', (e) => {
	banner.style.background = e.target.value;
});

//actualizar el tipo de letra
fontPicker.addEventListener('change',(e)=>{
	card.style.fontFamily=e.target.value;
});

//Modo oscuro
darkModeBtn.addEventListener('click',()=>{
	card.classList.toggle('dark-mode');
});