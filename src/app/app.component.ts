// src/app/app.component.ts
import { Component } from '@angular/core';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, DisplayComponent, LoginComponent,MatSlideToggleModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  username: string = '';
}
