import { Sections } from './Sections';
import { COLUMNS } from './exportToCsv';

const importFromCsv = (dispatch, event) => {
  console.log(event);
  const file = document.getElementById('csvFile').files[0];
  if (!file) {
    alert('Please select a file first.');
    return;
  }

  Papa.parse(file, {
    complete: (results) => {
      console.log('Finished...', results.data);
      const sectionRow = results.data[1];
      const elementRow = results.data[2];
      const dataRow = results.data[3];
      const formData = {};
      for (let i = 0; i < dataRow.length; i++) {
        if (!formData[sectionRow[i]]) formData[sectionRow[i]] = {};
        formData[sectionRow[i]][elementRow[i]] = dataRow[i];
      }
      dispatch({
        type: 'SET_DATA',
        formData,
      });
    },
  });
};

export default importFromCsv;
