import { View } from 'react-native';
import { Header } from '../header/Header';
import { Navbar } from '../navbar/Navbar';
import { styles } from '../../themes/global.styles';

interface Props {
  children: React.ReactNode;
  showHeader?: boolean;
  showNavbar?: boolean;
  title?: string;
  showBack?: boolean;
  containerStyles: object;
}

export const MainLayout  = ({
  children,
  showHeader = true,
  showNavbar = true,
  title = '',
  showBack = false,
  containerStyles
}: Props) => (
  <View style={containerStyles}>
    {showHeader && <Header title={title} showBack={showBack} />}
    <View style={styles.containerScrollView}>
      {children}
    </View>
    {showNavbar && <Navbar styles={styles.bottomNav} />}
  </View>
);
