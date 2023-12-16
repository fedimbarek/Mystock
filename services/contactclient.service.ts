import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactclientService {

  constructor(public http:HttpClient) { }
  addcontact(user:any){
    return this.http.post("http://localhost:3002/commande/ajoutercontact",user);
  }
  getcontact(){
    return this.http.get("http://localhost:3002/commande/listercontact");
  }
}
