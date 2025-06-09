import {View} from 'react-native';
import {styles} from '../../themes/global.styles';
import {NavbarItem} from './NavbarItem';

type AllowedIcons = {
  'home-outline': string;
  'grid-outline': string;
  'cube-outline': string;
  'notifications-outline': string;
  'person-outline': string;
};

const items: AllowedIcons = {
  'home-outline': 'Home',
  'cube-outline': 'Pedidos',
  'grid-outline': 'Productos',
  'notifications-outline': 'Alertas',
  'person-outline': 'Perfil',
};

export const Navbar = () => {
  return (
    <View style={styles.bottomNav}>
      {Object.entries(items).map(([iconSource, text]) => (
        <NavbarItem
          key={iconSource + text}
          size={22}
          source={iconSource}
          text={text}
        />
      ))}
    </View>
  );
};
