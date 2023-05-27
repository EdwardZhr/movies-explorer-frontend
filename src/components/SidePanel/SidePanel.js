import Navigation from '../Navigation/Navigation';
import './SidePanel.css' 

function SidePanel({isOpen, onClose, width}) {
    return(
        <div className={isOpen ? `side-panel__wrapper side-panel__wrapper_opened` : `side-panel__wrapper`}>
            <div className={isOpen ? `side-panel side-panel_opened` : `side-panel`}>
                {isOpen && <Navigation isSidePanelOpen={isOpen} width={width}/>}
                <button className="side-panel__close-btn" onClick={onClose}></button>
            </div>
        </div>
    )
}

export default SidePanel;