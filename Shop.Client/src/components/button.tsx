type ButtonProps = {
    buttonTitle: string;
    classButton: string;
    onButtonClick: () => void;
    disabled?: boolean;
}

export default function Button({ buttonTitle, classButton, onButtonClick, disabled = false}: ButtonProps): JSX.Element {

    const buttonClickHandler= (): void => { 
        onButtonClick(); 
    }

    return (
        <button className={classButton} onClick= {buttonClickHandler} disabled={disabled} >{buttonTitle}</button>
    )
}
