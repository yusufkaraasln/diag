import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, StyleSheet, Text, Pressable, View, Dimensions } from 'react-native';

const DiagnoDiseaseDetailsModal = ({ setModalVisible, modalVisible }) => {

  const { t } = useTranslation();

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
            <Text style={styles.modalText}>The Reason for This Prediction...</Text>
            <Text
              style={{
                color: '#fff',
                textAlign: 'justify',
                fontWeight: '300',
                lineHeight: Dimensions.get('window').height * 0.03,
                fontSize: Dimensions.get('window').width * 0.04
              }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perferendis labore
              soluta laborum! Praesentium, quis? Natus nam ut facilis minus aspernatur animi eveniet
              autem, repellat ea facere, laudantium perferendis velit ipsa in debitis quidem aliquid
              aliquam doloribus dicta numquam. Voluptate architecto, dignissimos doloribus qui
              soluta illum nobis voluptatibus temporibus molestias, tenetur dolorum adipisci illo
              necessitatibus facilis quas possimus enim. Pariatur vero fugiat amet ad quia quod
              similique numquam aliquam optio voluptatibus veritatis sunt rem consectetur, suscipit
              odit repellendus ex corporis facere nesciunt. Repellat aliquam possimus facere vitae!
              Iste, harum est. Dolorem fuga numquam rem quasi illo dolor reiciendis illum in!
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                width: '100%'
              }}>
              <Pressable style={[styles.buttonOpen]} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}> {t('ok')}</Text>
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
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: '#242526',
    borderRadius: 20,
    gap: Dimensions.get('window').width * 0.05,

    padding: 35,
    alignItems: 'flex-start',
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
    backgroundColor: '#00FFD1',
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
    color: '#242526',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    color: '#00FFD1',
    fontWeight: 'bold',
    fontSize: Dimensions.get('window').width * 0.04,
    textAlign: 'right'
  }
});

export default DiagnoDiseaseDetailsModal;
