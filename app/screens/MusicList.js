import React, {
  PropTypes,
} from 'react';

import {
  find,
  shouldRefresh,
} from '@shoutem/redux-io';

import { CmsListScreen } from 'shoutem.cms';

import { connectStyle } from '@shoutem/theme';
import { navigateTo } from '@shoutem/core/navigation';
import { connect } from 'react-redux';
import { ext } from '../extension';

import MusicListView from '../components/MusicListView';
import MusicDetails from './MusicDetails';

import { SONG_SHEMA } from '../reducer';

export class MusicList extends CmsListScreen {
  static propTypes = {
    ...CmsListScreen.propTypes,
    navigateTo: PropTypes.func,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      schema: SONG_SHEMA,
    };

    this.openDetailsScreen = this.openDetailsScreen.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  componentDidMount() {
    const { find, songs } = this.props;

    if (shouldRefresh(songs)) {
      find(SONG_SHEMA, 'all', {
        include: 'image',
      })
    }
  }

  openDetailsScreen(song) {
    const { navigateTo } = this.props;

    navigateTo({
      screen: ext('MusicDetails'),
      props: { song },
    })
  }

  renderRow(song) {
    return (
      <MusicListView
        song={song}
        onPress={this.openDetailsScreen}
      />
    );
  }
};

export const mapStateToProps = CmsListScreen.createMapStateToProps(
  state => state[ext()].latestSongs,
);

export const mapDispatchToProps = CmsListScreen.createMapDispatchToProps({
  navigateTo,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  connectStyle(
    ext('MusicList'),
    {},
  )(MusicList),
);
