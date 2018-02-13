import { createMutations } from '../src/index.js'

describe('createMutations', () => {
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
    beforeEach(() => {
      schema.properties.property.type = 'string'
    })
    describe('set function', () => {
      test('should be created', () => {
        var mutations = createMutations(schema)
        expect(mutations.hasOwnProperty('setProperty')).toEqual(true)
      })
      test('should set initial value', () => {
        var mutations = createMutations(schema)
        var state = {}
        const newVal = 'new value'
        mutations.setProperty(state, newVal)
        expect(state.property).toEqual(newVal)
      })
      test('should replace value', () => {
        var mutations = createMutations(schema)
        var state = { property: 'old value' }
        const newVal = 'new value 2'
        mutations.setProperty(state, newVal)
        expect(state.property).toEqual(newVal)
      })
    })
    describe('reset function', () => {
      test('should be created', () => {
        var mutations = createMutations(schema)
        expect(mutations.hasOwnProperty('resetProperty')).toEqual(true)
      })
      test('should set to empty if no default', () => {
        var mutations = createMutations(schema)
        var state = { property: 'old value' }
        mutations.resetProperty(state)
        expect(state.property).toEqual('')
      })
      test('should set to default if present', () => {
        const defaultValue = 'default value'
        schema.properties.property.default = defaultValue
        var mutations = createMutations(schema)
        var state = { property: 'old value' }
        mutations.resetProperty(state)
        expect(state.property).toEqual(defaultValue)
      })
    })
  })
  describe('integer', () => {
    beforeEach(() => {
      schema.properties.property.type = 'integer'
    })
    describe('set function', () => {
      test('should be created', () => {
        var mutations = createMutations(schema)
        expect(mutations.hasOwnProperty('setProperty')).toEqual(true)
      })
      test('should set initial value', () => {
        var mutations = createMutations(schema)
        var state = {}
        const newVal = 42
        mutations.setProperty(state, newVal)
        expect(state.property).toEqual(newVal)
      })
      test('should replace value', () => {
        var mutations = createMutations(schema)
        var state = { property: 42 }
        const newVal = 54
        mutations.setProperty(state, newVal)
        expect(state.property).toEqual(newVal)
      })
    })
    describe('reset function', () => {
      test('should be created', () => {
        var mutations = createMutations(schema)
        expect(mutations.hasOwnProperty('resetProperty')).toEqual(true)
      })
      test('should set to undefined if no default', () => {
        var mutations = createMutations(schema)
        var state = { property: 34 }
        mutations.resetProperty(state)
        expect(state.property).toEqual(undefined)
      })
      test('should set to default if present', () => {
        const defaultValue = 42
        schema.properties.property.default = defaultValue
        var mutations = createMutations(schema)
        var state = { property: 42 }
        mutations.resetProperty(state)
        expect(state.property).toEqual(defaultValue)
      })
    })
    describe('increment function', () => {
      test('should be created', () => {
        var mutations = createMutations(schema)
        expect(mutations.hasOwnProperty('incrementProperty')).toEqual(true)
      })
      test('should increment value', () => {
        var mutations = createMutations(schema)
        var state = { property: 34 }
        mutations.incrementProperty(state)
        expect(state.property).toEqual(35)
      })
      test('should increment value to 1 if undefined', () => {
        var mutations = createMutations(schema)
        var state = {}
        mutations.incrementProperty(state)
        expect(state.property).toEqual(1)
      })
    })
    describe('decrement function', () => {
      test('should be created', () => {
        var mutations = createMutations(schema)
        expect(mutations.hasOwnProperty('decrementProperty')).toEqual(true)
      })
      test('should decrement value', () => {
        var mutations = createMutations(schema)
        var state = { property: 3194 }
        mutations.decrementProperty(state)
        expect(state.property).toEqual(3193)
      })
      test('should decrement value to -1 if undefined', () => {
        var mutations = createMutations(schema)
        var state = {}
        mutations.decrementProperty(state)
        expect(state.property).toEqual(-1)
      })
    })
  })
  describe('boolean', () => {
    beforeEach(() => {
      schema.properties.property.type = 'boolean'
    })
    describe('set function', () => {
      test('should be created', () => {
        var mutations = createMutations(schema)
        expect(mutations.hasOwnProperty('setProperty')).toEqual(true)
      })
      test('should set initial value', () => {
        var mutations = createMutations(schema)
        var state = {}
        const newVal = true
        mutations.setProperty(state, newVal)
        expect(state.property).toEqual(newVal)
      })
      test('should replace value', () => {
        var mutations = createMutations(schema)
        var state = { property: true }
        const newVal = false
        mutations.setProperty(state, newVal)
        expect(state.property).toEqual(newVal)
      })
    })
    describe('reset function', () => {
      test('should be created', () => {
        var mutations = createMutations(schema)
        expect(mutations.hasOwnProperty('resetProperty')).toEqual(true)
      })
      test('should set to empty if no default', () => {
        var mutations = createMutations(schema)
        var state = { property: true }
        mutations.resetProperty(state)
        expect(state.property).toEqual(undefined)
      })
      test('should set to default if present', () => {
        const defaultValue = true
        schema.properties.property.default = defaultValue
        var mutations = createMutations(schema)
        var state = { property: false }
        mutations.resetProperty(state)
        expect(state.property).toEqual(defaultValue)
      })
    })
    describe('toggle function', () => {
      test('should be created', () => {
        var mutations = createMutations(schema)
        expect(mutations.hasOwnProperty('toggleProperty')).toEqual(true)
      })
      test('should toggle true to false', () => {
        var mutations = createMutations(schema)
        var state = { property: true }
        mutations.toggleProperty(state)
        expect(state.property).toEqual(false)
      })
      test('should toggle false to true', () => {
        var mutations = createMutations(schema)
        var state = { property: false }
        mutations.toggleProperty(state)
        expect(state.property).toEqual(true)
      })
    })
  })
})
