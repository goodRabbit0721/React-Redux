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
import { Sections } from '../util/Sections';
import { COLUMNS, HEADINGS, SECTION_HEADINGS } from '../util/exportToCsv';
import { connect } from 'react-redux';
import submit from '../util/submit';
import { Link } from 'react-router';
import { AnswerTableContainer } from '../sections/Summary';

const styles = {
  element: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  elementTitle: {
    fontSize: 20,
  },
  elementValue: {
    marginTop: 8,
  },
  hint: {
    color: 'rgba(0, 0, 0, 0.38)',
  },
  filler: {
    display: 'inline',
    padding: 8,
  },
};

const decisionFields = ['decision1', 'decision2', 'decision3'];
const lastChar = (s) => s[s.length - 1];

const Review = ({
  formData,
  dispatch,
}) => {
  const elementNode = (section, element, i) => {
    const value = (formData[section] || {})[element];
    if (section === 'kantFormula' && decisionFields.indexOf(element) !== -1) {
      // return (
      //   <div>
      //     <div key={i} style={styles.element}>
      //       <div style={styles.elementTitle}>
      //         {HEADINGS.utilitarianism[`name ${lastChar(element)}`]}
      //       </div>
      //       <div style={styles.elementValue}>
      //         {(formData.utilitarianism || {})[`name ${lastChar(element)}`]}
      //       </div>
      //       <div>{"  \n\n "}</div>
      //     </div>
      //     <div key={i} style={styles.element}>
      //       <div style={styles.elementTitle}>
      //         {HEADINGS[section][element]}
      //       </div>
      //       <div style={styles.elementValue}>
      //         {value/* || <span style={styles.hint}>שם מלא</span> */}
      //       </div>
      //       <div>{"  \n\n "}</div>
      //     </div>
      //   </div>
      // );

      console.log(`name ${lastChar(element)}`);
      return (
        <div key={i}>
          <div style={styles.element}>
            <div style={styles.elementTitle}>
              {HEADINGS.utilitarianism[`name${lastChar(element)}`]}
            </div>
            <div style={styles.elementValue}>
              {(formData.utilitarianism || {})[`name${lastChar(element)}`]}
            </div>
            <div>{"  \n\n "}</div>
          </div>
          <div style={styles.element}>
            <div style={styles.elementTitle}>
              {HEADINGS[section][element]}
            </div>
            <div style={styles.elementValue}>
              {value/* || <span style={styles.hint}>שם מלא</span> */}
            </div>
            <div>{"  \n\n "}</div>
          </div>
        </div>
      );
    }
    return (
      <div key={i} style={styles.element}>
        <div style={styles.elementTitle}>
          {HEADINGS[section][element]}
        </div>
        <div style={styles.elementValue}>
          {value/* || <span style={styles.hint}>שם מלא</span> */}
        </div>
        <div>{"  \n\n "}</div>
      </div>
    );
  };

  const sectionNode = (section, j) => (
    <div key={j}>
      {SECTION_HEADINGS[section] &&
        <div style={CommonStyles.sectionTitle}>
          <Link to={"/" + section} style={{textDecoration: 'none', color: 'white'}}>{SECTION_HEADINGS[section]}</Link>
        </div>
      }
      {section === 'summary' && <div style={CommonStyles.section}><AnswerTableContainer /></div>}
      <div style={CommonStyles.section}>
      {(COLUMNS[section] || []).map((element, i) =>
        elementNode(section, element, i))}
      </div>
    </div>
  );

  return (
    <div>
      {Sections.map(sectionNode)}
      <div style={mergeStyle(CommonStyles.section, { paddingBottom: 34 })}>
        <RaisedButton
          label={"Submit"}
          primary
          onClick={(e) => submit(formData, e, dispatch)}
          style={CommonStyles.button}
          containerElement={<Link to={"submitted"} />}
        />
        <div style={styles.filler} />
        <RaisedButton
          label={Labels.PREVIOUS}
          containerElement={<Link to={"summary"} />}
          default
          style={CommonStyles.button}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  formData: state,
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const ReviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Review);

export default ReviewContainer;
