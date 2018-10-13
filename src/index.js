var hola = ''
class EuNews {

    constructor(){
        this.news = []
    }

    getNews(){
        return this.news;
    }

    addNews(nota){
        this.news.push(nota);
    }

}


module.exports = EuNews;