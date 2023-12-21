export class Reflector {
    private readonly mapping: string;
    constructor(mapping:string) {
        this.mapping = mapping;
    }

    reflect(letter:string) {
        const charIndex = letter.charCodeAt(0) - 65;
        return this.mapping[charIndex];
    }
}