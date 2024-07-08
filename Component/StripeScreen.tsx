import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StripeProvider, CardField, useStripe, createToken } from '@stripe/stripe-react-native';

class StripeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cardInfo: null,
    };
  }

  fetchCardDetail = (cardDetail) => {
    if (cardDetail.complete) {
      this.setState({ cardInfo: cardDetail });
    } else {
      this.setState({ cardInfo: null });
    }
  };

  onDone = async () => {
    const { cardInfo } = this.state;
    console.log('====>>>>@@@cardInfoSUCCESS', cardInfo);
    if (cardInfo) {
      try {
        const resToken = await createToken({ ...cardInfo, type: 'Card' });
        console.log('resToken', resToken);
      } catch (error) {
        alert('Error raised during create token');
      }
    }
  };

renderCardFunc = ()=>{
  return(
    <CardField
    postalCodeEnabled={true}
    placeholders={{
      number: '4242 4242 4242 4242',
    }}
    cardStyle={{
      backgroundColor: '#FFFFFF',
      textColor: '#000000',
    }}
    style={{
      width: '100%',
      height: 50,
      marginVertical: 30,
    }}

    onCardChange={(cardDetails) => {
      this.fetchCardDetail (cardDetails)
      }}
      onFocus={(focusedField) => {
      console.log ('focusField', focusedField);
      }}
  
  />
  )
}

  render() {
    return (
      <StripeProvider
        publishableKey={"pk_test_51NAtjgSHqprcagd1H1YxbMpKLckMt4B2G8MQePg4BsfjpvgF5J2Iw8532lDFwjAhnlTrMT4kEosMXPGbTelezenq00Gwu88Vqb"}
        merchantIdentifier="merchant.identifier" // required for Apple Pay
        urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      >
        {this.renderCardFunc()}   
    <TouchableOpacity style={{width:200,height:40,backgroundColor:'orange',justifyContent:'center',alignItems:'center'}}
    onPress={()=>{this.onDone()}}>
      <Text>Pay Now</Text>
      </TouchableOpacity>   
  </StripeProvider>
    );
  }
}
 export default StripeScreen



function alert(arg0: string) {
  throw new Error('Function not implemented.');
}

