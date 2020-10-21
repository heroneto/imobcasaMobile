import React from 'react'
import { View, Text, PickerProperties } from 'react-native'
import styles from './styles'
import { Picker, PickerIOS } from '@react-native-community/picker';


interface ItensProps {
    label: string,
    value: string,
    id: string
}


interface MiddlePickerProps extends PickerProperties {
    label: string,
    itens: Array<ItensProps>,
   
}

const MiddlePicker: React.FC<MiddlePickerProps> = ({label, itens, ...rest}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.inputLabel}>
                {label}
            </Text>
            <View style={styles.inputContianer}>
                <Picker
                    mode='dialog'
                    style={{height: 30, width: "100%"}}
                    prompt="Selecione uma opção abaixo"
                    {...rest}
                >
                    {itens.map(item => {
                        return (
                            <Picker.Item label={item.label} value={item.value} key={item.id}/>
                        )
                        
                    })}
                    
                </Picker>
            </View>
            
        </View>
    )
}

export default MiddlePicker