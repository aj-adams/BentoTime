import Book from './Book';
import apiResponse from 'test/fixtures/mangaEden/mangaApiFixture';
import exampleOutput from 'test/fixtures/models/bookFixture';

describe('Data', function() {
  describe('Models', function() {
    describe('Book', function() {
      it('should format book api calls correctly', function testFormatBook() {
        const bookID = '55a1a17b719a1609004ad58f';
        const book = Book.createFromMangaEdenMangaApi(apiResponse, bookID);
        expect(book.id).to.deep.equal(exampleOutput.id);
        expect(book.title).to.deep.equal(exampleOutput.title);
        expect(book.author).to.deep.equal(exampleOutput.author);
        expect(book.chapters).to.be.an.array;
      });
    });
  });
});
