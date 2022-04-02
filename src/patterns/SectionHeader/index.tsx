import { Icon } from "../../components/Icon";
import { Link } from "../../components/Link";
import { Title } from "../../components/Title";
import { Container, Flex } from "./styled";
import arrowBlueIcon from "../../assets/icons/arrow-blue.svg";

export function SectionHeader() {
  return (
    <Container>
      <Title level={2} section>Star Wars</Title>
      <Flex>
        <Link goto="#" section>Ver tudo</Link>
        <Icon icon={arrowBlueIcon} />
      </Flex>
    </Container>
  );
}