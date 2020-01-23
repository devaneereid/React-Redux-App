import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {getQuote} from '../actions';

const Quote = props => {
    return (
        <div>
            <h1>Ron Swanson Knows Best!</h1>
            {props.isFetching && (
                <Loader 
                    type='Puff' 
                    color='aqua' 
                    height={100} 
                    width={100} 
                    timeout={4000} />
            )}
            {props.data && <h5>{props.data.data}</h5>}
            <button onClick={props.getQuote}>Wisdom from Ron</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        data: state.data,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {getQuote}
)(Quote);