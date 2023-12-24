import React from 'react';
import {Text, Box} from '../../../../../components';
import {GenreFilter} from '..';
import {Genre} from '../../type';

export const StickyHeader = ({
  genres,
  headerText,
  selectedGenres,
  handleGenreChange,
}: {
  genres: Genre[];
  headerText: string;
  selectedGenres: number[];
  handleGenreChange: (genreArr: number[]) => void;
}) => {
  return (
    <Box
      flexDirection="column"
      left={0}
      right={0}
      paddingVertical={12}
      paddingLeft={16}
      width="100%"
      backgroundColor="darkGray">
      <Text fontSize={24} fontWeight={'700'} letterSpacing={1} color="red">
        {headerText}
      </Text>
      {genres && genres.length > 0 ? (
        <Box marginTop={16}>
          <GenreFilter
            genres={genres}
            selectedGenres={selectedGenres}
            handleGenreChange={handleGenreChange}
          />
        </Box>
      ) : null}
    </Box>
  );
};
