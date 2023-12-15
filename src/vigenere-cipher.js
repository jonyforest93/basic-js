const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(type) {
        this.type = type;
        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    transformText(text, key, operation) {
        if (key.length < text.length) {
            key = key.padEnd(text.length, key);
        } 

        text = text.toUpperCase();
        key = key.toUpperCase();

        let index = 0;
        let transformedText = "";

        for (let i = 0; i < text.length; i += 1) {
            const char = text[i];
            if (this.alphabet.includes(text[i])) {
                const charInKey = key[index];
                const step = this.alphabet.indexOf(charInKey);
                const charIndex = this.alphabet.indexOf(char);
                const shift = operation * step;
                const shiftedIndex =
                    (charIndex + shift + this.alphabet.length) %
                    this.alphabet.length;
                const transformedChar = this.alphabet[shiftedIndex];

                transformedText += transformedChar;
                index += 1;
            } else {
                transformedText += char;
            }
        }
        if (this.type === false) {
            transformedText = transformedText.split("").reverse().join("");
        }
        return transformedText;
    }
    encrypt(string, key) {
        if (!string || !key) {
            throw new Error("Incorrect arguments!");
        }
        return this.transformText(string, key, 1);
    }
    decrypt(string, key) {
        if (!string || !key) {
            throw new Error("Incorrect arguments!");
        }
        return this.transformText(string, key, -1);
    }
}

module.exports = {
    VigenereCipheringMachine,
};
