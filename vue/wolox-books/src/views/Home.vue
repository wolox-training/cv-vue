<template lang="pug">
  .home-container(:style='pageColor')
    .navbar-container(:style='navbarColor')
      .icon-container
        img.wolox-icon-small(src='../assets/wolox_logo.svg' alt='Wolox logo')
        p.icon-title
          | {{ $t('app.title') }}
      button.logout(@click='logout()')
        | {{ $t('app.logout') }}
    .books-container
      router-link.book(
        v-for='book of books'
        :to='{ path: `${routes.book}/${book.id}`}'
        :key='book.id'
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

export default {
  name: 'navbar',
  store,
  props: {
    routes: {
      type: Object,
      default: () => routes
    },
    bgColor: {
      type: String,
      default: '#DDD'
    },
    bgHeaderColor: {
      type: String,
      default: '#FFF'
    },
    HeaderTopLine: {
      type: String,
      default: '#A6CB46'
    }
  },
  computed: {
    ...mapState({
      books: state => state.books
    }),
    pageColor () {
      return {
        '--page-color': this.bgColor
      }
    },
    navbarColor () {
      return {
        '--header-bg': this.bgHeaderColor,
        '--header-top-line': this.HeaderTopLine
      }
    }
  },
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
  background-color: var(--page-color, $wild-sand);
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
