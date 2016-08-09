import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../actions/counter.js';

const Home = ({ number, increase, decrease }) => (
  <div>
    Some state changes:
    {number}
    <button onClick={() => increase(1)}>Increase</button>
    <button onClick={() => decrease(1)}>Decrease</button>
  </div>
  );

export default connect(
  state => ({ number: state.reducer.number }),
  { increase, decrease }
)(Home);
