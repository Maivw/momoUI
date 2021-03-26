import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  cofirmContainer: {
    height: '100%'
  },
  iconWrap: {
    position: 'absolute',
    left: 17,
    top: 104
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },
  middle: {
    height: 255,
    width: 360,
    backgroundColor: '#fff',
    marginLeft: 27,
    borderRadius: 8,
    marginTop: 14,
    shadowOffset: { width: 0, height: 12},
    shadowColor: 'rgba(69, 97, 168, 0.25)',
    shadowOpacity: 1,
    shadowRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  textLeft: {
    fontSize: 14,
    lineHeight: 26.25,
    color: '#7D8DAD'
  },
  textRight: {
    fontSize: 14,
    color: '#4A4A4A',
    letterSpacing: 0.25,
    lineHeight: 26.25,
  },
  middleLeft: {
    width: 114,
    height: 201.38,
    marginLeft: 36,
    marginTop: 24.18,
    marginBottom: 29.44,
    justifyContent: 'space-between',
  },
  middleRight: {
    width: 117,
    height: 201.38,
    marginRight: 36,
    marginTop: 24.18,
    marginBottom: 29.44,
    justifyContent: 'space-between',

  },
  bottom: {
    height: 263,
    width: 360,
    backgroundColor: '#fff',
    marginLeft: 27,
    borderRadius: 8,
    marginTop: 14,
    shadowOffset: { width: 0, height: 12},
    shadowColor: 'rgba(69, 97, 168, 0.25)',
    shadowOpacity: 1,
    shadowRadius: 12,
    alignItems: 'center',
    position: 'relative'
  },
  buttonContainer: {
    backgroundColor: "#5F93E4",
    position: 'absolute',
    bottom: 79,
    height: 46,
    width: 242,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 6, height: 8},
    shadowColor: 'rgba(14, 41, 82, 0.15)',
    shadowOpacity: 1,
    shadowRadius: 8,
    marginLeft: 54,
  },
  textButton: {
    color: '#fff',
    fontSize: 16
  },
  fogetText: {
    color: '#5F93E4',
    position: 'absolute',
    bottom: 38,
  },
  title: {
    marginTop: 114,
    color: '#fff',
    fontSize: 16,
    lineHeight: 18.75,
  },
  circlesWrap: {
    marginTop: 30,
    marginHorizontal: 45,
    width: 221,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  circleWrap: {
    height: 32,
  },
  circleOuter: {
    height: 32,
    width: 32,
    backgroundColor: '#F1F6FB',
    borderRadius: 16,
    alignItems:'center'
  },
  circleInner: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#27AE60',
    position: 'absolute',
    top: 6,
    left: 6
  },
  inputPinText: {
    marginLeft: 45,
    marginRight: 45,
    color: '#7D8DAD',
    fontSize: 13,
    lineHeight: 15.23,
    width: '100%',
    textAlign: 'center',
    marginTop: 19,
  }

})
