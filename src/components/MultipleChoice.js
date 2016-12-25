import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import CommonStyles from '../util/CommonStyles';
import { connect } from 'react-redux';
import { REQUIRED } from '../util/exportToCsv';
import Labels from '../util/Labels';

const MultipleChoice = ({
  items = [],
  title,
  subtitle,
  value,
  onCheck,
  error,
  required = false,
}) => (
  <div style={styles.container}>
    <div style={styles.title}>
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
    {error &&
      <div style={CommonStyles.error}>
        {Labels.REQUIRED}
      </div>
    }
    <div style={{ height: '0.5em' }} />
    <div>
      {items.map((item, i) => (
        <Checkbox
          key={i}
          label={item}
          checked={value.indexOf(item) !== -1}
          onCheck={(event, selected) => onCheck(item, selected, value)}
          iconStyle={styles.iconStyle}
          style={styles.rootStyle}
          labelStyle={styles.labelStyle}
        />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const { section, element } = ownProps;
  return {
    ...ownProps,
    value: JSON.parse((state[section] || {})[element] || '[]'),
    required: REQUIRED[ownProps.section][ownProps.element],
    error: ((state.errors || {})[ownProps.section] || {})[ownProps.element],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { section, element } = ownProps;
  return {
    onCheck: (el, selected, checked) => {
      let newValue = checked;
      if (checked.indexOf(el) !== -1 && !selected) {
        newValue = checked.filter(x => x !== el);
      } else if (checked.indexOf(el) === -1 && selected) {
        newValue = [...checked, el];
      }
      dispatch({
        type: 'SET_TEXT',
        section,
        element,
        value: JSON.stringify(newValue),
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

const MultipleChoiceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MultipleChoice);

export default MultipleChoiceContainer;

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
};
