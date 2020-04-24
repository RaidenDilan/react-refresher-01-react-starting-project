import React from 'react';

import './GoalList.css';

const goalList = props => {
  return (
    <ul className='goal-list'>
      { props.goals.map(goal => {
        return <li key={ goal.id }>{ goal.text }</li>;
      }) }
    </ul>
  );

};

export default goalList;
