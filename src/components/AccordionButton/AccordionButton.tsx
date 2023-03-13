import styles from "./AccordionButton.module.scss";
interface AccordionButtonProps {
  onClick: () => void;
  active: boolean;
}

const AccordionButton = ({ onClick, active }: AccordionButtonProps) => {
  const arrow = "<";
  return (
    <button className={!active ? styles.button : styles.buttonActive} onClick={onClick}>
      {arrow}
    </button>
  );
};

export default AccordionButton;
