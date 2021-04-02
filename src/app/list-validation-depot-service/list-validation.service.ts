import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {base_url} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListValidationService {
  constructor(private http : HttpClient) {
  }


  getAllValidation_service(): any {
    console.log('Request getAllMouvementEntrerNonValider is sent!');
    // Using the POST method
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'form-data'})
    };
     var form  = new FormData();
     return this.http.post(base_url+"admin/getAllMouvementEntrerNonValider",form);
  }

  getAllValidationById_service(idClient : string): any {
    console.log('Request is sent!');
    // Using the POST method
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'form-data'})
    };
     var form  = new FormData();
     form.append("idClient" , idClient);
     return this.http.post(base_url+"admin/getAllMouvementEntrerNonValiderById",form);
  }

  validerDepot_service(idMouvement:String) {
    console.log(idMouvement);
    console.log('Request is sent!');
    // Using the POST method
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'form-data'})
    };
     var form  = new FormData();
     form.append("idMouvement" , <string>idMouvement);
     return this.http.post(base_url+"admin/validerMouvementEntrer",form);
    
  }

  refuserDepot_service(idMouvement:String) {
    console.log(idMouvement);
    console.log('Request is sent!');
    // Using the POST method
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'form-data'})
    };
     var form  = new FormData();
     form.append("idMouvement" , <string>idMouvement);
     return this.http.post(base_url+"admin/refuserMouvementEntrer",form);
    
  }
}
