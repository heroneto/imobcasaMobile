import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import * as Facebook from 'expo-facebook'
import styles from './styles'
import StandardButton from '../../Components/StandardButton'
import axios from 'axios'
import SinglePicker from '../../Components/SinglePicker'
import HeaderActions from '../../Components/HeaderActions'
import colors from '../../theme'

export default function FacebookLogin(){
    const [ isLogged, setIsLogged ] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [ adAccounts, setAdAccounts] = useState([{
        id: "",
        label: "",
        value: ""
    }])
    const [ adAccountSelected, setAdAccountSelected] = useState('')
    const [ rawAds, setRawAds ] = useState([{
        id: "",
        label: "",
        value: ""
    }])
    const [ adSelected, setAdSelected ] = useState("")
    async function initFacebookSDK(){
        await Facebook.initializeAsync('561773431399086', 'imobcasa api')
    }

    async function makeFacebookLogin(){
        try{
            const { type, token } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile']
            })
            console.log(type)
            if(type === 'success') {
                setIsLogged(true)
                console.log(token)
                const url = "https://graph.facebook.com/v8.0/me?fields=id%2Cname%2Cemail%2Clocation%2Cadaccounts%7Baccount_id%2Cname%2Cads%7Bname%2Cstatus%2Caccount_id%7D%7D&access_token="+token
                console.log(url)
                const result = await axios.get(url)
                console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)
                const adaccoutsToSet = await result.data.adaccounts.data.map((item: any) => {
                    const { account_id, name, id } = item
                    return {
                        id: id,
                        label: name,
                        value: account_id
                    }
                })
                setAdAccounts(adaccoutsToSet)
                const rawads: Array<any> = result.data.adaccounts.data.map((item: any) => {
                    const { ads } = item
                    const itemAds = ads.data.filter((ad: any) => {
                        if(ad.status == "ACTIVE"){
                            return ad
                        }
                    })
                    /* ad props
           {
              "name": "TGPatri",
              "status": "ACTIVE",
              "account_id": "1144963185679561",
              "id": "23845529344820638"
            }

                    */
                   return itemAds
                }).flat()

                const ads = rawads.map( item => {
                    return {
                        label: item.name,
                        id: item.account_id,
                        value: item.id
                    }
                })
                setRawAds(ads)
                console.log(rawAds)
            }else{
                setIsLogged(false)
            }
        }catch(err){
            console.log(err)
        }
        
    }

    // async function handleAccountSelected(value: string){
    //     setAdAccountSelected(value)
    //     const getAdsOfAccountSelected =  await rawAds.reduce((acc: Array<any>, ad : any)) => {

    //     }, [])
    // }

    useEffect(() => {
        initFacebookSDK()
    })

    return (
        <View style={styles.container}>
            <HeaderActions 
                imageurl="https://avatars1.githubusercontent.com/u/41599309?s=400&u=65b95962731f7965ead8de961b01c59e66554721&v=4"
                settingsIconColor="#000"
            />
            <View style={styles.loginContainer}>
                <Text style={styles.pageTitle}>
                    Facebook login page test
                </Text>
                <Text style={{
                    color: isLogged ? colors.success : colors.error,
                    fontFamily: 'Poppins_700Bold',
                    fontSize: 12,
                    
                }}>
                    {isLogged ? "Sucesso" : "Não logado"}
                </Text>

                <View style={styles.loginButtonContainer}>
                    <StandardButton 
                        text="Login FB"
                        onPress={makeFacebookLogin}
                    ></StandardButton>
                </View>
            </View>
            {isLogged ? 
            <>
                <View style={styles.profileContainer}>
                    <Text style={styles.profileName}>Name: {name}</Text>
                    <Text style={styles.profileName}>Email: {email}</Text>
                </View>
                <View style={styles.adsContainer}>
                    <SinglePicker 
                        label="Contas de anúncios"
                        selectedValue={adAccountSelected}
                        defaultValue={adAccountSelected}
                        itens={adAccounts}
                        onValueChange={value => setAdAccountSelected(value)}
                    />
                    <SinglePicker 
                        label="Anuncios"
                        selectedValue={adSelected}
                        defaultValue={adSelected}
                        itens={rawAds}
                        onValueChange={value => setAdSelected(value)}
                    />
                </View>
            </>
            : true
            }
        </View>
    )
}

