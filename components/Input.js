export default function Input({placeholder, value, name, method, type}) {
    return (
        <input 
            className='p-4 w-full border-solid border-black border rounded'
            placeholder={placeholder} 
            value={value} name={name} 
            method={method} 
            type={type}
        />
    )
}