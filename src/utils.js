export function addDefault (property) {
  if (property.hasOwnProperty('default')) return property
  else {
    if (property.type === 'string') property.default = ''
    else if (property.type === 'integer') property.default = undefined
    else if (property.type === 'number') property.default = undefined
    else if (property.type === 'boolean') property.default = undefined
    else if (property.type === 'array') property.default = []
    else if (property.type === 'object') property.default = {}
    return property
  }
}
