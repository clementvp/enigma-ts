import {describe, test, expect} from 'vitest'
import {Plugboard} from "./index";

describe('Plugboard', () => {
    test('forwards a letter', () => {
        const plugboardMapping = { 'A': 'M', 'B': 'F', 'C': 'L', 'D': 'P', 'Q': 'Z' };
        const plugboard = new Plugboard(plugboardMapping);
        expect(plugboard.passThrough('A')).toBe('M');
        expect(plugboard.passThrough('B')).toBe('F');
        expect(plugboard.passThrough('C')).toBe('L');
        expect(plugboard.passThrough('D')).toBe('P');
        expect(plugboard.passThrough('Q')).toBe('Z');
        expect(plugboard.passThrough('M')).toBe('A');
        expect(plugboard.passThrough('F')).toBe('B');
        expect(plugboard.passThrough('L')).toBe('C');
        expect(plugboard.passThrough('P')).toBe('D');
        expect(plugboard.passThrough('Z')).toBe('Q');
        expect(plugboard.passThrough('E')).toBe('E');
        expect(plugboard.passThrough('K')).toBe('K');
    })

})