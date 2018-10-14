class EuNews {
  constructor(news = []) {
    this.news = news;
  }

  getNews() {
    return this.news;
  }

  addNews(nota) {
    if (Object.keys(this.findNews(nota.id)).length === 0) {
      this.news.push(nota);
    }
  }

  removeNews(id) {
    const index = this.news.findIndex(item => item.id === id);
    if (index !== -1) {
      this.news = [...this.news.slice(0, index), ...this.news.slice(index + 1)];
    }
  }

  findNews(id) {
    if (this.news.some(item => item.id === id)) {
      return this.news.find(item => item.id === id);
    } else {
      return {};
    }
  }


  filterNews(category){
    return [{
      slug: '/noticias/2018/09/19/nota/6959801/arte-tejedoras-paja-toquilla-muestra',
      category: 'noticias'
    },{
      slug: '/noticias/2018/09/19/nota/6959801/arte-tejedoras-paja-toquilla-muestra-1',
      category: 'noticias'
    }]
  }
  
  count() {
    return this.news.length;
  }

}

export default EuNews;
