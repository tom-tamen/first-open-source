import { average } from '../src/average';

test('average', () => {
    expect(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(5.5);
    expect(typeof average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe('number');
    expect(average([])).toBeNaN();
    expect(() => average("test")).toThrow(TypeError);
    expect(() => average([1, 2, 3, "test"])).toThrow(TypeError);
});
