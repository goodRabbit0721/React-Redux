import Labels from './Labels';
import { Sections } from './Sections';

export const COLUMNS = {
  intro: [
    'name',
    'id',
    'description',
    'optionA',
    'optionB',
    'selectedOption',
    'optionAValues',
    'optionBValues',
    // 'optionsWorthy',
    'optionToAnalyze',
  ],
  utilitarianism: [
    'name1',
    'numberOfPeople1',
    'damageOrBenefit1',
    'damageOrBenefitGrade1',
    'name2',
    'numberOfPeople2',
    'damageOrBenefit2',
    'damageOrBenefitGrade2',
    'name3',
    'numberOfPeople3',
    'damageOrBenefit3',
    'damageOrBenefitGrade3',
    'name4',
    'numberOfPeople4',
    'damageOrBenefit4',
    'damageOrBenefitGrade4',
    'name5',
    'numberOfPeople5',
    'damageOrBenefit5',
    'damageOrBenefitGrade5',
    'name6',
    'numberOfPeople6',
    'damageOrBenefit6',
    'damageOrBenefitGrade6',
    'automaticDecision',
    'explanation',
    'howEasy',
    'technicalFeedback',
  ],
  kantGeneral: [
    'onOneHand1',
    'onOtherHand1',
    'onOneHand2',
    'onOtherHand2',
    'decision',
    'automaticDecision',
    'explanation',
    'howEasy',
    'technicalFeedback',
  ],
  kantFormula: [
    // 'means1',
    // 'purpose1',
    'decision1',
    // 'means2',
    // 'purpose2',
    'decision2',
    // 'means3',
    // 'purpose3',
    'decision3',
    'decision4',
    'decision5',
    'decision6',
    'decision',
    'automaticDecision',
    'explanation',
    'howEasy',
    'technicalFeedback',
  ],
  aristo: [
    'indifference',
    'courage',
    'shame',
    // 'lackOfEmotion',
    'greed',
    'generosity',
    // 'irony',
    // 'kindness',
    // 'stubborn',
    'endurance',
    'arrogance',
    'innocence',
    'automaticDecision',
    'explanation',
    'howEasy',
    'technicalFeedback',
  ],
  subjectivism: [
    'mainFacts1',
    // 'betterOption1',
    // 'mainFacts2',
    // 'betterOptions2',
    'decision',
    'automaticDecision',
    'explanation',
    'howEasy',
    'technicalFeedback',
  ],
  hobbs: [
    'value1',
    'betterOption1',
    'value2',
    'betterOption2',
    'value3',
    'betterOption3',
    'value4',
    'betterOption4',
    'value5',
    'betterOption5',
    'decision',
    'automaticDecision',
    'explanation',
    'howEasy',
    'technicalFeedback',
  ],
  luke: [
    'life',
    'health',
    'freedom',
    'property',
    // 'other',
    // 'otherValue',
    'decision',
    'automaticDecision',
    'explanation',
    'howEasy',
    'technicalFeedback',
  ],
  rolls: [
    'freedom',
    'equality',
    'gap',
    // 'other',
    // 'otherValue',
    'decision',
    'automaticDecision',
    'explanation',
    'howEasy',
    'technicalFeedback',
  ],
  summary: [
    // 'utilitarianism',
    // 'kantGeneral',
    // 'kantFormula',
    // 'aristo',
    // 'subjectivism',
    // 'hobbs',
    // 'luke',
    // 'rolls',
    'conclusions',
    'correctionRequired',
    'technicalFeedback',
  ],
};

export const SECTION_HEADINGS = {
  utilitarianism: Labels.UTILITARIANISM,
  kantGeneral: Labels.KANT_GENERAL,
  kantFormula: Labels.KANT_FORMULA,
  aristo: Labels.ARISTOTLE,
  subjectivism: Labels.SUBJECTIVISM,
  hobbs: Labels.HOBBS,
  luke: Labels.LUKE,
  rolls: Labels.ROLLS,
  summary: Labels.SUMMARY,
};


export const REQUIRED = {
  intro: {
    name: true,
    id: true,
    description: true,
    optionA: true,
    optionB: true,
    selectedOption: true,
    optionAValues: true,
    optionBValues: true,
    optionsWorthy: false,
    optionToAnalyze: true,
  },
  utilitarianism: {
    name1: true,
    numberOfPeople1: true,
    damageOrBenefit1: true,
    damageOrBenefitGrade1: true,
    name2: false,
    numberOfPeople2: false,
    damageOrBenefit2: false,
    damageOrBenefitGrade2: false,
    name3: false,
    numberOfPeople3: false,
    damageOrBenefit3: false,
    damageOrBenefitGrade3: false,
    name4: false,
    numberOfPeople4: false,
    damageOrBenefit4: false,
    damageOrBenefitGrade4: false,
    name5: false,
    numberOfPeople5: false,
    damageOrBenefit5: false,
    damageOrBenefitGrade5: false,
    name6: false,
    numberOfPeople6: false,
    damageOrBenefit6: false,
    damageOrBenefitGrade6: false,
    automaticDecision: false,
    explanation: true,
    howEasy: true,
    technicalFeedback: true,
  },
  kantGeneral: {
    onOneHand1: true,
    onOtherHand1: true,
    onOneHand2: true,
    onOtherHand2: true,
    decision: true,
    automaticDecision: true,
    explanation: true,
    howEasy: true,
    technicalFeedback: true,
  },
  kantFormula: {
    // means1: true,
    // purpose1: true,
    decision1: true,
    // means2: true,
    // purpose2: true,
    decision2: false,
    // means3: true,
    // purpose3: true,
    decision3: false,
    decision4: false,
    decision5: false,
    decision6: false,
    decision: true,
    automaticDecision: true,
    explanation: true,
    howEasy: true,
    technicalFeedback: true,
  },
  aristo: {
    indifference: true,
    courage: true,
    shame: true,
    // lackOfEmotion: true,
    greed: true,
    generosity: true,
    // irony: true,
    // kindness: true,
    // stubborn: true,
    endurance: true,
    arrogance: true,
    innocence: true,
    automaticDecision: true,
    explanation: true,
    howEasy: true,
    technicalFeedback: true,
  },
  subjectivism: {
    mainFacts1: true,
    // betterOption1: false,
    // mainFacts2: false,
    // betterOptions2: false,
    decision: true,
    automaticDecision: true,
    explanation: true,
    howEasy: true,
    technicalFeedback: true,
  },
  hobbs: {
    value1: true,
    betterOption1: true,
    value2: false,
    betterOption2: false,
    value3: false,
    betterOption3: false,
    value4: false,
    betterOption4: false,
    value5: false,
    betterOption5: false,
    decision: true,
    automaticDecision: true,
    explanation: true,
    howEasy: true,
    technicalFeedback: true,
  },
  luke: {
    life: true,
    health: true,
    freedom: true,
    property: true,
    other: false,
    otherValue: false,
    decision: true,
    automaticDecision: true,
    explanation: true,
    howEasy: true,
    technicalFeedback: true,
  },
  rolls: {
    freedom: true,
    equality: true,
    gap: true,
    other: false,
    otherValue: false,
    decision: true,
    automaticDecision: true,
    explanation: true,
    howEasy: true,
    technicalFeedback: true,
  },
  summary: {
    // utilitarianism: true,
    // kantGeneral: true,
    // kantFormula: true,
    // aristo: true,
    // subjectivism: true,
    // hobbs: true,
    // luke: true,
    // rolls: true,
    conclusions: true,
    correctionRequired: true,
    technicalFeedback: true,
  },
};


export const HEADINGS = {
  intro: {
    name: Labels.FULL_NAME,
    id: Labels.ID,
    description: Labels.DESCRIPTION,
    optionA: Labels.OPTION_A,
    optionB: Labels.OPTION_B,
    selectedOption: Labels.WHICH_OPTION,
    optionAValues: Labels.OPTION_A_VALUES,
    optionBValues: Labels.OPTION_B_VALUES,
    optionsWorthy: Labels.OPTIONS_WORTHY,
    optionToAnalyze: Labels.WHICH_OPTION_ANALYZE,
  },
  utilitarianism: {
    name1: Labels.PERSON_OF_INTEREST + ' 1',
    numberOfPeople1: Labels.NUMBER_OF_PEOPLE,
    damageOrBenefit1: Labels.DAMAGE_OR_BENEFIT_SUMMARY,
    damageOrBenefitGrade1: Labels.DAMAGE_OR_BENEFIT_GRADE,
    name2: Labels.PERSON_OF_INTEREST + ' 2',
    numberOfPeople2: Labels.NUMBER_OF_PEOPLE,
    damageOrBenefit2: Labels.DAMAGE_OR_BENEFIT_SUMMARY,
    damageOrBenefitGrade2: Labels.DAMAGE_OR_BENEFIT_GRADE,
    name3: Labels.PERSON_OF_INTEREST + ' 3',
    numberOfPeople3: Labels.NUMBER_OF_PEOPLE,
    damageOrBenefit3: Labels.DAMAGE_OR_BENEFIT_SUMMARY,
    damageOrBenefitGrade3: Labels.DAMAGE_OR_BENEFIT_GRADE,
    name4: Labels.PERSON_OF_INTEREST + ' 4',
    numberOfPeople4: Labels.NUMBER_OF_PEOPLE,
    damageOrBenefit4: Labels.DAMAGE_OR_BENEFIT_SUMMARY,
    damageOrBenefitGrade4: Labels.DAMAGE_OR_BENEFIT_GRADE,
    name5: Labels.PERSON_OF_INTEREST + ' 5',
    numberOfPeople5: Labels.NUMBER_OF_PEOPLE,
    damageOrBenefit5: Labels.DAMAGE_OR_BENEFIT_SUMMARY,
    damageOrBenefitGrade5: Labels.DAMAGE_OR_BENEFIT_GRADE,
    name6: Labels.PERSON_OF_INTEREST + ' 6',
    numberOfPeople6: Labels.NUMBER_OF_PEOPLE,
    damageOrBenefit6: Labels.DAMAGE_OR_BENEFIT_SUMMARY,
    damageOrBenefitGrade6: Labels.DAMAGE_OR_BENEFIT_GRADE,
    automaticDecision: Labels.DECISION,
    explanation: Labels.EXPLANATION,
    howEasy: Labels.HOW_SIMPLE_UTILITARIANISM,
    technicalFeedback: Labels.FEEDBACK,
  },
  kantGeneral: {
    onOneHand1: Labels.PRACTICAL_RULE_FORMULATION +': '+ Labels.ON_ONE_HAND,
    onOtherHand1: Labels.PRACTICAL_RULE_FORMULATION +': '+ Labels.ON_OTHER_HAND,
    onOneHand2: Labels.GENERAL_RULE_FORMULATION +': '+ Labels.ON_ONE_HAND,
    onOtherHand2: Labels.GENERAL_RULE_FORMULATION +': '+ Labels.ON_OTHER_HAND,
    automaticDecision: Labels.DECISION,
    explanation: Labels.EXPLANATION,
    howEasy: Labels.HOW_SIMPLE_KANT_GENERAL,
    technicalFeedback: Labels.FEEDBACK,
  },
  kantFormula: {
    means1: Labels.MEANS,
    purpose1: Labels.PURPOSE,
    decision1: Labels.KANT_DECISION_SUMMARY,
    means2: Labels.MEANS,
    purpose2: Labels.PURPOSE,
    decision2: Labels.KANT_DECISION_SUMMARY,
    means3: Labels.MEANS,
    purpose3: Labels.PURPOSE,
    decision3: Labels.KANT_DECISION_SUMMARY,
    decision4: Labels.KANT_DECISION_SUMMARY,
    decision5: Labels.KANT_DECISION_SUMMARY,
    decision6: Labels.KANT_DECISION_SUMMARY,
    automaticDecision: Labels.DECISION,
    explanation: Labels.EXPLANATION,
    howEasy: Labels.HOW_SIMPLE_KANT_FORMULA,
    technicalFeedback: Labels.FEEDBACK,
  },
  aristo: {
    indifference: Labels.INDIFFERENCE,
    courage: Labels.COURAGE,
    shame: Labels.SHAME,
    lackOfEmotion: Labels.LACK_OF_EMOTION,
    greed: Labels.GREED,
    generosity: Labels.GENEROSITY,
    irony: Labels.IRONY,
    kindness: Labels.KINDNESS,
    stubborn: Labels.STUBBORN,
    endurance: Labels.ENDURANCE,
    arrogance: Labels.ARROGANCE,
    innocence: Labels.INNOCENCE,
    automaticDecision: Labels.DECISION,
    explanation: Labels.EXPLANATION,
    howEasy: Labels.HOW_SIMPLE_ARISTOTLE,
    technicalFeedback: Labels.FEEDBACK,
  },
  subjectivism: {
    mainFacts1: Labels.MAIN_FACTS,
    betterOption1: Labels.BETTER_OPTION,
    mainFacts2: Labels.MAIN_FACTS,
    betterOptions2: Labels.BETTER_OPTION,
    automaticDecision: Labels.DECISION,
    explanation: Labels.EXPLANATION,
    howEasy: Labels.HOW_SIMPLE_SUBJECTIVISM,
    technicalFeedback: Labels.FEEDBACK,
  },
  hobbs: {
    value1: Labels.VALUE,
    betterOption1: Labels.HOBBS_BETTER_OPTION,
    value2: Labels.VALUE,
    betterOption2: Labels.HOBBS_BETTER_OPTION,
    value3: Labels.VALUE,
    betterOption3: Labels.HOBBS_BETTER_OPTION,
    value4: Labels.VALUE,
    betterOption4: Labels.HOBBS_BETTER_OPTION,
    value5: Labels.VALUE,
    betterOption5: Labels.HOBBS_BETTER_OPTION,
    automaticDecision: Labels.DECISION,
    explanation: Labels.EXPLANATION,
    howEasy: Labels.HOW_SIMPLE_HOBBS,
    technicalFeedback: Labels.FEEDBACK,
  },
  luke: {
    life: Labels.LIFE,
    health: Labels.HEALTH,
    freedom: Labels.FREEDOM,
    property: Labels.PROPERTY,
    other: Labels.OTHER,
    otherValue: Labels.OTHER_VALUE,
    automaticDecision: Labels.DECISION,
    explanation: Labels.EXPLANATION,
    howEasy: Labels.HOW_SIMPLE_LUKE,
    technicalFeedback: Labels.FEEDBACK,
  },
  rolls: {
    freedom: Labels.FREEDOM_ROLLS,
    equality: Labels.EQUALITY,
    gap: Labels.GAP,
    other: Labels.OTHER,
    otherValue: Labels.OTHER_VALUE,
    automaticDecision: Labels.DECISION,
    explanation: Labels.EXPLANATION,
    howEasy: Labels.HOW_SIMPLE_ROLLS,
    technicalFeedback: Labels.FEEDBACK,
  },
  summary: {
    // utilitarianism: Labels.UTILITARIANISM,
    // kantGeneral: Labels.KANT_GENERAL,
    // kantFormula: Labels.KANT_FORMULA,
    // aristo: Labels.ARISTOTLE,
    // subjectivism: Labels.SUBJECTIVISM,
    // hobbs: Labels.HOBBS,
    // luke: Labels.LUKE,
    // rolls: Labels.ROLLS,
    automaticDecision: Labels.DECISION,
    conclusions: Labels.CONCLUSIONS,
    correctionRequired: Labels.CORRECTIVE,
    technicalFeedback: Labels.TECHNICAL_FEEDBACK,
  },
};

const x = {
  a: 1,
  b: 2,
};

const y = x.c;


function CsvWriter(del, enc) {
  this.del = del || ','; // CSV Delimiter
  this.enc = enc || '"'; // CSV Enclosure

  // Convert Object to CSV column
  this.escapeCol = function (col) {
    if(isNaN(col)) {
      // is not boolean or numeric
      if (!col) {
        // is null or undefined
        col = '';
      } else {
        // is string or object
        col = String(col);
        if (col.length > 0) {
          // use regex to test for del, enc, \r or \n
          // if(new RegExp( '[' + this.del + this.enc + '\r\n]' ).test(col)) {

          // escape inline enclosure
          col = col.split( this.enc ).join( this.enc + this.enc );

          // wrap with enclosure
          col = this.enc + col + this.enc;
        }
      }
    }
    return col;
  };

  // Convert an Array of columns into an escaped CSV row
  this.arrayToRow = function (arr) {
    var arr2 = arr.slice(0);

    var i, ii = arr2.length;
    for(i = 0; i < ii; i++) {
      arr2[i] = this.escapeCol(arr2[i]);
    }
    return arr2.join(this.del);
  };

  // Convert a two-dimensional Array into an escaped multi-row CSV
  this.arrayToCSV = function (arr) {
    var arr2 = arr.slice(0);

    var i, ii = arr2.length;
    for(i = 0; i < ii; i++) {
      arr2[i] = this.arrayToRow(arr2[i]);
    }
    return arr2.join("\r\n");
  };
}

const exportToCsv = (formData) => {
  const row = [];
  const elementRow = [];
  const sectionRow = [];
  const dataRow = [];
  console.log('exporting...');
  let count = 0;
  for (let i = 0; i < Sections.length; i++) {
    const section = Sections[i];
    const sectionColumns = COLUMNS[section] || [];
    for (let j = 0; j < sectionColumns.length; j++) {
      const element = sectionColumns[j];
      row.push(HEADINGS[section][element]);
      elementRow.push(element);
      sectionRow.push(section);
      const dataItem = (formData[section] || {})[element] || '';
      dataRow.push(dataItem);
      count++;
    }
  }
  // console.log('number of columns is ' + count);

  const csv = new CsvWriter();

  // let csvContent = 'data:text/csv;charset=windows-1255,';
  let csvContent = 'data:text/csv;charset=utf-8,\uFEFF';
  // const rowText = row.join(',');
  // const englishRowText = englishRow.join(',');
  // buf = iconv.encode("Sample input string", 'win1251');
  // csvContent += iconv.encode(
  //   csv.arrayToCSV([row, sectionRow, elementRow, dataRow]),
  //   'win1255'
  // );
  // const encodedText = new TextEncoder(
  //   'windows-1255',
  //   { NONSTANDARD_allowLegacyEncoding: true }
  // ).encode(csv.arrayToCSV([row, sectionRow, elementRow, dataRow]));

  csvContent += csv.arrayToCSV([row, sectionRow, elementRow, dataRow]);
  // csvContent += encodedText;

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'moral_dilemma_draft.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  return false;
};

export const exportAllToCsv = (submissions) => {
  const row = [];
  const elementRow = [];
  const sectionRow = [];
  const dataRows = [];
  console.log('exporting...');
  for (const sid of Object.keys(submissions)) {
    const formData = submissions[sid].formData;
    const dataRow = [];
    for (let i = 0; i < Sections.length; i++) {
      const section = Sections[i];
      const sectionColumns = COLUMNS[section] || [];
      for (let j = 0; j < sectionColumns.length; j++) {
        const element = sectionColumns[j];
        const dataItem = (formData[section] || {})[element] || '';
        dataRow.push(dataItem);
      }
    }
    dataRows.push(dataRow);
  }
  for (let i = 0; i < Sections.length; i++) {
    const section = Sections[i];
    const sectionColumns = COLUMNS[section] || [];
    for (let j = 0; j < sectionColumns.length; j++) {
      const element = sectionColumns[j];
      row.push(HEADINGS[section][element]);
      elementRow.push(element);
      sectionRow.push(section);
    }
  }

  const csv = new CsvWriter();

  let csvContent = 'data:text/csv;charset=utf-8,\uFEFF';


  // csvContent += csv.arrayToCSV([row, sectionRow, elementRow, ...dataRows]);
  csvContent += csv.arrayToCSV([sectionRow, row, ...dataRows]);
  // csvContent += encodedText;

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'moral_dilemma_responses.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  return false;
};


export default exportToCsv;
