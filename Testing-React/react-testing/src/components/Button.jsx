import "./Button.css";

export const Button = ({variant,colorScheme,childre})=>{
    return (
        <button className={ `btn ${colorScheme || "red"} ${variant || "ghost"}`}>
        {children}
        </button>
    );
};