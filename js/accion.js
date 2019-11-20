var boton=document.getElementsByTagName("button")[0];
boton.onclick=ocultar;
var turno=true;
var conte=document.getElementsByTagName("div");
var puntoX=0;
var puntoO=0;

function ocultar()
	{
		var modal=document.getElementsByClassName("modal")[0];
		modal.className+=" oculto";
		///Este ciclo for borra todo el contenido del tablero, agrega la funcion click y remueve la clase del div.
		for(i=0; i<conte.length; i++)
			{
				conte[i].innerHTML="";
				conte[i].setAttribute("onclick","escribir("+i+")");
				conte[i].className="";
			}
		///modal.className="modal oculto";
		bonton.setAttribute("onclick","ocultar()")
	}

function mostrar()
	{
		var modal=document.getElementsByClassName("modal")[0];
		modal.className="modal";
	}
/*
conte[0].setAttribute("onclick","escribir(0)");
conte[1].setAttribute("onclick","escribir(1)");
conte[2].setAttribute("onclick","escribir(2)");
conte[3].setAttribute("onclick","escribir(3)");
conte[4].setAttribute("onclick","escribir(4)");
conte[5].setAttribute("onclick","escribir(5)");
conte[6].setAttribute("onclick","escribir(6)");
conte[7].setAttribute("onclick","escribir(7)");
conte[8].setAttribute("onclick","escribir(8)");*/
///conte[0].onclick=function(){escribir(0);};

function escribir(num)
	{
		var h2=document.createElement("h2");
		if(turno==true)
			{
				h2.innerHTML="X";
				h2.className="X";
				turno=false;
			}
		else
			{
				h2.innerHTML="O";
				h2.className="O";
				turno=true;
			}
			
		conte[num].appendChild(h2);
		conte[num].className="elegido";
		//conte[num].setAttribute("onclick","");
		conte[num].removeAttribute("onclick");
		ganar();
	}

function ganar()
	{
		if(conte[0].innerHTML!="" && conte[1].innerHTML!="" && conte[2].innerHTML!="" && conte[3].innerHTML!="" && conte[4].innerHTML!="" && conte[5].innerHTML!="" && conte[6].innerHTML!="" && conte[7].innerHTML!="" && conte[8].innerHTML!="")
			{
				var modal=document.getElementsByTagName("section")[0];
				modal.childNodes[0].innerHTML="Empate!!!";
				modal.childNodes[2].innerHTML="Jugar otra!";	
				mostrar();
			}

		if (conte[0].innerHTML!="" && conte[0].innerHTML==conte[1].innerHTML && conte[0].innerHTML==conte[2].innerHTML)
			{
				var vence=conte[0].firstChild.innerHTML;
				punto(vence);
				
			}
		if (conte[3].innerHTML!="" && conte[3].innerHTML==conte[4].innerHTML && conte[3].innerHTML==conte[5].innerHTML)
			{
				var vence=conte[3].firstChild.innerHTML;
				punto(vence);
				
			}

		if (conte[6].innerHTML!="" && conte[6].innerHTML==conte[7].innerHTML && conte[6].innerHTML==conte[8].innerHTML)
			{
				var vence=conte[6].firstChild.innerHTML;
				punto(vence);
				
			}

		if (conte[0].innerHTML!="" && conte[0].innerHTML==conte[3].innerHTML && conte[0].innerHTML==conte[6].innerHTML)
			{
				var vence=conte[0].firstChild.innerHTML;
				punto(vence);
				
			}

		if (conte[1].innerHTML!="" && conte[1].innerHTML==conte[4].innerHTML && conte[1].innerHTML==conte[7].innerHTML)
			{
				var vence=conte[1].firstChild.innerHTML;
				punto(vence);
				
			}

		if (conte[2].innerHTML!="" && conte[2].innerHTML==conte[5].innerHTML && conte[2].innerHTML==conte[8].innerHTML)
			{
				var vence=conte[2].firstChild.innerHTML;
				punto(vence);
				
			}

		if (conte[0].innerHTML!="" && conte[0].innerHTML==conte[4].innerHTML && conte[0].innerHTML==conte[8].innerHTML)
			{
				var vence=conte[0].firstChild.innerHTML;
				punto(vence);
				
			}

		if (conte[2].innerHTML!="" && conte[2].innerHTML==conte[4].innerHTML && conte[2].innerHTML==conte[6].innerHTML)
			{
				var vence=conte[2].firstChild.innerHTML;
				punto(vence);
				
			}
	}

function punto(anotar)
	{
		h1=document.getElementsByTagName("h1");
		if(anotar=="X")
			{
				puntoX+=1;
				h1[0].innerHTML="X:"+puntoX;
			}
		else
			{
				puntoO+=1;
				h1[1].innerHTML="O:"+puntoO;
			}

		var modal=document.getElementsByTagName("section")[0];

		if(puntoX<5 && puntoO<5)
			{		
				modal.childNodes[0].innerHTML="Gano "+anotar+"!!!";
				modal.childNodes[2].innerHTML="Jugar otra!";		
			}
		else
			{
				modal.childNodes[0].innerHTML="Campeon denitivo "+anotar+"!!!";
				modal.childNodes[2].innerHTML="Reiniciar!";
				modal.childNodes[2].setAttribute("onclick", "reiniciar()");
			}
	
		mostrar();
	}

function reiniciar()
		{
			puntoX=0;
			puntoO=0;
			h1=document.getElementsByTagName("h1");
			h1[0].innerHTML="X:";
			h1[1].innerHTML="O:";
			ocultar();
		}