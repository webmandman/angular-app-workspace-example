import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CodeValidationService } from '../../../../shared/utils/code-validation.service';

@Component({
  selector: 'app-phone-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  @Input() code: string;
  @Output() codeSubmitted = new EventEmitter<boolean>();
  codeForm: FormGroup | undefined;
  invalidMessage: string;
  codeMask: string;

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private codeValidator: CodeValidationService){
    this.invalidMessage = this.codeValidator.invalidMessage;
    this.codeMask = this.codeValidator.codeMask;
  }

  ngOnInit(): void {
    console.log('code: ', this.code);
    this.codeForm = this.fb.group({
      code: ['', Validators.compose([
        this.codeValidator.patternValidator(this.code)
      ])]
    });
    this.codeForm.get('code').statusChanges.subscribe(
      status => {
        if ( status === 'VALID' ) { this.verify(); }
      }
    );
    // TODO: add 5 min timer => redirect to personalinfo
  }

  get codeFormControl(): any {
    return this.codeForm.controls;
  }

  cancel(): void {
    this.location.back();
  }

  onCodeFail(): void {
    this.codeSubmitted.emit(false);
  }
  verify(): void {
    this.codeSubmitted.emit(true);
  }
}
