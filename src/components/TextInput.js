import React from 'react';
import TextField from 'material-ui/TextField';
import Colors from '../util/Colors';
import { connect } from 'react-redux';
import CommonStyles from '../util/CommonStyles';
import Labels from '../util/Labels';
import { REQUIRED } from '../util/exportToCsv';


const TextInput = ({
  title,
  required = false,
  multiLine = false,
  subtitle,
  value = '',
  onChange,
  section,
  element,
  compact,
  error,
  type = 'text',
}) => (
  <div style={compact ? {} : CommonStyles.elementContainer}>
    {title &&
      <div style={CommonStyles.title}>
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
    <div
      style={{
        ...(compact ? {} : styles.textField),
        width: multiLine ? '100%' : 'auto',
      }}
    >
      <TextField
        inputStyle={styles.inputStyle}
        multiLine={multiLine}
        name={`${section}-${element}`}
        value={value}
        errorText={error && Labels.REQUIRED}
        onChange={onChange}
        style={type === 'number' ? { width: 'auto' } : {}}
        type={type}
        fullWidth={multiLine}
      />
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const { section, element } = ownProps;
  // console.log(((state.errors || {})[section] || {})[element]);
  return {
    ...ownProps,
    value: (state[section] || {})[element],
    error: ((state.errors || {})[section] || {})[element],
    required: REQUIRED[section][element],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { section, element } = ownProps;
  return {
    onChange: (event) => {
      const value = event.target.value;
      dispatch({
        type: 'SET_TEXT',
        section,
        element,
        value: event.target.value,
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

const TextInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput);

export default TextInputContainer;

const styles = {
  textField: {
    // paddingTop: '0.5em',
    paddingBottom: '0.5em',
  },
  inputStyle: {
    textAlign: 'right',
  },
};
