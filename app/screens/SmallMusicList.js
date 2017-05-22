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

export class SmallMusicList extends MusicList {
  static propTypes = {
    ...MusicList.propTypes,
    onPress: PropTypes.func,
  };

  constructor(props, context) {
    super(props, context);
    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(song) {
    return (
      <SmallMusicListView
        song={song}
        onPress={this.openDetailsScreen}
      />
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(
  connectStyle(
    ext('SmallMusicList'),
    {},
  )(SmallMusicList),
);
