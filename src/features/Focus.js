import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton
            onPress={() => addSubject(subject)}
            title="+"
            size={50}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
