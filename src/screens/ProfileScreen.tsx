import { View, Text, Switch } from 'react-native';
import { MainLayout } from '../components';
import { styles } from '../themes/global.styles';
import { useState } from 'react';

export const ProfileScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  return (
    <MainLayout containerStyles={styles.containerContentPages} title="Perfil" showBack>
        {/* Nombre del negocio */}
        <Text style={styles.businessName}>Nombre Del Negocio</Text>
        
        {/* Correo */}
        <Text style={styles.businessEmail}>correo@correo.com</Text>

        {/* Dark Mode Toggle */}
        <View style={styles.darkModeContainer}>
          <Text style={styles.darkModeText}>Dark Mode</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#003366' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        </View>
    </MainLayout>
  );
};
