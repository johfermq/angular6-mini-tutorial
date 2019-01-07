import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

/**
 * Firebase, todos los modulos
 */
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

/**
 * Servicios
 */
import { EquipoService } from './services/equipo.service';
import { ConexionService } from './services/conexion.service';

/**
 * Componentes
 */
import { AppComponent } from './app.component';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { FirebaseComponent } from './components/firebase/firebase.component';
import { ListaComponent } from './components/lista/lista.component';
import { ListaRegistrarComponent } from './components/lista-registrar/lista-registrar.component';

/**
 * Rutas
 */
const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'tutorial', component: VideojuegosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'equipo/:id', component: EquipoComponent },
  { path: 'firebase', component: FirebaseComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

/**
 * Inicialización
 */
@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent,
    CabeceraComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
    NosotrosComponent,
    EquipoComponent,
    FirebaseComponent,
    ListaComponent,
    ListaRegistrarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    EquipoService,
    ConexionService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
