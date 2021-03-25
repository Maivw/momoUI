import * as React from 'react';
import { Text, View, Image, FlatList} from 'react-native';
import { styles } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
const accountsData = [
  {id :'1', imageUri: 'https://pyxis.nymag.com/v1/imgs/0fd/e01/0ce0d5381e9930e3b567edfde650f7f69f-taylor-swift.rsquare.w1200.jpg', name: 'Hungnt97'},
  {id :'2', imageUri: 'https://www.medianama.com/wp-content/uploads/2018/04/Facebook-shadow.jpg.jpg', name: 'gNntt8'},
  {id :'3', imageUri: 'https://www.medianama.com/wp-content/uploads/2018/04/Facebook-shadow.jpg.jpg', name: 'LinhHn'},
  {id :'4', imageUri: 'https://www.medianama.com/wp-content/uploads/2018/04/Facebook-shadow.jpg.jpg', name: 'TrungVu'},
  {id :'5', imageUri: 'https://www.medianama.com/wp-content/uploads/2018/04/Facebook-shadow.jpg.jpg', name: 'HaiHa56'},
  {id :'6', imageUri: 'https://www.medianama.com/wp-content/uploads/2018/04/Facebook-shadow.jpg.jpg', name: 'uuuHa56'},
]

export default function ChuyenTienHeader() {
  return (
    <LinearGradient colors={['#465CD1','#6FB9F0']}  start={[1,0]}
    end={[0,1]} style={styles.chuyenTienContainer}>
      <View style={styles.top}>
        <View style={styles.iconWrap}>
        <AntDesign name="arrowleft" size={35} color="white" />
        </View>
        <View>
          <Text style={[styles.title, {fontFamily:'Roboto_500Medium'}]}>CHUYỂN TIỀN</Text>
        </View>
      </View>
      <View style={styles.accountsWrap}>
        <Text style={[styles.subTitle, {fontFamily:'Roboto_500Medium'}]}>Giao dịch gần đây</Text>
        <View >
          <FlatList data={accountsData}
            renderItem={({ item }) => (
              
          <View style={styles.account}>
            <Image style={styles.image} source={{ uri: item.imageUri }}/>
                <Text style={[styles.name, { fontFamily: 'Roboto_400Regular' }]}>{ item.name}</Text>
          </View>
            )}
            keyExtractor={item => item.id}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
  </LinearGradient>
  );
}
