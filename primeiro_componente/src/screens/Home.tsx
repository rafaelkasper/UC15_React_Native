import { View, StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";

const Home = () => {
  const users = [
    {
      id: "1",
      name: "fulano",
      job: "teacher",
    },
    {
      id: "2",
      name: "ciclano",
      job: "developer",
    },
  ];
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => <Card name={item.name} job={item.job} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;
