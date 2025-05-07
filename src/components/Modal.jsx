import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Modal = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    // Добавляем класс modal-open к body при открытии модального окна
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Очистка при размонтировании
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div 
        className="modal fade show" 
        style={{ display: 'block' }} 
        tabIndex="-1"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {children}
            </div>
            <div className="modal-footer">
              <button 
                type="button" 
                className="btn btn-secondary" 
                onClick={onClose}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
      <div 
        className="modal-backdrop fade show"
        onClick={onClose}
      ></div>
    </>
  );
};

export default Modal; 