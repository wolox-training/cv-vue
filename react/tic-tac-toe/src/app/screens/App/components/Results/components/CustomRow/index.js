import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomRow extends Component {
  renderItem = item => {
    return <div>{item}</div>;
  };

  renderField = (field) => {
    return <div key={this.props.rowData.id} className={`row${this.props.index}`}>{`${this.props.rowData[field]}`}</div>
  }
  render() {
    const { rowData } = this.props;
    return (
      <>
        {Object.keys(rowData).map(this.renderField)}
      </>
    );
  }
}

CustomRow.propTypes = {
  rowData: PropTypes.object,
  index: PropTypes.number
}

export default CustomRow;
