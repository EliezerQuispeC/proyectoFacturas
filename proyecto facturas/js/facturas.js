window.addEventListener("load",function(){
	botonVender.addEventListener("click",function(){
		function factura (nroFactura,fecha,cliente,vehiculo,precio){//Se crea el objeto factura y se recibe sus valores nroFactura,etc
			this.nroFactura = document.getElementById("nroFactura");//Se carga el nroFactura recibido en la variable local this.nroFactura
			this.fecha = document.getElementById("fecha");//Se carga la fecha recibida en la variable local this.fecha Igual en los siguientes
			this.cliente = document.getElementById("cliente");
			this.vehiculo = document.getElementById("vehiculo");
			this.precio = document.getElementById("precio");
		}

		var venta = new Array;// Se crea el array venta, que contendrá todas las facturas
		localStorage.setItem("venta", venta);

		function realizarVenta (factura){//Se crea la funcion venta,el cual recibe un objeto factura
			this.factura = factura;//cargamos el objeto factura en un objeto factura local (this.factura)
			if (venta.length < 1){//La primera vez que invoquemos la función se cumplirá esta condición
				venta.push(factura);//Agregamos el objeto factura en nuestro array venta
				alert("La factura se ha registrado correctamente");//Mostramos mensaje de confirmación
				localStorage.setItem("venta", venta);
			}
			else{//Se cumple despues de la primera vez en adelante
				var bandera = true;//Bandera para controlar si agregamos o no la factura
				for (var i = 0; i < venta.length ; i++) {//Recorremos todo el array con la funcion array.length, que nos da el total de elementos del array
					if (venta[i].nroFactura == factura.nroFactura) {//En cada iteración, se compara el nroFactura que queremos ingresar con la factura almacenada en el array según el índice
						alert("No se ingresó la factura");//Si se encuentra una factura con el mismo numero, se muestra el mensaje
						bandera = false;
						break;//Se rompe el ciclo for ya que hemos encontrado una coincidencia
					}
				}
				if (bandera) {//Si la bandera es true
					venta.push(this.factura);//Agregamos la factura en el array
					localStorage.setItem("venta", venta);
					alert("La factura se ha registrado correctamente");//Mensaje de confirmación
				}
			}
		}
	});	
	botonListar.addEventListener("click",function(){
		function listarVenta(){//Creamos la función
			var ventas = localStorage.getItem("venta");
			ventas.forEach(function(element){//Usamos el foreach, al igual que el "for" nos hará recorrer todo el array
				console.log("Nro factura: " + element.nroFactura + " \nFecha: " + element.fecha + "\nNombre cliente: " + element.cliente.nombre + "\nPlaca vehículo: " + element.vehiculo.placa + "\nPrecio: " + element.precio );
			});//En cada iteración se carga un elemento del array en la variable element, luego lo mostramos usando cada atributo del objeto (nroFactura,fecha,etc)
		}
	});	
	botonEditar.addEventListener("click",function(){
		function editarVenta(nroFactura,fecha,cliente,vehiculo,precio){//Creamos la función
			this.nroFactura = document.getElementById("nroFactura");//Cargamos la informacion a modificar en variables locales
			this.fecha = document.getElementById("fecha");
			this.cliente = document.getElementById("cliente");
			this.vehiculo = document.getElementById("vehiculo");
			this.precio = document.getElementById("precio");

			var ventas = localStorage.getItem("venta");
			var bandera = false;//Bandera iniciada en false
			for (var i = 0; i < ventas.length; i++) {//recorremos el array
				if(ventas[i].nroFactura == nroFactura){//En el array, por cada iteracion, comparamos si hay algun nroFactura igual al que queremos modificar
					ventas[i].fecha = fecha;//Si lo encontramos, cambiamos cada valor por los que estan en las variables locales
					ventas[i].cliente = cliente;
					ventas[i].vehiculo = vehiculo;
					ventas[i].precio = precio;
					bandera = true;// Bandera ahora es true
					localStorage.setItem("venta", ventas);
					alert("Se ha modificado la venta");//Mensaje de confirmación
					break;//Se rompe el ciclo, se acaba la iteración
				}
			}
			if (!bandera) {//Si la bandera es false
				alert("No se ha encontrado la factura a modificar");//Mensaje de denegación
			}
		}
	});	
	botonEliminar.addEventListener("click",function(){
		function eliminarVenta(nroFactura){//Creamos la funcion y el funcionamiento es similar al de editar
			this.nroFactura = document.getElementById("nroFactura");//Cargamos el nroFactura, ya que es el dato identificador
			var bandera = false;//Bandera false
			var ventas = localStorage.getItem("venta");
			for (var i = 0; i < ventas.length; i++) {//Recorremos el array
				if(ventas[i].nroFactura == nroFactura){//Comparamos los nroFactura del array con el que queremos borrar
					ventas.splice(i,1);//Si lo encontramos usando la función array.splice(indice,cantidad_a_elimiar) borramos la factura
					bandera = true;
					localStorage.setItem("venta", ventas);
					alert("Se ha eliminado la venta");
					break;
				}
			}
			if (!bandera) {//Si la bandera sigue siendo false
				alert("No se ha encontrado la factura a eliminar");//Mensaje de denegación
			}
		}
	});	
	botonMostrar.addEventListener("click",function(){
		function mostrarDineroRecaudado(){//Creamos la función
			var ventas = localStorage.getItem("venta");
			var dinero = 0;//variable para sumar todo el dinero
			for (var i = 0; i < ventas.length; i++) {//Recorremos el array
				dinero = dinero + ventas[i].precio;//Vamos sumando todos los campos "precio" de cada factura en el array a nuestra variable dinero
			}
			alert("Se ha recaudado : " + dinero);//Mostramos el total
		}
	});
	botonCliente.addEventListener("click",function(){
		function cliente (dni,nombre){//Objeto cliente
			this.dni = document.getElementById("dni"),
			this.nombre = document.getElementById("nombre");
		}
	});
	botonCliente.addEventListener("click",function(){
		function vehiculo (color,placa,tipo,añoDeFabricacion,cilindraje,potencia){//Objeto vehiculo
			this.color = document.getElementById("color");
			this.placa = document.getElementById("placa");
			this.tipo = document.getElementById("tipo");
			this.añoDeFabricacion = document.getElementById("añoDeFabricacion";
			this.cilindraje = document.getElementById("cilindraje");
			this.potencia = document.getElementById("potencia");
		}
	});
		/*
		//Creamos clientes de tipo cliente
		var persona1 = new cliente(76157207,"Eliezer Quispe");
		var persona2 = new cliente(89557432,"Cesar");
		var persona3 = new cliente(43557207,"Brayan");
		//Creamos vehiculos de tipo vehiculo
		var vehiculo1 = new vehiculo("Rojo","V7H-088","Auto",2015,1300,500);
		var vehiculo2 = new vehiculo("Verde","V8H-123","Auto",2015,1300,600);
		var vehiculo3 = new vehiculo("Azul","V9H-456","Auto",2015,1300,700);
		//Creamos facturas de tipo factura
		var factura1 = new factura(4,"19/10/2018",persona1,vehiculo1,10000);
		var factura2 = new factura(2,"20/10/2018",persona2,vehiculo2,20000);
		var factura3 = new factura(3,"21/10/2018",persona3,vehiculo3,30000);
		var factura4 = new factura(2,"19/10/2018",persona1,vehiculo1,40000);
		var factura5 = new factura(1,"19/10/2018",persona1,vehiculo1,50000);
		//Insertamos las facturas creadas en el array "venta" usando la funcion
		realizarVenta(factura1);
		realizarVenta(factura2);
		realizarVenta(factura3);
		realizarVenta(factura4);//Esta factura no ingresa al ya haber otra factura con el nroFactura similar (factura 1)
		realizarVenta(factura5);
		listarVenta();//listamos todas las facturas del array venta
		editarVenta(1,"03/08/1955",persona2,vehiculo3,1000);//Editamos la factura en el array segun el nroFactura
		listarVenta();
		eliminarVenta(1);//eliminamos la factura segun su nroFactura
		listarVenta();
		mostrarDineroRecaudado();//mostramos todo el dinero ganado
		*/
});