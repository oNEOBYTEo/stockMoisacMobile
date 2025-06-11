import { useState } from "react";
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { styles } from "../themes/global.styles";
import { Logo } from "../components";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

export const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Logo styles={styles.logo} />
      
      <TextInput
        label="Correo Electronico"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        label="Contraseña"
        mode="outlined"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
        labelStyle={styles.buttonText}
      >
        Ingresar
      </Button>

      <TouchableOpacity onPress={() => console.log('Forgot Password')}>
        <Text style={styles.forgotPassword}>Olvidaste la contraseña?</Text>
      </TouchableOpacity>
    </View>
  );
}
