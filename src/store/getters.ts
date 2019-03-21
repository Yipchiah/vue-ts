// eslint-disable-next-line no-unused-vars
import state from './state'
// eslint-disable-next-line no-unused-vars
import { RootStateTypes } from './types'
// eslint-disable-next-line no-unused-vars
import { GetterTree } from 'vuex'

const getters: GetterTree<RootStateTypes, any> = {
  author: (state: RootStateTypes) => state.author
}

export default getters
