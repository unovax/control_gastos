interface PrimaryButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-primary hover:bg-primary-hover text-primary-text hover:text-primary-text-hover font-bold py-2 px-4 rounded"
        >
            {children}
        </button>
    )
}

export default PrimaryButton;