export class WordProvider{

    words = ['PROCASTINAR', 'COLCHON', 'COMPUTADOR', 'CELUWEB', 'CUMPLIMIENTO'];

    constructor(){}

    getNewWord(){
        var pos = Math.floor(Math.random() * Math.floor(this.words.length));
        return this.words[pos];
    }
}