import * as React from 'react';
import { StyleSheet, View, Text, TextInput, FlatList} from 'react-native';
import { customeStyles } from "./chuyenTienStyles";
import {  MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import ChuyenTienHeader from '../components/ChuyenTien/ChuyenTIenHeader';

const bills = {
  row1: [{ id: '1', value: '1.000.0000' }, { id: '2', value: '2.000.0000' }, { id: '3', value: '3.000.0000' }] ,
  row2: [{ id: '4', value: '4.000.0000' }, { id: '5', value: '5.000.0000' }, { id: '6', value: '10.000.0000' }] 
  
};

export default function ChuyenTienScreen() {
  return (
    <View style={customeStyles.container}>
      <ChuyenTienHeader />
      <View style={customeStyles.topContainer}>
        <View style={customeStyles.topContainerLeft}>
          <TextInput style={[customeStyles.textInput, {fontFamily: 'Roboto_400Regular'}]}/>
        </View>
        <View style={customeStyles.topContainerRight}>
          <MaterialIcons name="contact-phone" size={24} color="#5171BD" />
        </View>
      </View>
      <View style={customeStyles.detailContainer}>
        <Text style={[customeStyles.formTitle, { fontFamily: 'Roboto_500Medium' }]}>Số tiền chuyển</Text>
        <View style={customeStyles.totalWrap}>
          <TextInput style={[customeStyles.totalInput, { fontFamily: 'Roboto_400Regular' }]} />
          <Text style={[customeStyles.currency, { fontFamily: 'Roboto_500Medium' }]}>VNĐ</Text>
        </View>
        <View style={customeStyles.moneyBills}>
          <FlatList
            data={bills.row1}
            renderItem={({ item }) => (
              <View style={customeStyles.moneyBill}>
                <Text style={[customeStyles.moneyBillText,  { fontFamily: 'Roboto_500Medium' }]}>{item.value}</Text>
              </View>
            )}
            horizontal ={true}
          />
          <FlatList
            data={bills.row2}
            renderItem={({ item }) => (
              <View style={customeStyles.moneyBill}>
                <Text style={[customeStyles.moneyBillText,  { fontFamily: 'Roboto_500Medium' }]}>{item.value}</Text>
              </View>
            )}
            horizontal ={true}
          />
        </View>
        <Text style={[customeStyles.formTitle, { fontFamily: 'Roboto_500Medium', marginTop: 10, marginBottom: 5 }]}>Nội dung tiền chuyển</Text>
        <View>
          <TextInput multiline={true} style={[customeStyles.textArea, { fontFamily: 'Roboto_400Regular' }]}/>
        </View>
      </View>
      <View style={customeStyles.buttonContainer}>
        <Text style={[customeStyles.textButton, {fontFamily: 'Roboto_400Regular'}]}>Thực hiện giao dịch</Text>
      </View>
    </View>
  )
}
