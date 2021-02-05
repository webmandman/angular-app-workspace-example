import { IFieldDef } from '../../shared/utils/schema-form-utils.service';

export const AddressFormSchema: IFieldDef[] = [
  {
    fieldname: 'address',
    fieldlabel: 'Address',
    fieldtype: 'text',
    mandatory: true
  },

  {
    fieldname: 'address2',
    fieldlabel: 'Apt./Suite',
    fieldtype: 'text',
    mandatory: false
  },

  {
    fieldname: 'city',
    fieldlabel: 'City',
    fieldtype: 'text',
    mandatory: true
  },

  {
    fieldname: 'state',
    fieldlabel: 'State',
    fieldtype: 'text',
    mandatory: true
  },

  {
    fieldname: 'zipcode',
    fieldlabel: 'Zip Code',
    fieldtype: 'number',
    mandatory: true,
    minimumLength: 5,
    maximumLength: 5
  }
];
