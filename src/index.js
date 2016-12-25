import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { Router, Route, browserHistory } from 'react-router';
import Page from './components/Page';
import Page2 from './components/Page2';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  deepPurple500,
  deepPurple700,
} from 'material-ui/styles/colors';
import Responses from './components/Responses';

injectTapEventPlugin();

const BREAK_SIZE = 720;

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple500,
    primary2Color: deepPurple700,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize() {
    this.setState({ windowWidth: window.innerWidth });
  }

  render() {
    const Root = (this.state.windowWidth < BREAK_SIZE) ?
      Page2 : Page;

    return (<Root {...this.props} />);
  }
}

render(
  <Provider store={configureStore()}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router
        history={browserHistory}
        onUpdate={() => window.scrollTo(0, 0)}
      >
        <Route path="/responses" component={Responses} />
        <Route path="/(:section)" component={Page2} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
