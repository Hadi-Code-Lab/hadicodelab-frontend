import { ButtonProps } from './Button.type';
import styles from './Button.module.css';

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  icon,
  variant,
}) => {
  const addVariantStyles = (activeVariant: ButtonProps['variant']) => {
    switch (activeVariant) {
      case 'filled':
        return 'bg-primary text-white';
      case 'elevated':
        return;
      case 'outlined':
        return;
      case 'text':
        return;
      default:
        return;
    }
  };

  return (
    <button
      className={`flex items-center justify-center rounded-full px-4 py-2 font-medium ${addVariantStyles(
        variant
      )} ${styles.button}`}
      onClick={onClick}
    >
      {icon && <span className='mr-2'>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
