import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
import { Prodotti } from './prodotti';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'super-negozio';
  prodotti: Prodotti[];
   private BASE_URL:string = '/api';
     // Inject HttpClient into your component or service.
     constructor(private http: HttpClient) {}

     ngOnInit(): void {
       // Make the HTTP request:
       this.http.get<Prodotti[]>('https://3000-dea643ba-2483-4034-ba63-e199763c01fc.ws-eu0.gitpod.io/api/products').subscribe(data => {
         // Read the result field from the JSON response.
         this.prodotti = data;
       });
     }
}
