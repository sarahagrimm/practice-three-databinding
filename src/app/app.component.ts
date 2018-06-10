import { Component, OnInit } from '@angular/core';

class Person {
  // name: string;
  // gender: string;
  // rating: number;

  constructor(public name: string, public gender: string, public rating: number) {}

  }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  female = new Person('Jane Doe', 'f', 5);
  male = new Person('John Doe', 'm', 3.5);

  person;

  ngOnInit() {
    this.pickRandomPerson();
  }

  pickRandomPerson() {
    const index = Math.floor(Math.random() * 2);
    if (!index) {
      this.person = this.female;
    } else {
      this.person = this.male;
    }

    console.log(this.person);
  }

  getName() {
    return `Name: ${this.person.name}`;
  }

  switchPerson() {
    if (this.person.gender === 'f') {
      this.person = this.male;
    } else if (this.person.gender === 'm'){
      this.person = this.female;
    } else {
      this.pickRandomPerson();
    }
    console.log(this.person);
  }
}