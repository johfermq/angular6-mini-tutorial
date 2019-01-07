import { Component, OnInit } from '@angular/core';
import { EquipoService } from './../../services/equipo.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit
{
	equipo: Array<any>;

	constructor(private service: EquipoService)
	{
		this.equipo = service.obtenerEquipo()
	}

	ngOnInit() {
	}

}
