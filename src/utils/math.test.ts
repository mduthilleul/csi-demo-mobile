import { Dimensions } from "react-native";
import { applyOnEachNumber, increment } from "./math";
import { withLayoutContext } from "expo-router";

describe("math", () => {

    describe("increment", () => {

        test("increment a positive number", () => {
            const result = increment(42);
            expect(result).toEqual(43);
        })

        test("increment a negative number", () => {
            const result = increment(-42);
            expect(result).toEqual(-41);
        })

        test("increment null", () => {
            const result = increment(null);
            expect(result).toEqual(1);
        })
    })

    describe("applyOnEachNumber", () => {
        test("applyOnEachNumber", () => {
            const fn = jest.fn();
            fn.mockImplementation(increment);

            const result = applyOnEachNumber([1, 2, 3], fn);
            expect(result).toEqual([2, 3, 4]);
            expect(fn).toHaveBeenCalledTimes(3);
        })
    })


})