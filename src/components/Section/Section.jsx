import React, { useState } from "react";
import Filters from "../Filters/Filters";
import Modal from "../Modal/Modal";

const Section = () => {
  const [filtersVis, setFiltersVis] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);
  return (
    <div>
      <div>
        <div>
          <strong
            onClick={() =>
              !filtersVis ? setFiltersVis(true) : setFiltersVis(false)
            }>
            Filters
          </strong>
          {filtersVis ? <Filters /> : null}
        </div>
        {isModalOpen ? (
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        ) : null}
        <button onClick={() => setIsModalOpen(true)}>Open modal</button>
      </div>
    </div>
  );
};

export default Section;
