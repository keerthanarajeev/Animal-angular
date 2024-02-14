import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 
    
  }

// Api Calls

// api to access all data

getAnimals(){
return this.http.get(`/assets/animal.json`)
}

}
