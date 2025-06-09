import {Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-paper';
import {styles} from '../../themes/global.styles';
import { capitalizeEachWord } from '../../utils';

interface Props {
  size: number;
  source: string;
  text: string;
}

export const NavbarItem = ({size, source, text}: Props) => {
  return (
    <TouchableOpacity style={styles.navItem}>
      <Icon size={size} source={source} />
      <Text style={styles.navText}>{capitalizeEachWord(text)}</Text>
    </TouchableOpacity>
  );
};
