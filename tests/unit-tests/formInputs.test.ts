import { add } from '../../services/formInputs-services';

test('string with a single number should result in the number itself', () => {
    expect(add('1')).toBe(1);
});

test('string with two numbers separated by comma should result in the sum of the numbers', () => {
    expect(add('4,5')).toBe(9);
});

test('string with three numbers separated by comma should result in the sum of the numbers', () => {
    expect(add('2,8,4')).toBe(14);
});

test('string with four numbers separated by comma should result in the sum of the numbers', () => {
    expect(add('2,0,4,5')).toBe(11);
});
