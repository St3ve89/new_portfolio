export type BentoGridItemProps = {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
};

export type BentoGridProps = {
  className?: string;
  children?: React.ReactNode;
};
