import styles from './Button.module.css';
import { ButtonProps } from './Button.type';

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  icon,
  variant,
  sx,
}) => {
  const addVariantStyles = (activeVariant: ButtonProps['variant']) => {
    switch (activeVariant) {
      case 'filled':
        return 'bg-primary text-white';
      case 'elevated':
        return 'text-primary shadow-elevated hover:bg-primary_95 hover:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_2px_6px_2px_rgba(0,0,0,0.15)] active:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_1px_3px_1px_rgba(0,0,0,0.15)]';
      case 'outlined':
        return 'border-solid border-[1px] border-primary text-primary hover:bg-primary_95 hover:text-primary active:shadow-inner';
      case 'text':
        return 'text-primary hover:bg-primary_95 active:bg-primary_95';
      case 'tonal':
        return 'text-primary bg-primary_95 hover:shadow-[0_1px_2px_rgba(0,0,0,0.3),0_1px_3px_1px_rgba(0,0,0,0.15)] active:shadow-none';
      default:
        return;
    }
  };

  return (
    <button
      className={`flex flex-row items-center justify-center rounded-full px-4 py-2 font-medium ${sx} ${addVariantStyles(
        variant,
      )}  ${variant === 'filled' && styles.button} `}
      onClick={onClick}
    >
      {icon && <span className='mr-2'>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
