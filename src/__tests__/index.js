/**
 *
 *  EUNews
 *  lea las notas guardas
 *  Agrege las notas
 *  Elimine.
 */

import EuNews from "../index";



const notas_reales = [{
  slug: '/deportes/2018/10/14/nota/6998312/10-clasicos-historicos-que-fueron-claves',
  category: 'deportes'
}, {
  slug: '/noticias/2018/09/19/nota/6959801/arte-tejedoras-paja-toquilla-muestra',
  category: 'vida'
},{
  slug: '/noticias/2018/09/19/nota/6959801/arte-tejedoras-paja-toquilla-muestra',
  category: 'noticias'
},{
  slug: '/noticias/2018/09/19/nota/6959801/arte-tejedoras-paja-toquilla-muestra-1',
  category: 'noticias'
}]


describe("Probar el correcto funcinamiento de EUNews", function() {
  const eu = new EuNews();

  const nota = {
    id: 1,
    slug: "deportes"
  };

  it("Deberia iniciar vacío si no le pasa un parámetro", function() {
    expect(eu.getNews()).toEqual([]);
  });

  it("Deberia agregar una nota", function() {
    eu.addNews(nota);
    expect(eu.getNews()).toContain(nota);
  });

  it("No deberia agregar notas repetidas", function() {
    eu.addNews(nota);
    expect(eu.getNews().length).toEqual(1);
  });

  it("Deberia encontrar la nota por slug", function() {
    const nota_encontrada = eu.findNews(nota.id);
    expect(nota_encontrada).toEqual(nota);
  });

  it("Deberia eliminar la nota", function() {
    eu.removeNews(nota.id);
    expect(eu.getNews().length).toEqual(0);
  });

  const notas = [{ slug: "deportes" }, { slug: "vida" }];
  const eu2 = new EuNews(notas);

  it("Deberia inicializarse con una cantidad N de notas", () => {
    expect(eu2.getNews()).toEqual(notas);
    expect(eu2.getNews().length).toEqual(2);
  });

  it("deberia contar las notas", () => {
    expect(eu2.count()).toEqual(2); //aqui deberias incluir tu metodo;
  });

  it("Deberia filtrar las notas por [category]", () => {
    const euReal = new EuNews(notas_reales);
    expect(euReal.filterNews('noticias')).toEqual([notas_reales[2], notas_reales[3]])
  });

  
});
