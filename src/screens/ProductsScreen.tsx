import {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Icon, TextInput} from 'react-native-paper';
import {MainLayout} from '../components';
import {styles} from '../themes/global.styles';

interface Producto {
  id: string;
  nombre: string;
  cantidad: number;
}

const DATA: Producto[] = [
  {id: '1', nombre: 'Llantas', cantidad: 2},
  {id: '2', nombre: 'Baterias', cantidad: 2},
  {id: '3', nombre: 'Filtros', cantidad: 2},
  {id: '4', nombre: 'Aceite', cantidad: 2},
  {id: '5', nombre: 'Aceite', cantidad: 2},
  {id: '6', nombre: 'Aceite', cantidad: 2},
  {id: '7', nombre: 'Aceite', cantidad: 2},
  {id: '8', nombre: 'Aceite', cantidad: 2},
  {id: '9', nombre: 'Aceite', cantidad: 2},
  {id: '10', nombre: 'Aceite', cantidad: 2},
  {id: '11', nombre: 'Aceite', cantidad: 2},
  {id: '12', nombre: 'Aceite', cantidad: 2},
];

export const ProductsScreen = () => {
  const [query, setQuery] = useState('');

  const productosFiltrados = DATA.filter(p =>
    p.nombre.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <MainLayout containerStyles={styles.containerContentPages} title='Productos' showBack>
        <TextInput
          placeholder="Buscar"
          mode="outlined"
          value={query}
          onChangeText={setQuery}
          style={styles.input}
          right={<TextInput.Icon icon="search" />}
        />

        <FlatList
        data={productosFiltrados}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.productName}>{item.nombre}</Text>
              <Text style={styles.productQuantity}>Cantidad: {item.cantidad}</Text>
            </View>
            <Icon source="chevron-down" size={20} />
          </View>
        )}
      />
    </MainLayout>
  );
};
