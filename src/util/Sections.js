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

export const Sections = [
  'intro',
  'utilitarianism',
  'kantGeneral',
  'kantFormula',
  'aristo',
  'subjectivism',
  'hobbs',
  'luke',
  'rolls',
  'summary',
  'review',
];

export const getNextSection = (section) => (
  Sections[Sections.indexOf(section) + 1]
);

export const getPreviousSection = (section) => (
  Sections[Sections.indexOf(section) - 1]
);
