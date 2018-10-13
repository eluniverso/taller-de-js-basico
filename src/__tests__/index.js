/**
 * 
 *  EUNews 
 *  lea las notas guardas
 *  Agrege las notas
 *  Elimine.
 */

 const EuNews = require('../index');



 describe('Probar el correcto funcinamiento de EUNews', function(){

    const eu = new EuNews();

    const nota = {
        id: 1,
        slug: 'deportes'
    }

    it('Deberia inicializarse sin notas', function(){
        expect(eu.getNews()).toEqual([]);
    });

    it('Deberia agregar una nota', function(){
        eu.addNews(nota)
        expect(eu.getNews()).toContain(nota);
    });

    it('No deberia agregar notas repetidas', function(){
        eu.addNews(nota);
        expect(eu.getNews()).toContain(nota);
    })

    it('Deberia encontrar la nota por slug', function(){
        const nota_encontrada = eu.findNews(nota.slug);
        expect(nota_encontrada).toEqual(nota)
    })

    it('Deberia eliminar la nota', function(){
        eu.removeNews(nota.id);
        expect(eu.getNews().length).toEqual(0)
    })



 })