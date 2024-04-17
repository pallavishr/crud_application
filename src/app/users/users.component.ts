import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userForm: any;

  constructor(public fb: FormBuilder,private service:CommonService) {
    this.userForm = this.fb.group({
      Name: [""],
      Phone: [""],
      Email: [""],
      Age: [""]
    })
  }

  ngOnInit(): void {

  }

  SubmitForm() {
    console.log(this.userForm.value);
    this.service.AddUpdateUser(this.userForm.value).subscribe(data =>{
      alert("Added");
      console.log(data);
    })

  }

}
