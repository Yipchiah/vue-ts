// eslint-disable-next-line no-unused-vars
import state from './state'
// eslint-disable-next-line no-unused-vars
import { RootStateTypes } from './types'
// eslint-disable-next-line no-unused-vars
import { MutationTree } from 'vuex'

const mutations: MutationTree<RootStateTypes> = {
  SET_AUTHOR (state: RootStateTypes, data: string) {
    state.author = data
  }
}

export default mutations
