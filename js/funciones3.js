function cambiarEstado()
{
	let nombre_clase=document.getElementById("parrafo_lorem").className;
	if (nombre_clase=="mostrado")
		{	
			document.getElementById("parrafo_lorem").className="oculto";	
			document.getElementById("parrafo_lorem").style="display:block; color:red";
		}
	else
		{
		
		document.getElementById("parrafo_lorem").className="mostrado";
		document.getElementById("parrafo_lorem").style="color:green";
	}
	
}