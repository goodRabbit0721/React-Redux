import {
  utilitarianism,
  kantGeneral,
  kantFormula,
  aristo,
  subjectivism,
  luke,
  hobbs,
  rolls,
} from '../util/logic';

const apply = (action, nextState, optionToAnalyze) => {
  if (action.section === 'utilitarianism') {
    return utilitarianism(nextState);
  } else if (action.section === 'aristo') {
    return aristo(nextState);
  } else if (action.section === 'kantGeneral') {
    return kantGeneral(nextState);
  } else if (action.section === 'kantFormula') {
    return kantFormula(nextState);
  } else if (action.section === 'subjectivism') {
    return subjectivism(nextState, optionToAnalyze);
  } else if (action.section === 'rolls') {
    return subjectivism(nextState, optionToAnalyze);
  } else if (action.section === 'hobbs') {
    return subjectivism(nextState, optionToAnalyze);
  } else if (action.section === 'luke') {
    return subjectivism(nextState, optionToAnalyze);
  }

  return nextState;
};

export const section = (state = {}, action, optionToAnalyze) => {
  switch (action.type) {
    case 'SET_TEXT':
      const nextState = {
        ...state,
        [action.element]: action.value,
      };

      return apply(action, nextState, optionToAnalyze);

    case 'SET_ERROR':
      return {
        ...state,
        [action.element]: action.value,
      };
    default:
      return state;
  }
};

export const formData = (state = {}, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return {
        ...state,
        [action.section]: section(state[action.section], action,
          (state.intro || {}).optionToAnalyze),
      };
    case 'SET_DATA':
      return action.formData;
    case 'SET_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.section]: section((state.errors || {})[action.section], action),
        },
      };
    default:
      return state;
  }
};

const OPTIONS_VALUES = [
  'Health',
  'Freedom',
  'Dignity',
  'Justice',
  'Respecting the law',
];


const SAMPLE_DATA = {
  formData: {
    intro: {
      name: 'John Doe',
      id: '12342',
      dilemma: "Can't decide if I should fire my cook",
      optionA: 'Fire the cook',
      optionB: "Don't fire the cook",
      chosenOption: 0,
      optionAValues: [
        true,
        false,
        false,
        true,
        true,
        false,
        true,
      ],
      optionBValues: [
        false,
        false,
        true,
        true,
        false,
        true,
        false,
      ],
      optionToAnalyze: 1,
    },
    utilitarianism: {
      explanation: 'There is some element of utilitarianism',
      toolEase: 2,
      techincalFeedback: 'There are some issues with the tool',
    },
    kantGeneral: {

      toolEase: 3,
      techincalFeedback: 'There are some issues with the tool',
    },
    kantFormula: {

      toolEase: 4,
      techincalFeedback: 'There are some issues with the tool',
    },
    aristo: {

      toolEase: 5,
      techincalFeedback: 'There are some issues with the tool',
    },
    subjectivism: {

      toolEase: 7,
      techincalFeedback: 'There are some issues with the tool',
    },
    luke: {

      toolEase: 1,
      techincalFeedback: 'There are some issues with the tool',
    },
    rolls: {

      toolEase: 3,
      techincalFeedback: 'There are some issues with the tool',
    },
    summary: {
      conclusions: 'This seems to be an immoral choice based on the study.',
      techincalFeedback: 'There are some issues with the tool',
    },
  },
};
