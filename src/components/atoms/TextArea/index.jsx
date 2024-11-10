import './textArea.css'

function TextArea({ ...props }) {
    return (
        <div className="text-area">
            <textarea {...props} />
        </div>
    )
}

export default TextArea