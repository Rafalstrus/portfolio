import React, { Component } from 'react';
import './css/App.css';
import { SliderContainer } from './components/slider/slider-container.component';
import { AuthorHeader } from './components/aboutAuthor/header.component';
import { ProjectsContainer } from './components/projects/projects-container.component';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLanguageCode :"PL",
      allTexts : [],
      colorMode: cookies.get('colorMode')
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

  handleCurrentLanguageCode = code => {
    this.setState({currentLanguageCode: code})
  }

  handleChangeColorMode = mode => {
    this.setState({colorMode: mode})
  }

  render() {
    return(
      <div className="App">
      <SliderContainer
      lang = {this.state.allTexts}
      languageCodeChange = {this.handleCurrentLanguageCode}
      colorMode ={this.state.colorMode}
      colorChange = {this.handleChangeColorMode}
      />
        {this.state.allTexts.filter(language => language.languageSymbol.includes(this.state.currentLanguageCode)).map(info =>(
        <div>
        <AuthorHeader 
        informations = {info}
        />

        <ProjectsContainer
        projects = {info.projects}
        />
    </div>
        ))}
        </div>
    )
  }
  }

export default App;
