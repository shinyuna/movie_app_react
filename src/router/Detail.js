import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location: { state } } = this.props
    console.log('state: ', state);
    return (
      (state) ? <h1>{state.title}</h1> : ''
    );
  }
}

export default Detail;