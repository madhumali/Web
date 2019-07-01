import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsermanageService {

  uri = 'http://localhost:3000/business';

  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_gst_number) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    console.log("asd");
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
    
  }
  getUser() {
    return this
           .http
           .get(`${this.uri}`);
  }
  editUser(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updateUser(person_name, business_name, business_gst_number, id) {

      const obj = {
          person_name: person_name,
          business_name: business_name,
          business_gst_number: business_gst_number
        };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

    deleteUser(id) {
      return this
                .http
                .get(`${this.uri}/delete/${id}`);
    }
}
