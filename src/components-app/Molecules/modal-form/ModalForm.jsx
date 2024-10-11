import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "@/base-components";
import TextField from "./TextField";
import SelectField from "./SelectField";

const ModalForm = ({
  open,
  title,
  isEdit = false,
  children,
  onClose = () => {},
  onAction = () => {},
}) => {
  return (
    <div>
      <Modal show={open} onHidden={onClose}>
        <ModalHeader>
          <h2 className="font-medium text-base mr-auto">{title}</h2>
        </ModalHeader>
        <ModalBody className="grid grid-cols-1 gap-4 gap-y-3">
          {children}
          {/* <div className="col-span-12 sm:col-span-6">
            <label htmlFor="modal-form-3" className="form-label">
              Subject
            </label>
            <input
              id="modal-form-3"
              type="text"
              className="form-control"
              placeholder="Important Meeting"
            />
          </div>
          <div className="col-span-12 sm:col-span-6">
            <label htmlFor="modal-form-6" className="form-label">
              Size
            </label>
            <select id="modal-form-6" className="form-select">
              <option>10</option>
              <option>25</option>
              <option>35</option>
              <option>50</option>
            </select>
          </div> */}
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            onClick={onClose}
            className="btn btn-outline-secondary w-20 mr-1"
          >
            Cancelar
          </button>
          <button
            type="button"
            className="btn btn-primary w-20"
            onClick={onAction}
          >
            {isEdit ? "Hecho" : "Realizar"}
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ModalForm.TextField = TextField;
ModalForm.SelectField = SelectField;

export default ModalForm;
