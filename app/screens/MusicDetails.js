import React, {
  PureComponent,
  PropTypes,
} from 'react';

import {
  View,
  Screen,
  Image,
  Title,
  Subtitle,
  TouchableOpacity,
  Text,
  Icon,
  Tile,
} from '@shoutem/ui';
import { NavigationBar } from '@shoutem/ui/navigation';
import { connectStyle } from '@shoutem/theme';
import { ext } from '../extension';

import Video from 'react-native-video';

export class MusicDetails extends PureComponent {
  static propTypes = {
    song: PropTypes.object,
    songs: PropTypes.array,
  };

  state = {
    song: this.props.song,
    playing: false,
  }

  playSong = () => {
    const { playing } = this.state;
    this.setState({ playing: !playing });
  }

  prevSong = () => {
    const { songs } = this.props;
    const { song } = this.state;
    let index = songs.findIndex(single => single.uuid === song.uuid) - 1;
    if (index === -1) index = songs.length - 1;

    this.setState({
      song: songs[index],
    })
  }

  nextSong = () => {
    const { songs } = this.props;
    const { song } = this.state;
    let index = songs.findIndex(single => single.uuid === song.uuid) + 1;
    if (songs.length === index) index = 0;

    this.setState({
      song: songs[index],
    })
  }

  render() {
    const { playing, song } = this.state;
    const { songs } = this.props;
    let playButton = null,
      prevButton = null,
      nextButton = null;
    if (!playing) {
      playButton = (<Icon name="play" style={{ fontSize: 100 }} />);
    } else {
      playButton = (<Icon name="pause" style={{ fontSize: 100 }} />);
    }
    if (songs.length > 1) {
      prevButton = (
        <TouchableOpacity onPress={this.prevSong}>
          <Icon name="left-arrow" style={{ fontSize: 100 }} />
        </TouchableOpacity>
      );
      nextButton = (
        <TouchableOpacity onPress={this.nextSong}>
          <Icon name="right-arrow" style={{ fontSize: 100 }} />
        </TouchableOpacity>
      );
    }

    return (
      <Screen>
        <NavigationBar
          title={'MUSIC'}
        />
        <View styleName="vertical h-center">
          <Image
            styleName="featured"
            source={{
              uri: song.albumImage
            }}
          />
          <Video
            source={{ uri: song.url }}
            ref="audio"
            volume={1.0}
            muted={false}
            paused={!playing}
            playInBackground={true}
            playWhenInactive={true}
            repeat={false}
          />
        </View>
        <View styleName="vertical h-center" style={{ marginTop: 20 }} >
          <Title>{song.name}</Title>
          <Subtitle>{song.artist}</Subtitle>
          <Text>{song.album}</Text>
        </View>
        <View styleName="horizontal v-center h-center">
          {prevButton}
          <TouchableOpacity onPress={this.playSong}>
            {playButton}
          </TouchableOpacity>
          {nextButton}
        </View>
      </Screen>
    );
  }
};

export default connectStyle(
  ext('MusicDetails')
)(MusicDetails);
