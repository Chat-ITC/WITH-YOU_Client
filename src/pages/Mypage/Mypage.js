//style
import {
  MypageContainer,
  MyPageHeader,
  TopEmptyBox,
  UserInfoContainer,
  UserContainer,
  UserLevelBox,
  UserInfo,
  UserCrownBox,
  UsernickBox,
  MyPageImg,
  UserNick,
  MajorGrade,
  UserLevel,
  ImgText,
  MyPageList,
  ListBtn,
  Ul,
} from './style';
//library
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCookie } from '../../utils/Cookies/Cookies';
import { useNavigate } from "react-router";
import axiosInstance from '../../utils/axiosInterceptor/axiosInterceptor';
//img
import userInfo from '../../assets/userInfo.png';
import nameChange from '../../assets/nameChange.png';
import inquiry from '../../assets/inquiry.png';
import logout from '../../assets/logout.png';
import Crown1 from '../../assets/crown1.png';
import Crown2 from '../../assets/crown2.png';
import Crown3 from '../../assets/crown3.png';
import Crown4 from '../../assets/crown4.png';
//modal
import MyModal from './MyModal';

const Mypage = () => {
  const navigate = useNavigate();
  const sampleJson = [
    {
      id: "1",
      nickname: "감흥없는 김밥",
      major: "의료IT공학과",
      grade: 3,
      level: 78,
      levelgage: 80,
    },
  ];
  const [userInfoData, setUserInfoData] = useState(sampleJson);
  //유저 정보 받아오기
  const requestUserInfo = async () => {
    try{
      const response = await axiosInstance.get('');
      console.log(response.data);
      const userData = response.data;
      setUserInfoData(userData);
    } catch (error){
      console.log(error);
    }
  }
  console.log("유저 닉네임: ", userInfoData[0].nickname);
  useEffect(() => {
    requestUserInfo();
  }, [])
  
  //modal
  const [isOpen, setIsOpen] = useState(false);
  function handleOpenModal(){
    setIsOpen(true);
  }
  function handleCloseModal(){
    setIsOpen(false);
  }

  //레벨에 따라 왕관 이미지 변경
  function getLevelCrown(level) {
    if (level <= 25) {
      return <img src={Crown1} alt="Crown1" width="25" />;
    } else if (level <= 50) {
      return <img src={Crown2} alt="Crown2" width="25" />;
    } else if (level <= 76) {
      return <img src={Crown3} alt="Crown3" width="25" />;
    } else {
      return <img src={Crown4} alt="Crown4" width="25" />;
    }
    return null; // 다른 경우에는 null을 반환하여 아무 왕관도 표시하지 않음
  }

  //문의하기
  const inquiryURL = "";
  const inquiryButton = () => {
  window.location.href = inquiryURL;
  };

  //로그아웃
  const Logout = async () => {
    console.log("로그아웃");
    try{
      await axiosInstance.post('', null);
      alert("로그아웃 완료");
      navigate("/");
    }catch (error){
      alert("로그아웃 실패. 로그인 화면으로 돌아갑니다.");
      navigate("/");
    }
  };
  
  return (
    <>
      <MyPageHeader>My Page</MyPageHeader>
      <TopEmptyBox/>
      <MypageContainer>
        <UserInfoContainer>
          <UserContainer>
            <MyPageImg>
              <img src={userInfo} alt="" width="55"/>
            </MyPageImg>
            <UserInfo>
              <UsernickBox>
              <UserCrownBox>
                {getLevelCrown(userInfoData[0].level)}
              </UserCrownBox>
              <UserNick>
                {userInfoData[0].nickname}
              </UserNick>
              </UsernickBox>  
              <MajorGrade>
                {userInfoData[0].major} {userInfoData[0].grade}학년
              </MajorGrade>
            </UserInfo> 
          </UserContainer>
          <UserLevelBox>
            <UserLevel>Lv.{userInfoData[0].level}</UserLevel>
            <progress value={userInfoData[0].levelgage} min="0" max="100"></progress>
          </UserLevelBox>
      </UserInfoContainer>
      <Ul>
        <MyPageList onClick={handleOpenModal}>
          <MyPageImg>
            <img src={nameChange} alt="닉네임 설정" width="35"/>
          </MyPageImg>
          <ListBtn>
            <ImgText>닉네임 설정</ImgText>
          </ListBtn>
        </MyPageList>
        {isOpen && (
            <MyModal onClose={handleCloseModal} />
          )}
        <MyPageList>
          <MyPageImg onClick={inquiryButton}>
            <img src={inquiry} alt="문의하기" width="35"/>
          </MyPageImg>
          <ListBtn>
            <ImgText>문의하기</ImgText>
          </ListBtn>
        </MyPageList>
        <MyPageList onClick={Logout}>
          <MyPageImg>
            <img src={logout} alt="로그아웃" width="35"/>
          </MyPageImg>
          <ListBtn>
            <ImgText>로그아웃</ImgText>
          </ListBtn>
        </MyPageList>
      </Ul>
      </MypageContainer>
    </>
  );
}

export default Mypage;