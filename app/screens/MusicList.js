import React, {
  Component
} from 'react';

import {
  Screen,
  NavigationBar,
  ListView,
} from '@shoutem/ui';

import { navigateTo } from '@shoutem/core/navigation';
import { connect } from 'react-redux';
import { ext } from '../extension';


import MusicListView from '../components/MusicListView';
import MusicDetails from './MusicDetails';

import { songs } from '../mockData';

class MusicList extends Component {
  static propTypes = {
    navigateTo: React.PropTypes.func,
  };

  constructor(props) {
    super(props)

    this.state = {
      songs: songs,
    };

    this.openDetailsScreen = this.openDetailsScreen.bind(this);
    this.renderRow = this.renderRow.bind(this);
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
    const { songs } = this.state;
    if (songs.length === 1) {
      return <MusicDetails
        song={songs[0]}
      />
    }

    return (
      <Screen styleName="full-screen paper" >
        <ListView
          data={songs}
          renderRow={this.renderRow}
        />
      </Screen>
    );
  }
};

export default connect(
  undefined,
  { navigateTo }
)(MusicList);
