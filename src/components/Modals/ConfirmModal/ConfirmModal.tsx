import Box from '../../../components/BaseKit/Box/Box';
import Modal from '../Modal/ModalPortal';
import type { FC } from 'react';
import BaseText from '../../../components/BaseKit/BaseText/BaseText';
import Divider from '../../../components/BaseKit/Divider/Divider';
import React from 'react';
import { makeStyle } from '../../../hooks/makeStyle';
import type { TThemeBase } from '../../../helper/theme';
type IConfirmModal = {
  title: string;
  descriptiron?: string;
  okTitle: string;
  notTitle: string;
  show: boolean;
  onSuccess?: () => void;
  onClose?: () => void;
};
export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.modals.confirm;
});
export const ConfirmModal: FC<IConfirmModal> = ({
  title,
  okTitle,
  notTitle,
  onSuccess,
  onClose,
  show,
}) => {
  const styles = useStyle();

  return (
    <Modal
      isOpen={show}
      inline
      onRequestClose={() => {
        if (onClose) {
          onClose();
        }
      }}
      closeButton={false}
      style={{
        marginLeft: 20,
        marginRight: 20,

        padding: 0,
        paddingTop: 30,
        paddingBottom: 0,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16,
        paddingLeft: 0,
        paddingRight: 0,
      }}
      styleCtn={{
        padding: 0,

        top: 0,
      }}
    >
      <Box style={styles?.modalConfirmCtn} jEnd aStart column>
        <BaseText style={styles?.title} title={title} />
        <Divider type="h" />
        <BaseText style={styles?.ok} title={okTitle} onPress={onSuccess} />
        <Divider type="h" />
        <BaseText style={styles?.not} title={notTitle} onPress={onClose} />
      </Box>
    </Modal>
  );
};

export default ConfirmModal;
