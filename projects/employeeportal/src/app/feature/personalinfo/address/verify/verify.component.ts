import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from '../../../../core/models/address';

@Component({
  selector: 'app-address-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class AddressVerifyComponent implements OnInit {

  @Input() address: Address;
  @Output() verified = new EventEmitter<boolean>();
  public addressLine = '';

  constructor(private location: Location){}

  ngOnInit(): void {
    const addr = this.address;
    this.addressLine = `${addr.address} ${addr.address2} `;
    this.addressLine += `${addr.city} ${addr.state} ${addr.zipcode}`;
  }

  cancel(): void {
    this.location.back();
  }
  onVerifyFail(): void {
    this.verified.emit(false);
  }
  verify(): void {
    this.verified.emit(true);
  }
}
