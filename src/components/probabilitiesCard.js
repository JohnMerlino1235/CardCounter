import * as React from 'react';
import {Card} from 'baseui/card';
import {ListItem, ListItemLabel} from 'baseui/list';

export default function ProbabilitiesCardComponent({runningCount, highCardProb, lowCardProb}) {
  return (
    <Card
      overrides={{Root: {style: {width: '328px'}}}}
      title={`Count and Probabilities`}
    >
      <ListItem>
        <ListItemLabel description={`The running count of the 8 decks (not the true count)`}>
            {`Count: ${runningCount}`}
        </ListItemLabel>
      </ListItem>
      <ListItem>
        <ListItemLabel description={`The true running count of the 8 decks`}>
            {`True Count: ${(runningCount / 8).toFixed(2)}`}
        </ListItemLabel>
      </ListItem>
      <ListItem>
        <ListItemLabel description={`The probability of either a 10 or Ace being the next card`}>
            {`High Card: ${highCardProb}%`}
        </ListItemLabel>
      </ListItem>
      <ListItem>
        <ListItemLabel description={`The probability of either a 2, 3, 4, 5, or 6 being the next card`}>
            {`Low Card: ${lowCardProb}%`}
        </ListItemLabel>
      </ListItem>
    </Card>
  );
}
