import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Swiper from "react-native-swiper";
import { globalStyles } from "../../style/globalStyles";
import { appColor } from "../../contstants/appColor";
import { appInfo } from "../../contstants/appInfo";

const OnbroadingScreen = ({ navigation }: any) => {
  const [index, setIndex] = useState(0);

  return (
    <View style={[globalStyles.container]}>
      <Swiper
        style={{}}
        loop={false}
        onIndexChanged={(num) => setIndex(num)}
        index={index}
        activeDot={<View style={{ backgroundColor: appColor.white, width: 8, height: 8, borderRadius: 4, margin: 3 }} />}
      >
        <Image
          source={require("../../assets/images/onboarding-1.png")}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../../assets/images/onboarding-1.png")}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: "cover",
          }}
        />
        <Image
          source={require("../../assets/images/onboarding-1.png")}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: "cover",
          }}
        />
      </Swiper>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 20,
          position: "absolute",
          bottom: 20,
          right: 20,
          left: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.text}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2 ? setIndex(index + 1) : navigation.navigate("LoginScreen")
          }
        >
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnbroadingScreen;

const styles = StyleSheet.create({
  text: {
    color: appColor.white,
    fontSize: 16,
    fontWeight: "500",
  },
});
