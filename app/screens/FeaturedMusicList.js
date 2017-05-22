import React, {
  PropTypes,
} from 'react';

import { connect } from 'react-redux';
import { connectStyle } from '@shoutem/theme';
import { ext } from '../extension';

import {
  MusicList,
  mapStateToProps,
  mapDispatchToProps,
} from './MusicList';
import SmallMusicListView from '../components/SmallMusicListView';
import MusicListView from '../components/MusicListView';

export class FeaturedMusicList extends MusicList {
  static propTypes = {
    ...MusicList.propTypes,
    onPress: PropTypes.func,
  };

  renderRow = (song, sectionId, index) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(
  connectStyle(
    ext('FeaturedMusicList'),
    {},
  )(FeaturedMusicList),
)
