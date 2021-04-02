import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {base_url} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffreServiceService {
  

  constructor(private http : HttpClient) { }

  // insertOffre_service(nomOffre : string , detailsOffre:String , prixOffre :String , validiteOffre:String , ): any {
  //   console.log('Request is sent!');
  //   // Using the POST method
  //   const headers =  {
  //     headers: new  HttpHeaders({ 
  //       'Content-Type': 'form-data'})
  //   };
  //    var form  = new FormData();
     
  //    form.append("nomOffre" , nomOffre);
  //    form.append("detailsOffre" ,<string>detailsOffre);
  //    form.append("prixOffre" , <string>prixOffre);
  //    form.append("validiteOffre" , <string>validiteOffre);

  //    console.log(form.get("nomOffre"));
  //    return this.http.post(base_url+"/admin/insertOffre",form);

  // }

   async insertOffre_service(nomOffre : string ,  prixOffre :String , validiteOffre:String , uniteValidite:String , listeTypeOffre) : Promise<any>{
    console.log('Request insertOffre_service is sent!');
    // Using the POST method
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'form-data'})
    };
     var form  = new FormData();
     
     form.append("nomOffre" , nomOffre);
     form.append("prixOffre" , <string>prixOffre);
     form.append("validiteOffre" , <string>validiteOffre);
     form.append("uniteValidite" , <string>uniteValidite);
     var idCurrentOffre;
     var res = this.http.post(base_url+"admin/insertOffre",form)
     return new Promise((resolve , reject) => {
      res.subscribe(res => {idCurrentOffre = res["data"] ; 
        for(var i=0 ; i<listeTypeOffre.length ; i++) {
            if(i == listeTypeOffre.length-1) {
              this.insertTypeOffre_service(listeTypeOffre[i] , idCurrentOffre).subscribe(res => {console.log(res); resolve(res);}); 
            }
            else {
              this.insertTypeOffre_service(listeTypeOffre[i] , idCurrentOffre).subscribe(res => {if(res.status==500) { console.log(res);}}); 
            }
        } 
      }, (err) => {console.log(err)});
        console.log("farany")
     })
     
  }

  insertTypeOffre_service(typeOffre , idOffre) : any {
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'form-data'})
    };
     var form  = new FormData();
     form.append("idOffre" , idOffre);
     form.append("idType" , typeOffre.typeOffre );
     form.append("quantite" , typeOffre.quantiter);
     form.append("heureDebut" , typeOffre.dateDebut);
     form.append("heureFin" , typeOffre.dateFin);
     return this.http.post(base_url+"admin/insertType",form)
  }

  getOffreById_service(idOffre : string): any {
    console.log('Request insertOffre_service is sent!');
    // Using the POST method
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'form-data'})
    };
     var form  = new FormData();
     
     form.append("idOffre" , idOffre);
     console.log('end of request!');
     return this.http.post(base_url+"offre/getOffreById",form);

  }

  getAllType_service() : any {
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'form-data'})
    };
    console.log("getAllType_service");
     return this.http.get(base_url+"admin/getAllType");
  }

  deleteOffreService(idOffre : any) {
    try{
        const headers =  {
          headers: new  HttpHeaders({ 
            'Content-Type': 'form-data'})
        };
        console.log('Request deleteOffreService is sent!');
      // Using the POST method
      var form  = new FormData();
      form.append("idOffre" , <string>idOffre);
      return this.http.post(base_url+"admin/deleteOffre",form);
    }
    catch(e){
      console.log(e.message);
    }
  }

  UpdateOffre_service(nomOffre : string ,  prixOffre :String , validiteOffre:String , uniteValidite:String , idOffre): any {
    console.log('Request is sent!');
    // Using the POST method
    const headers =  {
      headers: new  HttpHeaders({ 
        'Content-Type': 'form-data'})
    };
     var form  = new FormData();
     
     form.append("nomOffre" , nomOffre);
     form.append("prixOffre" , <string>prixOffre);
     form.append("validiteOffre" , <string>validiteOffre);
     form.append("uniteValidite" , <string>uniteValidite);
     form.append("idOffre" , <string>idOffre);
     console.log(uniteValidite);
     return this.http.post(base_url+"offre/updateOffre",form);

  }

  generalGetService(url:String) : Promise<any> {
    console.log("Request is sent!");
    return new Promise((resolve , reject )=> {
      this.http.get(base_url+url).subscribe((response) => {
        resolve(response);
    } , (error) => { reject(error)});
    });
  }

  getAllOffre_Service() : Promise<any> {
    console.log("Request is sent!");
    return new Promise((resolve , reject )=> {
      this.http.get(base_url+"/admin/getAllOffre").subscribe((response) => {
        resolve(response);
    } , (error) => { reject(error)});
    });
  }


  getAllUnite_Service() : Promise<any> {
    console.log("Request getAllUnite_Service is sent!");
    return new Promise((resolve , reject )=> {
      this.http.get(base_url+"/admin/getAllUniteValidite").subscribe((response) => {
        resolve(response);
    } , (error) => { reject(error)});
    });
  }
  
}
