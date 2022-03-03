import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, TouchableOpacity, SafeAreaView, TextInput, Modal} from 'react-native';



export default function App() {
  {/* The temporary variables used while something is being calculated. */}
  const [tempAmount, setTempAmount] = useState(0)
  const [lastTransaction, setLastTransaction] = useState("")

  const [isModalVisible, setModalVisible] = useState(false)
  const [catSelection, setCatSelection] = useState(1)

  {/* Variables for each spending category. */}
  const [title1, setTitle1] = useState("Petrol")
  const [amountC1, setAmountC1] = useState(112)
  const [bColor1, setBColor1] = useState("yellow")
  const [tColor1, setTColor1] = useState("black")

  const [title2, setTitle2] = useState("Food")
  const [amountC2, setAmountC2] = useState(200)
  const [bColor2, setBColor2] = useState("#059de1")
  const [tColor2, setTColor2] = useState("white")

  const [title3, setTitle3] = useState("Entertainment")
  const [amountC3, setAmountC3] = useState(20)
  const [bColor3, setBColor3] = useState("red")
  const [tColor3, setTColor3] = useState("white")

  const [title4, setTitle4] = useState("Subscriptions")
  const [amountC4, setAmountC4] = useState(55)
  const [bColor4, setBColor4] = useState("green")
  const [tColor4, setTColor4] = useState("white")

  const [title5, setTitle5] = useState("Short-Term Goals")
  const [amountC5, setAmountC5] = useState(78)
  const [bColor5, setBColor5] = useState("purple")
  const [tColor5, setTColor5] = useState("white")

  const [title6, setTitle6] = useState("Unexpected")
  const [amountC6, setAmountC6] = useState(40)
  const [bColor6, setBColor6] = useState("#fb8b37")
  const [tColor6, setTColor6] = useState("white")

  const [title7, setTitle7] = useState("Other")
  const [amountC7, setAmountC7] = useState(13)
  const [bColor7, setBColor7] = useState("#e2e2e2")
  const [tColor7, setTColor7] = useState("black")

  const [title8, setTitle8] = useState("Savings")
  const [amountC8, setAmountC8] = useState(500)
  const [bColor8, setBColor8] = useState("#0e7094")
  const [tColor8, setTColor8] = useState("white")

  const [titleModal, setTitleModal] = useState("")
  const [amountModal, setAmountModal] = useState(0)
  const [bColorModal, setBColorModal] = useState("#0e7094")
  const [tColorModal, setTColorModal] = useState("white")

  // Basic math functions for the modal screen.
  function addAmount(){
    //Checks that the input is a number.
    if (tempAmount != NaN)
      setAmountModal(amountModal + tempAmount)
      //Stores a description of the operation to show the user their last move.
      var addedString = "+$" + String(tempAmount) 
      setLastTransaction(addedString)
  }

  function subtractAmount(){
    if (tempAmount != NaN)
      setAmountModal(amountModal - tempAmount)
      var substractedString = "-$" + String(tempAmount)
      setLastTransaction(substractedString)
  }

  function resetTotal(){
    var resetString = "Last total: $" + String(amountModal)
    setLastTransaction(resetString)
    setAmountModal(0)
  }

    function Update(updatNum: number) {
    switch(updatNum) {
      case 1:
        setTitle1(titleModal)
        setAmountC1(amountModal)
        setBColor1(bColorModal)
        setTColor1(tColorModal)
      break
      case 2:
        setTitle2(titleModal)
        setAmountC2(amountModal)
        setBColor2(bColorModal)
        setTColor2(tColorModal)
      break
      case 3:
        setTitle3(titleModal)
        setAmountC3(amountModal)
        setBColor3(bColorModal)
        setTColor3(tColorModal)
      case 4:
        setTitle4(titleModal)
        setAmountC4(amountModal)
        setBColor4(bColorModal)
        setTColor4(tColorModal)
      break
      case 5:
        setTitle5(titleModal)
        setAmountC6(amountModal)
        setBColor5(bColorModal)
        setTColor5(tColorModal)
      break
      case 6:
        setTitle6(titleModal)
        setAmountC6(amountModal)
        setBColor6(bColorModal)
        setTColor6(tColorModal)
      break
      case 7:
        setTitle7(titleModal)
        setAmountC7(amountModal)
        setBColor7(bColorModal)
        setTColor7(tColorModal)
      break
      case 8:
        setTitle8(titleModal)
        setAmountC8(amountModal)
        setBColor8(bColorModal)
        setTColor8(tColorModal)
      break
      //Catch errors with default here.      
    }
  }

  function SpendingBox1() {
    return(
      <Pressable  style={[styles.spendingBox, {backgroundColor: bColor1}]} 
          onPress={() => {
          setTitleModal(title1)
          setAmountModal(amountC1); 
          setTColorModal(tColor1);
          setBColorModal(bColor1);
          setCatSelection(1);
          setModalVisible(!isModalVisible);
        }}
      >
        <Text style= {{fontSize:30, color: tColor1,}} >{title1}</Text>
        <Text 
        style= {{fontSize:25, color: tColor1,}}>
          ${amountC1}
        </Text>
      </Pressable>
    )
  }

    function SpendingBox2() {
    return(
      <Pressable  style={[styles.spendingBox, {backgroundColor: bColor2}]} 
          onPress={() => {
          setTitleModal(title2)
          setAmountModal(amountC2); 
          setTColorModal(tColor2);
          setBColorModal(bColor2);
          setCatSelection(2);
          setModalVisible(!isModalVisible);
        }}
      >
        <Text style= {{fontSize:30, color: tColor2,}} >{title2}</Text>
        <Text 
        style= {{fontSize:25, color: tColor2,}}>
          ${amountC2}
        </Text>
      </Pressable>
    )
  }

  function SpendingBox3() {
    return(
      <Pressable  style={[styles.spendingBox, {backgroundColor: bColor3}]} 
          onPress={() => {
          setTitleModal(title3)
          setAmountModal(amountC3); 
          setTColorModal(tColor3);
          setBColorModal(bColor3);
          setCatSelection(3);
          setModalVisible(!isModalVisible);
        }}
      >
        <Text style= {{fontSize:30, color: tColor3,}} >{title3}</Text>
        <Text 
        style= {{fontSize:25, color: tColor3,}}>
          ${amountC3}
        </Text>
      </Pressable>
    )
  }

  function SpendingBox4() {
    return(
      <Pressable  style={[styles.spendingBox, {backgroundColor: bColor4}]} 
          onPress={() => {
          setTitleModal(title4)
          setAmountModal(amountC4); 
          setTColorModal(tColor4);
          setBColorModal(bColor4);
          setCatSelection(4);
          setModalVisible(!isModalVisible);
        }}
      >
        <Text style= {{fontSize:30, color: tColor4,}} >{title4}</Text>
        <Text 
        style= {{fontSize:25, color: tColor4,}}>
          ${amountC4}
        </Text>
      </Pressable>
    )
  }

    function SpendingBox5() {
    return(
      <Pressable  style={[styles.spendingBox, {backgroundColor: bColor5}]} 
          onPress={() => {
          setTitleModal(title5)
          setAmountModal(amountC5); 
          setTColorModal(tColor5);
          setBColorModal(bColor5);
          setCatSelection(5);
          setModalVisible(!isModalVisible);
        }}
      >
        <Text style= {{fontSize:30, color: tColor5,}} >{title5}</Text>
        <Text 
        style= {{fontSize:25, color: tColor5,}}>
          ${amountC5}
        </Text>
      </Pressable>
    )
  }

  function SpendingBox6() {
    return(
      <Pressable  style={[styles.spendingBox, {backgroundColor: bColor6}]} 
          onPress={() => {
          setTitleModal(title6)
          setAmountModal(amountC6); 
          setTColorModal(tColor6);
          setBColorModal(bColor6);
          setCatSelection(6);
          setModalVisible(!isModalVisible);
        }}
      >
        <Text style= {{fontSize:30, color: tColor6,}} >{title6}</Text>
        <Text 
        style= {{fontSize:25, color: tColor6,}}>
          ${amountC6}
        </Text>
      </Pressable>
    )
  }

  function SpendingBox7() {
    return(
      <Pressable  style={[styles.spendingBox, {backgroundColor: bColor7}]} 
        onPress={() => {
          setTitleModal(title7)
          setAmountModal(amountC7); 
          setTColorModal(tColor7);
          setBColorModal(bColor7);
          setCatSelection(7);
          setModalVisible(!isModalVisible);
        }}
      >
        <Text style= {{fontSize:30, color: tColor7,}} >{title7}</Text>
        <Text 
        style= {{fontSize:25, color: tColor7,}}>
          ${amountC7}
        </Text>
      </Pressable>
    )
  }

  function SpendingBox8() {
    return(
      <Pressable  style={[styles.spendingBox, {backgroundColor: bColor8}]} 
        onPress={() => {
          setTitleModal(title8)
          setAmountModal(amountC8); 
          setTColorModal(tColor8);
          setBColorModal(bColor8);
          setCatSelection(8);
          setModalVisible(!isModalVisible);
        }}
      >
        <Text style= {{fontSize:30, color: tColor8,}} >{title8}</Text>
        <Text 
        style= {{fontSize:25, color: tColor8,}}>
          ${amountC8}
        </Text>
      </Pressable>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <Modal
      animationType="slide"
      visible={isModalVisible}
      presentationStyle="pageSheet"
      onRequestClose={() => {setModalVisible(!isModalVisible)}}
      >
        <View style={[styles.container1, {backgroundColor:bColorModal}]}>
          <SafeAreaView style={{height:25}}>
            <StatusBar />
          </SafeAreaView>
          <SafeAreaView style={{}}>
            <Pressable style={{height:40, paddingLeft:15,}}
                        onPress={()=>{
                          Update(catSelection)
                          setModalVisible(!isModalVisible);
                          }}>
              <Text style={{fontSize:20, color:String(tColorModal)}}>Go Back</Text>
            </Pressable>
          </SafeAreaView>
            <View style = {styles.catTitle}>
              <Text style = {{fontSize: 50, color: "white"}}>{titleModal}</Text>
              <Text style = {{fontSize: 40, color: "white"}}>${amountModal}</Text>
            </View>
            <View >
              <View style={{alignItems: "center",}}>
                <Text style={{fontSize: 15,}}>{lastTransaction}</Text>
              </View >
              <View style={{alignItems: "center",}}>
              {/* Input */}
                <TextInput
                style = {styles.textInput}
                keyboardType = "numeric"
                onChangeText = {(number) => setTempAmount(parseFloat(number))}
                clearButtonMode = "always"
                clearTextOnFocus = {true}
                defaultValue = "$"
                />
              </View>
              <View style={styles.plusMinusArea}>
              {/* Addition Button */}
                <TouchableOpacity 
                  style = {[styles.submitButtons,{backgroundColor: "#f77714"}]}
                  onPress = {() => addAmount()}>
                  <Text style = {styles.submitText}>ADD</Text>
                </TouchableOpacity>
              {/* Subtraction Button */}
                <TouchableOpacity 
                  style = {[styles.submitButtons,{backgroundColor: "#00ff00"}]}
                  onPress = {() => subtractAmount()}>
                    <Text style = {styles.submitText}>Subtract</Text>
                </TouchableOpacity>
              {/* Reset Button */}
                <TouchableOpacity
                style = {[styles.submitButtons,{backgroundColor: "#fff44f"}]}
                onPress = {() => resetTotal()}>
                  <Text style = {styles.submitText}>RESET</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
      </Modal>
      <SpendingBox1/>
      <SpendingBox2/>
      <SpendingBox3/>
      <SpendingBox4/>
      <SpendingBox5/>
      <SpendingBox6/>
      <SpendingBox7/>
      <SpendingBox8/>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  spendingBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    padding:30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    height: 150,
    margin: 5,
  },
  container1:{
    flex: 1,
    justifyContent: 'flex-start',
  },
    backButtonView: {
    alignItems: "flex-start",
  },
  backButton:{
    fontSize: 15,
  },
  catTitle:{
    paddingTop: 30,
    alignItems: "center",
    paddingBottom: 15,
  },

  plusMinusArea:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
  },
  textInput:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    borderColor: "darkgrey",
    borderRadius: 10,
    padding: 15,
    width: 250,
    height: 60,
    fontSize: 25,
    textAlign: "center",
  },
  submitButtons:{
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 100,
    height: 60,
  },
  submitText:{
    fontSize: 15,
  },
});
