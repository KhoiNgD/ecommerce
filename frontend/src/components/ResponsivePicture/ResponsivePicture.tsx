type Props = {
  mobileSrc: string;
  tabletSrc: string;
  desktopSrc: string;
  alt: string;
  className?: string;
  mediaMobile?: string;
  mediaTablet?: string;
};

function ResponsivePicture({
  mobileSrc,
  tabletSrc,
  desktopSrc,
  alt,
  className = "",
  mediaMobile = "(max-width: 550px)",
  mediaTablet = "(max-width: 1100px)",
}: Props) {
  return (
    <picture className={className}>
      <source media={mediaMobile} srcSet={mobileSrc} />
      <source media={mediaTablet} srcSet={tabletSrc} />
      <img src={desktopSrc} alt={alt} />
    </picture>
  );
}

export { ResponsivePicture };
