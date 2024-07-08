
const GenderCheckBox = ({onCheckboxChange,selectedGender}) => {
  return (
    <div className="flex">
        <div className="form-control">
            <label htmlFor="" className="label gap-2 cursor-pointer">
                <span className="label-text">Male</span>
                <input type="radio" name="gender"  className="border-slate-900 checkbox" onChange={()=>onCheckboxChange("male")} checked={selectedGender==="male"}/>
            </label>
        </div>
        <div className="form-control">
            <label htmlFor="" className="label gap-2 cursor-pointer">
                <span className="label-text">Female</span>
                <input type="radio" name="gender"  className="border-slate-900 checkbox" checked={selectedGender==="female"} onChange={()=>onCheckboxChange("female")} /></label>            
        </div>
    </div>
  )
}

export default GenderCheckBox