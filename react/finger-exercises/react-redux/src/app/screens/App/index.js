import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import actions from '@redux/book/actions';
import { bookSelectedPropType, bookPropType } from '@constants/propTypes';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(actions.getBooks());
  }

  onSearch = value => {
    let { originalData: books } = this.props;
    books = books.filter(book => book.name.includes(value));
    this.props.dispatch(actions.searchBook(books));
  };

  addToCart = item => {
    const [...cart] = this.props.bookSelected;
    cart.push(item);
    this.props.dispatch(actions.addToCart(cart));
  };

  addItem = itemId => {
    let [...cart] = this.props.bookSelected;
    cart = cart.map(book => {
      if (itemId === book.id) book.quantity++;
      return book;
    });
    this.props.dispatch(actions.addItem(cart));
  };

  removeItem = itemId => {
    let [...cart] = this.props.bookSelected;
    cart = cart.filter(book => book.id !== itemId);
    this.props.dispatch(actions.removeItem(cart));
  };

  CONFIGURATION_BUTTON = {
    add: {
      text: 'Add to cart',
      function: this.addToCart
    },
    remove: {
      text: 'Remove',
      function: this.removeItem,
      isDanger: true
    }
  };

  renderBooks = item => {
    const showButton = !this.props.bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={this.onSearch} />
          {this.props.books.length ? (
            this.props.books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {this.props.bookSelected.length ? (
          <ShoppingCart data={this.props.bookSelected} addItem={this.addItem} removeItem={this.removeItem} />
        ) : null}
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ books: { books, bookSelected, originalData } }) => ({
  books,
  bookSelected,
  originalData
});

App.propTypes = {
  books: PropTypes.arrayOf(bookPropType),
  bookSelected: PropTypes.arrayOf(bookSelectedPropType),
  originalData: PropTypes.arrayOf(bookPropType)
};

export default connect(mapStateToProps)(App);
