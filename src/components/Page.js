import React from 'react';
import Paper from 'material-ui/Paper';
import Colors from '../util/Colors';
import Introduction from '../sections/Introduction';
import Utilitarianism from '../sections/Utilitarianism';
import KantGeneral from '../sections/KantGeneral';
import KantFormula from '../sections/KantFormula';
import Aristotle from '../sections/Aristotle';
import Subjectivism from '../sections/Subjectivism';
import Luke from '../sections/Luke';
import Rolls from '../sections/Rolls';
import Summary from '../sections/Summary';
import Labels from '../util/Labels';
import Hobbs from '../sections/Hobbs';
import Review from '../sections/Review';
import Submitted from '../sections/Submitted';

export const SectionComponents = {
  intro: Introduction,
  utilitarianism: Utilitarianism,
  kantGeneral: KantGeneral,
  kantFormula: KantFormula,
  aristo: Aristotle,
  subjectivism: Subjectivism,
  hobbs: Hobbs,
  luke: Luke,
  rolls: Rolls,
  summary: Summary,
  review: Review,
  submitted: Submitted,
};

const Page = ({
  params,
}) => {
  const section = params.section || 'intro';
  const SectionComponent = SectionComponents[section];
  return (
    <div>
      <div style={styles.header} />
      <div style={styles.formContainer}>
        <Paper
          className="centered"
          rounded={false}
          style={styles.formPaper}
        >
          <div style={styles.title}>
            {Labels.TITLE}
          </div>

          <SectionComponent />
        </Paper>
      </div>
    </div>
  );
};

export default Page;

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
    maxWidth: 720,
    paddingBottom: 34,
    textAlign: 'right',
  },
  section: {
    paddingLeft: 34,
    paddingRight: 34,
  },
  title: {
    fontSize: 34,
    paddingLeft: 34,
    marginBottom: 22,
    paddingRight: 34,
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
