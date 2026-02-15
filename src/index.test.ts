import type { ComplexFunction } from './index.js'
import { round } from 'mathjs'
import { describe, expect, it } from 'vitest'
import { complex, computeComplexIntegral } from './index.js'

describe('computeComplexIntegral', () => {
  const complexFunction: ComplexFunction = t => complex(Math.cos(t), Math.sin(t))

  it('computes the integral of a complex function between 0 and 1', () => {
    const result = computeComplexIntegral({ complexFunction })

    expect(round(result, 5)).toEqual(complex(0.84147, 0.4597))
  })

  it('increment can be adjusted', () => {
    const result = computeComplexIntegral({ complexFunction, increment: 1e-1 })

    expect(round(result, 5)).toEqual(complex(0.84182, 0.45989))
  })
})
