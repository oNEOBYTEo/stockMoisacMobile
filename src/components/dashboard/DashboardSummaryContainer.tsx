import {View} from 'react-native';
import {styles} from '../../themes/global.styles';
import {DashboardSummaryItem} from './DashboardSummaryItem';

interface AllowedProducts {
  productos: string;
  stock: string;
  alertas: string;
}

const items: AllowedProducts = {
  productos: '12',
  stock: '5',
  alertas: '3',
};

export const DashboardSummaryContainer = () => {
  return (
    <View style={styles.statusBox}>
      {Object.entries(items).map(([labelTitle, labelText]) => (
        <DashboardSummaryItem key={labelTitle + labelText} labelTitle={labelTitle} labelValue={labelText} />
      ))}
    </View>
  );
};
