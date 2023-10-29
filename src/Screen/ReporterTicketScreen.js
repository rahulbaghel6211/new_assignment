import React from "react";
import { StyleSheet, Text, View, ScrollView,Image } from "react-native";
import scan from "../Image/scan.png"

const ReporterTicketScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',paddingHorizontal:30, paddingVertical:10,justifyContent:'space-around'}}>
        <View style={{backgroundColor:'white',paddingHorizontal:30,paddingVertical:10,borderRadius:10}}><Text>
        Valid
        </Text>
        </View>
        <View>
            <Text style={{backgroundColor:'#89e2c7',paddingHorizontal:30,paddingVertical:10,borderRadius:10}}> Expired</Text>
    </View>
      </View>
      <View style={{backgroundColor:'white',width:"90%",height:220,alignSelf:'center',marginTop:20}}>
        <View>
            <Text style={{paddingHorizontal:20,paddingVertical:10,fontSize:18,color:'black'}}>Parents</Text>
            <Text style={{paddingHorizontal:20,}}>new york monthly pass</Text>
        </View>
        <View style={{justifyContent:'center'}}>
          <Text style={{textAlign:'center'}}>valid till</Text>
          <Text style={{fontSize:30,color:'black',textAlign:'center'}}>19.12.2023</Text>
        </View>
        <View style={{width:"100%",flexDirection:'row',flexWrap:'wrap',marginTop:20}}>
        <View style={{width:"46%",backgroundColor:'white',height:40,marginHorizontal:10,marginVertical:10,borderRadius:30,borderWidth:1}}>
            <Text style={{textAlign:'center',marginTop:10}}>EXPORT TICKET</Text>
        </View>
        <View style={{width:"46%",backgroundColor:'white',height:40,marginVertical:10,borderRadius:30,borderWidth:1,}}>
        <Text style={{textAlign:'center',marginTop:10}}>DETAILS</Text>
        </View>
      </View>
      </View>
      <View style={{alignSelf:'center',width:"100%"}}>
        <View>
        <Image source={scan} style={{ width:"100%", height: 200 }} />
        </View>
      </View>
      <View style={{backgroundColor:"#58d4ae",padding:10,margin:10,borderRadius:30}}>
       <Text style={{textAlign:'center',fontWeight:'700',color:'white'}}>Scan QR FOR RIDE</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
});

export default ReporterTicketScreen;
