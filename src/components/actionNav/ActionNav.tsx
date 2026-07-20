import Navigation from "../nav/Navigation";

const ActionNav = () => {
  return (
    <aside className="action-nav fixed bottom-3 left-1/2 -translate-x-1/2 bg-stone-50 w-fit max-h-10 h-full rounded-xl overflow-x-auto z-50">
      <Navigation />
    </aside>
  );
};

export default ActionNav;
