class Magazine{
    constructor(title, dop, publisher, issue){
        this.title=title
        this.dop= dop
        this.publisher = publisher
        this.issue = issue
    }

    toString(this) {                                     //non serve scrivere function dentro la classe
        const card = 'Titolo: ' + this.title + '\n'
                    'Data di pubblicazione: ' + this.dop + '\n'
                    'Casa editrice: ' + this.publisher + '\n'
                    'Numero uscita' + this.issue + '\n'
        return card 
    }
}
