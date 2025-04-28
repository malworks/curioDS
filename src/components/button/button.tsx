import { ComponentProps } from "react";
import styles from "./button.module.scss";
import classnames from "classnames";

export interface ButtonProps extends ComponentProps<"button"> {
  category: "Solid" | "Outline" | "Unstyled";
  mainColor: "Primary" | "Secondary" | 'Accent';
  size: "Standard" | "Big";
};

export const Button = ({
  category,
  mainColor,
  size,
  className,
  ...props
}: ButtonProps) => {
  let allClasses = classnames(
    styles.button,
    styles[category],
    styles[mainColor],
    styles[size],
    className,
  );
  return <button {...props} className={allClasses} />;
};