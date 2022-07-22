import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';

const ariaLabel = { 'aria-label': 'description' };

export default function Search() {

    const [searchValue, setSearchValue] = React.useState('');
    const [searchResult, setSearchResult] = React.useState('');

    const serachCountry = (event) => {
        setSearchValue((event.target as HTMLInputElement).value);
    }

    React.useEffect(() => {
        // getOptionsData();
      }, [searchValue]);

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <SearchIcon color={'primary'}/>
      <Input placeholder="Search for a country..." inputProps={ariaLabel} onChange={event => serachCountry(event)}/>
    </Box>
  );
}
