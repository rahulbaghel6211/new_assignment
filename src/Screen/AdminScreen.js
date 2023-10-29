import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const AdminScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{padding:20}}>
       <Text>Amelia, find Flight</Text>
       <Text style={{fontSize:20}}>Explore The World!</Text>
      </View>
      <View style={{flexDirection:'row',paddingHorizontal:30, paddingVertical:10,justifyContent:'space-around'}}>
        <View style={{backgroundColor:'white',paddingHorizontal:30,paddingVertical:10,borderRadius:10}}><Text>
        One Way
        </Text>
        </View>
        <View>
            <Text style={{backgroundColor:'#89e2c7',paddingHorizontal:30,paddingVertical:10,borderRadius:10}}> Round Trip</Text>
    </View>
      </View>
      <View style={{backgroundColor:'white',width:"90%",height:160,alignSelf:'center',marginTop:20}}>
        <View>
            <Text style={{paddingHorizontal:20,paddingVertical:10}}>from</Text>
            <Text style={{paddingHorizontal:20,fontSize:18}}>Skyhaven International Airport</Text>
        </View>
        <View
      style={{
        borderBottomWidth:2,
        borderBottomColor: 'black', // Change this to the desired color
        borderStyle: 'dotted',
          marginHorizontal:20
      }}
    />
    <View>
            <Text style={{paddingHorizontal:20,paddingVertical:10}}>To</Text>
            <Text style={{paddingHorizontal:20,fontSize:18}}>AeroGiobe Airfield</Text>
        </View>

      </View>
      <View style={{width:"100%",flexDirection:'row',flexWrap:'wrap',marginTop:20}}>
        <View style={{width:"46%",backgroundColor:'white',height:50,marginHorizontal:10,marginVertical:10,borderRadius:10}}>
            <Text>DEPARTURE</Text>
            <Text>June 14,2023</Text>
        </View>
        <View style={{width:"46%",backgroundColor:'white',height:50,marginVertical:10,borderRadius:10}}>
        <Text>RETURN</Text>
            <Text>June 22,2023</Text>
        </View>
        <View style={{width:"46%",backgroundColor:'white',height:50,marginHorizontal:10,marginVertical:10,borderRadius:10}}>
        <Text> ADULTS</Text>
            <Text>2 Adults</Text>
        </View>
        <View style={{width:"46%",backgroundColor:'white',height:50,marginVertical:10,borderRadius:10}}>
        <Text>INFANTS</Text>
            <Text>1 BABY</Text>
        </View>

      </View>
      <View style={{width:"90%",alignSelf:'center',height:80,marginTop:20,backgroundColor:'white'}}>
        <Text style={{paddingHorizontal:20,paddingVertical:10}}>CLASS</Text>
        <View style={{flexDirection:'row',}}>
          <Text style={{paddingHorizontal:20,borderWidth:0.5,marginRight:20,borderRadius:10,paddingVertical:5,marginLeft:10}}>ECONOMY</Text>
          <Text style={{paddingHorizontal:20,borderWidth:0.5,marginRight:20,borderRadius:10,paddingVertical:5,backgroundColor:'black',color:"white"}}> BUSINESS </Text>
          <Text style={{paddingHorizontal:20,borderWidth:0.5,marginRight:20,borderRadius:10,paddingVertical:5}}> VIP</Text>
        </View>
         
      </View>
      <View style={{backgroundColor:"#58d4ae",padding:10,margin:10,borderRadius:30}}>
       <Text style={{textAlign:'center',fontWeight:'700',color:'white'}}>Search</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
});

export default AdminScreen;
