import { Observable } from 'rx';
import { bind, map } from 'lodash';

function getList$() {
  const data = [
    {
      id: '55a1a17b719a1609004ad58f',
      alias: 'udon-no-onna',
      title: 'Udon no Onna',
      image: 'myimage/url', // Image url
      status: 0, // series is over
      category: ['Action', 'Sci-fi'],
      lastUpdate: 1441691826,
      hits: 3718
    }
  ];
  return {
    forEach({onNext}) {
      onNext(data);
    }
  };
}

function getManga$(mangaID) {
  const mappedChapters = map([1,2,3], chapter => {
    return {
      id: '55a1a17b719a1609004ad58f',
      number: 5,
      title: '5',
      date: 1275542373.0
    };
  });
  const data = {
    id: '55a1a17b719a1609004ad58f',
    alias: 'udon-no-onna',
    title: 'Udon no Onna',
    artist: 'an artist',
    author: 'an author',
    created: 1441691826, // 1316022774 (unix time stamp)
    categories: ['hello', 'these', 'are', 'categories'],
    image: 'myimage/url',
    chapters: mappedChapters,
    description: 'this is a description',
    lastChapterDate: 1441691826,
    status: 0
  };
  return {
    forEach({onNext}) {
      onNext(data);
    }
  };
}

function getPages$(chapterID) {
  const data = [
    'adsfasdfsd',
    'adsfasdfsd',
    'adsfasdfsd'
  ];

  return {
    forEach({onNext}) {
      onNext(data);
    }
  };
}

export default {
  getList$,
  getManga$,
  getPages$
};
