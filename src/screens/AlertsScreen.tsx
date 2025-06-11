import { FlatList, Text, View } from 'react-native';
import { MainLayout } from '../components';
import { styles } from '../themes/global.styles';

interface Alerta {
  id: string;
  product: string;
  message: string;
}

const ALERTAS: Alerta[] = [
  { id: '1', product: 'Llantas', message: 'El stock de llantas se está reduciendo.' },
  { id: '2', product: 'Baterías', message: 'El stock de baterías se está reduciendo.' },
  { id: '3', product: 'Filtros', message: 'El stock de filtros se está reduciendo.' },
  { id: '4', product: 'Aceite', message: 'El stock de aceite se está reduciendo.' },
  { id: '5', product: 'Pastillas de freno', message: 'El stock de pastillas de freno se está reduciendo.' },
  { id: '6', product: 'Limpiaparabrisas', message: 'El stock de limpiaparabrisas se está reduciendo.' },
  { id: '7', product: 'Amortiguadores', message: 'El stock de amortiguadores se está reduciendo.' },
];

export const AlertsScreen = () => {
  return (
    <MainLayout containerStyles={styles.containerContentPages} title='Alertas' showBack>
      <FlatList
        data={ALERTAS}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.cardAlerts}>
            <Text style={styles.productName}>El stock de {item.product}</Text>
            <Text style={styles.productQuantity}>{item.message}</Text>
          </View>
        )}
      />
    </MainLayout>
  );
};
