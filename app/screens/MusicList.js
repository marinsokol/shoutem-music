import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Screen,
  NavigationBar,
  ListView,
} from '@shoutem/ui';

import {
  EmptyStateView,
} from '@shoutem/ui-addons';

import {
  find,
  isBusy,
  shouldRefresh,
  getCollection
} from '@shoutem/redux-io';

import { navigateTo } from '@shoutem/core/navigation';
import { connect } from 'react-redux';
import { ext } from '../extension';

import MusicListView from '../components/MusicListView';
import MusicDetails from './MusicDetails';

import { SONG_SHEMA } from '../reducer';

export class MusicList extends Component {
  static propTypes = {
    navigateTo: PropTypes.func,
    find: PropTypes.func,
    songs: PropTypes.array,
  };

  constructor(props) {
    super(props)

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

  render() {
    const { songs } = this.props;
    if (songs.length === 0) {
      return (
        <EmptyStateView
          icon="error"
          message="Please create content and reload your app."
        />
      )
    }
    if (songs.length === 1) {
      return (
        <MusicDetails
          song={songs[0]}
        />
      )
    }

    return (
      <Screen styleName="paper">
        <NavigationBar title="Music" />
        <ListView
          data={songs}
          loading={isBusy(songs)}
          renderRow={this.renderRow}
        />
      </Screen>
    );
  }
};

export default connect(
  (state) => ({
    songs: getCollection(state[ext()].allSongs, state)
  }),
  { navigateTo, find }
)(MusicList);
