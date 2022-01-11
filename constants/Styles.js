import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  flex: {
    flex: 1
  },
  h1: {
    fontSize: 24,
    fontFamily: "open-sans-bold"
  },

  categoryGridItemContainer: {
    flex: 1,
    margin: 5,
    height: 160,
    borderRadius: 10,
    overflow: 'hidden',
  },
  categoryGridItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.26,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryGridTitle: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    textAlign: "right",
  },
  categoryGridImage: {
    flex: 1
  },

  mealGridItemContainer: {
    flex: 1,
    margin: 5,
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.26,
    shadowRadius: 5,
    elevation: 3,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "#fafafa",
  },
  mealGridItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mealGridTitle: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    textAlign: "center",
    width: "100%",
    padding: 10,
    color: "#fff",
  },
  mealGridImage: {
    flex: 1,
  },
  mealGridInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  mealGridInfo: {
    padding: 10,
    color: "#fff",
    textTransform: 'capitalize',
    fontFamily: "open-sans",
  },
  mealImage: {
    width: "100%",
    height: 250
  }
});

export default Styles;