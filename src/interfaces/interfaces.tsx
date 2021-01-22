export type Url = {
  label: string;
  href: string;
};

export type Image = {
  src: string;
  alt: string;
};

export type CtaButton = {
  textColor: string;
  bgColor: string;
  variant: 'outlined' | 'contained';
  text: string;
};
