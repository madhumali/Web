import { Component, OnInit } from '@angular/core';
//import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {UsermanageService} from './usermanage.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //angForm: FormGroup;
  constructor(private bs: UsermanageService) {
    
  }


  ngOnInit() {
  }
}









