import {Rotor} from "../Rotor";
import {Reflector} from "../Reflector";
import {Plugboard} from "../Plugboard";
/**
 * Represents an Enigma machine engine.
 */
export class Engine {
    private rotors: Rotor[];
    private reflector: Reflector;
    private plugboard: Plugboard;
    constructor(rotors:Rotor[], reflector: Reflector, plugboard: Plugboard) {
        this.rotors = rotors;
        this.reflector = reflector;
        this.plugboard = plugboard;
    }

    setRotorPositions(positions: number[] ) {
        this.rotors.forEach((rotor, index) => {
            rotor.setPosition(positions[index]);
        });
    }

    /**
     * Encrypts a letter using the plugboard, rotors, reflector, and plugboard in reverse order.
     *
     * @param {string} letter - The letter to be encrypted.
     * @returns {string} The encrypted letter.
     */
    encrypt(letter: string): string {
        // Pass through plugboard
        letter = this.plugboard.passThrough(letter);

        // Pass through rotors
        this.rotors.forEach(rotor => {
            letter = rotor.forward(letter);
        });

        // Pass through reflector
        letter = this.reflector.reflect(letter);

        // Pass back through rotors in reverse order
        for (let i = this.rotors.length - 1; i >= 0; i--) {
            letter = this.rotors[i].reverse(letter);
        }

        // Pass back through plugboard
        letter = this.plugboard.passThrough(letter);

        return letter;
    }

    /**
     * Rotates the rotors in the enigma machine.
     *
     * This method rotates the rightmost rotor on every keypress. It also checks if the notches are reached and rotates the adjacent rotors accordingly.
     *
     * @memberof Engine
     * @method rotateRotors
     * @returns {void}
     */
    rotateRotors(): void {
        // Rotate the rightmost rotor on every keypress
        this.rotors[this.rotors.length - 1].rotate();

        // Check if notches are reached and rotate adjacent rotors
        for (let i = this.rotors.length - 1; i > 0; i--) {
            if (this.rotors[i].isAtNotch()) {
                this.rotors[i - 1].rotate();
            }
        }
    }

    /**
     * Encrypts the given plaintext using a rotor system.
     *
     * @param {string} plaintext - The plaintext to be encrypted.
     * @returns {string} The encrypted ciphertext.
     */
    execute(plaintext: string): string {
        let ciphertext = "";
        for (const char of plaintext) {
            if (char !== " ") {
                ciphertext += this.encrypt(char);
                this.rotateRotors();
            } else {
                ciphertext += " ";
            }
        }
        return ciphertext;
    }
}