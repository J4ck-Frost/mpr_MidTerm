import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalculatorButton from './CalculatorButton';
import { COLORS } from './Color';

export default function App() {
  const [displayText, setDisplayText] = useState('');

  const addNumberHandler = (number) => {
    setDisplayText((currentText) => {
      const lastChar = currentText.slice(-1);

      if (currentText === '' && (number === '/' || number === '*')) {
        return currentText;
      }

      if (
        (isOperator(lastChar) && isOperator(number)) ||
        (lastChar === '.' && number === '.')
      ) {
        return currentText;
      }

      return currentText.length < 12 ? currentText + number : currentText;
    });
  };

  const clearNumberHandler = () => {
    setDisplayText('');
  };

  const calculateResult = () => {
    try {
      const result = eval(displayText);
      setDisplayText(result.toString().slice(0, 12));
    } catch (error) {
      setDisplayText('Error');
    }
  };

  const isOperator = (char) => {
    return ['+', '-', '*', '/'].includes(char);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.calculatorContainer, styles.shadowProp]}>
        <View style={styles.display}>
          <Text style={styles.displayText}>{displayText}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CalculatorButton title="1" onPress={() => addNumberHandler('1')} />
          <CalculatorButton title="2" onPress={() => addNumberHandler('2')} />
          <CalculatorButton title="3" onPress={() => addNumberHandler('3')} />
          <CalculatorButton style={styles.operationButton} title="+" onPress={() => addNumberHandler('+')} />
        </View>
        <View style={styles.buttonContainer}>
          <CalculatorButton title="4" onPress={() => addNumberHandler('4')} />
          <CalculatorButton title="5" onPress={() => addNumberHandler('5')} />
          <CalculatorButton title="6" onPress={() => addNumberHandler('6')} />
          <CalculatorButton style={styles.operationButton} title="-" onPress={() => addNumberHandler('-')} />
        </View>
        <View style={styles.buttonContainer}>
          <CalculatorButton title="7" onPress={() => addNumberHandler('7')} />
          <CalculatorButton title="8" onPress={() => addNumberHandler('8')} />
          <CalculatorButton title="9" onPress={() => addNumberHandler('9')} />
          <CalculatorButton style={styles.operationButton} title="*" onPress={() => addNumberHandler('*')} />
        </View>
        <View style={styles.buttonContainer}>
          <CalculatorButton title="AC" style={styles.operationButton} onPress={clearNumberHandler} />
          <CalculatorButton title="0" onPress={() => addNumberHandler('0')} />
          <CalculatorButton title="." onPress={() => addNumberHandler('.')} />
          <CalculatorButton style={styles.operationButton} title="/" onPress={() => addNumberHandler('/')} />
        </View>
        <View style={styles.buttonContainer}>
          <CalculatorButton title="=" onPress={calculateResult} style={styles.equalsButton} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calculatorContainer: {
    borderRadius: 10,
    backgroundColor: 'white',
    width: '80%',
    height: '60%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  shadowProp: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: 'space-between',
    width: '85%',
    marginBottom: 10,
  },
  display: {
    flex: 1.4,
    backgroundColor: COLORS.DISPLAY_BACKGROUND,
    width: '85%',
    marginVertical: 15,
    padding: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  displayText: {
    color: COLORS.DISPLAY_TEXT,
    fontSize: 24,
  },
  button: {
    width: 55,
    height: 55,
    backgroundColor: COLORS.BUTTON,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
  operationButton: {
    backgroundColor: COLORS.OPERATION_BUTTON,
  },
  equalsButton: {
    width: "100%",
    backgroundColor: COLORS.EQUALS_BUTTON,
    borderRadius: 5,
  },
});
