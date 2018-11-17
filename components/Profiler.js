import React, { Component } from 'react';
import { Text, View, TextInput,TouchableOpacity } from 'react-native';
import { withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import styles from '../styles/Searcher';
import { fetchProfile } from '../actions/userActions';

    // Link profiler props to store
const mapStateToProps = (state) => (
    {
        filter: state.searchReducer.searchFilter,
    }
);

    // this links Searcher functions to the dispatcher so we can call sagas.
const mapDispatchToProps = dispatch => (
    {
        onSearch: (filter, history) => {
            dispatch(fetchProducts(filter));    // call to the saga via action
            history.push("/results");           // push to new component on completion
        },
    }
);