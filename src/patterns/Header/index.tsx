import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { SearchButton } from "../../components/SearchButton";
import { SearchInput } from "../../components/SearchInput";
import { Box, BoxSearch, Flex, Wrapper } from "./styled";
import searchIcon from '../../assets/icons/search.svg';
import closeIcon from '../../assets/icons/close-line.svg';
import { useState } from "react";
import { Link } from "../../components/Link";
import { Link as LinkRouter } from "react-router-dom";

export function Header() {
  const [visible, setVisible] = useState(false);

  return (
    <Wrapper>
      <Flex>
        <LinkRouter to={"/"}><Logo /></LinkRouter>
        <SearchInput invisibleMobile />
      </Flex>
      {visible && 
        <BoxSearch>
          <SearchInput />
          <SearchButton icon={closeIcon} onHandleClick={() => setVisible(!visible)} />
        </BoxSearch>
      }
      <Box>
        <LinkRouter to={'/login'}>
          <Button>
            Login
          </Button>
        </LinkRouter>
      </Box>
      <SearchButton 
        invisibleDesktop
        icon={searchIcon} 
        onHandleClick={() => setVisible(!visible)}
      />
    </Wrapper>
  );
}
