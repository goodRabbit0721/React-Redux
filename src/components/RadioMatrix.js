import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import CommonStyles from '../util/CommonStyles';
import { connect } from 'react-redux';

const RadioMatrixRow = ({
  options,
  onChange,
  odd,
  entry,
  value,
  name,
}) => {
  const optionNodes = options.map((option, i) => (
    <RadioButton
      style={styles.cell}
      key={i}
      value={option}
    />
  ));

  return (
    <RadioButtonGroup
      style={odd ? styles.oddRow : styles.row}
      onChange={(event, val) => onChange(val)}
      valueSelected={value}
      name={name}
    >
      <RadioButton
        iconStyle={styles.iconStyle}
        label={entry}
        disabled
        labelStyle={styles.labelStyle}
        style={styles.labelCell}
      />
      {optionNodes}
    </RadioButtonGroup>
  );
};

const RadioMatrix = ({
  entries,
  options,
  title,
  subtitle,
  elements,
  required = false,
  sectionValues,
  section,
  onChange,
  labelHeader = '',
}) => {
  const entryNodes = entries.map((entry, i) => (
    <RadioMatrixRow
      options={options}
      odd={i % 2 !== 0}
      entry={entry}
      section={section}
      key={i}
      name={`${section}-${elements[i]}`}
      value={sectionValues[elements[i]]}
      onChange={(val) => onChange(elements[i], val)}
    />
  ));
  const optionNodes = options.map((option, i) => (
    <div style={{ ...styles.cell, paddingBottom: 16 }} key={i}>
      {option}
    </div>
  ));
  return (
    <div style={styles.container} className="table">
      <div style={CommonStyles.title}>
        {title}
        {required &&
          <span style={CommonStyles.asterisk}> *</span>
        }
      </div>
      {subtitle &&
        <div style={CommonStyles.subtitle}>
          {subtitle}
        </div>
      }
      <div style={{ height: '1em' }} />
      <div style={styles.table}>
        <div style={styles.row}>
          <div style={styles.labelCell}>
            {labelHeader}
          </div>
          {optionNodes}
        </div>
        {entryNodes}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { section } = ownProps;
  return {
    ...ownProps,
    sectionValues: state[section] || {},
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { section } = ownProps;
  return {
    onChange: (element, value) => dispatch({
      type: 'SET_TEXT',
      section,
      element,
      value,
    }),
  };
};

const RadioMatrixContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioMatrix);

export default RadioMatrixContainer;

const styles = {
  container: {
    paddingTop: 16,
    paddingBottom: 16,
    overflowX: 'scroll',
    overflowY: 'hidden',
  },
  table: {
    display: 'table',
  },
  row: {
    display: 'table-row',
  },
  oddRow: {
    display: 'table-row',
    backgroundColor: 'rgb(242, 242, 242)',
  },
  cell: {
    display: 'table-cell',
    minWidth: 100,
    paddingTop: 16,
    paddingBottom: 16,
    verticalAlign: 'middle',
    textAlign: 'center',
  },
  labelCell: {
    display: 'table-cell',
    minWidth: 122,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 8,
    verticalAlign: 'middle',
  },
  iconStyle: {
    display: 'none',
  },
  labelStyle: {
    color: 'black',
  },
};
