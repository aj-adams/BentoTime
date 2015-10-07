import Rx from 'rx';
import { forEach } from 'lodash';
import { getData, getData$, getLibrary$, getManga$, getChapter$ } from './mangaEdenApi';

describe('Data', function() {
  describe('Services', function() {
    describe('MangaEden', function() {
      var server;
      xit('should run a callback request', function(done) {
        getData('http://www.mangaeden.com/api/list/0/?p=0', function(error, response) {
          expect(error).to.be.null;
          expect(response).to.be.an.object;
          expect(JSON.stringify(response)).to.match(/kanai-kun/);
          done();
        });
      });

      xit('should run a reactive request', function(done) {
        getData$('http://www.mangaeden.com/api/list/0/?p=0').forEach({
          onNext(response) {
            expect(response).to.be.an.object;
            expect(JSON.stringify(response)).to.match(/kanai-kun/);
            done();
          },
          onError(error) { return console.error(error); }
        });
      });

      xit('should get the manga library', function(done) {
        getLibrary$().forEach({
          onNext(library) {
            expect(library).to.be.an.object;
            expect(JSON.stringify(library)).to.match(/kanai-kun/);
            const properties = ['id', 'alias', 'title', 'image', 'status', 'category', 'lastUpdate', 'hits'];
            forEach(properties, property => expect(library[0]).to.have.property(property));
            done();
          },
          onError(error) { return console.error(error); }
        });
      });

      xit('should get manga information', function(done) {
        const mangaID = '4e70e9f6c092255ef7004336';
        getManga$(mangaID).forEach({
          onNext(manga) {
            expect(manga).to.be.an.object;
            expect(JSON.stringify(manga)).to.match(/airindream/);
            const properties = ['id', 'alias', 'title', 'image', 'artist', 'categories', 'lastChapterDate', 'status', 'author', 'created', 'chapters', 'description'];
            forEach(properties, property => expect(manga).to.have.property(property));
            done();
          },
          onError(error) { return console.error(error); }
        });
      });

      xit('should get a chapter\'s pages', function(done) {
        const chapterID = '4e711cb0c09225616d037cc2';
        getChapter$(chapterID).forEach({
          onNext({id, pages}) {
            expect(id).to.be.a.string;
            expect(pages).to.be.an.array;
            expect(pages).to.have.length(33);
            expect(JSON.stringify(pages[0])).to.match(/\.jpg/);
            done();
          },
          onError(error) { return console.error(error); }
        });
      });
    });
  });
});
