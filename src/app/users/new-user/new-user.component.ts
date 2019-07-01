import { Component, OnInit } from '@angular/core';
import {UsermanageService} from '../usermanage.service';
import User from '../User';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  users: User[];
  constructor(private bs: UsermanageService, private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.bs
      .getUser()
      .subscribe((data:User[]) => {
        this.users = data;
    });
  }
  onNewUser(){

    this.router.navigate(['new'],{relativeTo:this.route});
  }
  onViewUser(){
    this.router.navigate(['view'],{relativeTo:this.route});
  }

}


