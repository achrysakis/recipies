import { View, Text, Switch } from 'react-native';
import Colors from '../constants/Colors';
import Styles from '../constants/Styles';

const FilterSwitch = props => {
  return (
    <View style={Styles.filterContainer}>
      <Text style={Styles.filterLabel}>{props.title}</Text>
      <Switch 
        style={Styles.filterSwitch} 
        trackColor={{ true: Colors.backgrounds.primary }}
        onValueChange={newValue => props.valueChange(newValue)}
        value={props.value}          
      />
    </View>    
  )
};

export default FilterSwitch;