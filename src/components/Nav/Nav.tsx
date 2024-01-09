import Lang from "./Lang";

export const Nav = () => {
  return (
    <nav className="h-20 flex items-center justify-between px-12">
      <div>Tradução Site</div>
      <Lang />
    </nav>
  );
};
