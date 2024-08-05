// src/screens/BoardsScreen.tsx
import {AppEmpty, AppInput, AppText} from '@components';
import {BoardInterface} from '@interfaces';
import {Spacing} from '@theme';
import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {HeaderBoard} from './block/HeaderBoard';
import {ItemBoard} from './block/ItemBoard';
import {useHook} from './BoardsScreen.hook';
import {styles} from './styles';

export const BoardsScreen: React.FC = () => {
  const {
    currentBoard,
    setCurrentBoard,
    search,
    setSearch,
    handleEditBoard,
    // debouncedSetSearchTerm,
    filteredBoards,
  } = useHook();

  const renderItem = useCallback(({item}: {item: BoardInterface}) => {
    return (
      <ItemBoard
        item={item}
        onEdit={() => {
          handleEditBoard(item);
        }}
      />
    );
  }, []);
  const inputSearchBoard = useCallback(() => {
    return (
      <View style={styles.containerSearch}>
        <AppInput
          placeholder="Search board"
          value={search}
          inputStyle={styles.inputSearch}
          onChangeText={(value: string) => {
            setSearch(value);
            // debouncedSetSearchTerm(value);
          }}
        />
        <AppText style={styles.title}>
          {'Your workspaces'.toUpperCase()}
        </AppText>
      </View>
    );
  }, [search]);
  return (
    <View style={styles.container}>
      <HeaderBoard
        currentBoard={currentBoard}
        setCurrentBoard={setCurrentBoard}
      />

      <FlatList
        data={filteredBoards}
        keyExtractor={item => `item_board_${item.id}`}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: Spacing.width16,
        }}
        renderItem={renderItem}
        ListHeaderComponent={inputSearchBoard()}
        ListEmptyComponent={
          <AppEmpty
            title="No board"
            description="Please click the `+` icon in the top right corner of the title bar to add your table."
          />
        }
      />
    </View>
  );
};
