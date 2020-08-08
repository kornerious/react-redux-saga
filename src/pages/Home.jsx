import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ACTION } from 'app/ducks/home/actions';
import FormExample from 'components/Home/FormExample';

class Home extends Component {
  handleSubmit = (values) => {
    console.log(values);
  };

  render() {
    const { fetchData, fetching, data } = this.props;
    let dataToDisplay = data;
    if (!data) {
      dataToDisplay = 'No data available';
    }

    return (
      <div>
        <h1>Home</h1>

        <div className="header">

        </div>
        <div>
          <button type="button" >
            Purge store
          </button>
        </div>
        <div style={{ border: '1px dashed' }}>
          Result should be there:
          <br />
          {fetching ? <div>Loading...</div> : <div>{dataToDisplay}</div>}
        </div>
        <button type="button" onClick={fetchData}>
          Load data
        </button>
        <FormExample onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(
  store => ({
    fetching: store.home.fetching,
    data: store.home.data
  }),
  dispatch => ({
    fetchData: payload => dispatch(ACTION.fetchData(payload))
  })
)(Home);
