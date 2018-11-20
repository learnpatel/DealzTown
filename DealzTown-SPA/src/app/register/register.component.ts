import { AuthService } from './../_services/auth.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit() {}
  register() {
    this.authService.register(this.model).subscribe(
      () => {
        console.log('regitration successful');
      },
      error => {
        console.log('registration failed');
      }
    );
  }
  onCancel() {
    this.cancelRegister.emit(false);
  }
}
