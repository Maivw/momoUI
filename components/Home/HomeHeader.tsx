import * as React from 'react';
import { Text, View, Image} from 'react-native';
import { styles } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome ,Entypo} from '@expo/vector-icons'; 

export default function HomeHeader() {
  return (
    <LinearGradient colors={['#465CD1','#6FB9F0']}  start={[1,0]}
    end={[0,1]} style={styles.headerContainer}>
      <View style={styles.top}>
        <View>
          <View style={styles.lineOne}/>
          <View style={styles.lineTwo} />
          <View style={styles.lineThree}/>
        </View>
        <View style={styles.topMiddle}>
          <Image style={styles.image} source={{ uri: 'https://pyxis.nymag.com/v1/imgs/0fd/e01/0ce0d5381e9930e3b567edfde650f7f69f-taylor-swift.rsquare.w1200.jpg' }}/>
          <Text style={[styles.smallerLetter, {fontFamily: 'Roboto_700Bold'}]}>0908076705</Text>
        </View>
        <View style={styles.icons}>
          <FontAwesome name="bell" size={20} color="white" />
          <Entypo style={styles.iconUser} name="add-user" size={20} color="white" />
        </View>
      </View>
      <View style={styles.divider} />
      <View>
        <Text style={[styles.biggLetter, {fontFamily: 'Roboto_300Light'}]}>659.480đ</Text>
      </View>
  </LinearGradient>
  );
}
