import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-paper';
import { COLORS, styles } from '../../themes/global.styles';
import { capitalizeEachWord } from '../../utils';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

interface Props {
  size: number;
  source: string;
  text: string;
}

export const DashboardButton = ({size, source, text}: Props) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate('Login')}>
      <Icon size={size} source={source} color={COLORS.mainColor} />
      <Text style={styles.cardText}>{capitalizeEachWord(text)}</Text>
    </TouchableOpacity>
  );
};
