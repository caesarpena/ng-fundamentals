import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service'
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {

constructor(private router:Router, private authService:AuthService) {

}

  profileForm:FormGroup
  ngOnInit() {
    let firstName = new FormControl
    (this.authService.currentUser.firstName, Validators.required)
    let lastName = new FormControl
    (this.authService.currentUser.lastName, Validators.required)
  }



  saveProfile(formValues) {
    if(this.profileForm.valid){
      this.authService.updateCurrentUser(formValues.firstName,
          formValues.lastName)
          this.router.navigate(['events'])
      }
    }
   

  cancel() {
    this.router.navigate(['events'])
  }

}