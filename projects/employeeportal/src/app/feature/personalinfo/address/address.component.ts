import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../../core/services/user.service';
import { VerifyService } from '../../../core/services/verify.service';
import { Address } from '../../../core/models/address';
import { StepperComponent } from '@progress/kendo-angular-layout';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})

export class AddressComponent {
  public currentStep = 0;
  @ViewChild('stepper', {static: true})
  public stepper: StepperComponent;
  public steps = [
    {label: 'Address'},
    {label: 'Verify'},
    {label: 'Done'}
  ];
  public oldaddress: Observable<Address>;
  public newaddress: Address;
  public addressLine = '';
  public coordinates: Observable<string>;
  public verifyResponse: Observable<boolean>;
  public invalid: boolean;

  constructor(
    private userService: UserService,
    private verifyService: VerifyService
  ) {
    this.oldaddress = this.userService.getAddress();
  }

  // This method is called everytime the user clicks the form submit button
  public addressSubmitted(address: Address): void{
    // TODO: Add toString() member function to Address Observable Type/Class
    // Set a single string of the address that is shared in other view components
    const str = this.addressToString(address);

    // Do not double verify the same address
    if ( str === this.addressLine ) {
      return;
    }

    // store the single line string version
    this.addressLine = str;

    this.verifyResponse = this.verifyService.verifyAddress(address)
      .pipe(
        tap( (valid: boolean) => valid ? this.next() : this.invalid = true ),
        tap( () => this.newaddress = address )
      );
    this.verifyResponse.subscribe();
  }

  public nextStep(verified: boolean): void{
    if (verified){
      console.log('verified...');
      this.userService.addAddressChangeRequest(this.newaddress).subscribe();
      this.next();
    }else{
      this.prev();
    }
  }

  public next(): void{
    if (this.currentStep !== this.steps.length){
      this.currentStep += 1;
    }
  }

  public prev(): void{
    if (this.currentStep !== 0){
      this.currentStep -= 1;
    }
  }

  private addressToString(address: Address): string{
    return `${address.address} ${address.address2} ${address.city} ${address.state} ${address.zipcode}`;
  }

}
