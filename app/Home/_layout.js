import { Stack } from "expo-router";
import Home from "./Home";

export default () => {
    return(
    <>
        <Stack.Screen
            options={{
                headerShown: false
            }}
        />
        <Home />
    </>
    )
}