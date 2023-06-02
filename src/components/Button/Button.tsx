import { ButtonProps } from './Button.type';

const Button: React.FC<ButtonProps> = ({ onClick, text, icon, variant }) => {
  const addVariantStyles = (activeVariant: ButtonProps['variant']) => {
    switch (activeVariant) {
      case 'filled':
        return 'bg-primary text-white hover:shadow-md hover:bg-primaryLight active:bg-primaryLight active:ring-1 active:ring-primary';
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
      )}`}
      onClick={onClick}
    >
      {icon && <span className='mr-2'>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
