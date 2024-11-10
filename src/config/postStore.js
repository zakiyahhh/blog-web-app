import {
    create
} from "zustand";

const fakePosts = [{
        _id: 1,
        title: "Lorep Ipsum 1",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget magna nulla. Aliquam erat volutpat. Phasellus pretium magna in felis blandit sagittis. Vestibulum ac neque nunc.",
        author: "Siti Zakiyah",
        image: "https://picsum.photos/800",
        createdAt: '2023-09-01'
    },
    {
        _id: 2,
        title: "Lorep Ipsum 2",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget magna nulla. Aliquam erat volutpat. Phasellus pretium magna in felis blandit sagittis. Vestibulum ac neque nunc.",
        author: "Rio Awenk",
        image: "https://picsum.photos/800",
        createdAt: '2023-09-02'
    },
    {
        _id: 3,
        title: "Lorep Ipsum 3",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget magna nulla. Aliquam erat volutpat. Phasellus pretium magna in felis blandit sagittis. Vestibulum ac neque nunc.",
        author: "Jeki",
        image: "https://picsum.photos/800",
        createdAt: '2023-09-03'
    }
]

const usePostStore = create((set, get) => ({
    posts: [],
    getPosts: () => {
        set({
            posts: fakePosts
        })
    },
    getPostById: (id) => {
        return get().posts.find((post) => post._id == id)
    }
}))

export default usePostStore