import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { userPropType } from 'constants/propTypes';

class CustomRow extends Component {
  renderField = (field) => <div key={this.props.rowData.id} className={`row${this.props.index}`}>{`${this.props.rowData[field]}`}</div>;

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
  rowData: PropTypes.objectOf(userPropType),
  index: PropTypes.number
}

export default CustomRow;
