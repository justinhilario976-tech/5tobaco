//Ejemplo
const nameInput = document.getElementById('nameInput');
const cargoInput = document.getElementById('cargoInput');
const colorPicker = document.getElementById('colorPicker');
const profileCard = document.getElementById('profileCard');
const banner = document.querySelector('.banner');


//Actualizar el nombre a ingresar
nameInput.addEventListener('input',(e) => {
	displayName.textContent = e.target.value || "escribe tu nombre aqui" 
});

//Actualizar color de fondo
colorPicker.addEventListener('input', (e) => {
	banner.style.backgroundColor = e.target.value;
}); 

//Actualizar cargo
cargoInput.addEventListener('input',(e) => {
	displayCargo.textContent = e.target.value || "escribe tu cargo aqui" 
});

//Cambiar la fuente al elegir
const selector = document.getElementById('fontSelector');
const texto = document.getElementById('texto');

selector.addEventListener('change', (e) => {
  document.body.style.fontFamily = e.target.value;
});

//Modo oscuro
const darkModeBtn = document.getElementById('darkModeBtn');

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});