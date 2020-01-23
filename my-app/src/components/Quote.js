import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {getQuote} from '../actions';
import styled from 'styled-components';

const DivStyles = styled.div`
    padding: 30px;
    border: 2px solid lavender;
    border-radius: 20px;
    margin: 20px 40px;
    background: seashell;
`;

const H1Styles = styled.h1`
    font-family: monospace;
    font-size: 2.2rem;
    font-style: oblique;
`;

const QuoteStyles = styled.h5`
    font-family: monospace;
    font-size: 1rem;
    padding: 10px;
    letter-spacing: 1.2px;
`;

const Button = styled.button`
    background: dimgray;
    color: white;
    padding: 15px 40px;
    border-radius: 20px;
    font-family: monospace;
    margin: 20px;
    letter-spacing: 1.2px;
`;

const Quote = props => {
    return (
        <DivStyles>
            <H1Styles>Ron Swanson Knows Best!</H1Styles>
            {props.isFetching && (
                <Loader 
                    type='Ball-Triangle' 
                    color='aqua' 
                    height={100} 
                    width={100} 
                />
            )}
            {props.data && <QuoteStyles>{props.data.data}</QuoteStyles>}
            <Button onClick={props.getQuote}>Wisdom from Ron</Button>
        </DivStyles>
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