import * as React from 'react';
import {Card} from 'baseui/card';
import {ListItem, ListItemLabel} from 'baseui/list';

export default function RecommendedBetComponent({runningCount}) {
  return (
    <Card
      overrides={{Root: {style: {width: '328px'}}}}
      title={`Recommended bet (Standard bet $25)`}
    >
      <ListItem>
        <ListItemLabel description={`If the count is less than 0, bet your normal size ($25). The algorithm for computing bet size based on count is BET * (COUNT + 1)`}>
            {`Bet Size: ${((runningCount / 8).toFixed(0) + 1) < 0 ? '$25' : `$${(parseInt(runningCount / 8) + 1) * 25}`}`}
        </ListItemLabel>
      </ListItem>
    </Card>
  );
}
