import * as React from 'react';
import {Accordion, Panel} from 'baseui/accordion';

const rules =
  'This is an automatic card counting tool designed for 8 deck sleeves of Blackjack. Everytime there is a new shuffle, keep track of every card that the dealer is dealt by clicking the respective card. The count, and the implied odds of a HIGH card (value of 10 or ACE) and LOW card (2, 3, 4, 5, 6) will be displayed. This is useful for getting an edge over your dealer!';

export default function RulesComponent() {
  return (
    <Accordion>
      <Panel title="Expand for the guide and getting started">{rules}</Panel>
    </Accordion>
  );
}