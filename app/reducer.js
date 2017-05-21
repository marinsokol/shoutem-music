import { storage, collection } from '@shoutem/redux-io';
import { combineReducers } from 'redux';

import { ext } from './extension';
import { cmsCollection } from 'shoutem.cms';

export const SONG_SHEMA = ext('Song');

export default combineReducers({
  songs: storage(SONG_SHEMA),
  allSongs: collection(SONG_SHEMA, 'all'),
  latestSongs: cmsCollection(SONG_SHEMA),
});
