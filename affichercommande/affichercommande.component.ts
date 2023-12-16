import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-affichercommande',
  templateUrl: './affichercommande.component.html',
  styleUrls: ['./affichercommande.component.css']
})
export class AffichercommandeComponent implements OnInit {
user:any
  constructor(public commande:CommandeService, public http:HttpClient) { }

  ngOnInit(): void {
    this.getproduit();
  }
  getproduit(){
    this.commande.getcommande().subscribe((data: any) => {
      console.log("dataaaa", data.contactList);
      //this.user = data.data;
    this.user = data.contactList;
    })
  
  }
  /*deleted(id:any){
    this.commande.deleteCommande(id).subscribe((data:any)=>{
      console.log("delete complete",data);
      this.getproduit()
    })*/
    deleted(data:any){
      this.http.delete("http://localhost:3002/commande"+"/"+data._id).subscribe((resultData:any)=>{
        console.log("delete complete"+resultData);
        alert("delete commande");
        this.getproduit();
      })
      
      
}
}
