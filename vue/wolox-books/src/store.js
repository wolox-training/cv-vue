import Vue from 'vue'
import Vuex from 'vuex'

import BookService from '@/services/BookService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: []
  },
  mutations: {
    setBooks (state, payload) {
      state.books = payload
    }
  },
  actions: {
    getBooks ({ commit }) {
      BookService.getBooks()
        .then(res =>
          commit('setBooks', res.data)
        )
    }
  }
})
