
import React from 'react'


const STATUS_OPTIONS=[
    {value:"Category",label:"Category"},
    {value:"need-contribution",label:"Need Contribution"},
    {value:"feedback",label:"Feedback"},
    {value:"build-together",label:"Build Together"},
    {value:"Status",label:"Status"},
]
const CATEGORIES=[
{value:"AI",label:"AI"},
{value:"Productivity",label:"Productivity"},
{value:"game",label:"Game"},
{value:"Finance",label:"Finance"},
{value:"Health",label:"Health"},
{value:"Education",label:"Education"},
{value:"Entertainment",label:"Entertainment"},
{value:"Social",label:"Social"},
]    

const SearchBarProps = {
    activeStatus: '',
    onStatusToggle: () => {},
    activeCategory: '',
    onCategoryToggle: () => {},
};
  
const DiscoverSearch = ({ activeStatus, onStatusToggle, activeCategory, onCategoryToggle }) => {
  const activeStatuses = activeStatus ? [activeStatus] : [];
  const activeCategories = activeCategory ? [activeCategory] : [];

  const statusTriggerLabel = activeStatuses.length === 0
    ? "Any Status"
    : `${activeStatuses.length} Statuses Selected`;

  const categoryTriggerLabel = activeCategories.length === 0
    ? "Any Category"
    : `${activeCategories.length} Categories Selected`;

    const toggleItem = (
      list,
      setList,
      item
    ) => {
      setList((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      );
    };
    
  return (
    <div>
 <div className="flex gap-4">
      <DropdownFilter
        label="Status"
        options={STATUS_OPTIONS}
        activeKeys={activeStatuses}
        onToggle={(key) => toggleItem(activeStatuses, setActiveStatuses, key)}
      />
      <DropdownFilter
        label="Category"
        options={CATEGORY_OPTIONS}
        activeKeys={activeCategories}
        onToggle={(key) =>
          toggleItem(activeCategories, setActiveCategories, key)
        }
      />
    </div>
    </div>
  )
}

export default DiscoverSearch
