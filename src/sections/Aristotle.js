import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextInput from '../components/TextInput';
import RawRadioList from '../components/RawRadioList';
import MultipleChoice from '../components/MultipleChoice';
import Labels from '../util/Labels';
import RaisedButton from 'material-ui/RaisedButton';
import Colors from '../util/Colors';
import Range from '../components/Range';
import CommonStyles from '../util/CommonStyles';
import Section from '../components/Section';
import RadioMatrix from '../components/RadioMatrix';
import mergeStyle from '../util/mergeStyle';
import { RadioGroup, Radio } from 'react-radio-group';
import Hint from '../components/Hint';
import { REQUIRED } from '../util/exportToCsv';
import { connect } from 'react-redux';

const Answer = ({
  value,
}) => (
  <div>{value}</div>
);
const mapStateToProps1 = (state) => ({
  value: (state.aristo || {}).automaticDecision,
});
const AnswerContainer = connect(mapStateToProps1)(Answer);

const styles = {
  ...CommonStyles,
  radio: {
    marginLeft: 8,
  },
  radioLabel: {
    wordBreak: 'break-all',
  },
  helpIcon: {
    fontSize: 16,
    cursor: 'pointer',
    marginRight: 4,
  },
};

const entries = [
  'INDIFFERENCE',
  'COURAGE',
  'SHAME',
  'GREED',
  'GENEROSITY',
  'ENDURANCE',
  'ARROGANCE',
  'INNOCENCE',
];

const elements = [
  'indifference',
  'courage',
  'shame',
  'greed',
  'generosity',
  'endurance',
  'arrogance',
  'innocence',
];


const TraitRow = ({
  onChange,
  value,
  section,
  element,
  entry,
  error,
  ...rest,
}) => (
  <RadioGroup
    {...rest}
    name={`${section}-${element}`}
    selectedValue={value}
    onChange={onChange}
  >
    {[1, 2, 3].map(j => (
      <div style={mergeStyle(styles.cell, { width: '25%' })} key={j}>
        <div style={{ float: 'left' }}>
          <Hint
            hint={Labels[`${entry}_HINT${j}`]}
          >
            <i className="material-icons" style={styles.helpIcon}>help</i>
          </Hint>
        </div>

        {error &&
          <div style={CommonStyles.error}>
            {Labels.REQUIRED}
          </div>
        }

        <label style={styles.radioLabel}>
          <Radio
            value={Labels[`${entry}${j}`]}
            style={styles.radio}
          />
          {Labels[`${entry}${j}`]}
        </label>
      </div>
    ))}
    <div style={mergeStyle(styles.cell, { backgroundColor: 'rgb(242, 242, 242)' })}>
      <label style={styles.radioLabel}>
        <Radio
          value={Labels.NOT_RELEVANT}
          style={styles.radio}
        />
        {Labels.NOT_RELEVANT}
      </label>
    </div>
  </RadioGroup>
);
const mapStateToProps = (state, ownProps) => {
  const { section, element } = ownProps;
  const value = (state[section] || {})[element];
  return {
    ...ownProps,
    value,
    required: REQUIRED[ownProps.section][ownProps.element],
    error: ((state.errors || {})[ownProps.section] || {})[ownProps.element],
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const { section, element } = ownProps;
  return {
    onChange: (newValue) => {
      dispatch({
        type: 'SET_TEXT',
        section,
        element,
        value: newValue,
      });
      dispatch({
        type: 'SET_ERROR',
        section,
        element,
        value: false,
      });
    },
  };
};
const TraitRowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TraitRow);

const AnswerTable = () => (
  <div style={CommonStyles.scrollContainer} className="table">
    <div style={styles.table}>
      <div style={styles.row}>
        {[Labels.MISSING, Labels.PRESENT, Labels.EXCESSIVE, ""].map((x, i) => (
          <div style={mergeStyle(styles.cell, { width: '25%' })} key={i}>
            {x}
          </div>
        ))}
      </div>
      {elements.map((element, i) => (
        <TraitRowContainer
          style={styles.row}
          key={i}
          section="aristo"
          element={element}
          entry={entries[i]}
        />
      ))}
    </div>

    <div style={styles.table2}>
      <div style={styles.row}>
        <div
          style={mergeStyle(
            styles.cell,
            styles.labelCell,
            styles.noTopBorder,
            { width: '25%' }
          )}
        >
          {Labels.ARISTO_ACC_GRADE_ROW_TITLE}
        </div>
        <div style={mergeStyle(styles.cell, { borderTopWidth: 0 })}>
          <AnswerContainer />
        </div>
      </div>
      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, styles.labelCell, { width: '25%' })}>
          {Labels.EXPLANATION_ARISTO}
        </div>
        <div style={styles.cell}>
          <TextInput
            multiLine
            compact
            section="aristo"
            element="explanation"
          />
        </div>
      </div>
    </div>

  </div>
);

const Aristotle = () => (
  <Section
    title={Labels.ARISTOTLE}
    section="aristo"
  >
{/*    <RadioMatrix
      title={Labels.ARISTOTLE_HINT}
      subtitle={Labels.ARISTOTLE_SCROLL}
      section="aristo"
      options={[
        Labels.MISSING,
        Labels.PRESENT,
        Labels.EXCESSIVE,
        Labels.NOT_RELEVANT,
      ]}
      entries={[
        Labels.INDIFFERENCE,
        Labels.COURAGE,
        Labels.SHAME,
        // Labels.LACK_OF_EMOTION,
        Labels.GREED,
        Labels.GENEROSITY,
        // Labels.IRONY,
        // Labels.KINDNESS,
        // Labels.STUBBORN,
        Labels.ENDURANCE,
        Labels.ARROGANCE,
        Labels.INNOCENCE,
      ]}
      elements={[
        'indifference',
        'courage',
        'shame',
        // 'lackOfEmotion',
        'greed',
        'generosity',
        // 'irony',
        // 'kindness',
        // 'stubborn',
        'endurance',
        'arrogance',
        'innocence',
      ]}
    />*/}
    <AnswerTable />
    <div style={CommonStyles.feedback}>
      <Range
        title={Labels.HOW_SIMPLE_ARISTOTLE}
        minLabel={Labels.VERY_SIMPLE}
        maxLabel={Labels.NOT_SIMPLE}
        section="aristo"
        element="howEasy"
      />
      <TextInput
        title={Labels.FEEDBACK_ARISTO}
        multiLine
        section="aristo"
        element="technicalFeedback"
      />
    </div>
  </Section>
);

export default Aristotle;
