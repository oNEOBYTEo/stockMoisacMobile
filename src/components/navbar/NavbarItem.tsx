import { Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-paper';
import { COLORS, styles } from '../../themes/global.styles';
import { capitalizeEachWord } from '../../utils';

import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

interface Props {
  size: number;
  source: string;
  text: string;
  destination: keyof RootStackParamList;
}

export const NavbarItem = ({ size, source, text, destination }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList>>();

  const isActive = route.name === destination;

  return (
    <TouchableOpacity
      style={[
        styles.navItem,
      ]}
      onPress={() => navigation.navigate(destination)}
    >
      <Icon
        size={size}
        source={source}
        color={isActive ? COLORS.secondaryColor : COLORS.navBarItemColor} // ejemplo de color condicional
      />
      <Text
        style={[
          styles.navText,
        ]}
      >
        {capitalizeEachWord(text)}
      </Text>
    </TouchableOpacity>
  );
};
