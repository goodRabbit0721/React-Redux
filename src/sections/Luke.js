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
import mergeStyle from '../util/mergeStyle';
import Title from '../components/Title';
import { connect } from 'react-redux';
import AutoDecision from '../components/AutoDecision';

const styles = CommonStyles;

const rows = [
  ['life', Labels.LIFE],
  ['health', Labels.HEALTH],
  ['freedom', Labels.FREEDOM],
  ['property', Labels.PROPERTY],
];

const AnswerTable = ({
  optionA,
  optionB,
}) => (
  <div style={CommonStyles.scrollContainer} className="table">
    <div style={styles.table}>

      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, { width: '50%' })}>
          {Labels.NATURAL_RIGHTS}
        </div>
        <div style={mergeStyle(styles.cell, { width: '50%' })}>
          {Labels.LUKE_TABLE_COLUMN2_TITLE}
        </div>
      </div>

      {rows.map(([element, label], i) => (
        <div style={styles.row} key={i}>
          <div style={mergeStyle(styles.cell, { width: '50%' })}>
            {label}
          </div>
          <div style={mergeStyle(styles.cell, { width: '50%' })}>
            <RadioList
              compact
              section={"luke"}
              element={element}
              values={[Labels.OP_A, Labels.OP_B, Labels.NOT_RELEVANT_LUKE]}
              items={[optionA, optionB, Labels.NOT_RELEVANT_LUKE]}
            />
          </div>
        </div>
      ))}
      {/* <div style={styles.row}>
        <div style={mergeStyle(styles.cell, { width: '50%' })}>
          <TextInput
            section={"luke"}
            element={"otherValue"}
            compact
            multiLine
            subtitle={Labels.OTHER}
          />
        </div>
        <div style={mergeStyle(styles.cell, { width: '50%' })}>
          <RadioList
            compact
            section={"luke"}
            element={"other"}
            values={[Labels.OP_A, Labels.OP_B, Labels.NOT_RELEVANT]}
            items={[optionA, optionB, Labels.NOT_RELEVANT]}
          />
        </div>
      </div>*/}

    </div>
    <div style={styles.table2}>
      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, { borderTopWidth: 0 })}>
          <RadioList
            compact
            section={"luke"}
            title={Labels.FINAL_CHOICE_LUKE}
            element={'decision'}
            values={[Labels.OP_A, Labels.OP_B]}
            items={[optionA, optionB]}
          />
          <div style={{ height: 8 }} />
          <AutoDecision section="luke" />
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.cell}>
          <TextInput
            multiLine
            compact
            section="luke"
            element="explanation"
            title={Labels.EXPLANATION_LUKE}
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


const Luke = () => (
  <Section
    section="luke"
    title={Labels.LUKE}
  >
    <Title
      title={Labels.LUKE_EXPLANATION}
      standalone
    />
    <AnswerTableContainer />
    <div style={CommonStyles.feedback}>
      <Range
        title={Labels.HOW_SIMPLE_LUKE}
        size={7}
        minLabel={Labels.VERY_SIMPLE}
        maxLabel={Labels.NOT_SIMPLE}
        section="luke"
        element="howEasy"
      />
      <TextInput
        title={Labels.FEEDBACK_LUKE}
        multiLine
        section="luke"
        element="technicalFeedback"
      />
    </div>
  </Section>
);

export default Luke;
