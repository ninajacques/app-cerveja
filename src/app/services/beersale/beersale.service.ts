import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class BeersaleService {

  constructor(private firestore: AngularFirestore) { }
  /* create_NewIcecream : Cria um novo registro na coleção especificada usando o método add */
  create_NewUser(record){
  return this.firestore.collection('users').add(record);
  }
  /*read_Icecream: Chama o método snapshotChanges , que obterá registros e também será registrado para receber atualizações */
  read_Users(){
  return this.firestore.collection('users').snapshotChanges();
  }
  /*update_Icecream : atualiza o registro pegando o ID e chamando o método de atualização */
  update_User(recordID,record) {
  this.firestore.doc('users/' + recordID).update(record);
  }
  /*delete_Icecream : chama o método de exclusão  ao registrar o ID*/
  delete_User(record_id) {
  this.firestore.doc('users/' + record_id).delete();
  }
}
