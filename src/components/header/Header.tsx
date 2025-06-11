import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon } from 'react-native-paper';
import { View, TouchableOpacity, Text } from "react-native";
import { RootStackParamList } from "../../../App";
import { styles } from '../../themes/global.styles';

interface Props {
  title: string;
  showBack?: boolean;
}

export const Header = ({ title, showBack = true }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.header}>
      {showBack && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon source="arrow-back" size={40} />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={{ width: 24 }} />
    </View>
  );
};