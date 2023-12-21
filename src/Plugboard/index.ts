export class Plugboard {
    private readonly mapping: { [p: string]: string };
    constructor(mapping:{[key:string]:string}) {
        this.mapping = mapping || {};
    }

    private backward(letter :string) {
        for (const key in this.mapping) {
            if (this.mapping[key] === letter) {
                return key;
            }
        }
        return letter;
    }

    execute(letter: string) {
        return this.mapping[letter] || this.backward(letter)  || letter;
    }
}