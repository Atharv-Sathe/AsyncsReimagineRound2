import React from 'react';

type CustomizeData = {
  color?: string;
  material?: string;
};

const CustomizationPanel = ({ onCustomize }: { onCustomize: (data: CustomizeData) => void }) => {
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCustomize({ color: e.target.value });
  };

  const handleMaterialChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onCustomize({ material: e.target.value });
  };

  return (
    <div>
      <label>
        Color:
        <input type="color" onChange={handleColorChange} />
      </label>
      <label>
        Material:
        <select onChange={handleMaterialChange}>
          <option value="yellow">Gold</option>
          <option value="silver">Silver</option>
          <option value="platinum">Platinum</option>
        </select>
      </label>
    </div>
  );
};

export default CustomizationPanel;
