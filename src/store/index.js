import Vuex from 'vuex'
import token from './modules/token'
import user from './modules/user'
import configuration from './modules/configuration'
import getters from './getters'

export default function (Vue, { appOptions }) {
    Vue.use(Vuex)
    appOptions.store = new Vuex.Store({
        modules: {
            token,
            user,
            configuration
        },
        getters
    })
    

}
