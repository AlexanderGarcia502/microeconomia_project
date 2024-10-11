import React from "react";
import { Lucide, Modal, ModalBody } from "@/base-components";

const DeleteModal = ({
  open,
  message = "",
  onClose = () => {},
  onAction = () => {},
}) => {
  return (
    <Modal show={open} onHidden={onClose}>
      <ModalBody className="p-0">
        <div className="p-5 text-center">
          <Lucide
            icon="XCircle"
            className="w-16 h-16 text-danger mx-auto mt-3"
          />
          <div className="text-3xl mt-5">Estás seguro?</div>
          <div className="text-slate-500 mt-2">
            ¿Realmente desea eliminar estos registros?
            <br />
            Este proceso no se puede deshacer.
            {message}
          </div>
        </div>
        <div className="px-5 pb-8 text-center">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-outline-secondary w-24 mr-1"
          >
            Cancelar
          </button>
          <button
            type="button"
            className="btn btn-danger w-24"
            onClick={onAction}
          >
            Eliminar
          </button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default DeleteModal;
