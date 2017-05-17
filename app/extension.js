// This file is managed by Shoutem CLI
// You should not change it
import pack from './package.json';

// screens imports
import MusicList from './screens/MusicList';
import MusicDetails from './screens/MusicDetails';
import SmallMusicList from './screens/SmallMusicList';
import FeaturedMusicList from './screens/FeaturedMusicList';

// themes imports


export const screens = {
  MusicList,
  MusicDetails,
  SmallMusicList,
  FeaturedMusicList
};

export const themes = {

};

export function ext(resourceName) {
  return resourceName ? `${pack.name}.${resourceName}` : pack.name;
}
