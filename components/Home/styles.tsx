import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  divider: {
    height: 2,
    marginLeft: 17,
    marginRight: 17,
    borderWidth: 1,
    borderColor: '#E3EFFC',
    marginBottom: 18,
    opacity: 0.25
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginBottom: 15,
  },

  icons: {
    flexDirection: "row"
  },
  iconUser: {
    marginRight: 18,
    marginLeft: 22,
  },
  iconBell: {
    
  },
  headerContainer: {
    width: '100%',
    height: 196,
    marginTop: 0
  },
  lineOne: {
    width: 14,
    height: 2.3,
    backgroundColor: "#fff",
    marginBottom: 5.83,
    marginLeft: 18
  },
  lineTwo: {
    width: 9,
    height: 3.3,
    backgroundColor: "#fff",
    marginBottom: 5.83,
    marginLeft: 18
  },
  lineThree: {
    width: 14,
    height: 2.3,
    backgroundColor: "#fff",
    marginBottom: 23,
    marginLeft: 18
  },
  top: {
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: "space-between",
    textAlign: 'center',
    alignItems: 'center'
  },
  topMiddle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  biggLetter: {
    fontSize: 30,
    lineHeight: 35.16,
    color: '#fff',
    textAlign: 'center',
  },
  smallerLetter: {
    fontSize: 14,
    lineHeight: 16.41,
    color: '#fff',
    letterSpacing: 2.5,
    marginLeft: 6,

  }
})
