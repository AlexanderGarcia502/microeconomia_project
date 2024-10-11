import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
} from "@/base-components";
import { useState, useRef } from "react";
import ModalForm from "../../components-app/Molecules/modal-form/ModalForm";
import SuccessNotify from "../../components-app/organisms/SuccessNotify";
import useForm from "../../hooks/useForm";
import DeleteModal from "../../components-app/organisms/DeleteModal";
import { useNavigate } from "react-router-dom";

const faker = [
  { fileName: "Primer Parcial", size: "0 MB", path: 'portafolio/first-partial' },
  { fileName: "Segundo Parcial", size: "0 MB", path: 'portafolio/second-partial' },
  { fileName: "Examen Final", size: "0 MB", path: 'portafolio/final-exam' },
];

function Main() {
  const [draftFiles, setDraftFiles] = useState(faker);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [openModalForm, setOpenModalForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [messageError, setMessageError] = useState("");

  const navigate = useNavigate();

  const { values, handleInputChange, setValues, reset } = useForm({
    course: "",
  });

  const successNotification = useRef();

  const filterFiles = (event) => {
    event.preventDefault();
    const inputValue = event.target.value.toLowerCase();

    const filter = faker.filter((file) => {
      const fileName = file.fileName.toLowerCase();
      if (fileName.indexOf(inputValue) !== -1) {
        return file;
      }
    });
    setDraftFiles(filter);
  };

  const handleSearchChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  const successNotificationToggle = () => {
    successNotification.current.showToast();
  };
  return (
    <>
      <SuccessNotify
        title="Success!"
        message="Se ha agregado un nuevo curso"
        successNotification={successNotification}
      />
      <DeleteModal
        open={openDeleteModal}
        onClose={() => {
          setOpenDeleteModal(false);
        }}
        onAction={() => {
          setOpenDeleteModal(false);
        }}
      />
      <ModalForm
        isEdit={isEdit}
        title={isEdit ? "Editar Curso" : "Nuevo Curso"}
        open={openModalForm}
        onClose={() => {
          reset();
          setMessageError("");
          setOpenModalForm(false);
        }}
        onAction={() => {
          if (values.course.length < 1) {
            setMessageError("Este campo es requerido");
            return;
          }
          reset();
          setOpenModalForm(false);
          successNotificationToggle();
        }}
      >
        <ModalForm.TextField
          name="course"
          placeholder="Curso"
          messageError={messageError}
          value={values.course}
          onChange={handleInputChange}
          labelText={isEdit ? "Nuevo nombre de curso" : "Nombre del curso"}
        />
      </ModalForm>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-2xl font-medium mr-auto">Portafolio</h2>
      </div>
      {/* BEGIN: Page Layout */}
      <div className="intro-y box p-5 mt-5">
        <div className="col-span-12 lg:col-span-9 2xl:col-span-10">
          {/* BEGIN: File Manager Filter */}
          <div className="intro-y flex flex-col-reverse sm:flex-row items-center">
            <div className="w-full sm:w-auto relative mr-auto mt-3 sm:mt-0">
              <Lucide
                icon="Search"
                className="w-4 h-4 absolute my-auto inset-y-0 ml-3 left-0 z-10 text-slate-500"
              />
              <input
                type="text"
                className="form-control w-full sm:w-64 box px-10"
                placeholder="Buscar Curso"
                onChange={handleSearchChange}
                value={searchInputValue}
                onKeyUp={filterFiles}
              />
            </div>
          </div>
          {/* END: File Manager Filter */}
          {/* BEGIN: Directory & Files */}
          {draftFiles.length === 0 ? (
            <div className="w-full flex justify-center items-center">
              <h2 className="text-3xl font-medium leading-none">
                No se encontró el curso
              </h2>
            </div>
          ) : (
            <div className="intro-y grid grid-cols-12 gap-3 sm:gap-6 mt-5">
              {draftFiles.map((file, index) => {
                return (
                  <div
                    key={index}
                    className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2"
                  >
                    <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                      <a
                        onClick={() => navigate(file.path)}
                        className="w-3/5 file__icon file__icon--directory mx-auto"
                      ></a>
                      <a
                       onClick={() => navigate('portafolio/first-partial')}
                        className="block font-medium mt-4 text-center truncate"
                      >
                        {
                          file.fileName.split("/")[
                            file.fileName.split("/").length - 1
                          ]
                        }
                      </a>
                      <div className="text-slate-500 text-xs text-center mt-0.5">
                        {file.size}
                      </div>
                      <Dropdown className="absolute top-0 right-0 mr-2 mt-3 ml-auto">
                        <DropdownToggle
                          tag="a"
                          className="w-5 h-5 block"
                          href="#"
                        >
                          <Lucide
                            icon="MoreVertical"
                            className="w-5 h-5 text-slate-500"
                          />
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem
                              onClick={() => {
                                setIsEdit(true);
                                setMessageError("");
                                setValues({ course: file.fileName });
                                setOpenModalForm(true);
                              }}
                            >
                              <Lucide icon="Edit" className="w-4 h-4 mr-2" />{" "}
                              Editar
                            </DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {/* END: Page Layout */}
    </>
  );
}

export default Main;
