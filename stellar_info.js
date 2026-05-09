import express from 'express';
const app = express();
app.use(express.json());

app.get('/api/stellar/all', (req, res) => {
    const all = {
    yuni: {
        이름: "아야츠노 유니(Ayatsuno Yuni)",
        나이: "4세",
        종족: "혼혈 유니콘",
        생일 : "5월21일",
        신장: "150cm",
        MBTI: "ISTP",
        소속: "스텔라이브(1기 에버리스)",
        팬네임: "아르냥",
        데뷔: "2023년 01월 08일",
        오시마크: "☪️🤍",
        HEX : "#B77DE4"
    },
    huya:{
        이름: "사키하네 후야(Sakihane Huya)",
        나이: "2000세 이상",
        종족: "용",
        생일 : "7월7일",
        신장: "162.8cm",
        MBTI: "INFP",
        소속: "스텔라이브(1기 에버리스)",
        팬네임: "바쿠",
        데뷔: "2025년 09월 20일",
        오시마크: "💜🐲",
        HEX : "#8166A1"
    },
    hina:{
        이름: "시라유키 히나(Shirayuki Hina)",
        나이: "18세",
        종족: "인간",
        생일 : "1월5일",
        신장: "156cm",
        MBTI: "INFP",
        소속: "스텔라이브(2기 유니버스)",
        팬네임: "해둥이",
        데뷔: "2023년 06월 10일",
        오시마크: "🎀❄️",
        HEX : "#F2DCBF"
    },
    mashiro:{
        이름: "네네코 마시로(Neneko Mashiro)",
        나이: "2세",
        종족: "고양이",
        생일 : "2월22   일",
        신장: "160cm",
        MBTI: "INFJ-A",
        소속: "스텔라이브(2기 유니버스)",
        팬네임: "마로",
        데뷔: "2023년 06월 10일",
        오시마크: "🧇🥛",
        HEX : "#25282A"
    },
    lize:{
        이름: "아카네 리제(Akane Lize)",
        나이: "700세",
        종족: "혼혈 뱀파이어",
        생일 : "10월1일",
        신장: "165cm",
        MBTI: "ISTJ",
        소속: "스텔라이브(2기 유니버스)",
        팬네임: "피엔나",
        데뷔: "2023년 06월 11일",
        오시마크: "🍷🩸",
        HEX : "#971B2F"
    },
    tabi:{
        이름: "아라하시 타비(Arahashi Tabi)",
        나이: "16세",
        종족: "이세계인",
        생일 : "9월7일",
        신장: "150cm",
        MBTI: "INFJ",
        소속: "스텔라이브(2기 유니버스)",
        팬네임: "뿡댕이",
        데뷔: "2023년 06월 11일",
        오시마크: "🧭🌊",
        HEX : "#9ADAFF"
    },
    shibuki:{
        이름: "텐코 시부키(Tenko Shibuki)",
        나이: "1000세",
        종족: "여우신",
        생일 : "3월21일",
        신장: "157cm",
        MBTI: "ISFP/ESFP",
        소속: "스텔라이브(3기 클리셰)",
        팬네임: "이나리",
        데뷔: "2024년 05월 18일",
        오시마크: "⛩️🕹️",
        HEX : "#C2AFE6"
    },
    rin:{
        이름: "아오쿠모 린(Aokumo Rin)",
        나이: "(영원한)17세",
        종족: "인간",
        생일 : "5월3일",
        신장: "160cm",
        MBTI: "ISTP",
        소속: "스텔라이브(3기 클리셰)",
        팬네임: "쿠리미",
        데뷔: "2024년 05월 18일",
        오시마크: "☁️🛼",
        HEX : "#2B66C0"
    },
    nana:{
        이름: "하나코 나나(Hanako Nana)",
        나이: "불명",
        종족: "인간",
        생일 : "8월7일",
        신장: "142cm",
        MBTI: "ENTP",
        소속: "스텔라이브(3기 클리셰)",
        팬네임: "페토",
        데뷔: "2024년 05월 19일",
        오시마크: "🔫🐰",
        HEX : "#DF7685"
    },
    riko:{
        이름: "유즈하 리코(Yuzuha Riko)",
        나이: "18세",
        종족: "이세계인",
        생일 : "4월13일",
        신장: "158cm",
        MBTI: "ESFP-T",
        소속: "스텔라이브(3기 클리셰)",
        팬네임: "치코",
        데뷔: "2024년 05월 19일",
        오시마크: "⚔️🍀",
        HEX : "#A6D0A6"
    }};
    res.json(all);
    console.log('✅ /api/stellar/all 요청 처리 완료');
    console.log(all);
    });
app.get('/api/stellar/everys', (req, res) => {
    const everys = {
        yuni: {
        이름: "아야츠노 유니(Ayatsuno Yuni)",
        나이: "4세",
        종족: "혼혈 유니콘",
        생일 : "5월21일",
        신장: "150cm",
        MBTI: "ISTP",
        소속: "스텔라이브(1기 에버리스)",
        팬네임: "아르냥",
        데뷔: "2023년 01월 08일",
        오시마크: "☪️🤍",
        HEX : "#B77DE4"
    },
    huya:{
        이름: "사키하네 후야(Sakihane Huya)",
        나이: "2000세 이상",
        종족: "용",
        생일 : "7월7일",
        신장: "162.8cm",
        MBTI: "INFP",
        소속: "스텔라이브(1기 에버리스)",
        팬네임: "바쿠",
        데뷔: "2025년 09월 20일",
        오시마크: "💜🐲",
        HEX : "#8166A1"
    }};
    res.json(everys);
    console.log('✅ /api/stellar/everys 요청 처리 완료');
    console.log(everys);
    });
app.get('/api/stellar/universe', (req, res) => {
    const uiniverse = {
    hina:{
        이름: "시라유키 히나(Shirayuki Hina)",
        나이: "18세",
        종족: "인간",
        생일 : "1월5일",
        신장: "156cm",
        MBTI: "INFP",
        소속: "스텔라이브(2기 유니버스)",
        팬네임: "해둥이",
        데뷔: "2023년 06월 10일",
        오시마크: "🎀❄️",
        HEX : "#F2DCBF"
    },
    mashiro:{
        이름: "네네코 마시로(Neneko Mashiro)",
        나이: "2세",
        종족: "고양이",
        생일 : "2월22   일",
        신장: "160cm",
        MBTI: "INFJ-A",
        소속: "스텔라이브(2기 유니버스)",
        팬네임: "마로",
        데뷔: "2023년 06월 10일",
        오시마크: "🧇🥛",
        HEX : "#25282A"
    },
    lize:{
        이름: "아카네 리제(Akane Lize)",
        나이: "700세",
        종족: "혼혈 뱀파이어",
        생일 : "10월1일",
        신장: "165cm",
        MBTI: "ISTJ",
        소속: "스텔라이브(2기 유니버스)",
        팬네임: "피엔나",
        데뷔: "2023년 06월 11일",
        오시마크: "🍷🩸",
        HEX : "#971B2F"
    },
    tabi:{
        이름: "아라하시 타비(Arahashi Tabi)",
        나이: "16세",
        종족: "이세계인",
        생일 : "9월7일",
        신장: "150cm",
        MBTI: "INFJ",
        소속: "스텔라이브(2기 유니버스)",
        팬네임: "뿡댕이",
        데뷔: "2023년 06월 11일",
        오시마크: "🧭🌊",
        HEX : "#9ADAFF"
    }};
    res.json(uiniverse);
    console.log('✅ /api/stellar/universe 요청 처리 완료');
    console.log(uiniverse);
    });
app.get('/api/stellar/cliche', (req, res) => {
    const cliche = {
    shibuki:{
        이름: "텐코 시부키(Tenko Shibuki)",
        나이: "1000세",
        종족: "여우신",
        생일 : "3월21일",
        신장: "157cm",
        MBTI: "ISFP/ESFP",
        소속: "스텔라이브(3기 클리셰)",
        팬네임: "이나리",
        데뷔: "2024년 05월 18일",
        오시마크: "⛩️🕹️",
        HEX : "#C2AFE6"
    },
    rin:{
        이름: "아오쿠모 린(Aokumo Rin)",
        나이: "(영원한)17세",
        종족: "인간",
        생일 : "5월3일",
        신장: "160cm",
        MBTI: "ISTP",
        소속: "스텔라이브(3기 클리셰)",
        팬네임: "쿠리미",
        데뷔: "2024년 05월 18일",
        오시마크: "☁️🛼",
        HEX : "#2B66C0"
    },
    nana:{
        이름: "하나코 나나(Hanako Nana)",
        나이: "불명",
        종족: "인간",
        생일 : "8월7일",
        신장: "142cm",
        MBTI: "ENTP",
        소속: "스텔라이브(3기 클리셰)",
        팬네임: "페토",
        데뷔: "2024년 05월 19일",
        오시마크: "🔫🐰",
        HEX : "#DF7685"
    },
    riko:{
        이름: "유즈하 리코(Yuzuha Riko)",
        나이: "18세",
        종족: "이세계인",
        생일 : "4월13일",
        신장: "158cm",
        MBTI: "ESFP-T",
        소속: "스텔라이브(3기 클리셰)",
        팬네임: "치코",
        데뷔: "2024년 05월 19일",
        오시마크: "⚔️🍀",
        HEX : "#A6D0A6"
    }};
    res.json(cliche);
    console.log('✅ /api/stellar/cliche 요청 처리 완료');
    console.log(cliche);
    });
app.get('/api/stellar/yuni', (req, res) => {
    const yuni_i = {
        yuni: {
        이름: "아야츠노 유니(Ayatsuno Yuni)",
        나이: "4세",
        종족: "혼혈 유니콘",
        생일 : "5월21일",
        신장: "150cm",
        MBTI: "ISTP",
        소속: "스텔라이브(1기 에버리스)",
        팬네임: "아르냥",
        데뷔: "2023년 01월 08일",
        오시마크: "☪️🤍",
        HEX : "#B77DE4"
    }};
    res.json(yuni_i);
    console.log('✅ /api/stellar/yuni 요청 처리 완료');
    console.log(yuni_i);
    });
app.get('/api/stellar/huya', (req, res) => {
    const huya_i = {
    huya:{
        이름: "사키하네 후야(Sakihane Huya)",
        나이: "2000세 이상",
        종족: "용",
        생일 : "7월7일",
        신장: "162.8cm",
        MBTI: "INFP",
        소속: "스텔라이브(1기 에버리스)",
        팬네임: "바쿠",
        데뷔: "2025년 09월 20일",
        오시마크: "💜🐲",
        HEX : "#8166A1"
    }};
    res.json(huya_i);
    console.log('✅ /api/stellar/huya 요청 처리 완료');
    console.log(huya_i);
    });
app.get('/api/stellar/mystic', (req, res) => {
    const mystic = {
        kanna:{
            이름: "아이리 칸나(Airi Kanna)",
            나이: "1700세",
            종족: "용",
            생일 : "12월2일",
            신장: "155cm",
            MBTI: "ISFP",
            소속: "스텔라이브(구 1기 미스틱)",
            팬네임: "비늘이",
            데뷔: "2023년 01월 17일",
            오시마크: "🐉💎",
            HEX : "##373584"
        },
        yuni: {
            이름: "아야츠노 유니(Ayatsuno Yuni)",
            나이: "4세",
            종족: "혼혈 유니콘",
            생일 : "5월21일",
            신장: "150cm",
            MBTI: "ISTP",
            소속: "스텔라이브(구 1기 미스틱)",
            팬네임: "아르냥",
            데뷔: "2023년 01월 08일",
            오시마크: "☪️🤍",
            HEX : "#B77DE4"
    }};
    res.json(mystic);
    console.log('✅ /api/stellar/mystic 요청 처리 완료');
    console.log(mystic);
    });
app.get('/api/stellar/hina', (req, res) => {
    const hina_i = {
    hina:{
        이름: "시라유키 히나(Shirayuki Hina)",
        나이: "18세",
        종족: "인간",
        생일 : "1월5일",
        신장: "156cm",
        MBTI: "INFP",
        소속: "스텔라이브(2기 유니버스)",
        팬네임: "해둥이",
        데뷔: "2023년 06월 10일",
        오시마크: "🎀❄️",
        HEX : "#F2DCBF"
    }};
    res.json(hina_i);
    console.log('✅ /api/stellar/hina 요청 처리 완료');
    console.log(hina_i);
    });
app.get('/api/stellar/mashiro', (req, res) => {
    const mashiro_i = {
    mashiro:{
        이름: "네네코 마시로(Neneko Mashiro)",
        나이: "2세",
        종족: "고양이",
        생일 : "2월22일",
        신장: "160cm",
        MBTI: "INFJ-A",
        소속: "스텔라이브(2기 유니버스)",
        팬네임: "마로",
        데뷔: "2023년 06월 10일",
        오시마크: "🧇🥛",
        HEX : "#25282A"
    }};
    res.json(mashiro_i);
    console.log('✅ /api/stellar/mashiro 요청 처리 완료');
    console.log(mashiro_i);
    });
app.get('/api/stellar/lize', (req, res) => {
    const lize_i = {
    lize:{
        이름: "아카네 리제(Akane Lize)",
        나이: "700세",
        종족: "혼혈 뱀파이어",
        생일 : "10월1일",
        신장: "165cm",
        MBTI: "ISTJ",
        소속: "스텔라이브(2기 유니버스)",
        팬네임: "피엔나",
        데뷔: "2023년 06월 11일",
        오시마크: "🍷🩸",
        HEX : "#971B2F"
    }};
    res.json(lize_i);
    console.log('✅ /api/stellar/lize 요청 처리 완료');
    console.log(lize_i);
    });
app.get('/api/stellar/tabi', (req, res) => {
    const tabi_i = {
    tabi:{
        이름: "아라하시 타비(Arahashi Tabi)",
        나이: "16세",
        종족: "이세계인",
        생일 : "9월7일",
        신장: "150cm",
        MBTI: "INFJ",
        소속: "스텔라이브(2기 유니버스)",
        팬네임: "뿡댕이",
        데뷔: "2023년 06월 11일",
        오시마크: "🧭🌊",
        HEX : "#9ADAFF"
    }};
    res.json(tabi_i);
    console.log('✅ /api/stellar/tabi 요청 처리 완료');
    console.log(tabi_i);
    });
app.get('/api/stellar/shibuki', (req, res) => {
    const shibuki_i = {
    shibuki:{
        이름: "텐코 시부키(Tenko Shibuki)",
        나이: "1000세",
        종족: "여우신",
        생일 : "3월21일",
        신장: "157cm",
        MBTI: "ISFP/ESFP",
        소속: "스텔라이브(3기 클리셰)",
        팬네임: "이나리",
        데뷔: "2024년 05월 18일",
        오시마크: "⛩️🕹️",
        HEX : "#C2AFE6"
    }};
    res.json(shibuki_i);
    console.log('✅ /api/stellar/shibuki 요청 처리 완료');
    console.log(shibuki_i);
    });
app.get('/api/stellar/rin', (req, res) => {
    const rin_i = {
    rin:{
        이름: "아오쿠모 린(Aokumo Rin)",
        나이: "(영원한)17세",
        종족: "인간",
        생일 : "5월3일",
        신장: "160cm",
        MBTI: "ISTP",
        소속: "스텔라이브(3기 클리셰)",
        팬네임: "쿠리미",
        데뷔: "2024년 05월 18일",
        오시마크: "☁️🛼",
        HEX : "#2B66C0"
    }};
    res.json(rin_i);
    console.log('✅ /api/stellar/rin 요청 처리 완료');
    console.log(rin_i);
    });
app.get('/api/stellar/nana', (req, res) => {
    const nana_i = {
    nana:{
        이름: "하나코 나나(Hanako Nana)",
        나이: "불명",
        종족: "인간",
        생일 : "8월7일",
        신장: "142cm",
        MBTI: "ENTP",
        소속: "스텔라이브(3기 클리셰)",
        팬네임: "페토",
        데뷔: "2024년 05월 19일",
        오시마크: "🔫🐰",
        HEX : "#DF7685"
    }};
    res.json(nana_i);
    console.log('✅ /api/stellar/nana 요청 처리 완료');
    console.log(nana_i);
    });
app.get('/api/stellar/riko', (req, res) => {
    const riko_i = {
    riko:{
        이름: "유즈하 리코(Yuzuha Riko)",
        나이: "18세",
        종족: "이세계인",
        생일 : "4월13일",
        신장: "158cm",
        MBTI: "ESFP-T",
        소속: "스텔라이브(3기 클리셰)",
        팬네임: "치코",
        데뷔: "2024년 05월 19일",
        오시마크: "⚔️🍀",
        HEX : "#A6D0A6"
    }};
    res.json(riko_i);
    console.log('✅ /api/stellar/riko 요청 처리 완료');
    console.log(riko_i);
    });
app.listen(1220, () => {
    console.log('✅ 서버 실행 중: http://localhost:1220/api/stellar');
});