import React ,{useState}from 'react'
import { StyleSheet, Text, View,Dimensions} from 'react-native'
import { Route1,Route2,Route3,Route4,Route5,Route6,Route7,Route8 } from './MenuTabs';
import { restaurantsData,menu } from '../global/Data';
const SCREEN_WIDTH = Dimensions.get('window').width
import { TabView,TabBar } from 'react-native-tab-view';
import {colors} from '../global/styles'
import { Icon} from 'react-native-elements';





const styles = StyleSheet.create({
    scene: {
        flex: 1,
      },
    
      container:{flex:1,
                 top:0,
                 left:0,
                 right:0
         },
    
    view1:{flexDirection:"row",
    alignItems:"center",
    padding:10,
    backgroundColor:colors.buttons,
    top:0,
    left:0,
    right:0,
    paddingTop:25
    },
    
    text1:{fontWeight:"bold",
          marginLeft:40,
          color:colors.black,
          fontSize:18
        },
    
    view2:{marginTop:5,
          paddingBottom:20
        },
    
    tab:{ paddingTop :0,
          backgroundColor:colors.buttons,
          justifyContent:"space-between",
         // alignItems:"center"
          },
    
    tabContainer:{ alignItems:'center',
          alignContent:'center',
          justifyContent:'center',
          },
    
    tabLabel:{fontWeight:'bold',
          color: colors.cardbackground
          },
      
    tabStyle:{width:SCREEN_WIDTH/4,
              maxHeight:45,
            },
    scene2: { backgroundColor: '#673ab7' } 

})
