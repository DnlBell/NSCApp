import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import CourseRow from '../Course/CourseRow';

const mapStateToProps = (state) => (
    {
        searchResultsCourses: state.searchReducer.searchResultsCourses,
        searchResultsPartners: state.searchReducer.searchResultsPartners,
    }
);

const SearchResults = (props) => {
    if (props.searchResultsCourses && props.searchResultsCourses.length) {
        return (
            <View>
                {props.searchResultsCourses.map((c) => <CourseRow key={c.id} course={c} /> )}
            </View>
        );
    } else {
        return (
            <View>
                <Text>
                    No courses for you.
                </Text>
            </View>
        );
    }
};

export default connect(mapStateToProps)(SearchResults);