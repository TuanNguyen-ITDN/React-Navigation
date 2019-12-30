import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Platform} from 'react-native';
import Item from './components/Item';
import data from '../../utils/Data';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedRowKey: null,
    };
  }

  refreshFlatList = activeKey => {
    this.setState(prevState => {
      return {
        deletedRowKey: activeKey,
      };
    });
  };

  render() {
    return (
      <View style={style.styleView}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({item, index}) => {
            return (
              <Item
                item={item}
                index={index}
                parentFlatList={this}
                component={this.props.componentId}
              />
            );
          }}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  styleView: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 34 : 0,
  },
});

export default Home;
