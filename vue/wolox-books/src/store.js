import Vue from 'vue'
import Vuex from 'vuex'

import BookService from '@/services/BookService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: [],
    seletedBook: {}
  },
  mutations: {
    setBooks (state, payload) {
      state.books = payload
    },
    setSelectedBook (state, payload) {
      state.seletedBook = payload
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
      console.log(id, 'id')
      BookService.getBookByID(id).then(res =>
        commit('setSelectedBook', res.data)
      )
    }
  }
})
