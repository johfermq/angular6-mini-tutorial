import { Component, OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})

export class FirebaseComponent implements OnInit {

	// items: Observable<any[]>;

  	constructor(/*db: AngularFirestore*/)
  	{
  		// this.items = db.collection('items').valueChanges();
  	}

  	ngOnInit() {
  	}

}
