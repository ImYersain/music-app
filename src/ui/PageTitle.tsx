import type { FC } from "react";

interface PageTitleProps {
  titleText?: string;
}

export const PageTitle: FC<PageTitleProps> = ({ titleText }) => {
  return <h1>{titleText}</h1>;
};
