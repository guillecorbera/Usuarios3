import React, { useState } from 'react';

const DeleteConfirmationModal = ({ onDelete, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>¿Estás seguro de que deseas eliminar este elemento?</p>
        <button onClick={onDelete}>Sí, Eliminar</button>
        <button onClick={onCancel}>Cancelar</button>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
