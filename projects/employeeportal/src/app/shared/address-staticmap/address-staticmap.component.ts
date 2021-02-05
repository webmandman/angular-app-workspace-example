// This xml tag is needed for google namepsace, ie: new google.maps.Map
// / <reference types="@types/googlemaps" />

import { Component, Input, OnInit } from '@angular/core';
import { GoogleAPIConfig } from '../../core/config/api.config';

@Component({
  selector: 'address-staticmap',
  templateUrl: './address-staticmap.component.html',
  styleUrls: ['./address-staticmap.component.scss']
})
export class AddressStaticMapComponent implements OnInit {

  @Input() addressLine: string;
  @Input() zoom = 18;
  @Input() size = '400x400';

  public staticmap: string | undefined;

  ngOnInit(): void {
    const endpoint = `${GoogleAPIConfig.maps.staticUrl}?key=${GoogleAPIConfig.maps.key}`;
    const location = `&center=${this.addressLine}&zoom=${this.zoom}`;
    const map =  `&size=${this.size}&maptype=roadmap`;
    const features = `&markers=color:blue|${this.addressLine}`;
    this.staticmap = `${endpoint}${location}${map}${features}`;
  }

}
