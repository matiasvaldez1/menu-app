import classNames from "classnames";
import { createElement, memo } from "react";

const typeStyles = {
  default: "",
  category: "text-gray-500 font-normal text-base leading-normal tracking-normal",
  primary: "text-primary-100 font-bold text-xl leading-normal tracking-tight",
  secondary:
    "text-gray-500 font-normal text-base leading-normal tracking-normal",
  bold: "text-xl font-bold leading-tight tracking-tight",
};

interface TitleProps {
  children: React.ReactNode;
  seo?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  className?: string;
  type?: "default" | "category" | "primary" | "secondary" | "bold" | undefined;
}

const Title = ({
  children,
  seo = "h1",
  className,
  type = "default",
  ...restProps
}: TitleProps) => {
  const classes = classNames(typeStyles[type], className);
  return createElement(seo, { className: classes, ...restProps }, children);
};

export default memo(Title);
