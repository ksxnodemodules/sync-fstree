'use strict'
class AssertionError extends Error {}

function setStrictEqual (left = new Set(), right = new Set(), reason = '(none)') {
  left = new Set(left)
  right = new Set(right)
  if (left.size !== right.size) {
    throw new AssertionError(`Reason: ${reason}\nCause: Size inequal (${left.size} != ${right.size})`)
  }
  for (const x of left) {
    if (!right.has(x)) {
      throw new AssertionError(`Reason: ${reason}\nCause: Right operand does not contain ${typeof x} ${x}`)
    }
  }
}

module.exports = {AssertionError, setStrictEqual}
