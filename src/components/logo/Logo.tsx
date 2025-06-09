import { Image } from 'react-native';

interface Props {
  styles: any
}


export const Logo = ({styles}: Props) => {
  return (
    <Image
      source={require('../../assets/logo.png')}
      style={styles}
      resizeMode="contain"
    />
  );
};
