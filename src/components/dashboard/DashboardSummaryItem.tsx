import {View, Text} from 'react-native';
import {styles} from '../../themes/global.styles';
import { capitalizeEachWord } from '../../utils';

interface Props {
  labelTitle: string;
  labelValue: string;
}

export const DashboardSummaryItem = ({labelTitle, labelValue}: Props) => {
  return (
    <View style={styles.statusRow}>
      <Text style={styles.statusLabel}>{capitalizeEachWord(labelTitle)}</Text>
      <Text style={styles.statusValue}>{labelValue}</Text>
    </View>
  );
};

