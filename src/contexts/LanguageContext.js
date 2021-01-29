import React, { Component } from 'react';

const LanguageContext = React.createContext({
    language: {}, 
    words: [],
    head: null,
    processLanguage: () => {},
    processNextWord: () => {},
    setError: () => {},
    clearError: () => {},
});

export default LanguageContext;

export class LanguageProvider extends Component {
    constructor(props){
        super(props);
        const state = { language: {}, words: [], head: null};
        this.state = state;
    }

    componentDidMount(){}

    componentWillUnmount(){}

    setError = error => {
        console.error(error);
        this.setState({ error });
    };

    clearError = () => {
        this.setState({ error: null});
    };

    processNextWord = head => {
        this.setState({ head: head})
    };

    render() {
        const value = { 
            language: this.state.language,
            words: this.state.words,
            head: this.state.head,
            error: this.state.error,
            setError: this.state.setError,
            processLanguage: this.state.processLanguage,
            processLogout: this.state.processLogout,
        };

        return(
            <LanguageContext.Provider value={value}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}