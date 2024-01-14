import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  protected profileDetails: UserDetails

  constructor() {
    this.profileDetails = new class implements UserDetails {
      authUser: AuthUser = new class implements AuthUser {
        confirmPassword: string = "pass";
        email: string = "username";
        password: string = "pass";
      };
      phoneNumber: string = "phoneNumber";
      age: number = 15;
      deliveryAddress: string = "Strada Bucuresti 15, Bloc C2, Scara 3, Ap 41";
      name: string = "Nick Neek";
      city: string = "Bucharest";
      county: string = "Sector 6";
      country: string = "Romania";
    }
  }
}

interface AuthUser {
  confirmPassword: string;
  email: string;
  password: string;
}

interface UserDetails {
  authUser: AuthUser;
  phoneNumber: string;
  age: number;
  deliveryAddress: string;
  name: string;
  city: string;
  county: string;
  country: string;
}
