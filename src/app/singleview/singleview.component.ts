import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent implements OnInit  {

  id:any=""
  singleAnimal:any={}

  

  constructor(private service:DataService,private rout:ActivatedRoute) {}

  ngOnInit(): void {
    this.rout.params.subscribe((data:any)=>{
      this.id=data.id
      console.log(this.id);
      
      this.service.getAnimals().subscribe((response:any)=>{
        this.singleAnimal=response.animals.find((i:any)=>i.id==this.id);
        console.log(this.singleAnimal);
        
      })
    })
  }
}
