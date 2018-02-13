import {createMutations, createState} from '../src/index'
const schema = {
  'title': 'Person',
  'type': 'object',
  'properties': {
    'firstName': {
      'type': 'string'
    },
    'lastName': {
      'type': 'string',
      'default': 'Chan'
    },
    'age': {
      'type': 'integer'
    },
    'activeUser': {
      'type': 'boolean'
    }
  }
}

const state = function () {
  return createState(schema)
}
// Output:
// state: {
//  firstName: '',
//  lastName: 'Chan',
//  age: undefined,
//  activeUser: undefined
// }

const getters = {}
const actions = {}

const mutations = createMutations(schema)
// Output:
// mutations: {
//  setFirstName: fn(),
//  resetFirstName: fn(),
//  setLastName: fn(),
//  resetLastName: fn(),
//  setAge: fn(),
//  resetAge: fn(),
//  incrementAge: fn(),
//  decrementAge: fn(),
//  setActiveUser: fn(),
//  resetActiveUser: fn(),
//  toggleActiveUser: fn()
// }

export default {
  state,
  getters,
  actions,
  mutations
}
