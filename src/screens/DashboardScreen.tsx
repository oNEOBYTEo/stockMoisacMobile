import React from 'react';
import { View } from 'react-native';
import { Navbar, DashboardButtonsContainer, Logo, DashboardSummaryContainer} from '../components';
import { styles } from '../themes/global.styles';


export const DashboardScreen = () => {

  return (
    <View style={styles.containerDashboard}>
      <Logo styles={styles.logoDashboard} />

      <DashboardSummaryContainer />

      <DashboardButtonsContainer />

      <Navbar />
    </View>
  );
};
