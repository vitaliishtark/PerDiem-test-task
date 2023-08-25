import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {IPost} from '../../interfaces';

interface IProps {
  post: IPost;
}
const PostItem: FC<IProps> = ({post}) => {
  const tailwind = useTailwind();
  return (
    <View style={tailwind('mb-4')}>
      <Text>User ID: {post.userId}</Text>
      <Text>Post ID: {post.id}</Text>
      <Text>Post title: {post.title}</Text>
      <Text>Post body: {post.body}</Text>
    </View>
  );
};

export default PostItem;
