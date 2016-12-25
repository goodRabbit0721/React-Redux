import Labels from './Labels';
import { Sections } from './Sections';

export const utilitarianism = (sectionState = {}) => {
  let result;
  // console.log(sectionState.damageOrBenefit1);
  [1, 2, 3, 4, 5, 6].forEach(i => {
    const number = parseInt(sectionState[`numberOfPeople${i}`]);
    const tp = sectionState[`damageOrBenefit${i}`];
    const grade = parseInt(sectionState[`damageOrBenefitGrade${i}`]);

    if (number && tp && grade) {
      result = result || 0;
      result += number * grade * (tp === Labels.BENEFIT ? 1 : -1);
    }
  });
  if (result) {
    return {
      ...sectionState,
      automaticDecision: result < 0 ? Labels.CHOSEN_IMMORAL : Labels.CHOSEN_MORAL,
    };
  }
  return sectionState;
};


const traits = [
  'indifference',
  'courage',
  'shame',
  'greed',
  'generosity',
  'endurance',
  'arrogance',
  'innocence',
];

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

export const aristo = (sectionState = {}) => {
  let middle = 0;
  let nonMiddle = 0;
  for (let i = 0; i < traits.length; i++) {
    const t = traits[i];
    // console.log(t, sectionState[t]);
    const value = sectionState[t];
    if (!value) {
      return sectionState;
    } else if (value === Labels.NOT_RELEVANT) {
      // nothing to do
    } else if (value === Labels[`${entries[i]}2`]) {
      middle++;
    } else {
      nonMiddle++;
    }
  }
  console.log(middle, nonMiddle);

  return {
    ...sectionState,
    automaticDecision: middle < nonMiddle ? Labels.CHOSEN_IMMORAL : Labels.CHOSEN_MORAL,
  };
};

export const kantGeneral = (sectionState = {}) => {
  const { decision } = sectionState;
  if (decision === Labels.YES) {
    return {
      ...sectionState,
      automaticDecision: Labels.CHOSEN_MORAL,
    };
  } else if (decision === Labels.NO) {
    return {
      ...sectionState,
      automaticDecision: Labels.CHOSEN_IMMORAL,
    };
  }
  return sectionState;
};

export const kantFormula = (sectionState = {}) => {
  const { decision } = sectionState;
  if (decision === Labels.KANT_MORAL) {
    return {
      ...sectionState,
      automaticDecision: Labels.CHOSEN_MORAL,
    };
  } else if (decision === Labels.KANT_NOT_MORAL) {
    return {
      ...sectionState,
      automaticDecision: Labels.CHOSEN_IMMORAL,
    };
  }
  return sectionState;
};

export const subjectivism = (sectionState = {}, optionToAnalyze) => {
  const { decision } = sectionState;
  if (!decision || !optionToAnalyze) { return sectionState; }
  if (decision === optionToAnalyze) {
    return {
      ...sectionState,
      automaticDecision: Labels.CHOSEN_MORAL,
    };
  } else if (decision !== optionToAnalyze) {
    return {
      ...sectionState,
      automaticDecision: Labels.CHOSEN_IMMORAL,
    };
  }
  return sectionState;
};

export const hobbs = (sectionState = {}) => {

  return sectionState;
};

export const luke = (sectionState = {}) => {

  return sectionState;
};

