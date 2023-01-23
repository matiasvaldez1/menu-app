import { forwardRef, memo } from "react";
import Spin from "@components/ui/Spin";
import cn from "classnames";

type ButtonElement = HTMLButtonElement;

export interface ButtonProps
  extends Omit<JSX.IntrinsicElements["button"], "ref" | "type"> {
  type?: "default" | "primary" | "wrapper" | "text" | "cancel" | "approve";
  htmlType?: JSX.IntrinsicElements["button"]["type"];
  loading?: boolean;
  preventClickOnLoading?: boolean;
}

const typeClasses = {
  default:
    "bg-gray-500 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded",
  primary:
    "bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded",
  wrapper:
    "bg-yellow-500 hover:bg-yellow-700 text-black font-medium py-2 px-4 rounded",
  text: "text-blue-500 hover:text-blue-700 font-medium py-2 px-4 rounded",
  cancel:
    "bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded",
  approve:
    "bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded",
};

const Button = forwardRef<ButtonElement, ButtonProps>(function ButtonComponent(
  {
    children,
    type = "default",
    htmlType = "button",
    className,
    loading = false,
    preventClickOnLoading = true,
    ...restProps
  }: ButtonProps,
  ref
) {
  const buttonClasses = cn(className, typeClasses[type], "flex", {
    "opacity-50 cursor-not-allowed": preventClickOnLoading && loading,
  });
  return (
    <div>
      <button
        className={buttonClasses}
        type={htmlType}
        ref={ref}
        {...restProps}
      >
        {children} {loading && <Spin loading={loading} />}
      </button>
    </div>
  );
});

export default memo(Button);
