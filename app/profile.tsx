import React, { useContext, useState, useEffect } from "react";
import { COLORS, images, icons } from "../constants";
import { Api } from "../api/Api";
import { User } from "../api/types";

import { ScrollView, SafeAreaView, Text, Image, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { DividerProps, Divider } from "react-native-paper";
import { BasicButton } from "../components/buttons";

import "react-native-paper"

const ProfilePage = () => {

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
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundPink }}>
            <Stack.Screen
                options={{
                    headerStyle: {
                        backgroundColor: "#ffb6c1",
                    },
                    headerTitle: () => (

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                fontStyle: 'italic',
                                color: COLORS.white,
                                textShadowColor: COLORS.gray,
                                textShadowRadius: 3,
                                textShadowOffset: { width: 1, height: 1, }
                            }}>
                                Profil de {myProfile?.pseudo}
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
                            }} />
                    ),




                }}
            />
            <ScrollView contentContainerStyle={{ alignItems: "flex-start",paddingBottom: 150, paddingLeft: 30, paddingRight: 30, paddingTop: 20 }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    padding: 20,
                    alignSelf: 'flex-start'
                }}>Bonjour {myProfile?.name}...</Text>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    fontStyle: 'italic', padding: 20, alignSelf: 'flex-end'
                }}>... ou devrais-je dire {myProfile?.pseudo}</Text>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    fontStyle: 'italic', padding: 20, alignSelf: 'flex-start'
                }}> Saches que tu as actuellement {myProfile?.balance}€ sur ton compte.</Text>
                <BasicButton onPress={() => handleAccountChange()} title="Changer de compte" />

            </ScrollView>
            
        </SafeAreaView>
    );
};

export default ProfilePage;