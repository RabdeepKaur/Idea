"use client"
import React ,{useState}from 'react'
import SearchForm from './SearchForm'

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
    

    //

    const [selectStatus,setStatustValue]=useState("")
    const[seelctCategory,setSelectCategory]=useState("")

    const handleStatuschange=(e)=>{
setStatustValue(e.target.value);
    };
    const handlerCategoryChange=(e)=>{
        setSelectCategory(e.target.value);
    };

  return (
    
    <div className='flex flex-wrap gap-5 items-center justify-between'>
      <SearchForm/>
 <div className="flex-1 flex gap-3 flex-wrap items-center">
<select value ={selectStatus} 
onChange={handleStatuschange} 
className=" flex rounded-full h-12 px-5 bg-[#F1F0FB] hover:bg-white border border-[#E3E1F5] text-gray-800 font-medium">
  <option disabled>Stauts</option>
  {STATUS_OPTIONS.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ))}
</select>
   </div >
   <div className="flex-1 flex gap-3 flex-wrap items-center">
   <select value ={seelctCategory} 
onChange={handlerCategoryChange} 
className=" felx rounded-full h-12 px-5 bg-[#F1F0FB] hover:bg-white border border-[#E3E1F5] text-gray-800 font-medium">
  <option disabled>Category</option>
  {CATEGORIES.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ))}
</select>
</div>
    </div>
  )
}

export default DiscoverSearch
