import {describe, test, expect} from 'vitest'
import {Reflector} from './index'
describe('Reflector', () => {
    test('reflects a letter', () => {
        const reflector = new Reflector('YRUHQSLDPXNGOKMIEBFZCWVJAT');
        expect(reflector.reflect('A')).toBe('Y');
        expect(reflector.reflect('Y')).toBe('A');
        expect(reflector.reflect('B')).toBe('R');
        expect(reflector.reflect('R')).toBe('B');
        expect(reflector.reflect('C')).toBe('U');
        expect(reflector.reflect('U')).toBe('C');
    })
})