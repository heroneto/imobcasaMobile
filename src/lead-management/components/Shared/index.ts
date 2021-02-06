

export interface ModalProps {
    title: string,
    options: Array<ModalOptionsProps>
}

export interface ModalOptionsProps {
    name: string,
    pageToNavigate: string,
    navigationParameters?: object,
    id: string,
    isPageExternalLink: boolean
}