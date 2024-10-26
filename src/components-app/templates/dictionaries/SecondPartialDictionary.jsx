import React from "react";
import TabDictionary from "../../organisms/TabDictionary/TabDictionary";
import SecondDictionary from "../../organisms/TabDictionary/SecondDictionary";

const SecondPartialDictionary = () => {
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Glosario de Segundo Parcial</h2>
      </div>
    <SecondDictionary />
    </>
  );
};

export default SecondPartialDictionary;
