import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import CommonStyles from '../util/CommonStyles';
import { connect } from 'react-redux';
import { RadioGroup, Radio } from 'react-radio-group';
import { REQUIRED } from '../util/exportToCsv';
import Labels from '../util/Labels';

const RadioList = ({
  items = [],
  title,
  subtitle,
  section,
  element,
  value,
  error,
  onChange,
  compact,
  required = false,
  values = items,
}) => (
  <div style={compact ? {} : styles.container}>
    {title &&
      <div style={styles.title}>
        {title}
        {required &&
          <span style={CommonStyles.asterisk}> *</span>
        }
      </div>
    }
    {subtitle &&
      <div style={CommonStyles.subtitle}>
        {subtitle}
      </div>
    }
    {error &&
      <div style={CommonStyles.error}>
        {Labels.REQUIRED}
      </div>
    }
    {!compact && <div style={{ height: '0.5em' }} />}

    <RadioGroup
      name={`${section}-${element}`}
      selectedValue={value}
      onChange={onChange}
    >
      {items.map((item, i) => (
        <div
          key={i}
          style={(i !== items.length - 1) ? styles.radioLabel : {}}
        >
          <label>
            <Radio value={values[i]} key={i} style={styles.radio} />
            {item}
          </label>
        </div>
      ))}
    </RadioGroup>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  value: (state[ownProps.section] || {})[ownProps.element],
  required: REQUIRED[ownProps.section][ownProps.element],
  error: ((state.errors || {})[ownProps.section] || {})[ownProps.element],
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { section, element } = ownProps;
  return {
    onChange: (value) => {
      dispatch({
        type: 'SET_TEXT',
        section,
        element,
        value,
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

const RadioListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioList);

export default RadioListContainer;

const styles = {
  container: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  title: {
    fontSize: 20,
  },
  iconStyle: {
    marginRight: 0,
    marginLeft: 16,
  },
  rootStyle: {
    paddingTop: '0.5em',
    paddingBottom: '0.5em',
  },
  radio: {
    marginLeft: 8,
  },
  radioLabel: {
    marginBottom: 8,
  },
};
