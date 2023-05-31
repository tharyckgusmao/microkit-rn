import { useState, type FC, useRef } from 'react';
import React, { ScrollView } from 'react-native';
import {
  BaseText,
  BottomSheet,
  BottomSheetBasic,
  Box,
  Button,
  ConfirmModal,
  Divider,
  GenericCard,
  IBottomSheetHandle,
  Label,
  Modal,
} from 'react-native-microkit-rn';

const Modals: FC = () => {
  const [modalCenter, setModalCenter] = useState(false);
  const [modalCenterCustom, setModalCenterBottom] = useState(false);
  const [bottomSheet, setBottomSheet] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const bottomSheetBasic = useRef<IBottomSheetHandle>(null);

  return (
    <>
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          gap: 25,
        }}
      >
        <BaseText title="Modals Example" />
        <Label title="Modal Center" />

        <Button
          title="Open Center Modal"
          onPress={() => {
            setModalCenter((e) => !e);
          }}
        />
        <Modal
          isOpen={modalCenter}
          inline
          onRequestClose={() => {
            setModalCenter(false);
          }}
          closeButton={true}
          style={{
            marginLeft: 18,
            marginRight: 18,
            borderRadius: 20,
            paddingTop: 20,
            paddingBottom: 20,
          }}
          styleCtn={{
            top: 0,
          }}
        >
          <GenericCard
            title="Lorem"
            description={'lorem'}
            image={{ uri: 'https://unsplash.it/400/400?image=1' }}
            button={'Lorem'}
          />
        </Modal>
        <Divider type="h" />
        <Button
          title="Open Center Modal custom animation"
          onPress={() => {
            setModalCenterBottom((e) => !e);
          }}
        />

        <Modal
          isOpen={modalCenterCustom}
          inline
          onRequestClose={() => {
            setModalCenterBottom(false);
          }}
          bottom={true}
          style={{
            marginLeft: 18,
            marginRight: 18,
            borderRadius: 20,
            paddingTop: 20,
            paddingBottom: 20,
          }}
          styleCtn={{
            top: 0,
          }}
        >
          <GenericCard
            title="Lorem"
            description={'lorem'}
            image={{ uri: 'https://unsplash.it/400/400?image=1' }}
            button={'Lorem'}
          />
        </Modal>

        <Divider type="h" />
        <Button
          title="Open confirm Modal"
          onPress={() => {
            setConfirmModal((e) => !e);
          }}
        />

        <ConfirmModal
          okTitle="Ok"
          notTitle="Cancel"
          title="Lorem"
          descriptiron="Lorem"
          show={confirmModal}
          onClose={() => {
            setConfirmModal(false);
          }}
          onSuccess={() => {
            setConfirmModal(false);
          }}
        />

        <Divider type="h" />
        <Button
          title="Open basic Bottom sheet"
          onPress={() => {
            bottomSheetBasic?.current?.open();
          }}
        />
        <Divider type="h" />
        <Button
          title="Open complex on portal Bottom sheet"
          onPress={() => {
            setBottomSheet((e) => !e);
          }}
        />
        <BottomSheet
          snapPoints={['60%', '80%']}
          show={bottomSheet}
          onCloseModal={() => {
            setBottomSheet(false);
          }}
          headerTitle="test"
          headerSeparateColor={'#fff'}
        >
          <Box
            style={{
              padding: 14,
            }}
          >
            <GenericCard
              title="Lorem"
              description={'lorem'}
              image={{ uri: 'https://unsplash.it/400/400?image=1' }}
              button={'Lorem'}
            />
          </Box>
        </BottomSheet>
      </ScrollView>
      <BottomSheetBasic
        height={500}
        umount={true}
        ref={bottomSheetBasic}
        style={{
          width: '100%',
          padding: 14,
        }}
      >
        <GenericCard
          title="Lorem"
          description={'lorem'}
          image={{ uri: 'https://unsplash.it/400/400?image=1' }}
          button={'Lorem'}
        />
      </BottomSheetBasic>
    </>
  );
};
export default Modals;
