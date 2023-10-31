//style
import {
  Aside,
  Main,
  BottomEmptyBox,
  TopEmptyBox,
  TopLeftHeader,
  FromBox,
  BtnBox,
  HistoryBtn,
  CommunityBtn,
  RadioText,
} from './style';
//library
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../../store';
import axiosInstance from '../../utils/axiosInterceptor/axiosInterceptor';
//components
import ScrapHeader from '../../components/ScrapHeader';
import CameraItem from '../../components/CameraItem';
import Search from '../../components/SearchInput';
import LogoBody from '../../components/LogoBody';
import CommunityItem from '../../components/CommunityItem';
import MyModal from '../../components/Modal';

const Scrap = () => {
  //화면 변환
  const isAsideVisible = useSelector((state) => state.visibility.isAsideVisible);
  
  //검색한데이터
  const [searchWord, setSearchWord] = useState('');
  
  const [bodyData, setBodyData] = useState({content:"camera"});
  const [scrapId, setScrapId] = useState('');
  
  //히스토리 리스트
  const historyBodySectionHandler = async(props) => {
    console.log(props);
    if(props!=='0'){
      try{
        const response = await axiosInstance.get('/question',
        {params:{id:props}});
        console.log(response);
        setBodyData(response.data)
      }
      catch(error){
        console.log(error);
      }
      setScrapId(props)
    }
  }

  //커뮤니티 리스트 
  const RequestCommunity = async() => {
    try{
      const response = await axiosInstance.get('/scrap/list');
      console.log(response);
      if(response.data.length !== 0){
      setCameraListData(response.data);
      }
    }
    catch(error) {
      console.log(error);
    }
  }
  
  //커뮤니티
  const communityBodySectionHandler = async(props) => {
    console.log(props);
    if(props!=='0'){
      try{
        const response = await axiosInstance.patch('/scrap',
        {params:{id:props}});
        console.log(response);
        setBodyData(response.data)
      }
      catch(error){
        console.log(error);
      }
      setScrapId(props)
    }
  } 
    
  const [cameraListData, setCameraListData] = useState([]);
  const [communityListData, setCommunityListData] = useState([]);

  //히스토리 - 커뮤니티 라디오버튼 
  const [historyToggle, setHistoryToggle] = useState(true);
  const [communityToggle, setCommunityToggle] = useState(false);
  const historyRadio = () => {
    setHistoryToggle(true);
    setCommunityToggle(false);
    setCameraListData(cameraListData);
  };

  const communityRadio = () => {
    setHistoryToggle(false);
    setCommunityToggle(true);
    setCommunityListData(communityListData);
  };

  useEffect(() => {
    RequestCommunity();
  }, [historyToggle])

  const isOpen = useSelector((state) => state.modal.isOpen);
  console.log("모달 상태 확인: ", isOpen);
  
  const dispatch = useDispatch();
  const Modal = () => {
    dispatch(openModal())
  }

  return (
    <>
      <Aside>
        <TopEmptyBox/>
        <TopLeftHeader>Scrap</TopLeftHeader>
        <FromBox><Search
        onDataSearch={(getData) => setSearchWord(getData)}/></FromBox>
        <BtnBox>
          <HistoryBtn
            onClick={historyRadio}
            $done={historyToggle}>
            <RadioText>
              히스토리
            </RadioText>
          </HistoryBtn>
          <CommunityBtn
            onClick={communityRadio}
            $done={communityToggle}>
            <RadioText>
              커뮤니티
            </RadioText>
          </CommunityBtn>
        </BtnBox>
        {historyToggle ? cameraListData.map((sample, index) => (
            <div
            onClick={() => {
              historyBodySectionHandler(sample.id)
            }}
            key={index}>
            <CameraItem
              searchWord={searchWord}
              key={index}
              title={sample.title}
              body={sample.content}
              date={sample.date}
              $scrap={sample.isScrap}
            />
          </div>
          
        )) : communityListData.map((sample, index) => (
            <div
            onClick={() => {
              communityBodySectionHandler(sample.id)
            }}
            key={index}>
            <CommunityItem
              searchWord={searchWord}
              key={index}
              title={sample.title}
              $picture={sample.picture}
              body={sample.content}
              like={sample.like}
              chat={sample.chat}
              $scrap={sample.isScrap}
              date={sample.date}
            />
          </div>
          
        ))
      }
        <BottomEmptyBox/>
      </Aside>
      <Main style={{ left: isAsideVisible ? '0' : '300px' }}>
        <ScrapHeader />
        <TopEmptyBox />
        <LogoBody
          bodyData={bodyData.content}
        />
        {isOpen && (
          <MyModal onClose={Modal}/>
        )}
        <BottomEmptyBox />
      </Main>
    </>
  );
}

export default Scrap;