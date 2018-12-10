import { Component, OnInit } from '@angular/core';
import { AuthService } from '../guards/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.css']
})
export class LoginsComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
  }
  onSignup(form: NgForm){
  const email=form.value.email;
const password=form.value.password;

this.authService.login(email,password);
this.router.navigate(['/recipes']);

}
}
