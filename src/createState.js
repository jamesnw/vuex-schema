import { addDefault } from './utils'
export default function (schema) {
  const res = {}
  Object.entries(schema.properties).forEach(function (arr) {
    var value = addDefault(arr[1])
    var key = arr[0]
    res[key] = value.default
  })
  return res
}
