import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api1Service } from '../services/api1.service';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router ,private contact:Api1Service) { }

  ngOnInit(): void {
    this.getData();
  }
  user:any;
userData={title:"",class:""}
modifuser:any={id:'',title:'',class:''};
ajouter(){
  this.contact.addcontact(this.userData).subscribe((data:any)=>{
console.log('dataaaa',data);
this.getData()
  })
}
deleted(id:number){
  this.contact.deletecontact(id).subscribe((data:any)=>{
    console.log("delete complete",data);
    this.getData()
  })
}
/*upadate(id:any){
this.router.navigate(["edit",id]);
}*/
modifierid(u:any){
  this.modifuser={id:'',title:'',class:''};
  this.modifuser.id=u.id;
this.modifuser.title=u.title;
this.modifuser.class=u.class;
console.log(  this.modifuser);

}

modif(id:number){
  this.contact.updatecontact(id,this.modifuser).subscribe((data:any)=>{
    console.log("data",data);
    this.getData();
    
  })
}
getData(){
  this.contact.getcontact().subscribe((data: any) => {
    console.log("dataaaa", data);
    //this.user = data.data;
  this.user = data;
  })

}
}
