import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api1Service {

  constructor(private http:HttpClient) { }
   /*getcontact(){
   return this.http.get('http://tp1.test/api/courses');
 }*/
  getcontact(){
    return this.http.get("http://localhost:3000/fedi");
  }
  addcontact(user:any){
    return this.http.post("http://localhost:3000/fedi",user);
  }
 updatecontact(id: any, user: any){
   return this.http.put("http://localhost:3000/fedi/" + id, user);
 }
  deletecontact(id:any){
    return this.http.delete("http://localhost:3000/fedi/"+id);
  }
  getproduit(){
    return this.http.get("http://localhost:3000/paiement");
  }
}
