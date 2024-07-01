import { addressPreference, country, nomineeRelationship } from "./dropdownValues"
export const nomineeDetailsFormData = {
    "elements" : [
      {
          "name": "nominee_required",
          "type": "RadioButton",
          "title": "Nominee Required",
          "radioData": [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          "isRequired":true,
          "section": "Nominee Details",
          "validation": {
            "required": "Nominee Detail is required"
          }
 
      },
 
      {
          "name": "declaration",
          "type": "checkbox",
          "title": "You decline to presently nominate any individual and you understand and acknowledge the risk and consequences associated with nomination not given. Kindly update the same with the bank, in case you wish to declare the nomination in future",
          "section": "Nominee Details",
      },
 
      {
        "name": "nominee_name",
        "type": "TextInput",
        "title": "Nominee Name",
        "placeholder": "Enter nominee name",
        "isRequired": true,
        "section": "Nominee Details",
        "validation": {
            "required": "Nominee Name is required"
          }
 
      },
      {
        "name": "nominee_dob",
        "type": "Date",
        "title": "Nominee DOB",
        "placeholder": " Enter Nominee DOB",
        "isRequired": true,
        "section": "Nominee Details",
        "validation": {
            "required": "Nominee DOB is required"
          }
        
      },
      {
          "name": "same_as_permanent_address",
          "type": "checkbox",
          "title": "Same As Permanent Address",
          "section": "Nominee Details",
 
      },
      {
        "name": "same_as_communication_address",
        "type": "checkbox",
        "title": "Same As Communication Address",
        "section": "Nominee Details",
 
    },
 
    {
      "name": "address_preference",
      "type": "RadioButton",
      "title": "Address Preference",
      "radioData": addressPreference,
      "isRequired":true,
      "section": "Nominee Details",
 
  },
 
  {
    "name": "address_line_1",
    "type": "TextInput",
    "title": "Address Line 1",
    "placeholder": "Enter address",
    "isRequired": true,
    "section": "Nominee Details",
    "validation": {
            "required": "Address line 1 is required"
          }
 
  },
 
  {
    "name": "address_line_2",
    "type": "TextInput",
    "title": "Address Line 2",
    "placeholder": "Enter address",
    "isRequired": true,
    "section": "Nominee Details",
    "validation": {
            "required": "Address line 2 is required"
          }
 
  },
 
  {
    "name": "address_line_3",
    "type": "TextInput",
    "title": "Address Line 3",
    "placeholder": "Enter address",
    "section": "Nominee Details",
 
  },
 
  {
    "name": "city",
    "type": "TextInput",
    "title": "City",
    "placeholder": "Enter city",
    "section": "Nominee Details",
 
  },
 
  {
    "name": "pincode",
    "type": "TextInput",
    "title": "Pincode",
    "placeholder": "Enter pincode",
    // "isRequired": true,
    "section": "Nominee Details",
 
  },
 
 
  {
    "name": "district",
    "type": "TextInput",
    "title": "District",
    "placeholder": "Enter district",
    // "isRequired": true,
    "section": "Nominee Details",
 
  },
 
 
  {
    "name": "state",
    "type": "TextInput",
    "title": "State",
    "placeholder": "Enter state",
    // "isRequired": true,
    "section": "Nominee Details",
 
  },
 
  {
    "name": "country",
    "type": "dropdown",
    "title": "Country",
    "dropdownData": country,
    "isRequired": true,
    "section": "Nominee Details",
    "validation": {
        "required": " Country is required"
      }
    
  },
 
  {
    "name": "nominee_relationship",
    "type": "dropdown",
    "title": "Nominee Relationship ",
    "dropdownData": nomineeRelationship,
    "isRequired": true,
    "section": "Nominee Details",
    "validation": {
        "required": "Nominee Relationship is required"
      }
    
  },
 
    ]
  }