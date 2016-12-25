import React, { Component, Children, cloneElement } from 'react';
import Paper from 'material-ui/Paper';
import TextInput from '../components/TextInput';
import RadioList from '../components/RadioList';
import MultipleChoice from '../components/MultipleChoice';
import Labels from '../util/Labels';
import RaisedButton from 'material-ui/RaisedButton';
import Colors from '../util/Colors';
import Range from '../components/Range';
import CommonStyles from '../util/CommonStyles';
import { getNextSection, getPreviousSection, Sections } from '../util/Sections';
import { Link } from 'react-router';
import LinearProgress from 'material-ui/LinearProgress';
import exportToCsv, { REQUIRED } from '../util/exportToCsv';
import { connect } from 'react-redux';
import importFromCsv from '../util/importFromCsv';
import submit from '../util/submit';
import Review from '../sections/Review';


const Section = ({
  section,
  title,
  children,
  formData,
  dispatch,
}) => {
  // const newChildren = Children.map(
  //   children,
  //   child => cloneElement(child, { section })
  // );
  const nextSection = getNextSection(section);
  const prevSection = getPreviousSection(section);
  const progressPercent = Math.round(
    (Sections.indexOf(section)) * 100 / (Sections.length - 1));

  const validate = (e) => {
    let fine = true;
    for (const element in REQUIRED[section]) {
      if (REQUIRED[section][element]) {
        const present = (formData[section] || {})[element];
        if (!present) {
          console.log('error with', section, element);
          fine = false;
          dispatch({
            type: 'SET_ERROR',
            section,
            element,
            value: true,
          });
        }
      }
    }

    if (!fine) {
      alert(Labels.FIX_ERRORS);
      e.preventDefault();
      window.scrollTo(0, 0);
    }
  };

  return (
    <div>
      {title &&
        <div style={CommonStyles.sectionTitle}>
          {title}
        </div>
      }
      <div style={CommonStyles.section}>
        {children}
        <div style={styles.progressWrapper}>
          <LinearProgress
            mode="determinate"
            max={Sections.length - 1}
            style={styles.progress}
            value={Sections.indexOf(section)}
          />
          <div style={styles.percent}>
            {`${progressPercent}% ${Labels.COMPLETE}`}
          </div>
        </div>
        <div>
          {nextSection ?
            <RaisedButton
              label={Labels.NEXT}
              containerElement={<Link to={nextSection} />}
              primary
              onClick={validate}
              style={CommonStyles.button}
            /> :
            <RaisedButton
              label={"Submit"}
              primary
              onClick={() => submit(formData)}
              style={CommonStyles.button}
            />
          }
          {prevSection && <div style={styles.filler} />}
          {prevSection &&
            <RaisedButton
              label={Labels.PREVIOUS}
              containerElement={<Link to={prevSection} />}
              default
              style={CommonStyles.button}
            />
          }
        </div>
        <div style={{height: 34}} />
        {/* <div>
          <RaisedButton
            label="Choose a File"
            labelPosition="before"
            style={styles.button}
          >
            <input type="file" id="csvFile" style={styles.exampleImageInput} />
          </RaisedButton>
          <div style={styles.filler} />
          <RaisedButton
            label={Labels.LOAD}
            default
            onClick={() => importFromCsv(dispatch)}
            style={CommonStyles.button}
          />
          <div style={styles.filler} />
          <RaisedButton
            label={Labels.SAVE}
            onClick={() => exportToCsv(formData)}
            primary
            style={CommonStyles.button}
          />
        </div>*/}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  formData: state,
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const SectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Section);

export default SectionContainer;

const styles = {
  filler: {
    display: 'inline',
    padding: 8,
  },
  progress: {
    height: 16,
    backgroundColor: 'rgb(237, 237, 237)',
  },
  progressWrapper: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  percent: {
    marginTop: 8,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};
