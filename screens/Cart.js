import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import table from 'console.table';

import Footer from '../components/Footer'; 
import Header from '../components/Header';

class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            courseObject:{}
        };
    }

    componentDidMount(){
        //console.log(this.props.cart.getItems()[0].getPrice());
        const result = table.getTable(this.props.cart.getItems()[0].getCourse());
        console.log(this.props.cart.getItems()[0].getCourse().title);
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
            <ScrollView>
                <Header/>
                <Text>{title}</Text>
                <Text>{price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</Text>
                <Text>{vendor}</Text>
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
