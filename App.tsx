import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Toasts from './Toasts';

export default function App() {
	return <View style={styles.container}>
		<Text>Open up App.tsx to start working on your app!</Text>
		<Button
			title={"START"} 
			onPress={() => {
				console.log('CLICK')
				Toasts.show('Hello alert', Toasts.LONG);
			}}/>
	</View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
