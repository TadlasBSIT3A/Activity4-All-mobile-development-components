import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image } from "react-native";
import {
  ProgressBar,
  MD3Colors,
  RadioButton,
  Menu,
  Searchbar,
  TouchableRipple,
  Snackbar,
  Button,
  Switch,
  Checkbox,
  HelperText,
  TextInput,
  Dialog,
  Portal,
  Chip,
  SegmentedButtons,
  List,
  Badge,
  Avatar
} from "react-native-paper";

export default function About() {
  const [searchQuery, setSearchQuery] =
    React.useState(""); /* Search Bar Components */
  const onChangeSearch = (query) => setSearchQuery(query);

  const [checked, setChecked] =
    React.useState("first"); /* RadioButton Components */

  const [choose, setChoose] = React.useState(false); /* Checkbox Components*/
  const [choose1, setChoose1] = React.useState(false);

  const [visible, setVisible] = React.useState(false); /*SnackBar Components */
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const [isSwitchOn, setIsSwitchOn] =
    React.useState(false); /* Switch Components*/

  const onToggleSwitch = () =>
    setIsSwitchOn(!isSwitchOn); /* Helper Text Components*/
  const [text, setText] = React.useState("");
  const onChangeText = (text) => setText(text);
  const hasErrors = () => {
    return !text.includes("@");
  };

  const [vise, showVise] = React.useState(false); /* Dialog Components*/
  const showDialog = () => showVise(true);
  const hideDialog = () => showVise(false);

  const [value, setValue] =
    React.useState(""); /* Segmented Buttons Components*/

  const [texts, setTexts] = React.useState(""); /* TextInput Components*/

  const [expanded, setExpanded] = React.useState(true); /* List Components*/
  const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.context}>
        <Text style={styles.titles}>Search Bar</Text>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>

      <View style={styles.context}>
        <Text style={styles.titles}>Progress Bar</Text>
        <Text style={styles.loading}>Loading...</Text>
        <ProgressBar progress={0.3} color={MD3Colors.error50} />
      </View>

      <View style={styles.context}>
        <Text style={styles.titles}>Radio Button</Text>
        <View style={styles.radio}>
        <Text style={styles.rdbtn}>Male</Text>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text style={styles.rdbtn}>Female</Text>
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
        </View>
      </View>

      <View style={styles.context}>
        <Text style={styles.titles}>Checkbox</Text>
        <View style={styles.checkboxx}>
          <Text>Android</Text>
          <Checkbox
            status={choose ? "checked" : "unchecked"}
            onPress={() => {
              setChoose(!choose);
            }}
          />
          <Text>Iphone</Text>
          <Checkbox
            status={choose1 ? "checked" : "unchecked"}
            onPress={() => {
              setChoose1(!choose1);
            }}
          />
        </View>
      </View>

      <View style={styles.context}>
        <Text style={styles.titles}>Menu Items</Text>
        <Menu.Item
          leadingIcon="redo"
          onPress={() => {}}
          title="Redo"
          disabled
        />
        <Menu.Item leadingIcon="undo" onPress={() => {}} title="Undo" />
        <Menu.Item
          leadingIcon="content-cut"
          onPress={() => {}}
          title="Cut"
          disabled
        />
        <Menu.Item leadingIcon="content-copy" onPress={() => {}} title="Copy" />
        <Menu.Item
          leadingIcon="content-paste"
          onPress={() => {}}
          title="Paste"
        />
      </View>

      <View style={styles.context}>
        <Text style={styles.titles}>Touchable Ripple</Text>
        <TouchableRipple
          style={styles.insideripple}
          onPress={() => console.log("Pressed")}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Text style={{fontSize: 18, textAlign: 'center', fontWeight: 'bold'}}>Press Here</Text>
        </TouchableRipple>
      </View>

      <View style={styles.context}>
        <Text style={styles.titles}>SnackBar</Text>
        <View style={styles.snackbars}>
          <Button mode="contained-tonal" onPress={onToggleSnackBar}>
            {visible ? "Hide" : "Show"}
          </Button>
        </View>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: "Undo",
            onPress: () => {},
          }}
        >
          Your internet connection is restored.
        </Snackbar>
      </View>

      <View style={styles.context}>
        <Text style={styles.titles}>Switch</Text>
        <View style={styles.switchs}>
          <Text>OFF</Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          <Text>ON</Text>
        </View>
      </View>

      <View style={styles.context}>
        <Text style={styles.titles}>HelperText</Text>
        <TextInput label="Enter Email" value={text} onChangeText={onChangeText} />
        <HelperText type="error" visible={hasErrors()}>
          Email address is invalid! put an @ .
        </HelperText>
      </View>

      <View style={styles.context}>
        <Text style={styles.titles}>Dialog</Text>
        <View style={styles.snackbars}>
          <Button mode="outlined" onPress={showDialog}>
            Show Dialog
          </Button>
        </View>
      </View>
      <Portal>
        <Dialog visible={vise} onDismiss={hideDialog}>
          <Dialog.Title>Emergency</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">Gcash #09922864329</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <View style={styles.context}>
        <Text style={styles.titles}>Chip</Text>
        <View style={styles.chip}>
          <Chip icon="information" onPress={() => console.log("Pressed")}>
            Information Chip
          </Chip>
          <Chip icon="heart" onPress={() => console.log("Pressed")}>
            Heart Chip
          </Chip>
          <Chip icon="star" onPress={() => console.log("Pressed")}>
            Star Chip
          </Chip>
          <Chip icon="circle" onPress={() => console.log("Pressed")}>
            Circle Chip
          </Chip>
          <Chip icon="alert" onPress={() => console.log("Pressed")}>
            Alert Chip
          </Chip>
        </View>
      </View>

      <View style={styles.context}>
        <Text style={styles.titles}>Segmented Buttons</Text>
        <SafeAreaView style={styles.container}>
          <SegmentedButtons
            value={value}
            onValueChange={setValue}
            buttons={[
              {
                value: "play",
                label: "Play",
                icon: "play",
              },
              {
                value: "stop",
                label: "Stop",
                icon: "stop",
              },
              { value: "pause", label: "Pause", icon: "pause" },
            ]}
          />
        </SafeAreaView>
      </View>

      <View style={styles.context}>
        <Text style={styles.titles}>TextInput</Text>
        <TextInput
          label="Enter Name:"
          value={texts}
          onChangeText={(texts) => setTexts(texts)}
          mode="outlined"
        />
        <TextInput
          label="Password:"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
          mode="outlined"
        />
      </View>

      <View style={styles.context}>
      <Text style={styles.titles}>List.Item</Text>
      <List.Item
        title="Nanay"
        description="Doi asa ka?"
        left={(props) => <List.Icon {...props} icon="message" />}
        right={(props) => <List.Icon {...props} icon="star" />}
      />
      <List.Item
        title="DITO"
        description="Watch your favorite Amazon Prime contents on DITO!"
        left={(props) => <List.Icon {...props} icon="message" />}
        right={(props) => <List.Icon {...props} icon="star" />}
      />
      </View>

      <View style={styles.context}>
      <Text style={styles.titles}>Badge</Text>
      <Text style={{marginLeft: 30}}>Notifications</Text>
      <Badge size={24} style={{alignSelf: 'center'}}>50
      </Badge>
      <Avatar.Icon icon="message" size={50} style={{marginLeft: 135, marginTop: 3}}/>
      </View>

      <View style={styles.context}>
      <Text style={styles.titles}>Avatar</Text>
      <View style={styles.avatar}>
      <Avatar.Icon size={80} icon="alert" />
      <Avatar.Image size={80} source={{ uri: 'https://lh3.googleusercontent.com/a/ACg8ocJXOT_XnrQL8ddUX0S6t8hEXuYEnX3WK47dSSYd-WGOP9k=s288-c-no'}} />
      <Avatar.Text size={80} label="BISU" />
      </View>
      <View style={styles.avatarlbl}>
      <Text style={styles.avatarlabel}>Icon</Text>
      <Text style={styles.avatarlabel}>Avatar</Text>
      <Text style={styles.avatarlabel}>Text</Text>
      </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  context: {
    backgroundColor: "#f5f6fa",
    padding: 10,
    marginBottom: 10,
    elevation: 3,
    borderRadius: 10,
  },

  titles: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    borderStyle: "solid",
    borderColor: '#34495e',
    borderRadius: 10,
    borderWidth: 2,
  },
  
  loading:{
    fontSize: 15,
    marginBottom: 8,
  },

  radio: {
    alignItems: "center",
    justifyContent:'center',
    flexDirection: 'row',
  },

  checkboxx: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  insideripple: {
    padding: 50,
  },

  snackbars: {
    margin: 5,
    flexDirection: "row",
    justifyContent: "center",
    padding: 5,
    gap: 10,
  },

  switchs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  chip: {
    gap: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  badgetxt:{
    marginLeft: 20,
  },

  text: {
    fontSize: 16,
    marginBottom: 20,
  },

  avatar:{
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  
  avatarlabel:{
    gap: 10,
  },

  avatarlbl:{
    marginTop: 20,
    justifyContent:'center',
    gap: 63,
    flexDirection: 'row'
  }
});