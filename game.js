class SoccerGame{

	constructor(width, height){
// AUDIO
      // https://www.w3schools.com/html/html5_audio.asp
      // https://boluda.com/curso/javascript-para-html5/4-reproductor-audio/
      //          File Format Media Type  MP3 audio/mpeg
     // ???? this.audio = document.getElementById('audio1');


     /* Meterlo en el index y llamarlo aqui desde un document.getElementById
      <video width="400" >
        <source src="mov_bbb.mp4" type="video/mp4">
        browser does not support HTML5 video.
      </video>

     */
    // Audio GOL
    var audio_publico = document.getElementById("publico"); 
    audio_publico.play();

		// Establecemos las variables en el objeto
		this.width = width;
		this.height = height;
    
    // Objeto pelota
    this.obj_pelota = {x:490, y:235};
    
    this.tiene_pelota = false;  // inicicializamos tener pelota a false

		// Pasamos el elemento HTML <canvas> a una variable
		// Es el HTML con las opciones del HTML (altura, estatura, css...)
		this.canvasHTML = document.getElementById("juego");

    //this.audio_gol = document.getElementById("gol_audio");
    //this.video_gol = document.getElementById("gol_video")

		// Es el objeto CANVAS con todas las funciones de los juegos (pintar, etc.)
		this.canvas = this.canvasHTML.getContext("2d");
		
		 this.canvasHTML.width = this.width;
		 this.canvasHTML.height = this.height;
		  
		// Pintamos fondo
		this.fondo();

    this.porterias();
		// Cargamos la pelota
    this.pelota();


    

  

	}

	fondo(){

   
			// PINTAMOS EL FONDO


		this.canvas.fillStyle="#00B950"; // Ponemos el pincel de color verde (fillStyle)
		this.canvas.fillRect(0,0, this.width, this.height); // Hacemos un cuadrado que lo ocupe todo

		// Hacemos las porterías
		    this.canvas.strokeStyle = "#FFFFFF"; // color blanco
			// Teniendo en cuenta width y altura
			this.canvas.lineWidth = 2;
			this.canvas.strokeRect(50, 155, 40, 160); // Area pequeña izquierda
			this.canvas.strokeRect(50, 100, 80, 270); // Area grande izquierda
			// línea portería izq
  			this.canvas.beginPath();
			this.canvas.moveTo(50,600); // izq/der - arriva/abajo    Tamaño de la línea
			this.canvas.lineTo(50, 0); // izq/der  -  arriva
			this.canvas.stroke();

			this.canvas.strokeRect(910, 155, 40, 160); // Area pequeña derecha
			this.canvas.strokeRect(870, 100, 80, 270); // Area grande derecha
			// línea portería der
  			this.canvas.beginPath();
			this.canvas.moveTo(950,600); // izq/der - arriva/abajo    Tamaño de la línea
			this.canvas.lineTo(950, 0); // izq/der  -  arriva
			this.canvas.stroke();


			// Circulo central
			this.canvas.beginPath();
 				 this.canvas.arc(500, 250, 80, 0, Math.PI * 2, false);
  					this.canvas.stroke();

  			// línea central
  			this.canvas.beginPath();
			this.canvas.moveTo(500,600); // izq/der - arriva/abajo    Tamaño de la línea
			this.canvas.lineWidth = 2;
			this.canvas.lineTo(500, 0); // izq/der  -  arriva
			this.canvas.stroke();

     

     
	}

  porterias(){
    // Ponemos las porterias
       var url_izq = "images/porteria_izq.png";
       var url_der = "images/porteria_der.png";
       var new_image_izq = new Image();
       var new_image_der = new Image();
       new_image_izq.src = url_izq;
       new_image_der.src = url_der;
       
     
          this.canvas.drawImage(new_image_izq, -5, 190);

    //    this.canvas.drawImage(new_image_der, 951, 190);
          new_image_izq.addEventListener('load', function(){  // Precargamos la imagen
            juego.canvas.drawImage(new_image_izq, -5, 190);
          });              //     IMPORTANTE, si le quitas los valores 0,0,180,330 fijate que ocurre

          new_image_der.addEventListener('load', function(){  // Precargamos la imagen
            juego.canvas.drawImage(new_image_der, 951, 190);
          });              //     IMPORTANTE, si le quitas los valores 0,0,180,330 fijate que ocurre

       
  }
  
  jugador(url_de_la_imagen, x, y){
    
    var datos = {}; // la variable datos ahora es un objeto
    
    this.count_pasos = 0; // inicializo a 0 los movimientos de los pasos en los jugadores, sigue en línea 173 pintar_jugador(objeto_jugador)
    
    datos.x = x;
    datos.y = y;
    datos.url_imagen = url_de_la_imagen;
    datos.movimiento = false;
    datos.count_pasos = 0;

    // Cargamos la imagen en memoria
		var new_image = new Image(); // dentro de Image(150, 150); le podria definir el tamaño de la imagen pero ahora no me interesa <img src="...">
		new_image.src = url_de_la_imagen;

    // Ya tengo el objeto image() del jugador
    datos.imagen = new_image;  // .imagen aparece en la linea 175

		   // https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage
       //void ctx.drawImage(image, dx, dy);
      new_image.addEventListener('load', function(){  // Precargamos la imagen
        juego.canvas.drawImage(new_image,0,0,180,330, x, y, 80, 80); // Dibuja la imagen cogiendo la variable uri_imagen y con los valores X , Y
      });              //     IMPORTANTE, si le quitas los valores 0,0,180,330 fijate que ocurre


   // console.log("Procesando imagen");

    //console.log(datos);
    return datos;

	}

  pelota(){

		// this.x=470; // posiciono pelota
		// this.y=230; // posiciono pelota
   		
    // Ponemos la imagen de una pelota
   	this.uri_imagen_pelota = new Image(); // dentro de Image(150, 150); le podria definir el tamaño de la imagen pero ahora no me interesa
		this.uri_imagen_pelota.src = "images/balon.png"; // A la variable uri_imagen utilizo el SRC para poder pasarle una imagen mediante un String a través del objeto
    this.uri_imagen_pelota.addEventListener('load', function(){  // Precargamos la imagen
		  juego.canvas.drawImage(juego.uri_imagen_pelota, juego.obj_pelota.x, juego.obj_pelota.y, 20,20); // Dibuja la imagen de la pelota y le añado el 20x20 para hacerla más pequeña
    });
  }
// 2º XXX
  mover_jugador(id_jugador, direccion){

  		if(id_jugador == "jugador1"){
    	switch(direccion){
  			case "izquierda":
        this.tiene_pelota = false;
  			juego.jugador1.x = juego.jugador1.x - 5;
   			break;

  			case "derecha":
  			juego.jugador1.x = juego.jugador1.x + 5;
    		break;

  			case "arriva": 
          if(this.tiene_pelota == true){  // si tengo la petota será un TRUE y la pelota subirá con el jugador
            juego.jugador1.y = juego.jugador1.y - 5;
            juego.obj_pelota.y = juego.obj_pelota.y -5;
            
          }else{ 
            juego.jugador1.y = juego.jugador1.y - 5; // si no solo subirá el jugador
           }

        break;

  			case "abajo":
  			  if(this.tiene_pelota == true){  // si tengo la petota será un TRUE
            juego.jugador1.y = juego.jugador1.y + 5;
            juego.obj_pelota.y = juego.obj_pelota.y +5;
            
          }else{ 
            juego.jugador1.y = juego.jugador1.y + 5;
           }
  			break;

        case "chute_izq": 
        if(this.tiene_pelota == true){  // si tengo la petota será un TRUE
            juego.obj_pelota.x = juego.obj_pelota.x + 80; // control pelota + 80
            this.tiene_pelota = false;
          }
        break;
  		}
  	}
  	else{
  		switch(direccion){
  			case "izquierda":
  			juego.jugador2.x = juego.jugador2.x - 5;
   			break;
  			case "derecha":
        this.tiene_pelota = false;
  			juego.jugador2.x = juego.jugador2.x + 5;
  			break;
  			case "arriva": 
  			
          if(this.tiene_pelota == true){  // si tengo la petota será un TRUE
            juego.jugador2.y = juego.jugador2.y - 5;
            juego.obj_pelota.y = juego.obj_pelota.y -5;
            
          }else{ 
            juego.jugador2.y = juego.jugador2.y - 5;
           }
  			break;
  			case "abajo":   			
          if(this.tiene_pelota == true){  // si tengo la petota será un TRUE
            juego.jugador2.y = juego.jugador2.y + 5;
            juego.obj_pelota.y = juego.obj_pelota.y +5;
            
          }else{ 
            juego.jugador2.y = juego.jugador2.y + 5;
           }
   			break;
        case "chute_der":
        if(this.tiene_pelota == true){  // si tengo la petota será un TRUE
            juego.obj_pelota.x = juego.obj_pelota.x - 80; // control pelota - 80
            this.tiene_pelota = false;
          }
        break;
  		}
  	}

   // Comprobar si tenemos que chutar
  this.comprobar_chutar();

  // ejecuta la función repintar()
  this.repintar();

  }
  
  // Le pasamos el objeto del jugador y nos lo pinta, puesto que tiene los datos, x, y, imagen, etc.
  pintar_jugador(objeto_jugador){
   console.log(objeto_jugador);

  var sprite_array=[
      {x:0,y:0,width:180,height:330},  // La imagen tiene una longitud de X:180  Y:330 por eso le pongo width:180,height:330
      {x:180,y:0,width:180,height:330},
      {x:365,y:0,width:180,height:330}
    ];
  // Pintamos al jugador
  //this.canvas.drawImage(objeto_jugador.imagen, objeto_jugador.x, objeto_jugador.y, 50, 50);
  
   this.canvas.drawImage(objeto_jugador.imagen,                     // imagen jugador
                          sprite_array[objeto_jugador.count_pasos].x,         // empieza a cortar por aquí X
                          sprite_array[objeto_jugador.count_pasos].y,         // acaba de cortar por aquí  Y
                          sprite_array[objeto_jugador.count_pasos].width,     // ancho imagen recortada
                          sprite_array[objeto_jugador.count_pasos].height,    // alto imagen recortada
                          objeto_jugador.x,                         // coloca posición X aquí de la imagen
                          objeto_jugador.y,                         // coloca posición Y aquí de la imagen
                          80,                                      // estira a 150 la imagen
                          80);                                     // alarga a 150 la imagen
   
   if (objeto_jugador.count_pasos == (sprite_array.length-1)){
    objeto_jugador.count_pasos = 0;        // en la línea 32 inicializo a 0 el count_pasos
   }else{
    if(objeto_jugador.movimiento == true){
      objeto_jugador.count_pasos++;
    }
   }
  }

  repintar(){

    // repintar el fondo
    this.fondo();
  //  console.log("repintado el fondo");
  
    this.porterias();

       

    // repintar la pelota
    this.pelota();
  //  console.log("pelota repintada");

    // pintar a los jugadores
    this.pintar_jugador(this.jugador1);
    this.pintar_jugador(this.jugador2);

      
    
  }
  
  comprobar_chutar(){
    // Jugador 1
    
    // Tenemos que comprobar que la pelota this.obj_pelota.x this.obj_pelota.y está cerca del jugador 1
    
 var posicion_pelota_actual_x = juego.obj_pelota.x; // 470 seria la posición inicial de juego.obj_pelota.x
 var posicion_pelota_actual_y = juego.obj_pelota.y; // 470 seria la posición inicial de juego.obj_pelota.y
 var posicion_jugador1_actual_x = juego.jugador1.x+15; // tambien lo puedo hacer así  this.jugador1.x+15    es la distancia entre la pierna y la pelota cuando se controla el balón
 var posicion_jugador1_actual_y = juego.jugador1.y+55; // tambien lo puedo hacer así  this.jugador1.y+62    es la distacia de altura entre en cuerpo y el balón 
 var posicion_jugador2_actual_x = juego.jugador2.x+15; // tambien lo puedo hacer así  this.jugador2.x+25
 var posicion_jugador2_actual_y = juego.jugador2.y+55; // tambien lo puedo hacer así  this.jugador2.y+62


       // Jugador 1
      if (posicion_jugador1_actual_x  == posicion_pelota_actual_x){                                       // == comparación si jugador 1 esta en la misma posición que la pelota
        if (posicion_jugador1_actual_y == posicion_pelota_actual_y){  // Si el jugador está encima de la pelota
          this.tiene_pelota = true; // tiene pelota porque está dentro de la condición correcta

            juego.obj_pelota.x = juego.obj_pelota.x + 20; // control pelota + 30
    
           
        }    
      }
      // Si jugador1 chuta fuera de la porteria será saque de puerta
     if(juego.obj_pelota.x > 940){
        if(juego.obj_pelota.y <= 180 || juego.obj_pelota.y >= 260){
        	// Metemos pelota en la línea de puerta y los jugadores en su sítio

             this.obj_pelota = {x:850, y:150};
              // Jugador 1
              juego.jugador1 = juego.jugador("images/jug1.png", 560, 200);
              // Jugador 2
              juego.jugador2 = juego.jugador("images/jug2.png", 860, 95);
              

        }
     }

      // Si jugador2 chuta fuera de la porteria será saque de puerta
     if(juego.obj_pelota.x < 40){
        if(juego.obj_pelota.y <= 180 || juego.obj_pelota.y >= 260){
        	// Metemos pelota en la línea de puerta y los jugadores en su sítio

             this.obj_pelota = {x:80, y:150};
              // Jugador 1
              juego.jugador1 = juego.jugador("images/jug1.png", 20, 95);
              // Jugador 2
              juego.jugador2 = juego.jugador("images/jug2.png", 560, 200);
              

        }
     }
     // JUGADOR 1
     // Aqui metemos el GOL y PALO jug1  BIEL
      if(juego.obj_pelota.x > 940){
        if(juego.obj_pelota.y >= 190 && juego.obj_pelota.y <= 255){
             
            // Si marca gol ponemos la pelota y los jugadores en la posición inicial

             this.obj_pelota = {x:490, y:235};
              // Jugador 1
              juego.jugador1 = juego.jugador("images/jug1.png", 360, 200);
              // Jugador 2
              juego.jugador2 = juego.jugador("images/jug2.png", 560, 200);
             
                      // Video GOL      
        			var vid_gol1 = document.getElementById("video_jug1_gol"); 
        	        vid_gol1.play();

        	           // Audio GOL
        			var audio_gol = document.getElementById("audio_jug_gol"); 
        			audio_gol.play();
		    }


        if(juego.obj_pelota.y == 185 && juego.obj_pelota.x >= 935 ){

        	// Si chuta al palo, la pelota se sale rebotada
             this.obj_pelota = {x:690, y:135};
              
              // Video PALO
              var vid_palo1 = document.getElementById("video_palo1"); 
              vid_palo1.play();
              
        }
      } 




      // JUGADOR 2
      if (posicion_jugador2_actual_x  == posicion_pelota_actual_x ){  // == comparación si jugador 2 esta en la misma posición que la pelota 
        if (posicion_jugador2_actual_y == posicion_pelota_actual_y){
          this.tiene_pelota = true; // tiene pelota
          juego.obj_pelota.x = juego.obj_pelota.x - 30; // control pelota - 30
        }    
      }
      // Aqui metemos el GOL jug2   PAU
      if(juego.obj_pelota.x < 40){
        if(juego.obj_pelota.y >= 190 && juego.obj_pelota.y <= 255){
               // Si marca gol ponemos la pelota y los jugadores en la posición inicial

             this.obj_pelota = {x:490, y:235};
              // Jugador 1
              juego.jugador1 = juego.jugador("images/jug1.png", 360, 200);
              // Jugador 2
              juego.jugador2 = juego.jugador("images/jug2.png", 560, 200);

               // Video GOL
              var vid_gol2 = document.getElementById("video_jug2_gol"); 
              vid_gol2.play();

              // Audio GOL
              var audio_gol = document.getElementById("audio_jug_gol"); 
              audio_gol.play();
             
        }
        if(juego.obj_pelota.y == 185 && juego.obj_pelota.x <= 45 ){

        	// Si chuta al palo, la pelota se sale rebotada
             this.obj_pelota = {x:290, y:135};

              // Video PALO
              var vid_palo2 = document.getElementById("video_palo2"); 
              vid_palo2.play();
        }
      }
  
  } // Fin comprobar_chutar()
  
  chutar_balon(direccion){
    //Direccion: derecha, izquierda, arriba, abajo
    
    //    juego.obj_pelota.x = juego.obj_pelota.x + 150; // chute pelota + 150
    //    juego.obj_pelota.x = juego.obj_pelota.x - 150; // chute pelota + 150
    // alert("VOY A CHUTAR EL BALÓN");
  }
}


// Evento tecla
document.onkeydown = function(e){
	e = e || window.event;  // esta línea se pone por temas de compatibilidad

	//console.log(e.keyCode); // con el console.log puedo averiguar que núm tiene asignada cada tecla

	if (e.keyCode == '37'){  // tecla izquierda
		juego.mover_jugador("jugador2", "izquierda");
    juego.jugador1.movimiento = false;
    juego.jugador2.movimiento = true;
	}
	if (e.keyCode == '39'){   // tecla derecha
		juego.mover_jugador("jugador2", "derecha");
    juego.jugador1.movimiento = false;
    juego.jugador2.movimiento = true;
	}
	if (e.keyCode == '38'){  // tecla arriva  pendiente añadir en la funcion carga_fondo(mov_pixel)
		juego.mover_jugador("jugador2", "arriva");
    juego.jugador1.movimiento = false;
    juego.jugador2.movimiento = true;
	}
	if (e.keyCode == '40'){   // tecla abajo  pendiente añadir en la funcion carga_fondo(mov_pixel)
		juego.mover_jugador("jugador2", "abajo");
    juego.jugador1.movimiento = false;
    juego.jugador2.movimiento = true;
	}
	if (e.keyCode == '65'){  // tecla A (izq)  pendiente añadir en la funcion carga_fondo(mov_pixel)
		juego.mover_jugador("jugador1", "izquierda");
    juego.jugador2.movimiento = false;
    juego.jugador1.movimiento = true;
	}
	if (e.keyCode == '87'){   // tecla W (arriba)  pendiente añadir en la funcion carga_fondo(mov_pixel)
		juego.mover_jugador("jugador1", "arriva");
    juego.jugador2.movimiento = false;
    juego.jugador1.movimiento = true;
	}
	if (e.keyCode == '68'){  // tecla D (derecha)  pendiente añadir en la funcion carga_fondo(mov_pixel)
		juego.mover_jugador("jugador1", "derecha");
    juego.jugador2.movimiento = false;
    juego.jugador1.movimiento = true;
	}
	if (e.keyCode == '83'){   // tecla S (abajo)  pendiente añadir en la funcion carga_fondo(mov_pixel)
		juego.mover_jugador("jugador1", "abajo");
    juego.jugador2.movimiento = false;
    juego.jugador1.movimiento = true;
	}
  if (e.keyCode == '16'){  // tecla SHIFT (chute jug der PAU) pendiente añadir en la funcion carga_fondo(mov_pixel)
    juego.mover_jugador("jugador2", "chute_der");
    juego.jugador1.movimiento = false;
    juego.jugador2.movimiento = true;
    console.log("Chute derecha");
  }
  if (e.keyCode == '88'){   // tecla X (chute jug izq BIEL  pendiente añadir en la funcion carga_fondo(mov_pixel)
    juego.mover_jugador("jugador1", "chute_izq");
    juego.jugador2.movimiento = false;
    juego.jugador1.movimiento = true;
    console.log("chute izquierda");
  }
	
}


window.onload = function(){
	juego = new SoccerGame(1000,500);

  // Jugador 1
  juego.jugador1 = juego.jugador("images/jug1.png", 360, 200);
  // Jugador 2
  juego.jugador2 = juego.jugador("images/jug2.png", 560, 200);




}


