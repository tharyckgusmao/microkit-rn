import {
  style as styleInput,
  styleInputError,
} from '../components/Inputs/Input/styles';
import { colorsDefault } from '../helper/colors';
import { styles as styleLabel } from '../components/Inputs/Label/styles';
import { styles as stylesCheckBox } from '../components/Inputs/CheckBox/styles';
import { styles as stylesRage } from '../components/Inputs/Range/styles';
import { styles as stylesCounter } from '../components/Inputs/Counter/styles';

import { styles as styleButton } from '../components/Buttons/Button/styles';
import { styles as stylesBackButton } from '../components/Buttons/BackButton/styles';
import { styles as styleButtonTabs } from '../components/Buttons/ButtonTabs/styles';

import { styles as stylesDots } from '../components/Loaders/Dots/styles';
import { styles as stylesRadio } from '../components/Inputs/Radio/styles';
import { styles as stylesOtp } from '../components/Inputs/InputOtp/styles';

import { styles as stylesOpacity } from '../components/Transitions/TransitionOpacity/styles';

import { styles as stylesWorm } from '../components/Steps/Worm/styles';
import { styles as stylesBar } from '../components/Steps/Bar/styles';

import { styles as stylesline } from '../components/Progress/LineProgress/styles';

import { styles as stylesGeneric } from '../components/DataDisplay/GenericCard/styles';
import { styles as stylesAvatarGroup } from '../components/DataDisplay/AvatarGroup/styles';
import { styles as stylesCard } from '../components/DataDisplay/Card/styles';
import { styles as stylesTag } from '../components/DataDisplay/Tag/styles';

import { styles as stylesConfirm } from '../components/Modals/ConfirmModal/styles';
import { styles as stylesBase } from '../components/Modals/Modal/styles';
import { styles as stylesHeader } from '../components/Modals/BottomSheet/styles';
import { styles as stylesBottom } from '../components/Modals/BottomSheetBasic/styles';

import { styles as stylesOption } from '../components/Inputs/Select/Option/styles';
import { styles as stylesList } from '../components/Inputs/Select/List/styles';

let sizesDefault = {
  primary: 15,
};

let spacingDefault = {
  '01': 2,
  '02': 4,
  '03': 8,
  '04': 12,
  '05': 16,
  '06': 24,
  '07': 32,
};

export type TThemeStructure<T, U> = {
  components?: U;
  base?: T;
};
let base = {
  colors: colorsDefault,
  size: sizesDefault,
  spacing: spacingDefault,
};
let components = {
  inputs: {
    input: { ...styleInput, ...styleInputError },
    checkbox: stylesCheckBox,

    radio: stylesRadio,
    otp: stylesOtp,

    select: {
      input: { ...styleInput, ...styleInputError },
      option: stylesOption,
      list: stylesList,
    },
    range: stylesRage,
    counter: stylesCounter,
  },
  label: styleLabel,
  buttons: {
    button: styleButton,
    backButton: stylesBackButton,
    buttonTabs: styleButtonTabs,
  },
  loaders: {
    dot: stylesDots,
  },
  transitions: {
    opacity: stylesOpacity,
  },
  steps: {
    worm: stylesWorm,
    dots: stylesWorm,
    bar: stylesBar,
  },
  progress: {
    line: stylesline,
  },
  display: {
    generic: stylesGeneric,
    avatargroup: stylesAvatarGroup,
    card: stylesCard,
    tag: stylesTag,
  },
  modals: {
    confirm: stylesConfirm,
    base: stylesBase,
    bottom: stylesBottom,
    header: stylesHeader,
  },
};
export const defaultTheme = {
  base,
  components,
};
export type TThemeBase = TThemeStructure<typeof base, typeof components>;
