import styled, { css, keyframes } from 'styled-components';
import openeye from '../assets/openEye.png';
import closeeye from '../assets/closeEye.png';
import fillStar from '../assets/FillStar.svg';
import emptyStar from '../assets/star.svg';
import Send from '../assets/send.svg';
import Crown1 from '../assets/crown1.png';
import Crown2 from '../assets/crown2.png';
import Crown3 from '../assets/crown3.png';
import Crown4 from '../assets/crown4.png';

//이미지 크기 조정
export const ImgBtn = styled.img`
  width: 35px;
  opacity: 0.3;
`;

export const ChatImg = styled.img`
  width: 14px;
  height: 13px;
`;

export const ChatContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  line-height: 20px;
  gap: 5px;
`;

export const ChatContent = styled.span`
  font-size: 12px;
`;


export const CommunityChatContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 20px;
  line-height: 20px;
  gap: 5px;
  margin-top: 25px;
`;

export const CommunityDateContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: grey;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  gap: 3px;
`

export const CameraDateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  gap: 5px;
`

//BodySection


export const LogoContainer = styled.div`
  display:flex;
  margin: 0 auto;
  width: 400px;
  height: 80%;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-weight: bold;
  opacity: 0.1;
  transform: translate(-2%, -2%);
`;







export const HiddenBox = styled.div`
  width: 40px;
`;

export const CommunityScrapBtn = styled.div`
  margin: 20px;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${emptyStar});
  ${props => props.$scrapState === "YES" && css`
        background-image: url(${fillStar});
    `}
`





export const ScrapBodyDataContainer = styled.div`
  padding: 20px 40px 40px 40px;
  font-size: 19px;
  white-space: pre-wrap;
  line-height: 30px;
  text-align: center;
  height: 79%;
  margin: 0 auto;
  overflow-y: scroll;
  overflow-x: hidden;
`

export const LogoBodyContent = styled.div`
  text-align: left;
`;

export const BodyTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

//CameraHeader


export const ScrapHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top:0;
  right:0;
  left: 300px;
  height: 65px;
  padding: 0 20px;
  background-color: #FFE2AB;
  transition: all 350ms;
`;

export const CommunityHeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top:0;
  right:0;
  left: 300px;
  height: 65px;
  padding: 0 20px;
  background-color: #94E5FF;
  transition: all 350ms;
`;

//CaptureHeaderTop
export const CaptureHeaderTop = styled.div`
  display: flex;
  position: fixed;
  top:0;
  right:0;
  left:300px;
  justify-content: flex-end;
  align-items: center;
  height: 65px;
  padding: 0 20px;
  background-color: #FFC1C1;
`;

export const LoadingTextContainer = styled.span`
  padding-left: 30px;
  font-weight: bold;
  color: black;
`;

export const LoadingText = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

const breatheAnimation = keyframes`
  0% { vertical-align: bottom }
 50% { vertical-align: top }
 100% { vertical-align: bottom }
`

export const Dot1 = styled.span`
  animation-name: ${breatheAnimation};
  animation-delay: 0s; 
  animation-duration: 1s;
  animation-iteration-count: infinite;
`

export const Dot2 = styled(Dot1)`
  animation-delay: 0.3s; 
`

export const Dot3 = styled(Dot1)`
  animation-delay: 0.6s; 
`

export const HeaderImgBox = styled.div`
  display: flex;
  align-items: center;
  gap:20px;
  position: relative;
  position: 0;
`;

export const Setting = styled.select`
  position: absolute;
  top: -10px;
  right: 0;
  width: 35px;
  height: 60px;
  opacity: 0;
`;

export const Option = styled.option`
  display: none;
`;

export const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: -10px;
  right: 0;
  width: 35px;
  height: 60px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  background-color: #222222;
  color: #fefefe;
`;

//TextInput
export const InputIdContainer = styled.div`
  width: 260px;
  height: 43px;
  border: 1px solid #bababa;
  border-radius: 5px;
  margin-bottom: 7px;
`;

export const InputId = styled.input`
  font-size: 16px;
  line-height: 16px;
  outline: none;
  border: none;
  width: 240px;
  height: 35px;
`;

//PWInput
export const InputPWContainer = styled.div`
  display:flex;
  width: 260px;
  height: 43px;
  border: 1px solid #bababa;
  border-radius: 5px;
  margin-bottom: 7px;
`;

export const PWContainer = styled.div`
  width: 240px;
  height: 43px;
`;

export const InputPW = styled.input`
  font-size: 16px;
  outline: none;
  border: 0px;
  width: 240px;
  height: 35px;
`;

export const Eye = styled.div`
  top: 17px;
  right: 10px;
  margin-right:10px;
  display:flex;
  align-items: center;
`;

export const EyeState = styled.div` 
  background-image:  url(${closeeye}); //기본상태: 닫힌 눈
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  opacity: 0.4; //투명도
  ${props =>
    props.$done &&
    css`
        background-image: url(${openeye}); //props로 false를 전달 받으면 열린 눈
    `}
`;

//SearchInput
export const SearchBox = styled.div`
  width: 240px;
  height: 35px;
  position: relative;
`;

export const SearchForm = styled.input`
  width: 235px;
  height: 35px;
  background-color: #ededed;
  border: 0px solid #000;
  border-radius: 9px;
  padding-left: 40px;
  outline: none;
  font-size: 15px;
`;

export const Search = styled.img`
  position: absolute;
  top: 11px;
  left: 10px;
  width: 18px;
`;
//RequestCheckBox
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  text-indent: 10px;
  margin-left: -10px;
  padding: 16px 20px 16px 0px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.20);
`;

export const TextContent = styled.div`
  height: 35px;
  line-height: 35px;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

//CommunityBodySection
export const CommunityBodyContainer = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const CommunityContent = styled.div`
  overflow: none;
`;

export const CommunityTitle = styled.div`
  width: 790px;
  font-size: 24px;
  font-weight: bold;
  padding: 10px 20px;
`;

export const UserData = styled.div`
  width: 790px;
  padding: 0 20px;
`;

export const UserDataSpan = styled.span`
  font-size: 14px;
  padding: 5px;
  height: 10px;
  line-height: 10px;
  font-weight: 600;
  &::after{
    content: '|';
    color: #606060;
    padding: 0 0 0 5px;
    height: 10px;
    line-height: 10px;
    font-weight: 100;
  }
  &:nth-child(2){
    color: #606060;
  }
  &:nth-child(3) {
    font-weight: 400;
    &::after {
      content: ''; /* 가상 요소의 content를 비워줌 */
    }
  }
`;

export const CommunityBody = styled.div`
  width: 790px;
  font-size: 16px;
  line-height: 2.18em;
  padding: 15px 0;
`;


export const CommunityImg = styled.img`
  width: 790px;
  height: 600px;
  object-fit: contain;
`

export const LikeChatBox = styled.div`
  width: 785px;
  padding: 40px 20px 0;
  margin-right: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const LikeBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  background-color: #FFC6C3;
  color: #D7443E;
`;

export const ScrapBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  background-color: #FFF2D0;
  color: #FFCC49;
`;

export const BtnImg = styled.img`
  width: 20px;
  height: 20px;
 
  margin-right: 8px;
`;

export const BtnText = styled.div`
  display: inline-block;
  height: 30px;
  line-height: 30px;
`;

export const InputChatBox = styled.div`
  width: 830px;
  margin: 0 auto;
`;

export const CommentBox = styled.div`
  width: 780px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
`;

export const TextBox = styled.div`
  margin-left: 15px;
  width: 800px;
  height: 45px;
  border-radius: 10px;
  display: flex;
  gap: 10px;
`;

export const Textarea = styled.textarea`
  width: 760px;
  max-height: 5em; 
  line-height: 1.8em;
  font-size: 14px;
  padding-left: 10px;
  outline: none;
  background-color: #D9D9D9;
  border-radius: 10px;
  border: none;
  overflow-y: auto;
  resize: none;
  -ms-overflow-style:none;
  &::-webkit-scrollbar{
    display:none;
  }
`;

export const TextImg = styled.div`
  display: inline-block;
  width: 35px;
  height: 35px;
  margin-top: 5px;
  margin-right: 15px;
  background-image: url(${Send});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  background-color: #fff;
`;

export const CommentContainer = styled.div`
  width: 760px;
  border-radius: 10px;
  background-color: #D9D9D9;
  padding: 15px;
`;

export const CommentUserBox = styled.div`
  display: flex;
`

export const ChatUserLevel = styled.div`
  width: 23px;
  height: 23px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  ${props => props.level <= 40 && css`
        background-image: url(${Crown4});
  `} 

  ${props => props.level <= 30 && css`
        background-image: url(${Crown3});
  `} 
  
  ${props => props.level <= 20 && css`
        background-image: url(${Crown2});
  `}  

  ${props => props.level <= 10 && css`
        background-image: url(${Crown1});
    `}
`

export const ChatUser = styled.span`
  font-size: 16px;
  font-weight: bold;
  padding: 0 5px;
`;

export const ChatUserMajor = styled.span`
  font-size: 16px;
  font-weight: bold;
  padding: 0 5px;
  color: #606060;
`;

export const ChatBody = styled.div`
  font-size: 16px;
  padding: 3px 0;
  margin: 3px 0;
`;

export const ChatDate = styled.div`
  font-size: 14px;
  color: #606060;
`;

//modal
export const ModalBody = styled.div` 
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
`;

export const Content = styled.div`
  background: white;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 10px;
  width: 380px;
  height: 240px;
`;

export const ModalTItle = styled.div`
  font-size: 22px;
  font-weight: bold;
  line-height: 22px;
`;

export const ModalInput = styled.div`
  color: red;
  font-size: 16px;
  line-height: 16px;
`;

export const NickBtnBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const ModalSetBtn = styled.button`
  background-color: #3DA5F5;
  padding: 10px;
  width: 100px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 10px; 
  color: white;
`;

export const ModalCloseBtn = styled.button`
  background-color: #fff;
  padding: 10px;
  width: 100px;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #3DA5F5;
  border-radius: 10px; 
  color: #3DA5F5;
`;

export const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index:10;
  `;