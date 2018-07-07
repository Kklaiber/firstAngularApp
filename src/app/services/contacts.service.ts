import { Injectable } from '@angular/core';
import { getOrCreateChangeDetectorRef } from '@angular/core/src/render3/di';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Contact[] = [
    {
      firstName: "John",
      lastName: "Cena",
      phoneNumber: "1-800-GET-SOME",
      email: "smackdown@ohyeuh.com"

    },
    {
      firstName: "Donkey",
      lastName: "Kong",
      phoneNumber: "1-800-BAN-NANA",
      email: "gimmedatnanner@oohahh.com",
    },
    {
      firstName: "Wayne",
      lastName: "Campbell",
      phoneNumber: "1-800-PAR-TEON",
      email:"partyonwayne@waynesworld.com",
    },
    {
      firstName: "Garth",
      lastName: "Algar",
      phoneNumber: "1-800-444-8888",
      email: "iheartheatherloclear@garthalgar.com",
    }
  ]

  constructor() { }
}
