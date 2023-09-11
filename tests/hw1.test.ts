import { multArray, maxArray, copyGenericTsRecord } from '../hw1';

describe('multArray', () => {
  test('should return 1 for an empty array', () => {
    expect(multArray([])).toBe(1);
  });

  test('should return the single value for an array of one element', () => {
    expect(multArray([7])).toBe(7);
    expect(multArray([0])).toBe(0);
    expect(multArray([-5])).toBe(-5);
  });

  test('should correctly multiply elements for an array of multiple elements', () => {
    expect(multArray([1, 2, 3])).toBe(6);
    expect(multArray([2, 3, 4])).toBe(24);
    expect(multArray([1, 2, 3, 4, 5])).toBe(120);
  });

  test('should return 0 if any element is 0', () => {
    expect(multArray([1, 2, 3, 0, 5])).toBe(0);
    expect(multArray([0])).toBe(0);
  });

  test('should handle negative numbers correctly', () => {
    expect(multArray([-1, 2, 3])).toBe(-6);
    expect(multArray([-1, -2, -3])).toBe(-6);
    expect(multArray([-1, -2, 3])).toBe(6);
    expect(multArray([-1, -2, 3, 10])).toBe(60);
  });
});

describe('maxArray', () => {
  test('should return Number.POSITIVE_INFINITY for an empty array', () => {
    expect(maxArray([])).toBe(Number.POSITIVE_INFINITY);
  });

  test('should return the single value for an array of one element', () => {
    expect(maxArray([7])).toBe(7);
    expect(maxArray([0])).toBe(0);
    expect(maxArray([-5])).toBe(-5);
  });

  test('should return the maximum value for an array of multiple elements', () => {
    expect(maxArray([1, 2, 3, 4, 5])).toBe(5);
    expect(maxArray([5, 4, 3, 2, 1])).toBe(5);
    expect(maxArray([-5, -4, -3, -2, -1])).toBe(-1);
    expect(maxArray([-1, -2, 3, 10])).toBe(10);
  });

  test('should handle array with repeated elements', () => {
    expect(maxArray([5, 5, 5])).toBe(5);
    expect(maxArray([5, 4, 5])).toBe(5);
  });
});

describe('copyGenericTsRecord', () => {
  test('should correctly copy a genericTsRecord with number type', () => {
    const record = {
      myStr: 'test',
      myNum: 123,
      myDict: {
        a: 1,
        b: 2,
      },
    };

    const copiedRecord = copyGenericTsRecord(record);

    expect(copiedRecord).toEqual(record);
    expect(copiedRecord).not.toBe(record); // Ensure they are different references
    expect(copiedRecord.myDict).not.toBe(record.myDict); // Ensure the dictionaries are different references
  });

  test('should correctly copy a genericTsRecord with string type', () => {
    const record = {
      myStr: 'test',
      myNum: 123,
      myDict: {
        a: 'aVal',
        b: 'bVal',
      },
    };

    const copiedRecord = copyGenericTsRecord(record);

    expect(copiedRecord).toEqual(record);
    expect(copiedRecord).not.toBe(record); // Ensure they are different references
    expect(copiedRecord.myDict).not.toBe(record.myDict); // Ensure the dictionaries are different references
  });

  test('should handle an empty dictionary', () => {
    const record = {
      myStr: 'test',
      myNum: 123,
      myDict: {},
    };

    const copiedRecord = copyGenericTsRecord(record);

    expect(copiedRecord).toEqual(record);
    expect(copiedRecord).not.toBe(record); // Ensure they are different references
  });
});
