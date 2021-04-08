import React, {useReducer, useCallback} from 'react';
import id from 'uuid/v4';

import Grudges from './Grudges';
import NewGrudge from './NewGrudge';

import initialState from './initialState';
import {ADD_GRUDGE, TOGGLE_FORGIVENESS} from './reducer';
import reducer from './reducer';

const Application = () => {
  const [grudges, dispatch] = useReducer(reducer, initialState)

  const addGrudge = useCallback(({person, reason}) => {
    dispatch({
      type: ADD_GRUDGE,
      payload: {
        person,
        reason,
      }
    })
  }, [dispatch]);

  const toggleForgiveness = useCallback(id => {
    dispatch({
      type: TOGGLE_FORGIVENESS,
      payload: {
        id
      }
    })
  }, [dispatch]);

  return (
    <div className="Application">
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness} />
    </div>
  );
};

export default Application;
