// import {authApi} from '@redux';
import {useState} from 'react';

import {BoardInterface} from '@interfaces';
import {getBoards} from '@redux';
import {useDispatch, useSelector} from 'react-redux';

export const useHook = () => {
  const dispatch = useDispatch();

  const boards = useSelector(getBoards);
  const [currentBoard, setCurrentBoard] = useState<BoardInterface | null>(null);
  const [search, setSearch] = useState<string>('');

  const handleEditBoard = (board: BoardInterface) => {
    setCurrentBoard(board);
  };
  //   const debouncedSetSearchTerm = useCallback(
  //     debounce((term: string) => {
  //       setSearch(term);
  //     }, 300),
  //     [],
  //   );
  const filteredBoards = boards.filter(board =>
    board.name.toLowerCase().includes(search.toLowerCase()),
  );
  return {
    boards,
    currentBoard,
    setCurrentBoard,
    search,
    setSearch,
    handleEditBoard,
    // debouncedSetSearchTerm,
    filteredBoards,
  };
};
