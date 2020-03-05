/**
 * Calculate two values by the provided operator
 *
 * ### Example (es module)
 * ```js
 * import { useCalculator } from 'use-less'
 * console.log(useCalculator(1, '+', 1))
 * // => 2
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var useCalculator = require('use-less').useCalculator;
 * console.log(useCalculator(1, '+', 1))
 * // => 2
 * ```
 *
 * @param firstNumber     First number in expression
 * @param operator        Operator to evaluate the numbers
 * @param secondNumber    First number in expression
 * @returns number        The evaluated expression
 * @anotherNote   Some other value.
 */
export function useCalculator(firstNumber: number, operator: string, secondNumber: number): number {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber - secondNumber;
    case '/':
      return firstNumber / secondNumber;
    default:
      throw new Error('Invalid operator')
  }
}
