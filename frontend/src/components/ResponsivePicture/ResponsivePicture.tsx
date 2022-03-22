type Props = {
  mobileSrc: string;
  tabletSrc: string;
  desktopSrc: string;
  alt: string;
  className?: string;
};

function ResponsivePicture({
  mobileSrc,
  tabletSrc,
  desktopSrc,
  alt,
  className = "",
}: Props) {
  return (
    <picture className={className}>
      <source media="(max-width: 550px)" srcSet={mobileSrc} />
      <source media="(max-width: 1110px)" srcSet={tabletSrc} />
      <img src={desktopSrc} alt={alt} />
    </picture>
  );
}

export { ResponsivePicture };
