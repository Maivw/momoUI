import * as React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import HomeHeader from "../components/Home/HomeHeader";
import { customeHomeStyles } from "./customeHomeStyles";
import {  MaterialCommunityIcons, FontAwesome5, FontAwesome ,Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <View style={customeHomeStyles.home}>
      <HomeHeader />
      <View style={customeHomeStyles.contentContainer}>
        <LinearGradient colors={['#3A4AA1','#4878CF']}  start={[1,0]}
    end={[0,1]} style={customeHomeStyles.stepsBar}>
          <View style={customeHomeStyles.option}>
            <MaterialCommunityIcons name="bank-transfer-in" size={40} color="white" />
            <Text  style={[customeHomeStyles.stepsBarText, {fontFamily: 'Roboto_400Regular'}]}>Chuyển tiền</Text>
          </View>
          <View style={customeHomeStyles.option}>
            <MaterialCommunityIcons name="bank-transfer-out" size={40} color="white" />
            <Text style={[customeHomeStyles.stepsBarText, {fontFamily: 'Roboto_400Regular'}]}>Rút tiền</Text>
          </View>
          <View style={customeHomeStyles.option}>
            <MaterialCommunityIcons name="piggy-bank" size={40} color="white" />
            <Text style={[customeHomeStyles.stepsBarText, {fontFamily: 'Roboto_400Regular'}]}>Tiền Quỹ</Text>
          </View>
          <View style={customeHomeStyles.option}>
            <MaterialCommunityIcons name="bank-transfer" size={40} color="white" />
            <Text  style={[customeHomeStyles.stepsBarText, {fontFamily: 'Roboto_400Regular'}]}>Thanh Toán</Text>
          </View>
        </LinearGradient>
        <View style={customeHomeStyles.chuyenTienContainer}> 
          <Text style={[customeHomeStyles.ctTitle, { fontFamily: 'Roboto_700Bold' }]}>CHUYỂN TIỀN</Text>
          <View style={customeHomeStyles.ctOptions}>
          <View style={customeHomeStyles.ctOption}>
            <View style={customeHomeStyles.ctIconWrap}>
              <FontAwesome name="truck" size={24} color="white" />
            </View>
            <View style={customeHomeStyles.ctTextWrap}>
              <Text style={customeHomeStyles.ctText}>
                Chuyển hàng
            </Text>
              <Text style={customeHomeStyles.ctText}>
              tới đại lý
            </Text>
            </View>
          </View>
          <View style={customeHomeStyles.ctOption}>
            <View style={customeHomeStyles.ctIconWrap}>
            <Entypo name="user" size={24} color="white" />
            </View>
            <View style={customeHomeStyles.ctTextWrap}>
              <Text style={customeHomeStyles.ctText}>
                Chuyển cho
            </Text>
              <Text style={customeHomeStyles.ctText}>
               khách hàng
            </Text>
            </View>
          </View>
          <View style={customeHomeStyles.ctOption}>
            <View style={customeHomeStyles.ctIconWrap}>
            <FontAwesome name="qrcode" size={24} color="white" />
            </View>
            <View style={customeHomeStyles.ctTextWrap}>
              <Text style={customeHomeStyles.ctText}>
                Nhận tiền
            </Text>
              <Text style={customeHomeStyles.ctText}>
               mã bí mật
            </Text>
            </View>
          </View>
          <View style={customeHomeStyles.ctOption}>
            <View style={customeHomeStyles.ctIconWrap}>
            <FontAwesome name="money" size={24} color="white" />
            </View>
            <View style={customeHomeStyles.ctTextWrap}>
              <Text style={customeHomeStyles.ctText}>
                Rút tiền
            </Text>
              <Text style={customeHomeStyles.ctText}>
               ở đại lý
            </Text>
            </View>
           </View>
          </View> 
        </View>
        <View style={customeHomeStyles.vienThongContainer}>
          <Text style={[customeHomeStyles.ctTitle, { fontFamily: 'Roboto_700Bold' }]}>VIỄN THÔNG</Text>
          <View style={customeHomeStyles.ctOptions}>
          <View style={customeHomeStyles.ctOption}>
            <View style={[customeHomeStyles.ctIconWrap, {backgroundColor: '#7F78CC'}]}>
            <FontAwesome5 name="money-check-alt" size={24} color="white" />
            </View>
            <View style={customeHomeStyles.ctTextWrap}>
              <Text style={customeHomeStyles.ctText}>
                Top up
            </Text>
            </View>
            </View>
            <View style={customeHomeStyles.ctOption}>
            <View style={[customeHomeStyles.ctIconWrap, {backgroundColor: '#B083D4'}]}>
            <FontAwesome5 name="wifi" size={24} color="white" />
            </View>
            <View style={customeHomeStyles.ctTextWrap}>
              <Text style={customeHomeStyles.ctText}>
                Internet
            </Text>
            </View>
            </View>
            <View style={customeHomeStyles.ctOption}>
            <View style={[customeHomeStyles.ctIconWrap, {backgroundColor: '#BB75BD'}]}>
            <MaterialCommunityIcons name="television-play" size={24} color="white"/>
            </View>
            <View style={customeHomeStyles.ctTextWrap}>
              <Text style={customeHomeStyles.ctText}>
                Truyền hình
            </Text>
            </View>
            </View>
            <View style={customeHomeStyles.ctOption}>
            <View style={[customeHomeStyles.ctIconWrap, {backgroundColor: '#F0899B'}]}>
            <Entypo name="old-mobile" size={24} color="white" />
            </View>
            <View style={customeHomeStyles.ctTextWrap}>
              <Text style={customeHomeStyles.ctText}>
                Điện thoại
            </Text>
            </View>
          </View>
          </View>
        </View>
        <View style={customeHomeStyles.dienNuocContainer}>
          <Text style={[customeHomeStyles.ctTitle, { fontFamily: 'Roboto_700Bold' }]}>ĐIỆN + NƯỚC</Text>
          <View style={customeHomeStyles.dnOptions}>
          <View style={customeHomeStyles.dnOption}>
            <View style={[customeHomeStyles.ctIconWrap, {backgroundColor: '#55B7E0'}]}>
            <MaterialCommunityIcons name="lightbulb-on" size={24} color="white" />
            </View>
            <View style={customeHomeStyles.ctTextWrap}>
              <Text style={customeHomeStyles.ctText}>
                Tiền điện
            </Text>
            </View>
            </View>
              <View style={customeHomeStyles.dnOption}>
              <View style={[customeHomeStyles.ctIconWrap, {backgroundColor: '#57B599'}]}>
              <MaterialCommunityIcons name="water-outline" size={24} color="white" />
              </View>
              <View style={customeHomeStyles.ctTextWrap}>
                <Text style={customeHomeStyles.ctText}>
                  Tiền nước
              </Text>
              </View>
            </View>
            <View style={customeHomeStyles.ctOption}></View>
            <View style={customeHomeStyles.ctOption}></View>
          </View>
        </View>
      </View>
    </View>
  );
}
