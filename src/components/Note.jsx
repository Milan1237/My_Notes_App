import React, { memo, useCallback } from "react";
import { useNotes } from "../context/Context";

const Note = ({ title, isPinned, id, text, pageType }) => {
  const { dispatch } = useNotes();
  const setPin = useCallback(
    () => dispatch({ type: "SetPin", payload: id }),
    [dispatch]
  );
  const addToBin = useCallback(
    () => dispatch({ type: "AddToBin", payload: id }),
    [dispatch]
  );
  const handleArchive = useCallback(
    () => dispatch({ type: "SetArchive", payload: id }),
    [dispatch]
  );
  return (
    <div
      key={id}
      className="max-w-[300px] min-w-[300px] min-h-[150px] p-4 bg-[#2F3E46] flex flex-col justify-start max-h-[150px] overflow-hidden rounded-lg"
    >
      <div className=" flex justify-between">
        <h1 className=" text-xl text-left">
          {title.length > 20 ? title.substring(0, 20) + "..." : title}
        </h1>
        {pageType === "home" && (
          <button onClick={setPin}>
            <span
              className={
                isPinned ? "material-icons" : "material-icons-outlined"
              }
            >
              push_pin
            </span>
          </button>
        )}
      </div>
      <hr />
      <p className=" text-left min-h-[65px]">
        {text.length > 30 ? text.substring(0, 50) + "..." : text}
      </p>
      <div className="flex justify-end gap-2">
        <button>
          <span className="material-icons-outlined" onClick={addToBin}>
            delete
          </span>
        </button>
        <button>
          <span className="material-icons-outlined" onClick={handleArchive}>
            archive
          </span>
        </button>
      </div>
    </div>
  );
};

export default memo(Note);
