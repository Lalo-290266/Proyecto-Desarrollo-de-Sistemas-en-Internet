function dia_(){
	document.getElementById('icono_dia').classList.remove('off');
	document.getElementById('icono_dia').classList.add('on');

	document.getElementById('icono_noche').classList.remove('on');
	document.getElementById('icono_noche').classList.add('off');

	//cambio de colores 
	document.getElementById('Contenedor_principal').classList.add('background_principal');
	document.getElementById('Tema').classList.add('background_principal');
	document.getElementById('Operacion').classList.add('color_gris');
	document.getElementById('Resultado').classList.add('color_azul_obscuro');
	//document.getElementById('body').classList.add('background_azul_obscuro');


	let boton = document.querySelectorAll('.botones');
	let op = document.querySelectorAll('.oprecaion');

	for (var i = 0; i < boton.length; i++) {
		if (boton[i].textContent != '=') {
			boton[i].classList.add('color_azul_obscuro');
		}else{
			boton[i].classList.add('background_azul_obscuro');
		}
	}

	for (var i = 0; i < op.length; i++) {
		op[i].classList.add('background_operacion');
	}
}

function noche_(){
	document.getElementById('icono_dia').classList.remove('on');
	document.getElementById('icono_dia').classList.add('off');

	document.getElementById('icono_noche').classList.remove('off');
	document.getElementById('icono_noche').classList.add('on');

	//cambio de colores  
	document.getElementById('Contenedor_principal').classList.remove('background_principal');
	document.getElementById('Tema').classList.remove('background_principal');
	document.getElementById('Operacion').classList.remove('color_gris');
	document.getElementById('Resultado').classList.remove('color_azul_obscuro');
	//document.getElementById('body').classList.remove('background_azul_obscuro');

	let boton = document.querySelectorAll('.botones');
	let op = document.querySelectorAll('.oprecaion');

	for (var i = 0; i < boton.length; i++) {
		if (boton[i].textContent != '=') {
			boton[i].classList.remove('color_azul_obscuro');
		}else{
			boton[i].classList.remove('background_azul_obscuro');
		}
	}

	for (var i = 0; i < op.length; i++) {
		op[i].classList.remove('background_operacion');
	}
}

//Boton de dia
	document.getElementById('icono_dia').onclick = function(){

		let atritubo = document.getElementById('icono_dia');
		let noche = document.getElementById('icono_noche');

		if(atritubo.getAttribute('action') == 'off'){

			atritubo.setAttribute('action', 'on');
			noche.setAttribute('action', 'off');

			dia_();


		}else if(atritubo.getAttribute('action') == 'on'){

			icono_dia.setAttribute('action', 'off');
			noche.setAttribute('action', 'on');

			noche_();
		}

	};

//Boton de noche
	document.getElementById('icono_noche').onclick = function(){

		let dia = document.getElementById('icono_dia');
		let atritubo = document.getElementById('icono_noche');
		
		if(atritubo.getAttribute('action') == 'on'){

			atritubo.setAttribute('action', 'off');
			dia.setAttribute('action', 'on');

			dia_();

		}else if(atritubo.getAttribute('action') == 'off'){

			atritubo.setAttribute('action', 'on');
			dia.setAttribute('action', 'off');

			noche_();
		}

	};

//Opereciones

	document.getElementById('borrar').onclick = function(){

		document.getElementById('Operacion').textContent = '';
		document.getElementById('Resultado').textContent = '';
		punto = 0;
		cont = 0;

	};

function verificar_signos(signo){

	var text = document.getElementById('Operacion').textContent;
	let ultimo_indice = text.length-1;
	let op = false;

		if(    text[ultimo_indice] == '/' 
				|| text[ultimo_indice] == '*'
				|| text[ultimo_indice] == '+' 
				|| text[ultimo_indice] == '-'
				|| text[ultimo_indice] == '.'){

				op = false; 

		}else if(text == ''){

			op = false;

		}else{

			op = true;
		}

	return op;

}

	document.getElementById('div').onclick = function(){

		var text = document.getElementById('Operacion').textContent;

		if(verificar_signos(text)){

			document.getElementById('Operacion').textContent = text + '/';

		}
	};
//--------------------------------------------------------------------------//

	document.getElementById('mul').onclick = function(){

		var text = document.getElementById('Operacion').textContent;

		if(verificar_signos(text)){

			document.getElementById('Operacion').textContent = text + '*';

		}
	};

let cont = 0;

function verificar_signo_menos(text){
	let menos = 0;

	for (var i = 0; i <  text.length; i++) {
		if (text.charAt(i) == '-' ) {
			menos = i;
		}
	}

	for (var i = menos; i < text.length; i++) {
		if (text.charAt(i) == '/' || text.charAt(i) == '*' || 
			text.charAt(i) == '+' || text.charAt(i) == '-') {

				cont = 0; 
		}
	}
}

function verificar_signo_negativo(signo){

	var text = document.getElementById('Operacion').textContent;
	let ultimo_indice = text.length-1;
	let op = false;

		if(    text[ultimo_indice] == '/' 
				|| text[ultimo_indice] == '*'
				|| text[ultimo_indice] == '+'){

				op = true; 

		}else if(text[ultimo_indice] == '-' || text[ultimo_indice] == '.'){

				op = false; 
		}else{
			    op = true;
		}

	return op;

}

	document.getElementById('menos').onclick = function(){

		var text = document.getElementById('Operacion').textContent;

			if(verificar_signo_negativo(text)){
			verificar_signo_menos(text);

			if(cont == 0){
				document.getElementById('Operacion').textContent = text + '-';
				cont = cont + 1;
			}
		}
	};

	document.getElementById('mas').onclick = function(){

		var text = document.getElementById('Operacion').textContent;

		if(verificar_signos(text)){

			document.getElementById('Operacion').textContent = text + '+';

		}


	};

let punto = 0;

function verificar_punto(text){
	let point = 0;

	for (var i = 0; i <  text.length; i++) {
		if (text.charAt(i) == '.' ) {
			point = i;
		}
	}

	for (var i = point; i < text.length; i++) {
		if (text.charAt(i) == '/' || text.charAt(i) == '*' || 
			text.charAt(i) == '+' || text.charAt(i) == '-') {

				punto = 0; 
		}
	}
}

	document.getElementById('punto').onclick = function(){

		var text = document.getElementById('Operacion').textContent;

		if(verificar_signos(text)){
			verificar_punto(text);

			if(punto == 0){
				document.getElementById('Operacion').textContent = text + '.';
				punto = punto + 1;
			}
		}

	};

//Numeros

	function agregar(val){
		let text = document.getElementById('Operacion').textContent;
		document.getElementById('Operacion').textContent = text + val;

		if(text.length >= 2){
			 calcular();
		}
	}

	function calcular(){

		var text = document.getElementById('Operacion');

		if(text != ''){
			document.getElementById('Resultado').textContent = eval(text.innerHTML);		
		}
	}

	function igual(){
		let resultado = document.getElementById('Resultado').textContent;
		document.getElementById('Operacion').textContent = resultado;
		document.getElementById('Resultado').textContent = '';
	}