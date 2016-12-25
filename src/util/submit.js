import exportToCsv from '../util/exportToCsv';

const submit = (formData, event, dispatch) => {
    exportToCsv(formData);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        // ...

        if (isAnonymous) {
          firebase.database().ref('submissions').push({
            uid,
            formData,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
          })
          .then(() => {
            firebase.auth().signOut();
            dispatch({
              type: 'SET_DATA',
              formData: {},
            });
          });
        }
      } else {
        // User is signed out.
        // ...
      }
      // ...
    });

    firebase.auth().signInAnonymously().catch((error) => {
      if (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
        console.log('Failed to log in!', errorCode, errorMessage);
      }
    });
};

export default submit;
