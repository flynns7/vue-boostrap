import api from '../../plugins/api'

export default {
    addValue({commit}){
        commit('addValue')
    },
    subtractValue({commit}){
        commit('subtractValue')
    },
    async getData({commit, state}){
       state.data = []
       state.loading = true
       const data = await api.get('users?delay=3')
       commit('setData',data.data.data)
    }
    
}
