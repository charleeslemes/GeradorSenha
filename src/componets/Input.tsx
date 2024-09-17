
type inputProps = React.ComponentProps<"input"> & {
    label?: string;
    name: string;

}

function Input({label, name, ...props}: inputProps){
    return(
        <>
            <input name={name} {...props} />
            <label htmlFor={label}>{label}</label>
        </>
    )

}




export default Input;