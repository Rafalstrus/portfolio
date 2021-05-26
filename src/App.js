import React, { Component } from 'react';
import './App.css';
import { Language } from './components/cookies/language.component';
import { AuthorHeader } from './components/aboutAuthor/header.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLanguageCode :"PL",
      allTexts : []
    }
  }

  async componentDidMount() {
    try{
      const allTexts = await this.getLanguages();
      this.setState({ allTexts })
} catch (error) {
      console.log(error)
    }
  }

  getLanguages() {
    return fetch('languages.json')
    .then((response) => response.json())
  }

  handleCurrentLanguageCode= code => {
    this.setState({currentLanguageCode: code})

  }

  render() {
    return(
      <div className="App">
      <Language
      lang = {this.state.allTexts}
      languageCodeChange = {this.handleCurrentLanguageCode}
      />
        {this.state.allTexts.filter(language => language.languageSymbol.includes(this.state.currentLanguageCode)).map(info =>(
        <AuthorHeader 
        informations = {info}
        />

        ))}
        </div>
    )
  }
  }

export default App;
