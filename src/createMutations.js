import { addDefault } from './utils'
const upperFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1)
const mtnName = (string, key) => string + upperFirst(key)

const setFn = (key) => (state, newVal) => { state[key] = newVal }
const resetFn = (key, def) => (state, newVal) => { state[key] = def }
const toggleFn = (key) => (state) => { state[key] = !state[key] }
const incrementFn = (key) => (state) => { var val = state[key] || 0; state[key] = val + 1 }
const decrementFn = (key) => (state) => { var val = state[key] || 0; state[key] = val - 1 }

export default function (schema) {
  const res = {}
  Object.entries(schema.properties).forEach(function (arr) {
    var value = addDefault(arr[1])
    var key = arr[0]
    res[mtnName('set', key)] = setFn(key)
    res[mtnName('reset', key)] = resetFn(key, value.default)
    if (value.type === 'boolean') {
      res[mtnName('toggle', key)] = toggleFn(key)
    }
    if (value.type === 'integer') {
      res[mtnName('increment', key)] = incrementFn(key)
      res[mtnName('decrement', key)] = decrementFn(key)
    }
  })
  return res
}
