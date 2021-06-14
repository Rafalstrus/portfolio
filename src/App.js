import React, { Component } from 'react';
import './css/App.css';
import { StickyContainer } from './components/sticky/sticky-container.component';
import { AuthorHeader } from './components/aboutAuthor/header.component';
import { ProjectsContainer } from './components/projects/projects-container.component';
import {Contact} from './components/contact/contact-container.component';
import {ProjectSlide} from './components/project-slide/project-slide-container.component'

import Cookies from 'universal-cookie';
const cookies = new Cookies();

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLanguageCode :(cookies.get('languageCode')==='PL') ? "PL": "EN",
      allTexts : [],
      colorMode: (cookies.get('colorMode')==='dark') ? "dark" : "light",
      projectPhoto: ""
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
    cookies.set('languageCode',(this.state.currentLanguageCode==="PL") ? "EN" : "PL")
  }

  handleChangeColorMode = mode => {
    this.setState({colorMode: mode})
  }
  HandleProjectData = projectPhoto =>{
    this.setState({projectPhoto})
  }
  render() {
    return(
      <div className="App">
      <StickyContainer
      lang = {this.state.allTexts}
      currentLang = {this.state.currentLanguageCode}
      languageCodeChange = {this.handleCurrentLanguageCode}
      colorMode ={this.state.colorMode}
      colorChange = {this.handleChangeColorMode}
      />
        {this.state.allTexts.filter(language => language.languageSymbol.includes(this.state.currentLanguageCode)).map(info =>(
        <div>
        <AuthorHeader 
        informations = {info}
        />
        <p className="header">{info["projects-header"]}</p>
        <ProjectsContainer
        projects = {info.projects}
        setProjectSlide = {this.HandleProjectData}
        />
    
        
        <Contact
        contactInfo = {info.contact}
        />
        </div>
        ))}
<ProjectSlide
/>
        </div>
    )
  }
  }

export default App;
