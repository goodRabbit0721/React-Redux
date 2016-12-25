import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import CommonStyles from '../util/CommonStyles';
import Title from './Title';
import Slider from 'material-ui/Slider';
import { connect } from 'react-redux';
import { REQUIRED } from '../util/exportToCsv';
import Labels from '../util/Labels';
import mergeStyle from '../util/mergeStyle';

const Range = ({
  title,
  subtitle,
  required,
  minLabel,
  maxLabel,
  value,
  error,
  onChange,
}) => (
  <div style={CommonStyles.elementContainer}>
    <Title
      title={title}
      subtitle={subtitle}
      required={required}
    />
    {error &&
      <div style={CommonStyles.error}>
        {Labels.REQUIRED}
      </div>
    }
    <div style={mergeStyle(CommonStyles.table, { borderWidth: 0 })}>
      <div style={CommonStyles.row}>
        {(Array.apply(null, Array(11))).map((x, i) => (
          <div
            style={mergeStyle(styles.cell, i % 2 === 0 ? {} : { opacity: 0 })}
            key={i}
          >
            {i % 2 === 0 ? (i / 2) + 1 : '..'}
          </div>
        ))}
        <div style={mergeStyle(styles.cell, { textAlign: 'left' })}>
          {7}
        </div>
      </div>
    </div>

    <Slider
      step={1 / 6}
      axis="x-reverse"
      value={value}
      onChange={onChange}
      sliderStyle={{
        marginBottom: 22,
        marginTop: 16,
      }}
    />

    <div style={{ marginBottom: '0.5em' }}>
      <span>{minLabel}</span>
      <span style={{ float: 'left' }}>{maxLabel}</span>
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const { section, element } = ownProps;
  return {
    ...ownProps,
    value: (parseFloat((state[section] || {})[element])) / 6.0,
    required: REQUIRED[ownProps.section][ownProps.element],
    error: ((state.errors || {})[ownProps.section] || {})[ownProps.element],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { section, element } = ownProps;
  return {
    onChange: (event, value) => {
      dispatch({
        type: 'SET_TEXT',
        section,
        element,
        value: `${Math.round(value * 6)}`,
      });
      dispatch({
        type: 'SET_ERROR',
        section,
        element,
        value: false,
      });
    },
  };
};

const RangeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Range);

export default RangeContainer;

const styles = {
  group: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
  },
  input: {
    width: 'auto',
  },
  icon: {
    width: 'auto',
  },
  label: {
    width: 'auto',
  },
  root: {
    width: 'auto',
    padding: 16,
    flex: 1,
  },
  sliderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell: {
    display: 'table-cell',
    paddingTop: 16,
  },
};
