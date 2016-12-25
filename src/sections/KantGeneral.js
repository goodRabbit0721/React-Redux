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
import Title from '../components/Title';
import mergeStyle from '../util/mergeStyle';
import AutoDecision from '../components/AutoDecision';

const styles = CommonStyles;

const AnswerTable = () => (
  <div style={CommonStyles.scrollContainer} className="table">
    <div style={styles.table}>
      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, styles.labelCell)}>

        </div>
        <div style={styles.cell}>
          {Labels.ON_ONE_HAND}
        </div>
        <div style={styles.cell}>
          {Labels.ON_OTHER_HAND}
        </div>
      </div>
      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, styles.labelCell)}>
          {Labels.PRACTICAL_RULE_FORMULATION}
        </div>
        <div style={styles.cell}>
          <TextInput
            multiLine
            compact
            section="kantGeneral"
            element="onOneHand1"
          />
        </div>
        <div style={styles.cell}>
          <TextInput
            multiLine
            compact
            section="kantGeneral"
            element="onOtherHand1"
          />
        </div>
      </div>
      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, styles.labelCell)}>
          {Labels.GENERAL_RULE_FORMULATION}
        </div>
        <div style={styles.cell}>
          <TextInput
            multiLine
            compact
            section="kantGeneral"
            element="onOneHand2"
          />
        </div>
        <div style={styles.cell}>
          <TextInput
            multiLine
            compact
            section="kantGeneral"
            element="onOtherHand2"
          />
        </div>
      </div>
    </div>
    <div style={styles.table2}>
      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, styles.labelCell, styles.noTopBorder)}>
          {Labels.GRADE_KANT_GENERAL}
        </div>
        <div style={mergeStyle(styles.cell, { borderTopWidth: 0 })}>
          <RawRadioList
            element={'decision'}
            items={[Labels.YES, Labels.NO]}
            section="kantGeneral"
            compact
          />
          <div style={{height: 8}} />
          <AutoDecision section="kantGeneral" />
        </div>
      </div>
      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, styles.labelCell)}>
          {Labels.EXPLANATION_KANT_GENERAL}
        </div>
        <div style={styles.cell}>
          <TextInput
            multiLine
            compact
            section="kantGeneral"
            element="explanation"
          />
        </div>
      </div>
    </div>

  </div>
);

const AnalysisTable = ({
  index,
  title,
}) => (
  <div>
    <Title
      title={title}
      standalone
    />
    <TextInput
      section="kantGeneral"
      element={`onOneHand${index}`}
      subtitle={Labels.ON_ONE_HAND}
    />
    <TextInput
      section="kantGeneral"
      element={`onOtherHand${index}`}
      subtitle={Labels.ON_OTHER_HAND}
    />
  </div>
);

const KantGeneral = () => (
  <Section
    section="kantGeneral"
    title={Labels.KANT_GENERAL}
  >
    <Title
      title={Labels.KANT_GENERAL_EXPLANATION}
      standalone
    />
    <AnswerTable />
    <div style={CommonStyles.feedback}>
      <Range
        title={Labels.HOW_SIMPLE_KANT_GENERAL}
        size={7}
        minLabel={Labels.VERY_SIMPLE}
        maxLabel={Labels.NOT_SIMPLE}
        section="kantGeneral"
        element="howEasy"
      />
      <TextInput
        title={Labels.FEEDBACK_KANT_GENERAL}
        multiLine
        section="kantGeneral"
        element="technicalFeedback"
      />
    </div>
  </Section>
);

export default KantGeneral;
