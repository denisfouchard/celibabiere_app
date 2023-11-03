import { useState } from "react";
import { View, ScrollView, Text, Button, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle : {
                        backgroundColor: COLORS.lightWhite,
                    },
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerLeft: () => (
                        <ScreenHeaderBtn/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn/>
                    ),
                   
                }}
            />
            <ScrollView contentContainerStyle={{paddingBottom: 150,}}>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;