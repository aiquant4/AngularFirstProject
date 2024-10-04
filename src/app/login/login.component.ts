// src/app/login/login.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,MatButtonModule,MatIconModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
// usernameChange = new EventEmitter<string>();: This creates a new event emitter that will emit events of type string. The EventEmitter class is used to create custom events in Angular
  @Output() usernameChange = new EventEmitter<string>();

  login() {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    this.usernameChange.emit(this.username); // Emit the username as a string
  }
}
