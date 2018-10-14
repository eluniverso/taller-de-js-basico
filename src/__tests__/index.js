/**
 *
 *  EUNews
 *  lea las notas guardas
 *  Agrege las notas
 *  Elimine.
 */

import EuNews from "../index";

describe("Probar el correcto funcinamiento de EUNews", function() {
  const eu = new EuNews();

  const nota = {
    id: 1,
    slug: "deportes"
  };

  it("Deberia inicializarse sin notas", function() {
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
    const nota_encontrada = eu.findNews(nota.slug);
    expect(nota_encontrada).toEqual(nota);
  });

  it("Deberia eliminar la nota", function() {
    eu.removeNews(nota.id);
    expect(eu.getNews().length).toEqual(0);
  });

  it("Deberia inicializarse con una cantidad N de notas", () => {
    const notas = [{ slug: 'deportes' }, {slug: 'vida'}];
    const eu2 = new EuNews(notas);
    expect(notas).toEqual(notas);
    expect(2).toEqual(2);
  })
});
