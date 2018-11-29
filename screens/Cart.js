import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';

import Footer from '../components/Footer'; 
import Header from '../components/Header';

class Cart extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.props.cart);
    }

    render(){
        return(
        <View style={styles.container}>
            <ScrollView>
                <Header/>
                <Text>Cart</Text>
            </ScrollView>
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

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});
