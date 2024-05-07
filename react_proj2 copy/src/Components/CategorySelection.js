import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CategorySelection.css'; // Import CSS file for styling

function CategorySelection({ onSelectCategory }) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: 'Clothes' },
    { name: 'Toys' },
    { name: 'Food' },
    { name: 'Medical Supplies' },
    { name: 'School Supplies' },
    { name: 'Blood Donations' },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category.name);

    // Perform navigation based on the selected category
    if (category.name === 'Clothes') {
      navigate('/ViewListOfClothReq');
    } else if (category.name === 'Toys') {
      navigate('/toysPage');
    }
    // Add more navigation conditions for other categories if needed
  };

  return (
    <div className="category-selection">
      <h3>Select a Category for Donation:</h3>
      <div className="category-buttons">
        {categories.map((category) => (
          <div key={category.name} className="category-button-container">
            <button
              className={`category-button ${selectedCategory === category ? 'selected' : ''}`}
              onClick={() => handleCategorySelect(category)}
            >
              {category.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySelection;
