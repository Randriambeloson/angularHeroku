import { Component, OnInit , ViewChild} from '@angular/core';
import {StatistiqueService} from '../statistiqueService/statistique.service';
import {OffreServiceService} from '../offreService/offre-service.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-stastistique',
  templateUrl: './stastistique.component.html',
  styleUrls: ['./stastistique.component.css']
})
export class StastistiqueComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptionsSolde: Partial<ChartOptions>;
  public chartOptionsMouvement: Partial<ChartOptions>;
  public chartOptionsOffre: Partial<ChartOptions>;
  public donneeStatSolde = [];
  public month = [];
  public donneeStatMouvement = [];
  public tabStatOffre;
  public message='';
  
    constructor(private statistiqueService:StatistiqueService) {
      this.setParametreChart();	
}

  async ngOnInit(): Promise<void> {
  }

  async getAllMonth() {
    await this.statistiqueService.getAllMonth_Service().then((data)=> {this.month=data.data;}).catch((error)=>{this.message=error.message});
  }

  async getStatistiqueSolde() {
    await this.statistiqueService.getStatistique_Service().then((data)=> {this.donneeStatSolde=data.data;}).catch((error)=>{this.message=error.message});
  }

  async getStatistiqueMouvement() {
    await this.statistiqueService.getStatistiqueMouvement_Service().then((data)=> {this.donneeStatMouvement=data.data;}).catch((error)=>{this.message=error.message});
  }
  async getTableauRangOffre() {
    await this.statistiqueService.getTableauRangOffre_Service().then((data)=> {this.tabStatOffre=data.data;}).catch((error)=>{this.message=error.message});
  }
  

  async setParametreChart() {
    await this.getAllMonth();
    await this.getStatistiqueSolde(); 
    await this.getStatistiqueMouvement();
    await this.getTableauRangOffre();
    //this.tab = [0, 0, 0, 0, 0, 0, 0, 0, 0 , 0 , 0 , 0];
  
    //this.month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	  this.chartOptionsSolde = {
      series: [{ name: "solde Mvola", data:this.donneeStatSolde}],
      chart: {height: 350,type: "line",zoom: {enabled: true}},
      dataLabels: {enabled: false},
      stroke: {curve: "straight"},
      title: {text: "Solde Mvola",align: "left"},
      grid: {row: {colors: ["white", "transparent"], opacity: 0.5}},
      xaxis: {categories: this.month}
    };

	//Option deuxieme chart
	  this.chartOptionsMouvement = {
      series: [{name: "Nombre de Mouvement",data: this.donneeStatMouvement}],
      chart: {height: 350,type: "line",zoom: {enabled: true}},
      dataLabels: {enabled: false},
      stroke: {curve: "straight"},
      title: {text: "mouvement",align: "left"},
      grid: {row: {colors: ["white", "transparent"], opacity: 0.5}},
      xaxis: {categories: this.month}
    };

    //Bar chart 
    this.chartOptionsOffre = {
      series: [{name: "Offre",data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]}],
      chart: {height: 350,type: "bar"},
      dataLabels: {enabled: true,formatter: function(val) {return val + "%";},offsetY: -20,style: {fontSize: "12px", colors: ["#304758"]}},
      xaxis: {categories: ["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
              position: "top", 
              labels: {offsetY: -18 }, 
              axisBorder: {show: false},
              axisTicks: {show: false},
              crosshairs: {fill: {type: "gradient", 
                                  gradient: {colorFrom: "#D8E3F0",
                                             colorTo: "#BED1E6",
                                             stops: [0, 100],
                                             opacityFrom: 0.4,
                                             opacityTo: 0.5
                                             }
                                  }
                            },
              tooltip: {
                enabled: true,
                offsetY: -35
              }
            },
      title: {text: "Statistique Offre",offsetY: 330,align: "center", style: {color: "#444"}}
    };
  }

}
