export const personalDetailsFormData = {
    "elements": [
      {
        "name": "first_name",
        "type": "TextInput",
        "title": "First Name",
        "placeholder": "Enter First Name",
        "isRequired": true,
        "section": "Personal Details",
        "order": 1,
      },
      {
        "name": "middle_name",
        "type": "TextInput",
        "title": "Middle Name",
        "placeholder": "Enter Middle Name",
        "section": "Personal Details",
        "order": 2,
      },
      {
        "name": "last_name",
        "type": "TextInput",
        "title": "Last Name",
        "placeholder": "Enter Last Name",
        "isRequired": true,
        "section": "Personal Details",
        "order": 3,
      },
      {
        "name": "gender",
        "type": "dropdown",
        "title": "Gender",
        "dropdownData": [
          { key: "male", value: "Male" },
          { key: "female", value: "Female" },
          { key: "other", value: "Other" },
        ],
        "isRequired": true,
        "section": "Personal Details",
        "order": 4,
      },
      {
        "name": "date_of_birth",
        "type": "Date",
        "title": "DOB",
        "placeholder": "DOB",
        // "isRequired": true,
        "section": "Personal Details",
        "order": 5,
      },
      {
        "name": "place_of_birth",
        "type": "TextInput",
        "title": "Place of Birth",
        "placeholder": "Enter place of birth",
        "isRequired": true,
        "section": "Personal Details",
        "order": 6,
      },
      {
        "name": "mother_name",
        "type": "TextInput",
        "title": "Mother's Name",
        "placeholder": "Enter Mother's Name",
        "isRequired": true,
        "section": "Personal Details",
        "order": 7,
      },
      {
        "name": "father_name",
        "type": "TextInput",
        "title": "Father's Name",
        "placeholder": "Enter Father's Name",
        "isRequired": true,
        "section": "Personal Details",
        "order": 8,
      },
      {
        "name": "primary_mobile_number",
        "type": "TextInput",
        "inputType":"phone",
        "title": "Primary Mobile Number",
        "placeholder": "Enter Primary Mobile Number",
        // "validation": {
        //     "regex": /^\d{10}$/,
        //     "message": "Please enter a valid 10-digit phone number."
        //   },
        "isRequired": true,
        "section": "Personal Details",
        "order": 9,
      },
      {
        "name": "alternate_mobile_number",
        "type": "TextInput",
        "inputType":"phone",
        "title": "Alternate Mobile Number",
        "placeholder": "Enter Alternate Mobile Number",
        // "validation": {
        //     "regex": /^\d{10}$/,
        //     "message": "Please enter a valid 10-digit phone number."
        //   },
        "section": "Personal Details",
        "order": 10,
      },
      {
        "name": "email_id",
        "type": "TextInput",
        "title": "Email ID",
        "placeholder": "Enter Email ID",
        // "validation": {
        //     "regex": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        //     "message": "Please enter a valid email address.",
            
        //   },
        "isRequired": true,
        "section": "Personal Details",
        "order": 11,
      },
      {
        "name": "alternate_email_id",
        "type": "TextInput",
        "title": "Alternate Email ID",
        "placeholder": "Enter Alternate Email ID",
        // "validation": {
        //     "regex": /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        //     "message": "Please enter a valid email address.",
            
        //   },
        "section": "Personal Details",
        "order": 12,
      },
      {
        "name": "marital_status",
        "type": "dropdown",
        "title": "Marital Status",
        "dropdownData": [
          { key: "married", value: "Married" },
          { key: "unmarried", value: "Unmarried" },
          { key: "divorced", value: "Divorced" },
          { key: "widow", value: "Widow" },
          { key: "undisclosed", value: "Undisclosed" },
        ],
        "isRequired": true,
        "section": "Personal Details",
        "order": 13,
      },
      {
        "name": "ckyc_number",
        "type": "TextInput",
        "title": "CKYC Number",
        "placeholder": "Enter CKYC Number",
        "section": "Personal Details ",
        "order": 14,
      },
    ]
  };
  

export const addressDetailsFormData = {
    "elements" : [
        {
            "name": "address_line_1",
            "type": "TextInput",
            "title": "Address Line 1",
            "placeholder": "Enter Address",
            "isRequired":true,
            "section": "Permanent Address Type",
          },

          {
            "name": "address_line_2",
            "type": "TextInput",
            "title": "Address Line 2",
            "placeholder": "Enter Address",
            "isRequired":true,
            "section": "Permanent Address Type",
          },

          {
            "name": "address_line_3",
            "type": "TextInput",
            "title": "Address Line 3",
            "placeholder": "Enter Address",
            "isRequired":true,
            "section": "Permanent Address Type",
          },

          {
            "name": "pincode",
            "type": "TextInput",
            "title": "Pincode",
            "placeholder": "Enter Pincode",
            "isRequired":true,
            "section": "Permanent Address Type",
          },

          {
            "name": "district",
            "type": "TextInput",
            "title": "District",
            "placeholder": "Enter District",
            "isRequired":true,
            "section": "Permanent Address Type",
          },

          {
            "name": "state",
            "type": "TextInput",
            "title": "State",
            "placeholder": "Enter State",
            "isRequired":true,
            "section": "Permanent Address Type",
          },

          {
            "name": "country",
            "type": "dropdown",
            "title": "Country",
            "dropdownData": [
                { key: "india", value: 'India' },
        
              ],
              "isRequired":true,
              "section": "Permanent Address Type",

          },

          {
            "name": "same_as_permanent_address",
            "type": "checkbox",
            "title": "Same As Permanent Address",
            "section":"Overseas Address",

          },

          {
            "name": "address_type",
            "type": "dropdown",
            "title": "Address Type",
            "dropdownData": [
                { key: "business", value: "Business" },
                { key: "registered_office", value:"Registered Office" },
                { key: "residential", value: "Residential" },
                { key: "unspecified", value: "Unspecified" },
                { key: "resident", value: "Resident/Business" },
        
              ],
              "isRequired":true,
              "section": "Overseas Address",

          },

          {
            "name": "address_line_1",
            "type": "TextInput",
            "title": "Address Line 1",
            "placeholder": "Enter Address",
            "isRequired":true,
            "section": "Overseas Address",
          },

          {
            "name": "address_line_2",
            "type": "TextInput",
            "title": "Address Line 2",
            "placeholder": "Enter Address",
            "isRequired":true,
            "section": "Overseas Address",
          },

          {
            "name": "address_line_3",
            "type": "TextInput",
            "title": "Address Line 3",
            "placeholder": "Enter Address",
            "section": "Overseas Address",
          },

          {
            "name": "pincode",
            "type": "TextInput",
            "title": "Pincode",
            "placeholder": "Enter Pincode",
            "section": "Overseas Address",
          },

          {
            "name": "city",
            "type": "TextInput",
            "title": "City",
            "placeholder": "Enter City",
            "isRequired":true,
            "section": "Overseas Address",
          },

          {
            "name": "country",
            "type": "dropdown",
            "title": "Country",
            "dropdownData": [
                { key: "india", value: 'India' },
        
              ],
              "isRequired":true,
              "section": "Overseas Address",

          },
          {

          "name": "same_as_permanent_address",
          "type": "checkbox",
          "title": "Same As Permanent Address",
          "section":"Communication Address",
        },
        {
          
            "name": "same_as_overseas_address",
            "type": "checkbox",
            "title": "Same As Overseas Address",
            "section":"Communication Address",  
        },
        {
            "name": "address_preference",
            "type":"RadioButton",
            "title": "Address Preference",
            "radioData":[
                {key:"local", value:"Local" },
                {key:"foreign",value:"Foreign"}
    
            ],
            "section":"Communication Address",
          },

          {
            "name": "address_type",
            "type": "dropdown",
            "title": "Address Type",
            "dropdownData": [
                { key: "business", value: "Business" },
                { key: "registered_office", value:"Registered Office" },
                { key: "residential", value: "Residential" },
                { key: "unspecified", value: "Unspecified" },
                { key: "resident", value: "Resident/Business" },
        
              ],
              "isRequired":true,
              "section": "Communication Address",

          },

          {
            "name": "address_line_1",
            "type": "TextInput",
            "title": "Address Line 1",
            "placeholder": "Enter Address",
            "isRequired":true,
            "section": "Communication Address",
          },

          {
            "name": "address_line_2",
            "type": "TextInput",
            "title": "Address Line 2",
            "placeholder": "Enter Address",
            "isRequired":true,
            "section": "Communication Address",
          },

          {
            "name": "address_line_3",
            "type": "TextInput",
            "title": "Address Line 3",
            "placeholder": "Enter Address",
            "section": "Communication Address",
          },

          {
            "name": "pincode",
            "type": "TextInput",
            "title": "Pincode",
            "placeholder": "Enter Pincode",
            "section": "Communication Address",
          },

          {
            "name": "district",
            "type": "TextInput",
            "title": "District",
            "placeholder": "Enter District",
            "section": "Communication Address",
          },

          {
            "name": "state",
            "type": "TextInput",
            "title": "State",
            "placeholder": "Enter State",
            "isRequired":true,
            "section": "Communication Address",
          },

          {
            "name": "country",
            "type": "dropdown",
            "title": "Country",
            "dropdownData": [
                { key: "india", value: 'India' },
        
              ],
              "isRequired":true,
              "section": "Communication Address",

          },

    ]
}

export const profileDetailsFormData = {
    "elements" : [
        {
            "name": "pan_number",
            "type": "TextInput",
            "title": "PAN Number",
            "placeholder": "Enter PAN Number",
            "isRequired":true,
            "section": "Profile Details",
          },
 
          {
            "name": "no_pan",
            "type": "checkbox",
            "title": "Don't have Pan?",
            "section": "Profile Details",
          },
 
          {
            "name": "educational_qualification",
            "type": "dropdown",
            "title": "Educational Qualifiaction",
            "dropdownData": [
                { key: "graduate", value: 'Graduate' },
                { key: "hsc", value: 'HSC' },
                { key: "masters", value: 'Masters' },
                { key: "others", value: 'Others' },
                { key: "professional", value: 'Professional' },
                { key: "ssc", value: 'SSC' },
                { key: "below_ssc", value: 'Below SSC' },
                { key: "illiterate", value: 'Illiterate' },
              ],
              "isRequired":true,
              "section": "Profile Details",
          },
 
          {
            "name": "occupation",
            "type": "dropdown",
            "title": "Occupation",
            "dropdownData": [
                { key: "agriculture", value: 'Agriculture' },
                { key: "Business", value: 'Business' },
                { key: "govt_sector", value: 'Govt sector' },
                { key: "pensioner", value: 'Pensioner' },
                { key: "private_sector_service", value: 'Private Sector Service' },
                { key: "professionals_&_self_employed ", value: 'Professionals & Self-Employed ' },
                { key: "public_sector ", value: 'Public sector' },
                { key: "student", value: 'Student' },
              ],
              "isRequired":true,
              "section": "Profile Details",
          },
 
          {
            "name": "source_of_income",
            "type": "dropdown",
            "title": "Source Of Income",
            "dropdownData": [
                { key: "agriculture", value: 'Agriculture' },
                { key: "Business", value: 'Business' },
                { key: "salaried", value: 'Salaried' },
                { key: "others", value: 'Others' },
                { key: "pensioner", value: 'Pensioner' },
              ],
              "isRequired":true,
              "section": "Profile Details",
          },
 
          {
            "name": "annual_income_slab",
            "type": "dropdown",
            "title": "Annual Income Slab ",
            "dropdownData": [
                { key: "Less_than_1_lpa", value: 'Less than 1 LPA ' },
                { key: "1_5_lpa", value: '1-5 LPA ' },
                { key: "5_10_lpa ", value: '5-10 LPA ' },
                { key: "10_15_lpa", value: '10-15 LPA ' },
                { key: "15_25_lpa", value: '15-25 LPA ' },
                { key: "more_than_25_lpa", value: 'More than 25 LPA ' },
              ],
              "isRequired":true,
              "section": "Profile Details",
          },
 
          {
            "name": "politically_exposed_person",
            "type": "dropdown",
            "title": "Politically Exposed Person ",
            "dropdownData": [
                { key: "domestic_pep", value: 'Domestic PEP' },
                { key: "international_pep", value: 'International PEP' },
                { key: "relative_of_domestic_pep", value: 'Relative of Domestic PEP' },
                { key: "relative_of_international_pep", value: ' Relative of International PEP' },
                { key: "not_a_pep", value: 'Not a PEP  ' },
              ],
              "isRequired":true,
              "section": "Profile Details",
          },
 
          {
            "name": "disability",
            "type": "dropdown",
            "title": "Disability",
            "dropdownData": [
                { key: "physically_challenged", value: 'Physically Challenged'},
                { key: "mentally_challenged", value: 'Mentally Challenged'},
                { key: "physically_&_mentally_challenged", value: 'Physically & Mentally Challenged' },
                { key: "blind", value: 'Blind' },
              ],
            //   "isRequired":true,
              "section": "Profile Details",
          },
         
          {
            "name": "religion",
            "type": "dropdown",
            "title": "Religion",
            "dropdownData": [
                { key: "christian", value: 'Christian' },
                { key: "hindu", value: 'Hindu' },
                { key: "jain", value: 'Jain' },
                { key: "muslim", value: 'Muslim ' },
                { key: "others", value: 'Others ' },
                { key: "parsi", value: 'Parsi' },
                { key: "sikh", value: 'Sikh' },
              ],
              "isRequired":true,
              "section": "Profile Details",
          },
 
          {
            "name": "customer_category_code ",
            "type": "dropdown",
            "title": "Customer Category Code",
            "dropdownData": [
                { key: "options_to_be_provided_by_business", value: 'Options to be provided by Business' },
              ],
              "isRequired":true,
              "section": "Profile Details",
          },
 
          {
            "name": "risk_category",
            "type": "dropdown",
            "title": "Risk Category ",
            "dropdownData": [
                { key: "high", value: 'High' },
                { key: "medium", value: 'Medium' },
                { key: "low", value: 'Low ' },
              ],
              "isRequired":true,
              "section": "Profile Details",
          },
 
        //   {
        //     "name": "politically_exposed_person",
        //     "type": "dropdown",
        //     "title": "Politically Exposed Person ",
        //     "dropdownData": [
        //         { key: "", value: '' },
        //         { key: "", value: '' },
        //         { key: "", value: ' ' },
        //         { key: "", value: ' ' },
        //         { key: "", value: ' ' },
        //         { key: "", value: '' },
        //       ],
        //       "isRequired":true,
        //       "section": "Profile Details",
        //   },
 
    ]
}
