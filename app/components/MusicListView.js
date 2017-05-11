import React, {
  Component
} from 'react';

import {
  Row,
  View,
  Image,
  Title,
  Subtitle,
  Tile,
  Divider,
  TouchableOpacity,
  Overlay,
  Icon,
} from '@shoutem/ui';

export default class MusicListView extends Component {
  static propTypes = {
    onPress: React.PropTypes.func,
    song: React.PropTypes.object,
  };

  constructor() {
    super()

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    const { song } = this.props;
    this.props.onPress(song);
  }

  render() {
    const { song } = this.props;

    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Row>
          <Image
            styleName="medium rounded-corners placeholder"
            source={{ uri: song.albumImage }}
          >
            <Overlay styleName="rounded-small">
              <Icon name="play" />
            </Overlay>
          </Image>
          <View styleName="vertical stretch space-between">
            <Title styleName="md-gutter-bottom">{song.name}</Title>
            <Subtitle styleName="sm-gutter-horizontal">{song.artist}</Subtitle>
          </View>
        </Row>
        <Divider styleName="line" />
      </TouchableOpacity>
    );
  }
}
