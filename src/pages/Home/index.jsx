import { useEffect } from 'react'
import { Button, Gap, PostItem } from '../../components'
import Swal from 'sweetalert2'
import './home.css'
import usePostStore from '../../config/postStore'
import { useNavigate } from 'react-router-dom'

function Home() {
    const { posts, getPosts } = usePostStore()
    const navigate = useNavigate()

    useEffect(() => {
        getPosts()
    }, [getPosts])

    const handleDelete = () => {
        Swal.fire({
            title: "Apakah anda yakin?",
            text: "Anda tidak dapat mengembalikan ini!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya, hapus!",
            cancelButtonText: "Tidak"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Dihapus!",
                    text: "Postingan anda telah dihapus.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="Tambah Post Baru" onClick={() => navigate('/post-form')} />
            </div>
            <Gap height={20} />
            <div className="content-wrapper">
                {posts.map((post) => (
                    <PostItem
                        key={post._id}
                        _id={post._id}
                        image={post.image}
                        title={post.title}
                        name="Siti Zakiyah"
                        date={post.createdAt}
                        body={post.body}
                        onDelete={() => handleDelete()}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home