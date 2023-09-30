import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
      text: "Is it okay to be comfortable with happy with the personality that you possess?",
      value: "Is it okay to be comfortable with happy with the personality that you possess?"  
    },
    { text: "People know what is right in theory, but why people does not work toward it?", 
      value: "People know what is right in theory, but why people does not work toward it?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
