import { useEffect, useState } from 'react'
import { Button, Input, Upload, TextArea, Gap, Link } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'
import usePostFormStore from '../../config/postFormStore'
import usePostStore from '../../config/postStore'
import './postForm.css'

function PostForm() {
    const { getPostById, addPost, updatePost } = usePostStore()
    const { form, imgPreview, setFormData, setImgPreview, resetFormData } = usePostFormStore()
    const { title, body } = form
    const { id } = useParams()
    const navigate = useNavigate()
    const [isUpdate, setIsUpdate] = useState(false)

    useEffect(() => {
        if (id) {
            setIsUpdate(true)
            const post = getPostById(id)
            setFormData('title', post.title)
            setFormData('body', post.body)
            setFormData('image', post.image)
            setImgPreview(post.image)
        } else {
            resetFormData()
        }
    }, [id, getPostById, setFormData, setImgPreview, resetFormData])

    const onImageUpload = (e) => {
        const file = e.target.files[0]
        setImgPreview(URL.createObjectURL(file))
        setFormData('image', file)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isUpdate) {
            updatePost(id, form)
        } else {
            addPost(form)
        }
        navigate('/')
    }

    return (
        <div className="blog-post">
            <Link title="Kembali" onClick={() => navigate('/')} />
            <p className='title'>{isUpdate ? 'Update Post' : 'Create New Post'}</p>
            <Input label="Post Title" value={title} onChange={(e) => setFormData('title', e.target.value)} />
            <Upload onChange={(e) => onImageUpload(e)} src={imgPreview} />
            <TextArea value={body} onChange={(e) => setFormData('body', e.target.value)} />
            <Gap height={20} />
            <div className='button-action'>
                <Button title={isUpdate ? 'Update' : 'Simpan'} onClick={handleSubmit} />
            </div>
        </div>
    )
}

export default PostForm