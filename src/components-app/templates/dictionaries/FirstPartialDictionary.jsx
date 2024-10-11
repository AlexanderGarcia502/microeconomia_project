import React from "react";
import TabDictionary from "../../organisms/TabDictionary/TabDictionary";

const FirstPartialDictionary = () => {
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Glosario de Primer Parcial</h2>
      </div>
    <TabDictionary />
    </>
  );
};

export default FirstPartialDictionary;
