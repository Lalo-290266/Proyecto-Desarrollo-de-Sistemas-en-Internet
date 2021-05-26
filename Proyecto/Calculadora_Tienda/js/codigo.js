
let productos = [[0,"Galletas","img/oreo.jpg",15],
                [1,"Sabritas","img/sabritas.jpg",13],
                [2,"Agua","img/agua.jpg",10],
                [3,"Chocolate","img/chocolate.jpg",20]];

let carrito=[];

window.addEventListener("load",cargar);

function cargar()
{
    s = document.querySelector('section');
    for(i=0;i<productos.length;i++)
    {
        s.innerHTML+="<div id='"+productos[i][0]+"'>"+
                    "<h1>"+productos[i][1]+"</h1>"+
                    "<img src="+productos[i][2]+"></img>"+
                    "<p class = 'precio'>$"+productos[i][3]+"</p>"+
                    "<button class = 'mas' onclick='agregar("+productos[i][0]+")'>Agregar al carrito</button>"+
                    "</div>"
    }
}

function agregar(id)
{
    carrito.push(id);
    document.querySelector('s').innerHTML=carrito.length;
}

function mostrarCarrito()
{
    let total = 0;
    let listaProductos = "";
    n = document.querySelector('nav');
    n.innerHTML = "<h3 class = 'text'>Lista de productos</h3>"

    for(i=0;i<carrito.length;i++)
    {
        for(j=0;j<productos.length;j++)
        {
            if(productos[j][0]==carrito[i])
            {
                total += productos[j][3]; 

                n.innerHTML+="<div class = 'lista'>"+
                    "<img src="+productos[j][2]+" class = 'img'></img>"+
                    "<p class = 'productos'>"+productos[j][1]+" $"+productos[j][3]+"\n"+"</p>"+
                    "</div>"
            }
        }
    }

    if(carrito.length != 0){
        n.innerHTML+="<div class = 'total_pago'>"+
            "<p class = 'total'><b>Subtotal: $"+total+"</b></p>"+
            "<button class = 'mas pago'>Prodecer al pago</button>"+
            "</div>"
    }else{
         n.innerHTML+="<div><p>Lista vacia</p></div>"
    }
    //alert("Carrito:\n"+listaProductos);
}

function visible()
{
    document.querySelector('nav').classList.toggle("visible");
    document.querySelector('section').classList.toggle("sn");
    mostrarCarrito();
}