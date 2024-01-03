import { CSSTransition } from 'react-transition-group';
import CloseIcon from './icons/Close';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2 className='w-full bg-primary text-white p-3 font-bold flex justify-between items-center'>
            <span>{title}</span>
            <span onClick={onClose} >
              <CloseIcon className='w-5 h-5 hover:scale-125 cursor-pointer' />
            </span>
          </h2>
          <div className='p-2 space-y-2'>
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
