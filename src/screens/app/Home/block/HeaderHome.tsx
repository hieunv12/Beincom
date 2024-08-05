import {PlusIcon} from '@assets';
import {IconLogoApp, IconLogoTextApp} from '@components';
import {Colors, Shadow, Spacing} from '@theme';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function HeaderHome() {
  const [isAddWorkSpace, setAddWorkSpace] = useState<boolean>(false);
  const {top} = useSafeAreaInsets();
  return (
    <>
      <View style={[styles.container, {paddingTop: top || Spacing.height16}]}>
        <View style={styles.logo}>
          <IconLogoApp
            style={{width: Spacing.width32, height: Spacing.width32}}
          />
          <IconLogoTextApp
            style={{
              width: Spacing.width77,
              height: Spacing.height30,
              marginLeft: Spacing.width8,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => setAddWorkSpace(true)}
          style={styles.iconRight}>
          <PlusIcon
            width={Spacing.width30}
            height={Spacing.width30}
            iconFillColor={Colors.primary}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: Spacing.width35,
    backgroundColor: Colors.white,
    paddingBottom: Spacing.width8,
    ...Shadow.normal,
    paddingHorizontal: Spacing.width16,
  },

  logo: {
    flexDirection: 'row',
  },
  icon: {
    width: Spacing.width30,
    height: Spacing.width30,
  },
  iconRight: {},
  iconLeft: {
    width: 24,
    height: 24,
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRightContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleRight: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleRightContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
