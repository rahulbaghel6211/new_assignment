import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const TicketScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "95%",
          height: 150,
          backgroundColor: "#58d4ae",
          borderRadius: 10,
          justifyContent:'center',
          alignItems:'center'
        }}>
            <View style={{width: "80%",
          height:40,
          backgroundColor: "#89e2c7",
          borderRadius: 10,
          flexDirection: "row",
          justifyContent:'center'
          }}>
            <Text style={{textAlign:'center',color:'white',marginTop:14}}>30 oct 2023   *   2Adults </Text>

            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:"100%",padding:20}}>
                <View>
                    <Text>NYC</Text>
                    <Text>New york</Text>
                </View>
                <View>
                    <Text>LON</Text>
                    <Text>London</Text>
                </View>
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
      <View style={{height:450}}>
      <ScrollView
        style={{marginTop:30}}
      >
        <View style={{ width:"90%", backgroundColor: "white", height: 120 ,marginLeft:20,borderRadius:10,marginBottom:20}}>
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
        <View style={{ width:"90%", backgroundColor: "white", height: 120 ,marginLeft:20,borderRadius:10,marginBottom:20}}>
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
        <View style={{ width:"90%", backgroundColor: "white", height: 120 ,marginLeft:20,borderRadius:10,marginBottom:20}}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TicketScreen;
