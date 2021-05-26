window.onscroll = function() {
  
  let header = document.querySelector('.titulo');

  if(window.scrollY > 10){

  		header.classList.add('minimizar');

  }else{
  		header.classList.remove('minimizar');
  		header.classList.add('efecto');
  }
};

function pagina(index){
	let url = ["Interfaz TW/index.html", "DISNEY+/index.html" , "Conciertos/index.html",
				"Calculadora_Tienda/Calculadora.html", "Calculadora_Tienda/Carrito_compras.html",
				"Flexbox/index.html"];

	window.open(url[index]);
};

