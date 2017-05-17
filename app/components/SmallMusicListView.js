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
  Divider,
  TouchableOpacity,
} from '@shoutem/ui';

export default class SmallMusicListView extends Component {
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
