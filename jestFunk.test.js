const jestFunk = require('./jestFunk');
describe('Тестим input', () => {
    it('testing correct input', () => {
        expect(jestFunk('abc', 3)).toBe('abc1, abc2, abc3');
    });
    it('testing invalid input word', () => {
        expect(jestFunk('abc1', 3)).toBe('Введенное слово содердит цифры')
    });
    it('testing invalid input num', () => {
        expect(jestFunk('abc', '3f')).toBe('Введенное количество повторений не является целым числом')
    });
    it('testing empty input1', () => {
        expect(jestFunk('', '3')).toBe('Введены пустые значения')
    });
    it('testing empty input2', () => {
        expect(jestFunk('abc', '')).toBe('Введены пустые значения')
    });
});