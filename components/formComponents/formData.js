
 
  export const documentDetailsFormData = {
    "elements": [
      {
        "name": "signature",
        "section": "Document Details",
        "title": "Signature",
        "fields": [  
         
          {
            "name": "signature_document",
            "type": "ImagePicker",
            "title": "Document",
            "placeholder": "Select Document",
            "isRequired": true
          }
        ]
      },
      {
        "name": "photo",
        "section": "Document Details",
        "title": "Photo",
        "fields": [  
         
          {
            "name": "photo_document",
            "type": "ImagePicker",
            "title": "Document",
            "placeholder": "Select Document",
            "isRequired": true
          }
        ]
      },
      {
        "name": "pan_or_form_60",
        "section": "Document Details",
        "title": "PAN or Form 60",
        "fields": [  
          {
            "name": "pan_or_form_60_id",
            "type": "TextInput",
            "title": "Document ID",
            "placeholder": "Enter Document ID",
            "isRequired": true
          },
          {
            "name": "pan_or_form_60_document",
            "type": "ImagePicker",
            "title": "Document",
            "placeholder": "Select Document",
            "isRequired": true
          },
         
        ]
      },
      {
        "name": "poa_if_not_aadhaar_authenticated",
        "section": "Document Details",
        "title": "POA, if not Aadhaar authenticated",
        "fields": [  
          {
            "name": "poa_if_not_aadhaar_authenticated_id",
            "type": "TextInput",
            "title": "Document ID",
            "placeholder": "Enter Document ID",
           
          },
          {
            "name": "poa_if_not_aadhaar_authenticated_document",
            "type": "ImagePicker",
            "title": "Document",
            "placeholder": "Select Document",
           
          },
        ]
      },
      {
        "name": "mitc",
        "section": "Document Details",
        "title": "MITC",
        "fields": [  
          {
            "name": "mitc_document_id",
            "type": "TextInput",
            "title": "Document ID",
            "placeholder": "Enter Document ID",
           
          },
          {
            "name": "mitc_document",
            "type": "ImagePicker",
            "title": "Document",
            "placeholder": "Select Document",
           
          },
        ]
      },
      {
        "name": "communication_address_proof_or_declaration",
        "section": "Document Details",
        "title": "Communication Address Proof or Declaration",
        "fields": [  
          {
            "name": "communication_address_proof_or_declaration_id",
            "type": "TextInput",
            "title": "Document ID",
            "placeholder": "Enter Document ID",
           
          },
          {
            "name": "communication_address_proof_or_declaration_document",
            "type": "ImagePicker",
            "title": "Document",
            "placeholder": "Select Document",
           
          },
        ]
      },
      {
        "name": "miscellaneous_document",
        "section": "Document Details",
        "title": "Miscellaneous Document",
        "fields": [  
          {
            "name": "miscellaneous_document_id",
            "type": "TextInput",
            "title": "Document ID",
            "placeholder": "Enter Document ID",
            //"isRequired": true
          },
          {
            "name": "miscellaneous_document_issuedate",
            "type": "Date",
            "title": "Issue Date",
            "placeholder": "Select Issue Date",
            //"isRequired": true
          },
          {
            "name": "miscellaneous_document_expiredate",
            "type": "Date",
            "title": "Expire Date",
            "placeholder": "Select Expire Date",
            //"isRequired": true
          },
          {
            "name": "miscellaneous_document_document",
            "type": "ImagePicker",
            "title": "Document",
            "placeholder": "Select Document",
            //"isRequired": true
          },
        ]
      },
      {
        "name": "passport_or_visa_for_nri_oci_foreigner",
        "section": "Document Details",
        "title": "Passport / Visa for NRI / OCI / Foreigner",
        "fields": [  
          {
            "name": "passport_or_visa_for_nri_oci_foreigner_id",
            "type": "TextInput",
            "title": "Document ID",
            "placeholder": "Enter Document ID",
            //"isRequired": true
          },
          {
            "name": "passport_or_visa_for_nri_oci_foreigner_place_of_issue",
            "type": "TextInput",
            "title": "Place of Issue",
            "placeholder": "Enter Place of Issue",
            //"isRequired": true
          },
          {
            "name": "passport_or_visa_for_nri_oci_foreigner_issuedate",
            "type": "Date",
            "title": "Issue Date",
            "placeholder": "Select Issue Date",
            //"isRequired": true
          },
          {
            "name": "passport_or_visa_for_nri_oci_foreigner_expiredate",
            "type": "Date",
            "title": "Expire Date",
            "placeholder": "Select Expire Date",
            //"isRequired": true
          },
          {
            "name": "passport_or_visa_for_nri_oci_foreigner_document",
            "type": "ImagePicker",
            "title": "Document",
            "placeholder": "Select Document",
            //"isRequired": true
          },
        ]
      },
    ]
  }

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
        "validation": {
          "required": "First Name is required"
        }
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
        "validation": {
          "required": "Last Name is required"
        }
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
        "validation": {
          "required": "Gender is required"
        }
      },
      {
        "name": "date_of_birth",
        "type": "Date",
        "title": "DOB",
        "placeholder": "DOB",
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
        "validation": {
          "required": "Place of Birth is required"
        }
      },
      {
        "name": "mother_name",
        "type": "TextInput",
        "title": "Mother's Name",
        "placeholder": "Enter Mother's Name",
        "isRequired": true,
        "section": "Personal Details",
        "order": 7,
        "validation": {
          "required": "Mother's Name is required"
        }
      },
      {
        "name": "father_name",
        "type": "TextInput",
        "title": "Father's Name",
        "placeholder": "Enter Father's Name",
        "isRequired": true,
        "section": "Personal Details",
        "order": 8,
        "validation": {
          "required": "Father's Name is required"
        }
      },
      {
        "name": "primary_mobile_number",
        "type": "phone",
        "inputType":"phone",
        "title": "Primary Mobile Number",
        "placeholder": "Enter Primary Mobile Number",
        "isRequired": true,
        "section": "Personal Details",
        "order": 9,
        "validation": {
          "required": "Primary Mobile Number is required",
          "pattern": {
            "value": "^\\d{10}$",
            "message": "Please enter a valid 10-digit phone number."
          }
        }
      },
      {
        "name": "alternate_mobile_number",
        "type": "TextInput",
        "inputType":"phone",
        "title": "Alternate Mobile Number",
        "placeholder": "Enter Alternate Mobile Number",
        "section": "Personal Details",
        "order": 10,
        "validation": {
          "pattern": {
            "value": "^\\d{10}$",
            "message": "Please enter a valid 10-digit phone number."
          }
        }
      },
      {
        "name": "email_id",
        "type": "TextInput",
        "title": "Email ID",
        "placeholder": "Enter Email ID",
        "isRequired": true,
        "section": "Personal Details",
        "order": 11,
        "validation": {
          "required": "Email ID is required",
          "pattern": {
            "value": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
            "message": "Please enter a valid email address."
          }
        }
      },
      {
        "name": "alternate_email_id",
        "type": "TextInput",
        "title": "Alternate Email ID",
        "placeholder": "Enter Alternate Email ID",
        "section": "Personal Details",
        "order": 12,
        "validation": {
          "pattern": {
            "value": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
            "message": "Please enter a valid email address."
          }
        }
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
        "validation": {
          "required": "Marital Status is required"
        }
      },
      {
        "name": "ckyc_number",
        "type": "TextInput",
        "title": "CKYC Number",
        "placeholder": "Enter CKYC Number",
        "section": "Personal Details ",
        "order": 14,
      }
    ]
  };


  
  export const addressDetailsFormData = {
    "elements": [
      {
        "name": "permanent_address_line_1",
        "type": "TextInput",
        "title": "Address Line 1",
        "placeholder": "Enter Address",
        "isRequired": true,
        "section": "Permanent Address Type",
      },
      {
        "name": "permanent_address_line_2",
        "type": "TextInput",
        "title": "Address Line 2",
        "placeholder": "Enter Address",
        "isRequired": true,
        "section": "Permanent Address Type",
      },
      {
        "name": "permanent_address_line_3",
        "type": "TextInput",
        "title": "Address Line 3",
        "placeholder": "Enter Address",
        "isRequired": true,
        "section": "Permanent Address Type",
      },
      {
        "name": "permanent_pincode",
        "type": "TextInput",
        "title": "Pincode",
        "placeholder": "Enter Pincode",
        "isRequired": true,
        "section": "Permanent Address Type",
      },
      {
        "name": "permanent_district",
        "type": "TextInput",
        "title": "District",
        "placeholder": "Enter District",
        "isRequired": true,
        "section": "Permanent Address Type",
      },
      {
        "name": "permanent_state",
        "type": "TextInput",
        "title": "State",
        "placeholder": "Enter State",
        "isRequired": true,
        "section": "Permanent Address Type",
      },
      {
        "name": "permanent_country",
        "type": "dropdown",
        "title": "Country",
        "dropdownData": [
          { key: "india", value: 'India' },
        ],
        "isRequired": true,
        "section": "Permanent Address Type",
      },
      {
        "name": "overseas_same_as_permanent_address",
        "type": "checkbox",
        "title": "Same As Permanent Address",
        "section": "Overseas Address",
      },
      {
        "name": "overseas_address_type",
        "type": "dropdown",
        "title": "Address Type",
        "dropdownData": [
          { key: "business", value: "Business" },
          { key: "registered_office", value: "Registered Office" },
          { key: "residential", value: "Residential" },
          { key: "unspecified", value: "Unspecified" },
          { key: "resident", value: "Resident/Business" },
        ],
        "isRequired": true,
        "section": "Overseas Address",
      },
      {
        "name": "overseas_address_line_1",
        "type": "TextInput",
        "title": "Address Line 1",
        "placeholder": "Enter Address",
        "isRequired": true,
        "section": "Overseas Address",
      },
      {
        "name": "overseas_address_line_2",
        "type": "TextInput",
        "title": "Address Line 2",
        "placeholder": "Enter Address",
        "isRequired": true,
        "section": "Overseas Address",
      },
      {
        "name": "overseas_address_line_3",
        "type": "TextInput",
        "title": "Address Line 3",
        "placeholder": "Enter Address",
        "section": "Overseas Address",
      },
      {
        "name": "overseas_pincode",
        "type": "TextInput",
        "title": "Pincode",
        "placeholder": "Enter Pincode",
        "section": "Overseas Address",
      },
      {
        "name": "overseas_city",
        "type": "TextInput",
        "title": "City",
        "placeholder": "Enter City",
        "isRequired": true,
        "section": "Overseas Address",
      },
      {
        "name": "overseas_country",
        "type": "dropdown",
        "title": "Country",
        "dropdownData": [
          { key: "india", value: 'India' },
        ],
        "isRequired": true,
        "section": "Overseas Address",
      },
      {
        "name": "communication_same_as_permanent_address",
        "type": "checkbox",
        "title": "Same As Permanent Address",
        "section": "Communication Address",
      },
      {
        "name": "communication_same_as_overseas_address",
        "type": "checkbox",
        "title": "Same As Overseas Address",
        "section": "Communication Address",
      },
      {
        "name": "communication_address_preference",
        "type": "RadioButton",
        "title": "Address Preference",
        "radioData": [
          { key: "local", value: "Local" },
          { key: "foreign", value: "Foreign" }
        ],
        "section": "Communication Address",
      },
      {
        "name": "communication_address_type",
        "type": "dropdown",
        "title": "Address Type",
        "dropdownData": [
          { key: "business", value: "Business" },
          { key: "registered_office", value: "Registered Office" },
          { key: "residential", value: "Residential" },
          { key: "unspecified", value: "Unspecified" },
          { key: "resident", value: "Resident/Business" },
        ],
        "isRequired": true,
        "section": "Communication Address",
      },
      {
        "name": "communication_address_line_1",
        "type": "TextInput",
        "title": "Address Line 1",
        "placeholder": "Enter Address",
        "isRequired": true,
        "section": "Communication Address",
      },
      {
        "name": "communication_address_line_2",
        "type": "TextInput",
        "title": "Address Line 2",
        "placeholder": "Enter Address",
        "isRequired": true,
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
        "isRequired": true,
        "section": "Communication Address",
      },
      {
        "name": "communication_country",
        "type": "dropdown",
        "title": "Country",
        "dropdownData": [
          { key: "india", value: 'India' },
        ],
        "isRequired": true,
        "section": "Communication Address",
      },
    ]
  };
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

        // {
        //   "name": "no_pan",
        //   "type": "checkbox",
        //   "title": "Don't have Pan?",
        //   "section": "Profile Details",
        //   "validation": {
        //     "required": "First Name is required"
        //   }
        // },

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
            "validation": {
              "required": "Educational Qualifiaction is required"
            }
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
            "validation": {
              "required": "Occupation is required"
            }
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
            "validation": {
              "required": "Source Of Income is required"
            }
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
            "validation": {
              "required": "Annual Income Slab is required"
            }
        },

        {
          "name": "politically_exposed_person",
          "type": "dropdown",
          "title": "Politically Exposed Person",
          "dropdownData": [
              { key: "Domestic PEP", value: 'Domestic PEP' },
              { key: "International PEP", value: 'International PEP' },
              { key: "Relative of domestic PEP", value: 'Relative of Domestic PEP' },
              { key: "Relative of International PEP", value: ' Relative of International PEP' },
              { key: "Not a PEP", value: 'Not a PEP  ' },
            ],
            "isRequired":true,
            "section": "Profile Details",
            "validation": {
              "required": "Politically Exposed Person is required"
            }
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
            "validation": {
              "required": "Disability is required"
            }
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
            "validation": {
              "required": "Religion is required"
            }
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
            "validation": {
              "required": "Customer Category Code is required"
            }
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
            "validation": {
              "required": "Risk Category is required"
            }
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

export const searchCustomerFormData = {
  elements: {
    "Customer ID": [
      {
        name: "customer_id",
        type: "TextInput",
        title: "Customer ID",
        isRequired: true,
        placeholder: "Enter Customer ID",
        validation: {
          required: "Customer ID is required",
        },
      },
    ],
    "Customer Full Name": [
      {
        name: "customer_name",
        type: "TextInput",
        title: "Customer Name",
        isRequired: true,
        placeholder: "Enter Customer Name",
        validation: {
          required: "Customer Name is required",
        },
      },
      {
        name: "dob",
        type: "Date",
        title: "Customer DOB",
        isRequired: true,
        placeholder: "Enter Customer DOB",
        validation: {
          required: "Customer DOB is required",
        },
      },
    ],
    "Mobile Number": [
      {
        name: "mobile_number",
        type: "phone",
        title: "Mobile Number",
        isRequired: true,
        placeholder: "Enter Mobile Number",
        validation: {
          required: "Mobile Number is required",
          pattern: {
            value: /^\\d{12}$/,
            message: "Please enter a valid 10-digit phone number.",
          },
        },
      },
    ],
    "PAN": [
      {
        name: "pan",
        type: "TextInput",
        title: "Enter PAN number",
        isRequired: true,
        placeholder: "Enter PAN Number",
        validation: {
          required: "PAN Number is required",
          pattern: {
            value: /^([A-Z]){5}([0-9]){4}([A-Z]){1}$/,
            message: "Please enter a valid 10-character PAN number.",
          },
        },
      },
    ],
    "Proof of Address": [
    
      {
        name: "proof_category",
        type: "dropdown",
        title: "Proof Category",
        dropdownData: [
          { key: 'Aadhar', value: 'Aadhar' },
          { key: 'Driver’s License', value: 'Driver License' },
          { key: 'Job Contract', value: 'Job Contract' },
          { key: 'NREGA', value: 'NREGA' },
          { key: 'Passport', value: 'Passport' },
          { key: 'Voters ID Card', value: 'Voters ID Card' },
        ],
        isRequired: true,
        section: "Profile Details",
        validation: {
          required: "Risk Category is required",
        },
      },
      {
        name: "proof_id",
        type: "TextInput",
        title: "Enter Proof Of ID",
        isRequired: true,
        placeholder: "Enter Proof ID",
        validation: {
          required: "Proof ID is required",
        },
      },
    ],
    "CKYC Number":[{
      name: "CKYC Number",
      type: "TextInput",
      title: "Enter CKYC Number",
      isRequired: true,
      placeholder: "Enter CKYC Number",
      validation: {
        required: "CKYC Number is required",
        pattern:{
          value:/^[a-zA-Z0-9]{14}$/,
          message:"Enter a valid CKYC number"

        }
        
      
      },
    },
  ]
  },
  
};
