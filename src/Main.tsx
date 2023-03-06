import '../src/component/Style.scss';

const Main = () => {

    return (
        <div>
            <h2>웹 프론트엔드 개발자 장한나의 포트폴리오입니다</h2>
            <div>
                <h3>about me</h3>
                <div>저는 문제해결능력이 뛰어난 개발자가 되자는 목표를 가지고 있습니다.</div>
            </div>
            <h3>project</h3>
            <div className='Project'>
                <div className='ProjectSummary'>
                    <h2>SAYO</h2>
                    <div>2023.02.21 ~ 현재</div>
                    <a href='https://jhn221.github.io/'></a>
                </div>
                <div className='ProjectDetail'>
                    <div>백엔드 3명 프론트엔드 2명 중 FrontEnd로 참여 (팀원)</div>
                    <div>사용 언어 및 프레임워크 : typescript, HTML, Styled-Component, react, react-query, axios, router-dom</div>
                    <div>백엔드 3명 프론트엔드 3명 중 FrontEnd로 참여(팀장)</div>
                    <ul>
                        <li>크롤링을 이용한 데이터를 받아와 OTT별 (왓챠, 티빙, 웨이브) 영화 순위를 확인할 수 있는 사이트입니다.</li>
                        <li> 바닐라 자바스크립트를 사용하였으며 redux로 관리하던 상태를 react-query로 리펙토링 했습니다.</li>
                        <li>useRef를 이용한 무한 스크롤을 구현했습니다.</li>
                        <li>영화 소개 디테일 페이지, 마이페이지(추천, 비추천, 인생작품, 찜하기 list), 게시판 페이지 구현</li>
                    </ul>
                    <div>간단한 회고.</div>
                </div>
            </div>
            <div className='Project'>
                <div className='ProjectSummary'>
                    <h2>뭘봐유</h2>
                    <div>2023.01.02 ~ 2023.02.03</div>
                </div>
                <div className='ProjectDetail'>
                    <div>백엔드 3명 프론트엔드 3명 중 FrontEnd로 참여 (팀원)</div>
                    <div>사용 언어 및 프레임워크 : javascript, HTML, Styled-Component, react, react-query, axios, router-dom</div>
                    <div>OTT는 많고 볼 수 있는 작품도 많지만 항상 영화 고르는데만 시간을 쏟다 지쳐 결국 영화를 보지 못 한 경험에서 불편함을 느껴 제작하게 된 사이트 입니다.</div>
                    <ul>
                        <li>크롤링을 이용한 데이터를 받아와 OTT별 (왓챠, 티빙, 웨이브) 영화 순위를 확인할 수 있는 사이트입니다.</li>
                        <li> 바닐라 자바스크립트를 사용하였으며 redux로 관리하던 상태를 react-query로 리펙토링 했습니다.</li>
                        <li>useRef를 이용한 무한 스크롤을 구현했습니다.</li>
                        <li>영화 소개 디테일 페이지, 마이페이지(추천, 비추천, 인생작품, 찜하기 list), 게시판 페이지 구현</li>
                    </ul>
                    <div>간단한 회고.</div>
                </div>                
               
            </div>
            <div className='Project'>
                <div className='ProjectSummary'>
                    <h2>cloneoverflow </h2>
                    <div>2022.12.20 ~ 2022.12.31</div>
                </div>
                <div className='ProjectDetail'> 
                    <div>백엔드 3명 프론트엔드 3명 중 FrontEnd로 참여 (팀장)</div>
                    <div>사용 언어 및 프레임워크 : javascript, HTML, Styled-Component, react, redux, axios, router-dom</div>
                    <ul>
                        <li>stackover flow를 클론코딩하여 질문 및 답변을 작성하고,평가할 수 있는 사이트입니다.</li>
                        <li>바닐라 자바스크립트를 사용하였으며 router-dom과 redux 상태관리에 대해 공부했습니다.</li>
                        <li>jwt 토큰을 이용한 로그인 인증방식을 이용했습니다.</li>
                        <li>Home, 질문 디테일 페이지 페이지 구현</li>
                    </ul>
                    <div>간단한 회고.</div>
                </div>
            </div>
            <h2>content</h2>
            <div className='Logos'>
                <div>email : ewal4291@gmail.com</div>
                <div className='Logo'><img src = '/assets/github.png' style={{"width":"50px","height":"50px"}}/></div>
                <div className='Logo'><img src = '/assets/tstoryBlack.png' style={{"width":"35px","height":"35px"}}/></div>
            </div>
        </div>
    )
}

export default Main;