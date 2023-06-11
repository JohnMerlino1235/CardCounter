import React, { useState } from 'react';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, styled, ThemeProvider, createTheme, lightThemePrimitives } from 'baseui';
import { Header } from 'baseui/accordion/styled-components';
import RulesComponent from './components/rulesComponent.js';
import CardComponent from './components/cardComponent.js';
import {Button, KIND} from 'baseui/button';
import ProbabilitiesCardComponent from './components/probabilitiesCard.js';
import {Card, StyledBody, StyledAction} from 'baseui/card';
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

const initialDeck = ["A", "A", "A", "A", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10",
                     "A", "A", "A", "A", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10",
                     "A", "A", "A", "A", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10",
                     "A", "A", "A", "A", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10",
                     "A", "A", "A", "A", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10",
                     "A", "A", "A", "A", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10",
                     "A", "A", "A", "A", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10",
                     "A", "A", "A", "A", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10",
];

function App() {
  const [currentDeck, setCurrentDeck] = React.useState(initialDeck);
  const [amountOfTwos, setAmountOfTwos] = React.useState(32);
  const [amountOfThrees, setAmountOfThrees] = React.useState(32);
  const [amountOfFours, setAmountOfFours] = React.useState(32);
  const [amountOfFives, setAmountOfFives] = React.useState(32);
  const [amountOfSixes, setAmountOfSixes] = React.useState(32);
  const [amountOfSevens, setAmountOfSevens] = React.useState(32);
  const [amountOfEights, setAmountOfEights] = React.useState(32);
  const [amountOfNines, setAmountOfNines] = React.useState(32);
  const [amountOfTens, setAmountOfTens] = React.useState(128);
  const [amountOfAces, setAmountOfAces] = React.useState(32);
  const [count, setCount] = React.useState(0);
  const [updateProbability, setUpdateProbability] = useState(false);

  React.useEffect(() => {
    if(updateProbability) {
      setAmountOfTwos(currentDeck.filter(x => x === "2").length);
      setAmountOfThrees(currentDeck.filter(x => x === "3").length);
      setAmountOfFours(currentDeck.filter(x => x === "4").length);
      setAmountOfFives(currentDeck.filter(x => x === "5").length);
      setAmountOfSixes(currentDeck.filter(x => x === "6").length);
      setAmountOfSevens(currentDeck.filter(x => x === "7").length);
      setAmountOfEights(currentDeck.filter(x => x === "8").length);
      setAmountOfNines(currentDeck.filter(x => x === "9").length);
      setAmountOfTens(currentDeck.filter(x => x === "10").length);
      setAmountOfAces(currentDeck.filter(x => x === "A").length);
      setUpdateProbability(false);
    }
  }, [updateProbability])

  function updateCurrentDeck(card) {
    // remove card from deck
    for(const currentCardIndex in currentDeck) {
      if(currentDeck[currentCardIndex] === card) {
        console.log('index of 2', currentDeck.indexOf("2"))
        currentDeck.splice(currentCardIndex, 1);
        break;
      }
    }

    // update current count for low card ( + 1 )
    if(card === '2' || card === '3' || card === '4' || card === '5' || card === '6') {
      setCount(count + 1);
    }

    // update current count for high card ( -1 )
    if(card === 'A' || card === '10') {
      setCount(count - 1);
    }

    // update probability
    setUpdateProbability(true);
  }

  function resetCardCounter() {
    setCurrentDeck(["A", "A", "A", "A", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10",
    "A", "A", "A", "A", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10",
    "A", "A", "A", "A", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10",
    "A", "A", "A", "A", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10",
    "A", "A", "A", "A", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10",
    "A", "A", "A", "A", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10",
    "A", "A", "A", "A", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10",
    "A", "A", "A", "A", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4", "4", "4", "5", "5", "5", "5", "6", "6", "6", "6", "7", "7", "7", "7", "8", "8", "8", "8", "9", "9", "9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10",
    ]);
    setAmountOfTwos(32);
    setAmountOfThrees(32);
    setAmountOfFours(32);
    setAmountOfFives(32);
    setAmountOfSixes(32);
    setAmountOfSevens(32);
    setAmountOfEights(32);
    setAmountOfNines(32);
    setAmountOfTens(128);
    setAmountOfAces(32);
    setCount(0);
    setUpdateProbability(true);
  }

  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Centered>
          <Header> Blackjack Card Counter </Header>
        </Centered>
        <RulesComponent />
        <CardDiv>
          <ProbabilitiesCardComponent cardValue={'Ace'} runningCount={count} highCardProb={(((amountOfTens + amountOfAces) / currentDeck.length) * 100).toFixed(2)} 
          lowCardProb={(((amountOfTwos + amountOfThrees + amountOfFours + amountOfFives + amountOfSixes) / currentDeck.length) * 100).toFixed(2)}/>
          <Card
              overrides={{Root: {style: {width: '328px'}}}}
              title={`Reset the Counter`}
            >
            <StyledBody>
              Reset the counter once the dealer shuffles and a new shoe is being dealt
            </StyledBody>
            <StyledAction>
              <Button overrides={{BaseButton: {style: {width: '100%'}}}} onClick={resetCardCounter}>
                Reset
              </Button>
            </StyledAction>
          </Card>
        </CardDiv>
        <CardDiv>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => updateCurrentDeck("2")} kind={KIND.tertiary}>
              <CardComponent cardValue={2} cardImage={twoImage} cardPercent={((amountOfTwos / currentDeck.length) * 100).toFixed(2)}/>
            </Button>    
          </ThemeProvider>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => updateCurrentDeck("3")} kind={KIND.tertiary}>
              <CardComponent cardValue={3} cardImage={threeImage} cardPercent={((amountOfThrees / currentDeck.length) * 100).toFixed(2)}/>
            </Button>    
          </ThemeProvider>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => updateCurrentDeck("4")} kind={KIND.tertiary}>
              <CardComponent cardValue={4} cardImage={fourImage} cardPercent={((amountOfFours / currentDeck.length) * 100).toFixed(2)}/>
            </Button>    
          </ThemeProvider>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => updateCurrentDeck("5")} kind={KIND.tertiary}>
              <CardComponent cardValue={5} cardImage={fiveImage} cardPercent={((amountOfFives / currentDeck.length) * 100).toFixed(2)}/>
            </Button>    
          </ThemeProvider>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => updateCurrentDeck("6")} kind={KIND.tertiary}>
              <CardComponent cardValue={6} cardImage={sixImage} cardPercent={((amountOfSixes / currentDeck.length) * 100).toFixed(2)}/>
            </Button>    
          </ThemeProvider>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => updateCurrentDeck("7")} kind={KIND.tertiary}>
              <CardComponent cardValue={7} cardImage={sevenImage} cardPercent={((amountOfSevens / currentDeck.length) * 100).toFixed(2)}/>
            </Button>    
          </ThemeProvider>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => updateCurrentDeck("8")} kind={KIND.tertiary}>
              <CardComponent cardValue={8} cardImage={eightImage} cardPercent={((amountOfEights / currentDeck.length) * 100).toFixed(2)}/>
            </Button>    
          </ThemeProvider>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => updateCurrentDeck("9")} kind={KIND.tertiary}>
              <CardComponent cardValue={9} cardImage={nineImage} cardPercent={((amountOfNines / currentDeck.length) * 100).toFixed(2)}/>
            </Button>    
          </ThemeProvider>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => updateCurrentDeck("10")} kind={KIND.tertiary}>
              <CardComponent cardValue={10} cardImage={tenImage} cardPercent={((amountOfTens / currentDeck.length) * 100).toFixed(2)}/>
            </Button>    
          </ThemeProvider>
          <ThemeProvider
            theme={createTheme(lightThemePrimitives, {
            colors: { buttonPrimaryFill: "#FFFFFF",
                      buttonPrimaryHover: "#EEEEEE" }
            })}
          >
            <Button onClick={() => updateCurrentDeck("A")} kind={KIND.tertiary}>
              <CardComponent cardValue={'Ace'} cardImage={aceImage} cardPercent={((amountOfAces / currentDeck.length) * 100).toFixed(2)}/>
            </Button>    
          </ThemeProvider>
        </CardDiv>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;