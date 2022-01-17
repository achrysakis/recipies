import Slider from '@react-native-community/slider';
import { View, Text } from 'react-native';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';

const ValueSlider = props => {

	return(
		<View style={Styles.filterContainer}>
			<Text>{props.label}: {props.value}</Text>
			<Slider
					style={{width: 150, height: 40}}
					minimumValue={props.min}
					maximumValue={props.max}
					value={props.value}
					step={props.step}
					minimumTrackTintColor={Colors.backgrounds.primary}
					onValueChange={newValue => props.valueChange(newValue)}
			/>
		</View>
	);
}

export default ValueSlider;