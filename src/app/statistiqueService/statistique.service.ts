import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {base_url} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {

  constructor(private http : HttpClient) { }
  
  getAllMonth_Service() : Promise<any> {
    console.log("Requette getAllMonth!");
    return new Promise((resolve , reject )=> {
      this.http.get(base_url+"admin/getAllMonth").subscribe((response) => {
        resolve(response);
    } , (error) => { reject(error)});
    });
  }

  getStatistique_Service() : Promise<any> {
    console.log("Request getStatistique_Service!");
    return new Promise((resolve , reject )=> {
      this.http.get(base_url+"admin/getAllStatistique").subscribe((response) => {
        resolve(response);
    } , (error) => { reject(error)});
    });
  }

  getStatistiqueMouvement_Service() : Promise<any> {
    console.log("Request getStatistiqueMouvement_Service!");
    return new Promise((resolve , reject )=> {
      this.http.get(base_url+"admin/getStatistiqueMouvement").subscribe((response) => {
        resolve(response);
    } , (error) => { reject(error)});
    });
  }

  getTableauRangOffre_Service() : Promise<any> {
    console.log("Request getTableauRangOffre_Service!");
    return new Promise((resolve , reject )=> {
      this.http.get(base_url+"admin/getTableauRangOffre").subscribe((response) => {
        resolve(response);
    } , (error) => { reject(error)});
    });
  }
}
