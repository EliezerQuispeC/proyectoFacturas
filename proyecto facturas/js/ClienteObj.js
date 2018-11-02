	var cliente{
	nombre:"César",
	dni:"47550958",
	getNombre : function () {
		return this.nombre;
	},
	getDni : function () {
		return this.dni;
	},

	setNombre : function (nuevoNombre){
		this.nombre = nuevoNombre;	
	}
	setDni : function (nuevoDni){
		this.dni = nuevoDni;
	},
}