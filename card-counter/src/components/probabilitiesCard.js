import * as React from 'react';
import {Card} from 'baseui/card';
import {ListItem, ListItemLabel} from 'baseui/list';

export default function ProbabilitiesCardComponent({cardValue, runningCount, highCardProb, lowCardProb}) {
  return (
    <Card
      overrides={{Root: {style: {width: '328px'}}}}
      title={`Count and Probabilities`}
    >
      <ListItem>
        <ListItemLabel description={`The running count of the 8 decks`}>
            {`Count: Enter Count Here`}
        </ListItemLabel>
      </ListItem>
      <ListItem>
        <ListItemLabel description={`The probability of either a 10 or Ace being the next card`}>
            {`High Card: Enter High Card Prob`}
        </ListItemLabel>
      </ListItem>
      <ListItem>
        <ListItemLabel description={`The probability of either a 2, 3, 4, 5, or 6 being the next card`}>
            {`Low Card: Enter Low Card Prob`}
        </ListItemLabel>
      </ListItem>
    </Card>
  );
}
