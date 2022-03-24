import { Icon } from "../Icon";
import { Box, Button } from "./styled";
import searchIcon from "../../assets/icons/search.svg";

export function SearchBar() {
  return (
    <Box>
      <Button type="submit">
        <Icon icon={searchIcon} />
      </Button>
    </Box>
  );
}
