import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {ITodo} from '../../interfaces';

interface IProps {
  todo: ITodo;
}
const TodoItem: FC<IProps> = ({todo}) => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('mb-4')}>
      <Text>User ID: {todo.userId}</Text>
      <Text>Todo ID: {todo.id}</Text>
      <Text>Todo title: {todo.title}</Text>
      <Text>Completed: {`${todo.completed}`}</Text>
    </View>
  );
};

export default TodoItem;
