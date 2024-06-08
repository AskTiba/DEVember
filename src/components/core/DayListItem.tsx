import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

type DayListItem = {
  day: number;
};

export default function DayListItem({ day }: DayListItem) {
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#32cd32',
    flex: 1,
    aspectRatio: 1,

    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ffd700',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffd700',
    fontSize: 45,
    fontFamily: 'AmaticBold',
  },
});
