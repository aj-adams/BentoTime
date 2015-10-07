import { assign, map } from 'lodash';
import { imgHost } from 'app/data/services/mangaEdenApi';
import Chapter from 'app/data/types/Chapter';

const Book = function Book() {};

Book.createFromMangaEdenMangaApi = function(response, bookID) {
  const chapters = map(response.chapters, function mapChapterData(chapterData) {
    return Chapter.createFromMangaEdenMangaApi(chapterData);
  });

  return assign(new Book(), {
    id: bookID,
    title: response.title,
    image: imgHost + response.image,
    artist: response.artist,
    author: response.author,
    created: response.created,
    lastChapterDate: response.last_chapter_date,
    lastUpdated: undefined,
    status: response.status,
    chapters: chapters,
    description: response.description,
    hits: response.hits,
    categories: response.categories,
    alias: response.alias
  });
};

Book.createFromMangaEdenListApi = function(response) {
  const { i, a, t, im, s, c, ld, h } = response;

  return assign(new Book(), {
    id: i,
    title: t,
    image: imgHost + im,
    lastChapterDate: ld,
    lastUpdated: undefined,
    alias: a,
    status: s,
    categories: c,
    hits: h
  });
};

export default Book;
