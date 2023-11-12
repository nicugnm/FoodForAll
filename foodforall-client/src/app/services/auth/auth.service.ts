import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _logged: boolean = false;

  public get logged(): boolean {
    return this._logged;
  }

  public set logged(logged: boolean) {
    this._logged = logged;
  }
}
