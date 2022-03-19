import React from 'react';
import './css/App.css';
import MainPage from './components/pages/Main.page';
import { ThemeProvider } from '@emotion/react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { CssBaseline } from '@mui/material/';
import { createTheme } from '@mui/material';

function App() {

  const themeState = useSelector((state: RootStateOrAny) => state.themeState);
  const theme = React.useMemo(
    () => (createTheme({
      palette: {
        mode: (themeState.value === 'light') ? 'light' : 'dark',
      },
    })),
    [themeState.value]
  );
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <MainPage />
    </ThemeProvider>
  )
}
// old version
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       currentLanguageCode: (cookies.get('languageCode') === 'PL') ? "PL" : "EN",
//       allTexts: [],
//       colorMode: (cookies.get('colorMode') === 'light') ? "light" : "dark",
//     }
//   }

//   async componentDidMount() {
//     try {
//       const allTexts = await this.getLanguages();

//       this.setState({ allTexts })
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   getLanguages() {
//     return fetch('languages.json')
//       .then((response) => response.json())
//   }

//   handleCurrentLanguageCode = code => {
//     this.setState({ currentLanguageCode: code })
//     cookies.set('languageCode', (this.state.currentLanguageCode === "PL") ? "EN" : "PL")
//   }

//   handleChangeColorMode = mode => {
//     this.setState({ colorMode: mode })
//   }
//   render() {
//     return (
//       <div className="App">
//         <StickyContainer
//           lang={this.state.allTexts}
//           currentLang={this.state.currentLanguageCode}
//           languageCodeChange={this.handleCurrentLanguageCode}
//           colorMode={this.state.colorMode}
//           colorChange={this.handleChangeColorMode}
//         />
//         {this.state.allTexts.filter(language => language.languageSymbol.includes(this.state.currentLanguageCode)).map(info => (
//           <div key="main">
//             <AuthorHeader
//               informations={info}
//             />
//             <Technologies
//               informations={info.technologies}
//             />
//             <p className="header">{info["projects-header"]}</p>
//             <ProjectsContainer
//               projects={info.projects}
//             />


//             <Contact
//               contactInfo={info.contact}
//             />
//             <Footer
//               informations={info.footer}
//             />
//           </div>

//         ))}
//       </div>
//     )
//   }
// }

export default App;
