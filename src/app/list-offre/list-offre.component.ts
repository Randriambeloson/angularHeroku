import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {OffreServiceService} from '../offreService/offre-service.service';
import { Router, RouterLink , ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.css']
})
export class ListOffreComponent implements OnInit {
  listeOffre = [];
  message : string;
  constructor(private http : HttpClient ,  private OffreService:OffreServiceService , private router:Router) { }

  async ngOnInit(): Promise<void> {
     await this.getAllOffre();
     
  }

  getAllOffre() {
    this.OffreService.getAllOffre_Service()
    .then((response) => {
      console.log(response);
      this.listeOffre = response.data}).catch((error) => this.message = error.message);
  }

  async DeleteOffre(idOffre : any) {
    console.log(idOffre);
    await this.OffreService.deleteOffreService(idOffre).subscribe();
    await this.getAllOffre();
  }

  UpdateOffre(idOffre : any){
    this.router.navigate(['/offre'] , {queryParams : {id : <string>idOffre}});
  }
 

}
