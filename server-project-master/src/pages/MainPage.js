import React from 'react'
import styled from 'styled-components'
import Topbar from '../components/Topbar';
import Searchbar from '../components/Searchbar';
import BestUser from '../components/BestUser';
import BestLecturer from '../components/BestLecturer';
import MainLecField from '../components/MainLecField';

function MainPage() {

    const Top = styled.div`
        width: 1200px;
        margin: 30px auto;
    `
    const LecMaindiv = styled.div`
        width: 1200px;
        margin: 0 auto;
    `
    const LecMain = styled.div`
        display: flex;
    `
    const LecMainleft = styled.div`
        width: 65%;
    `
    const LecMainright = styled.div`
        width: 35%;
    `
    const VidioDiv = styled.div`
        width: 100%;
        height: 300px;
    `

    return (
        <div>
            <Top><Topbar /></Top>
            <LecMaindiv>
                <Searchbar />
                <LecMain>
                    <LecMainleft>
                        <MainLecField name="웹개발" sub1="HTML/CSS" sub2="Javascript" sub3="Vue" color= "#FFC000" />
                        <MainLecField name="프론트앤드" sub1="프론트1" sub2="프론트2" sub3="프론트3" color= "#A9D18E" />
                        <MainLecField name="백앤드" sub1="백1" sub2="백2" color= "#F4B183" />
                        <MainLecField name="프로그래밍 언어" sub1="Python" sub2="Java" sub3="PHP"color= "#8FAADC"  />
                        <MainLecField name="게임 만들기" sub1="게임1" color= "#BB7EEE" />
                        <MainLecField name="프로젝트 관리" sub1="github" sub2="gitlab" sub3="redmine" color= "#BFBFBF" />
                    </LecMainleft>
                    <LecMainright>
                        <BestUser />
                        <BestLecturer />
                    </LecMainright>
                </LecMain>
            </LecMaindiv>
        </div>
    );
}

export default MainPage;