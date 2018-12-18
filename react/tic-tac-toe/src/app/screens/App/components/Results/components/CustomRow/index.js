import React, { Component } from 'react';

class CustomRow extends Component {
  renderItem = item => {
    return <div>{item}</div>;
  };

  renderField = (field) => {
    return <div key={this.props.rowData.id} className={`row${this.props.index}`}>{`${this.props.rowData[field]}`}</div>
  }
  // ${field}: 
  render() {
    const { rowData , index} = this.props;
    return (
      <>
        {Object.keys(rowData).map(this.renderField)}
      </>
    );
  }
}

export default CustomRow;
