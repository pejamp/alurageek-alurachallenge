import styled from "styled-components";
import { Icon } from "../Icon";

const Button = styled.button`
  display: inline-block;
  padding: 0 0.5rem;

  @media screen and (min-width: 768px) {
    &.invisible {
      display: none;
    }
  }
`;

interface SearchButtonProps {
  icon: any;
  onHandleClick?: () => void;
  invisibleDesktop?: boolean;
}

export function SearchButton({ icon, onHandleClick, invisibleDesktop }: SearchButtonProps) {
  return (
    <Button className={invisibleDesktop ? 'invisible' : ''} onClick={onHandleClick}>
      <Icon icon={icon} />
    </Button>
  );
}