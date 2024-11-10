import { Button, Gap, PostItem } from '../../components'
import Swal from 'sweetalert2'
import './home.css'

function Home() {
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
                <Button title="Tambah Post Baru" />
            </div>
            <Gap height={20} />
            <div className="content-wrapper">
                <PostItem
                    image="https://picsum.photos/800"
                    title="Image Title"
                    name="Siti Zakiyah"
                    date="13 Nov 2024"
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in accumsan magna. Cras pellentesque ornare felis sed faucibus. Quisque mollis turpis est, vitae tempor sem porttitor at. Donec eget pretium diam."
                    onDelete={() => handleDelete()}
                />
            </div>
        </div>
    )
}

export default Home