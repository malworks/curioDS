import { ComponentProps } from "react";
import styles from "./chip.module.scss";
import classnames from "classnames";

export type ChipProps = ComponentProps<"div"> & {
  type: "Solid" | "Outline";
  mainColor: "Primary" | "Secondary" | 'Accent';
  icon: "True" | "False";
};

export const Chip = ({
  type,
  mainColor,
  className,
  icon,
  ...props
}: ChipProps) => {
  let allClasses = classnames(
    styles.chip,
    styles[type],
    styles[mainColor],
    styles[icon],
    className,
  );
  return <div {...props} className={allClasses} />;
};