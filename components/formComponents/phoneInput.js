import { View, Text } from 'react-native'
import React from 'react'

export default function PhoneNumberInput() {
    onPressFlag()
    {
        this.countryPicker.openModal()
    }
    
    
  return (

        <View style={styles.container}>
            <PhoneInput
                ref={(ref) => { this.phone = ref; }}
                onPressFlag={this.onPressFlag}
                initialCountry={'ind'}
                initialValue="13178675309"
                textProps={{
                    placeholder: 'Enter a phone number...'
                }}
            />
    </View>
  )
}