import {StyleSheet} from 'react-native';
import {DefaultTheme} from 'react-native-paper';

export const COLORS = {
  mainColor: '#0b274b',
  secondaryColor: '#5AABFC',
  backgroundColor: '#fff'
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: COLORS.backgroundColor,
  },
  containerDashboard: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: COLORS.backgroundColor,
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 150,
    marginBottom: 32,
  },
  logoDashboard: {
    width: 280,
    height: 100,
    marginBottom: 30,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    backgroundColor: COLORS.secondaryColor,
    borderRadius: 8,
    paddingVertical: 6,
    marginTop: 8,
  },
  buttonText: {
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 24,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 40,
    textAlign: 'center',
  },
  statusBox: {
    borderWidth: 1,
    borderColor: COLORS.mainColor,
    borderRadius: 10,
    padding: 20,
    width: '85%',
    marginBottom: 30,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  statusLabel: {
    fontSize: 18,
    fontWeight: '600',
  },
  statusValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 40,
  },
  cardButton: {
    borderWidth: 1,
    borderColor: COLORS.mainColor,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '40%',
    height: 151,
  },
  cardText: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: COLORS.mainColor,
    width: '100%',
    backgroundColor: COLORS.backgroundColor,
    paddingVertical: 10,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: 700,
  },
});

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.secondaryColor,
    outline: COLORS.mainColor,
  },
  roundness: 8,
};
