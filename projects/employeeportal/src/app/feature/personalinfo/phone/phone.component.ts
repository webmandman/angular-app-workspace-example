import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Phone } from '../../../core/models/phone';
import { StepperComponent } from '@progress/kendo-angular-layout';
import { SmsService } from '../../../core/services/sms.service';
import { CodeGeneratorService } from '../../..//shared/utils/code-generator.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})

export class PhoneComponent {
  public currentStep = 0;
  @ViewChild('stepper', {static: true})
  public stepper: StepperComponent;
  public steps = [
    {label: 'Mobile Phone'},
    {label: 'Verification Code'},
    {label: 'Done'}
  ];
  public phone: Observable<Phone>;
  public coordinates: Observable<string>;
  public smsResponse: Observable<any>;
  public invalid: boolean;
  public code: string;

  constructor(
    private router: Router,
    private smsService: SmsService,
    private codeGenerator: CodeGeneratorService
  ) {}

  // This method is called everytime the user clicks the form submit button
  public phoneSubmitted(phone: Phone): void{
    this.code = this.codeGenerator.generate();
    const message = `${this.code} is your verification code.`;
    this.smsResponse = this.smsService.sendMessage(phone.phonenumber, message)
      .pipe(
        tap( (valid: boolean) => valid ? this.next() : this.invalid = true )
      );
    this.smsResponse.subscribe();
  }

  public codeSubmitted( submitted: boolean): void{
    if ( submitted ){
      this.next();
    }else{
      this.router.navigate(['personalinfo']);
    }
  }

  public nextStep(verified: boolean): void{
    if (verified){
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

}
