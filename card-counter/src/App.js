import React from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled, ThemeProvider, createTheme, lightThemePrimitives } from 'baseui';
import { Header } from 'baseui/accordion/styled-components';
import RulesComponent from './components/rulesComponent.js';
import CardComponent from './components/cardComponent.js';
import {Button, KIND, StyledBaseButton} from 'baseui/button';
import ProbabilitiesCardComponent from './components/probabilitiesCard.js';
import twoImage from './2_of_clubs.png';
import threeImage from './3_of_clubs.png';
import fourImage from './4_of_clubs.png';
import fiveImage from './5_of_clubs.png';
import sixImage from './6_of_clubs.png';
import sevenImage from './7_of_clubs.png';
import eightImage from './8_of_clubs.png';
import nineImage from './9_of_clubs.png';
import tenImage from './10_of_clubs.png';
import aceImage from './ace_of_clubs.png';

const engine = new Styletron();
const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});
const CardDiv = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  height: '100%',
  flexWrap: 'wrap',
  marginTop: '1%',
})

function App() {
  
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <Header> Blackjack Card Counter </Header>
        </Centered>
        <RulesComponent />
        <CardDiv>
          <ProbabilitiesCardComponent cardValue={'Ace'} />
          <ProbabilitiesCardComponent cardValue={'Ace'} />
        </CardDiv>
        <CardDiv>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => alert('thank you 🙂')} kind={KIND.tertiary}>
              <CardComponent cardValue={2} cardImage={twoImage}/>
            </Button>    
          </ThemeProvider>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => alert('thank you 🙂')} kind={KIND.tertiary}>
              <CardComponent cardValue={3} cardImage={threeImage}/>
            </Button>    
          </ThemeProvider>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => alert('thank you 🙂')} kind={KIND.tertiary}>
              <CardComponent cardValue={4} cardImage={fourImage}/>
            </Button>    
          </ThemeProvider>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => alert('thank you 🙂')} kind={KIND.tertiary}>
              <CardComponent cardValue={5} cardImage={fiveImage}/>
            </Button>    
          </ThemeProvider>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => alert('thank you 🙂')} kind={KIND.tertiary}>
              <CardComponent cardValue={6} cardImage={sixImage}/>
            </Button>    
          </ThemeProvider>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => alert('thank you 🙂')} kind={KIND.tertiary}>
              <CardComponent cardValue={7} cardImage={sevenImage}/>
            </Button>    
          </ThemeProvider>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => alert('thank you 🙂')} kind={KIND.tertiary}>
              <CardComponent cardValue={8} cardImage={eightImage}/>
            </Button>    
          </ThemeProvider>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => alert('thank you 🙂')} kind={KIND.tertiary}>
              <CardComponent cardValue={9} cardImage={nineImage}/>
            </Button>    
          </ThemeProvider>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => alert('thank you 🙂')} kind={KIND.tertiary}>
              <CardComponent cardValue={10} cardImage={tenImage}/>
            </Button>    
          </ThemeProvider>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => alert('thank you 🙂')} kind={KIND.tertiary}>
              <CardComponent cardValue={'Ace'} cardImage={aceImage}/>
            </Button>    
          </ThemeProvider>
        </CardDiv>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;