# Complex Function Integral

[`mathjs`](https://mathjs.org) is a powerful library for mathematical operations, including support for complex numbers. Unfortunately, [it does not yet provide a built-in function for computing the integral of a complex function](https://github.com/josdejong/mathjs/discussions/2748).

This library fills that gap by providing a simple interface to compute the integral of a complex function over the interval `[0, 1]`. The integral is computed using a simple midpoint Riemann sum with a default of 1000 subdivisions.

> _**Note:**  It uses the `Complex` type and related utilities exported by `mathjs` for complex number operations_

## Usage

```typescript
import type { ComplexFunction } from 'complex-function-integral'
import { complex, computeComplexIntegral } from 'complex-function-integral'

// Example complex function: f(t) = cos(t) + isin(t) = e^(it)
const complexFunction: ComplexFunction = t => complex(Math.cos(t), Math.sin(t))

computeComplexIntegral({ complexFunction })
```

## Run this project locally

### Prerequisites

To ensure compatibility and reproducibility, this project requires `pnpm` version `10.28.2` or higher.

```json
{
  "engines": {
    "pnpm": ">=10.28.2"
  }
}
```

### Install the dependencies

```bash
pnpm install --frozen-lockfile
```

## Improvements

Potential future improvements to this library include:
- The current implementation uses a simple numerical integration method (midpoint Riemann sum). Future improvements could include other simple implementations (e.g., left and right Riemann sums, trapezoidal rule).
- `computeComplexIntegral` currently does not round the result, which may lead to very small real or imaginary parts due to numerical precision issues. Adding an option to round the result to a specified number of decimal places if desired could be beneficial.
- The library could be extended to support integration over different intervals or even along complex paths in the complex plane.

## Misc

### Supply chain security

To reduce the risk of installing compromised packages, this project enforces a 7-day delay before installing newly published package versions. The policy is configured in `pnpm-workspace.yaml` with:

```yaml
minimumReleaseAge: 10080 # minutes (= 7 days)
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
