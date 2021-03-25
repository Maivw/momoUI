import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({

  accounts: {
    flexDirection: "row",
    width: '100%',
    justifyContent: 'space-evenly'
  },
  account: {
    alignItems: 'center',
    paddingHorizontal: 22,
  },
  accountsWrap: {
    height: 124,
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    alignItems: 'center'
  },
  chuyenTienContainer: {
    width: '100%',
    height: 239,
    marginTop: 30,
    position: 'relative'
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginBottom: 7,
  },
  iconWrap: {
    position: 'absolute',
    left: 17
  },
  name: {
    lineHeight: 15.23,
    color: '#fff',
    fontSize: 13,
    marginBottom: 49,
  },
  top: {
    position: 'absolute',
    width: '100%',
    height: 61,
    marginTop: 0,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 18.75,
    alignSelf: 'center',
  },
  subTitle: {
    marginBottom: 13,
    fontSize: 14,
    lineHeight: 16.41,
    color: '#fff'
  }
})
