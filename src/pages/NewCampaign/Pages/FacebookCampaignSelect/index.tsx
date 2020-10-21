import { useRoute } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

interface FacebookCampaignSelect {
    adAccountSelected: string
}

export default function FacebookCampaignSelect(){
    const route = useRoute()
    const params = route.params as FacebookCampaignSelect
    const [ campaings, setCamapaings ] = useState([])

    useEffect(() => {

    },[])

    return (
        <View></View>
    )
}