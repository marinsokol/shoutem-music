import React, {
  Component
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

export default class MusicDetails extends Component {
  static propTypes = {
    song: React.PropTypes.object,
  };

  render() {
    const { song } = this.props;

    return (
      <Screen>
        <Image
          styleName="featured"
          source={{
            uri: song.albumImage
          }}
        />
        <View styleName="vertical h-center" style={{ marginTop: 20 }} >
          <Title>{song.name}</Title>
          <Subtitle>{song.artist}</Subtitle>
          <Text>{song.album}</Text>
        </View>
        <View styleName="horizontal v-center h-center">
          <Icon name="left-arrow" style={{ fontSize: 125 }} />
          <Icon name="play" style={{ fontSize: 125 }} />
          <Icon name="right-arrow" style={{ fontSize: 125 }} />
        </View>
      </Screen>
    );
  }
};
