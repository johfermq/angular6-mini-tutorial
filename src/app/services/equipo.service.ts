import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

	equipo: Array<any>;

	constructor()
	{
		this.equipo = [
			{
				nombre: 'Fernando',
				especialidad: 'PHP',
				descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere illum officia optio voluptate magni fugit, animi exercitationem, consequatur ipsam quod quidem repellendus amet, rerum temporibus dolore iusto in eius! Numquam.'
			},
			{
				nombre: 'Sara',
				especialidad: 'CSS',
				descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tenetur nulla repudiandae fugit, possimus magni asperiores? Sequi beatae dolorum ducimus iusto, ex repellendus voluptas laudantium. Aliquam tempore, id itaque deleniti!'
			}
		];
	}

	obtenerEquipo()
	{
		return this.equipo;
	}

	obtenerMiembro(i)
	{
		return this.equipo[i];
	}
}
