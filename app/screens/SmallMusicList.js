import React from 'react';

import {
  find,
  getCollection
} from '@shoutem/redux-io';

import { connect } from 'react-redux';
import { navigateTo } from '@shoutem/core/navigation';
import { ext } from '../extension';

import { MusicList } from './MusicList';
import SmallMusicListView from '../components/SmallMusicListView';

export class SmallMusicList extends MusicList {

  renderRow(song) {
    return (
      <SmallMusicListView
        song={song}
        onPress={this.openDetailsScreen}
      />
    );
  }
}

export default connect(
  (state) => ({
    songs: getCollection(state[ext()].allSongs, state)
  }),
  { navigateTo, find }
)(SmallMusicList);
