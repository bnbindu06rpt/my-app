export const documentDetailsFormData = {
 
  "elements": [
    {
      "name": "photo",
      "type": "ImagePicker",
      "title": "Photo",
      "placeholder": "Select Photo",
      "order": 1,
      "isRequired": true,
      "section": "Document Details",
      "fields": [ "document"]
    },
    {
      "name": "signature",
      "type": "ImagePicker",
      "title": "Signature",
      "placeholder": "Select Signature",
      "order": 2,
      "isRequired": true,
      "section": "Document Details",
      "fields": [ "document"]
    },
    {
      "name": "pan_or_form_60",
      "type": "ImagePicker",
      "title": "PAN or Form 60",
      "placeholder": "Select PAN or Form 60",
      "order": 3,
      "isRequired": true,
      "section": "Document Details",
      "fields": ["documentID",  "document"]
    },
    {
      "name": "poa_if_not_aadhaar_authenticated",
      "type": "ImagePicker",
      "title": "POA, if not Aadhaar authenticated",
      "placeholder": "Select POA",
      "order": 4,
      "section": "Document Details",
      "fields": ["documentID", "document"]
    },
    {
      "name": "mitc_document",
      "type": "ImagePicker",
      "title": "MITC Document",
      "placeholder": "Select MITC Document",
      "order": 5,
      "section": "Document Details",
      "fields": ["documentID", "document"]
    },
    {
      "name": "communication_address_proof_or_declaration",
      "type": "ImagePicker",
      "title": "Communication Address Proof or Declaration",
      "placeholder": "Select Communication Address Proof or Declaration",
      "order": 6,
      "section": "Document Details",
      "fields": ["documentID", "document"]
    },
    {
      "name": "miscellaneous_document",
      "type": "ImagePicker",
      "title": "Miscellaneous Document",
      "placeholder": "Select Miscellaneous Document",
      "order": 7,
      "section": "Document Details",
      "fields": ["documentID", "issuedDate", "expireDate", "document"]
    },
    {
      "name": "passport_or_visa_for_nri_oci_foreigner",
      "type": "ImagePicker",
      "title": "Passport / Visa for NRI / OCI / Foreigner",
      "placeholder": "Select Passport / Visa",
      "order": 8,
      "section": "Document Details",
      "fields": ["documentID", "issuedDate", "expireDate", "document"]
    },
  ]
};

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
          { key: "Male", value: "Male" },
          { key: "Female", value: "Female" },
          { key: "Other", value: "Other" },
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
          { key: "Married", value: "Married" },
          { key: "Unmarried", value: "Unmarried" },
          { key: "Divorced", value: "Divorced" },
          { key: "Widow", value: "Widow" },
          { key: "Undisclosed", value: "Undisclosed" },
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
                { key: "India", value: 'India' },
        
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
                {key:"Local", value:"Local" },
                {key:"Foreign",value:"Foreign"}
    
            ],
            "section":"Communication Address",
          },

          {
            "name": "address_type",
            "type": "dropdown",
            "title": "Address Type",
            "dropdownData": [
                { key: "Business", value: "Business" },
                { key: "Registered office", value:"Registered Office" },
                { key: "Residential", value: "Residential" },
                { key: "Unspecified", value: "Unspecified" },
                { key: "Resident", value: "Resident/Business" },
        
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
                { key: "India", value: 'India' },
        
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
              { key: "Graduate", value: 'Graduate' },
              { key: "HSC", value: 'HSC' },
              { key: "Masters", value: 'Masters' },
              { key: "Others", value: 'Others' },
              { key: "Professional", value: 'Professional' },
              { key: "SSC", value: 'SSC' },
              { key: "Below_ssc", value: 'Below SSC' },
              { key: "Illiterate", value: 'Illiterate' },
            ],
            "isRequired":true,
            "section": "Profile Details",
        },

        {
          "name": "occupation",
          "type": "dropdown",
          "title": "Occupation",
          "dropdownData": [
              { key: "Agriculture", value: 'Agriculture' },
              { key: "Business", value: 'Business' },
              { key: "Govt sector", value: 'Govt sector' },
              { key: "Pensioner", value: 'Pensioner' },
              { key: "Private sector service", value: 'Private Sector Service' },
              { key: "Professionals & self employed ", value: 'Professionals & Self-Employed ' },
              { key: "Public sector ", value: 'Public sector' },
              { key: "Student", value: 'Student' },
            ],
            "isRequired":true,
            "section": "Profile Details",
        },

        {
          "name": "source_of_income",
          "type": "dropdown",
          "title": "Source Of Income",
          "dropdownData": [
              { key: "Agriculture", value: 'Agriculture' },
              { key: "Business", value: 'Business' },
              { key: "Salaried", value: 'Salaried' },
              { key: "Others", value: 'Others' },
              { key: "Pensioner", value: 'Pensioner' },
            ],
            "isRequired":true,
            "section": "Profile Details",
        },

        {
          "name": "annual_income_slab",
          "type": "dropdown",
          "title": "Annual Income Slab ",
          "dropdownData": [
              { key: "Less than 1 LPA", value: 'Less than 1 LPA' },
              { key: "1-5 LPA", value: '1-5 LPA ' },
              { key: "5-10 LPA  ", value: '5-10 LPA ' },
              { key: "10-15 LPA", value: '10-15 LPA' },
              { key: "15-25 LPA", value: '15-25 LPA ' },
              { key: "More than 25 LPA", value: 'More than 25 LPA ' },
            ],
            "isRequired":true,
            "section": "Profile Details",
        },

        {
          "name": "politically_exposed_person",
          "type": "dropdown",
          "title": "Politically Exposed Person ",
          "dropdownData": [
              { key: "Domestic PEP", value: 'Domestic PEP' },
              { key: "International PEP", value: 'International PEP' },
              { key: "Relative of domestic PEP", value: 'Relative of Domestic PEP' },
              { key: "Relative of International PEP", value: ' Relative of International PEP' },
              { key: "Not a PEP", value: 'Not a PEP  ' },
            ],
            "isRequired":true,
            "section": "Profile Details",
        },

        {
          "name": "disability",
          "type": "dropdown",
          "title": "Disability",
          "dropdownData": [
              { key: "Physically challenged", value: 'Physically Challenged'},
              { key: "Mentally challenged", value: 'Mentally Challenged'},
              { key: "Physically & Mentally Challenged", value: 'Physically & Mentally Challenged' },
              { key: "Blind", value: 'Blind' },
            ],
          //   "isRequired":true,
            "section": "Profile Details",
        },
       
        {
          "name": "religion",
          "type": "dropdown",
          "title": "Religion",
          "dropdownData": [
              { key: "Christian", value: 'Christian' },
              { key: "Hindu", value: 'Hindu' },
              { key: "Jain", value: 'Jain' },
              { key: "Muslim", value: 'Muslim ' },
              { key: "Others", value: 'Others ' },
              { key: "Parsi", value: 'Parsi' },
              { key: "Sikh", value: 'Sikh' },
            ],
            "isRequired":true,
            "section": "Profile Details",
        },

        {
          "name": "customer_category_code ",
          "type": "dropdown",
          "title": "Customer Category Code",
          "dropdownData": [
              { key: "Options to be provided by business", value: 'Options to be provided by Business' },
            ],
            "isRequired":true,
            "section": "Profile Details",
        },

        {
          "name": "risk_category",
          "type": "dropdown",
          "title": "Risk Category ",
          "dropdownData": [
              { key: "High", value: 'High' },
              { key: "Medium", value: 'Medium' },
              { key: "Low", value: 'Low ' },
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