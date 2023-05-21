import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  password = '';
  include_letters = false;
  include_numbers = false;
  include_symbols = false;
  length = 0;

  changeLength(value: string) {
    if (!isNaN(parseInt(value))) {
      this.length = parseInt(value);
    }
  }

  useLetters() {
    this.include_letters = !this.include_letters;
  }

  useNumbers() {
    this.include_numbers = !this.include_numbers;
  }

  useSymbols() {
    this.include_symbols = !this.include_symbols;
  }

  generate() {
    const number = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '~`!@#$%^&*()_-+=.><,/?}{';
    let valid_Chars = '';
    let generated_password = '';

    if (this.include_letters) {
      valid_Chars += letters;
    }

    if (this.include_numbers) {
      valid_Chars += number;
    }

    if (this.include_symbols) {
      valid_Chars += symbols;
    }

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * valid_Chars.length);
      generated_password += valid_Chars[index];
    }

    this.password = generated_password;
  }
}
