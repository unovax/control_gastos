interface PrimaryButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-green-800 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
            {children}
        </button>
    )
}

export default PrimaryButton;