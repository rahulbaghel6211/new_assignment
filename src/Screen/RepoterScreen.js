import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const ReportScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
           <View style={{ backgroundColor: "#58d4ae", padding: 10, margin: 10, borderRadius: 30 }}>
               <Text style={{ textAlign: 'center', fontWeight: '700', color: 'white' }}>June 14, 2023  *  15:00</Text>
           </View>

           <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "90%", alignSelf: 'center' }}>
               <View>
                   <Text>2 People</Text>
               </View>
               <View>
                   <Text>6045</Text>
               </View>
               <View>
                   <Text>  A4, B4   </Text>
               </View>
           </View>

           <View style={{ width: "80%", alignSelf: 'center', borderWidth: 15, height: 500, marginTop: 30, borderRadius: 20 }}>
               <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                   <View>
                       <Text style={{ color: 'black' }}>Blaze WAVE</Text>
                       <Text style={{ color: 'grey' }}>(Business Class)</Text>
                   </View>
                   <View>
                       <Text style={{ color: 'black' }}>Waggon</Text>
                       <Text style={{ color: 'grey' }}>102</Text>
                   </View>
               </View>
               <View style={{ flexDirection: 'row' }}>
                   <View style={{ width: "42%", flexDirection: 'row', flexWrap: 'wrap' }}>
                       <View style={{ width: "48%", padding: 3, height: 60 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>A</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>B</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>A</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>B</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>A</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>B</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>A</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>B</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>A</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>B</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>A</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>B</Text>
                       </View>
                   </View>
                   <View style={{ width: "15%", flexDirection: 'row', flexWrap: 'wrap' }}>
                       <View style={{ width: "100%", height: 60 }}>
                           <Text style={{ backgroundColor: '#f3f9ff', paddingVertical: 20, paddingHorizontal: 10 }}>1</Text>
                       </View>
                       <View style={{ width: "100%", height: 60 }}>
                           <Text style={{ backgroundColor: '#f3f9ff', paddingVertical: 20, paddingHorizontal: 10 }}>2</Text>
                       </View>
                       <View style={{ width: "100%", height: 60 }}>
                           <Text style={{ backgroundColor: '#f3f9ff', paddingVertical: 20, paddingHorizontal: 10 }}>3</Text>
                       </View>
                       <View style={{ width: "100%", height: 60 }}>
                           <Text style={{ backgroundColor: '#f3f9ff', paddingVertical: 20, paddingHorizontal: 10 }}>4</Text>
                       </View>
                       <View style={{ width: "100%", height: 60 }}>
                           <Text style={{ backgroundColor: '#f3f9ff', paddingVertical: 20, paddingHorizontal: 10 }}>5</Text>
                       </View>
                       <View style={{ width: "100%", height: 60 }}>
                           <Text style={{ backgroundColor: '#f3f9ff', paddingVertical: 20, paddingHorizontal: 10 }}>6</Text>
                       </View>
                   </View>
                   <View style={{ width: "42%", flexDirection: 'row', flexWrap: 'wrap' }}>
                       <View style={{ width: "47%", padding: 3, height: 60 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>C</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>D</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>C</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>D</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>C</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>D</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>C</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>D</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>C</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>D</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>C</Text>
                       </View>
                       <View style={{ width: "48%", height: 60, padding: 3 }}>
                           <Text style={{ backgroundColor: 'grey', padding: 20 }}>D</Text>
                       </View>
                   </View>
               </View>
           </View>

           <View style={{ backgroundColor: "#58d4ae", padding: 10, margin: 10, borderRadius: 30 }}>
               <Text onPress={()=>navigation.navigate('Reporter Ticket')} style={{ textAlign: 'center', fontWeight: '700', color: 'white' }}>PROCESSED </Text>
           </View>
       </View>
    );
};

const styles = StyleSheet.create({
    container: {
      
    },
    wrapper: {
        width: '80%'
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
    },
    link: {
        color: 'blue'
    },
    error: {
        color: 'red',
        marginBottom: 10,
    }
});

export default ReportScreen;
