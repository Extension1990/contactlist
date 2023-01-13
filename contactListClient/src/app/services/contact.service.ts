import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  dotnetUrl = "http://localhost:5289/api/contacts";

  // HTTP HeadersOption
  httpOptions = {
    headers: new HttpHeaders({ ContentType: 'application/json', Allowed: '*' })
  };

  constructor(private http: HttpClient) { }

  createContact(name: string, phone: string, email: string, company: string, notes: string) {
    return this.http.post(this.dotnetUrl, {name, phone, email, company, notes}, {responseType: 'json'});
  }

  getAllContacts() {
    return this.http.get<any>(this.dotnetUrl, {responseType: 'json'});
  }

  getContactById(id: number) {
    return this.http.get<any>(this.dotnetUrl + `/${id}`, {responseType: 'json'});
  }

  updateContactById(id: string, name: string, phone: string, email: string, company: string, notes: string) {
    return this.http.put(this.dotnetUrl + `/${id}`, {name, phone, email, company, notes}, {responseType: 'json'});
  }

  deleteContactById(id: string) {
    return this.http.delete(this.dotnetUrl + `/${id}`);
  }
}
