/**
 * Represents a rotor in an Enigma machine.
 */
export class Rotor {
    private readonly wiring: string;
    private readonly notch: number;
    private position: number;
    constructor(wiring: string, notch: number) {
        this.wiring = wiring;
        this.notch = notch;
        this.position = 0;
    }

    setPosition(position: number) {
        this.position = position;
    }

    rotate() {
        this.position = (this.position + 1) % 26;
    }

    isAtNotch() {
        return this.position === this.notch;
    }

    forward(letter: string) {
        const offset = (26 + this.position) % 26;
        const charIndex = (letter.charCodeAt(0) - 65 + offset) % 26;
        return this.wiring[charIndex];
    }

    reverse(letter: string) {
        const offset = (26 + this.position) % 26;
        const charIndex = this.wiring.indexOf(letter);
        const reversedIndex = (26 + charIndex - offset) % 26;
        return String.fromCharCode(reversedIndex + 65);
    }
}