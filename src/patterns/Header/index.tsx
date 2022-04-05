import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { SearchButton } from "../../components/SearchButton";
import { SearchInput } from "../../components/SearchInput";
import { Box, BoxSearch, Flex, Wrapper } from "./styled";
import searchIcon from '../../assets/icons/search.svg';
import closeIcon from '../../assets/icons/close-line.svg';
import { useState } from "react";
import { Link } from "../../components/Link";

export function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <Wrapper>
      <Flex>
        <Link goto="/"><Logo /></Link>
        <SearchInput invisibleMobile />
      </Flex>
      {visible && 
        <BoxSearch>
          <SearchInput />
          <SearchButton icon={closeIcon} onHandleClick={() => setVisible(!visible)} />
        </BoxSearch>
      }
      <Box>
        <Button>
          Login
        </Button>
      </Box>
      <SearchButton 
        invisibleDesktop
        icon={searchIcon} 
        onHandleClick={() => setVisible(!visible)}
      />
    </Wrapper>
  );
}
