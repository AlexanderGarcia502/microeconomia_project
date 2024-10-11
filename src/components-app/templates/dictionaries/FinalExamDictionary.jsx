import React from "react";
import TabDictionary from "../../organisms/TabDictionary/TabDictionary";


const FinalExamDictionary = () => {
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Glosario de Examen Final</h2>
      </div>
    <TabDictionary />
    </>
  );
};

export default FinalExamDictionary;
