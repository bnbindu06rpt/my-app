import { presentHousingLoanAmount,  carInsuranceRenewalMonth } from "./dropdownValues"
export const additionalDetailsFormData = {
    "elements" : [
      {
          "name": "i_am_interested_in_whatsapp_banking_facility",
          "type": "RadioButton",
          "title": "Nominee Required",
          "radioData": [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          // "isRequired":true,
          "section": "Additional Details",
 
      },
 
      {
        "name": "interested_financial_products",
        "type": "checkbox",
        "title": "I will be interested in the following financial products in next 3 to 6 months future.",
        // "isRequired": true,
        "section": "Additional Details",
        "validations": {
          "allowed_options": [
            "Recurring Deposit",
            "Fixed Deposit",
            "Credit Card",
            "Home Loan",
            "Personal Loan",
            "Loan Against Property",
            "Gold Loan",
            "Two Wheeler Loan",
            "Car Loan",
            "Business Loan",
            "Working Capital Limit",
            "Life Insurance",
            "Car Insurance",
            "Health Insurance",
            "Accident Protection Plan",
            "Locker",
            "Demat & Trading Account",
            "Mutual Funds"
          ]
        },
        "options": [
          {
            "label": "Deposit Products",
            "options": [
              {
                "value": "Recurring Deposit",
                "label": "Recurring Deposit"
              },
              {
                "value": "Fixed Deposit",
                "label": "Fixed Deposit"
              }
            ]
          },
          {
            "label": "Loan Products",
            "options": [
              {
                "value": "Credit Card",
                "label": "Credit Card"
              },
              {
                "value": "Home Loan",
                "label": "Home Loan"
              },
              {
                "value": "Personal Loan",
                "label": "Personal Loan"
              },
              {
                "value": "Loan Against Property",
                "label": "Loan Against Property"
              },
              {
                "value": "Gold Loan",
                "label": "Gold Loan"
              },
              {
                "value": "Two Wheeler Loan",
                "label": "Two Wheeler Loan"
              },
              {
                "value": "Car Loan",
                "label": "Car Loan"
              },
              {
                "value": "Business Loan",
                "label": "Business Loan"
              },
              {
                "value": "Working Capital Limit",
                "label": "Working Capital Limit"
              }
            ]
          },
          {
            "label": "Insurance Products",
            "options": [
              {
                "value": "Life Insurance",
                "label": "Life Insurance"
              },
              {
                "value": "Car Insurance",
                "label": "Car Insurance"
              },
              {
                "value": "Health Insurance",
                "label": "Health Insurance"
              },
              {
                "value": "Accident Protection Plan",
                "label": "Accident Protection Plan"
              }
            ]
          },
          {
            "label": "Other Products",
            "options": [
              {
                "value": "Locker",
                "label": "Locker"
              },
              {
                "value": "Demat & Trading Account",
                "label": "Demat & Trading Account"
              },
              {
                "value": "Mutual Funds",
                "label": "Mutual Funds"
              }
            ]
          }
        ]
      },
 
 
      {
        "name": "primary_bank_name",
        "type": "TextInput",
        "title": "Primary Bank Name",
        "placeholder": "Enter primary bank name",
        // "isRequired": true,
        "section": "Additional Details",
 
      },
 
      {
        "name": "present_life_insurance_coverage_amount",
        "type": "TextInput",
        "title": "Present Life Insurance Coverage Amount",
        "placeholder": "Enter Present Life Insurance Coverage Amount ",
        // "isRequired": true,
        "section": "Additional Details",
 
      },
 
      {
        "name": "present_housing_loan_amount",
        "type": "dropdown",
        "title": "Present Housing Loan Amount ",
        "dropdownData": presentHousingLoanAmount,
        // "isRequired": true,
        "section": "Additional Details",
      },
 
      {
        "name": "present_housing_loan_bank",
        "type": "TextInput",
        "title": "Present Housing Loan Bank",
        "placeholder": "Enter Present Housing Loan Bank ",
        // "isRequired": true,
        "section": "Additional Details",
 
      },
 
      {
        "name": "car_insurance_renewal_month",
        "type": "dropdown",
        "title": "Car Insurance Renewal Month ",
        "dropdownData": carInsuranceRenewalMonth,
        // "isRequired": true,
        "section": "Additional Details",
      },
 
      {
        "name": "consent",
        "type": "RadioButton",
        "title": "Consent:For getting proper offer, I am permitting the bank to check my credit exposure with credit bureaus as and when required by the bank.",
        "radioData": [
          { label: "Yes", value: "Yes" },
          { label: "No", value: "No" }
        ],
        // "isRequired":true,
        "section": "Additional Details",
 
    },
    ]
  }
 