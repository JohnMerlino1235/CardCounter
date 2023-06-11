import * as React from 'react';
import {Card, StyledBody, StyledAction, StyledTitle} from 'baseui/card';
import {Button} from 'baseui/button';
import {ListItem, ListItemLabel} from 'baseui/list';

export default function CardComponent({cardValue, cardImage, cardPercent}) {
  return (
    <Card
      overrides={{Root: {style: {width: '164px'}}}}
      headerImage={cardImage}
      title={`Probability: ${cardPercent}%`}
    >
      <StyledBody>
        {`The probability of ${cardValue} being the next card`}
      </StyledBody>
    </Card>
  );
}
