import theme from '@/theme';
import Icons from '@/utils/icons';
import React from 'react';
import {TextStyle} from 'react-native';
export type IconsId =
  | 'icon_-disconnectbold'
  | 'icon_-disconnectlinear'
  | 'icon_addbold'
  | 'icon_adduserbold'
  | 'icon_adduserlinear'
  | 'icon_alert'
  | 'icon_arrowcircleleftbold'
  | 'icon_arrowdownbold'
  | 'icon_arrowleftbold'
  | 'icon_arrowrightbold'
  | 'icon_arrowupbold'
  | 'icon_calendarbold'
  | 'icon_calendarlinear'
  | 'icon_checkbold'
  | 'icon_checkcirclebold'
  | 'icon_clinicbold'
  | 'icon_cliniclinear'
  | 'icon_closebold'
  | 'icon_crmbold'
  | 'icon_crmlinear'
  | 'icon_disconnectbold'
  | 'icon_disconnectlinear'
  | 'icon_editlinear'
  | 'icon_feedcontentbold'
  | 'icon_feedcontentlinear'
  | 'icon_graduatebold'
  | 'icon_graduatelinear'
  | 'icon_groupchatlinear'
  | 'icon_helpbold'
  | 'icon_helplinear'
  | 'icon_hidebold'
  | 'icon_inboxlinear'
  | 'icon_informationbold'
  | 'icon_informationlinear'
  | 'icon_interestbold'
  | 'icon_interestlinear'
  | 'icon_keybold'
  | 'icon_keylinear'
  | 'icon_likebold'
  | 'icon_likelinear'
  | 'icon_linkcirclebold'
  | 'icon_linkcirclelinear'
  | 'icon_listsavebold'
  | 'icon_listsavelinear'
  | 'icon_lockbold'
  | 'icon_locklinear'
  | 'icon_logoutbold'
  | 'icon_mailbold'
  | 'icon_mailbox'
  | 'icon_maillinear'
  | 'icon_mailnotification'
  | 'icon_mailsendllinear'
  | 'icon_mailstarlinear'
  | 'icon_mailverificationlinear'
  | 'icon_medicineslinear'
  | 'icon_messagesbold'
  | 'icon_messageslinear'
  | 'icon_messagetextlinear'
  | 'icon_monitorbold'
  | 'icon_monitorlinear'
  | 'icon_morebold'
  | 'icon_moresquarebold'
  | 'icon_msgcodelinear'
  | 'icon_notificationlinear'
  | 'icon_phonebold'
  | 'icon_phonelinear'
  | 'icon_profiledeletelinear'
  | 'icon_readerlinear'
  | 'icon_readview'
  | 'icon_removesavebold'
  | 'icon_savebold'
  | 'icon_saveline'
  | 'icon_searchlinear'
  | 'icon_sendbold'
  | 'icon_sendlinear'
  | 'icon_settingsbold'
  | 'icon_settingslinear'
  | 'icon_sharebold'
  | 'icon_shareilnear'
  | 'icon_shieldsecuritybold'
  | 'icon_shieldsecuritylinear'
  | 'icon_showbold'
  | 'icon_specialitybold'
  | 'icon_starbold'
  | 'icon_starlinear'
  | 'icon_timerbold'
  | 'icon_timerlinear'
  | 'icon_trashbold'
  | 'icon_trashlinear'
  | 'icon_universitybold'
  | 'icon_universitylinear'
  | 'icon_updatelinear'
  | 'icon_userbold'
  | 'icon_userlinear'
  | 'icon_usersbold'
  | 'icon_userslinear'
  | 'icon_verifybold'
  | 'icon_whatsapplinear';
type IIcon = {
  name: IconsId;
  size?: number;
  style?: TextStyle;
  onPress?: () => void;
};

const Icon: React.FC<IIcon> = ({
  style,
  size = theme.size[12],
  name,
  onPress
}) => {
  return (
    <Icons
      pointerEvents="none"
      name={name}
      size={size}
      onPress={() => {
        if (onPress) {
          onPress();
        }
      }}
      style={{
        ...style
      }}
    />
  );
};
export default Icon;
