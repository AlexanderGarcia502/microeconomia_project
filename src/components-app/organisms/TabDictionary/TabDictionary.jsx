import React from "react";
import {
  AccordionGroup,
  AccordionItem,
  Accordion,
  AccordionPanel,
} from "@/base-components";

const TabDictionary = () => {
  return (
    <div className="intro-y grid grid-cols-12 gap-6 mt-5">
      {/* BEGIN: Basic Accordion */}
      <div className="col-span-12 lg:col-span-6">
        <div className="p-5">
          <AccordionGroup className="accordion-boxed">
            <AccordionItem>
              <Accordion>
              Lorem ipsum 1
              </Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>
              Lorem ipsum 2
              </Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Lorem ipsum 3</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <Accordion>Lorem ipsum 4</Accordion>
              <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </AccordionPanel>
            </AccordionItem>
          </AccordionGroup>
        </div>
      </div>
      {/* END: Basic Accordion */}
    </div>
  );
};

export default TabDictionary;
