var cliente{
	tipo:"Lamboguini";
	placa:"475958";
	colorv:"amarillo";
	añodefabricacion:2015;
	cilindraje:150;
	potencia:150;
	getTipo : function () {
		return this.tipo;
	},
	getPlaca : function () {
		return this.placa;
	},
	getColorv : function () {
		return this.Colorv;
	},
	getAñodefrabricacion : function () {
		return this.añodefabricacion;
	},
	getCilindraje : function () {
		return this.cilindraje;
	},
	getPotencia : function () {
		return this.potencia;
	},

	setTipo : function (nuevoTipo){
		this.tipo = nuevoTipo;	
	}
	setPlaca : function (nuevoPlaca){
		this.placa = nuevoPlaca;
	},
	setColorv : function (nuevoColorv){
		this.colorv = nuevoColorv;	
	}
	setAñodefabricacion : function (nuevoAñodefabricacion){
		this.añodefabricacion = nuevoAñodefabricacion;
	},
	setCilindraje : function (nuevoCilindraje){
		this.cilindraje = nuevoCilindraje;	
	}
	setPotencia : function (nuevoPotencia){
		this.potencia = nuevoPotencia;
	},
}