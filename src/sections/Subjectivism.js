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
import Title from '../components/Title';
import { connect } from 'react-redux';
import AutoDecision from '../components/AutoDecision';

const AnalysisTable = ({
  index,
  optionA,
  optionB,
}) => (
  <div>
    <TextInput
      section={"subjectivism"}
      multiLine
      element={`mainFacts${index}`}
      title={Labels.MAIN_FACTS}
    />
    <RadioList
      section={"subjectivism"}
      element={'decision'}
      subtitle={Labels.BETTER_OPTION_HINT}
      title={Labels.BETTER_OPTION}
      items={[optionA, optionB]}
      values={[Labels.OP_A, Labels.OP_B]}
    />
    <AutoDecision section="subjectivism" />
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  optionA: (state.intro || {}).optionA,
  optionB: (state.intro || {}).optionB,
});

const AnalysisTableContainer = connect(mapStateToProps)(AnalysisTable);

const Subjectivism = () => (
  <Section
    title={Labels.SUBJECTIVISM}
    section="subjectivism"
  >
    <AnalysisTableContainer index={1} />
    <TextInput
      section="subjectivism"
      element="explanation"
      title={Labels.SUBJECTIVISM_EXPLANATION}
      subtitle={Labels.SUBJECTIVISM_HINT}
      multiLine
    />
    <div style={CommonStyles.feedback}>
      <Range
        title={Labels.HOW_SIMPLE_SUBJECTIVISM}
        section="subjectivism"
        element="howEasy"
        minLabel={Labels.VERY_SIMPLE}
        maxLabel={Labels.NOT_SIMPLE}
      />
      <TextInput
        title={Labels.FEEDBACK_SUBJECTIVISM}
        multiLine
        section="subjectivism"
        element="technicalFeedback"
      />
    </div>
  </Section>
);

export default Subjectivism;
