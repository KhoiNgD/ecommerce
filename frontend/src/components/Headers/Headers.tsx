import { useLocation } from "react-router-dom";
import { CategoryHeader } from "./CategoryHeader";
import { Header } from "./Header";
import { HeroHeader } from "./HeroHeader";

function Headers() {
  const { pathname } = useLocation();
  const categories = ["headphones", "earphones", "speakers"];
  const path = pathname.split("/").at(-1);

  return (
    <>
      <Header isHomePage={!path} />
      {!path && <HeroHeader />}

      {path && categories.includes(path) && <CategoryHeader category={path} />}
    </>
  );
}

export { Headers };
