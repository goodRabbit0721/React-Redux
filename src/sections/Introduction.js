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
import { Link } from 'react-router';
import Section from '../components/Section';

const Introduction = () => (
  <Section section="intro" className="table">
    <TextInput
      title={Labels.FULL_NAME}
      section="intro"
      element="name"
    />
    <TextInput
      title={Labels.ID}
      section="intro"
      element="id"
    />
    <TextInput
      title={Labels.DESCRIPTION}
      subtitle={Labels.DESCRIPTION_DETAILS}
      multiLine
      section="intro"
      element="description"
    />
    <TextInput
      title={Labels.OPTION_A}
      subtitle={Labels.OPTION_A_DETAILS}
      multiLine
      section="intro"
      element="optionA"
    />
    <TextInput
      title={Labels.OPTION_B}
      subtitle={Labels.OPTION_B_DETAILS}
      multiLine
      section="intro"
      element="optionB"
    />
    <RadioList
      title={Labels.WHICH_OPTION}
      items={Labels.CHOOSING_OPTIONS}
      section="intro"
      element="selectedOption"
    />
    <MultipleChoice
      title={Labels.OPTION_A_VALUES}
      subtitle={Labels.OPTION_A_VALUES_HINT}
      items={Labels.VALUES_OPTIONS}
      section="intro"
      element="optionAValues"
    />
    <MultipleChoice
      title={Labels.OPTION_B_VALUES}
      subtitle={Labels.OPTION_B_VALUES_HINT}
      items={Labels.VALUES_OPTIONS}
      section="intro"
      element="optionBValues"
    />
    <RadioList
      title={Labels.WHICH_OPTION_ANALYZE}
      subtitle={Labels.WHICH_OPTION_ANALYZE_HINT}
      items={Labels.CHOOSING_OPTIONS}
      section="intro"
      element="optionToAnalyze"
    />
  </Section>
);

const styles = {
  title: {
    fontSize: 34,
    marginBottom: 22,
  },
};

export default Introduction;
