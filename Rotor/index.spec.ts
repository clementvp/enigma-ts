import {describe, test, expect} from 'vitest'
import {Rotor} from "./index";
describe('Rotor', () => {
    const rotor = new Rotor('EKMFLGDQVZNTOWYHXUSPAIBRCJ', 16);
    test('setPosition', () => {
        rotor.setPosition(10);
        expect(rotor['position']).toBe(10);
    });
    test('rotate', () => {
        rotor.setPosition(0);
        rotor.rotate();
        expect(rotor['position']).toBe(1);
        rotor.rotate();
        expect(rotor['position']).toBe(2);
    });
    test('isAtNotch', () => {
        rotor.setPosition(16);
        expect(rotor.isAtNotch()).toBe(true);
        rotor.setPosition(0);
        expect(rotor.isAtNotch()).toBe(false);
    });
    test ('forward', () => {
        rotor.setPosition(0);
        expect(rotor.forward('A')).toBe('E');
        expect(rotor.forward('Z')).toBe('J');
    });
    test ('reverse', () => {
        rotor.setPosition(0);
        expect(rotor.reverse('E')).toBe('A');
        expect(rotor.reverse('J')).toBe('Z');
    });
})