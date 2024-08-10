const InputBox = ({label, placeholder, onChange, type})=>{
    return (
        <div>
            <div className="text-sm font-medium text-left py-2">
                {label}
            </div>
            <input onChange={onChange} type={type} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-200 placeholder:italic placeholder:text-slate-400" />
        </div>
    )
}

export default InputBox;