import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HeaderTitle = ({children}) => {
    return (
        <View style={styles.container} >
           
            <View style={styles.headerTextContainer}>
                <Text style={styles.heartTitle}>
                    {children}
                </Text>
            </View>

        </View>
    )
}

export default HeaderTitle

const styles = StyleSheet.create({
    container: {
        alignItems: "center", 
        marginBottom:20,
       
    },
    headerTextContainer:{
        borderBottomWidth: 1
    },
    heartTitle:{
        fontSize: 22, 
        fontWeight: "900"
    }
})
