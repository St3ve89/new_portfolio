export type BentoGridItemProps = {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  titleClassName?: string;
};

export type BentoGridProps = {
  className?: string;
  children?: React.ReactNode;
};
