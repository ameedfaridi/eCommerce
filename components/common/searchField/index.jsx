import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';

export default function SearchSection(props) {
  return (
    <TextField
      variant="outlined"
      placeholder="search for product"
      color="secondary"
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton>
              <Search />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}
