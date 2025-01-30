import { FormControl, InputLabel, MenuItem, Select as Selector } from "@mui/material";

export function Select() {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
      <Selector
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
      >
        <MenuItem>Episodes</MenuItem>
        <MenuItem>Rating</MenuItem>
      </Selector>
    </FormControl>
  );
}
