<template lang="pug">
  .book-container
    .navbar-container
      .icon-container
        img.wolox-icon-small(src='../assets/wolox_logo.svg' alt='Wolox logo')
        p.icon-title
          | {{ labels.title }}
      button.logout(@click='logout()')
        | {{ labels.logout }}
    .detail-container
</template>

<script>
import { removeToken } from '@/services/LocalStorageService'
import store from '@/store'
import routes from '@/routes'

import { labels } from './constants'

export default {
  name: 'details-book',
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
  methods: {
    logout () {
      removeToken()
      this.$router.push(routes.login)
    }
  },
  created () {
    this.$store.dispatch('getBookById')
  }
}
</script>

<style scoped lang="scss">
@import 'src/scss/colors';
@import 'src/scss/commons/images';
@import 'src/scss/commons/book';
@import 'src/scss/commons/navbar';

.book-container {
  background-color: $wild-sand;
  height: 100%;
  width: 100%;
}

.book-detail-container {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  margin: 40px auto;
  max-width: 1100px;
  widows: 100%;
}
</style>
