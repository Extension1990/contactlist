import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  {
    path: '', component: ContactsComponent
  },
  {
    path: 'add-contact', component: AddContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
