import React,{useState} from 'react';
import { View, Button, StyleSheet, Image, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

import BG from '../assets/BG.png';
import QR from '../assets/QR.png'

const MatchJudgmentScreen = ({ navigation }) => {
  const handleMatchJudgment = () => {
    navigation.navigate('MatchJudgmentScreen');
  };

  const handleHistory = () => {
    navigation.navigate('HistoryScreen');
  };

  const handleProfile = () => {
    navigation.navigate('ProfileScreen');
  };

  const handlecamare = () => {
    console.log('camera....');
    {Camerastate ? (Setcamerastate(0)):(Setcamerastate(1))};
  };

  const [Camerastate, Setcamerastate] = useState(0);

  const device = useCameraDevice('back')
  const { hasPermission, setPermission } = useCameraPermission()

  if (!hasPermission) return <PermissionsPage />;
  if (device == null) return <NoCameraDeviceError />;

  return (
    <View style={styles.root}>
      {/* <View style = {styles.root}> */}
      {Camerastate ? (
        <Camera
          style={styles.camera}
          device={device}
          isActive={true}
        />
      ) : (
        <Image style={styles.imgChild} source={QR} />
      )}
      {/* </View> */}
      <TouchableOpacity 
        style = {styles.btnstyle} 
        onPress={handlecamare}
      >
        <Text style={styles.textstyle}>二维码扫描</Text>
      </TouchableOpacity>
      <View style={styles.btnChild}>
        <Button style={styles.btnstyle} title="比赛判决" onPress={handleMatchJudgment} />
        <Button title="历史记录" onPress={handleHistory} />
        <Button title="个人中心" onPress={handleProfile} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center', // 居中放置子视图
    alignItems: 'center', // 居中放置子视图
  },
  textstyle:{
    fontSize:25,
    color:'white',
  },
  btnstyle:{
    backgroundColor:'blue',
    borderRadius:5,
  },
  btnChild: {
    flexDirection:'row',
    position: 'absolute', // 使用绝对定位
    justifyContent: 'space-between', // 左右填充
    paddingHorizontal: 100, // 左右填充间距
    bottom: 50,
    width: '100%',
    height: 40,
  },
  imgChild: {
    width: 500,
    height: 500,
  },
  camera: {
    width: 550,
    height: 550,
  },
});

export default MatchJudgmentScreen;
