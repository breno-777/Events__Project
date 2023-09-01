import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Alert, FlatList } from "react-native";
import uuid from "react-native-uuid";
import { StyledInput } from "./src/components/Input/input";
import { StyledButton } from "./src/components/Button/button";
import { Header } from "./src/components/Header/header";
import { Card } from "./src/components/Card/card";
import { CardTitle } from "./src/components/CardTitle/cardTitle";
import { ParticipantCard } from "./src/components/ParticipantCard/participantCard";

export default function App() {
  const [participants, setParticipants] = useState([]);
  const [participantName, setParticipantName] = useState("");

  const participantExist =
    participants.filter((participant) => participantName === participant.name)
      .length > 0;

  function handleAddNewParticipants() {
    if (participantExist) {
      Alert.alert("Error", "O participante já está registrado no Evento!");
      return;
    }
    const newParticipant = {
      id: uuid.v4(),
      name: participantName,
      isRegistered: false,
    };
    participantName === ""
      ? console.log("vazio")
      : setParticipants((prevState) => [...prevState, newParticipant]);
    setParticipantName("");
  }

  function handleParticipantRemove(id) {
    Alert.alert("Aviso!", "Gostaria de remover o participante do Evento!", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          setParticipants((prevState) =>
            prevState.filter((participant) => participant.id !== id)
          );
        },
      },
    ]);
    return;
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Header />
        <View style={styles.form}>
          <StyledInput
            placeholder={"Adicionar um novo participante"}
            placeholderTextColor="#808080"
            value={participantName}
            onChangeText={(text) => setParticipantName(text)}
          />
          <StyledButton
            iconName={"plus"}
            iconColor={"#F2F2F2"}
            iconSize={18}
            onPress={handleAddNewParticipants}
          />
        </View>

        <View style={styles.content}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={participants}
            ListHeaderComponent={<CardTitle />}
            renderItem={({ item }) => (
              <ParticipantCard
                participant={item}
                onParticipantRemoved={() => handleParticipantRemove(item.id)}
              />
            )}
            ListEmptyComponent={() => (
              <Card
                title={"Ninguém chegou no evento ainda?"}
                subtitle={"Adicione participantes a sua lista de presença."}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
  },

  content: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 24,
  },

  content__participants: {
    width: 327,
    height: 278,
    top: 38,
    gap: 20,
  },

  form: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    marginTop: -30,
    paddingHorizontal: 24,
  },
});
