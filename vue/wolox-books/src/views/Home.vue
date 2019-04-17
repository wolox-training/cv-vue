<template lang="pug">
  .home-container
    .navbar-container
      .icon-container
        img.wolox-icon-small(src='../assets/wolox_logo.svg' alt='Wolox logo')
        p.icon-title
          | {{ labels.title }}
      button.logout(@click='logout()')
        | {{ labels.logout }}
    .books-container
      router-link(
        v-for='book of books'
        :to='{ path: `${routes.book}/${book.id}`}'
        :key='book.id'
        class='book'
      )
        img.book-cover(:src='book.image_url' :alt='book.title')
        h4.book-title
          | {{ book.title }}
        span.book-author
          | {{ book.author }}
</template>

<script>
import { mapState } from 'vuex'
import { removeToken } from '@/services/LocalStorageService'
import store from '@/store'
import routes from '@/routes'

import { labels } from './constants'

export default {
  name: 'navbar',
  store,
  props: {
    routes: {
      type: Object,
      default: () => routes
    },
    labels: {
      type: Object,
      default: () => labels
    }
  },
  computed: mapState({
    books: state => state.books
  }),
  methods: {
    logout () {
      removeToken()
      this.$router.push(routes.login)
    }
  },
  created () {
    this.$store.dispatch('getBooks')
  }
}
</script>

<style scoped lang="scss">
@import 'src/scss/colors';
@import 'src/scss/commons/images';
@import 'src/scss/commons/book';
@import 'src/scss/commons/navbar';

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
</style>
