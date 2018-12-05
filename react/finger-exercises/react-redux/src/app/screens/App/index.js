import React, { Component, Fragment } from 'react';
import store from '@redux/store';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import actions from '@redux/book/actions';

import Book from './components/Book';
import Search from './components/Search';
import ShoppingCart from './components/ShoppingCart';
import styles from './styles.scss';

class App extends Component {
  state = {
    books: [],
    bookSelected: [],
    originalData: []
  };

  componentDidMount() {
    store.subscribe(() => {
      const { books, bookSelected, originalData } = store.getState();
      this.setState({ books, bookSelected, originalData });
    });
    store.dispatch(actions.getBooks())
    // TODO to implement the dispatch
  }

  // TODO to implement the dispatch
  onSearch = value => {
    let { originalData: books } = this.state; 
    books = books.filter(book => book.name.includes(value))
    store.dispatch(actions.searchBook(books));
  };

  // TODO to implement the dispatch
  addToCart = item => {
    const [...cart] = this.state.bookSelected;
    cart.push(item);
    store.dispatch(actions.addToCart(cart))
  };

  // TODO to implement the dispatch
  addItem = itemId => {};

  // TODO to implement the dispatch
  removeItem = itemId => {
    let [...cart] = this.state.bookSelected;
    cart = cart.filter(book =>book.id !== itemId)
    store.dispatch(actions.removeItem(cart))
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
    const showButton = !this.state.bookSelected.some(el => el.id === item.id);
    const configButton = showButton ? this.CONFIGURATION_BUTTON.add : this.CONFIGURATION_BUTTON.remove;
    return <Book key={item.id} data={item} configButton={configButton} />;
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className={styles.container}>
          <Search onSearch={this.onSearch} />
          {this.state.books.length ? (
            this.state.books.map(this.renderBooks)
          ) : (
            <div className={styles.noData}>
              <h2 className={styles.title}>No Data</h2>
            </div>
          )}
        </div>
        {this.state.bookSelected.length ? (
          <ShoppingCart data={this.state.bookSelected} addItem={this.addItem} removeItem={this.removeItem} />
        ) : null}
        <Footer />
      </Fragment>
    );
  }
}

export default App;
