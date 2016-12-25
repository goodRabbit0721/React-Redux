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
import mergeStyle from '../util/mergeStyle';
import { connect } from 'react-redux';
import AutoDecision from '../components/AutoDecision';

const styles = CommonStyles;

const AnswerTable = ({
  optionA,
  optionB,
}) => (
  <div style={CommonStyles.scrollContainer} className="table">
    <div style={styles.table}>

      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, { width: '50%' })}>
          {Labels.ETHICAL_CODE_VALUES}
        </div>
        <div style={mergeStyle(styles.cell, { width: '50%' })}>
          {Labels.WHICH_OPTION_BETTER}
        </div>
      </div>

      {[1, 2, 3, 4, 5].map(i => (
        <div style={styles.row} key={i}>
          <div style={mergeStyle(styles.cell, { width: '50%' })}>
            <TextInput
              section={"hobbs"}
              element={`value${i}`}
              compact
              multiLine
              subtitle={`${Labels.VALUE} ${i}`}
            />
          </div>
          <div style={mergeStyle(styles.cell, { width: '50%' })}>
            <RadioList
              compact
              section={"hobbs"}
              element={`betterOption${i}`}
              values={[Labels.OP_A, Labels.OP_B]}
              items={[optionA, optionB]}
            />
          </div>
        </div>
      ))}

    </div>
    <div style={styles.table2}>
      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, { borderTopWidth: 0 })}>
          <RadioList
            compact
            section={"hobbs"}
            title={Labels.WHICH_OPTION_BETTER}
            element={'decision'}
            values={[Labels.OP_A, Labels.OP_B]}
            items={[optionA, optionB]}
          />
          <div style={{ height: 8 }} />
          <AutoDecision section="hobbs" />
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.cell}>
          <TextInput
            multiLine
            compact
            section="hobbs"
            element="explanation"
            title={Labels.EXPLANATION_HOBBS}
          />
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  optionA: (state.intro || {}).optionA,
  optionB: (state.intro || {}).optionB,
});

const AnswerTableContainer = connect(mapStateToProps)(AnswerTable);


const AnalysisTable = ({
  index,
}) => (
  <div>
    <Title
      title={`${Labels.VALUE} ${index}`}
      standalone
    />
    <TextInput
      section={"hobbs"}
      element={`value${index}`}
      subtitle={Labels.VALUE}
    />
    <RadioList
      section={"hobbs"}
      element={`betterOption${index}`}
      subtitle={Labels.HOBBS_BETTER_OPTION}
      items={[Labels.OPTION_A, Labels.OPTION_B]}
    />
  </div>
);


const Hobbs = () => (
  <Section
    title={Labels.HOBBS}
    section="hobbs"
  >
    <AnswerTableContainer />
    <div style={CommonStyles.feedback}>
      <Range
        title={Labels.HOW_SIMPLE_HOBBS}
        minLabel={Labels.VERY_SIMPLE}
        maxLabel={Labels.NOT_SIMPLE}
        element="howEasy"
        section="hobbs"
      />
      <TextInput
        title={Labels.FEEDBACK_HOBBS}
        multiLine
        section="hobbs"
        element="technicalFeedback"
      />
    </div>
  </Section>
);

export default Hobbs;
