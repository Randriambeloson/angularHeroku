import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {OffreServiceService} from '../offreService/offre-service.service';
import { Router, RouterLink , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  listeTypeOffre =[];
  listeType = [];
  idOffre = "";
  nomOffre = "";
  detailsOffre = "";
  prixOffre = "";
  validiteOffre ="";
  uniteValidite= "";
  typeOffre="";
  quantiter="";
  heureDebut = "00:00"
  heureFin = "23:59";
  listeOffre : any;
  listeUnite : [];
  message : any;
  update = false;
  
  constructor(private http : HttpClient , private OffreService:OffreServiceService , private router:Router, private route : ActivatedRoute ) { 
    
  }

  async ngOnInit(): Promise<void>{
    this.route.queryParams.subscribe(async params =>{ if(params["id"]!=null && params["id"]!=undefined) {this.update=true; await this.getOffreById(params["id"]);}});
    await this.getAllOffre();
    await this.getAllUnite();
    await this.getAllType();
    
  }

  async insertOffre() {
    await this.OffreService.insertOffre_service(this.nomOffre , this.prixOffre , this.validiteOffre , this.uniteValidite , this.listeTypeOffre).then(data=>{
      if(data.status==500) {
        this.message = data.message;
      }
      else{
        this.nomOffre="";
        this.prixOffre="";
        this.validiteOffre="";
        this.uniteValidite='1';
        this.router.navigate(['../listeOffre']);
      }

    })
      
    
  }

  async UpdateOffre() {
    await this.OffreService.UpdateOffre_service(this.nomOffre , this.prixOffre , this.validiteOffre , this.uniteValidite , this.idOffre).subscribe(data=>{
      this.nomOffre="";
      this.prixOffre="";
      this.validiteOffre="";
      this.uniteValidite='1';
      this.message = data.message;
      this.router.navigate(['/listeOffre']);

    } , (error) => {this.message = error.error.message;});
  }

  addTypeOffre() {
    this.listeTypeOffre.push({
      "typeOffre" : this.typeOffre , 
      "quantiter" : this.quantiter,
      "dateDebut" : this.heureDebut,
      "dateFin" : this.heureFin
    }) ; 
    this.typeOffre="";
    this.heureDebut="00:00";
    this.heureFin="23:59";
  }

  async getOffreById(idOffre : string){
      this.OffreService.getOffreById_service(idOffre).subscribe(response => {
        console.log(response);
          if(response.status == 200) {
            this.idOffre = response.data.idOffre;
            this.nomOffre = response.data.nomOffre;
            this.prixOffre = response.data.prix;
            this.validiteOffre =response.data.validite;
            this.uniteValidite= response.data.uniteValidite;
          }
          else{
              this.message = response.message;
          }
      })
  }

  async getAllType(){
    this.OffreService.getAllType_service().subscribe(response => {
        this.listeType = response.data;
        this.typeOffre = this.listeType[0].idTypeOffre;
    })
  }

  

  OnChangeUniteValidite(newValue) {
    console.log(newValue);
    this.uniteValidite = newValue;
  }

  OnChangeType(newValue) {
    console.log(newValue);
    this.typeOffre = newValue;
  }


  async getAllOffre() {
    await this.OffreService.getAllOffre_Service().then((response) => {this.listeOffre = response}).catch((error)=> this.message=error.message);
  }

  async getAllUnite() {
    await this.OffreService.generalGetService("admin/getAllUniteValidite").then((response) => {this.listeUnite = response.data ; if(response.data != null) {this.uniteValidite=response.data[0].idUniteValidire} }).catch((error)=> this.message=error.message);
    
  }

  

}
