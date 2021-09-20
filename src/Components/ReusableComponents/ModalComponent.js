import React, { useState } from 'react'
import { Button,  StyleSheet, Text, View, Modal, Pressable, Alert, TouchableOpacity } from 'react-native'

//icon
import { AntDesign } from '@expo/vector-icons';

const ModalComponent = ({children, animationType, transparent, visible}) => {

  const [modalVisible, setModalVisible] = useState(false)

    return (
      <View style={styles.centeredView}>
                
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
        >
          
          <View style={styles.centeredView}>
            
            <View style={styles.modalView}>
            <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)} style={styles.closeIconView} >
              <AntDesign name="closecircle" size={24} color="red" />
              </TouchableOpacity>
             
            </View>
          </View>
            
        </Modal>
      
        <View style={{width: "100%"}}>
            {children}
        </View>
      </View>
    );
}

export default ModalComponent

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: "center",
        marginTop: 22,
        paddingTop: 100
      },
      closeIconView:{
        top: 20, 
        position: "absolute", 
        right: 20
      },
      modalView: {
        height: "80%",
        width: "80%",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})
