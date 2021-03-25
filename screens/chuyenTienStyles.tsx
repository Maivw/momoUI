import { StyleSheet } from 'react-native';
export const customeStyles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    marginTop: 50,
    position: 'relative',
    alignItems: 'center'
  },
  topContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 241,
    width: '100%'
  },
  topContainerLeft: {
    marginLeft: 27,
    height: 55,
    width: 289,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowOffset: { width: 2, height: 12},
    shadowColor: 'rgba(18, 22, 61, 0.1)',
    shadowOpacity: 1,
    shadowRadius: 12,
  },
  topContainerRight: {
    width: 55,
    height: 55,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowOffset: { width: 2, height: 12},
    shadowColor: 'rgba(18, 22, 61, 0.1)',
    shadowOpacity: 1,
    shadowRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: '100%',
    borderRadius: 8,
    paddingLeft: 20,
    paddingVertical: 18,
    color: '#4A4A4A',
    fontSize: 16,
    lineHeight: 18.75
  },

  detailContainer: {
    shadowOffset: { width: 2, height: 4},
    shadowColor: 'rgba(18, 22, 61, 0.1)',
    shadowOpacity: 1,
    shadowRadius: 8,
    width: 354,
    height: 337,
    borderRadius: 8,
    marginLeft: 27,
    position: 'absolute',
    top: 306,
    backgroundColor: '#fff'
  },
  formTitle: {
    fontSize: 13,
    color: '#7D8DAD',
    lineHeight: 15.23,
    marginLeft: 21,
    marginTop: 20
  },
  totalWrap: {
    width: 317,
    height: 40,
    borderWidth: 2,
    borderColor: "#EBF0F6",
    marginLeft: 19,
    marginTop: 4,
    borderRadius: 4,
  },
  totalInput: {
    width: '100%',
    height: '100%',
    paddingLeft: 13,
    fontSize: 16,
    lineHeight: 18.75,
    color: '#4A4A4A'
  },
  currency: {
    color: '#C0CFED',
    fontSize: 14,
    lineHeight: 16.41,
    position: 'absolute',
    right: 11,
    top: 12
  },
  moneyBills: {
    width: 317,
    height: 131,
    marginLeft: 19,
  },
  moneyBill: {
    flexDirection: 'row',
    width: 98,
    height: 33,
    marginTop: 21,
    marginRight: 10,
    backgroundColor: '#F6F8F9',
    borderRadius: 4,
  },
  moneyBillText: {
    color: '#616F8C',
    fontSize: 14,
    lineHeight: 16.41,
    marginTop: 9,
    marginLeft: 15,
    marginBottom: 7
  },
  textArea: {
    width: 315,
    height: 77,
    marginBottom: 28,
    marginLeft: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#EBF0F6",
    fontSize: 16,
    color: '#4A4A4A',
    paddingLeft: 13,
    lineHeight: 18.75,
    paddingTop: 13
  },
  buttonContainer: {
    backgroundColor: "#5F93E4",
    position: 'absolute',
    marginTop: 653,
    height: 46,
    width: 242,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 6, height: 8},
    shadowColor: 'rgba(14, 41, 82, 0.15)',
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  textButton: {
    color: '#fff',
    fontSize: 16
  }

})
