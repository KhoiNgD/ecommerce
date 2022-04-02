import React from "react";
import { useLocation } from "react-router-dom";
import { CategoryHeader } from "./CategoryHeader";
import { Header } from "./Header";
import { HeroHeader } from "./HeroHeader";

function Headers() {
  const { pathname } = useLocation();
  const categories = ["headphones", "earphones", "speakers"];
  const path = pathname.split("/").at(-1);
  const isHomePage = !path;

  React.useEffect(() => {
    const header = document.getElementsByTagName("header");
    const heroSection = document.getElementsByTagName("section")[0];
    const headerObs = new IntersectionObserver(
      function absHeader(entries) {
        const [entry] = entries;
        if (entry.isIntersecting && isHomePage) {
          header[0].style.position = "absolute";
          header[0].style.background = "transparent";
        } else {
          header[0].style.position = "fixed";
          header[0].style.background = "hsl(var(--primary-dark))";
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-94px",
      }
    );
    headerObs.observe(heroSection);
  }, [isHomePage]);

  return (
    <>
      <Header isHomePage={isHomePage} />
      {isHomePage && <HeroHeader />}

      {path && categories.includes(path) && <CategoryHeader category={path} />}
    </>
  );
}

export { Headers };
