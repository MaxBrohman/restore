import React from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends React.Component {
    constructor(){
        super();
        this.state = {
            error: false
        };
    }

    componentDidCatch(){
        this.setState({
            error: true
        })
    };

    render(){
        if(this.state.error){
            return <ErrorIndicator/>;
        }
        return this.props.children;
    };
};