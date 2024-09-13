import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name: string = '';
  age: number | null = null;
  email: string = '';

  handleNameChange(event: any){
    this.name = event.target.value;
  }

  handleAgeChange(event: any){
    this.age = event.target.value;
  }

  handleEmailChange(event: any){
    this.email = event.target.value;
  }
}
