import './button.css'

function Button({ title, ...props }) {
    return <button className="button" {...props}>{title}</button>
}

export default Button