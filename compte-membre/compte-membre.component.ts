import { Component, OnInit } from '@angular/core';
import { ComptemembreService } from '../services/comptemembre.service';

@Component({
  selector: 'app-compte-membre',
  templateUrl: './compte-membre.component.html',
  styleUrls: ['./compte-membre.component.css']
})
export class CompteMembreComponent implements OnInit {

  constructor(public membre:ComptemembreService) { }

  ngOnInit(): void {
    this.getData()
  }
  user:any;
userData={fname:"",lname:"",email:"",tel:"",password:""}
modifuser:any={id:'',fname:'',lname:'',email:"",tel:"",password:""};

ajouter(){
  this.membre.addAddMembre(this.userData).subscribe((data:any)=>{
console.log('dataaaa',data);
this.getData()
  })
}
deleted(id:number){
  this.membre.deleteMembre(id).subscribe((data:any)=>{
    console.log("delete complete",data);
    alert('Compte Supprimé')
    this.getData()
  })
}
/*upadate(id:any){
this.router.navigate(["edit",id]);
}*/
modifierid(u:any){
  this.modifuser={id:'',fname:'',lname:'',email:"",tel:"",password:""};
  this.modifuser.id=u.id;
this.modifuser.fname=u.fname;
this.modifuser.lname=u.lname;
this.modifuser.email=u.email;
this.modifuser.tel=u.tel;
this.modifuser.password=u.password;
console.log(  this.modifuser);

}

modif(id:number){
  this.membre.updateMembre(id,this.modifuser).subscribe((data:any)=>{
    console.log("data",data);
    this.getData();
    
  })
}
getData(){
  this.membre.getMembre().subscribe((data: any) => {
    console.log("dataaaa", data);
    //this.user = data.data;
  this.user = data;
  })

}
}
