import Library from 'app/data/types/Library';
import apiResponse from 'test/fixtures/mangaEden/listApiFixture';
import exampleOutput from 'test/fixtures/types/libraryTypeFixture';

describe('Data', function() {
  describe('Types', function() {
    describe('Library', function() {
      it('Should correctly format Manga Eden Api information', function testFormatBook() {
        const library = Library.createFromMangaEdenListApi(apiResponse);
        expect(library.totalBooks).to.be.a.number;
        expect(library.books).to.be.an.object;
      });
    });
  });
});
