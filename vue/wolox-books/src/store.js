import Vue from 'vue'
import Vuex from 'vuex'

import BookService from '@/services/BookService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    selectedBook: {}
  },
  mutations: {
    setBooks (state, payload) {
      state.books = payload
    },
    setSelectedBook (state, payload) {
      state.selectedBook = payload
    }
  },
  actions: {
    getBooks ({ commit }) {
      BookService.getBooks()
        .then(res =>
          commit('setBooks', res.data)
        )
    },
    getBookById ({ commit }, id) {
      BookService.getBookByID(id).then(res =>
        commit('setSelectedBook', res.data)
      )
    }
  }
})
