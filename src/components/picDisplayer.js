import React from 'react'
import styles from '../styles/displayerStyles.module.css'
import { SRLWrapper } from "simple-react-lightbox";

const picDisplayer = (props) => {
    const options = {
        buttons: {
            
            
            
            showAutoplayButton: false,
            showCloseButton: true,
            showDownloadButton: false,
            showFullscreenButton: true,
            showNextButton: false,
            showPrevButton: false,
            showThumbnailsButton: false,
            size: '40px'
        },
        thumbnails: {
            showThumbnails: false,
        }
    }
    return (
        <SRLWrapper options={ options}>
        <div className={styles.container}>
            <div className={styles.imageCol}>
                    <img className={styles.imageVisualizador} src={`images/${props.img}.jpg`} alt={props.description} />
            </div>
            <div className={styles.descriptionCol} >
                <p>{props.description}</p>
            </div>
            </div>
        </SRLWrapper>
        );
}

export default picDisplayer;