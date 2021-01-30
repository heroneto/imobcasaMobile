import React, { useState } from 'react'
import {Text, View} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import ModalSelector, { IModalSelectorProps, IOption } from 'react-native-modal-selector'
import styles from './styles'
import colors from '@theme/colors'
import { Ionicons } from '@expo/vector-icons'; 

interface PickerProps extends IModalSelectorProps<IOption>{
    data: Array<{
        key: number,
        label: string,
        section?: boolean,
        account_id?: string,
    }>,
    borderRadius:{
        topRight: number,
        bottomRight: number,
        bottomLeft: number,
        topLeft: number
    },
    label: string,
    placeholder: string,
    value: string
}

const PickerInput: React.FC<PickerProps> = ({data, borderRadius, label, placeholder, value,  ...rest}) => {

    return (
        <>
            <ModalSelector 
                data={data}
                cancelText="Cancelar"
                sectionStyle={{
                    backgroundColor: "#FFF"
                }}
                sectionTextStyle={{
                    color: colors.imobcasaPrimary,
                    fontFamily: 'Poppins_700Bold',
                    fontSize: 18,
                }}
                optionStyle={{
                    backgroundColor: "#FFF",
                    paddingVertical: 10,
                }}
                optionTextStyle={{
                    color: colors.textInput,
                    fontFamily: 'Archivo_400Regular',
                    fontSize: 14,
                }}
                selectStyle={{
                    backgroundColor: "#FFF"
                }}
                optionContainerStyle={{
                    backgroundColor: "#FFF"
                }}
                cancelStyle={{
                    backgroundColor: colors.cancelButton
                }}
                cancelTextStyle={{
                    color: "#FFF",
                    fontFamily: 'Poppins_700Bold',
                    fontSize: 18,
                }}
                {...rest}
            >
                <View
                    style={{
                        borderTopRightRadius: borderRadius.topRight,
                        borderBottomRightRadius: borderRadius.bottomRight,
                        borderBottomLeftRadius: borderRadius.bottomLeft,
                        borderTopLeftRadius: borderRadius.topLeft,
                        ...styles.container
                    }}
                >
                <View>
                    <Text style={styles.labelText}>{label}</Text>
                </View>
                <View
                    style={styles.inputContainer}
                >
                    <TextInput
                        style={styles.inputedValue}
                        editable={false}
                        placeholder={placeholder}
                        value={value}
                    />
                    <Ionicons name="md-arrow-dropdown" size={24} color={colors.textInput} />
                </View>
                
                </View>
            </ModalSelector>
        </>
    )
}

export default PickerInput