import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextInput from '../components/TextInput';
import RawRadioList from '../components/RawRadioList';
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
  ['freedom', Labels.FREEDOM_ROLLS],
  ['equality', Labels.EQUALITY],
  ['gap', Labels.GAP],
];

const AnswerTable = ({
  optionA,
  optionB,
}) => (
  <div style={CommonStyles.scrollContainer} className="table">
    <div style={styles.table}>

      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, { width: '50%' })}>
          {Labels.JUSTICE_RIGHTS}
        </div>
        <div style={mergeStyle(styles.cell, { width: '50%' })}>
          {Labels.ROLLS_TABLE_COLUMN2_TITLE}
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
              section={"rolls"}
              element={element}
              values={[Labels.OP_A, Labels.OP_B, Labels.NOT_RELEVANT_ROLLS]}
              items={[optionA, optionB, Labels.NOT_RELEVANT_ROLLS]}
            />
          </div>
        </div>
      ))}
      {/* <div style={styles.row}>
        <div style={mergeStyle(styles.cell, { width: '50%' })}>
          <TextInput
            section={"rolls"}
            element={"otherValue"}
            compact
            multiLine
            subtitle={Labels.OTHER}
          />
        </div>
        <div style={mergeStyle(styles.cell, { width: '50%' })}>
          <RadioList
            compact
            section={"rolls"}
            element={"other"}
            items={[Labels.OP_A, Labels.OP_B, Labels.NOT_RELEVANT]}
          />
        </div>
      </div> */}

    </div>
    <div style={styles.table2}>
      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, { borderTopWidth: 0 })}>
          <RadioList
            title={Labels.ROLLS_FINAL_CHOICE}
            element={'decision'}
            section="rolls"
            compact
            values={[Labels.OP_A, Labels.OP_B]}
            items={[optionA, optionB]}
          />
          <div style={{ height: 8 }} />
          <AutoDecision section="rolls" />
        </div>
      </div>
      <div style={styles.row}>
        <div style={styles.cell}>
          <TextInput
            multiLine
            compact
            section="rolls"
            element="explanation"
            title={Labels.EXPLANATION_ROLLS}
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


const Rolls = () => (
  <Section
    section="rolls"
    title={Labels.ROLLS}
  >
    {/* <Title
      title={Labels.LUKE_EXPLANATION}
      standalone
    />*/}
    <AnswerTableContainer />
    <div style={CommonStyles.feedback}>
      <Range
        title={Labels.HOW_SIMPLE_ROLLS}
        section="rolls"
        element="howEasy"
        minLabel={Labels.VERY_SIMPLE}
        maxLabel={Labels.NOT_SIMPLE}
      />
      <TextInput
        title={Labels.FEEDBACK_ROLLS}
        multiLine
        section="rolls"
        element="technicalFeedback"
      />
    </div>
  </Section>
);

export default Rolls;
