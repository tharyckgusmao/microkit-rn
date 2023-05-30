import {
  style as styleInput,
  styleInputError,
} from '../components/Inputs/Input/styles';
import { colorsDefault } from '../helper/colors';
import { styles as styleLabel } from '../components/Inputs/Label/styles';
import { styles as stylesCheckBox } from '../components/Inputs/CheckBox/styles';

import { styles as styleButton } from '../components/Buttons/Button/styles';
import { styles as stylesBackButton } from '../components/Buttons/BackButton/styles';
import { styles as styleButtonTabs } from '../components/Buttons/ButtonTabs/styles';

import { styles as stylesDots } from '../components/Loaders/Dots/styles';
import { styles as stylesRadio } from '../components/Inputs/Radio/styles';
import { styles as stylesOtp } from '../components/Inputs/InputOtp/styles';

import { styles as stylesOpacity } from '../components/Transitions/TransitionOpacity/styles';

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
    checkbox: {
      ...stylesCheckBox,
    },
    radio: {
      ...stylesRadio,
    },
    otp: {
      ...stylesOtp,
    },
  },
  label: { ...styleLabel },
  buttons: {
    button: { ...styleButton },
    backButton: { ...stylesBackButton },
    buttonTabs: { ...styleButtonTabs },
  },
  loaders: {
    dot: { ...stylesDots },
  },
  transitions: {
    opacity: { ...stylesOpacity },
  },
};
export const defaultTheme = {
  base,
  components,
};
export type TThemeBase = TThemeStructure<typeof base, typeof components>;
