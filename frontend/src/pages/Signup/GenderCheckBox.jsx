
const GenderCheckBox = () => {
  return (
    <div className="flex">
        <div className="form-control">
            <label htmlFor="" className="label gap-2 cursor-pointer">
                <span className="label-text">Male</span>
                <input type="radio" name="gender" id="gender" className="border-slate-900 checkbox" />
            </label>
        </div>
        <div className="form-control">
            <label htmlFor="" className="label gap-2 cursor-pointer">
                <span className="label-text">Female</span>
                <input type="radio" name="gender" id="gender" className="border-slate-900 checkbox" /></label>            
        </div>
    </div>
  )
}

export default GenderCheckBox