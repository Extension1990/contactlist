import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  name: string = '';
  phone: string = '';
  email: string = '';
  company: string = '';
  notes: string = '';

  constructor(private service: ContactService, private router: Router) { }

  ngOnInit(): void {
  }

  createContact(name: string, phone: string, email: string, company: string, notes: string) {
    this.service.createContact(name, phone, email, company, notes).subscribe((notes: any) => {
      this.router.navigate(["/"]);
    });
  }

}
