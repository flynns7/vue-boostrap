// function timeout(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
export default {
    addValue(state){
        return state.value++
    },
    subtractValue(state){
        return state.value--
    },
    setData(state,data){
        state.data = data
        state.loading = false
    }
}
