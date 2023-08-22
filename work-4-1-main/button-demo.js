import react from 'react'
import {View, Text, StyleSheet, Alert, Button} from 'react-native'

export default function ButtonDemo(){

    const onPressButton2 = () => {
        Alert.alert('คุณกดปุ่มที่ 2')
    }
    const onPressButton3 = () => {
        Alert.alert(
            'การลบข้อมูล',
            'ต้องการลบข้อมูลนี้ใช่ไหม',
            [
                {
                    text:'ใช่',
                    onPress: () => {}
                },
                {
                    text:'ยกเลิก',
                    onPress: () => {}
                },
                {
                    text:'ภายหลัง',
                    onPress: () => {}
                }
            ]
        )
    }

return(
    <View style={styles.container}>
        <View style={styles.item}>
        <Button title="ปุ่มที่ 1" color="red" onPress={ () => Alert.alert('คุณกดปุ่ม')} />
        </View>
        <Button title="ปุ่มที่ 2" color="violet" onPress={ onPressButton2 } />
        <Button title="ปุ่มที่ 3" color="blue" onPress={ onPressButton3 } />
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        marginTop:50,
        alignItems:'center'
    },
    item:{
        width: 150,
        marginBottom:15
    }
})