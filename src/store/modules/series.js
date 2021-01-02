/* eslint-disable no-shadow */
import seriesAPI from '@/api/seriesAPI';

const state = {
  onAir: [],
  popular: [],
  topRated: [],
  nowAiring: [],
  series: {},
};

const getters = {
  onAirSeries(state) {
    return state.onAir;
  },
  popularSeries(state) {
    return state.popular;
  },
  topRatedSeries(state) {
    return state.topRated;
  },
  nowAiringSeries(state) {
    return state.nowAiring;
  },
  singleSeries(state) {
    return state.series;
  },
};

const mutations = {
  SET_ON_AIR_SERIES(state, series) {
    state.onAir = series;
  },
  SET_POPULAR_SERIES(state, series) {
    state.popular = series;
  },
  SET_TOP_RATED_SERIES(state, series) {
    state.topRated = series;
  },
  SET_SINGLE_SERIES(state, series) {
    state.series = series;
  },
};

const actions = {
  async fetchOnAirSeries({ commit }, pageNum = 1) {
    try {
      const results = await seriesAPI.getOnAirSeries(pageNum);
      const { series } = results.data;
      commit('SET_ON_AIR_SERIES', series);
    } catch (err) {
      console.error(err);
    }
  },
  async fetchPopularSeries({ commit }, pageNum = 1) {
    try {
      const results = await seriesAPI.getPopularSeries(pageNum);
      const { series } = results.data;
      commit('SET_POPULAR_SERIES', series);
    } catch (err) {
      console.error(err);
    }
  },
  async fetchTopRatedSeries({ commit }, pageNum = 1) {
    try {
      const results = await seriesAPI.getTopRatedSeries(pageNum);
      const { series } = results.data;
      commit('SET_TOP_RATED_SERIES', series);
    } catch (err) {
      console.error(err);
    }
  },
  async fetchSingleSeries({ commit }, seriesId) {
    try {
      const result = await seriesAPI.getSingleSeries(seriesId);
      const { series } = result.data;
      commit('SET_SINGLE_SERIES', series);
    } catch (err) {
      console.error(err);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
