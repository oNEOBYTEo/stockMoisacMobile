import { View } from 'react-native';
import { styles } from '../../themes/global.styles';
import { DashboardButton } from './DashboardButton';
import { RootStackParamList } from '../../../App';

type DashboardItemKey = 'cube' | 'grid';

type DashboardItem = {
  icon: DashboardItemKey;
  text: string;
  destination: keyof RootStackParamList;
};

const dashboardItems: DashboardItem[] = [
  {
    icon: 'cube',
    text: 'productos',
    destination: 'Products',
  },
  {
    icon: 'grid',
    text: 'pedidos',
    destination: 'Orders',
  },
];

export const DashboardButtonsContainer = () => {
  return (
    <View style={styles.buttonsContainer}>
      {dashboardItems.map(({ icon, text, destination }) => (
        <DashboardButton
          key={icon}
          size={55}
          source={icon}
          text={text}
          destination={destination}
        />
      ))}
    </View>
  );
};