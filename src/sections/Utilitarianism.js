import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextInput from '../components/TextInput';
import RadioList from '../components/RadioList';
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
import { connect } from 'react-redux';

const styles = CommonStyles;

const Answer = ({
  value,
}) => (
  <div>{value}</div>
);
const mapStateToProps = (state) => ({
  value: (state.utilitarianism || {}).automaticDecision,
});
const AnswerContainer = connect(mapStateToProps)(Answer);

const AnswerTable = () => (
  <div style={CommonStyles.scrollContainer} className="table">
    <div style={styles.table}>

      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, styles.labelCell)}>
          {Labels.PEOPLE_OF_INTEREST}
        </div>
        {[1, 2, 3].map(i => (
          <div style={styles.cell} key={i}>
            <TextInput
              subtitle={`${Labels.NAME} ${i}`}
              multiLine
              compact
              section="utilitarianism"
              element={`name${i}`}
            />
            <div style={{ height: 16 }} />
            <TextInput
              subtitle={Labels.NUMBER_OF_PEOPLE}
              multiLine
              compact
              section="utilitarianism"
              element={`numberOfPeople${i}`}
            />
          </div>
        ))}
      </div>
      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, styles.labelCell)}>
          {Labels.DAMAGE_OR_BENEFIT}
        </div>
        {[1, 2, 3].map(i => (
          <div style={styles.cell} key={i}>
            <RawRadioList
              element={`damageOrBenefit${i}`}
              items={[Labels.DAMAGE, Labels.BENEFIT]}
              section="utilitarianism"
              compact
            />
            <div style={{ height: 16 }} />
            <TextInput
              compact
              type="number"
              subtitle={Labels.DAMAGE_OR_BENEFIT_GRADE}
              section="utilitarianism"
              element={`damageOrBenefitGrade${i}`}
            />
          </div>
        ))}
      </div>

      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, styles.labelCell)}>
          {Labels.PEOPLE_OF_INTEREST}
        </div>
        {[4, 5, 6].map(i => (
          <div style={styles.cell} key={i}>
            <TextInput
              subtitle={`${Labels.NAME} ${i}`}
              multiLine
              compact
              section="utilitarianism"
              element={`name${i}`}
            />
            <div style={{ height: 16 }} />
            <TextInput
              subtitle={Labels.NUMBER_OF_PEOPLE}
              multiLine
              compact
              section="utilitarianism"
              element={`numberOfPeople${i}`}
            />
          </div>
        ))}
      </div>
      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, styles.labelCell)}>
          {Labels.DAMAGE_OR_BENEFIT}
        </div>
        {[4, 5, 6].map(i => (
          <div style={styles.cell} key={i}>
            <RawRadioList
              element={`damageOrBenefit${i}`}
              items={[Labels.DAMAGE, Labels.BENEFIT]}
              section="utilitarianism"
              compact
            />
            <div style={{ height: 16 }} />
            <TextInput
              compact
              type="number"
              subtitle={Labels.DAMAGE_OR_BENEFIT_GRADE}
              section="utilitarianism"
              element={`damageOrBenefitGrade${i}`}
            />
          </div>
        ))}
      </div>


      {/* <div style={styles.row}>
        <div style={mergeStyle(styles.cell, styles.labelCell)}>
          {Labels.DAMAGE_OR_BENEFIT_GRADE}
        </div>
        {[1, 2, 3].map(i => (
          <div style={styles.cell} key={i}>
            <TextInput
              compact
              type="number"
              section="utilitarianism"
              element={`damageOrBenefitGrade${i}`}
            />
          </div>
        ))}
      </div>*/}
    </div>
    <div style={styles.table2}>
      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, styles.labelCell, styles.noTopBorder)}>
          {Labels.ACCUMULATED_GRADE_UTILITARIANISM}
        </div>
        <div style={mergeStyle(styles.cell, { borderTopWidth: 0, textAlign: 'center' })}>
          <AnswerContainer />
        </div>
      </div>
      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, styles.labelCell)}>
          {Labels.EXPLANATION_UTILITARIANISM}
        </div>
        <div style={styles.cell}>
          <TextInput
            multiLine
            compact
            section="utilitarianism"
            element="explanation"
          />
        </div>
      </div>
    </div>

  </div>
);

const AnalysisTable = ({
  section,
  index,
}) => (
  <div>
    <div style={{ height: 16}} />
    <Title
      title={`${Labels.PEOPLE_OF_INTEREST} ${index}`}
      standalone
    />
    <TextInput
      element={`name${index}`}
      subtitle={Labels.NAME}
      section="utilitarianism"
    />
    <TextInput
      element={`numberOfPeople${index}`}
      subtitle={Labels.NUMBER_OF_PEOPLE}
      section="utilitarianism"
    />
    <RadioList
      subtitle={Labels.DAMAGE_OR_BENEFIT}
      element={`damageOrBenefit${index}`}
      items={[Labels.DAMAGE, Labels.BENEFIT]}
      section="utilitarianism"
      compact
    />
    <TextInput
      element={`damageOrBenefitGrade${index}`}
      subtitle={Labels.DAMAGE_OR_BENEFIT}
      section="utilitarianism"
    />
  </div>
);

const Utilitarianism = () => (
  <Section
    section="utilitarianism"
    title={Labels.UTILITARIANISM}
  >
    <Title
      title={Labels.UTILITARIANISM_EXPLANATION}
      standalone
    />
    <AnswerTable />
    {/* <AnalysisTable index={1} />
    <AnalysisTable index={2} />
    <AnalysisTable index={3} />*/}
    <div style={CommonStyles.feedback}>
      <Range
        title={Labels.HOW_SIMPLE_UTILITARIANISM}
        size={7}
        minLabel={Labels.VERY_SIMPLE}
        maxLabel={Labels.NOT_SIMPLE}
        section="utilitarianism"
        element="howEasy"
      />
      <TextInput
        title={Labels.FEEDBACK_UTILITARIANISM}
        multiLine
        section="utilitarianism"
        element="technicalFeedback"
      />
    </div>
  </Section>
);

export default Utilitarianism;
