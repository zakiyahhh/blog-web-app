import { Gap, Link } from "../../components"
import { useNavigate } from "react-router-dom"
import './postDetail.css'

function PostDetail() {
    const navigate = useNavigate()

    return (
        <div className="detail-blog-wrapper">
            <Gap height={20} />
            <img className="img-cover" src="https://picsum.photos/800" alt="Thumb" />
            <p className="blog-title">Lorem Ipsum</p>
            <p className="blog-author">Siti Zakiyah - 13 Nov 2024</p>
            <p className="blog-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in accumsan magna. Cras pellentesque ornare felis sed faucibus. Quisque mollis turpis est, vitae tempor sem porttitor at. Donec eget pretium diam.</p>
            <Gap height={20} />
            <Link title="Kembali Ke Home" onClick={() => navigate('/')} />
        </div>
    )
}

export default PostDetail