import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchEntity } from '../actions';

import Title from 'components/Title';

class App extends Component {
  onButtonClick() {
    this.props.dispatch(fetchEntity());
  }
  render() {
    const { receivedAt } = this.props;
    return (
      <div>
          <Title value={'Foobar'} />
          <button onClick={this.onButtonClick.bind(this)}>
            Click
          </button>
          Last Timestamp:
          {receivedAt &&
            <span>
              Last updated at {new Date(receivedAt).toLocaleTimeString()}.
            </span>
          }
      </div>
    );
  }
}

App.propTypes = {
  receivedAt: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { entities } = state;
  const { receivedAt } = entities;

  return {
    receivedAt
  };
}

export default connect(mapStateToProps)(App);
