import React, {
  Component,
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
} from '@shoutem/ui';

import Video from 'react-native-video';

export default class MusicDetails extends Component {
  static propTypes = {
    song: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      playing: false,
    }

    this.playSong = this.playSong.bind(this);
  }

  playSong() {
    const { playing } = this.state;
    this.setState({ playing: !playing });
  }

  render() {
    const { song } = this.props;
    const { playing } = this.state;
    let playButton = null;
    if (!playing) {
      playButton = (<Icon name="play" style={{ fontSize: 100 }} />);
    } else {
      playButton = (<Icon name="pause" style={{ fontSize: 100 }} />);
    }

    return (
      <Screen>
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
          <TouchableOpacity onPress={this.playSong}>
            {playButton}
          </TouchableOpacity>
        </View>
      </Screen>
    );
  }
};
