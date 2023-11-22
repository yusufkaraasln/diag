import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, Dimensions } from 'react-native';
import { deleteUser } from '../service/userSettings';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { logout } from '../redux/slices/auth';
import { resetUserDetails } from '../redux/slices/userDetails';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingIcon from '../assets/icons/LoadingIcon';

const DeleteAccountModal = ({ setModalVisible, modalVisible }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const deleteAccount = async () => {
    setLoading(true);
    const res = await deleteUser();
    if (res.success) {
      try {
        await GoogleSignin.signOut();
        dispatch(logout());
        dispatch(resetUserDetails());
        await AsyncStorage.removeItem('token');
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);
  };

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#000',
              opacity: 0.5,
              position: 'absolute'
            }}></Pressable>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to delete your account?</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                width: '100%'
              }}>
              <Pressable style={[styles.buttonOpen]} onPress={() => deleteAccount()}>
                {loading ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <LoadingIcon color={'#fff'} loading={loading} />
                  </View>
                ) : (
                  <Text style={styles.textStyle}>Yes</Text>
                )}
              </Pressable>
              <Pressable style={styles.buttonClose} onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={{
                    ...styles.textStyle,
                    color: '#242526'
                  }}>
                  No
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  modalView: {
    width: Dimensions.get('window').width * 0.8,
    backgroundColor: '#242526',
    borderRadius: 20,

    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 4,
    padding: 10,
    width: Dimensions.get('window').width * 0.2,
    elevation: 2
  },
  buttonOpen: {
    borderRadius: 4,
    padding: 10,
    backgroundColor: 'gray',
    width: Dimensions.get('window').width * 0.2
  },
  buttonClose: {
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#00FFD1',
    color: '#242526',
    width: Dimensions.get('window').width * 0.2
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: Dimensions.get('window').width * 0.05,
    color: '#fff',
    fontSize: Dimensions.get('window').width * 0.04,
    textAlign: 'center'
  }
});

export default DeleteAccountModal;
