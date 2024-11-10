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
        if (get().posts.length === 0) {
            set({
                posts: fakePosts
            })
        }
    },
    getPostById: (id) => {
        return get().posts.find((post) => post._id == id)
    },
    addPost: (post) => {
        set((state) => ({
            posts: [...state.posts, {
                ...post,
                _id: state.posts.length + 1,
                createdAt: '2024-09-01',
                author: "Siti Zakiyah",
                image: 'https://picsum.photos/800'
            }]
        }))
    },
    updatePost: (id, updatedPost) => {
        set((state) => ({
            posts: state.posts.map((post) => post._id == id ? {
                ...post,
                ...updatedPost
            } : post)
        }))
    }
}))

export default usePostStore