import { View } from 'react-native';
import { NavbarItem } from './NavbarItem';
import { RootStackParamList } from '../../../App';

type IconType = 
  | 'home-outline'
  | 'cube-outline'
  | 'grid-outline'
  | 'notifications-outline'
  | 'person-outline';

type NavbarItemConfig = {
  icon: IconType;
  text: string;
  destination: keyof RootStackParamList;
};

interface Props {
  styles: any
}

const items: NavbarItemConfig[] = [
  { icon: 'home-outline', text: 'Inicio', destination: 'Dashboard' },
  { icon: 'cube-outline', text: 'Pedidos', destination: 'Orders' },
  { icon: 'grid-outline', text: 'Productos', destination: 'Products' },
  { icon: 'notifications-outline', text: 'Alertas', destination: 'Alerts' },
  { icon: 'person-outline', text: 'Perfil', destination: 'Profile' },
];


export const Navbar = ({styles}: Props) => {
  return (
    <View style={styles}>
      {items.map(({ icon, text, destination }) => (
        <NavbarItem
          key={icon + text}
          size={22}
          source={icon}
          text={text}
          destination={destination}
        />
      ))}
    </View>
  );
};
