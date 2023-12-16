import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../services/commande.service';
import { Api1Service } from '../services/api1.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  constructor(public commande:CommandeService , public prix:Api1Service, public http:HttpClient) { }
user:any
produit:any
produit1={egges:""}
value1: string = '';
  value2: string = '';
  sum: number = 0;

  calculateSum() {
     this.sum = parseInt(this.value1) * parseInt(this.value2);
  }
userData={name:"",email:"",numero:"",quantite:"",message:"",nameproduit:""}
  ngOnInit(): void {
    this.getpeiement()
    this.getprix()
  }
  getpeiement(){
    this.commande.getcommande().subscribe((data: any) => {
      console.log("dataaaa", data.contactList);
      //this.user = data.data;
    this.user = data.contactList;
    })
    
  }
  getprix(){
    this.prix.getproduit().subscribe((data:any)=>{
      console.log("data",data)
      this.produit=data
    })
  }
  deleted(data:any){
    this.http.delete("http://localhost:3002/commande"+"/"+data._id).subscribe((resultData:any)=>{
      console.log("delete complete"+resultData);
      alert("delete commande");
      this.getpeiement();
    })
    
  
  
  
  
  }
  

  
  
}
