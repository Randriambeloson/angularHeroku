import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ListValidationService} from '../list-validation-depot-service/list-validation.service';


@Component({
  selector: 'app-list-validation-depot',
  templateUrl: './list-validation-depot.component.html',
  styleUrls: ['./list-validation-depot.component.css']
})
export class ListValidationDepotComponent implements OnInit {
  //idClient pour la recherche
  idClient : any;
  listeValidation : [];
  message : any;
  constructor(private http : HttpClient  , private ListeValidationService : ListValidationService) { }

  async ngOnInit(): Promise<void> {
     await this.getAllValidation();
  }

  //Avoir la liste de tout les "en attente de validation"
  async getAllValidation() {
    //appel des fonction en service
    await this.ListeValidationService.getAllValidation_service().subscribe(data=>{
      //Inserer le resultat dans le tableau des liste de validation
      this.listeValidation = data.data;
    console.log(data);
    } , (error) => {console.log(error.error.message
      )});
  }

  //Avoir la liste des validation par id :: Utiliser pour la recherche
  async getAllValidationById() {
    await this.ListeValidationService.getAllValidationById_service(this.idClient).subscribe(data=>{
      //Inserer le resultat dans le tableau des liste de validation
      this.listeValidation = data.data;
    } , (error) => {console.log(error.error.message
      )});
  }

  async validerDepot(idMouvement : String) {
    //Valider Depot
    await this.ListeValidationService.validerDepot_service(idMouvement).subscribe(data=>{
      //Prendre le message retourner pour pouvoir l'afficher
      this.message = data;
      //Recharger la liste des en attentes de validation
      this.getAllValidation();

    } , (error) => {console.log(error.error.message
      )});
    
  }

  async refuserDepot(idMouvement : String) {
    //Refuser depot
    await this.ListeValidationService.refuserDepot_service(idMouvement).subscribe(data=>{
      //Prendre le message retourner pour pouvoir l'afficher
      this.message = data;
      //Recharger la liste des en attentes de validation
      this.getAllValidation();
    } , (error) => {console.log(error.error.message
      )});

    
  }


}
