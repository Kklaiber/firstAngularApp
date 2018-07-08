import { Component, OnInit } from '@angular/core';
import { PhoneBook } from "../models/phone-book";

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {
  addContact: PhoneBook = new PhoneBook;

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log("Contact Added!", this.addContact);
  }

}
