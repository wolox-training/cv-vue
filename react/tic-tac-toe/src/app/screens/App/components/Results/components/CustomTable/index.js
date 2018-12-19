import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomRow from '../CustomRow';
import styles from './styles.module.scss';

function CustomTable ({title, data}) {

  const renderItem = item => {
    return <div className={styles.titleItem}>{item}</div>;
  };

  const renderRow = (row,index) => <CustomRow rowData={row} index={index}/>

  return (
    <>
      <div className={styles.row}>
        {title.map(renderItem)}
      </div>
      <div className={styles.row}>
        {data.map(renderRow)}
      </div>
    </>
  )
}

CustomTable.propTypes = {
  title: PropTypes.arr,
  data: PropTypes.arr
};

export default CustomTable;
