import { Component, OnInit } from '@angular/core';
import {UsermanageService} from '../../usermanage.service';
import User from '../../User';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  users: User[];

  constructor(private bs: UsermanageService) { }

  ngOnInit() {
    this.bs
      .getUser()
      .subscribe((data:User[]) => {
        this.users = data;
    });
    
  }
  deleteUser(id) {
    this.bs.deleteUser(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
