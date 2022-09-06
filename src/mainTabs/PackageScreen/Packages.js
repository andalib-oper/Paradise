import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, {useEffect, useState}from 'react'
import StackHeader from '../../../components/StackHeader'
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import SearchBar from 'react-native-dynamic-search-bar';
import ProductButton from '../../../components/productButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Packages = () => {
  const navigation = useNavigation()
  const [filterVisible, setFilterVisible] = useState(false);
  const filter = () => {
    // console.log("here 2")
    setFilterVisible(!filterVisible);
  };

  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
  const price = ["Egypt", "Canada", "Australia", "Ireland"]
  return (
    <View style={styles.container}>
       <StackHeader
       headerName="Package"
       name="arrow-left"
       size={24}
       color="black"
       headerNavigation={() => navigation.goBack()}
       filterName="filter"
       filterSize={28}
       filterColor="black"
       filterNavigation={() => filter()}
     />
      <ScrollView>
        {filterVisible ? (
          <View style={{
            // backgroundColor: 'yellow'
          }}>
            <View
              style={{
                marginTop: '1%',
                // backgroundColor: 'red',
                marginBottom: '1%',
              }}>
              <Text
                style={{
                  marginLeft: '10%',
                  // marginBottom: '1%',
                  fontSize: 12,
                  fontWeight: '600',
                }}>
              Place
              </Text>
              <SelectDropdown
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
                data={countries}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
                defaultButtonText={'Select Shops'}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return (
                    <FontAwesome
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={18}
                    />
                  );
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  // marginBottom: '1%',
                  fontSize: 12,
                  marginLeft: '10%',
                  fontWeight: '600',
                }}>
                price
              </Text>
              <SelectDropdown
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
                data={price}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
                defaultButtonText={'Select Categories'}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return (
                    <FontAwesome
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={18}
                    />
                  );
                }}
              />
            </View>
            <View style={styles.headerButton}>
              <View>
                <TouchableOpacity
                  style={styles.searchButton}
                  // onPress={() => filterAply()}>
                  onPress={()=> console.log("object")}>
                  <Text style={styles.search}>Search</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : null}
        <ProductButton/>
      </ScrollView>
    </View>
  )
}

export default Packages

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2F1FF',
  },
  animation: {
    width: windowWidth / 4,
    height: windowWidth / 4,
    backgroundColor: 'yellow',
    // justifyContent: 'center',
    alignSelf: 'center',
    // alignContent: 'center'
  },
  grid: {
    position: 'relative',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 30,
    marginTop: '10%',
  },
  gridItem: {
    margin: 5,
    width: windowWidth / 2.4,
    height: windowHeight / 3.2,
    // backgroundColor: 'pink',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  box2ItemInner: {
    // backgroundColor: 'red',
    alignSelf: 'center',
    alignItems: 'center',
  },
  box2text: {
    // justifyContent: "center",
    // alignSelf: 'center',
    textAlign: 'left',
    // backgroundColor: 'orange',
    marginTop: '5%',
    fontWeight: '400',
    fontSize: 16,
    color: 'black',
    width: 'auto',
  },
  dropdown1BtnStyle: {
    width: '80%',
    height: 40,
    // marginBottom: '10%',
    // margin: '10%',
    alignSelf: 'center',
    // marginTop: '5%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {
    color: '#444',
    textAlign: 'left',
    fontSize: 12,
  },
  dropdown1DropdownStyle: {
    backgroundColor: '#EFEFEF',
  },
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dropdown1RowTxtStyle: {
    color: '#444',
    textAlign: 'left',
  },
  image: {
    width: windowWidth / 2.8,
    height: windowWidth / 2.5,
  },
  searchbar: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  searchButton: {
    alignSelf: 'flex-end',
    // marginLeft: '10%',
    marginRight: '10%',
    marginTop: '5%',
    marginBottom: '5%',
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 5,
    width: windowWidth / 6,
    height: windowHeight / 24,
  },
  search: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
  },
  headerButton: {
    // marginBottom: '5%',
    justifyContent: 'center',
    // marginTop: '5%',
    // flexDirection: 'row',
    backgroundColor: '#C2F1FF',
  },
});