import { useEffect, useState } from "react"
import { Gap, Link } from "../../components"
import { useNavigate, useParams } from "react-router-dom"
import './postDetail.css'
import usePostStore from "../../config/postStore"

function PostDetail() {
    const navigate = useNavigate()
    const { getPostById } = usePostStore()
    const { id } = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        const post = getPostById(id)
        setData(post)
    }, [getPostById, id])

    return (
        <div className="detail-blog-wrapper">
            <Gap height={20} />
            <img className="img-cover" src={data.image} alt="Thumb" />
            <p className="blog-title">{data.title}</p>
            <p className="blog-author">{data.author} - {data.createdAt}</p>
            <p className="blog-body">{data.body}</p>
            <Gap height={20} />
            <Link title="Kembali Ke Home" onClick={() => navigate('/')} />
        </div>
    )
}

export default PostDetail