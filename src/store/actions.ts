// import state from './state'
// eslint-disable-next-line no-unused-vars
import { RootStateTypes } from './types'
// eslint-disable-next-line no-unused-vars
import { ActionTree } from 'vuex'

const actions: ActionTree<RootStateTypes, any> = {
  SET_AUTHOR_ASYN ({ commit, state: RootStateTypes }, data: string) {
    commit('SET_AUTHOR', data)
  }
}

export default actions
