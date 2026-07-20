import { frontendStack, type StackCategory } from "../../data/featuredStack";

import StackCard from "./StackCard";

interface FrontendCardProps {
  activeStack: StackCategory | null;
}

const FrontendCard = ({ activeStack }: FrontendCardProps) => {
  return <StackCard stack={frontendStack} activeStack={activeStack} />;
};

export default FrontendCard;
