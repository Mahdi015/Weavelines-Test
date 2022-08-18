import React from "react";
import { field } from "../../slices/formsSlice";
import { Draggable } from "../Draggable";

//Import Icons
import { deleteField, handleFileEdit } from "../../functions/Functions";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

type Props = {
  i: number;
  f: field;
  formIndex: number;
  setvaluesToUpdate: (value: any) => void;
  setindexFieldToEdit: React.Dispatch<React.SetStateAction<number>>;
  setmodalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  valuesToUpdate: any;
};

function CheckboxField({
  f,
  i,
  formIndex,
  setvaluesToUpdate,
  setindexFieldToEdit,
  valuesToUpdate,
  setmodalOpen,
}: Props) {
  return (
    <Draggable id={f.dragId}>
      <div key={i} className="group flex flex-col items-start mb-8 relative hover:shadow-inputboxshadow transition duration-200 ease-in p-3 rounded-xl">
        <div className=" absolute top-3 right-3 flex space-x-1">
          <AiFillDelete
            className="cursor-pointer z-50"
            color="#a50050"
            onClick={() =>
              deleteField({ i, valuesToUpdate, setvaluesToUpdate, formIndex })
            }
          />{" "}
          <AiFillEdit
            onClick={() =>
              handleFileEdit({ setindexFieldToEdit, setmodalOpen, i })
            }
            className="cursor-pointer z-50"
            color="#F48225"
          />
        </div>
        <label className="block mb-2 text-sm font-medium  text-gray-300  select-none">
          {f.fieldTitle}{" "}
          {f.required ? (
            <span className="text-rose-500 text-sm ml-px  ">*</span>
          ) : (
            ""
          )}
        </label>

        {f.options?.map((o, i) => (
          <>
            <div key={i}  className="flex ml-2 mb-3">
              <input
                id={`checkbox${i}`}
                type="checkbox"
                required={f.required}
                value=""
                className="w-4 h-4 z-50 text-blue-600  rounded   focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
              />
              <label className="ml-2 text-sm font-medium  text-gray-300 select-none">
                {o.title}
              </label>
            </div>
          </>
        ))}
      </div>
    </Draggable>
  );
}

export default CheckboxField;
