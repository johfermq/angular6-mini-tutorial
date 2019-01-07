import { Component, OnInit } from '@angular/core';
import { ConexionService } from './../../services/conexion.service';

@Component({
  selector: 'app-lista-registrar',
  templateUrl: './lista-registrar.component.html',
  styleUrls: ['./lista-registrar.component.css']
})

export class ListaRegistrarComponent implements OnInit
{
	item: any = {
		name: ''
	}

	constructor(private conexion: ConexionService)
	{
	}

  	ngOnInit() {
  	}

  	registrar()
  	{
  		if (this.item.name)
  		{
  			this.conexion.registrarItem(this.item);
  			this.item.name = '';
        alert("Registrado");
  		}
  	}

}
