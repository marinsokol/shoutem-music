import React, {
  PureComponent,
  PropTypes,
} from 'react';

import {
  Row,
  View,
  Image,
  Title,
  Subtitle,
  Divider,
  TouchableOpacity,
} from '@shoutem/ui';

export default class SmallMusicListView extends PureComponent {
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
        <Row>
          <Image
            styleName="medium rounded-corners"
            source={{ uri: song.albumImage }}
          />
          <View styleName="vertical">
            <Title styleName="md-gutter-bottom">{song.name}</Title>
            <Subtitle styleName="sm-gutter-horizontal">{song.artist}</Subtitle>
          </View>
        </Row>
        <Divider styleName="line" />
      </TouchableOpacity>
    );
  }
}
