import { createStore } from 'vuex'
import {
  getQuestions,
  insertResults,
  insertQuestion,
  login,
  logout,
} from '@/api/firebase'

const state = () => ({
  username: null,
  questions: [],
  currentQuestionId: 0,
  results: [],
  resultsPosted: false,
  isAdminLoggedIn: false,
})

const mutations = {
  setUsername(state, username) {
    state.username = username
  },
  setQuestions(state, questions) {
    state.questions = questions
  },
  setCurrentQuestionId(state, questionId) {
    state.currentQuestionId = questionId
  },
  setResults(state, results) {
    state.results = results
  },
  setResult(state, result) {
    state.results.push(result)
  },
  setResultsPosted(state, bool) {
    state.resultsPosted = bool
  },
  setAdminLogged(state, bool) {
    state.isAdminLoggedIn = bool
  },
}

const actions = {
  fetchQuestions({ commit }) {
    return getQuestions().then((questions) => commit('setQuestions', questions))
  },
  postResults({ commit, state }, payload) {
    return insertResults(payload, state.username).then(() =>
      commit('setResultsPosted', true)
    )
  },
  addQuestion({ commit }, { text, green, red, tooltip, bias, number }) {
    return insertQuestion(text, green, red, tooltip, bias, number)
  },
  loginAdmin({ commit }, { email, password }) {
    return login(email, password).then((res) => {
      if (!res) {
        commit('setAdminLogged', false)
      } else {
        commit('setAdminLogged', true)
      }
    })
  },
  logoutAdmin({ commit }) {
    return logout()
  },
}

const getters = {
  maxQuestionsCount(state) {
    return state.questions.length
  },
}

const store = createStore({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations,
})

export default store
