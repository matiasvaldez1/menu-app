import React, { memo } from "react";
import cn from "classnames";

type CardProps = Omit<JSX.IntrinsicElements["div"], "ref"> & {
  type?: "warning" | "placeholder";
  className?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  className,
  children,
  type,
  ...restProps
}) => {
  return (
    <div
      className={cn(
        "rounded-lg border border-gray-300 bg-white p-4 ",
        className,
        {
          "border-red-400 bg-red-100": type === "warning",
          "bg-gray-300 text-center text-xl font-bold": type === "placeholder",
        }
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default memo(Card);
