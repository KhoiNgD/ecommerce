type Props = {
  mobileSrc: string;
  tabletSrc: string;
  desktopSrc: string;
  alt: string;
};

function ResponsivePicture({ mobileSrc, tabletSrc, desktopSrc, alt }: Props) {
  return (
    <picture>
      <source media="(max-width: 550px)" srcSet={mobileSrc} />
      <source media="(max-width: 1110px)" srcSet={tabletSrc} />
      <img src={desktopSrc} alt={alt} />
    </picture>
  );
}

export { ResponsivePicture };
