import {Rotor} from "./Rotor";
import {Reflector} from "./Reflector";
import {Plugboard} from "./Plugboard";
import {Engine} from "./Engine";

const rotorI = new Rotor("EKMFLGDQVZNTOWYHXUSPAIBRCJ", 17);
const rotorII = new Rotor("AJDKSIRUXBLHWTMCQGZNPYFVOE", 5);
const rotorIII = new Rotor("BDFHJLCPRTXVZNYEIWGAKMUSQO", 22);

const reflectorB = new Reflector("YRUHQSLDPXNGOKMIEBFZCWVJAT");

const plugboardMapping: {[key:string]:string} = { 'A': 'M', 'B': 'F', 'C': 'L', 'D': 'P', 'Q': 'Z' };
const plugboard = new Plugboard(plugboardMapping);

const rotors = [rotorI, rotorII, rotorIII];



const enigma = new Engine(rotors, reflectorB, plugboard);
enigma.setRotorPositions([3, 12, 17]);
const result = enigma.execute("MTAQBOA EOI ECGZRA");
console.log(result)