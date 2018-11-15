import React, {PureComponent} from 'react';
import { View, ScrollView, Text, Image, TouchableHighlight, FlatList } from 'react-native';
import { withRouter } from 'react-router-native';
import Footer from '../components/Footer';
import urls from '../constants/urls';
import catStyle from '../styles/Catagories';

class Course extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            course : {},
            status: false
        };
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

    render() {
        return (
            <View style= {{flex:1}}>
                <ScrollView >
                    <View style={styles.contentContainer}>
                        <Text>{this.state.course.title}</Text>
                        <Text>Vendor: {this.state.course.vendorName}</Text>
                        <Image source={{uri: `${this.state.course.images}`}} style={{width: 150, height: 150}}/>
                        <Text>Price: {this.setPrice()}</Text>
                        <Text>Rating: {this.state.course.rating}</Text>
                        <Text>Description: {this.state.course.description}</Text>
                        <Text>Audience: {this.state.course.audience} </Text>
                        <Text>Seats Available: </Text>
                        <Text>Class Size: </Text>

                        <TouchableHighlight onPress={()=> this.toggleStatus()} style={catStyle.card}>
                            <Text style={catStyle.cardText}>More Details</Text>
                        </TouchableHighlight>
                        {this.state.status ? 
                        <ScrollView>
                            {this.getInfo()}
                        </ScrollView>
                        : null}
                    </View>
                </ScrollView>
                    <Footer />
            </View>
        )
    }

}

const styles = {
    pageContainer: {
       flex:1
    },
    contentContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20
    }
}

export default withRouter(Course);