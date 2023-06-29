import * as React from 'react';
import {Accordion, Panel} from 'baseui/accordion';
import {Card} from 'baseui/card';

export default function StrategyComponent() {
  return (
    <Accordion>
      <Panel title="Expand for the guide and getting started">
        <Card
            headerImage={
                'https://source.unsplash.com/user/erondu/700x400'
            }
        >
        </Card>
      </Panel>
    </Accordion>
  );
}