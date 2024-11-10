import './input.css'

function Input({ label, ...props }) {
    return (
        <div className="input-wrapper">
            <p className="label">{label}</p>
            <input className="input"{...props} />
        </div>
    )
}

export default Input