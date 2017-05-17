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
import MusicListView from '../components/MusicListView';

export class FeaturedMusicList extends MusicList {
  renderRow(song, sectionId, index) {
    if (index === '0') {
      return (
        <MusicListView
          song={song}
          onPress={this.openDetailsScreen}
        />
      );
    }

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
)(FeaturedMusicList);
