import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors, FontSize, FontWithBold_Barlow} from '@theme';
export interface AppEmptyProps {
  title?: string;
  description?: string;
}

export function AppEmpty(props: AppEmptyProps) {
  const {title = 'Not found', description = ''} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: FontSize.Font16,
    ...FontWithBold_Barlow.Bold_Barlow_600,
    color: Colors.black,
  },
  description: {
    fontSize: FontSize.Font14,
    ...FontWithBold_Barlow.Medium_Barlow_400,
    color: Colors.gray2,
    maxWidth: '80%',
    textAlign: 'center',
    opacity: 0.8,
  },
});
