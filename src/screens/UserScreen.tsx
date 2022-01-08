import React from 'react';
import {View, Text} from 'react-native';
import {useQuery} from 'react-query';

function UserScreen() {
  const {data} = useQuery('repoData', () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
      res.json(),
    ),
  );
  console.log(data);
  return (
    <View>
      <Text>Users</Text>
    </View>
  );
}

export default UserScreen;
