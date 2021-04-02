import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, RouterModule , Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { NgApexchartsModule } from "ng-apexcharts";

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { OffreComponent } from './offre/offre.component';
import { ListOffreComponent } from './list-offre/list-offre.component';
import { ListValidationDepotComponent } from './list-validation-depot/list-validation-depot.component';
import { StastistiqueComponent } from './stastistique/stastistique.component';
import { DetailsOffreComponent } from './details-offre/details-offre.component';



const routes:Routes = [
    {path : "offre",component :  OffreComponent},
    {path : "listeOffre", component : ListOffreComponent},
    {path:"listeValidation" , component : ListValidationDepotComponent},
    {path:"statistique" , component:StastistiqueComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    OffreComponent,
    ListOffreComponent,
    ListValidationDepotComponent,
    StastistiqueComponent,
    DetailsOffreComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
	NgApexchartsModule
  ],
  exports : [RouterModule],
    
  providers: [],
  bootstrap: [AppComponent]
  
})

export class AppModule { 
  
}
