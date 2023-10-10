import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";

export default function Others() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.imges}
        source={{
          uri: "https://lh3.googleusercontent.com/a/ACg8ocJXOT_XnrQL8ddUX0S6t8hEXuYEnX3WK47dSSYd-WGOP9k=s288-c-no",
        }}
      />
      <Text style={styles.header}>Kenneth J. Tadlas</Text>
      <Text style={styles.subheader}>Phone: 09922864328</Text>
      <Text style={styles.subheader}>Email: kennytads@gmail.com</Text>
      <Text style={styles.subheader}>
        Address: Capitol Valley Dao District, Tagbilaran City, Bohol
      </Text>

      <Text style={styles.sectionHeader}>CAREER OBJECTIVE</Text>
      <Text style={styles.text}>
        Participate in relevant industry conferences, workshops, and training
        programs to expand my knowledge and network. Collaborate with cross-functional teams to develop
        innovative and user-friendly software solutions.
      </Text>

      <Text style={styles.sectionHeader}>EDUCATION</Text>
      <Text style={styles.text}>Tagilaran City Central Elementary School</Text>
      <Text style={styles.text}>University of Bohol</Text>
      <Text style={styles.text}>Cristal e-College</Text>
      <Text style={styles.text}>
        Bohol Island State University - Balilihan Campus
      </Text>

      <Text style={styles.sectionHeader}>SKILLS</Text>
      <Text style={styles.text}>
      Mobile App Development, Web Development, Database Management, 
      </Text>

      <Text style={styles.sectionHeader}>HOBBIES</Text>
      <Text style={styles.text}>
        Watching Anime, Watching Movies, Playing Computer Games, Doing Research, Reading Book, Travel
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  imges: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: "flex-end",
    marginRight: 20,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
});
