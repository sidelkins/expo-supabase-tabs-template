import { Stack } from "expo-router";
import Page from "./Page";

export default () => {
    return(
    <>
        <Stack.Screen
            options={{
                headerShown: false
            }}
        />
        <Page />
    </>
    )
}