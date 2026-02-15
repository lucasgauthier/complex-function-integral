import type { Complex } from 'mathjs'

import assert from 'node:assert'
import { add, complex, multiply } from 'mathjs'

export type ComplexFunction = (t: number) => Complex
 
const INCREMENT = 1e-3

/**
 * Computes the integral of a complex-valued function `f(t)` on `[0, 1]` using:
 * - a midpoint Riemann sum for improved accuracy over left/right Riemann sums, and
 * - a default step size `increment = 1e-3` (smaller values increase accuracy at cost of CPU).
 *
 * @param params - params object
 * @param params.complexFunction - Complex-valued function `f(t)` defined on `[0, 1]`
 * @param params.increment - Step size (`> 0`), with default value `1e-3`
 *
 * @returns A `Complex` approximate integral over `[0, 1]`
 *
 * @throws `increment` must be greater than `0`
 *
 * @example
 * import type { ComplexFunction } from 'complex-function-integral'
 * import { complex, computeComplexIntegral } from 'complex-function-integral'
 *
 * const complexFunction: ComplexFunction = t => complex(Math.cos(t), Math.sin(t))
 * computeComplexIntegral({ complexFunction, increment: 1e-4 })
 */
export function computeComplexIntegral({
  complexFunction,
  increment = INCREMENT,
}: {
  complexFunction: ComplexFunction
  increment?: number
}): Complex {
  assert(increment > 0, 'increment must be greater than 0')

  let result = complex()
  for (let t = increment / 2; t < 1; t += increment) {
    result = add(result, multiply(complexFunction(t), increment) as Complex)
  }

  return result
}

export type { Complex }
export { complex }
