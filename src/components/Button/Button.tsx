import styles from './Button.module.scss'
interface ButtonProps {
  onClick: () => void;
  label: string
}

const Button = ({ onClick, label }: ButtonProps) => {
  return <div>
    <button className={styles.button} onClick={onClick}>
        {label}
    </button>
  </div>;
};

export default Button;
