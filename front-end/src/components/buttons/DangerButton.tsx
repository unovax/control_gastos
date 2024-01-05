interface DangerButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
}

const DangerButton: React.FC<DangerButtonProps> = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-danger hover:bg-danger-hover text-danger-text hover:text-danger-text-hover font-bold py-2 px-4 rounded"
        >
            {children}
        </button>
    )
}

export default DangerButton;