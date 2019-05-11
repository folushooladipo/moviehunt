import * as React from "react"
import * as ReactModal from "react-modal"
import { MdClose } from "react-icons/md"

import { DEFAULT_ICON_SIZE } from "../../util/values"

interface IModalProps {
    isModalOpen: boolean
    closeModalHandler: () => void
    content: React.ReactNode
    contentLabel: string
    portalClassName?: string
    overlayClassName?: string
    contentClassName?: string
}

const DEFAULT_FOCUS_MODAL_AFTER_RENDER = false
ReactModal.setAppElement("#root-app")

export default class Modal extends React.Component<IModalProps> {
    render() {
        const {
            isModalOpen, closeModalHandler, content, contentLabel,
            portalClassName, overlayClassName, contentClassName
        } = this.props
        const portalBaseCssClasses = isModalOpen ?
            `mh-modal-portal mh-modal-portal-is-open` :
            "mh-modal-portal"
        const portalCssClasses = portalClassName ?
            `${portalBaseCssClasses} ${portalClassName}` :
            portalBaseCssClasses
        const overlayCssClasses = overlayClassName ?
            `mh-modal-overlay ${overlayClassName}` :
            "mh-modal-overlay"
        const contentCssClasses = contentClassName ?
            `mh-modal-content ${contentClassName}` :
            "mh-modal-content"

        return (
            <ReactModal
                isOpen={ isModalOpen }
                onRequestClose={ () => closeModalHandler() }
                contentLabel={ contentLabel }
                portalClassName={ portalCssClasses }
                overlayClassName= { overlayCssClasses }
                className={ contentCssClasses }
                shouldFocusAfterRender={ DEFAULT_FOCUS_MODAL_AFTER_RENDER }
            >
                <div className="close-modal-btn-container">
                    <MdClose
                        size={ DEFAULT_ICON_SIZE }
                        className="close-modal-btn"
                        onClick={ () => closeModalHandler() }
                    />
                </div>
                { content }
            </ReactModal>
        )
    }
}
