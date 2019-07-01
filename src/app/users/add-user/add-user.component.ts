import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {UsermanageService} from '../usermanage.service';
import { Router ,ActivatedRoute} from "@angular/router";



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  angForm: FormGroup;
 
  constructor(private fb: FormBuilder,private bs: UsermanageService,private router : Router,private route:ActivatedRoute) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      person_name: ['', Validators.required ],
      business_name: ['', Validators.required ],
      business_gst_number: ['', Validators.required ]
    });
  }

  addBusiness(person_name, busines_name, business_gst_number) {
    this.bs.addBusiness(person_name, busines_name, business_gst_number);

    
  }

  
  ngOnInit() {
   
  }


}
