function cliente(){
	this.nombre="César";
	this.dni="47550958";
	this.obtenernombre=function(){
		return this.nombre;
	};
	this.obenerDni=function(){
		return this.dni;
	};
	this.cambiarNombre=function(newNombre){
		this.nombre=newNombre;
	};
	this.cambiarDni=function(newDni){
		this.dni=newDni;
	};
}
