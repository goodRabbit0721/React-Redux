import React from 'react';
import { connect } from 'react-redux';

const Answer = ({
  value,
}) => (
  <div>{value}</div>
);
const mapStateToProps = (state, ownProps) => ({
  value: (state[ownProps.section] || {}).automaticDecision,
});
const AutoDecision = connect(mapStateToProps)(Answer);

export default AutoDecision;
