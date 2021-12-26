import { useState, useEffect, useRef } from 'react'
import { DatePicker } from 'react-nice-dates'
import { useDispatch, useSelector } from 'react-redux'
import { locationActions, taskActions } from '../../_actions'
import {
	Grid, LoadingButton, Button, IconButton, Input, Row, InputDate, Selector, Table
} from '../../_components'
import { Container,Title,RowLayout, RowLayoutayout} from '../_shareComponents'
import { Panel, StyledCard, StyledButton, StyledCardContent } from './elements'
import SurveyForm from '../_sections/surveyForm'
import SurveyTable from '../_sections/surveysTable'

const tabindex = {
    INSERT : 1,
    DATA : 2
}
export default function Survey(){
    const [fileSelected, setFileSelected] = useState(null)
    const [uploading, setUploading] = useState(false)
    const [downloading, setDownloading] = useState(false)
    const [tab, setTab] = useState(tabindex.INSERT)
    const fileInput = useRef(null)
    const dispatch = useDispatch()

    /**handle file choose*/
    const handleSelect = () => {
        fileInput.current.click()
    }
    const handleUpload = () => {
        if(uploading) return
        setUploading(true)
        dispatch(taskActions.fileUpload(fileSelected, () => {
            setUploading(false)
        },() => {
            setUploading(false)
        }))
    }
    /**handle selected file changed */
    const handleFileSelected = (e) => {
        setFileSelected(e.target.files[0])
    }
    /**handle download template file */
    const handleTemplateDownload = () => {
        setDownloading(true)
        dispatch(taskActions.templateDownload(() => {
            setDownloading(false)
        }))
    }
    /**switch to data table tab */
    const switchDataTab = () => {
        setTab(tabindex.DATA)
    }
    /**switch to survey tab */
    const switchSurveyTab = () => {
        setTab(tabindex.INSERT)
    }
    return (
        <Container>
            <Title>Survey</Title>
            <RowLayout>
                <StyledCard>
                    <Grid sm={12} md={3} lg={2}>
                        <Panel>
                            <input onChange={handleFileSelected} type='file' ref={fileInput} style={{display:  'none'}}/>
                            <StyledButton onClick={handleSelect} variant='text' style={{textAlign: 'left'}}>{fileSelected? fileSelected.name : '...choose'}</StyledButton>
                            <StyledButton onClick={handleUpload} variant='text' style={{textAlign: 'left'}}>
                                { uploading ? 
                                    <i className="fas fa-circle-notch fa-spin"></i> :
                                    <i className="fas fa-upload"></i>
                                 } Upload
                            </StyledButton>
                            <StyledButton onClick={handleTemplateDownload} variant='text' style={{textAlign: 'left'}}>
                                { downloading ? 
                                    <i className="fas fa-circle-notch fa-spin"></i> :
                                    <i className="fas fa-download"></i>
                                 } Template
                            </StyledButton>
                            <StyledButton onClick={switchDataTab} variant='text' style={{textAlign: 'left'}}><i className="fas fa-database"></i> Data</StyledButton>
                            <StyledButton onClick={switchSurveyTab} variant='text' style={{textAlign: 'left'}}><i class="fas fa-file-alt"></i> Survey</StyledButton>
                        </Panel>
                    </Grid>
                    <Grid sm={12} md={9} lg={10}>
                        <StyledCardContent>
                        {
                            tab == tabindex.INSERT ? 
                            <SurveyForm show={true}/> 
                            :
                            tab == tabindex.DATA ? 
                            <SurveyTable show={true}/>
                            :
                            <></> 
                        }
                        </StyledCardContent>
                    </Grid>
                </StyledCard>
            </RowLayout>
        </Container>
    )
}