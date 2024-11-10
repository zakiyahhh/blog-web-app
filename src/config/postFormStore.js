import {
    create
} from "zustand";

const usePostFormStore = create((set) => ({
    form: {
        title: '',
        body: '',
        image: ''
    },
    imgPreview: null,
    setFormData: (formType, formValue) => set((state) => ({
        form: {
            ...state.form,
            [formType]: formValue
        }
    })),
    setImgPreview: (preview) => set(() => ({
        imgPreview: preview
    })),
    resetFormData: () => set({
        form: {
            title: '',
            body: '',
            image: ''
        },
        imgPreview: null
    })
}))

export default usePostFormStore