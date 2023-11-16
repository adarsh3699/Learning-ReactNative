import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';

import { NavBarStyle } from './NavBarStyle';

import { Appbar, Avatar, IconButton, Button } from 'react-native-paper';

function NavBar() {
	return (
		<Appbar.Header style={NavBarStyle.NavBar}>
			<View style={NavBarStyle.brandSection}>
				<Avatar.Image
					size={33}
					style={NavBarStyle.menuIcon}
					source={require('../../../../assets/MylogoBS.jpeg')}
				/>
				<Text style={NavBarStyle.navbarTitle}>Bhemu Notes</Text>
			</View>
			<Button
				mode="contained-tonal"
				style={NavBarStyle.addNotesBtn}
				buttonColor="rgb(102, 187, 106)"
				compact
				maxFontSizeMultiplier={1}
				uppercase
				onPress={() => console.log('Pressed')}
			>
				Add Notes
			</Button>
		</Appbar.Header>
	);
}

export default NavBar;