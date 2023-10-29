import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const UserScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "95%",
          height: 150,
          backgroundColor: "#58d4ae",
          borderRadius: 10,
          marginTop: 10,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              width: "95%",
              height: 100,
              backgroundColor: "#89e2c7",
              borderRadius: 10,
            }}
          ></View>
        </View>
        <View style={{ width: "50%", marginTop: 20 }}>
          <Text style={{ fontSize: 18, color: "white" }}>Get DISCOUNT UP TO</Text>
          <Text style={{ fontSize: 32, color: "white" }}>45%</Text>
          <Text style={{ fontSize: 16, color: "white" }}>
            Your local plane trip
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "space-between",
          marginTop: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: 60,
            height: 60,
            justifyContent: "center",
          }}
        >
          <Text onPress={()=> navigation.navigate('Ticket')} style={{ marginLeft: 15 }}>plane</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: 60,
            height: 60,
            marginLeft: 10,
            justifyContent: "center",
          }}
        >
          <Text onPress={()=> navigation.navigate('Ticket')} style={{ marginLeft: 15 }}>Train</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: 60,
            height: 60,
            marginLeft: 10,
            justifyContent: "center",
          }}
        >
          <Text onPress={()=> navigation.navigate('Ticket')} style={{ marginLeft: 15 }}>Bus</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: 60,
            height: 60,
            marginLeft: 10,
            justifyContent: "center",
          }}
        >
          <Text onPress={()=> navigation.navigate('Ticket')} style={{ marginLeft: 15 }}>Ferry</Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: 60,
            height: 60,
            marginLeft: 10,
            justifyContent: "center",
          }}
        >
          <Text onPress={()=> navigation.navigate('Ticket')} style={{ marginLeft: 15 }}>More</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "90%",
          marginTop: 30,
        }}
      >
        <View>
          <Text style={{ fontSize: 20 }}>Upcoming Trip</Text>
          <Text>You Have 2 upcoming tickets</Text>
        </View>
        <View>
          <Text>See All</Text>
        </View>
      </View>
      <View style={{height:150}}>
      <ScrollView
        horizontal={true} // Set horizontal to true for horizontal scrolling
        contentContainerStyle={{ flexDirection: "row" }}
        style={{marginTop:30}}
      >
        <View style={{ width:250, backgroundColor: "white", height: 120 ,marginLeft:30,borderRadius:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignContent:'space-between',width:"100%"}}>
            <Text>plane</Text> 
            <Text>3Seats</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignContent:'space-between',width:"100%"}}>
            <View style={{width:"50%"}}>
            <Text>NYC</Text> 
            <Text>15:00</Text>
            <Text>Oct 30 2023</Text>
            </View>
            <View style={{width:"50%"}}>
            <Text>CGK</Text> 
            <Text>18:30</Text>
            <Text>Oct 30 2023</Text>
            </View>
        </View>
        </View>
        <View style={{ width:250, backgroundColor: "white", height: 120 ,marginLeft:30,borderRadius:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignContent:'space-between',width:"100%"}}>
            <Text>plane</Text> 
            <Text>3Seats</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignContent:'space-between',width:"100%"}}>
            <View style={{width:"50%"}}>
            <Text>NYC</Text> 
            <Text>15:00</Text>
            <Text>Oct 30 2023</Text>
            </View>
            <View style={{width:"50%"}}>
            <Text>CGK</Text> 
            <Text>18:30</Text>
            <Text>Oct 30 2023</Text>
            </View>
        </View>
        </View>
        <View style={{ width:250, backgroundColor: "white", height: 120 ,marginLeft:30,borderRadius:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignContent:'space-between',width:"100%"}}>
            <Text>plane</Text> 
            <Text>3Seats</Text>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignContent:'space-between',width:"100%"}}>
            <View style={{width:"50%"}}>
            <Text>NYC</Text> 
            <Text>15:00</Text>
            <Text>Oct 30 2023</Text>
            </View>
            <View style={{width:"50%"}}>
            <Text>CGK</Text> 
            <Text>18:30</Text>
            <Text>Oct 30 2023</Text>
            </View>
        </View>
        </View>
      </ScrollView>
      </View>
      <View style={{height:100,}}>
       <View>
        <Text style={{fontSize:20,}}>
            Top Destination
        </Text>
       </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UserScreen;
