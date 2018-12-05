import React, { PureComponent, Fragment } from 'react';
import store from '@redux/store';
import actions from '@redux/shopping-cart/actions';
import { arrayOf, func } from 'prop-types';
import { bookSelectedPropType } from '@constants/propTypes';
import Button from '@components/Button';

import Item from './components/Item';
import styles from './styles.scss';

class ShoppingCart extends PureComponent {
  state = {
    open: false
  };

  componentDidMount() {
    this.unsubscribe = store.subscribe(this.handleOpenState);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleOpenState = () => {
    const {
      shoppingCart: { open }
    } = store.getState();
    this.setState({ open });
  };

  toggleContent = () => {
    store.dispatch(actions.toggleState());
  };

  total = (accumulator, currentValue) => accumulator + currentValue.quantity;

  renderItem = item => {
    const { addItem, removeItem } = this.props;
    return <Item key={item.id} item={item} addItem={addItem} removeItem={removeItem} />;
  };

  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <Button className={styles.buttonCart} onClick={this.toggleContent}>
          <i className="fa fa-shopping-cart" />
        </Button>
        <div className={`${styles.container} ${this.state.open ? styles.open : ''}`}>
          <h1 className={styles.title}>Cart</h1>
          <ul className={styles.content}>{data.map(this.renderItem)}</ul>
          <h2 className={`${styles.title} ${styles.total}`}>Total: {data.reduce(this.total, 0)}</h2>
        </div>
      </Fragment>
    );
  }
}

ShoppingCart.propTypes = {
  data: arrayOf(bookSelectedPropType).isRequired,
  addItem: func.isRequired,
  removeItem: func.isRequired
};

export default ShoppingCart;
