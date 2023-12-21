import {describe, test, expect} from 'vitest'
import {Plugboard} from "./index";

describe('Plugboard', () => {
    test('forwards a letter', () => {
        const plugboardMapping = { 'A': 'M', 'B': 'F', 'C': 'L', 'D': 'P', 'Q': 'Z' };
        const plugboard = new Plugboard(plugboardMapping);
        expect(plugboard.execute('A')).toBe('M');
        expect(plugboard.execute('B')).toBe('F');
        expect(plugboard.execute('C')).toBe('L');
        expect(plugboard.execute('D')).toBe('P');
        expect(plugboard.execute('Q')).toBe('Z');
        expect(plugboard.execute('M')).toBe('A');
        expect(plugboard.execute('F')).toBe('B');
        expect(plugboard.execute('L')).toBe('C');
        expect(plugboard.execute('P')).toBe('D');
        expect(plugboard.execute('Z')).toBe('Q');
        expect(plugboard.execute('E')).toBe('E');
        expect(plugboard.execute('K')).toBe('K');
    })

})