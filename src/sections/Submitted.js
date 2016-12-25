import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextInput from '../components/TextInput';
import RadioList from '../components/RadioList';
import MultipleChoice from '../components/MultipleChoice';
import Labels from '../util/Labels';
import RaisedButton from 'material-ui/RaisedButton';
import Colors from '../util/Colors';
import Range from '../components/Range';
import CommonStyles from '../util/CommonStyles';
import Section from '../components/Section';
import RadioMatrix from '../components/RadioMatrix';

const Submitted = () => {
  window.onbeforeunload = null;
  return (
    <div style={CommonStyles.section}>
      {Labels.RESPONSE_SUBMITTED}
      <div style={{ height: 34 }} />
    </div>
  );
};

export default Submitted;
