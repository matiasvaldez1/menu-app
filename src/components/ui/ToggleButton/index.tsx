import { motion } from "framer-motion";

type ToggleButtonProps = Omit<JSX.IntrinsicElements["div"], "ref"> & {
  show: boolean;
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function ToggleButton({
  show,
  ...restProps
}: ToggleButtonProps) {
  return (
    <div
      className={`flex h-16 w-32 cursor-pointer justify-start rounded-full bg-primary-100 p-2 ${
        show && "justify-end"
      }`}
      {...restProps}
    >
      <motion.div
        className="h-12 w-12 rounded-full bg-white"
        layout
        transition={spring}
      />
    </div>
  );
}
