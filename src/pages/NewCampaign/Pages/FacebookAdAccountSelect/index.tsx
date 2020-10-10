import React, { useState, useEffect } from 'react'
import styles from './styles'
import { View, Text } from 'react-native'
import HeaderActions from '../../../../Components/HeaderActions'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import SinglePicker from '../../../../Components/SinglePicker'
import axios from 'axios'

interface FacebookAdAccountSelectProps {
    route: any
}

interface adAccountsRequestResult {
    name: string,
    account_id: string,
    id: string
}

const FacebookAdAccountSelect : React.FC<FacebookAdAccountSelectProps> = ({route}) => {
    const { goBack, navigate } = useNavigation()
    const { fbToken } = route.params
    const [ adAccounts , setAdAccounts ] = useState([])
    const [ adAccountSelected, setAdAccountSelected] = useState('')


    async function getAdAccounts(fbToken: string){
        console.log(fbToken)
        const result = await axios.get('https://graph.facebook.com/v8.0/me?fields=adaccounts%7Bname%2Caccount_id%7D&access_token='+fbToken)
        const adAccountsToShow = result.data.adaccounts.data.map((item: adAccountsRequestResult) => {
            const { name, account_id, id } = item
            
            return {
                label: name,
                value: account_id,
                id: id
            }
        })

        setAdAccounts(adAccountsToShow)

    }


    useEffect(() => {
        getAdAccounts(fbToken)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <HeaderActions 
                    imageurl="https://avatars1.githubusercontent.com/u/41599309?s=400&u=65b95962731f7965ead8de961b01c59e66554721&v=4"
                    settingsIconColor="#000"
                />
                <RectButton
                    style={styles.backButtonHeader}
                    onPress={goBack}
                >
                    <Ionicons name="ios-arrow-back" size={24} color="#000" />
                </RectButton>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.contentTextContainer}>
                    <Text style={styles.contentText}>
                        Encontramos X contas de anúncios, selecione uma conta para continuar.
                    </Text>
                </View>
                <View style={styles.inputGroupContainer}>
                    <SinglePicker 
                        defaultValue=""
                        selectedValue=""
                        itens={adAccounts}
                        label="Conta de anúncios"
                    />
                </View>
            </View>
            <View style={styles.pageActionsContainer}>

            </View>
        </View>
    )

}

export default FacebookAdAccountSelect