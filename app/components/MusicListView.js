import React, {
  PureComponent,
  PropTypes,
} from 'react';

import {
  Image,
  Title,
  Subtitle,
  Tile,
  TouchableOpacity,
} from '@shoutem/ui';

export default class MusicListView extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func,
    song: PropTypes.object,
  };

  handlePress = () => {
    const { song } = this.props;
    this.props.onPress(song);
  }

  render() {
    const { song } = this.props;

    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Image
          styleName="large-banner"
          source={{
            uri: song.albumImage
          }}
        >
          <Tile>
            <Title styleName="md-gutter-bottom">{song.name}</Title>
            <Subtitle>{song.artist}</Subtitle>
          </Tile>
        </Image>
      </TouchableOpacity>
    );
  }
}
