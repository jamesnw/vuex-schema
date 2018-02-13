# Vuex schema

Vuex helpers based on a JSON schema template

## Helpers

### createState

Input: valid JSON Schema object
Output: valid initial state for Vuex, using default or type-appropriate defaults

### createMutations

Input: valid JSON Schema object
Output: mutations for type-appropriate mutations

All types support the following mutations:

* `setKey`
* `resetKey` - resets to default value

In addition, some types support additional mutatations.

#### Integer

* `incrementKey` - existing value + 1 (or 1 if original value was undefined)
* `decrementKey` - existing value - 1 (or -1 if original value was undefined)

#### Boolean

* `toggleKey` - toggles true/false

More mutations coming.

## Tests

Run `npm run test` to run the test suite.
