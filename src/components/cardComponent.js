import * as React from 'react';
import {Card, StyledBody} from 'baseui/card';

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
