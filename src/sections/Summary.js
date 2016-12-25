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
import Checkbox from 'material-ui/Checkbox';
import mergeStyle from '../util/mergeStyle';
import { connect } from 'react-redux';

const styles = CommonStyles;

const POSITIVE = {
  [Labels.KANT_MORAL]: true,
  [Labels.CHOSEN_MORAL]: true,
  [Labels.YES]: true,
};

const sections = [
  'utilitarianism',
  'kantGeneral',
  'kantFormula',
  'aristo',
  'subjectivism',
  'hobbs',
  'luke',
  'rolls',
];

const entries = [
  Labels.UTILITARIANISM,
  Labels.KANT_GENERAL,
  Labels.KANT_FORMULA,
  Labels.ARISTOTLE,
  Labels.SUBJECTIVISM,
  Labels.HOBBS,
  Labels.LUKE,
  Labels.ROLLS,
];

const isMoral = (values) => {
  const numPos = values.reduce((res, e) => (e ? res + 1 : res), 0);
  return 2 * numPos >= values.length;
};

const AnswerTable = ({
  values,
}) => (
  <div style={CommonStyles.scrollContainer} className="table">
    <div style={styles.table}>

      <div style={styles.row}>
        <div style={styles.cell}>
          {Labels.MORAL_APPROACH}
        </div>
        <div style={mergeStyle(styles.cell, { textAlign: 'center' })}>
          {Labels.MORAL_APPROACH_TEST_RESULT_LABEL}
        </div>
      </div>

      {sections.map((section, i) => (
        <div style={styles.row} key={i}>
          <div style={styles.cell}>
            {entries[i]}
          </div>
          <div style={mergeStyle(styles.cell, { textAlign: 'center' })}>
            <div style={{ width: 72, margin: 'auto' }}>
              {/*<Checkbox checked={values[i]} />*/}
              {values[i] ?
                <i className="material-icons" style={{ color: 'rgb(103, 58, 183)' }}>
                  {'check_circle'}
                </i> :
                <i className="material-icons" style={{ color: 'rgb(103, 58, 183)' }}>clear</i>
              }
            </div>
          </div>
        </div>
      ))}

      {/*<div style={mergeStyle(styles.row, { backgroundColor: 'rgb(242, 242, 242)' }) }>
        <div style={styles.cell}>
          {Labels.CHOSEN_MORAL}
        </div>
        <div style={mergeStyle(styles.cell, { textAlign: 'center' })}>
          <div style={{ width: 72, margin: 'auto' }}>

            {isMoral(values) ?
              <i className="material-icons" style={{ color: 'rgb(103, 58, 183)' }}>
                {'check_circle'}
              </i> :
              <i className="material-icons" style={{ color: 'rgb(103, 58, 183)' }}>clear</i>
            }
          </div>
        </div>
      </div>*/}
    </div>
    <div style={mergeStyle(styles.table, { borderTopWidth: 0 })}>
      <div style={mergeStyle(styles.row, { backgroundColor: 'rgb(242, 242, 242)', borderTopWidth: 0 }) }>
        <div style={mergeStyle(styles.cell, { borderTopWidth: 0, textAlign: 'center' })}>
          {isMoral(values) ? Labels.CHOSEN_MORAL : Labels.CHOSEN_IMMORAL}
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const optionToAnalyze = (state.intro || {}).optionToAnalyze;
  const values = sections.map(section =>
    POSITIVE[(state[section] || {}).automaticDecision] ||
      ( optionToAnalyze && (state[section] || {}).automaticDecision === optionToAnalyze));
  return {
    ...ownProps,
    values,
  };
};

export const AnswerTableContainer = connect(mapStateToProps)(AnswerTable);

const Summary = () => (
  <Section
    title={Labels.SUMMARY}
    section="summary"
  >
    <AnswerTableContainer />

    {/* <RadioMatrix
      title={Labels.SUMMARY}
      section="summary"
      labelHeader={Labels.MORAL_APPROACH}
      options={[
        Labels.CHOSEN_MORAL,
      ]}
      entries={[
        Labels.UTILITARIANISM,
        Labels.KANT_GENERAL,
        Labels.KANT_FORMULA,
        Labels.ARISTOTLE,
        Labels.SUBJECTIVISM,
        Labels.HOBBS,
        Labels.LUKE,
        Labels.ROLLS,
      ]}
      elements={[
        'utilitarianism',
        'kantGeneral',
        'kantFormula',
        'aristo',
        'subjectivism',
        'hobbs',
        'luke',
        'rolls',
      ]}
    />*/}

    <TextInput
      title={Labels.CONCLUSIONS}
      section="summary"
      element="conclusions"
      subtitle={Labels.CONCLUSIONS_HINT}
      multiLine
    />

    <RadioList
      title={Labels.CORRECTIVE}
      element="correctionRequired"
      section="summary"
      items={[Labels.YES, Labels.NO]}
    />

    <TextInput
      element="technicalFeedback"
      section="summary"
      title={Labels.TECHNICAL_FEEDBACK}
      subtitle={Labels.TECHNICAL_FEEDBACK_HINT}
      multiLine
    />
  </Section>
);

export default Summary;
