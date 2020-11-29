import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export default {
  namespaced: true,
  state: {
    value : 1,
    loading:true,
    data:[]
  },
  getters,
  mutations,
  actions
}
