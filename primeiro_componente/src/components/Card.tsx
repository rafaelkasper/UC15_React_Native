import { FC } from "react";
import { Text, View, StyleSheet } from "react-native";

interface Props {
  name: string;
  job: string;
}

const Card: FC<Props> = ({ name, job }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.bodyText}>{job}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
  bodyText: {
    fontSize: 20,
  },
  container: {
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
});
export default Card;
