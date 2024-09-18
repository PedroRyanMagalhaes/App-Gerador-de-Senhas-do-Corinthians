import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function ModalPassword(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,0,0,0.1)',
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }

})