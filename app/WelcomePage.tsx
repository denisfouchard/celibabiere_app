import React, { useContext, useState, useEffect } from "react";
import { COLORS, images, icons } from "../constants";
import { Api } from "../api/Api";
import { User } from "../api/types";

import { ScrollView, SafeAreaView, Text, Image, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { DividerProps, Divider } from "react-native-paper";
import { BigButton } from "../components/buttons";

import "react-native-paper"

export default function WelcomPage() {

    const [myProfile, setMyProfile] = useState<User>(null);
    const [refreshKey, setRefreshKey] = useState<number>(0);
    useEffect(() => {

        // l'id donné est bidon, jusqu'a modif des types...
        Api.fetchMe().then((me) => setMyProfile(me));
    }, [refreshKey]);

    const handleAccountChange = () => {
        // Handle create profile logic here
    }

    return (
        <ScrollView contentContainerStyle={{backgroundColor: COLORS.backgroundPink, justifyContent:'space-around', flex:3}} 
        style={{backgroundColor:COLORS.backgroundPink}}>
    
            
                <BigButton title="Trouver des beer date !" onPress={handleAccountChange}/>
            
  
        </ScrollView>
    );
};

