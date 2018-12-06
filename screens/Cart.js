import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert  } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import table from 'console.table';

import Footer from '../components/Footer'; 
import Header from '../components/Header';
import styles from '../styles/Cart';


class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            courseObject:{},
            firstName:'',
            lastName:''
        };

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onPressPurchase = this.onPressPurchase.bind(this);
    }

    onChangeFirstName(firstName) {
        console.log('firstName', firstName);
        this.state.firstName = firstName;
    }

    onChangeLastName(lastName) {
        console.log('lastName', lastName);
        this.state.lastName = lastName;
    }

    onPressPurchase(firstName,lastName) {
        if (firstName == '' || lastName == ''){
            Alert.alert('Inavlid Name entry' );
        }
        else {
            const alertString = firstName + ', you have purchased ' + this.props.cart.getItems()[0].getCourse().title 
            Alert.alert(alertString);
        }
    }

    componentDidMount(){
        //console.log(this.props.cart.getItems()[0].getPrice());
        const result = table.getTable(this.props.cart.getItems()[0].getCourse());
        // console.log(this.props.cart.getItems()[0].getCourse().title);
        this.setState({
            courseObject: result
        });
    }

    render(){

        const title = this.props.cart.getItems()[0].getCourse().title;
        const price = this.props.cart.getItems()[0].getPrice()/100;
        const vendor = this.props.cart.getItems()[0].getCourse().vendorName;

        return(
        
            <View style={styles.container}>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <ScrollView>
                        <Header/>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.text}>Offered By: {vendor}</Text>
                        <View style={styles.line}/>
                        <Text style={styles.text}>Who is going?</Text>
                        <TextInput
                            style={styles.inputText}
                            onChangeText={this.onChangeFirstName}
                            placeholder="First Name"
                        />
                        <TextInput
                            style={styles.inputText}
                            onChangeText={this.onChangeLastName}
                            placeholder="Last Name"
                        />
                        <View style={styles.line}/>
                        <Text style={styles.text}>Total Cost: {price.toLocaleString("en-US", {style:"currency", currency:"USD"})}.00</Text>
                        <TouchableOpacity style={styles.button} onPress={() => this.onPressPurchase(this.state.firstName,this.state.lastName)}>
                            <Text style={styles.buttonText}>Purchase</Text>
                        </TouchableOpacity>
                        
                    </ScrollView>
                </KeyboardAvoidingView>
                <Footer/>
            </View>
        
        )
    }

    
}

const mapStateToProps = (state) => (
    {
        cart: state.cartReducer.cart,
    }
);

const mapDispatchToProps = dispatch => (
    {

    }
);

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Cart));

