import type { AnchorHTMLAttributes } from "react";

type BaseProps = {
  text: string;
};

type ButtonProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const CustomButton = (props: ButtonProps) => {
  const { text, className = "", ...anchorProps } = props;
  return (
    <a
      {...anchorProps}
      className={`text-center inline-block px-12 py-3.5 bg-purple-700 hover:bg-purple-600 rounded-lg font-medium uppercase tracking-wide text-lg transition-colors duration-200 ${className}`}
    >
      {text}
    </a>
  );
};
