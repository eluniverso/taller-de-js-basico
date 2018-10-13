var hola = ''
class EuNews {

    constructor(){
        this.news = []
    }

    getNews(){
        return this.news;
    }

    addNews(nota){        
        for(var i=0;i<this.news.length;i++){
            if(this.news[i].slug == nota.slug){
               return
            }  
        }
        this.news.push(nota);
    }

    findNews(slug){
        
        for (var i=0; i< this.news.length; i++) 
        {
            if(this.news[i].slug == slug)
            {
                return this.news[i];
            }
        }

        return {};
    }

}


module.exports = EuNews;