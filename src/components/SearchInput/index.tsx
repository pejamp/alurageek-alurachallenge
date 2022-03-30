import { SearchButton } from "../SearchButton";
import { Input, Wrapper } from "./styled";
import searchGrayIcon from '../../assets/icons/search-gray.svg';

interface SearchInputProps {
  invisibleMobile?: boolean;
}

export function SearchInput({ invisibleMobile }: SearchInputProps) {
  return (
    <Wrapper className={invisibleMobile ? 'invisible' : ''}>
      <Input placeholder={"O que deseja encontrar?"} />
      <SearchButton icon={searchGrayIcon} />
    </Wrapper>
  );
}