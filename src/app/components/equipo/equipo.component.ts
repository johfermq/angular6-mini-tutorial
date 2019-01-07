import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from './../../services/equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

	miembro: Array<any>;

	constructor(
		private route: ActivatedRoute,
		private service: EquipoService
	)
	{
		this.route.params.subscribe(params =>
		{
			this.miembro = this.service.obtenerMiembro(params['id']);
		})
	}

	ngOnInit() {
	}

}
