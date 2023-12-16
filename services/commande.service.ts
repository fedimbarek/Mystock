import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(public http:HttpClient) { }
  
  addcontact(user:any){
    return this.http.post("http://localhost:3002/commande/ajouterCommande",user);
  }
  getcommande(){
    return this.http.get("http://localhost:3002/commande/lister");
  }
  deleteCommande(id:any){
    return this.http.delete("http://localhost:3002/commande/"+id);


  }
}
