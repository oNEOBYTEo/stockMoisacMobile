import {View} from 'react-native';
import {styles} from '../../themes/global.styles';
import {DashboardButton} from './DashboardButton';

type AllowedIcons = {
  cube: string;
  grid: string;
};

const items: AllowedIcons = {
  cube: 'productos',
  grid: 'pedidos',
};

export const DashboardButtonsContainer = () => {
  return (
    <View style={styles.buttonsContainer}>
      {Object.entries(items).map(([iconSource, text]) => (
        <DashboardButton
          key={iconSource + text}
          size={55}
          source={iconSource}
          text={text}
        />
      ))}
    </View>
  );
};
