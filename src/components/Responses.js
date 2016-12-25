import React, { Component } from 'react';
import Colors from '../util/Colors';
import Labels from '../util/Labels';
import TopBar from './TopBar';
import Review from '../sections/Review';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { connect } from 'react-redux';
import { exportAllToCsv } from '../util/exportToCsv';

const firebase = window.firebase;

class Responses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: '',
      index: 0,
      email: '',
      password: '',
    };
  }

  loadData() {
    const { index } = this.props.params;
    firebase.database()
      .ref('submissions')
      .once('value')
      .then(snap => {
        this.props.dispatch({
          type: 'SET_SUBMISSIONS',
          submissions: snap.val(),
        });
      });
  }

  performLogin() {
    this.setState({
      loading: true,
    });

    const email = this.state.email;
    const password = this.state.password;

    if (!email || !password) {
      console.log('email or password  is null ', email, password);
      this.setState({
        loading: false,
      });
      return;
    }

    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({
          loading: false,
          error: '',
        });
        this.downloadData();

      }, err => {
        console.log(err);
        this.setState({
          loading: false,
          error: err.message,
        });
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <div style={styles.container}>
          <div style={styles.loginBox}>
            <CircularProgress />
          </div>
        </div>
      );
    }
    console.log(firebase.auth().currentUser);
    if (true) {
      return (
        <div style={styles.container}>
          <div style={styles.loginBox}>
            <h2 style={styles.header}>
              Moral Dilemma Login
            </h2>
            <div>
              <TextField
                hintText="Email"
                value={this.state.email}
                onChange={e => this.setState({email: e.target.value})}
                type="email"
              />
            </div>
            <div>
              <TextField
                value={this.state.password}
                onChange={e => this.setState({password: e.target.value})}
                hintText="Password"
                type="password"
              />
            </div>
            <RaisedButton
              label="Download"
              onClick={() => this.performLogin()}
              primary
              style={styles.button}
            />
            {this.state.error &&
              <div dir="ltr" style={styles.error}>
                {this.state.error}
              </div>
            }
          </div>
        </div>
      );
    }

    return (
      <div style={{ backgroundColor: 'white' }}>
        <RaisedButton
          label="Download Data"
          onClick={() => this.downloadData()}
          primary
          style={styles.button}
        />
        <Review />
      </div>
    );
  }

  downloadData() {
    firebase.database().ref('submissions').once('value')
      .then(snap => exportAllToCsv(snap.val()));
  }
}

const mapStateToProps = (state, ownProps) => ownProps;
const mapDispatchToProps = (dispatch) => ({ dispatch });

const ResponsesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Responses);

// const Responses = ({
//   params,
// }) => {
//   const index = params.index;
//   const SectionComponent = Review;
//   return (
//     <div>
//       <div style={{ backgroundColor: 'white', maxWidth: 720, margin: 'auto' }}>
//         <TopBar />
//         <div style={styles.title}>
//           {Labels.TITLE}
//         </div>
//         <SectionComponent />
//       </div>
//     </div>
//   );
// };

export default ResponsesContainer;

const styles = {
  container: {
    margin: 'auto',
    width: '100%',
    height: '100vh',
    backgroundColor: 'white',
  },
  loginBox: {
    width: 400,
    margin: 'auto',
    textAlign: 'center',
    paddingTop: 120,
  },
  header: {
    fontFamily: 'sans-serif',
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    width: 256,
  },
  error: {
    color: Colors.ERROR,
    fontFamily: 'sans-serif',
    width: 256,
    margin: 'auto',
    marginTop: 16,
    textAlign: 'center',
  },
};
