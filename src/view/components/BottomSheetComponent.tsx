import React from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {useTailwind} from 'tailwind-rn';

interface BottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
  onPressButton1: () => void;
  onPressButton2: () => void;
}

const BottomSheetComponent: React.FC<BottomSheetProps> = ({
  isVisible,
  onClose,
  onPressButton1,
  onPressButton2,
}) => {
  const tailwind = useTailwind();
  return (
    <Modal
      animationType="slide"
      transparent
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={tailwind('flex-1 justify-end')}>
        <View style={tailwind('bg-white rounded-t-lg p-4 bg-blue-100')}>
          <Text style={tailwind('text-lg font-semibold mb-4')}>
            Choose an action:
          </Text>
          <TouchableOpacity
            style={tailwind('bg-gray-300 p-3 rounded-lg mb-2')}
            onPress={onPressButton1}>
            <Text style={tailwind('text-black text-center')}>Get posts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind('bg-gray-300 p-3 rounded-lg')}
            onPress={onPressButton2}>
            <Text style={tailwind('text-black text-center')}>Get todos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind('bg-red-500 p-3 rounded-lg mt-2')}
            onPress={onClose}>
            <Text style={tailwind('text-white text-lg text-center')}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default BottomSheetComponent;
