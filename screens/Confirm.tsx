import * as React from 'react';
import { StyleSheet, View, Text, TextInput, FlatList} from 'react-native';
import { styles } from "./ConfirmStyles";
import {  MaterialIcons, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function ConfirmScreen() {
  return (
    <LinearGradient colors={['#465CD1','#6FB9F0']}  start={[0,1]}
      end={[1, 1]} style={styles.cofirmContainer}>
      <View style={styles.top}>
        <View style={styles.iconWrap}>
        <AntDesign name="arrowleft" size={35} color="white" />
        </View>
        <Text style={[styles.title, {fontFamily: 'Roboto_500Medium'}]}>TRANSACTION CONFIRM</Text>
      </View>
      <View style={styles.middle}>
        <View style={styles.middleLeft}>
          <Text style={[styles.textLeft, {fontFamily: 'Roboto_500Medium'}]}>Transaction Type</Text>
          <Text style={[styles.textLeft, {fontFamily: 'Roboto_500Medium'}]}>Receive</Text>
          <Text style={[styles.textLeft, {fontFamily: 'Roboto_500Medium'}]}>To</Text>
          <Text style={[styles.textLeft, {fontFamily: 'Roboto_500Medium'}]}>Amount</Text>
          <Text style={[styles.textLeft, {fontFamily: 'Roboto_500Medium'}]}>Fee</Text>
          <Text style={[styles.textLeft, {fontFamily: 'Roboto_500Medium'}]}>Discount</Text>
          <Text style={[styles.textLeft, {fontFamily: 'Roboto_500Medium'}]}>Description</Text>
          <Text style={[styles.textLeft, {fontFamily: 'Roboto_500Medium'}]}>Balance</Text>
        </View>
        <View style={styles.middleRight}>
        <Text style={[styles.textRight, {fontFamily: 'Roboto_400Regular'}]}>EWallet - EWallet</Text>
        <Text style={[styles.textRight, {fontFamily: 'Roboto_400Regular'}]}>Hoàng Văn Sơn</Text>
        <Text style={[styles.textRight, {fontFamily: 'Roboto_400Regular'}]}>098746573</Text>
        <Text style={[styles.textRight, {fontFamily: 'Roboto_400Regular', color: '#5F93E4'}]}>1000$</Text>
        <Text style={[styles.textRight, {fontFamily: 'Roboto_400Regular'}]}>1.0</Text>
        <Text style={[styles.textRight, {fontFamily: 'Roboto_400Regular'}]}>10%</Text>
        <Text style={[styles.textRight, {fontFamily: 'Roboto_400Regular'}]}>Shipping fee</Text>
        <Text style={[styles.textRight, {fontFamily: 'Roboto_400Regular'}]}>$500.000</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={[styles.inputPinText, { fontFamily: 'Roboto_400Regular'}]}>
          Please input your Pin to complete Purchase
        </Text>
        <View style={styles.circlesWrap}>
          <View style={styles.circleWrap}>
            <View style={styles.circleOuter}/>
            <View style={styles.circleInner}/>
          </View>
          <View style={styles.circleWrap}>
            <View style={styles.circleOuter}/>
            <View style={styles.circleInner}/>
          </View>
          <View style={styles.circleWrap}>
            <View style={styles.circleOuter}/>
            <View style={styles.circleInner}/>
          </View>
          <View style={styles.circleWrap}>
            <View style={styles.circleOuter}/>
            <View style={styles.circleInner}/>
          </View>
          <View style={styles.circleWrap}>
            <View style={styles.circleOuter}/>
            <View style={styles.circleInner}/>
          </View>
          <View style={styles.circleWrap}>
            <View style={styles.circleOuter}/>
            <View style={styles.circleInner}/>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={[styles.textButton, { fontFamily: 'Roboto_400Regular' }]}>Chuyển tiền</Text>
        </View>
        <Text style={[styles.fogetText,  { fontFamily: 'Roboto_400Regular' }]}>Forget the pin?</Text>
      </View>
    </LinearGradient>
  )
}
