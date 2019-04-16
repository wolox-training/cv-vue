<template lang="pug">
  .home-container
    .navbar-container
      .icon-container
        img.wolox-icon-small(src='../assets/wolox_logo.svg' alt='Wolox logo')
        p.icon-title
          | BOOKS
      button.logout(@click='logout()')
        | Logout
    .books-container
      .book(v-for='book of books' :key='book.id')
        img.cover-book(:src='book.image_url' :alt='book.title')
        h4.title-book
          | {{ book.title }}
        span.author-book
          | {{ book.author }}
</template>

<script>
import BookService from '@/services/BookService'
import { removeToken } from '@/services/LocalStorageService'

import routes from '../routes'

export default {
  name: 'navbar',
  props: {
    routes: {
      type: Object,
      default: () => routes
    }
  },
  data () {
    return {
      books: []
    }
  },
  methods: {
    logout () {
      removeToken()
      this.$router.push(routes.login)
    }
  },
  created () {
    BookService.getBooks()
      .then(res => {
        console.log(res)
        this.books = res.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped lang="scss">
@import 'src/scss/colors';
@import 'src/scss/fonts';
@import 'src/scss/commons/images';

.navbar-container {
  align-items: center;
  background-color: $white;
  border-top: 5px solid $cerulean;
  box-shadow: 0 2px 4px 0 $box-shadow-navbar;
  display: flex;
  height: 100%;
  justify-content: space-around;
  max-height: 60px;;
}

.icon-container {
  align-items: center;
  display: flex;
  flex-direction: column;
};

.logout,
.icon-title {
  color: $black;
  font-size: $navbar-icon-title;
  font-weight: bold;
}

.logout {
  cursor: pointer;
  font-size: $navbar-item;
}

.home-container {
  background-color: $wild-sand;
  height: 100%;
  width: 100%;
}

.books-container {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  margin: 40px auto;
  max-width: 1100px;
  widows: 100%;
}

.book {
  background-color: $white;
  box-shadow: 4px 4px 4px $box-shadow-books;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 10px;
  max-height: 235px;
  max-width: 200px;
  padding: 20px;
  width: 100%;
}

.cover-book {
  background-color: $gallery;
  height: 100%;
  margin-bottom: 15px;
  max-width: 160px;
  min-height: 140px;
  width: 100%;
}

.title-book {
  color: $black;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
}

.author-book {
  font-size: 10px;
}
</style>
