import { useBackHandler } from '@react-native-community/hooks';
import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { Control, useController } from 'react-hook-form';
import React, {
  ActivityIndicator,
  Keyboard,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import type { TThemeBase } from '../../../../helper/theme';
import { makeStyle } from '../../../../hooks/makeStyle';
import BaseText from '../../../BaseKit/BaseText/BaseText';
import Box from '../../../BaseKit/Box/Box';
import Icon from '../../../BaseKit/Icon/Icon';
import type { IconsId } from '../../../BaseKit/Icon/generated/icons';
import BottomSheet from '../../../Modals/BottomSheet/BottomSheet';
import ErrorLabel from '../../ErrorLabel/ErrorLabel';
import List from '../List/List';
import SelectOption from '../Option/Option';

type TSelect = {
  placeholder: string;
  label?: string;

  title?: string;
  preffixClass?: string;
  suffixClass?: string;
  onChange?: (e: string | any) => void;
  name: string;
  colorLoading?: string;
  style?: ViewStyle;
  preffix?: ReactNode | null | string | IconsId;
  suffix?: ReactNode | null | string | IconsId;
  disabled?: boolean;

  factorSearch?: string;
  modal?: boolean;
  search?: boolean;
  pressEnterBlur?: boolean;
  multiple?: boolean;
  options?: { value: string | number; label: string }[];
  asyncFn?: Awaited<Promise<any>> | null;
  control?: Control<any>;
  defaultValue?: any;
  snapPoints?: Array<number>;
  colorsInputAnimate?: [any, any, any];
  defaultParams?: [string, string | null][];
};
export const useStyle = makeStyle((theme: TThemeBase) => {
  return theme?.components?.inputs?.select?.input;
});

export const Select: FC<TSelect> = ({
  placeholder,
  onChange,
  name,
  title,
  style,
  preffix = null,
  suffix = null,
  asyncFn = null,
  modal = false,
  search = false,
  options = [],
  snapPoints = [],
  multiple,
  disabled,
  factorSearch,
  defaultValue,
  defaultParams,
  control,
  colorLoading = '#000',
  colorsInputAnimate = [
    'rgba(243,88,67,1)',
    'rgba(235, 235, 235, 1)',
    'rgba(20, 20, 20, 1)',
  ],
}) => {
  const styles = useStyle();
  const [optionsInner, setOptionsInner] = useState<
    Array<any> | { label: any; string: any; data: any }
  >(options);
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const focused = useSharedValue(false);

  useEffect(() => {
    if (options.length && !asyncFn) {
      setOptionsInner(options);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.length]);

  const {
    field,
    fieldState: { isTouched, error },
  } = useController({
    control,
    defaultValue,
    name,
  });
  const [innerSelect, setInnerSelect] = useState([]);
  const handleChangeSelect = (item: any) => {
    if (multiple) {
      let tmp: Array<any> = [...innerSelect];
      let checkNotExistIndex = tmp?.findIndex((e) => e.value == item.id);
      if (checkNotExistIndex <= -1) {
        tmp.push({
          label: item.label,
          value: item.id,
          data: item,
        });
      } else {
        tmp.splice(checkNotExistIndex, 1);
      }
      setInnerSelect(tmp);
    } else {
      setInnerSelect({
        label: item.label,
        value: item.id,
        data: item,
      });
    }
  };
  // const maskPattern = mask ? masks(mask) : null;
  const valueShared = useDerivedValue(() => {
    return withTiming(error ? -1 : field.value || focused.value ? 1 : 0);
  }, [field.value, error, focused]);

  const styleInputAnimated = useAnimatedStyle(() => {
    const color = interpolateColor(
      valueShared.value,
      [-1, 0, 1],
      colorsInputAnimate
    );
    return {
      borderColor: color,
    };
  }, [valueShared]);
  const getStyles = useMemo(() => {
    return StyleSheet.flatten({
      ...styles?.ctn,
      ...style,
      ...(focused.value && styles?.typing),
      ...(focused.value && !field.value && styles?.empty),
      ...(field.value && !error?.message && styles?.filled),
      ...(disabled && styles?.disabled),
      ...(error && styles?.error),
      ...styles?.preffixCtn,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value, error?.message]);

  const getStylesIcons: TextStyle = useMemo(() => {
    return {
      ...styles?.icon,
      ...(focused.value && styles?.iconFilled),
      ...(field.value && !error?.message && styles?.iconFilled),
      ...(error && styles?.iconError),
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value, error?.message]);
  useBackHandler(() => {
    if (openModal) {
      setInnerSelect(null);
      setOpenModal(false);
      Keyboard.dismiss();
      return true;
    }
    return false;
  });
  return (
    <Box>
      <Animated.View style={[getStyles, styleInputAnimated]}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            if (!disabled) {
              setOpenModal(true);
              Keyboard.dismiss();
            }
          }}
          style={styles?.placeholderCtn}
          hitSlop={{
            bottom: 10,
            left: 10,
            top: 10,
            right: 10,
          }}
        >
          <BaseText
            numberOfLines={1}
            style={{
              ...styles?.placeholder,
              ...getStyles,
              ...{
                borderWidth: 0,
                paddingLeft: 0,
                paddingBottom: 0,
                paddingTop: 0,
              },
            }}
            title={
              (Array.isArray(field.value)
                ? field.value?.map((e) => e.label).join(', ')
                : field.value?.label) || placeholder
            }
          />
          {preffix ? (
            <Box style={{ ...styles?.preffix, left: -28 }}>
              {typeof preffix === 'string' ? (
                <Icon
                  size={12}
                  style={getStylesIcons}
                  name={
                    field.value || error?.message
                      ? (preffix.replace('linear', 'bold') as IconsId)
                      : (preffix as IconsId)
                  }
                />
              ) : (
                preffix
              )}
            </Box>
          ) : null}
          {suffix && !loading && modal ? (
            <Box style={{ ...styles?.suffix, right: 0 }}>
              {typeof suffix === 'string' ? (
                <Icon
                  size={12}
                  style={styles?.suffixText}
                  name={
                    field.value || error?.message
                      ? (suffix.replace('linear', 'bold') as IconsId)
                      : (suffix as IconsId)
                  }
                />
              ) : (
                suffix
              )}
            </Box>
          ) : null}
          {loading && !modal && (
            <Box
              style={{
                position: 'absolute',
                right: 0,
                top: 10,
                width: 14,
                height: 14,
                zIndex: 4,
              }}
            >
              <ActivityIndicator size="small" color={colorLoading} />
            </Box>
          )}
        </TouchableOpacity>
      </Animated.View>

      {modal && (
        <BottomSheet
          show={openModal}
          headerTitle={title}
          onCloseModal={() => {
            setInnerSelect(null);
            setOpenModal(false);
          }}
          snapPoints={snapPoints}
        >
          <List
            element={<SelectOption />}
            paddingStart={20}
            size={52}
            serviceFn={asyncFn}
            search={search}
            activeValue={innerSelect}
            multiple={multiple}
            factorSearch={factorSearch}
            defaultParams={defaultParams}
            onConfirm={() => {
              if (innerSelect) {
                field.onChange(innerSelect);

                onChange && onChange(innerSelect);
                setOpenModal(false);
              }
            }}
            title={title}
            handleChangeActive={handleChangeSelect}
          />
        </BottomSheet>
      )}

      <ErrorLabel
        styles={{ errorCtn: styles?.errorCtn, errorLabel: styles?.errorLabel }}
        message={error?.message}
      />
    </Box>
  );
};

export default Select;
