import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComptemembreService {

  constructor(public http:HttpClient) { }
  getMembre(){
    return this.http.get("http://localhost:3000/signup");
  }
  addAddMembre(user:any){
    return this.http.post("http://localhost:3000/signup",user);
  }
 updateMembre(id: any, user: any){
   return this.http.put("http://localhost:3000/signup/" + id, user);
 }
  deleteMembre(id:any){
    return this.http.delete("http://localhost:3000/signup/"+id);
  }
}
