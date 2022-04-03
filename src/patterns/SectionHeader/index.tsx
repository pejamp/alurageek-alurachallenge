import { Icon } from "../../components/Icon";
import { Link } from "../../components/Link";
import { Title } from "../../components/Title";
import { Container } from "./styled";
import arrowBlueIcon from "../../assets/icons/arrow-blue.svg";

interface SectionHeaderProps {
  name: string;
  linkHref: string; 
}

export function SectionHeader({ name, linkHref }: SectionHeaderProps) {
  return (
    <Container>
      <Title level={2} section>{name}</Title>
      <Link goto={linkHref} section>
        Ver tudo
        <Icon icon={arrowBlueIcon} />
      </Link>
    </Container>
  );
}