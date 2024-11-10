import './upload.css'

function Upload({ src, ...props }) {
    return (
        <div className="upload">
            {src && <img src={src} alt="Preview" />}
            <input type="file" {...props} />
        </div>
    )
}

export default Upload