import React, { useState, ReactElement } from 'react'
import { View, Text, PickerProperties, Platform } from 'react-native'
import styles from './styles'
import { Picker } from '@react-native-community/picker';
import colors from '../../theme';


interface ItensProps {
    label: string,
    value: string,
    id: string
}


interface BottonPickerProps extends PickerProperties {
    label: string,
    itens: Array<ItensProps>,   
}

const BottonPicker: React.FC<BottonPickerProps> = ({label,itens, ...rest}) => {
    const [ isActionIconActive, setIsActionIconActive ] = useState(false)
    

    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>
                    {label}
                </Text>
            </View>
            <View style={styles.inputContainer}>
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

export default BottonPicker