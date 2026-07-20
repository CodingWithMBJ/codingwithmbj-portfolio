import { backendStack, type StackCategory } from "../data/featuredStack";

import StackCard from "./StackCard";

interface BackendCardProps {
  activeStack: StackCategory | null;
}

const BackendCard = ({ activeStack }: BackendCardProps) => {
  return <StackCard stack={backendStack} activeStack={activeStack} />;
};

export default BackendCard;
