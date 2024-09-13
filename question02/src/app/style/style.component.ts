import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './style.component.html',
  styleUrl: './style.component.css'
})
export class StyleComponent {
  isHighlight: boolean = false;
  fontSize: string = '16px';
  textColor: string = 'black';
  backgroundColor: string = 'white';

  toggleHighlight() {
    this.isHighlight = !this.isHighlight;
    this.backgroundColor = this.isHighlight ? 'yellow' : 'white';
    this.textColor = this.isHighlight ? 'red' : 'black';
  }

  changeFontSize(event: any) {
    this.fontSize = event.target.value + 'px';
  }
}
