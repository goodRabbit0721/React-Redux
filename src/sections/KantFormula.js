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
import { connect } from 'react-redux';
import AutoDecision from '../components/AutoDecision';

const styles = CommonStyles;

// const AnswerTable0 = () => (
//   <div style={CommonStyles.scrollContainer} className="table">
//     <div style={styles.table}>
//       <div style={styles.row}>
//         <div style={mergeStyle(styles.cell, styles.labelCell)}>
//           {Labels.MEANS}
//         </div>
//         {[1, 2, 3].map(i => (
//           <div style={styles.cell} key={i}>
//             <TextInput
//               multiLine
//               compact
//               section="kantFormula"
//               element={`means${i}`}
//             />
//           </div>
//         ))}
//       </div>
//       <div style={styles.row}>
//         <div style={styles.cell}>
//           {Labels.PURPOSE}
//         </div>
//         {[1, 2, 3].map(i => (
//           <div style={styles.cell} key={i}>
//             <TextInput
//               multiLine
//               compact
//               section="kantFormula"
//               element={`purpose${i}`}
//             />
//           </div>
//         ))}
//       </div>
//     </div>

//     <div style={styles.table}>
//       <div style={styles.row}>
//         <div style={mergeStyle(styles.cell, styles.labelCell, styles.noTopBorder)}>
//           {Labels.ACCUMULATED_GRADE}
//         </div>
//         <div style={mergeStyle(styles.cell, { borderTopWidth: 0, textAlign: 'center' })}>
//           (answer)
//         </div>
//       </div>
//       <div style={styles.row}>
//         <div style={mergeStyle(styles.cell, styles.labelCell)}>
//           {Labels.EXPLANATION}
//         </div>
//         <div style={styles.cell}>
//           <TextInput
//             multiLine
//             compact
//             section="kantFormula"
//             element="explanation"
//           />
//         </div>
//       </div>
//     </div>

//   </div>
// );

const Answer = ({ value }) => <div>{value}</div>;
const mapStateToProps = (state, { section, element }) => ({
  value: (state[section] || {})[element],
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
            <AnswerContainer
              section="utilitarianism"
              element={`name${i}`}
            />
          </div>
        ))}
      </div>

      <div style={styles.row}>
        <div style={styles.cell}>
          {Labels.KANT_DECISION}
        </div>
        {[1, 2, 3].map(i => (
          <div style={styles.cell} key={i}>
            <RawRadioList
              element={`decision${i}`}
              items={[Labels.NO_MEANS, Labels.YES_PURPOSE]}
              section="kantFormula"
              compact
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
            <AnswerContainer
              section="utilitarianism"
              element={`name${i}`}
            />
          </div>
        ))}
      </div>

      <div style={styles.row}>
        <div style={styles.cell}>
          {Labels.KANT_DECISION}
        </div>
        {[4, 5, 6].map(i => (
          <div style={styles.cell} key={i}>
            <RawRadioList
              element={`decision${i}`}
              items={[Labels.NO_MEANS, Labels.YES_PURPOSE]}
              section="kantFormula"
              compact
            />
          </div>
        ))}
      </div>
    </div>


    <div style={styles.table2}>
      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, styles.labelCell, styles.noTopBorder)}>
          {Labels.KANT_ACC_GRADE_ROW_TITLE}
        </div>
        <div style={mergeStyle(styles.cell, { borderTopWidth: 0 })}>
          <RawRadioList
            element={'decision'}
            items={[Labels.KANT_MORAL, Labels.KANT_NOT_MORAL]}
            section="kantFormula"
            compact
          />
          <div style={{ height: 8 }} />
          <AutoDecision section="kantFormula" />
        </div>
      </div>
      <div style={styles.row}>
        <div style={mergeStyle(styles.cell, styles.labelCell)}>
          {Labels.EXPLANATION_KANT_FORMULA}
        </div>
        <div style={styles.cell}>
          <TextInput
            multiLine
            compact
            section="kantFormula"
            element="explanation"
          />
        </div>
      </div>
    </div>

  </div>
);

const AnalysisTable = ({
  index,
}) => (
  <div>
    <Title
      title={`${Labels.PEOPLE_OF_INTEREST} ${index}`}
      standalone
    />
    <TextInput
      section={"kantFormula"}
      element={`means${index}`}
      subtitle={Labels.MEANS}
    />
    <TextInput
      section={"kantFormula"}
      element={`purpose${index}`}
      subtitle={Labels.PURPOSE}
    />
    <TextInput
      section={"kantFormula"}
      element={`decision${index}`}
      subtitle={Labels.DAMAGE_OR_BENEFIT}
    />
  </div>
);

const KantFormula = () => (
  <Section
    title={Labels.KANT_FORMULA}
    section="kantFormula"
  >
    <Title
      title={Labels.KANT_FORMULA_EXPLANATION}
      standalone
    />
    <AnswerTable />
    <div style={CommonStyles.feedback}>
      <Range
        title={Labels.HOW_SIMPLE_KANT_FORMULA}
        minLabel={Labels.VERY_SIMPLE}
        maxLabel={Labels.NOT_SIMPLE}
        section="kantFormula"
        element="howEasy"
      />
      <TextInput
        title={Labels.FEEDBACK_KANT_FORMULA}
        multiLine
        section="kantFormula"
        element="technicalFeedback"
      />
    </div>
  </Section>

);

export default KantFormula;
