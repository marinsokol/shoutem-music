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
      currentTime: 0,
      songDuration: 0,
    }

    this.handleProgress = this.handleProgress.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
    this.playSong = this.playSong.bind(this);
  }

  handleProgress(params) {
    this.setState({ currentTime: params.currentTime });
  }

  handleLoad(params) {
    this.setState({ songDuration: params.duration });
  }

  playSong() {
    const { playing } = this.state;
    this.setState({ playing: !playing });
  }

  render() {
    const { song } = this.props;
    const { currentTime, songDuration, playing } = this.state;
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
            onLoad={this.handleLoad}
            onProgress={this.handleProgress}
            repeat={false}
          />
        </View>
        <View styleName="vertical h-center" style={{ marginTop: 20 }} >
          <Title>{song.name}</Title>
          <Subtitle>{song.artist}</Subtitle>
          <Text>{song.album}</Text>
          <Text>{currentTime} / {songDuration}</Text>
        </View>
        <View styleName="horizontal v-center h-center">
          <Icon name="left-arrow" style={{ fontSize: 100 }} />
          <TouchableOpacity onPress={this.playSong}>
            {playButton}
          </TouchableOpacity>
          <Icon name="right-arrow" style={{ fontSize: 100 }} />
        </View>
      </Screen>
    );
  }
};
