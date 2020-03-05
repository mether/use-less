// tslint:disable:no-expression-statement
import test from 'ava';
import { useCalculator } from './useCalculator';

test('useCalculator', t => {
  t.is(useCalculator(1, '+', 1), 2);

  t.is(useCalculator(1, '-', 1), 0);

  t.is(useCalculator(5, '*', 2), 10);

  t.is(useCalculator(10, '/', 2), 5);
});

