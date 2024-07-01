import { country, communicationAddressType } from "./dropdownValues";
export const residentAddressFormData = {
    "elements": [
      {
        "name": "permanent_address_line_1",
        "type": "TextInput",
        "title": "Address Line 1",
        "placeholder": "Enter Address",
        "validation": {
            "required": "Address line 1 is required"
          },
        "section": "Permanent Address Type",
      },
      {
        "name": "permanent_address_line_2",
        "type": "TextInput",
        "title": "Address Line 2",
        "placeholder": "Enter Address",
        "validation": {
            "required": "Address line 2 is required"
          },
        "section": "Permanent Address Type",
      },
      {
        "name": "permanent_address_line_3",
        "type": "TextInput",
        "title": "Address Line 3",
        "placeholder": "Enter Address",
        "validation": {
            "required": "Address line 3 is required"
          },
        "section": "Permanent Address Type",
      },
      {
        "name": "permanent_pincode",
        "type": "TextInput",
        "title": "Pincode",
        "placeholder": "Enter Pincode",
        "validation": {
            "required": "Pincode is required"
          },
        "section": "Permanent Address Type",
      },
      {
        "name": "permanent_district",
        "type": "TextInput",
        "title": "District",
        "placeholder": "Enter District",
        "validation": {
            "required": "District is required"
          },
        "section": "Permanent Address Type",
      },
      {
        "name": "permanent_state",
        "type": "TextInput",
        "title": "State",
        "placeholder": "Enter State",
        "validation": {
            "required": "State is required"
          },
        "section": "Permanent Address Type",
      },
      {
        "name": "permanent_country",
        "type": "dropdown",
        "title": "Country",
        "dropdownData": country,
        "validation": {
            "required": "Country is required"
          },
        "section": "Permanent Address Type",
      },
 
      {
        "name": "communication_same_as_permanent_address",
        "type": "checkbox",
        "title": "Same As Permanent Address",
        "section": "Communication Address",
      },
 
      {
        "name": "communication_address_preference",
        "type": "RadioButton",
        "title": "Address Preference",
        "radioData": [
          { label: "Local", value: "Local" },
          { label: "Foreign", value: "Foreign" }
        ],
        "section": "Communication Address",
      },
      {
        "name": "communication_address_type",
        "type": "dropdown",
        "title": "Address Type",
        "dropdownData":communicationAddressType,
        "validation": {
            "required": "Address type is required"
          },
        "section": "Communication Address",
      },
      {
        "name": "communication_address_line_1",  
        "type": "TextInput",
        "title": "Address Line 1",
        "placeholder": "Enter Address",                            
        "validation": {
            "required": "Address line 1 is required"
          },
        "section": "Communication Address",
      },
      {
        "name": "communication_address_line_2",
        "type": "TextInput",
        "title": "Address Line 2",
        "placeholder": "Enter Address",
        "validation": {
            "required": "Address line 2 is required"
          },
        "section": "Communication Address",
      },
      {
        "name": "communication_address_line_3",
        "type": "TextInput",
        "title": "Address Line 3",
        "placeholder": "Enter Address",
        "section": "Communication Address",
      },
      {
        "name": "communication_pincode",
        "type": "TextInput",
        "title": "Pincode",
        "placeholder": "Enter Pincode",
        "section": "Communication Address",
      },
      {
        "name": "communication_district",
        "type": "TextInput",
        "title": "District",
        "placeholder": "Enter District",
        "section": "Communication Address",
      },
      {
        "name": "communication_state",
        "type": "TextInput",
        "title": "State",
        "placeholder": "Enter State",
        "validation": {
            "required": "State is required"
          },
        "section": "Communication Address",
       
      },
      {
        "name": "communication_country",
        "type": "dropdown",
        "title": "Country",
        "dropdownData": country,
        "validation": {
            "required": "Country is required"
          },
        "section": "Communication Address",
      },
    ]
}