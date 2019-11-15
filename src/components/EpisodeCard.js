import React from 'react'
import { Card } from 'semantic-ui-react'


export default function EpisodeCard (props) {

  return (
    <Card className='episode-card'
    header={props.name}
    meta={props.number}
    description={props.airDate} />
  );
}