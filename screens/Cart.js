import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import table from 'console.table';

import Footer from '../components/Footer'; 
import Header from '../components/Header';
import styles from '../styles/Course';
import stylesR from '../styles/CourseRow';

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
        <View style={{flex:1}}>
            <ScrollView>
                <Header/>
                <View styles={styles.marginFrame}>
                <Text style={stylesR.title}>{title}</Text>
                <Text style={stylesR.price}>${price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</Text>
                <Text style={stylesR.description}>{vendor}</Text>
                <TouchableOpacity style={styles.button} onPress={()=> this.props.history.push("/purchase", {title: title})}>
                                    <Text style={styles.buttonText}>Checkout</Text>
                </TouchableOpacity>
                </View>
                
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

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//     }
// });
