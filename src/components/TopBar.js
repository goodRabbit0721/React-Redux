import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Labels from '../util/Labels';
import { connect } from 'react-redux';
import exportToCsv from '../util/exportToCsv';
import importFromCsv from '../util/importFromCsv';
import { Link } from 'react-router';

const TopBar = ({
  formData,
  dispatch,
}) => {
  return (
    <AppBar
      title={<Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>{Labels.DILEMMA}</Link>}
      style={{
        paddingLeft: 8,
      }}
      iconElementLeft={<div />}
    >
      <FlatButton
        label={Labels.LOAD}
        style={styles.button}
        labelPosition="before"
      >
        <input
          type="file"
          id="csvFile"
          style={styles.exampleImageInput}
          onChange={(event) => importFromCsv(dispatch, event)}
        />
      </FlatButton>
      <FlatButton
        label={Labels.SAVE}
        style={styles.button}
        onClick={() => exportToCsv(formData)}
      />
    </AppBar>
  );
};

const styles = {
  button: {
    color: 'white',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const mapStateToProps = (state) => ({
  formData: state,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const TopBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopBar);

export default TopBarContainer;
