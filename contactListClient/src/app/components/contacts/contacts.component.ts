import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: any;
  searchText: string = '';

  constructor(private service: ContactService) { }

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts() {
    this.service.getAllContacts().subscribe((contacts: any) => {
      this.contacts = contacts;
    });
  }


  updateContact(id: string, name: string, phone: string, email: string, company: string, notes: string) {
      this.service.updateContactById(id, name, phone, email, company, notes).subscribe((notes: any) => {
        this.getAllContacts();
        this.successUpdateAlert();
    });
  }

  deleteContact(id: string) {
    this.service.deleteContactById(id).subscribe((contact: any) => {
      if(contact) {
        this.getAllContacts();
        this.successDeleteAlert();
      } else {
        this.errorDeleteAlert();
      }
    });
  }

  // Show success alert when a contact has been successfully updated
  successUpdateAlert() {
    Swal.fire({
      text: 'Updated successfully.',
      icon: 'success',
      confirmButtonColor: '#001F30'
    })
  }

  // Show error alert when a contact has not been successfully updated
  errorUpdateAlert() {
    Swal.fire("Error", 'Could not update contact!', 'error');
  }

  // Show success alert when a contact has been successfully deleted
  successDeleteAlert() {
    Swal.fire({
      text: 'Deleted successfully.',
      icon: 'success',
      confirmButtonColor: '#001F30'
    })
  }

  // Show error alert when a contact has been successfully deleted
  errorDeleteAlert() {
    Swal.fire("Error", 'Could not delete contact!', 'error');
  }

}
