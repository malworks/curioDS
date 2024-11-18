import { ComponentProps } from 'react';
import styles from './button.module.scss';
import classnames from 'classnames';

export type ButtonProps = ComponentProps<'button'> & {
	type: 'Solid' | 'Outline' | 'Unstyled';
	variant: 'Primary' | 'Secondary' | 'Accent Cool' | 'Accent Warm';
	size: 'Standard' | 'Big';
};

export const Button = ({ type = 'Solid', variant = 'Primary', size = 'Standard', className, ...props }: ButtonProps) => {
	let allClasses = classnames(styles.button, styles[type], styles[variant], styles[size], className);
	return <button {...props} className={allClasses} />
	
	// return (
	// 	<button
	// 		className={classnames(styles.button, {
	// 			[styles.Primary]: variant === 'Primary',
	// 			[styles.Secondary]: variant === 'Secondary',
	// 			[styles.AccentCool]: variant === 'Accent Cool',
	// 			[styles.AccentWarm]: variant === 'Accent Warm',
	// 			[styles.sizeStandard]: size === 'Standard',
	// 			[styles.sizeBig]: size === 'Big',
	// 			[styles.Outline]: size === 'Outline',
	// 		})}
	// 		{...props}
	// 	/>
	// );
};


// export const Button = ({ variant = 'Default', size = 'Standard', className, ...props }: ButtonProps) => {
// 	let classes = clsx(styles.button, styles[variant], styles[size], className);

// 	return <button {...props} className=[classes] />
// };