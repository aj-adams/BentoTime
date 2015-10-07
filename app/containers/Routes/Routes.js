import React from 'react';
import { Route } from 'react-router';

import Layout from 'app/containers/Layout';
import PageView from 'app/containers/PageView';
import BookView from 'app/containers/BookView';
import ChapterView from 'app/containers/ChapterView';
import LibraryView from 'app/containers/LibraryView';
import SettingsView from 'app/containers/SettingsView';
import NotFoundView from 'app/containers/NotFoundView';

const routes = (
  <Route component={Layout}>
    <Route path="/" component={LibraryView} />

    <Route path="/:bookid" component={BookView} />
    <Route path="/:bookid/:chapterid" component={ChapterView} />
    <Route path="/:bookid/:chapterid/:pageid" component={PageView} />

    <Route path="settings" component={SettingsView} />
    <Route path="*" component={NotFoundView} />
  </Route>
);

export default routes;
