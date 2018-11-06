import React, {Component} from 'react';
import { View, ScrollView, Text, Button, Image, TouchableHighlight } from 'react-native';
import { withRouter } from 'react-router-native';
import Footer from '../components/Footer';

class Course extends Component{
    state = {
        course : {},
        status: false
};
    toggleStatus(){
        this.setState({
          status:!this.state.status
        });
      }

    componentWillMount(){
        return fetch('https://mspnapi.dolehesten.org/mspnapi/course/'+this.props.location.state.id)
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

    render() {
        return (
            <View style= {{flex:1}}>
                <ScrollView >
                    <View style={styles.contentContainer}>
                        <Text>{this.state.course.title}</Text>
                        <Text>Vendor: {this.state.course.vendorName}</Text>
                        {/* <Image style={{width: 60, height: 60}} source={{uri: this.state.course.images[0]}} /> */}
                        <Text>{JSON.stringify(this.state.course.images)}</Text>
                        <Text>Price: {this.setPrice()}</Text>
                        <Text>Rating: {this.state.course.rating}</Text>
                        <Text>Description: {this.state.course.description}</Text>
                        <Button title="Home" onPress={() => this.props.history.push("/")}/>

                        <TouchableHighlight onPress={()=>this.toggleStatus()}>
                            <Text>More Details</Text>
                        </TouchableHighlight>
                        {this.state.status ? <Text>Some Details</Text>: null}
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