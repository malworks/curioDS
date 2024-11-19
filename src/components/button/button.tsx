import { ComponentProps } from "react";
import styles from "./button.module.scss";
import classnames from "classnames";

export type ButtonProps = ComponentProps<"button"> & {
  type: "Solid" | "Outline" | "Unstyled";
  mainColor: "Primary" | "Secondary" | 'Accent';
  size: "Standard" | "Big";
};

export const Button = ({
  type = "Solid",
  mainColor = "Primary",
  size = "Standard",
  className,
  ...props
}: ButtonProps) => {
  let allClasses = classnames(
    styles.button,
    styles[type],
    styles[mainColor],
    styles[size],
    className,
  );
  return <button {...props} className={allClasses} />;
};