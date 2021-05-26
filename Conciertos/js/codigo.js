function mostrar_menu(index){

	let icono = document.querySelectorAll('.flecha');
	let menu = document.querySelectorAll('.ciudades');
	let contenedor = document.querySelectorAll('.contprincipal');


		icono[index].classList.toggle("fa-chevron-down");
		icono[index].classList.toggle("fa-chevron-up");

		menu[index].classList.toggle("ocultar");
		contenedor[index].classList.toggle("margen");
}

function menu_movil(){

	let  menu = document.querySelector('.menu-lado');

	menu.classList.toggle("mostrar");
}
