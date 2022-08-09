class Vinhos {
    constructor(nome,tipo,ml){
        this.nome = nome;
        this.tipo = tipo;
        this.ml = ml;
    }
    getNome() {
    return this.nome;
}

    getTipo() {
        return this.tipo;
    }

    getMl() {
        return this.ml;
    }

} 


class Carro {
    constructor(cor,marca,preco){
        this.cor = cor;
        this.marca = marca;
        this.preco = preco;
    }
    getCor() {
    return this.cor;
}

    getMarca() {
        return this.marca;
    }

    getPreco() {
        return this.preco;
    }

    setPreco(novoPreco){
        this.preco = novoPreco
    }
} 

class Youtube {
    constructor(login,senha,visualizacoes){
        this.login = login;
        this.senha = senha;
        this.visualizacoes = visualizacoes; 
    }
    getLogin() {
        return this.login;
    }
    
    getSenha() {
        return this.senha;
    }

    getVisualizacoes() {
        return this.visualizacoes;
    }
}

class Twitter {
    constructor(login,senha,curtidas){
        this.login = login;
        this.senha = senha;
        this.curtidas = curtidas; 
    }
    getLogin() {
        return this.login;
    }
    
    getSenha() {
        return this.senha;
    }

    getCurtidas() {
        return this.curtidas;
    }

    setCurtidas(novasCurtidas) {
        this.curtidas = novasCurtidas;
    }
}

