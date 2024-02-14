import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  data: string = "Enjoy a day filled with meeting animals up close and learn about how they live in the wild..."
  placeholderData: string = "Search Your Animal"
  animalName:string= ""
  animalList: any = []

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getAnimals().subscribe((data: any) => {
      this.animalList = data.animals;
      // console.log(this.animalList);

    })
  }

 


}
