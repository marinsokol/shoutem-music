import React, {
  Component,
  PropTypes,
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
    onPress: PropTypes.func,
    song: PropTypes.object,
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
            styleName="medium-square rounded-corners placeholder"
            source={{ uri: song.albumImage }}
          >
            <Overlay styleName="rounded-small solid-bright">
              <Icon name="play" style={{ color: 'white' }} />
            </Overlay>
          </Image>
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
