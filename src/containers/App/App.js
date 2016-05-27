import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

class App extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired,
    store: PropTypes.object
  };

  get content() {
    return (
      <Provider store={this.props.store}>
        <Router
          routes={this.props.routes}
          history={this.props.history} >
        </Router>
      </Provider>
    )
  }

  render () {
     return (
       <div style={{ height: '100%' }}>
         {this.content}
       </div>
     )
   }
}

export default App;
