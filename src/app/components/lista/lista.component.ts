import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConexionService } from './../../services/conexion.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit, OnDestroy
{
	private subscription: Subscription[] = [];
	items: any;
	editarItem: any = {
		name: ''
	};

  	constructor(private conexion: ConexionService) { }

  	ngOnInit()
  	{
  		this.subscription.push(this.conexion.getLista().subscribe(item => {
	      this.items = item;
	    }));
  	}

  	ngOnDestroy()
  	{
  		this.subscription.forEach(item => {
	      item.unsubscribe();
	    });
  	}

  	eliminar(item)
  	{
      if (confirm('¿Desea eliminar?'))
      {
        this.conexion.eliminarItem(item);
        alert("Eliminado");
      }
  	}

  	editar(item)
  	{
  		this.editarItem = {...item};
  	}

  	actualizar()
  	{
  		if (this.editarItem.name)
  		{
  			this.conexion.actualizarItem(this.editarItem);
  			alert("Actualizado");
  		}
  	}

}
