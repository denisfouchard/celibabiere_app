import React, { createContext } from "react";

import { useState, useEffect } from "react";
import { View, ScrollView, Text, Button, ButtonProps, SafeAreaView, Image } from "react-native";
import { Stack, useRouter } from "expo-router";
import { User } from "../api/types";
import { Api } from "../api/Api";

import { COLORS, images, icons } from "../constants";
import ProfileButton from "../components/ProfileButton";
import ProfileContext from "./ProfileContext";
import WelcomPage from "./WelcomePage";


const Home = () => {
    const router = useRouter();
    const [myProfile, setMyProfile] = useState<User>(null);
    const [refreshKey, setRefreshKey] = useState<number>(0);
    useEffect(() => {

        // l'id donné est bidon, jusqu'a modif des types...
        Api.fetchMe().then((me) => setMyProfile(me));
    }, [refreshKey]);

    const handleCreateProfile = () => {
        // Handle create profile logic here
    };

    return (
        <ProfileContext.Provider value={myProfile}>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle : {
                        backgroundColor: COLORS.headerPink,
                    },
                    headerTitle: () => (
                        
                            <View style={{ alignItems:'center', alignContent:'center'}}>
                                
                                <Text style={{fontSize: 20, 
                                            fontWeight: 'bold', 
                                            fontStyle:'italic', 
                                            color: COLORS.white,
                                            alignSelf:'center',
                                            textShadowColor: COLORS.gray,
                                            textShadowRadius: 3,
                                            textShadowOffset: {width: 1, height: 1,}
                                            }}>
                                                Bonjour {myProfile?.pseudo} !
                                </Text>
                                
                                
                            </View>
                            
                        
                        
                    ),
                    headerLeft: () => (
                        <Image
                            source={icons.logo}
                            resizeMode="cover"
                            style={{
                                width: 50,
                                height: 50,
                            }}/>
                    ),

                    headerRight: () => (
                        <ProfileButton onPress={ () =>router.push("/profile") }/>
                    ),
                    
                   
                }}
            />
        <WelcomPage/>
        </SafeAreaView>
        </ProfileContext.Provider>
    );
};

export default Home;