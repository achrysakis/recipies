import { StyleSheet } from 'react-native';
import Colors from './Colors';

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
  textCenter: {
    textAlign: 'center'
  },
  h1: {
    fontSize: 24,
    fontFamily: "open-sans-bold",
    marginVertical: 20
  },
  h3: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    marginBottom: 20,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  },  
  listContainer:{
    marginBottom: 10,
    borderColor: "#ccc",
    width: "100%",
    padding: 15,
    borderWidth: 1,
    backgroundColor: "#fafafa",
  },
  list: {
    fontFamily: "open-sans-bold",
    marginBottom: 5,
    fontSize: 16,
  },  
  paragraphContainer:{
    marginBottom: 10,
    width: "100%",
    padding: 15
  },
  paragraph: {
    fontFamily: "open-sans",
    marginBottom: 10,
    fontSize: 15,
  },

  categoryGridItemContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    elevation: 5,
    height: 180,
    overflow: "hidden"
  },
  categoryGridItem: {
    flex: 1,
    alignItems: 'flex-end',
    borderRadius: 10,
    justifyContent: 'flex-end',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.26,
    shadowRadius: 5,
  },
  categoryGridTitle: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    textAlign: "right",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 5,
    color: "#fff"
  },
  categoryGridImage: {
    flex: 1
  },

  mealGridItemContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    elevation: 5,
    height: 300,
    overflow: "hidden",  
    borderColor: "#ccc",
    borderWidth: 1
  },
  mealGridItem: {
    flex: 1,
    alignItems: 'flex-end',
    borderRadius: 10,
    justifyContent: 'flex-end',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.26,
    shadowRadius: 5,
  },
  mealGridTitle: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    textAlign: "right",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 5,
    color: "#fff"
  },
  
  mealGridImage: {
    flex: 1,
  },
  mealGridInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: "#fafafa",
    borderTopColor: "#ccc",
    borderTopWidth: 1,
    width: "100%"
  },
  mealGridInfo: {
    padding: 10,
    color: Colors.fonts.secondary,
    textTransform: 'capitalize',
    fontFamily: "open-sans",
    borderRightWidth: 1,
  },


  mealImage: {
    width: "100%",
    height: 250
  }
});

export default Styles;