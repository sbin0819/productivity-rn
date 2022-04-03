import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Calendar} from 'react-native-calendars';

const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};

interface Prop {}
function CalendarView() {
  React.useEffect(() => {}, []);
  return (
    <View>
      <Calendar
        style={styles.calendar}
        markingType={'multi-dot'}
        markedDates={{
          '2022-04-25': {
            dots: [vacation, massage, workout],
            selected: true,
            selectedColor: 'red',
          },
          '2022-04-26': {dots: [massage, workout], disabled: true},
        }}
        onDayPress={day => {
          console.log('selected day', day);
        }}
        theme={{
          selectedDayBackgroundColor: '#009688',
          arrowColor: '#009688',
          dotColor: '#009688',
          todayTextColor: '#009688',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: '#fff',
  },
});

export default CalendarView;
