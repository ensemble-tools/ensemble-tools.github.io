// songs.js — Voltage Predictor 곡 데이터 & 모델 파라미터
// 총 305곡 | R²=0.9688 | MAE=2.65콤보
// ※ enstars_regression_v3.py 로 자동 생성 — 직접 수정 비권장

const SONGS = [
  {
    "type": "Flash",
    "unit": "fine",
    "units": [
      "fine"
    ],
    "title": "오와라나이",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 158,
    "duration": "2:39",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 86.0
  },
  {
    "type": "Brilliant",
    "unit": "fine",
    "units": [
      "fine"
    ],
    "title": "Holy Angel's Carol",
    "titleKo": "Holy Angel's Carol",
    "titleKoReading": "홀리 엔젤스 캐롤",
    "totalNotes": 138,
    "duration": "2:29",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 75.0
  },
  {
    "type": "Glitter",
    "unit": "fine",
    "units": [
      "fine"
    ],
    "title": "날개짓 포르티시모",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 120,
    "duration": "2:30",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 66.0
  },
  {
    "type": "Sparkle",
    "unit": "fine",
    "units": [
      "fine"
    ],
    "title": "Neo Sanctuary",
    "titleKo": "Neo Sanctuary",
    "titleKoReading": "네오 생츄어리",
    "totalNotes": 161,
    "duration": "2:31",
    "etStart": 116,
    "etEnd": 131,
    "measured": 88,
    "category": "starmaker",
    "video": "https://youtu.be/w43HDVmTbgY?si=uVSQaOXt3hyTAUgF",
    "predicted": 88.0
  },
  {
    "type": "Flash",
    "unit": "fine / Trickstar",
    "units": [
      "fine",
      "Trickstar"
    ],
    "title": "크로싱 하트",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 100,
    "duration": "2:41",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 55.0
  },
  {
    "type": "Flash",
    "unit": "fine",
    "units": [
      "fine"
    ],
    "title": "애니곡",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 140,
    "duration": "2:31",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 76.0
  },
  {
    "type": "Sparkle",
    "unit": "fine",
    "units": [
      "fine"
    ],
    "title": "Miracle Dream Traveler",
    "titleKo": "Miracle Dream Traveler",
    "titleKoReading": "미라클 드림 트레블러",
    "totalNotes": 125,
    "duration": "2:05",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 68.0
  },
  {
    "type": "Brilliant",
    "unit": "fine",
    "units": [
      "fine"
    ],
    "title": "Angelic Grace",
    "titleKo": "Angelic Grace",
    "titleKoReading": "엔젤릭 그레이스",
    "totalNotes": 135,
    "duration": "2:55",
    "etStart": 66,
    "etEnd": 108,
    "measured": 76,
    "category": "starmaker",
    "video": "https://youtu.be/8BBx4GHIDG0?si=B_RB4pLW2elj2mMA",
    "predicted": 75.0
  },
  {
    "type": "Brilliant",
    "unit": "fine",
    "units": [
      "fine"
    ],
    "title": "Never-ending Stage!!!!",
    "titleKo": "Never-ending Stage!!!!",
    "titleKoReading": "네버-엔딩 스테이지",
    "totalNotes": 175,
    "duration": "2:36",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 95.0
  },
  {
    "type": "Sparkle",
    "unit": "fine",
    "units": [
      "fine"
    ],
    "title": "RAINBOW CIRCUS",
    "titleKo": "RAINBOW CIRCUS",
    "titleKoReading": "레인보우 서커스",
    "totalNotes": 138,
    "duration": "2:21",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 75.0
  },
  {
    "type": "Flash",
    "unit": "fine / Knights",
    "units": [
      "fine",
      "Knights"
    ],
    "title": "스타라이트 퍼레이드",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 109,
    "duration": "2:32",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 60.0
  },
  {
    "type": "Sparkle",
    "unit": "fine",
    "units": [
      "fine"
    ],
    "title": "The Tempest Night",
    "titleKo": "The Tempest Night",
    "titleKoReading": "템페스트 나이트",
    "totalNotes": 124,
    "duration": "2:32",
    "etStart": 43,
    "etEnd": 66,
    "measured": 67,
    "category": "starmaker",
    "video": "https://youtu.be/_FWZ9hdzcAc?si=3pAErtZR7uV_DLUU",
    "predicted": 67.0
  },
  {
    "type": "Glitter",
    "unit": "fine",
    "units": [
      "fine"
    ],
    "title": "프리마베라",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 175,
    "duration": "2:26",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 95.0
  },
  {
    "type": "Brilliant",
    "unit": "fine",
    "units": [
      "fine"
    ],
    "title": "Feathers of Ark",
    "titleKo": "Feathers of Ark",
    "titleKoReading": "페더즈 오브 아크",
    "totalNotes": 171,
    "duration": "2:51",
    "etStart": 99,
    "etEnd": 135,
    "measured": 100,
    "category": "starmaker",
    "video": "https://youtu.be/6LsFhiMT7L8?si=bIVV2vwi9g5MmTm1",
    "predicted": 94.0
  },
  {
    "type": "Glitter",
    "unit": "fine",
    "units": [
      "fine"
    ],
    "title": "Ghostic Treat House",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 127,
    "duration": "2:47",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 69.0
  },
  {
    "type": "Flash",
    "unit": "fine",
    "units": [
      "fine"
    ],
    "title": "Dreaming Ocean",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 150,
    "duration": "2:45",
    "etStart": 119,
    "etEnd": 142,
    "measured": 79,
    "category": "starmaker",
    "video": "https://youtu.be/lBlFMcZZDYo?si=Yfb4-LnhlMOMrsap",
    "predicted": 83.0
  },
  {
    "type": "Glitter",
    "unit": "fine",
    "units": [
      "fine"
    ],
    "title": "Fairy Tale Library",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 144,
    "duration": "2:47",
    "etStart": 79,
    "etEnd": 115,
    "measured": 79,
    "category": "starmaker",
    "video": "https://youtu.be/i_9X3lDctpQ?si=cvcudSJnNbmK4U0E",
    "predicted": 80.0
  },
  {
    "type": "Brilliant",
    "unit": "Trickstar",
    "units": [
      "Trickstar"
    ],
    "title": "ONLY YOUR STARS!",
    "titleKo": "ONLY YOUR STARS!",
    "titleKoReading": "온리 유어 스타즈",
    "totalNotes": 97,
    "duration": "2:27",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 53.0
  },
  {
    "type": "Sparkle",
    "unit": "Trickstar",
    "units": [
      "Trickstar"
    ],
    "title": "Rebellion Star",
    "titleKo": "Rebellion Star",
    "titleKoReading": "리벨리온 스타",
    "totalNotes": 111,
    "duration": "2:38",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 61.0
  },
  {
    "type": "Glitter",
    "unit": "Trickstar",
    "units": [
      "Trickstar"
    ],
    "title": "인피니트 스타",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 118,
    "duration": "2:19",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 64.0
  },
  {
    "type": "All",
    "unit": "Trickstar / Eden",
    "units": [
      "Trickstar",
      "Eden"
    ],
    "title": "キセキ",
    "titleKo": "키세키",
    "titleKoReading": null,
    "totalNotes": 165,
    "duration": "2:35",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 90.0
  },
  {
    "type": "Brilliant",
    "unit": "Trickstar",
    "units": [
      "Trickstar"
    ],
    "title": "HEART→BEATER!!!!",
    "titleKo": "HEART→BEATER!!!!",
    "titleKoReading": "하트 비터",
    "totalNotes": 125,
    "duration": "2:27",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 68.0
  },
  {
    "type": "Sparkle",
    "unit": "Trickstar",
    "units": [
      "Trickstar"
    ],
    "title": "BREAKTHROUGH!",
    "titleKo": "BREAKTHROUGH!",
    "titleKoReading": "브레이크스루",
    "totalNotes": 215,
    "duration": "2:32",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 116.0
  },
  {
    "type": "Flash",
    "unit": "Trickstar",
    "units": [
      "Trickstar"
    ],
    "title": "1st 싱어롱",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 157,
    "duration": "2:19",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 85.0
  },
  {
    "type": "Sparkle",
    "unit": "Trickstar",
    "units": [
      "Trickstar"
    ],
    "title": "CHERRY HAPPY STREAM ",
    "titleKo": "CHERRY HAPPY STREAM ",
    "titleKoReading": "체리 해피 스트림",
    "totalNotes": 147,
    "duration": "2:07",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 80.0
  },
  {
    "type": "Glitter",
    "unit": "Trickstar",
    "units": [
      "Trickstar"
    ],
    "title": "웰컴 투 트릭스타 나이트",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 107,
    "duration": "2:18",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 59.0
  },
  {
    "type": "Glitter",
    "unit": "Trickstar",
    "units": [
      "Trickstar"
    ],
    "title": "행복의 노래",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 164,
    "duration": "2:43",
    "etStart": 113,
    "etEnd": 158,
    "measured": 93,
    "category": "starmaker",
    "video": "https://youtu.be/kdWHcVWhbOE?si=qpTCHv7CueVuHAxr",
    "predicted": 91.0
  },
  {
    "type": "Flash",
    "unit": "Trickstar",
    "units": [
      "Trickstar"
    ],
    "title": "Unstoppable Love!",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 164,
    "duration": "2:42",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 89.0
  },
  {
    "type": "Brilliant",
    "unit": "Trickstar / Eden",
    "units": [
      "Trickstar",
      "Eden"
    ],
    "title": "(RE)PLAY",
    "titleKo": "(RE)PLAY",
    "titleKoReading": "리플레이",
    "totalNotes": 185,
    "duration": "2:30",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 100.0
  },
  {
    "type": "Flash",
    "unit": "Trickstar",
    "units": [
      "Trickstar"
    ],
    "title": "BIGBANG REFLECTION!!",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 109,
    "duration": "2:30",
    "etStart": 66,
    "etEnd": 88,
    "measured": 58,
    "category": "starmaker",
    "video": "https://youtu.be/5H7bJ5ANRXU?si=CTWoFM6vJI78uz4D",
    "predicted": 61.0
  },
  {
    "type": "Glitter",
    "unit": "Trickstar",
    "units": [
      "Trickstar"
    ],
    "title": "Finder Girl (파인더 걸)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 136,
    "duration": "2:40",
    "etStart": 42,
    "etEnd": 53,
    "measured": 68,
    "category": "starmaker",
    "video": "https://youtu.be/AJkCL1amVks?si=chIYI3I3qK9YWfk0",
    "predicted": 72.0
  },
  {
    "type": "Brilliant",
    "unit": "Trickstar",
    "units": [
      "Trickstar"
    ],
    "title": "데이드림 리얼리티",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 174,
    "duration": "2:32",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 94.0
  },
  {
    "type": "Sparkle",
    "unit": "Trickstar",
    "units": [
      "Trickstar"
    ],
    "title": "Romantic Xday!",
    "titleKo": "Romantic Xday!",
    "titleKoReading": "로맨틱 엑스데이",
    "totalNotes": 158,
    "duration": "2:46",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 86.0
  },
  {
    "type": "Glitter",
    "unit": "Trickstar",
    "units": [
      "Trickstar"
    ],
    "title": "와챠가나두",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 161,
    "duration": "2:48",
    "etStart": 95,
    "etEnd": 123,
    "measured": 84,
    "category": "starmaker",
    "video": "https://youtu.be/sTQfBtuHjHQ?si=vuFBXaVP20egtg4h",
    "predicted": 88.0
  },
  {
    "type": "Sparkle",
    "unit": "Trickstar",
    "units": [
      "Trickstar"
    ],
    "title": "CELEBRATE!!",
    "titleKo": "CELEBRATE!!",
    "titleKoReading": "셀러브레이트",
    "totalNotes": 161,
    "duration": "2:45",
    "etStart": 126,
    "etEnd": 156,
    "measured": 91,
    "category": "starmaker",
    "video": "https://youtu.be/RHqdIxWxgNA?si=AEi41bRsrNOyshAj",
    "predicted": 90.0
  },
  {
    "type": "Flash",
    "unit": "유성대",
    "units": [
      "유성대"
    ],
    "title": "메테오 레인저",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 170,
    "duration": "2:35",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 92.0
  },
  {
    "type": "Sparkle",
    "unit": "유성대",
    "units": [
      "유성대"
    ],
    "title": "アンリミテッド☆パワー!!!!!",
    "titleKo": "언리미티드☆파워!!!!!",
    "titleKoReading": null,
    "totalNotes": 129,
    "duration": "2:16",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 70.0
  },
  {
    "type": "Glitter",
    "unit": "유성대",
    "units": [
      "유성대"
    ],
    "title": "슈퍼노바 레볼루스타",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 136,
    "duration": "2:24",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 74.0
  },
  {
    "type": "Sparkle",
    "unit": "유성대",
    "units": [
      "유성대"
    ],
    "title": "流星花火",
    "titleKo": "유성불꽃",
    "titleKoReading": null,
    "totalNotes": 129,
    "duration": "2:10",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 70.0
  },
  {
    "type": "Flash",
    "unit": "유성대",
    "units": [
      "유성대"
    ],
    "title": "메테오 스크럼블",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 184,
    "duration": "2:37",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 100.0
  },
  {
    "type": "Brilliant",
    "unit": "유성대 / Knights",
    "units": [
      "유성대",
      "Knights"
    ],
    "title": "青春Emergency",
    "titleKo": "청춘 Emergency",
    "titleKoReading": "청춘 이머전시",
    "totalNotes": 233,
    "duration": "2:39",
    "etStart": 112,
    "etEnd": 135,
    "measured": 133,
    "category": "starmaker",
    "video": "https://youtu.be/Y1qHQvEATuk?si=rRwJSbZ_y9NlJeG5",
    "predicted": 125.0
  },
  {
    "type": "Glitter",
    "unit": "유성대",
    "units": [
      "유성대"
    ],
    "title": "GROWING STARRY DAYS",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 105,
    "duration": "2:12",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 58.0
  },
  {
    "type": "Brilliant",
    "unit": "유성대",
    "units": [
      "유성대"
    ],
    "title": "NEW DAYBREAK",
    "titleKo": "NEW DAYBREAK",
    "titleKoReading": "뉴 데이브레이크",
    "totalNotes": 178,
    "duration": "3:01",
    "etStart": 106,
    "etEnd": 130,
    "measured": 101,
    "category": "starmaker",
    "video": "https://youtu.be/LnbOJVHwMY4?si=TNJFVTd2sPgKlYpu",
    "predicted": 97.0
  },
  {
    "type": "Sparkle",
    "unit": "유성대",
    "units": [
      "유성대"
    ],
    "title": "Heart Heat Beat",
    "titleKo": "Heart Heat Beat",
    "titleKoReading": "하트 히트 비트",
    "totalNotes": 154,
    "duration": "2:47",
    "etStart": 47,
    "etEnd": 75,
    "measured": 85,
    "category": "starmaker",
    "video": "https://youtu.be/BilzVweD09E?si=IFXLT82pvK3VtFfe",
    "predicted": 83.0
  },
  {
    "type": "Brilliant",
    "unit": "유성대",
    "units": [
      "유성대"
    ],
    "title": "夢ノ咲流星隊歌",
    "titleKo": "유메노사키 유성대가",
    "titleKoReading": null,
    "totalNotes": 164,
    "duration": "2:32",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 89.0
  },
  {
    "type": "Glitter",
    "unit": "유성대 / Ra*bits",
    "units": [
      "유성대",
      "Ra*bits"
    ],
    "title": "햄타로",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 86,
    "duration": "2:20",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 47.0
  },
  {
    "type": "Brilliant",
    "unit": "유성대",
    "units": [
      "유성대"
    ],
    "title": "彗星HALATION",
    "titleKo": "혜성 HALATION",
    "titleKoReading": "혜성 할레이션",
    "totalNotes": 155,
    "duration": "2:27",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 84.0
  },
  {
    "type": "Sparkle",
    "unit": "유성대",
    "units": [
      "유성대"
    ],
    "title": "熱血☆流星忍法帖",
    "titleKo": "열혈☆유성인법첩",
    "titleKoReading": null,
    "totalNotes": 202,
    "duration": "2:36",
    "etStart": 100,
    "etEnd": 118,
    "measured": 115,
    "category": "starmaker",
    "video": "https://youtu.be/PQPsI-R5hqQ?si=AFXBCy2MtwIzWB4B",
    "predicted": 109.0
  },
  {
    "type": "Flash",
    "unit": "유성대",
    "units": [
      "유성대"
    ],
    "title": "Colors Arise",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 205,
    "duration": "2:39",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 111.0
  },
  {
    "type": "Brilliant",
    "unit": "유성대",
    "units": [
      "유성대"
    ],
    "title": "RELAX PARADISE",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 199,
    "duration": "2:50",
    "etStart": 100,
    "etEnd": 160,
    "measured": 109,
    "category": "starmaker",
    "video": "https://youtu.be/XTpbKX-HEN0?si=b9msXZh4VC0_C7ss",
    "predicted": 109.0
  },
  {
    "type": "Glitter",
    "unit": "유성대",
    "units": [
      "유성대"
    ],
    "title": "보쿠라노 스텔라",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 150,
    "duration": "2:44",
    "etStart": 25,
    "etEnd": 32,
    "measured": 78,
    "category": "starmaker",
    "video": "https://youtu.be/C6glaT_nRp4?si=a-270axm7x7O3utV",
    "predicted": 78.0
  },
  {
    "type": "Brilliant",
    "unit": "유성대",
    "units": [
      "유성대"
    ],
    "title": "WILDLAND SURVIVOR",
    "titleKo": "WILDLAND SURVIVOR",
    "titleKoReading": "와일드랜드 서바이버",
    "totalNotes": 100,
    "duration": "2:29",
    "etStart": 21,
    "etEnd": 39,
    "measured": 50,
    "category": "starmaker",
    "video": "https://youtu.be/uFJyBU4DbOI?si=2CSyGuTsGVT8FJeH",
    "predicted": 53.0
  },
  {
    "type": "Glitter",
    "unit": "유성대",
    "units": [
      "유성대"
    ],
    "title": "OVERFLOW LIGHT UP!!!!!",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 185,
    "duration": "2:36",
    "etStart": 59,
    "etEnd": 79,
    "measured": 103,
    "category": "starmaker",
    "video": "https://youtu.be/kqELo6ZQHx8",
    "predicted": 99.0
  },
  {
    "type": "Sparkle",
    "unit": "ALKALOID",
    "units": [
      "ALKALOID"
    ],
    "title": "Kiss of Life",
    "titleKo": "Kiss of Life",
    "titleKoReading": "키스 오브 라이프",
    "totalNotes": 142,
    "duration": "2:12",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 77.0
  },
  {
    "type": "Brilliant",
    "unit": "ALKALOID",
    "units": [
      "ALKALOID"
    ],
    "title": "翼モラトリアム",
    "titleKo": "날개 모라토리엄",
    "titleKoReading": null,
    "totalNotes": 110,
    "duration": "2:18",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 60.0
  },
  {
    "type": "Glitter",
    "unit": "ALKALOID",
    "units": [
      "ALKALOID"
    ],
    "title": "Distorted Heart",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 202,
    "duration": "2:28",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 109.0
  },
  {
    "type": "Brilliant",
    "unit": "ALKALOID",
    "units": [
      "ALKALOID"
    ],
    "title": "You’re Speculation",
    "titleKo": "You’re Speculation",
    "titleKoReading": "유어 스페큘레이션",
    "totalNotes": 188,
    "duration": "2:18",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 102.0
  },
  {
    "type": "Glitter",
    "unit": "ALKALOID / Valkyrie",
    "units": [
      "ALKALOID",
      "Valkyrie"
    ],
    "title": "빨치산",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 171,
    "duration": "2:42",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 93.0
  },
  {
    "type": "Flash",
    "unit": "ALKALOID",
    "units": [
      "ALKALOID"
    ],
    "title": "휴머노이드",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 162,
    "duration": "2:35",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 88.0
  },
  {
    "type": "Glitter",
    "unit": "ALKALOID",
    "units": [
      "ALKALOID"
    ],
    "title": "Black Out See Saw 워커커",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 212,
    "duration": "2:34",
    "etStart": 57,
    "etEnd": 92,
    "measured": 111,
    "category": "starmaker",
    "video": "https://youtu.be/a2cGfyx96Jg?si=uolJkqE1f82g48MH",
    "predicted": 113.0
  },
  {
    "type": "Brilliant",
    "unit": "ALKALOID",
    "units": [
      "ALKALOID"
    ],
    "title": "Across the universe",
    "titleKo": "Across the universe",
    "titleKoReading": "어크로스 더 유니버스",
    "totalNotes": 122,
    "duration": "2:52",
    "etStart": 1,
    "etEnd": 7,
    "measured": 65,
    "category": "starmaker",
    "video": "https://youtu.be/0jLzTGFVl4Y?si=b-QDAVP7v4J2eB1J",
    "predicted": 62.0
  },
  {
    "type": "Glitter",
    "unit": "ALKALOID / DF",
    "units": [
      "ALKALOID",
      "DF"
    ],
    "title": "밤달",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 138,
    "duration": "2:32",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 75.0
  },
  {
    "type": "Flash",
    "unit": "ALKALOID",
    "units": [
      "ALKALOID"
    ],
    "title": "Living on the edge",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 188,
    "duration": "2:11",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 102.0
  },
  {
    "type": "Sparkle",
    "unit": "ALKALOID",
    "units": [
      "ALKALOID"
    ],
    "title": "Believe 4 leaves",
    "titleKo": "Believe 4 leaves",
    "titleKoReading": "빌리브 포 리브즈",
    "totalNotes": 145,
    "duration": "2:45",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 79.0
  },
  {
    "type": "Flash",
    "unit": "ALKALOID",
    "units": [
      "ALKALOID"
    ],
    "title": "VERMILION",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 175,
    "duration": "2:54",
    "etStart": 127,
    "etEnd": 168,
    "measured": 96,
    "category": "starmaker",
    "video": "https://youtu.be/SHlgs0qGqUs?si=JYdJVbStRgwwPG8f",
    "predicted": 97.0
  },
  {
    "type": "Sparkle",
    "unit": "ALKALOID",
    "units": [
      "ALKALOID"
    ],
    "title": "UNDYING HOLY LOVE",
    "titleKo": "UNDYING HOLY LOVE",
    "titleKoReading": "언다잉 홀리 러브",
    "totalNotes": 156,
    "duration": "2:48",
    "etStart": 114,
    "etEnd": 132,
    "measured": 91,
    "category": "starmaker",
    "video": "https://youtu.be/3ZaWkpmu8co?si=h0LhzG8_q0GhKT6W",
    "predicted": 86.0
  },
  {
    "type": "Flash",
    "unit": "ALKALOID",
    "units": [
      "ALKALOID"
    ],
    "title": "SAKE OF LOVE",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 192,
    "duration": "3:12",
    "etStart": 28,
    "etEnd": 46,
    "measured": 99,
    "category": "starmaker",
    "video": "https://youtu.be/xZ8zgJmMjEY?si=3psYxq3c6zn8YLQD",
    "predicted": 101.0
  },
  {
    "type": "Sparkle",
    "unit": "ALKALOID",
    "units": [
      "ALKALOID"
    ],
    "title": "SunnyTrip Summer",
    "titleKo": "SunnyTrip Summer",
    "titleKoReading": "서니트립 서머",
    "totalNotes": 127,
    "duration": "3:05",
    "etStart": 87,
    "etEnd": 97,
    "measured": 71,
    "category": "starmaker",
    "video": "https://youtu.be/Sfd-1SMuVsM?si=u7TQr70fSsLhWtjF",
    "predicted": 70.0
  },
  {
    "type": "Sparkle",
    "unit": "ALKALOID",
    "units": [
      "ALKALOID"
    ],
    "title": "フラジール",
    "titleKo": "프래질",
    "titleKoReading": null,
    "totalNotes": 127,
    "duration": "2:14",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "starmaker",
    "video": null,
    "predicted": 69.0
  },
  {
    "type": "Flash",
    "unit": "fine",
    "units": [
      "fine"
    ],
    "title": "Musica Vita!",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 154,
    "duration": "2:37",
    "etStart": 102,
    "etEnd": 131,
    "measured": 83,
    "category": "starmaker",
    "video": "https://youtu.be/50kz0jhNNZY",
    "predicted": 85.0
  },
  {
    "type": "Flash",
    "unit": "ALKALOID",
    "units": [
      "ALKALOID"
    ],
    "title": "코토노하 칸타빌레",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 222,
    "duration": "2:25",
    "etStart": 29,
    "etEnd": 59,
    "measured": 124,
    "category": "starmaker",
    "video": "https://youtu.be/x54i9zUFLAA?si=rUnzY6MRD5uxtPH0",
    "predicted": 117.0
  },
  {
    "type": "Glitter",
    "unit": "Eden",
    "units": [
      "Eden"
    ],
    "title": "THE GENESIS",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 144,
    "duration": "2:34",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 78.0
  },
  {
    "type": "Sparkle",
    "unit": "Eden",
    "units": [
      "Eden"
    ],
    "title": "Dance in the Apocalypse",
    "titleKo": "Dance in the Apocalypse",
    "titleKoReading": "댄스 인 아포칼립스",
    "totalNotes": 183,
    "duration": "2:18",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 99.0
  },
  {
    "type": "Sparkle",
    "unit": "Eden / Switch",
    "units": [
      "Eden",
      "Switch"
    ],
    "title": "Majestic Magic",
    "titleKo": "Majestic Magic",
    "titleKoReading": "마제스틱 매직",
    "totalNotes": 173,
    "duration": "2:41",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 94.0
  },
  {
    "type": "Glitter",
    "unit": "Eden",
    "units": [
      "Eden"
    ],
    "title": "Awakening Myth",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 202,
    "duration": "2:27",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 109.0
  },
  {
    "type": "Glitter",
    "unit": "Eden",
    "units": [
      "Eden"
    ],
    "title": "KEEP OUT",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 236,
    "duration": "2:56",
    "etStart": 51,
    "etEnd": 90,
    "measured": 124,
    "category": "cosmic",
    "video": "https://youtu.be/pfVXpX1aV4I?si=G8NZNZ9Z5Qd48ok1",
    "predicted": 126.0
  },
  {
    "type": "Sparkle",
    "unit": "Eden",
    "units": [
      "Eden"
    ],
    "title": "Psyche's Butterfly",
    "titleKo": "Psyche's Butterfly",
    "titleKoReading": "프시케의 나비",
    "totalNotes": 174,
    "duration": "2:51",
    "etStart": 103,
    "etEnd": 132,
    "measured": 96,
    "category": "cosmic",
    "video": "https://youtu.be/4ifRZCs4jsA?si=Uz_Fps3GG7G0PLEl",
    "predicted": 95.0
  },
  {
    "type": "Brilliant",
    "unit": "Eden",
    "units": [
      "Eden"
    ],
    "title": "楽園追放 -Faith Conquest-",
    "titleKo": "낙원추방 -Faith Conquest-",
    "titleKoReading": "콘퀘스트",
    "totalNotes": 139,
    "duration": "2:23",
    "etStart": 62,
    "etEnd": 106,
    "measured": 76,
    "category": "cosmic",
    "video": "https://youtu.be/NgUj9Obrllk?si=QyZJ4NxiZMwAT-8g",
    "predicted": 77.0
  },
  {
    "type": "Flash",
    "unit": "Eden",
    "units": [
      "Eden"
    ],
    "title": "EXCEED",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 219,
    "duration": "2:36",
    "etStart": 57,
    "etEnd": 83,
    "measured": 114,
    "category": "cosmic",
    "video": "https://youtu.be/xQGLhtIgjYc?si=Oo-kP3k4u-kbGYu6",
    "predicted": 117.0
  },
  {
    "type": "Flash",
    "unit": "Eden",
    "units": [
      "Eden"
    ],
    "title": "Deep Eclipse",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 151,
    "duration": "2:46",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 82.0
  },
  {
    "type": "Brilliant",
    "unit": "Eden",
    "units": [
      "Eden"
    ],
    "title": "Absolute Perfection",
    "titleKo": "Absolute Perfection",
    "titleKoReading": "앱솔루트 퍼펙션",
    "totalNotes": 156,
    "duration": "2:49",
    "etStart": 102,
    "etEnd": 140,
    "measured": 87,
    "category": "cosmic",
    "video": "https://youtu.be/F9-sXx1Q7YU?si=1mwAtQ6cleLxRjdg",
    "predicted": 87.0
  },
  {
    "type": "Glitter",
    "unit": "Eden",
    "units": [
      "Eden"
    ],
    "title": "원환의 리플랙션(円環のRefraction)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 163,
    "duration": "2:40",
    "etStart": 50,
    "etEnd": 93,
    "measured": 87,
    "category": "cosmic",
    "video": "https://youtu.be/q8VFnfYCVV4?si=xWot2jbWbANgp010",
    "predicted": 88.0
  },
  {
    "type": "Flash",
    "unit": "Eden",
    "units": [
      "Eden"
    ],
    "title": "할로윈 (大いなる愛の前に全ては巡り来る)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 192,
    "duration": "2:43",
    "etStart": 130,
    "etEnd": 150,
    "measured": 108,
    "category": "cosmic",
    "video": "https://youtu.be/xxHW9ymTQm8?si=abDChT9U7Y-LarIN",
    "predicted": 105.0
  },
  {
    "type": "Flash",
    "unit": "Eve",
    "units": [
      "Eve"
    ],
    "title": "Sunlit Smile!",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 133,
    "duration": "2:24",
    "etStart": 88,
    "etEnd": 118,
    "measured": 72,
    "category": "cosmic",
    "video": "https://youtu.be/-DwLLdPSAZM?si=3aiIr2M94EkyZy9D",
    "predicted": 74.0
  },
  {
    "type": "Brilliant",
    "unit": "Adam",
    "units": [
      "Adam"
    ],
    "title": "The Beast of the End",
    "titleKo": "The Beast of the End",
    "titleKoReading": "비스트 오브 디 엔드",
    "totalNotes": 161,
    "duration": "2:07",
    "etStart": 113,
    "etEnd": 157,
    "measured": 91,
    "category": "cosmic",
    "video": "https://youtu.be/o4WK5110vY4?si=N3thKNrAzMye_HLm",
    "predicted": 90.0
  },
  {
    "type": "Sparkle",
    "unit": "Eve",
    "units": [
      "Eve"
    ],
    "title": "Trap For You",
    "titleKo": "Trap For You",
    "titleKoReading": "트랩 포 유",
    "totalNotes": 192,
    "duration": "2:30",
    "etStart": 74,
    "etEnd": 119,
    "measured": 106,
    "category": "cosmic",
    "video": "https://youtu.be/5gd7Qh1DOwQ?si=2_p63RqU-nnNRS0j",
    "predicted": 104.0
  },
  {
    "type": "Glitter",
    "unit": "Adam",
    "units": [
      "Adam"
    ],
    "title": "Ruler's Truth",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 210,
    "duration": "2:21",
    "etStart": 132,
    "etEnd": 167,
    "measured": 112,
    "category": "cosmic",
    "video": "https://youtu.be/WxT9n_aB8B8?si=ov3SlhyFUThDI0AJ",
    "predicted": 115.0
  },
  {
    "type": "Sparkle",
    "unit": "Adam",
    "units": [
      "Adam"
    ],
    "title": "Melting Rouge Soul",
    "titleKo": "Melting Rouge Soul",
    "titleKoReading": "멜팅 루즈 소울",
    "totalNotes": 180,
    "duration": "2:53",
    "etStart": 38,
    "etEnd": 57,
    "measured": 93,
    "category": "cosmic",
    "video": "https://youtu.be/--ND22eAXbs?si=N1-qxGNPwiul6Gw6",
    "predicted": 95.0
  },
  {
    "type": "Brilliant",
    "unit": "Eve",
    "units": [
      "Eve"
    ],
    "title": "Ruby Love",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 185,
    "duration": "2:47",
    "etStart": 120,
    "etEnd": 159,
    "measured": 105,
    "category": "cosmic",
    "video": "https://youtu.be/mxHmoh0IUww?si=WkwyfV92PE5cQnZQ",
    "predicted": 102.0
  },
  {
    "type": "Brilliant",
    "unit": "Valkyrie",
    "units": [
      "Valkyrie"
    ],
    "title": "魅惑劇",
    "titleKo": "매혹극",
    "titleKoReading": null,
    "totalNotes": 129,
    "duration": "2:07",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 70.0
  },
  {
    "type": "Glitter",
    "unit": "Valkyrie",
    "units": [
      "Valkyrie"
    ],
    "title": "Mémoire Antique",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 121,
    "duration": "2:15",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 66.0
  },
  {
    "type": "Flash",
    "unit": "Valkyrie",
    "units": [
      "Valkyrie"
    ],
    "title": "Last Lament",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 110,
    "duration": "2:16",
    "etStart": 57,
    "etEnd": 74,
    "measured": 61,
    "category": "cosmic",
    "video": "https://youtu.be/5FeV2Qqwl34?si=99Hzg47XFiktAoFI",
    "predicted": 60.0
  },
  {
    "type": "Flash",
    "unit": "Valkyrie",
    "units": [
      "Valkyrie"
    ],
    "title": "오늘 밤 달의 저택에서(今宵月の館にて)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 197,
    "duration": "2:23",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 107.0
  },
  {
    "type": "Sparkle",
    "unit": "Valkyrie",
    "units": [
      "Valkyrie"
    ],
    "title": "凱旋歌",
    "titleKo": "개선가",
    "titleKoReading": null,
    "totalNotes": 128,
    "duration": "2:31",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 70.0
  },
  {
    "type": "Brilliant",
    "unit": "Valkyrie",
    "units": [
      "Valkyrie"
    ],
    "title": "礼賛歌",
    "titleKo": "예찬가",
    "titleKoReading": null,
    "totalNotes": 122,
    "duration": "2:26",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 67.0
  },
  {
    "type": "Sparkle",
    "unit": "Valkyrie",
    "units": [
      "Valkyrie"
    ],
    "title": "祝福のLibrary",
    "titleKo": "축복의 Library",
    "titleKoReading": null,
    "totalNotes": 151,
    "duration": "2:51",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 82.0
  },
  {
    "type": "Brilliant",
    "unit": "Valkyrie",
    "units": [
      "Valkyrie"
    ],
    "title": "麗しのナイチンゲール",
    "titleKo": "아름다운 나이팅게일",
    "titleKoReading": null,
    "totalNotes": 119,
    "duration": "2:48",
    "etStart": 66,
    "etEnd": 98,
    "measured": 66,
    "category": "cosmic",
    "video": "https://youtu.be/qzX_1S2Jh2s?si=r02Jq0Fy7dJpNygU",
    "predicted": 66.0
  },
  {
    "type": "Sparkle",
    "unit": "Valkyrie / 홍월",
    "units": [
      "Valkyrie",
      "홍월"
    ],
    "title": "勇侠青春謳",
    "titleKo": "용협청춘구",
    "titleKoReading": null,
    "totalNotes": 155,
    "duration": "2:49",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 84.0
  },
  {
    "type": "Glitter",
    "unit": "Valkyrie",
    "units": [
      "Valkyrie"
    ],
    "title": "Eternal Weaving",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 125,
    "duration": "2:15",
    "etStart": 84,
    "etEnd": 109,
    "measured": 68,
    "category": "cosmic",
    "video": "https://youtu.be/bziktRLR0iU?si=bvRbJTSwyZpt939H",
    "predicted": 70.0
  },
  {
    "type": "Flash",
    "unit": "Valkyrie",
    "units": [
      "Valkyrie"
    ],
    "title": "Acanthe",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 159,
    "duration": "2:40",
    "etStart": 1,
    "etEnd": 29,
    "measured": 82,
    "category": "cosmic",
    "video": "https://youtu.be/YtC9FUS6HFM?si=ZRQptDv4Mlm2Znl7",
    "predicted": 83.0
  },
  {
    "type": "Glitter",
    "unit": "Valkyrie",
    "units": [
      "Valkyrie"
    ],
    "title": "미궁전자회랑(迷宮電子回廊)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 144,
    "duration": "2:53",
    "etStart": 40,
    "etEnd": 58,
    "measured": 76,
    "category": "cosmic",
    "video": "https://youtu.be/R4DsM3TFwxs?si=x12g6alKsftJT_fe",
    "predicted": 77.0
  },
  {
    "type": "Flash",
    "unit": "Valkyrie",
    "units": [
      "Valkyrie"
    ],
    "title": "Le temps des fleurs",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 140,
    "duration": "2:43",
    "etStart": 26,
    "etEnd": 49,
    "measured": 74,
    "category": "cosmic",
    "video": "https://youtu.be/AUsKGj2Fzw8?si=flJrASOwqXPMNrjd",
    "predicted": 74.0
  },
  {
    "type": "Flash",
    "unit": "Valkyrie",
    "units": [
      "Valkyrie"
    ],
    "title": "별의 명동이 울려퍼졌을 때 (星の鳴動響きし時に)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 162,
    "duration": "2:51",
    "etStart": 83,
    "etEnd": 111,
    "measured": 90,
    "category": "cosmic",
    "video": "https://youtu.be/DiaxIJbyf34?si=RB65ei8PFi0F41CQ",
    "predicted": 88.0
  },
  {
    "type": "Glitter",
    "unit": "Valkyrie",
    "units": [
      "Valkyrie"
    ],
    "title": "행복론 (幸福論)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 136,
    "duration": "2:50",
    "etStart": 40,
    "etEnd": 67,
    "measured": 74,
    "category": "cosmic",
    "video": "https://youtu.be/Adxx0A2kdjM?si=O5FvfplTEmNM5ozJ",
    "predicted": 73.0
  },
  {
    "type": "Flash",
    "unit": "Crazy:B",
    "units": [
      "Crazy:B"
    ],
    "title": "Crazy Roulette",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 151,
    "duration": "2:37",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 82.0
  },
  {
    "type": "Glitter",
    "unit": "Crazy:B",
    "units": [
      "Crazy:B"
    ],
    "title": "Be The Party Bee!",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 153,
    "duration": "2:16",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 83.0
  },
  {
    "type": "Sparkle",
    "unit": "Crazy:B",
    "units": [
      "Crazy:B"
    ],
    "title": "PARANOIA STREET",
    "titleKo": "PARANOIA STREET",
    "titleKoReading": "파라노이아 스트리트",
    "totalNotes": 165,
    "duration": "2:29",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 90.0
  },
  {
    "type": "Brilliant",
    "unit": "Crazy:B",
    "units": [
      "Crazy:B"
    ],
    "title": "RISKY VENUS",
    "titleKo": "RISKY VENUS",
    "titleKoReading": "리스키 비너스",
    "totalNotes": 129,
    "duration": "2:05",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 70.0
  },
  {
    "type": "Glitter",
    "unit": "Crazy:B",
    "units": [
      "Crazy:B"
    ],
    "title": "레몬 스퀴시",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 122,
    "duration": "2:22",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 67.0
  },
  {
    "type": "Flash",
    "unit": "Crazy:B",
    "units": [
      "Crazy:B"
    ],
    "title": "Noisy:Beep",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 161,
    "duration": "2:33",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 87.0
  },
  {
    "type": "Glitter",
    "unit": "Crazy:B",
    "units": [
      "Crazy:B"
    ],
    "title": "NA NA NA SUMMER NIGHT BeeAT",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 153,
    "duration": "2:43",
    "etStart": 46,
    "etEnd": 77,
    "measured": 83,
    "category": "cosmic",
    "video": "https://youtu.be/ueARJH0lOpo",
    "predicted": 82.0
  },
  {
    "type": "Brilliant",
    "unit": "Crazy:B",
    "units": [
      "Crazy:B"
    ],
    "title": "Foolish Alien",
    "titleKo": "Foolish Alien",
    "titleKoReading": "풀리쉬 에일리언",
    "totalNotes": 183,
    "duration": "2:31",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 99.0
  },
  {
    "type": "Brilliant",
    "unit": "Crazy:B / UNDEAD",
    "units": [
      "Crazy:B",
      "UNDEAD"
    ],
    "title": "U.S.A.",
    "titleKo": "U.S.A.",
    "titleKoReading": "아메리카",
    "totalNotes": 181,
    "duration": "2:40",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 98.0
  },
  {
    "type": "Brilliant",
    "unit": "Crazy:B",
    "units": [
      "Crazy:B"
    ],
    "title": "Honeycomb Summer",
    "titleKo": "Honeycomb Summer",
    "titleKoReading": "허니콤 서머",
    "totalNotes": 172,
    "duration": "2:34",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 93.0
  },
  {
    "type": "Sparkle",
    "unit": "Crazy:B",
    "units": [
      "Crazy:B"
    ],
    "title": "指先のアリアドネ",
    "titleKo": "손끝의 아리아드네",
    "titleKoReading": null,
    "totalNotes": 151,
    "duration": "2:42",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 82.0
  },
  {
    "type": "Flash",
    "unit": "Crazy:B",
    "units": [
      "Crazy:B"
    ],
    "title": "Helter-Spider",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 132,
    "duration": "2:31",
    "etStart": 45,
    "etEnd": 76,
    "measured": 73,
    "category": "cosmic",
    "video": "https://youtu.be/7Z90uJrZ6hE?si=pO4-opLZiJ-x4hMc",
    "predicted": 72.0
  },
  {
    "type": "Sparkle",
    "unit": "Crazy:B",
    "units": [
      "Crazy:B"
    ],
    "title": "Crazy Anthem",
    "titleKo": "Crazy Anthem",
    "titleKoReading": "크레이지 어텀",
    "totalNotes": 183,
    "duration": "2:46",
    "etStart": 57,
    "etEnd": 71,
    "measured": 90,
    "category": "cosmic",
    "video": "https://youtu.be/qkNuxf18RuI?si=5sTvCN81PP7Gac_C",
    "predicted": 97.0
  },
  {
    "type": "Flash",
    "unit": "Crazy:B",
    "units": [
      "Crazy:B"
    ],
    "title": "SAKE OF LOVE (사케 오브 러브)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 192,
    "duration": "3:12",
    "etStart": 28,
    "etEnd": 46,
    "measured": 99,
    "category": "cosmic",
    "video": "https://youtu.be/xZ8zgJmMjEY?si=o2PAmywwvB5TIhSq",
    "predicted": 101.0
  },
  {
    "type": "Flash",
    "unit": "Crazy:B",
    "units": [
      "Crazy:B"
    ],
    "title": "UTAKATA DANCE FLOOR",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 145,
    "duration": "2:37",
    "etStart": 90,
    "etEnd": 140,
    "measured": 79,
    "category": "cosmic",
    "video": "https://youtu.be/KKOmwmcLAJc?si=rCPw5XBjTdNEdANm",
    "predicted": 81.0
  },
  {
    "type": "Glitter",
    "unit": "Crazy:B",
    "units": [
      "Crazy:B"
    ],
    "title": "KING",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 217,
    "duration": "2:24",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 117.0
  },
  {
    "type": "Brilliant",
    "unit": "Crazy:B",
    "units": [
      "Crazy:B"
    ],
    "title": "니키 감사제 (ハニートラップ・マリアージュ)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 194,
    "duration": "2:48",
    "etStart": 117,
    "etEnd": 147,
    "measured": 104,
    "category": "cosmic",
    "video": "https://youtu.be/iay7pagyxjU?si=VMR_M1XZY8mszB2R",
    "predicted": 106.0
  },
  {
    "type": "Sparkle",
    "unit": "2wink",
    "units": [
      "2wink"
    ],
    "title": "歓迎☆トゥ・ウィンク雑技団",
    "titleKo": "환영☆투・윙크 기예단",
    "titleKoReading": null,
    "totalNotes": 128,
    "duration": "2:16",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 70.0
  },
  {
    "type": "Flash",
    "unit": "2wink",
    "units": [
      "2wink"
    ],
    "title": "TRICK with TREAT!!(with UNDEAD)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 184,
    "duration": "2:37",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 100.0
  },
  {
    "type": "Glitter",
    "unit": "2wink",
    "units": [
      "2wink"
    ],
    "title": "Play “Tag”",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 125,
    "duration": "2:23",
    "etStart": 92,
    "etEnd": 110,
    "measured": 69,
    "category": "cosmic",
    "video": "https://youtu.be/VHeL3Sqkato?si=-f06LAiDWw4_qlVZ",
    "predicted": 70.0
  },
  {
    "type": "Brilliant",
    "unit": "2wink",
    "units": [
      "2wink"
    ],
    "title": "ハートプリズム・シンメトリー",
    "titleKo": "하트 프리즘・시메트리",
    "titleKoReading": null,
    "totalNotes": 202,
    "duration": "2:37",
    "etStart": 140,
    "etEnd": 172,
    "measured": 111,
    "category": "cosmic",
    "video": "https://youtu.be/8igMnhpcuh0?si=aSSG9db_pQlY21zp",
    "predicted": 111.0
  },
  {
    "type": "Brilliant",
    "unit": "2wink",
    "units": [
      "2wink"
    ],
    "title": "Mischievous Party Time!!",
    "titleKo": "Mischievous Party Time!!",
    "titleKoReading": "미스치버스 파티 타임",
    "totalNotes": 195,
    "duration": "2:31",
    "etStart": 122,
    "etEnd": 145,
    "measured": 105,
    "category": "cosmic",
    "video": "https://youtu.be/n2Rk_IoB5zM?si=R1HA1Qx8yBzlADKV",
    "predicted": 106.0
  },
  {
    "type": "Glitter",
    "unit": "2wink",
    "units": [
      "2wink"
    ],
    "title": "레몬 스쿼시 치어스",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 122,
    "duration": "2:22",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 67.0
  },
  {
    "type": "Glitter",
    "unit": "2wink",
    "units": [
      "2wink"
    ],
    "title": "슈가 스파이스",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 178,
    "duration": "2:31",
    "etStart": 116,
    "etEnd": 125,
    "measured": 97,
    "category": "cosmic",
    "video": "https://youtu.be/Cg2Fk383B4E?si=9b6iAO2LnkMwtRMs",
    "predicted": 96.0
  },
  {
    "type": "Brilliant",
    "unit": "2wink",
    "units": [
      "2wink"
    ],
    "title": "トゥウィンクル空中戦",
    "titleKo": "트윙클 공중전",
    "titleKoReading": null,
    "totalNotes": 239,
    "duration": "2:27",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 129.0
  },
  {
    "type": "Glitter",
    "unit": "2wink",
    "units": [
      "2wink"
    ],
    "title": "POLYPHONIC WORLD",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 129,
    "duration": "2:25",
    "etStart": 66,
    "etEnd": 115,
    "measured": 74,
    "category": "cosmic",
    "video": "https://youtu.be/JXRfwxSW2uM?si=GKeAlZB7lIBj5jc5",
    "predicted": 73.0
  },
  {
    "type": "Flash",
    "unit": "2wink",
    "units": [
      "2wink"
    ],
    "title": "2winkle Star Beat☆",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 184,
    "duration": "2:29",
    "etStart": 42,
    "etEnd": 71,
    "measured": 102,
    "category": "cosmic",
    "video": "https://youtu.be/PuRUA2vcJ1A?si=UWOJjOYtOgK_akES",
    "predicted": 98.0
  },
  {
    "type": "Flash",
    "unit": "2wink / Switch",
    "units": [
      "2wink",
      "Switch"
    ],
    "title": "텔 유어 월드",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 116,
    "duration": "2:44",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 63.0
  },
  {
    "type": "Flash",
    "unit": "2wink",
    "units": [
      "2wink"
    ],
    "title": "Fighting Dreamer",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 141,
    "duration": "2:30",
    "etStart": 50,
    "etEnd": 68,
    "measured": 76,
    "category": "cosmic",
    "video": "https://youtu.be/lxzSzDkWGzc?si=6GaDYUesvrfU3tO3",
    "predicted": 75.0
  },
  {
    "type": "Sparkle",
    "unit": "2wink",
    "units": [
      "2wink"
    ],
    "title": "Swee2wink Love Letter",
    "titleKo": "Swee2wink Love Letter",
    "titleKoReading": "스위투윙크 러브레터",
    "totalNotes": 156,
    "duration": "2:35",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 85.0
  },
  {
    "type": "Sparkle",
    "unit": "2wink",
    "units": [
      "2wink"
    ],
    "title": "Turbulent Storm",
    "titleKo": "Turbulent Storm",
    "titleKoReading": "터뷸런트 스톰",
    "totalNotes": 147,
    "duration": "2:36",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "cosmic",
    "video": null,
    "predicted": 80.0
  },
  {
    "type": "Flash",
    "unit": "2wink",
    "units": [
      "2wink"
    ],
    "title": "럽미 몬스터(Love×me⇄monsteR)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 217,
    "duration": "2:34",
    "etStart": 136,
    "etEnd": 177,
    "measured": 116,
    "category": "cosmic",
    "video": "https://youtu.be/C853sWzXfWI?si=ad2MiORPV0daDFAR",
    "predicted": 119.0
  },
  {
    "type": "Flash",
    "unit": "2wink",
    "units": [
      "2wink"
    ],
    "title": "Twin Wedding Vows",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 104,
    "duration": "2:23",
    "etStart": 48,
    "etEnd": 82,
    "measured": 57,
    "category": "cosmic",
    "video": "https://youtu.be/OvVvv1qL6mA?si=iOjtGIA8H3mWQJpU",
    "predicted": 58.0
  },
  {
    "type": "Flash",
    "unit": "2wink",
    "units": [
      "2wink"
    ],
    "title": "감사제(来来☆2winkイリュージョン)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 181,
    "duration": "2:21",
    "etStart": 106,
    "etEnd": 146,
    "measured": 99,
    "category": "cosmic",
    "video": "https://youtu.be/Sag56BWbyBM?si=cQOEFl2-KAFcKEjf",
    "predicted": 99.0
  },
  {
    "type": "Flash",
    "unit": "UNDEAD",
    "units": [
      "UNDEAD"
    ],
    "title": "Melody in the Dark",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 152,
    "duration": "2:37",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": "https://youtu.be/eoQE_n5ITSU?si=rdxhHahQ6kgSC5mi",
    "predicted": 83.0
  },
  {
    "type": "Glitter",
    "unit": "UNDEAD",
    "units": [
      "UNDEAD"
    ],
    "title": "Valentine Eve's Nightmare",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 164,
    "duration": "2:30",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": "https://youtu.be/OMv6CprdegM?si=20wVqjLyD_tJ_aBg",
    "predicted": 89.0
  },
  {
    "type": "Brilliant",
    "unit": "UNDEAD",
    "units": [
      "UNDEAD"
    ],
    "title": "Gate of the Abyss",
    "titleKo": "Gate of the Abyss",
    "titleKoReading": "게이트 오브 어비스",
    "totalNotes": 132,
    "duration": "2:29",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": "https://youtu.be/FXtZNEwGTNM?si=B1FQOqAc1My09wi8",
    "predicted": 72.0
  },
  {
    "type": "Glitter",
    "unit": "UNDEAD",
    "units": [
      "UNDEAD"
    ],
    "title": "DESTRUCTION ROAD",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 119,
    "duration": "2:22",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": "https://youtu.be/AEadVvbIDTs?si=7EB3HtgDU2T4aXPM",
    "predicted": 65.0
  },
  {
    "type": "Brilliant",
    "unit": "UNDEAD",
    "units": [
      "UNDEAD"
    ],
    "title": "IMMORAL WORLD",
    "titleKo": "IMMORAL WORLD",
    "titleKoReading": "임모랄 월드",
    "totalNotes": 126,
    "duration": "1:57",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": "https://youtu.be/5ibK0HTyCqE",
    "predicted": 69.0
  },
  {
    "type": "Sparkle",
    "unit": "UNDEAD / 홍월",
    "units": [
      "UNDEAD",
      "홍월"
    ],
    "title": "PERFECTLY-IMPERFECT",
    "titleKo": "PERFECTLY-IMPERFECT",
    "titleKoReading": "퍼펙틀리-임퍼펙트",
    "totalNotes": 193,
    "duration": "2:35",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": "https://youtu.be/XpS8WT--GMA?si=WC61RpYpJ5Md186S",
    "predicted": 105.0
  },
  {
    "type": "Flash",
    "unit": "UNDEAD",
    "units": [
      "UNDEAD"
    ],
    "title": "허니밀크",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 154,
    "duration": "2:39",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": "https://youtu.be/e2zo1oC_ouE?si=pXVOHxaCM-T51DyL",
    "predicted": 84.0
  },
  {
    "type": "Flash",
    "unit": "UNDEAD",
    "units": [
      "UNDEAD"
    ],
    "title": "죄의 밑바닥 (罪の底)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 184,
    "duration": "2:54",
    "etStart": 79,
    "etEnd": 111,
    "measured": 106,
    "category": "rhythm_link",
    "video": "https://youtu.be/VfIUZw1CkrE?si=qarf0WyZqsIVIcar",
    "predicted": 99.0
  },
  {
    "type": "Brilliant",
    "unit": "UNDEAD",
    "units": [
      "UNDEAD"
    ],
    "title": "Savage Love Affair",
    "titleKo": "Savage Love Affair",
    "titleKoReading": "새비지 러브 어페어",
    "totalNotes": 172,
    "duration": "2:26",
    "etStart": 56,
    "etEnd": 105,
    "measured": 98,
    "category": "rhythm_link",
    "video": "https://youtu.be/VjQw-7CczQY?si=fAWVQfIi3NFds-hw",
    "predicted": 93.0
  },
  {
    "type": "Brilliant",
    "unit": "UNDEAD",
    "units": [
      "UNDEAD"
    ],
    "title": "Darkness 4",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 106,
    "duration": "2:05",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": "https://youtu.be/f1QLJm01eJg?si=xWj4yhalHluzvXnU",
    "predicted": 58.0
  },
  {
    "type": "Sparkle",
    "unit": "UNDEAD",
    "units": [
      "UNDEAD"
    ],
    "title": "Nightless World",
    "titleKo": "Nightless World",
    "titleKoReading": "나이트리스 월드",
    "totalNotes": 111,
    "duration": "2:04",
    "etStart": 57,
    "etEnd": 80,
    "measured": 57,
    "category": "rhythm_link",
    "video": "https://youtu.be/U9qxWETQMDE?si=7Tu0qSDB0-I-rI26",
    "predicted": 61.0
  },
  {
    "type": "Sparkle",
    "unit": "UNDEAD",
    "units": [
      "UNDEAD"
    ],
    "title": "FORBIDDEN RAIN",
    "titleKo": "FORBIDDEN RAIN",
    "titleKoReading": "포비든 레인",
    "totalNotes": 119,
    "duration": "2:15",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 65.0
  },
  {
    "type": "Glitter",
    "unit": "UNDEAD",
    "units": [
      "UNDEAD"
    ],
    "title": "Sustain Memories",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 137,
    "duration": "2:48",
    "etStart": 31,
    "etEnd": 58,
    "measured": 71,
    "category": "rhythm_link",
    "video": "https://youtu.be/7U1RsunFOc8?si=l9aqJXkrTgCHCE57",
    "predicted": 73.0
  },
  {
    "type": "Glitter",
    "unit": "UNDEAD",
    "units": [
      "UNDEAD"
    ],
    "title": "Resurrection of Soul",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 201,
    "duration": "2:46",
    "etStart": 119,
    "etEnd": 175,
    "measured": 108,
    "category": "rhythm_link",
    "video": "https://youtu.be/2QRK5t-U_F0?si=11m1UzWIRi4isplT",
    "predicted": 111.0
  },
  {
    "type": "Sparkle",
    "unit": "UNDEAD",
    "units": [
      "UNDEAD"
    ],
    "title": "SWINGIN' PARONIRIA",
    "titleKo": "SWINGIN' PARONIRIA",
    "titleKoReading": "스윙인 파로니리아",
    "totalNotes": 160,
    "duration": "2:28",
    "etStart": 114,
    "etEnd": 151,
    "measured": 85,
    "category": "rhythm_link",
    "video": "https://youtu.be/u21aGJ2glLs?si=-Y2tKw3cwpKPAczL",
    "predicted": 89.0
  },
  {
    "type": "Flash",
    "unit": "UNDEAD",
    "units": [
      "UNDEAD"
    ],
    "title": "Wanderlust Sailing",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 208,
    "duration": "2:25",
    "etStart": 125,
    "etEnd": 163,
    "measured": 114,
    "category": "rhythm_link",
    "video": "https://youtu.be/kkncT21bzKo?si=13QU37Tcg7dQd-RE",
    "predicted": 113.0
  },
  {
    "type": "Brilliant",
    "unit": "Ra*bits",
    "units": [
      "Ra*bits"
    ],
    "title": "Joyful×Box*",
    "titleKo": "Joyful×Box*",
    "titleKoReading": "조이풀 박스",
    "totalNotes": 100,
    "duration": "2:28",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 55.0
  },
  {
    "type": "Flash",
    "unit": "Ra*bits",
    "units": [
      "Ra*bits"
    ],
    "title": "Love Ra*bits Party!!",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 140,
    "duration": "2:27",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 76.0
  },
  {
    "type": "Sparkle",
    "unit": "Ra*bits",
    "units": [
      "Ra*bits"
    ],
    "title": "メルティ♡キッチン",
    "titleKo": "멜티♡키친",
    "titleKoReading": null,
    "totalNotes": 142,
    "duration": "2:23",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 77.0
  },
  {
    "type": "Glitter",
    "unit": "Ra*bits",
    "units": [
      "Ra*bits"
    ],
    "title": "Milky Starry Charm",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 142,
    "duration": "2:29",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 77.0
  },
  {
    "type": "Brilliant",
    "unit": "Ra*bits / DF",
    "units": [
      "Ra*bits",
      "DF"
    ],
    "title": "ポケットに宇宙",
    "titleKo": "주머니 속의 우주",
    "titleKoReading": null,
    "totalNotes": 128,
    "duration": "2:37",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 70.0
  },
  {
    "type": "Glitter",
    "unit": "Ra*bits",
    "units": [
      "Ra*bits"
    ],
    "title": "메이드인 도키메키",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 161,
    "duration": "2:29",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 87.0
  },
  {
    "type": "Sparkle",
    "unit": "Ra*bits",
    "units": [
      "Ra*bits"
    ],
    "title": "野うさぎマーチ♪",
    "titleKo": "산토끼 행진곡♪",
    "titleKoReading": null,
    "totalNotes": 125,
    "duration": "2:16",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 68.0
  },
  {
    "type": "Brilliant",
    "unit": "Ra*bits",
    "units": [
      "Ra*bits"
    ],
    "title": "ヒカリスペクトル",
    "titleKo": "빛 스펙트럼",
    "titleKoReading": "히카리 스펙트럼",
    "totalNotes": 163,
    "duration": "2:55",
    "etStart": 133,
    "etEnd": 152,
    "measured": 93,
    "category": "rhythm_link",
    "video": "https://youtu.be/4TBnL26Tv6c?si=ASXdvkO7M4yv_rWD",
    "predicted": 90.0
  },
  {
    "type": "Sparkle",
    "unit": "Ra*bits",
    "units": [
      "Ra*bits"
    ],
    "title": "うさぎの森の音楽会",
    "titleKo": "토끼 숲의 음악회",
    "titleKoReading": null,
    "totalNotes": 159,
    "duration": "2:38",
    "etStart": 28,
    "etEnd": 53,
    "measured": 89,
    "category": "rhythm_link",
    "video": "https://youtu.be/D6X5kz65g6g?si=YmzByWmUP_MqsUdN",
    "predicted": 84.0
  },
  {
    "type": "Brilliant",
    "unit": "Ra*bits",
    "units": [
      "Ra*bits"
    ],
    "title": "Dream Collection",
    "titleKo": "Dream Collection",
    "titleKoReading": "드림 컬렉션",
    "totalNotes": 112,
    "duration": "2:11",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 61.0
  },
  {
    "type": "Flash",
    "unit": "Ra*bits",
    "units": [
      "Ra*bits"
    ],
    "title": "Love it Love it",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 165,
    "duration": "2:43",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 90.0
  },
  {
    "type": "Flash",
    "unit": "Ra*bits",
    "units": [
      "Ra*bits"
    ],
    "title": "FALLIN' LOVE=IT'S WONDERLAND",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 190,
    "duration": "2:41",
    "etStart": 114,
    "etEnd": 144,
    "measured": 106,
    "category": "rhythm_link",
    "video": "https://youtu.be/C4CCRKRYMT0?si=9y4q4Y30JaTguMW6",
    "predicted": 104.0
  },
  {
    "type": "Sparkle",
    "unit": "Ra*bits",
    "units": [
      "Ra*bits"
    ],
    "title": "ハレノヒSugar Wave",
    "titleKo": "특별한 날 Sugar Wave",
    "titleKoReading": "하레노히 슈가 웨이브",
    "totalNotes": 160,
    "duration": "2:33",
    "etStart": 58,
    "etEnd": 106,
    "measured": 88,
    "category": "rhythm_link",
    "video": "https://youtu.be/x0EDfvN_BSk?si=_LyBPi_2gLvZgyHJ",
    "predicted": 87.0
  },
  {
    "type": "Glitter",
    "unit": "Ra*bits",
    "units": [
      "Ra*bits"
    ],
    "title": "토모야 클막",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 170,
    "duration": "2:43",
    "etStart": 42,
    "etEnd": 58,
    "measured": 90,
    "category": "rhythm_link",
    "video": "https://youtu.be/uZfLdLld0YM",
    "predicted": 90.0
  },
  {
    "type": "Brilliant",
    "unit": "Ra*bits",
    "units": [
      "Ra*bits"
    ],
    "title": "JUMPIN' LUCK BEAT",
    "titleKo": "JUMPIN' LUCK BEAT",
    "titleKoReading": "점핀 럭 비트",
    "totalNotes": 214,
    "duration": "2:42",
    "etStart": 81,
    "etEnd": 151,
    "measured": 126,
    "category": "rhythm_link",
    "video": "https://youtu.be/jpr4ob5gjfA?si=dPY8ei2TGtRMquao",
    "predicted": 117.0
  },
  {
    "type": "Brilliant",
    "unit": "Ra*bits",
    "units": [
      "Ra*bits"
    ],
    "title": "RaRaRa*Station!",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 189,
    "duration": "2:55",
    "etStart": 126,
    "etEnd": 156,
    "measured": 106,
    "category": "rhythm_link",
    "video": "https://youtu.be/R7FmVIDgs_w",
    "predicted": 103.0
  },
  {
    "type": "Brilliant",
    "unit": "홍월",
    "units": [
      "홍월"
    ],
    "title": "百花繚乱、紅月夜",
    "titleKo": "백화요란, 홍월야",
    "titleKoReading": null,
    "totalNotes": 200,
    "duration": "2:23",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 108.0
  },
  {
    "type": "Flash",
    "unit": "홍월",
    "units": [
      "홍월"
    ],
    "title": "연홍빛 약속",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 133,
    "duration": "2:30",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 72.0
  },
  {
    "type": "Glitter",
    "unit": "홍월",
    "units": [
      "홍월"
    ],
    "title": "무슨 검",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 136,
    "duration": "2:32",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 74.0
  },
  {
    "type": "Sparkle",
    "unit": "홍월",
    "units": [
      "홍월"
    ],
    "title": "祭夜絵巻",
    "titleKo": "축제의 밤 그림 두루마리(제야회권)",
    "titleKoReading": null,
    "totalNotes": 167,
    "duration": "2:23",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 91.0
  },
  {
    "type": "Flash",
    "unit": "홍월",
    "units": [
      "홍월"
    ],
    "title": "월화무쌍 붉은춤(月下無双、紅の舞)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 190,
    "duration": "2:35",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 103.0
  },
  {
    "type": "Brilliant",
    "unit": "홍월",
    "units": [
      "홍월"
    ],
    "title": "剣戟の舞",
    "titleKo": "검극의 춤",
    "titleKoReading": null,
    "totalNotes": 144,
    "duration": "2:21",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 78.0
  },
  {
    "type": "Flash",
    "unit": "홍월",
    "units": [
      "홍월"
    ],
    "title": "실",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 168,
    "duration": "2:52",
    "etStart": 64,
    "etEnd": 93,
    "measured": 89,
    "category": "rhythm_link",
    "video": "https://youtu.be/11C7MwwRWMw?si=eP8rjwufD6VBbDat",
    "predicted": 91.0
  },
  {
    "type": "Brilliant",
    "unit": "홍월",
    "units": [
      "홍월"
    ],
    "title": "夜空、然りとて鵲は",
    "titleKo": "밤하늘, 그럼에도 까치는",
    "titleKoReading": null,
    "totalNotes": 114,
    "duration": "2:18",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 62.0
  },
  {
    "type": "Brilliant",
    "unit": "홍월",
    "units": [
      "홍월"
    ],
    "title": "百花繚乱、紅月夜 (2025 ver.)",
    "titleKo": "백화요란, 홍월야 (2025 ver.)",
    "titleKoReading": null,
    "totalNotes": 206,
    "duration": "2:35",
    "etStart": 117,
    "etEnd": 147,
    "measured": 117,
    "category": "rhythm_link",
    "video": "https://youtu.be/lqf2x1GKkVg?si=rLLmjwR7Etv-CCk0",
    "predicted": 112.0
  },
  {
    "type": "Glitter",
    "unit": "홍월",
    "units": [
      "홍월"
    ],
    "title": "홍월 이로하",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 168,
    "duration": "2:08",
    "etStart": 119,
    "etEnd": 130,
    "measured": 95,
    "category": "rhythm_link",
    "video": "https://youtu.be/TE9kO9CtHZY?si=LH0kVRGBhb1fCYtf",
    "predicted": 92.0
  },
  {
    "type": "Glitter",
    "unit": "홍월",
    "units": [
      "홍월"
    ],
    "title": "월광기담",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 155,
    "duration": "2:43",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 84.0
  },
  {
    "type": "Glitter",
    "unit": "홍월",
    "units": [
      "홍월"
    ],
    "title": "써머버드",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 141,
    "duration": "2:40",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 77.0
  },
  {
    "type": "Sparkle",
    "unit": "홍월",
    "units": [
      "홍월"
    ],
    "title": "金色千夜夢舞台",
    "titleKo": "금색천야몽무대",
    "titleKoReading": null,
    "totalNotes": 217,
    "duration": "2:46",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "rhythm_link",
    "video": null,
    "predicted": 117.0
  },
  {
    "type": "Sparkle",
    "unit": "홍월",
    "units": [
      "홍월"
    ],
    "title": "天翔KAGETSU",
    "titleKo": "천상 KAGETSU",
    "titleKoReading": null,
    "totalNotes": 198,
    "duration": "2:53",
    "etStart": 55,
    "etEnd": 105,
    "measured": 106,
    "category": "rhythm_link",
    "video": "https://youtu.be/iI7IE1ZbDUg?si=N3jxe0eHlE8JPqwL",
    "predicted": 107.0
  },
  {
    "type": "Glitter",
    "unit": "홍월",
    "units": [
      "홍월"
    ],
    "title": "LOUDEST BUGS",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 222,
    "duration": "2:31",
    "etStart": 78,
    "etEnd": 104,
    "measured": 115,
    "category": "rhythm_link",
    "video": "https://youtu.be/mqMkkKZJDSA?si=ETeu8rR1mFg0JRLj",
    "predicted": 119.0
  },
  {
    "type": "Sparkle",
    "unit": "MELLOW DEAR US",
    "units": [
      "MELLOW DEAR US"
    ],
    "title": "Dear World (マスターピース ver.)",
    "titleKo": "Dear World (마스터피스 ver)",
    "titleKoReading": "디어 월드 마스터피스",
    "totalNotes": 180,
    "duration": "2:29",
    "etStart": 0,
    "etEnd": 0,
    "measured": 102,
    "category": "rhythm_link",
    "video": "https://youtu.be/6OgHDJn3iPE?si=MThi_08vZH1ffs7q",
    "predicted": 98.0
  },
  {
    "type": "Sparkle",
    "unit": "MELLOW DEAR US",
    "units": [
      "MELLOW DEAR US"
    ],
    "title": "Dear World",
    "titleKo": "Dear World",
    "titleKoReading": "디어 월드",
    "totalNotes": 158,
    "duration": "2:41",
    "etStart": 82,
    "etEnd": 105,
    "measured": 87,
    "category": "rhythm_link",
    "video": "https://youtu.be/VPpQsQ4DYF4?si=ilsluz4VPIhgCK5E",
    "predicted": 86.0
  },
  {
    "type": "Flash",
    "unit": "MELLOW DEAR US",
    "units": [
      "MELLOW DEAR US"
    ],
    "title": "BUBBLE GUM DANCE",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 153,
    "duration": "2:29",
    "etStart": 58,
    "etEnd": 72,
    "measured": 84,
    "category": "rhythm_link",
    "video": "https://youtu.be/-9ozN9GEx4I?si=EgQ4ceHvqMFK-RiA",
    "predicted": 82.0
  },
  {
    "type": "Sparkle",
    "unit": "홍월",
    "units": [
      "홍월"
    ],
    "title": "炎纏焰踊千変万火",
    "titleKo": "염전염용 천변만화",
    "titleKoReading": null,
    "totalNotes": 208,
    "duration": "2:45",
    "etStart": 1,
    "etEnd": 13,
    "measured": 110,
    "category": "rhythm_link",
    "video": "https://youtu.be/-gtAqdLXUnA?si=usSk2BkRptKbsvGo",
    "predicted": 108.0
  },
  {
    "type": "Glitter",
    "unit": "Knights",
    "units": [
      "Knights"
    ],
    "title": "Voice of Sword",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 135,
    "duration": "2:36",
    "etStart": 58,
    "etEnd": 84,
    "measured": 75,
    "category": "new_dimension",
    "video": "https://youtu.be/Y_dfB-rMwAI?si=dvrZtDh0k9CVKzi7",
    "predicted": 73.0
  },
  {
    "type": "Brilliant",
    "unit": "Knights",
    "units": [
      "Knights"
    ],
    "title": "Silent Oath",
    "titleKo": "Silent Oath",
    "titleKoReading": "사일런트 오쓰",
    "totalNotes": 106,
    "duration": "2:10",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "new_dimension",
    "video": null,
    "predicted": 58.0
  },
  {
    "type": "Sparkle",
    "unit": "Knights",
    "units": [
      "Knights"
    ],
    "title": "Grateful allegiance",
    "titleKo": "Grateful allegiance",
    "titleKoReading": "그레이트풀 얼리전스",
    "totalNotes": 96,
    "duration": "2:10",
    "etStart": 62,
    "etEnd": 78,
    "measured": 53,
    "category": "new_dimension",
    "video": "https://youtu.be/Mt-aFDzGxeo?si=SsXIJ93sfdVntKuH",
    "predicted": 54.0
  },
  {
    "type": "Flash",
    "unit": "Knights",
    "units": [
      "Knights"
    ],
    "title": "Fight for Judge",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 159,
    "duration": "2:32",
    "etStart": 91,
    "etEnd": 110,
    "measured": 85,
    "category": "new_dimension",
    "video": "https://youtu.be/OnR5oh8N_Rw?si=lbXe3Yie2sTODL70",
    "predicted": 86.0
  },
  {
    "type": "Glitter",
    "unit": "Knights",
    "units": [
      "Knights"
    ],
    "title": "Promise Swords",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 172,
    "duration": "2:48",
    "etStart": 88,
    "etEnd": 105,
    "measured": 88,
    "category": "new_dimension",
    "video": "https://youtu.be/VMLQm7BKu4c?si=EcvAURc3Mpfjm99G",
    "predicted": 93.0
  },
  {
    "type": "Brilliant",
    "unit": "Knights",
    "units": [
      "Knights"
    ],
    "title": "Article of Faith",
    "titleKo": "Article of Faith",
    "titleKoReading": "아티클 오브 페이스",
    "totalNotes": 144,
    "duration": "2:26",
    "etStart": 106,
    "etEnd": 137,
    "measured": 80,
    "category": "new_dimension",
    "video": "https://youtu.be/bljn1rmENg0?si=PLuOYXy1R_irARCe",
    "predicted": 80.0
  },
  {
    "type": "Flash",
    "unit": "Knights",
    "units": [
      "Knights"
    ],
    "title": "Wonderful Happiness",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 175,
    "duration": "2:49",
    "etStart": 55,
    "etEnd": 114,
    "measured": 96,
    "category": "new_dimension",
    "video": "https://youtu.be/Kgi-GfMs9dc",
    "predicted": 96.0
  },
  {
    "type": "Glitter",
    "unit": "Knights",
    "units": [
      "Knights"
    ],
    "title": "Castle of my Heart",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 159,
    "duration": "2:51",
    "etStart": 1,
    "etEnd": 6,
    "measured": 89,
    "category": "new_dimension",
    "video": "https://youtu.be/oZB7A0CkQt8?si=DYp4d7xGgDZD8KAP",
    "predicted": 82.0
  },
  {
    "type": "Sparkle",
    "unit": "Knights",
    "units": [
      "Knights"
    ],
    "title": "Knights the Phantom Thief",
    "titleKo": "Knights the Phantom Thief",
    "titleKoReading": "나이츠 더 팬텀 시프",
    "totalNotes": 116,
    "duration": "2:24",
    "etStart": 80,
    "etEnd": 96,
    "measured": 67,
    "category": "new_dimension",
    "video": "https://youtu.be/IPTEOEH7LcE?si=hDLlPj-ILaqI-6Bk",
    "predicted": 64.0
  },
  {
    "type": "Sparkle",
    "unit": "Knights",
    "units": [
      "Knights"
    ],
    "title": "Little Romance",
    "titleKo": "Little Romance",
    "titleKoReading": "리틀 로망스",
    "totalNotes": 137,
    "duration": "2:41",
    "etStart": 97,
    "etEnd": 115,
    "measured": 71,
    "category": "new_dimension",
    "video": "https://youtu.be/hXvSF8dbEfk?si=LGwVnyJ2wOzUTql0",
    "predicted": 76.0
  },
  {
    "type": "Flash",
    "unit": "Knights",
    "units": [
      "Knights"
    ],
    "title": "Mystic Fragrance",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 145,
    "duration": "2:20",
    "etStart": 93,
    "etEnd": 130,
    "measured": 83,
    "category": "new_dimension",
    "video": "https://youtu.be/6Q0cZ3sxJaQ?si=croDhuyG7Jrs-4jd",
    "predicted": 81.0
  },
  {
    "type": "Glitter",
    "unit": "Knights",
    "units": [
      "Knights"
    ],
    "title": "Coruscate Breeze",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 142,
    "duration": "2:49",
    "etStart": 104,
    "etEnd": 119,
    "measured": 79,
    "category": "new_dimension",
    "video": "https://youtu.be/W_hPeGRVwdY?si=ORyljHeY0ax9uoEC",
    "predicted": 78.0
  },
  {
    "type": "Brilliant",
    "unit": "Knights",
    "units": [
      "Knights"
    ],
    "title": "Or the Beautiful Golden Drop",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 189,
    "duration": "2:56",
    "etStart": 69,
    "etEnd": 89,
    "measured": 100,
    "category": "new_dimension",
    "video": "https://youtu.be/tNKnEgJ60P0?si=i6DT4rRIRsZ1pGlW",
    "predicted": 101.0
  },
  {
    "type": "Brilliant",
    "unit": "Knights",
    "units": [
      "Knights"
    ],
    "title": "Luminous Crown",
    "titleKo": "Luminous Crown",
    "titleKoReading": "루미너스 크라운",
    "totalNotes": 141,
    "duration": "2:40",
    "etStart": 48,
    "etEnd": 68,
    "measured": 74,
    "category": "new_dimension",
    "video": "https://youtu.be/yB08ylHfQng?si=pZFwY2RRnCM2OYuT",
    "predicted": 76.0
  },
  {
    "type": "Brilliant",
    "unit": "Knights",
    "units": [
      "Knights"
    ],
    "title": "Heart Collector",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 164,
    "duration": "2:54",
    "etStart": 107,
    "etEnd": 131,
    "measured": 93,
    "category": "new_dimension",
    "video": "https://youtu.be/-xnmtYualr4?si=SEqJGkWSPzQjE0l9",
    "predicted": 90.0
  },
  {
    "type": "Sparkle",
    "unit": "Switch",
    "units": [
      "Switch"
    ],
    "title": "Temptation Magic",
    "titleKo": "Temptation Magic",
    "titleKoReading": "템테이션 매직",
    "totalNotes": 103,
    "duration": "2:17",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "new_dimension",
    "video": null,
    "predicted": 56.0
  },
  {
    "type": "Brilliant",
    "unit": "Switch",
    "units": [
      "Switch"
    ],
    "title": "エメラルドプラネット",
    "titleKo": "에메랄드 플래닛",
    "titleKoReading": null,
    "totalNotes": 143,
    "duration": "2:29",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "new_dimension",
    "video": null,
    "predicted": 78.0
  },
  {
    "type": "Flash",
    "unit": "Switch",
    "units": [
      "Switch"
    ],
    "title": "노킹 판타지",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 106,
    "duration": "2:15",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "new_dimension",
    "video": null,
    "predicted": 58.0
  },
  {
    "type": "Glitter",
    "unit": "Switch",
    "units": [
      "Switch"
    ],
    "title": "I ”Witch” You A Happy Halloween! 할로윈 ",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 145,
    "duration": "2:28",
    "etStart": 103,
    "etEnd": 135,
    "measured": 80,
    "category": "new_dimension",
    "video": "https://youtu.be/F6Y2z7BtlBM?si=jABXQDsbLDHz2_-v",
    "predicted": 81.0
  },
  {
    "type": "Glitter",
    "unit": "Switch",
    "units": [
      "Switch"
    ],
    "title": "매직 포 유어 스위치",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 178,
    "duration": "2:36",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "new_dimension",
    "video": null,
    "predicted": 97.0
  },
  {
    "type": "Flash",
    "unit": "Switch",
    "units": [
      "Switch"
    ],
    "title": "갤럭시 데스티니",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 103,
    "duration": "2:13",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "new_dimension",
    "video": null,
    "predicted": 56.0
  },
  {
    "type": "Glitter",
    "unit": "Switch",
    "units": [
      "Switch"
    ],
    "title": "Seven Days \"Prismagic\" (스위치 트립)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 143,
    "duration": "2:47",
    "etStart": 115,
    "etEnd": 139,
    "measured": 75,
    "category": "new_dimension",
    "video": "https://youtu.be/g9Pp5b45YCo?si=ivNyZPn8r7he9S0A",
    "predicted": 80.0
  },
  {
    "type": "Flash",
    "unit": "Switch",
    "units": [
      "Switch"
    ],
    "title": "이스터 카니발",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 198,
    "duration": "2:33",
    "etStart": 62,
    "etEnd": 98,
    "measured": 104,
    "category": "new_dimension",
    "video": "https://youtu.be/qw0zoJpOqQw?si=vYztjSdMyfWE3WAV",
    "predicted": 106.0
  },
  {
    "type": "Flash",
    "unit": "Switch",
    "units": [
      "Switch"
    ],
    "title": "A little bit UP!!",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 135,
    "duration": "2:46",
    "etStart": 108,
    "etEnd": 118,
    "measured": 74,
    "category": "new_dimension",
    "video": "https://youtu.be/QiE_mrDMqbk?si=zhN9g92tTnNMDUep",
    "predicted": 75.0
  },
  {
    "type": "Brilliant",
    "unit": "Switch",
    "units": [
      "Switch"
    ],
    "title": "オモイノカケラ",
    "titleKo": "마음의 조각",
    "titleKoReading": "오모이노카케라",
    "totalNotes": 130,
    "duration": "1:58",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "new_dimension",
    "video": null,
    "predicted": 71.0
  },
  {
    "type": "Brilliant",
    "unit": "Switch",
    "units": [
      "Switch"
    ],
    "title": "Brilliant Smile",
    "titleKo": "Brilliant Smile",
    "titleKoReading": "브릴리언트 스마일",
    "totalNotes": 198,
    "duration": "2:44",
    "etStart": 151,
    "etEnd": 169,
    "measured": 105,
    "category": "new_dimension",
    "video": "https://youtu.be/yeuMMCHFfUA?si=bIUqgaAyNBLXOb-C",
    "predicted": 108.0
  },
  {
    "type": "Sparkle",
    "unit": "Switch",
    "units": [
      "Switch"
    ],
    "title": "Romancing Cruise",
    "titleKo": "Romancing Cruise",
    "titleKoReading": "로맨싱 크루즈",
    "totalNotes": 148,
    "duration": "2:36",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "new_dimension",
    "video": null,
    "predicted": 81.0
  },
  {
    "type": "Sparkle",
    "unit": "Switch",
    "units": [
      "Switch"
    ],
    "title": "Chocola-Tic After School",
    "titleKo": "Chocola-Tic After School",
    "titleKoReading": "쇼콜라틱 애프터 스쿨",
    "totalNotes": 142,
    "duration": "2:47",
    "etStart": 101,
    "etEnd": 117,
    "measured": 80,
    "category": "new_dimension",
    "video": "https://youtu.be/maUqiZk7sCk?si=eaLE2Dma927sP_Sy",
    "predicted": 78.0
  },
  {
    "type": "Flash",
    "unit": "Switch",
    "units": [
      "Switch"
    ],
    "title": "Wish upon a MUSIC!!",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 142,
    "duration": "2:51",
    "etStart": 35,
    "etEnd": 58,
    "measured": 72,
    "category": "new_dimension",
    "video": "https://youtu.be/7WzOUpKOHtI?si=gtdElgxFjN0TkBHj",
    "predicted": 76.0
  },
  {
    "type": "Glitter",
    "unit": "Switch",
    "units": [
      "Switch"
    ],
    "title": "Switching Journey",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 146,
    "duration": "2:41",
    "etStart": 122,
    "etEnd": 133,
    "measured": 86,
    "category": "new_dimension",
    "video": "https://youtu.be/xafCUkCr94I?si=d85wmfxusbd-YBSd",
    "predicted": 81.0
  },
  {
    "type": "Glitter",
    "unit": "MaM",
    "units": [
      "MaM"
    ],
    "title": "블루밍",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 141,
    "duration": "2:11",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "new_dimension",
    "video": null,
    "predicted": 77.0
  },
  {
    "type": "Sparkle",
    "unit": "MaM",
    "units": [
      "MaM"
    ],
    "title": "君印 Be Ambitious!!",
    "titleKo": "너의 정표 Be Ambitious!!",
    "titleKoReading": "앰비셔스",
    "totalNotes": 131,
    "duration": "2:11",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "new_dimension",
    "video": null,
    "predicted": 71.0
  },
  {
    "type": "Brilliant",
    "unit": "MaM",
    "units": [
      "MaM"
    ],
    "title": "Festive!",
    "titleKo": "Festive!",
    "titleKoReading": "페스티브",
    "totalNotes": 121,
    "duration": "2:13",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "new_dimension",
    "video": null,
    "predicted": 66.0
  },
  {
    "type": "Flash",
    "unit": "MaM",
    "units": [
      "MaM"
    ],
    "title": "유쾌통쾌 That's alright! 다라닥닥",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 202,
    "duration": "2:32",
    "etStart": 124,
    "etEnd": 143,
    "measured": 103,
    "category": "new_dimension",
    "video": "https://youtu.be/XJA4yTIcSi8?si=ZvPsX922n-R_dMu7",
    "predicted": 109.0
  },
  {
    "type": "Brilliant",
    "unit": "MaM",
    "units": [
      "MaM"
    ],
    "title": "辻風に吹かれて",
    "titleKo": "선풍에 휘날려",
    "titleKoReading": null,
    "totalNotes": 141,
    "duration": "2:28",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "new_dimension",
    "video": null,
    "predicted": 77.0
  },
  {
    "type": "Flash",
    "unit": "MaM",
    "units": [
      "MaM"
    ],
    "title": "핸즈크레프트",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 121,
    "duration": "2:45",
    "etStart": 62,
    "etEnd": 72,
    "measured": 62,
    "category": "new_dimension",
    "video": "https://youtu.be/wU4xQ9hyhcA?si=nrPSlUDVggN3HZL6",
    "predicted": 65.0
  },
  {
    "type": "Glitter",
    "unit": "MaM",
    "units": [
      "MaM"
    ],
    "title": "헬로 뉴이어",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 101,
    "duration": "2:48",
    "etStart": 57,
    "etEnd": 72,
    "measured": 57,
    "category": "new_dimension",
    "video": "https://youtu.be/XqU_u7YF_4k?si=DT0ibUjxmDgR-hQf",
    "predicted": 56.0
  },
  {
    "type": "Brilliant",
    "unit": "MaM",
    "units": [
      "MaM"
    ],
    "title": "ハロウィン・ランデブー",
    "titleKo": "할로윈・랑데부",
    "titleKoReading": null,
    "totalNotes": 181,
    "duration": "2:51",
    "etStart": 119,
    "etEnd": 151,
    "measured": 98,
    "category": "new_dimension",
    "video": "https://youtu.be/ypuz0XTP_Yw?si=-bc4zHdJ3OHuzBtG",
    "predicted": 99.0
  },
  {
    "type": "Flash",
    "unit": "DF",
    "units": [
      "DF"
    ],
    "title": "Stippling",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 132,
    "duration": "2:14",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "new_dimension",
    "video": null,
    "predicted": 72.0
  },
  {
    "type": "Glitter",
    "unit": "DF",
    "units": [
      "DF"
    ],
    "title": "네뷸라",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 160,
    "duration": "2:46",
    "etStart": 58,
    "etEnd": 84,
    "measured": 85,
    "category": "new_dimension",
    "video": "https://youtu.be/nvW4Sb5j_os?si=EHgZ9zRV5LBZ163p",
    "predicted": 86.0
  },
  {
    "type": "Sparkle",
    "unit": "DF",
    "units": [
      "DF"
    ],
    "title": "=EYE=",
    "titleKo": "=EYE=",
    "titleKoReading": "아이",
    "totalNotes": 151,
    "duration": "2:26",
    "etStart": 55,
    "etEnd": 96,
    "measured": 84,
    "category": "new_dimension",
    "video": "https://youtu.be/5W8iksoImZ0?si=RadE3upquKGY4kBb",
    "predicted": 82.0
  },
  {
    "type": "Brilliant",
    "unit": "DF",
    "units": [
      "DF"
    ],
    "title": "No name yet",
    "titleKo": "No name yet",
    "titleKoReading": "노 네임 옛",
    "totalNotes": 147,
    "duration": "2:32",
    "etStart": 96,
    "etEnd": 110,
    "measured": 85,
    "category": "new_dimension",
    "video": "https://youtu.be/1fxv7EJyDrQ?si=o917z-_sV068A4e8",
    "predicted": 80.0
  },
  {
    "type": "Brilliant",
    "unit": "DF",
    "units": [
      "DF"
    ],
    "title": "Bye-Bye Buddy",
    "titleKo": "Bye-Bye Buddy",
    "titleKoReading": "바이바이 버디",
    "totalNotes": 194,
    "duration": "2:43",
    "etStart": 148,
    "etEnd": 165,
    "measured": 112,
    "category": "new_dimension",
    "video": "https://youtu.be/igayZQFSmGY?si=fNzUBk-sJJ79XuMA",
    "predicted": 106.0
  },
  {
    "type": "Flash",
    "unit": "S-Pri",
    "units": [
      "S-Pri"
    ],
    "title": "상애선언",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 211,
    "duration": "2:56",
    "etStart": 36,
    "etEnd": 50,
    "measured": 111,
    "category": "new_dimension",
    "video": "https://youtu.be/LejZx0toLQc?si=b_Xe4v94YcifbF2R",
    "predicted": 111.0
  },
  {
    "type": "Glitter",
    "unit": "S-Pri",
    "units": [
      "S-Pri"
    ],
    "title": "스키스키 헌터",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 201,
    "duration": "2:43",
    "etStart": 125,
    "etEnd": 141,
    "measured": 104,
    "category": "new_dimension",
    "video": "https://youtu.be/LXhAtH7jCJU?si=oBePbPTzIGawjaek",
    "predicted": 109.0
  },
  {
    "type": "Sparkle",
    "unit": "S-Pri",
    "units": [
      "S-Pri"
    ],
    "title": "Be My Princess♡",
    "titleKo": "Be My Princess♡",
    "titleKoReading": "비 마이 프린세스",
    "totalNotes": 193,
    "duration": "2:47",
    "etStart": 140,
    "etEnd": 157,
    "measured": 107,
    "category": "new_dimension",
    "video": "https://youtu.be/3kSEGCzfomw?si=3YJt9cUK8qg9D5xP",
    "predicted": 105.0
  },
  {
    "type": "Glitter",
    "unit": "S-Pri",
    "units": [
      "S-Pri"
    ],
    "title": "베리베리 스위트 화이트",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 149,
    "duration": "2:13",
    "etStart": 105,
    "etEnd": 122,
    "measured": 83,
    "category": "new_dimension",
    "video": "https://youtu.be/tk7kSTGCa5A?si=EvjRSwA-spA-_bzv",
    "predicted": 82.0
  },
  {
    "type": "Glitter",
    "unit": "S-Pri",
    "units": [
      "S-Pri"
    ],
    "title": "칸나 하코",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 166,
    "duration": "2:33",
    "etStart": 121,
    "etEnd": 132,
    "measured": 90,
    "category": "new_dimension",
    "video": "https://youtu.be/e4JWzY_Iki4?si=wYLh8wMhGAsWHKOA",
    "predicted": 91.0
  },
  {
    "type": "Glitter",
    "unit": "MaM",
    "units": [
      "MaM"
    ],
    "title": "Light on the Orbit 감사제",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 131,
    "duration": "2:41",
    "etStart": 85,
    "etEnd": 119,
    "measured": 73,
    "category": "new_dimension",
    "video": "https://youtu.be/swjbhhjcaIw?si=pTMzetSaGciJYK56",
    "predicted": 73.0
  },
  {
    "type": "Brilliant",
    "unit": "Knights",
    "units": [
      "Knights"
    ],
    "title": "Secret Masquerade",
    "titleKo": "Secret Masquerade",
    "titleKoReading": "시크릿 마스커레이드",
    "totalNotes": 183,
    "duration": "2:41",
    "etStart": 97,
    "etEnd": 107,
    "measured": 99,
    "category": "new_dimension",
    "video": "https://youtu.be/4HxEhn3UljA",
    "predicted": 98.0
  },
  {
    "type": "All",
    "unit": "주년",
    "units": [
      "주년"
    ],
    "title": "BRAND NEW STARS!!",
    "titleKo": "BRAND NEW STARS!!",
    "titleKoReading": "브랜드 뉴 스타즈 5주년",
    "totalNotes": 118,
    "duration": "2:08",
    "etStart": 68,
    "etEnd": 94,
    "measured": 68,
    "category": "others",
    "video": "https://youtu.be/7g4vefHWPvc?si=LivgcBOApU2IiUuq",
    "predicted": 66.0
  },
  {
    "type": "All",
    "unit": "기타",
    "units": [
      "기타"
    ],
    "title": "Stars' Ensemble!",
    "titleKo": "Stars' Ensemble!",
    "titleKoReading": "스타즈 앙상블",
    "totalNotes": 80,
    "duration": "2:39",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 44.0
  },
  {
    "type": "Brilliant",
    "unit": "Jin & Akiomi",
    "units": [
      "Jin & Akiomi"
    ],
    "title": "Rainbow Stairway",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 121,
    "duration": "2:25",
    "etStart": 41,
    "etEnd": 69,
    "measured": 61,
    "category": "others",
    "video": "https://youtu.be/5eGMuT05V34?si=vDXVzhUiJnl-Oic2",
    "predicted": 66.0
  },
  {
    "type": "Sparkle",
    "unit": "추억",
    "units": [
      "추억"
    ],
    "title": "Eccentric Party Night!!",
    "titleKo": "Eccentric Party Night!!",
    "titleKoReading": "익센트릭 파티 나이트",
    "totalNotes": 127,
    "duration": "2:28",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 69.0
  },
  {
    "type": "Flash",
    "unit": "추억",
    "units": [
      "추억"
    ],
    "title": "제뉴인",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 123,
    "duration": "2:13",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 67.0
  },
  {
    "type": "Brilliant",
    "unit": "추억",
    "units": [
      "추억"
    ],
    "title": "Death Game Holic",
    "titleKo": "Death Game Holic",
    "titleKoReading": "데스 게임 홀릭",
    "totalNotes": 235,
    "duration": "2:32",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 127.0
  },
  {
    "type": "Glitter",
    "unit": "추억",
    "units": [
      "추억"
    ],
    "title": "Crush of Judgment 나킬",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 154,
    "duration": "2:24",
    "etStart": 65,
    "etEnd": 96,
    "measured": 87,
    "category": "others",
    "video": "https://youtu.be/v6xB4TsnL1k?si=4HFlYuhsvrr4dC-o",
    "predicted": 84.0
  },
  {
    "type": "Sparkle",
    "unit": "추억",
    "units": [
      "추억"
    ],
    "title": "ROCK ROAR",
    "titleKo": "ROCK ROAR",
    "titleKoReading": "락 로어",
    "totalNotes": 208,
    "duration": "2:40",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 113.0
  },
  {
    "type": "Sparkle",
    "unit": "추억",
    "units": [
      "추억"
    ],
    "title": "We'll be \"Knights\"",
    "titleKo": "We'll be \"Knights\"",
    "titleKoReading": "윌 비 나이츠",
    "totalNotes": 99,
    "duration": "2:19",
    "etStart": 67,
    "etEnd": 93,
    "measured": 59,
    "category": "others",
    "video": "https://youtu.be/BZdA8fqqojc?si=017TRTtHsKgxz6x0",
    "predicted": 56.0
  },
  {
    "type": "Sparkle",
    "unit": "추억",
    "units": [
      "추억"
    ],
    "title": "聖少年遊戯",
    "titleKo": "성소년 유희",
    "titleKoReading": null,
    "totalNotes": 160,
    "duration": "2:20",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 87.0
  },
  {
    "type": "Sparkle",
    "unit": "드림유닛",
    "units": [
      "드림유닛"
    ],
    "title": "瞬きSign☆",
    "titleKo": "깜빡 Sign☆",
    "titleKoReading": "깜빡 사인",
    "totalNotes": 179,
    "duration": "2:46",
    "etStart": 119,
    "etEnd": 150,
    "measured": 96,
    "category": "others",
    "video": "https://youtu.be/V-kfyMIHYQw?si=dNTAJpxaa9dlLF0J",
    "predicted": 98.0
  },
  {
    "type": "Brilliant",
    "unit": "드림유닛",
    "units": [
      "드림유닛"
    ],
    "title": "セツナDrops",
    "titleKo": "찰나 Drops",
    "titleKoReading": "세츠나 드롭스",
    "totalNotes": 91,
    "duration": "2:32",
    "etStart": 53,
    "etEnd": 82,
    "measured": 53,
    "category": "others",
    "video": "https://youtu.be/Dy_Urf3pbwo?si=m1LYuI1XcJdOBMmW",
    "predicted": 52.0
  },
  {
    "type": "Brilliant",
    "unit": "드림유닛",
    "units": [
      "드림유닛"
    ],
    "title": "LOCK YOUR GAZE",
    "titleKo": "LOCK YOUR GAZE",
    "titleKoReading": "락 유어 게이즈",
    "totalNotes": 157,
    "duration": "2:09",
    "etStart": 35,
    "etEnd": 62,
    "measured": 77,
    "category": "others",
    "video": "https://youtu.be/p7d6v93yPVc",
    "predicted": 84.0
  },
  {
    "type": "Sparkle",
    "unit": "만우절",
    "units": [
      "만우절"
    ],
    "title": "あんさんぶる体操!!",
    "titleKo": "앙상블 체조!!",
    "titleKoReading": null,
    "totalNotes": 176,
    "duration": "2:51",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 96.0
  },
  {
    "type": "Glitter",
    "unit": "셔플",
    "units": [
      "셔플"
    ],
    "title": "에투제",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 151,
    "duration": "2:30",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 82.0
  },
  {
    "type": "All",
    "unit": "주년",
    "units": [
      "주년"
    ],
    "title": "Walk with your smile",
    "titleKo": "Walk with your smile",
    "titleKoReading": "워크 위드 유어 스마일 5주년",
    "totalNotes": 103,
    "duration": "2:00",
    "etStart": 57,
    "etEnd": 82,
    "measured": 57,
    "category": "others",
    "video": "https://youtu.be/WbBI2QjyTrk?si=HXwT_0D2eFAChgc_",
    "predicted": 58.0
  },
  {
    "type": "Brilliant",
    "unit": "셔플",
    "units": [
      "셔플"
    ],
    "title": "Midnight Butlers",
    "titleKo": "Midnight Butlers",
    "titleKoReading": "미드나이트 버틀러즈",
    "totalNotes": 141,
    "duration": "2:05",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 77.0
  },
  {
    "type": "Glitter",
    "unit": "셔플",
    "units": [
      "셔플"
    ],
    "title": "블랑코",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 98,
    "duration": "2:09",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 54.0
  },
  {
    "type": "All",
    "unit": "새해",
    "units": [
      "새해"
    ],
    "title": "年越しあんさんぶる！！2020→2021",
    "titleKo": "새해맞이 앙상블!! 2020→2021",
    "titleKoReading": null,
    "totalNotes": 210,
    "duration": "3:19",
    "etStart": 100,
    "etEnd": 117,
    "measured": 109,
    "category": "others",
    "video": "https://youtu.be/RqGC-mI6A8k?si=CT-UaETRgT9WQEZU",
    "predicted": 113.0
  },
  {
    "type": "Sparkle",
    "unit": "만우절",
    "units": [
      "만우절"
    ],
    "title": "エンドレスヴィーデ",
    "titleKo": "엔들리스 뷔데",
    "titleKoReading": null,
    "totalNotes": 132,
    "duration": "2:31",
    "etStart": 0,
    "etEnd": 0,
    "measured": 67,
    "category": "others",
    "video": "https://youtu.be/1NfFzQ6ipzA?si=qp2-tsTyzkyuAQc7",
    "predicted": 72.0
  },
  {
    "type": "All",
    "unit": "주년",
    "units": [
      "주년"
    ],
    "title": "Walk with your smile (Acoustic Ver.)",
    "titleKo": "Walk with your smile (Acoustic Ver.)",
    "titleKoReading": "워크 위드 유어 스마일 어쿠스틱",
    "totalNotes": 167,
    "duration": "3:04",
    "etStart": 0,
    "etEnd": 0,
    "measured": 89,
    "category": "others",
    "video": "https://youtu.be/kPruu3fcEZI?si=aLbN4tkSZLsuwiuZ",
    "predicted": 91.0
  },
  {
    "type": "All",
    "unit": "주년",
    "units": [
      "주년"
    ],
    "title": "FUSIONIC STARS!!",
    "titleKo": "FUSIONIC STARS!!",
    "titleKoReading": "퓨저닉 스타즈 6주년",
    "totalNotes": 214,
    "duration": "2:46",
    "etStart": 111,
    "etEnd": 145,
    "measured": 111,
    "category": "others",
    "video": "https://youtu.be/2MkdWOiUKpQ?si=QlnzDnryT0IQN5Uq",
    "predicted": 116.0
  },
  {
    "type": "Brilliant",
    "unit": "셔플",
    "units": [
      "셔플"
    ],
    "title": "Aisle, be with you",
    "titleKo": "Aisle, be with you",
    "titleKoReading": "아일 비 위드 유 링어벨",
    "totalNotes": 169,
    "duration": "2:39",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 92.0
  },
  {
    "type": "Glitter",
    "unit": "셔플",
    "units": [
      "셔플"
    ],
    "title": "문라디",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 146,
    "duration": "2:15",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 79.0
  },
  {
    "type": "Glitter",
    "unit": "셔플",
    "units": [
      "셔플"
    ],
    "title": "Noir Neige (흑설)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 166,
    "duration": "2:42",
    "etStart": 38,
    "etEnd": 56,
    "measured": 86,
    "category": "others",
    "video": "https://youtu.be/Um2Snuz-uy4?si=ocerjGdxYoFGCTk5",
    "predicted": 88.0
  },
  {
    "type": "All",
    "unit": "새해",
    "units": [
      "새해"
    ],
    "title": "年越しあんさんぶる！！2021→2022",
    "titleKo": "새해맞이 앙상블!! 2021→2022",
    "titleKoReading": null,
    "totalNotes": 210,
    "duration": "3:25",
    "etStart": 135,
    "etEnd": 152,
    "measured": 103,
    "category": "others",
    "video": "https://youtu.be/uFvTZ6udsRs?si=v1IplzAPa8F8PCYE",
    "predicted": 114.0
  },
  {
    "type": "All",
    "unit": "기타",
    "units": [
      "기타"
    ],
    "title": "Life is so Dramatic!!",
    "titleKo": "Life is so Dramatic!!",
    "titleKoReading": "라이프 이즈 소 드라마틱 극장판",
    "totalNotes": 194,
    "duration": "2:46",
    "etStart": 0,
    "etEnd": 0,
    "measured": 100,
    "category": "others",
    "video": "https://youtu.be/tLhUaM7Y-c8?si=E8ZTd9s2Th_nqxzU",
    "predicted": 105.0
  },
  {
    "type": "All",
    "unit": "만우절",
    "units": [
      "만우절"
    ],
    "title": "BUKUBU NEW STARS!!",
    "titleKo": "BUKUBU NEW STARS!!",
    "titleKoReading": "부쿠부 뉴 스타즈 만우절",
    "totalNotes": 160,
    "duration": "2:11",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 87.0
  },
  {
    "type": "Sparkle",
    "unit": "셔플",
    "units": [
      "셔플"
    ],
    "title": "パラダイム・リバーシ！",
    "titleKo": "패러다임 ・ 리버시!",
    "titleKoReading": null,
    "totalNotes": 161,
    "duration": "2:29",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 87.0
  },
  {
    "type": "All",
    "unit": "주년",
    "units": [
      "주년"
    ],
    "title": "Surprising Thanks!!",
    "titleKo": "Surprising Thanks!!",
    "titleKoReading": "서프라이징 땡스 7주년",
    "totalNotes": 159,
    "duration": "2:28",
    "etStart": 122,
    "etEnd": 147,
    "measured": 91,
    "category": "others",
    "video": "https://youtu.be/N7I7l6fLAlE?si=slYdJjtLp6zNwFix",
    "predicted": 88.0
  },
  {
    "type": "Sparkle",
    "unit": "셔플",
    "units": [
      "셔플"
    ],
    "title": "FIST OF SOUL",
    "titleKo": "FIST OF SOUL",
    "titleKoReading": "피스트 오브 소울",
    "totalNotes": 176,
    "duration": "2:41",
    "etStart": 137,
    "etEnd": 155,
    "measured": 104,
    "category": "others",
    "video": "https://youtu.be/wOKpdmTdyRY?si=C8lbXFln5FVuq5jz",
    "predicted": 97.0
  },
  {
    "type": "Sparkle",
    "unit": "셔플",
    "units": [
      "셔플"
    ],
    "title": "Heart aid Cafeteria",
    "titleKo": "Heart aid Cafeteria",
    "titleKoReading": "하트 에이드 카페테리아",
    "totalNotes": 142,
    "duration": "2:42",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 77.0
  },
  {
    "type": "Flash",
    "unit": "셔플",
    "units": [
      "셔플"
    ],
    "title": "Have you been naughty or nice?",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 218,
    "duration": "2:24",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 118.0
  },
  {
    "type": "All",
    "unit": "새해",
    "units": [
      "새해"
    ],
    "title": "年越しあんさんぶる！！2022→2023",
    "titleKo": "새해맞이 앙상블!! 2022→2023",
    "titleKoReading": null,
    "totalNotes": 253,
    "duration": "3:40",
    "etStart": 187,
    "etEnd": 206,
    "measured": 129,
    "category": "others",
    "video": "https://youtu.be/kNPHVS4gDNs?si=uU9tJozm-mDltkhl",
    "predicted": 137.0
  },
  {
    "type": "Brilliant",
    "unit": "만우절",
    "units": [
      "만우절"
    ],
    "title": "앙상블 트레이닝",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 83,
    "duration": "2:51",
    "etStart": 47,
    "etEnd": 67,
    "measured": 47,
    "category": "others",
    "video": "https://youtu.be/Q3pKOW2HvdY?si=VcC52PYzQ8RiFMOy",
    "predicted": 47.0
  },
  {
    "type": "Glitter",
    "unit": "추억",
    "units": [
      "추억"
    ],
    "title": "익센파 Mix",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 175,
    "duration": "2:47",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 95.0
  },
  {
    "type": "Brilliant",
    "unit": "기타",
    "units": [
      "기타"
    ],
    "title": "Twilight Pentagram 팬타그램",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 186,
    "duration": "2:53",
    "etStart": 1,
    "etEnd": 9,
    "measured": 99,
    "category": "others",
    "video": "https://youtu.be/wf5sxYlZIAE?si=xVfs6g8MJQ__faHC",
    "predicted": 97.0
  },
  {
    "type": "Glitter",
    "unit": "기타",
    "units": [
      "기타"
    ],
    "title": "Dawning Angels",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 194,
    "duration": "2:49",
    "etStart": 136,
    "etEnd": 150,
    "measured": 108,
    "category": "others",
    "video": "https://youtu.be/5qLQm9m3tgc?si=YF9UwrPItDDJBVqQ",
    "predicted": 106.0
  },
  {
    "type": "All",
    "unit": "주년",
    "units": [
      "주년"
    ],
    "title": "One with One",
    "titleKo": "One with One",
    "titleKoReading": "원 위드 원 8주년",
    "totalNotes": 208,
    "duration": "2:50",
    "etStart": 0,
    "etEnd": 0,
    "measured": 105,
    "category": "others",
    "video": "https://youtu.be/fywI-2pTEG4?si=CG19aekVbHlyu-oh",
    "predicted": 113.0
  },
  {
    "type": "All",
    "unit": "만우절",
    "units": [
      "만우절"
    ],
    "title": "両片思いの交差点で、君にまた逢いたくて",
    "titleKo": "양방향 짝사랑의 교차점에서, 너와 다시 만나고 싶어서",
    "titleKoReading": null,
    "totalNotes": 131,
    "duration": "2:30",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 71.0
  },
  {
    "type": "All",
    "unit": "주년",
    "units": [
      "주년"
    ],
    "title": "LIMIT BREAK DREAMERS",
    "titleKo": "LIMIT BREAK DREAMERS",
    "titleKoReading": "리밋 브레이크 드리머즈 9주년",
    "totalNotes": 172,
    "duration": "2:53",
    "etStart": 58,
    "etEnd": 69,
    "measured": 89,
    "category": "others",
    "video": "https://youtu.be/YGrLwg4f8Ak?si=_pPbLBs7pjwV0Y6n",
    "predicted": 91.0
  },
  {
    "type": "Sparkle",
    "unit": "셔플",
    "units": [
      "셔플"
    ],
    "title": "Ringing evil phone",
    "titleKo": "Ringing evil phone",
    "titleKoReading": "링잉 이블 폰",
    "totalNotes": 149,
    "duration": "2:50",
    "etStart": 98,
    "etEnd": 123,
    "measured": 89,
    "category": "others",
    "video": "https://youtu.be/sICZ_Yed7PQ?si=dh8SbmUDJSaNOmGu",
    "predicted": 82.0
  },
  {
    "type": "Brilliant",
    "unit": "셔플",
    "units": [
      "셔플"
    ],
    "title": "喪失寓意 -LOST BALLADE-",
    "titleKo": "우의상실 -LOST BALLADE-",
    "titleKoReading": "상실우의 로스트 발라드",
    "totalNotes": 128,
    "duration": "2:33",
    "etStart": 25,
    "etEnd": 41,
    "measured": 69,
    "category": "others",
    "video": "https://youtu.be/XAxsfjzjYy0?si=DPqdp_7JuiPfEuJP",
    "predicted": 67.0
  },
  {
    "type": "All",
    "unit": "콜라보",
    "units": [
      "콜라보"
    ],
    "title": "We Are Light",
    "titleKo": "We Are Light",
    "titleKoReading": "위 어 라이트 에리오스",
    "totalNotes": 199,
    "duration": "2:41",
    "etStart": 0,
    "etEnd": 0,
    "measured": 106,
    "category": "others",
    "video": "https://youtu.be/w1UBqwrN6X4?si=n-d_lJIwTmFNx0IK",
    "predicted": 108.0
  },
  {
    "type": "Flash",
    "unit": "콜라보",
    "units": [
      "콜라보"
    ],
    "title": "퓨전",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 174,
    "duration": "2:27",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 94.0
  },
  {
    "type": "Flash",
    "unit": "콜라보",
    "units": [
      "콜라보"
    ],
    "title": "B100d Hunter 블러드헌터",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 184,
    "duration": "2:29",
    "etStart": 0,
    "etEnd": 0,
    "measured": 98,
    "category": "others",
    "video": "https://youtu.be/VYWclWI1W1g?si=NEk4Szc0tA40feiJ",
    "predicted": 100.0
  },
  {
    "type": "Flash",
    "unit": "셔플",
    "units": [
      "셔플"
    ],
    "title": "타천사",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 158,
    "duration": "2:32",
    "etStart": null,
    "etEnd": null,
    "measured": null,
    "category": "others",
    "video": null,
    "predicted": 86.0
  },
  {
    "type": "All",
    "unit": "주년",
    "units": [
      "주년"
    ],
    "title": "BRIGHTEST STARS!!",
    "titleKo": "BRIGHTEST STARS!!",
    "titleKoReading": "브라이티스트 스타즈 10주년",
    "totalNotes": 188,
    "duration": "2:27",
    "etStart": 56,
    "etEnd": 73,
    "measured": 98,
    "category": "others",
    "video": "https://youtu.be/UqntUWTtpjM?si=C7iAnC2mjPdlK_fg",
    "predicted": 100.0
  },
  {
    "type": "Glitter",
    "unit": "콜라보",
    "units": [
      "콜라보"
    ],
    "title": "세이크리드 루인",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 234,
    "duration": "2:27",
    "etStart": 0,
    "etEnd": 0,
    "measured": 125,
    "category": "others",
    "video": "https://youtu.be/GuYM8DPXMvQ?si=MbjrJ9_U4KuugnEo",
    "predicted": 127.0
  },
  {
    "type": "Flash",
    "unit": "셔플",
    "units": [
      "셔플"
    ],
    "title": "군연지원 (루리마츠리)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 135,
    "duration": "2:42",
    "etStart": 72,
    "etEnd": 130,
    "measured": 72,
    "category": "others",
    "video": "https://youtu.be/jVyJe-QNo44?si=3w-vbS4s22BlxQLk",
    "predicted": 76.0
  },
  {
    "type": "All",
    "unit": "콜라보",
    "units": [
      "콜라보"
    ],
    "title": "RISE STAR'S SPIRITS",
    "titleKo": "RISE STAR'S SPIRITS",
    "titleKoReading": "라이즈 스타즈 스피리츠 에리오스",
    "totalNotes": 215,
    "duration": "2:55",
    "etStart": 0,
    "etEnd": 0,
    "measured": 125,
    "category": "others",
    "video": "https://youtu.be/lGQHOxTyiy0?si=GRG9U3h0cFx6T_z2",
    "predicted": 116.0
  },
  {
    "type": "Flash",
    "unit": "셔플",
    "units": [
      "셔플"
    ],
    "title": "쿠마쿠마 레스큐",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 236,
    "duration": "2:38",
    "etStart": 163,
    "etEnd": 191,
    "measured": 131,
    "category": "others",
    "video": "https://youtu.be/y5kr3aLLFvc?si=TwIgnQh_ArdGINnG",
    "predicted": 128.0
  },
  {
    "type": "Sparkle",
    "unit": "셔플_10주년",
    "units": [
      "셔플_10주년"
    ],
    "title": "僕のウィーク・ポイント",
    "titleKo": "나의 위크 ・ 포인트",
    "titleKoReading": "보쿠노 위크포인트 1번",
    "totalNotes": 111,
    "duration": "2:31",
    "etStart": 72,
    "etEnd": 99,
    "measured": 60,
    "category": "others",
    "video": "https://youtu.be/KFwxsDZRM9A?si=vV2YocFoYiHhLI1-",
    "predicted": 62.0
  },
  {
    "type": "Brilliant",
    "unit": "셔플_10주년",
    "units": [
      "셔플_10주년"
    ],
    "title": "Graceful Punishment",
    "titleKo": "Graceful Punishment",
    "titleKoReading": "그레이스풀 퍼니쉬먼트 5번",
    "totalNotes": 138,
    "duration": "2:28",
    "etStart": 70,
    "etEnd": 84,
    "measured": 75,
    "category": "others",
    "video": "https://youtu.be/NI0Piax6irk?si=2_qHUnhCK70hVJ5b",
    "predicted": 75.0
  },
  {
    "type": "Flash",
    "unit": "셔플_10주년",
    "units": [
      "셔플_10주년"
    ],
    "title": "Deep into you (10번 셔플)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 131,
    "duration": "2:27",
    "etStart": 34,
    "etEnd": 58,
    "measured": 65,
    "category": "others",
    "video": "https://youtu.be/tbQOph7J-8A?si=o4U7l2NqwyPq-Sgf",
    "predicted": 70.0
  },
  {
    "type": "Flash",
    "unit": "셔플_10주년",
    "units": [
      "셔플_10주년"
    ],
    "title": "러뷰&피스 전설 (3번 셔플)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 229,
    "duration": "2:48",
    "etStart": 75,
    "etEnd": 134,
    "measured": 128,
    "category": "others",
    "video": "https://youtu.be/SEvHxWd77Cc?si=EQbbnTxJf4vxs9vT",
    "predicted": 124.0
  },
  {
    "type": "Glitter",
    "unit": "셔플_10주년",
    "units": [
      "셔플_10주년"
    ],
    "title": "Ai$ 아이도루(8번 셔플)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 244,
    "duration": "2:32",
    "etStart": 142,
    "etEnd": 206,
    "measured": 132,
    "category": "others",
    "video": "https://youtu.be/7Yn1DNogFtU?si=OMcESI8CFW0h9Otg",
    "predicted": 133.0
  },
  {
    "type": "Sparkle",
    "unit": "셔플_10주년",
    "units": [
      "셔플_10주년"
    ],
    "title": "It's (k)not lov?",
    "titleKo": "It's (k)not lov?",
    "titleKoReading": "이츠 낫 러브 7번",
    "totalNotes": 131,
    "duration": "2:42",
    "etStart": 56,
    "etEnd": 75,
    "measured": 71,
    "category": "others",
    "video": "https://youtu.be/-6NJnCkHlIg?si=NTyN4CVprzll_j0U",
    "predicted": 71.0
  },
  {
    "type": "Flash",
    "unit": "셔플_10주년",
    "units": [
      "셔플_10주년"
    ],
    "title": "그것은 잔상의 소실점 2번",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 120,
    "duration": "2:39",
    "etStart": 26,
    "etEnd": 43,
    "measured": 66,
    "category": "others",
    "video": "https://youtu.be/PbXpKSAmNoQ?si=ht3jSujYglY6WHcj",
    "predicted": 64.0
  },
  {
    "type": "Sparkle",
    "unit": "Jin & Akiomi",
    "units": [
      "Jin & Akiomi"
    ],
    "title": "ハナニナレ！",
    "titleKo": "꽃이 되어라!",
    "titleKoReading": "하나니나레",
    "totalNotes": 139,
    "duration": "2:21",
    "etStart": 58,
    "etEnd": 83,
    "measured": 76,
    "category": "others",
    "video": "https://youtu.be/-4pHM037Amg?si=Iw9FwIodUw8lZv1G",
    "predicted": 75.0
  },
  {
    "type": "Glitter",
    "unit": "셔플_10주년",
    "units": [
      "셔플_10주년"
    ],
    "title": "9번 셔플",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 128,
    "duration": "2:37",
    "etStart": 61,
    "etEnd": 85,
    "measured": 73,
    "category": "others",
    "video": "https://youtu.be/GNsBVexvaAU?si=NlUnECKI_KsfKwxl",
    "predicted": 70.0
  },
  {
    "type": "Brilliant",
    "unit": "셔플_10주년",
    "units": [
      "셔플_10주년"
    ],
    "title": "Fight is Only Fate (4번 셔플)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 250,
    "duration": "2:39",
    "etStart": 162,
    "etEnd": 191,
    "measured": 132,
    "category": "others",
    "video": "https://youtu.be/pWZPZgVbcMM?si=zpI52u1HqwFY4zgr",
    "predicted": 136.0
  },
  {
    "type": "Sparkle",
    "unit": "셔플_10주년",
    "units": [
      "셔플_10주년"
    ],
    "title": "プロローグのそのあとへ",
    "titleKo": "프롤로그 그 이후에",
    "titleKoReading": "6번",
    "totalNotes": 144,
    "duration": "2:22",
    "etStart": 83,
    "etEnd": 109,
    "measured": 77,
    "category": "others",
    "video": "https://youtu.be/R83wURX7lwA?si=-06ZD0ViXPupk8by",
    "predicted": 79.0
  },
  {
    "type": "Brilliant",
    "unit": "콜라보",
    "units": [
      "콜라보"
    ],
    "title": "오보로(朧)",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 193,
    "duration": "2:11",
    "etStart": 0,
    "etEnd": 0,
    "measured": 104,
    "category": "others",
    "video": "https://youtu.be/_Qnf978dzwo?si=Lf4bo3rkKCNVo8xD",
    "predicted": 105.0
  },
  {
    "type": "All",
    "unit": "주년",
    "units": [
      "주년"
    ],
    "title": "BRIGHTEST STARS!! (Mainstream Megasphere ver.)",
    "titleKo": "BRIGHTEST STARS!! (Mainstream Megasphere ver.)",
    "titleKoReading": "브라이티스트 스타즈 메가스피어",
    "totalNotes": 223,
    "duration": "2:30",
    "etStart": 0,
    "etEnd": 0,
    "measured": 122,
    "category": "others",
    "video": "https://youtu.be/4ViA8nIcIBk?si=gM-dhxmCLVcqFku2",
    "predicted": 121.0
  },
  {
    "type": "Flash",
    "unit": "만우절",
    "units": [
      "만우절"
    ],
    "title": "페르소나 아비스",
    "titleKo": null,
    "titleKoReading": null,
    "totalNotes": 230,
    "duration": "2:37",
    "etStart": 122,
    "etEnd": 111,
    "measured": 122,
    "category": "others",
    "video": "https://youtu.be/xXfJwP6_-2Q",
    "predicted": 123.0
  }
];

const MODEL_PARAMS = {
  "intercept": -3.5209315575781517,
  "coefs": [
    0.5353517201187353,
    -3.4742239846282694,
    9.879014494989024
  ],
  "simpleCoef": 0.5278932445220397,
  "simpleInt": 2.525464136154781,
  "safetyMargin": 10,
  "meanEtStart": 0.4960435767251353,
  "meanEtEnd": 0.6613200950539918,
  "trainSize": 170,
  "r2": 0.9688153472615771,
  "mae": 2.647245228188573
};
