import React, {PureComponent} from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import { addCourseToCart } from '../actions/cartActions'
import cart from 'mspnmodel/distribution/cart/cart';
import cartLineItem from  'mspnmodel/distribution/cart/cartLineItem';
import Footer from '../components/Footer';
import urls from '../constants/urls';
import styles from '../styles/Course';

class Course extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            course : {},
            status: false
        };
        this.addToCart = this.addToCart.bind(this);
    }
    
    toggleStatus(){
        this.setState({
          status:!this.state.status
        });
      }

    componentDidMount(){
        return fetch(`${urls.mspnApiRoot}/course/${this.props.location.state.id}`)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                course: responseJson
            }, function() {

            });
        })
        .catch((error) => console.log(error))
    }
    setPrice(){
        let dollars = this.state.course.price/100.00;
        return "$ " + parseFloat(Math.round(dollars * 100) / 100).toFixed(2);;
    }
    getImages(){
        if(this.state.course.images.length >= 1) {
            this.state.course.images.map( (image) => {
                <Image source={{uri: image}}/>
            })
        } else {
            <Text>No Images</Text>
        }
        
    }

    getInfo() {
        let obj = this.state.course.information; 
        let keys = [];
        for(let key in obj){
            keys.push(obj[key]);   
        }
        _keyExtractor = (item, index) => item.label;
        return (
            <FlatList
            data={keys}
            renderItem={({item}) => <Text>{item.label}: {item.value}</Text>}
            keyExtractor={_keyExtractor}
            />
        ) 
    }

    addToCart() {
        const myCourse = new cartLineItem();
        myCourse.buildFromJSON(this.state.course);
        console.log(myCourse);
        this.props.addCourseToCart(myCourse, this.props.history);
    }

    render() {
        return (
            <View style= {{flex:1}}>
                <ScrollView >
                        <Image source={{uri: `${this.state.course.images}`}} style={styles.image}/>
                        <View style = {styles.marginFrame}>
                            <Text style = {styles.title}>{this.state.course.title}</Text>
                            <Text style = {styles.vendor}>Hosted by: {this.state.course.vendorName}</Text>
                            <Text style = {styles.price}>{this.setPrice()} per guest</Text>
                            <Text style = {styles.audience}>Audience: {this.state.course.audience} </Text>
                            <Text style = {styles.text}>{this.state.course.description}</Text>
                                <TouchableOpacity style={styles.button} onPress={()=> this.toggleStatus()}>
                                    <Text style={styles.buttonText}>More Details</Text>
                                </TouchableOpacity>
                            {this.state.status ? 
                            <ScrollView>
                                {this.getInfo()}
                            </ScrollView>
                            : null}
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText} onPress={this.addToCart}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                </ScrollView>
                    <Footer />
            </View>
        )
    }

}

const mapStateToProps = (state) => (
    {
        cart: state.cartReducer.cart,
    }
);

    // this links Course functions to the dispatcher so we can call sagas.
const mapDispatchToProps = dispatch => (
    {
        addCourseToCart: (course, history) => {
            dispatch(addCourseToCart(course));    // call to the saga via action
            history.push("/cart");           // push to new component on completion
        },
    }
);

export default connect(mapStateToProps, mapDispatchToProps) (withRouter(Course));
