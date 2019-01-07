import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})

export class VideojuegosComponent implements OnInit
{
	titulo:string;
	year:number;
	juego_2018:string;
	juego_retro:string;
	mostrar_retro:boolean;
	videojuegos:Array<any>; // Array<any>; Cualquier tipo de dato, Array<string>; String en el array

  	constructor ()
  	{
  		this.titulo = 'Video juegos';
	  	this.year = 2018;
	  	this.juego_2018 = 'Pro Evolution Soccer 2019';
	  	this.juego_retro = 'Super Mario Bros';
	  	this.mostrar_retro = false;
	  	this.videojuegos = [
		  	{
				"title": "accusamus beatae ad facilis cum similique",
				"thumbnailUrl": "https://via.placeholder.com/150/92c952"
			},
			{
				"title": "reprehenderit est deserunt velit ipsam",
				"thumbnailUrl": "https://via.placeholder.com/150/771796"
			},
			{
				"title": "officia porro iure quia iusto qui ipsa ut modi",
				"thumbnailUrl": "https://via.placeholder.com/150/24f355"
			},
			{
				"title": "culpa odio esse rerum omnis laboriosam",
				"thumbnailUrl": "https://via.placeholder.com/150/d32776"
			},
			{
				"title": "natus nisi omnis corporis facere",
				"thumbnailUrl": "https://via.placeholder.com/150/f66b97"
			}
	  	];
	  	console.log('Constructor initialised');
  	}

  	// called on demand by Angular, igual a created en Vue una vez se creado la instancia
  	ngOnInit()
  	{
    	console.log('ngOnInit fired');
  	}

  	cambiarJuego()
  	{
  		this.mostrar_retro = !this.mostrar_retro;
  	}

}
