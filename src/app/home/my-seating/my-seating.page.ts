import { Component, OnInit } from '@angular/core';
import * as papa from 'papaparse';
import { Http } from '@angular/http';
import { SeatingService } from './my-seating.service';
import { Seating } from './seating.model';
import { database } from 'firebase';

@Component({
  selector: 'app-my-seating',
  templateUrl: './my-seating.page.html',
  styleUrls: ['./my-seating.page.scss'],
})
export class MySeatingPage implements OnInit {
  
  // Uploading file data
  file: File;

  // Reading csv data
  csvData: any[] = [];
  headerRow: any[] = [];

  // Search seating data
  user: string = "ycsaputra";
  seating: Seating = {
    id: '...',
    user: '...',
    seating: '...'
  };

  constructor(private seatingService: SeatingService, private http: Http) { 
    this.readCsvData();
    this.readSeating();
  }

  ngOnInit() {
  }
  
  // Uploading file functions

  changeListener($event): void {
    this.file = $event.target.files[0];
    this.diplayFile();
  }

  diplayFile() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
      this.extractData(fileReader.result, "file");
    }
    fileReader.readAsText(this.file);
  }

  // Reading csv functions

  readCsvData() {
    this.http.get('../../../assets/csv/SampleSeating.csv')
    .subscribe(
      data => {   
        this.extractData(data, "response");},
      err => this.handleError(err)
    );
  }

  extractData(res, type) {
    let csvData;
    let parsedData;

    if (type === "response") {
      csvData = res['_body'] || '';
      parsedData = papa.parse(csvData).data;
    } else if (type === "file") {
      csvData = res || '';
      parsedData = this.textCsvToArray(res);
    }

    this.headerRow = parsedData[0];
    parsedData.splice(0, 1);
    this.csvData = parsedData;
  }

  textCsvToArray(res, delimiter = ';', omitFirstRow = false) {
    return res
            .slice(omitFirstRow ? res.indexOf('\r\n') + 1 : 0)
            .split('\r\n')
            .map(v => v.split(delimiter));
  } 

  trackByFn(index: any, item: any) {
    return index;
  }

  handleError(err) {}

  addToDatabase() {
    this.csvData.forEach((row, i) => {
      console.log("adding user " + this.csvData[i][0] + " with " + this.csvData[i][1] + " seating.");
      this.seatingService.addSeating(this.csvData[i][0], this.csvData[i][1]);
    });
  }

  replaceDatabaseData() {
    this.seatingService.removeAllSeating();
    this.addToDatabase();
  }

  // Search seating functions

  readSeating() {
    this.seatingService.getSeatingByUser(this.user)
    .then(seating => {
      console.log(seating);
      if (seating[0]) {
        this.seating = seating[0];
      } else {
        this.seating = {
          id: 'not found',
          user: 'this.user',
          seating: 'not found'
        };
      }

    })
    .catch(error => {
      console.log(error.code);
    });
  }

}
