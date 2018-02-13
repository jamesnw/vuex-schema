import { createState } from '../src/index.js'

describe('createState', () => {
  let schema
  beforeEach(() => {
    schema = {
      'title': 'Person',
      'type': 'object',
      'properties': {
        'property': {
        }
      }
    }
  })
  describe('string', () => {
    test('should have empty string for no default', () => {
      schema.properties.property.type = 'string'
      var state = createState(schema)
      expect(state.property).toEqual('')
    })
    test('should set default', () => {
      schema.properties.property.type = 'string'
      const defaultValue = 'default value'
      schema.properties.property.default = defaultValue
      var state = createState(schema)
      expect(state.property).toEqual(defaultValue)
    })
  })
  describe('integer', () => {
    test('should have undefined for no default', () => {
      schema.properties.property.type = 'integer'
      var state = createState(schema)
      expect(state.property).toEqual(undefined)
    })
    test('should set default', () => {
      schema.properties.property.type = 'integer'
      const defaultValue = 100
      schema.properties.property.default = defaultValue
      var state = createState(schema)
      expect(state.property).toEqual(defaultValue)
    })
  })
  describe('number', () => {
    test('should have undefined for no default', () => {
      schema.properties.property.type = 'number'
      var state = createState(schema)
      expect(state.property).toEqual(undefined)
    })
    test('should set default', () => {
      schema.properties.property.type = 'number'
      const defaultValue = 100.1
      schema.properties.property.default = defaultValue
      var state = createState(schema)
      expect(state.property).toEqual(defaultValue)
    })
  })
  describe('boolean', () => {
    test('should have undefined for no default', () => {
      schema.properties.property.type = 'boolean'
      var state = createState(schema)
      expect(state.property).toEqual(undefined)
    })
    test('should set default', () => {
      schema.properties.property.type = 'boolean'
      const defaultValue = true
      schema.properties.property.default = defaultValue
      var state = createState(schema)
      expect(state.property).toBe(defaultValue)
    })
  })
  describe('array', () => {
    test('should have [] for no default', () => {
      schema.properties.property.type = 'array'
      var state = createState(schema)
      expect(state.property).toEqual([])
    })
    test('should set default', () => {
      schema.properties.property.type = 'array'
      const defaultValue = [1]
      schema.properties.property.default = defaultValue
      var state = createState(schema)
      expect(state.property).toEqual(defaultValue)
    })
  })
  describe('object', () => {
    test('should have {} for no default', () => {
      schema.properties.property.type = 'object'
      var state = createState(schema)
      expect(state.property).toEqual({})
    })
    test('should set default', () => {
      schema.properties.property.type = 'object'
      const defaultValue = { 'foo': 'bar' }
      schema.properties.property.default = defaultValue
      var state = createState(schema)
      expect(state.property).toBe(defaultValue)
    })
  })
})
