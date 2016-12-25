import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextInput from './components/TextInput';
import RadioList from './components/RadioList';
import MultipleChoice from './components/MultipleChoice';
import Labels from './util/Labels';
import RaisedButton from 'material-ui/RaisedButton';
import Colors from './util/Colors';
import Range from './components/Range';
import Introduction from './sections/Introduction';
import Utilitarianism from './sections/Utilitarianism';
import KantGeneral from './sections/KantGeneral';
import KantFormula from './sections/KantFormula';
import Aristotle from './sections/Aristotle';
import Subjectivism from './sections/Subjectivism';
import Luke from './sections/Luke';
import Rolls from './sections/Rolls';
import Summary from './sections/Summary';

export default class App extends Component {
  render() {
    return (
      <div>
        <div style={styles.header} />
        <div style={styles.formContainer}>
          <Paper
            className="centered"
            rounded={false}
            style={styles.formPaper}
          >
            <Introduction />
            <Utilitarianism />
            <KantGeneral />
            <KantFormula />
            <Aristotle />
            <Subjectivism />
            <Luke />
            <Rolls />
            <Summary />
          </Paper>
        </div>
      </div>
    );
  }
}

const styles = {
  header: {
    backgroundColor: 'rgb(103, 58, 183)',
    height: 122,
  },
  formContainer: {
    width: '90%',
    margin: 'auto',
  },
  formPaper: {
    marginTop: -50,
    paddingTop: 34,
    maxWidth: 640,
    paddingBottom: 34,
    textAlign: 'right',
  },
  section: {
    paddingLeft: 34,
    paddingRight: 34,
  },
  title: {
    fontSize: 34,
    marginBottom: 22,
  },
  button: {
    marginTop: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    backgroundColor: Colors.PRIMARY,
    marginTop: 34,
    marginBottom: 16,
    color: 'white',
    fontWeight: '500',
    paddingLeft: 34,
    paddingRight: 34,
    paddingTop: 16,
    paddingBottom: 16,
    fontSize: 20,
  },
};
