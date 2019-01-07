import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string; }
// export interface ItemId extends Item { id: string; }

@Injectable({
  providedIn: 'root'
})

export class ConexionService
{
	private itemsCollection: AngularFirestoreCollection<Item>;
	private itemDoc: AngularFirestoreDocument<Item>;
  	items: Observable<Item[]>; // Observable<ItemId[]>;

  	constructor(private angularFirestore: AngularFirestore)
  	{
  		this.itemsCollection = angularFirestore.collection<Item>('items');

    	this.items = this.itemsCollection.snapshotChanges().pipe(
	    	map(actions => actions.map(action =>
	    	{
	        	const data = action.payload.doc.data() as Item;
	        	const id = action.payload.doc.id;
	        	return { id, ...data };
	      	}))
	    );
  	}

  	getLista() {
  		return this.items;
  	}

  	registrarItem(item: Item)
  	{
	    this.itemsCollection.add(item);
	}

	eliminarItem(item)
	{
		this.itemDoc = this.angularFirestore.doc<Item>(`items/${item.id}`);
		this.itemDoc.delete();
	}

	actualizarItem(item)
	{
		this.itemDoc = this.angularFirestore.doc<Item>(`items/${item.id}`);
		this.itemDoc.update(item);
	}

}
