import {
    CameraBigButton,
    CameraButtonContainer,
    CameraPhrases,
    CameraInput,
    CameraBodyContainer,
    HistoryScrapBtn,
    BodyDataContainer,
    ScrapBtnBox,
    BodyTitleContainer,
    HiddenBox
} from './style'

import { scrapId } from '../../store';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import React from "react";
import axiosInstance from '../../utils/axiosInterceptor/axiosInterceptor'



const CameraBodySection = () => {
    const selectorBodyData = useSelector((state) => state.CameraItemId.bodyData);
    const onlyScrapState = useSelector((state) => state.CameraItemId.scrap);
    // const [scrapStateToggle, setScrapStateToggle] = useState(selectorBodyData.isScrap);

    const navigate = useNavigate();
    //카메라
    const handleFileChange = (e) => {
        const fileURL = URL.createObjectURL(e.target.files[0]);

        if (fileURL) {
            console.log("선택한 파일(홈페이지):", fileURL);
            // 파일을 전달하고 다른 페이지로 이동
            navigate("/capture", { state: fileURL });
        }
    };


    const dispatch = useDispatch();
    const scrapBtnHandler = async () => {
        try {
            const response = await axiosInstance.patch(`/scrap/${selectorBodyData.id}`);
        }
        catch (error) {
            console.log(error);
        }
        if (onlyScrapState === 'YES') {
            dispatch(scrapId('NO'));
        }
        else {
            dispatch(scrapId('YES'));
        }
    }

    return (
        <>
            {selectorBodyData.content === "camera" ?
                <CameraButtonContainer>
                    <CameraBigButton />
                    <CameraInput
                        type="file"
                        accept="image/*; capture=camera"
                        onChange={handleFileChange} />
                    <CameraPhrases>
                        사진을 찍어보세요!
                    </CameraPhrases>
                </CameraButtonContainer>
                :
                <CameraBodyContainer>
                    <ScrapBtnBox>
                        <HiddenBox></HiddenBox>
                        <BodyTitleContainer>
                            {selectorBodyData.title}
                        </BodyTitleContainer>

                        <HistoryScrapBtn
                            onClick={scrapBtnHandler}
                            $scrapState={onlyScrapState} />
                    </ScrapBtnBox>

                    <BodyDataContainer>
                        {selectorBodyData.content}
                    </BodyDataContainer>

                </CameraBodyContainer>
            }
        </>
    );
}

export default CameraBodySection;