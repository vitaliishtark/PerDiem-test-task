import React, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {loginActions, useAppDispatch} from '../../redux';
import BottomSheetComponent from '../components/BottomSheetComponent';
import placeholderService from '../../services/placeholder.service';
import PostItem from '../components/PostItem';
import TodoItem from '../components/TodoItem';
import {IPost, ITodo} from '../../interfaces';

const HomeScreen = () => {
  const tailwind = useTailwind();
  const dispatch = useAppDispatch();

  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  const handleButtonPostsPress = () => {
    setLoading(true);
    placeholderService
      .getPosts()
      .then(res => res.data)
      .then(res => {
        setPosts(res);
        closeBottomSheet();
      })
      .catch(e => console.error(e))
      .finally(() => {
        setLoading(false);
        setTodos([]);
      });
  };

  const handleButtonTodosPress = () => {
    setLoading(true);
    placeholderService
      .getTodos()
      .then(res => res.data)
      .then(res => {
        setTodos(res);
        closeBottomSheet();
      })
      .catch(e => console.error(e))
      .finally(() => {
        setLoading(false);
        setPosts([]);
      });
  };

  const handleLogOut = () => {
    dispatch(loginActions.setLoggedIn(false));
  };
  return (
    <SafeAreaView style={tailwind(' flex-1')}>
      <View
        style={tailwind(
          'flex-row items-center justify-between bg-blue-700 py-4 px-6 mb-4',
        )}>
        <Text style={tailwind('text-4xl text-white')}>Home Screen</Text>
        <TouchableOpacity
          style={tailwind('bg-white p-2 px-4 rounded-lg')}
          onPress={handleLogOut}>
          <Text style={tailwind('text-black text-center font-semibold ')}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={tailwind('bg-blue-500 p-4 rounded-lg m-4')}
        onPress={openBottomSheet}>
        <Text style={tailwind('text-white text-center')}>
          Open Bottom Sheet
        </Text>
      </TouchableOpacity>

      {loading ? (
        <View style={tailwind('flex-1 items-center')}>
          <Image
            style={{width: 48, height: 48, resizeMode: 'contain'}}
            source={{
              uri: 'https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif',
            }}
          />
        </View>
      ) : posts.length ? (
        <>
          <Text style={tailwind('text-2xl font-semibold text-center mb-3')}>
            Posts
          </Text>
          <FlatList
            style={tailwind('mx-3')}
            data={posts}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <PostItem post={item} />}
          />
        </>
      ) : todos.length ? (
        <>
          <Text style={tailwind('text-2xl font-semibold text-center mb-3')}>
            Todos
          </Text>
          <FlatList
            style={tailwind('mx-3')}
            data={todos}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <TodoItem todo={item} />}
          />
        </>
      ) : null}
      <BottomSheetComponent
        isVisible={bottomSheetVisible}
        onClose={closeBottomSheet}
        onPressButton1={handleButtonPostsPress}
        onPressButton2={handleButtonTodosPress}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
