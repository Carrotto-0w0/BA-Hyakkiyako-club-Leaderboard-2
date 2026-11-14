/* =====================================================
   HYAKKIYAKO CLUB — LEADERBOARD DATA

   ไฟล์นี้เก็บ "บอสทั้งหมด" และ "ตารางคะแนน" ของหน้า
   CLUB LEADERBOARD แยกจาก script.js เพื่อให้แก้ไขง่าย

   วิธีเพิ่มข้อมูลบอสใหม่ / บอสที่ยังไม่มีข้อมูล:
   1) เพิ่มตารางคะแนนเป็น const xxxData = [ ... ] (rank/name/score)
      คะแนนที่เป็น "#N/A" จะมีสัญลักษณ์เตือนต่อท้ายชื่ออัตโนมัติ
   2) ไปที่ const bosses ด้านล่างสุด หาบอสที่ต้องการ
      แล้วเปลี่ยน data: null  ->  data: xxxData
   3) ลำดับในอาร์เรย์ bosses = ลำดับการ์ดในหน้าเลือกบอส
      (บอสที่มีข้อมูลจะถูกจัดไว้ด้านบนเสมอ)

   field ของแต่ละบอส:
   - code  : รหัสเรด เช่น "GA35" โชว์เฉพาะหลังกดเข้าไปในหน้าตาราง
             (ว่าง "" ได้ถ้ายังไม่มีหรือไม่ต้องการโชว์)
   - image : รูปในโฟลเดอร์ bosses/ (ว่าง "" ได้ จะโชว์ตัวอักษรแทน)
   - crop  : true = รูปแบบครึ่งตัว/แนวกว้าง ให้ครอปเต็มการ์ด
   - scale : (ไม่ใส่ก็ได้) ขยายรูปในการ์ดให้ใหญ่ขึ้น เช่น 1.2 = ใหญ่ขึ้น 20%
   - color : สีธีมของบอส ใช้กับแสง bloom และกรอบหน้า leaderboard
===================================================== */

const kuroKageData = [

    {
        rank: 1,
        name: "Yayus",
        score: "21"
    },

    {
        rank: 2,
        name: "Polygon363",
        score: "363"
    },

    {
        rank: 3,
        name: "「SH」Messi",
        score: "427"
    },

    {
        rank: 4,
        name: "「SH」DedeMiku",
        score: "486"
    },

    {
        rank: 5,
        name: "「SH」雨息",
        score: "545"
    },

    {
        rank: 6,
        name: "「SH」Yura",
        score: "610"
    },

    {
        rank: 7,
        name: "「SH」Carrotic",
        score: "798"
    },

    {
        rank: 8,
        name: "「SH」Velloz",
        score: "888"
    },

    {
        rank: 9,
        name: "「SH」Keen",
        score: "994"
    },

    {
        rank: 10,
        name: "Derain",
        score: "1029"
    },

    {
        rank: 11,
        name: "แควมวย (Ebimiso)",
        score: "1058"
    },

    {
        rank: 12,
        name: "ⓋFOXSNOW✿࿐",
        score: "1317"
    },

    {
        rank: 13,
        name: "Kargvee",
        score: "1504"
    },

    {
        rank: 14,
        name: "Relax",
        score: "1926"
    },

    {
        rank: 15,
        name: "「SH」nero",
        score: "1993"
    },

    {
        rank: 16,
        name: "「SH」Nahima",
        score: "2169"
    },

    {
        rank: 17,
        name: "Geeao",
        score: "2652"
    },

    {
        rank: 18,
        name: "ไอ๊หยาา",
        score: "2907"
    },

    {
        rank: 19,
        name: "Nezunanda",
        score: "3207"
    },

    {
        rank: 20,
        name: "Vannesith",
        score: "3346"
    },

    {
        rank: 21,
        name: "「SH」SkyRish☆",
        score: "3529"
    },

    {
        rank: 22,
        name: "Demornato",
        score: "3557"
    },

    {
        rank: 23,
        name: "「SH」Lunari",
        score: "4158"
    },

    {
        rank: 24,
        name: "S_Chainzer",
        score: "4298"
    },

    {
        rank: 25,
        name: "「SH」Xyren",
        score: "4488"
    },

    {
        rank: 26,
        name: "j4k4l41238325",
        score: "4662"
    },

    {
        rank: 27,
        name: "NW2M",
        score: "6566"
    },

    {
        rank: 28,
        name: "「SH」Fournier",
        score: "6655"
    },

    {
        rank: 29,
        name: "Rui",
        score: "6901"
    },

    {
        rank: 30,
        name: "Helheim",
        score: "7102"
    },

    {
        rank: 31,
        name: "CallMeGarr",
        score: "7315"
    },

    {
        rank: 32,
        name: "Uncle.POM",
        score: "7529"
    },

    {
        rank: 33,
        name: "kondee",
        score: "7709"
    },

    {
        rank: 34,
        name: "WhoTao",
        score: "8711"
    },

    {
        rank: 35,
        name: "Astra",
        score: "9693"
    },

    {
        rank: 36,
        name: "「SH」Ronaldo",
        score: "10054"
    },

    {
        rank: 37,
        name: "EmptyCup",
        score: "11446"
    },

    {
        rank: 38,
        name: "Mthanh",
        score: "12874"
    },

    {
        rank: 39,
        name: "「SH」Miyuki",
        score: "#N/A"
    },

    {
        rank: 40,
        name: "Kiralya",
        score: "#N/A"
    },

    {
        rank: 41,
        name: "5M0K3>.<",
        score: "#N/A"
    },

    {
        rank: 42,
        name: "ผมหิวข้าว",
        score: "#N/A"
    },

    {
        rank: 43,
        name: "coretta",
        score: "#N/A"
    },

    {
        rank: 44,
        name: "「SH」DiPa",
        score: "#N/A"
    }

];


/* =====================================================
   TA86 — DRUMBARKA DATA
===================================================== */

const ta86Data = [

    {
        rank: 1,
        name: "「SH」Carrotic",
        score: "70"
    },

    {
        rank: 2,
        name: "แควมวย (Ebimiso)",
        score: "345"
    },

    {
        rank: 3,
        name: "Polygon",
        score: "451"
    },

    {
        rank: 4,
        name: "「SH」Keen",
        score: "883"
    },

    {
        rank: 5,
        name: "「SH」nero",
        score: "985"
    },

    {
        rank: 6,
        name: "ไอ๊หยาา",
        score: "987"
    },

    {
        rank: 7,
        name: "「SH」DedeMiku",
        score: "1154"
    },

    {
        rank: 8,
        name: "Derain",
        score: "1294"
    },

    {
        rank: 9,
        name: "セリーン",
        score: "1305"
    },

    {
        rank: 10,
        name: "「SH」Ronaldo",
        score: "1324"
    },

    {
        rank: 11,
        name: "「SH」Lunari",
        score: "1736"
    },

    {
        rank: 12,
        name: "「SH」雨息",
        score: "1942"
    },

    {
        rank: 13,
        name: "Demornato",
        score: "2123"
    },

    {
        rank: 14,
        name: "Astra",
        score: "2309"
    },

    {
        rank: 15,
        name: "Uncle.POM",
        score: "2310"
    },

    {
        rank: 16,
        name: "Geeao",
        score: "2341"
    },

    {
        rank: 17,
        name: "「SH」Yura",
        score: "2706"
    },

    {
        rank: 18,
        name: "Kargvee",
        score: "3161"
    },

    {
        rank: 19,
        name: "「SH」Nahima",
        score: "3295"
    },

    {
        rank: 20,
        name: "S_Chainzer",
        score: "3344"
    },

    {
        rank: 21,
        name: "Vannesith",
        score: "3371"
    },

    {
        rank: 22,
        name: "「SH」DiPa",
        score: "3754"
    },

    {
        rank: 23,
        name: "kondee",
        score: "4028"
    },

    {
        rank: 24,
        name: "Rui",
        score: "4033"
    },

    {
        rank: 25,
        name: "「SH」Velloz",
        score: "4421"
    },

    {
        rank: 26,
        name: "Mthanh",
        score: "4949"
    },

    {
        rank: 27,
        name: "ⓋFOXSNOW✿࿐",
        score: "6403"
    },

    {
        rank: 28,
        name: "Relax",
        score: "7591"
    },

    {
        rank: 29,
        name: "j4k4l41238325",
        score: "7895"
    },

    {
        rank: 30,
        name: "CallMeGarr",
        score: "8815"
    },

    {
        rank: 31,
        name: "NW2M",
        score: "8928"
    },

    {
        rank: 32,
        name: "「SH」Fournier",
        score: "9047"
    },

    {
        rank: 33,
        name: "WhoTao",
        score: "9114"
    },

    {
        rank: 34,
        name: "Nezunanda",
        score: "9248"
    },

    {
        rank: 35,
        name: "「SH」Xyren",
        score: "9269"
    },

    {
        rank: 36,
        name: "「SH」Messi",
        score: "9733"
    },

    {
        rank: 37,
        name: "Yayus",
        score: "11542"
    },

    {
        rank: 38,
        name: "EmptyCup",
        score: "13117"
    },

    {
        rank: 39,
        name: "Helheim",
        score: "20649"
    },

    {
        rank: 40,
        name: "「SH」SkyRish☆",
        score: "#N/A"
    },

    {
        rank: 41,
        name: "「SH」Miyuki",
        score: "#N/A"
    },

    {
        rank: 42,
        name: "Kiralya",
        score: "#N/A"
    },

    {
        rank: 43,
        name: "5M0K3>.<",
        score: "#N/A"
    },

    {
        rank: 44,
        name: "ผมหิวข้าว",
        score: "#N/A"
    },

    {
        rank: 45,
        name: "coretta",
        score: "#N/A"
    }

];

/* =====================================================
   GA34 — WAKAMO DATA
===================================================== */

const ga34Data = [

    {
        rank: 1,
        name: "Polygon",
        score: "126"
    },

    {
        rank: 2,
        name: "「SH」Yura",
        score: "269"
    },

    {
        rank: 3,
        name: "Mthanh",
        score: "366"
    },

    {
        rank: 4,
        name: "「SH」Carrotic",
        score: "433"
    },

    {
        rank: 5,
        name: "「SH」Lunari",
        score: "546"
    },

    {
        rank: 6,
        name: "Derain",
        score: "744"
    },

    {
        rank: 7,
        name: "「SH」DedeMiku",
        score: "834"
    },

    {
        rank: 8,
        name: "セリーン",
        score: "916"
    },

    {
        rank: 9,
        name: "「SH」Velloz",
        score: "1350"
    },

    {
        rank: 10,
        name: "「SH」雨息",
        score: "1469"
    },

    {
        rank: 11,
        name: "「SH」Ronaldo",
        score: "1478"
    },

    {
        rank: 12,
        name: "Rui",
        score: "1696"
    },

    {
        rank: 13,
        name: "Kargvee",
        score: "1766"
    },

    {
        rank: 14,
        name: "แควมวย (Ebimiso)",
        score: "1953"
    },

    {
        rank: 15,
        name: "Demornato",
        score: "2104"
    },

    {
        rank: 16,
        name: "「SH」Messi",
        score: "2204"
    },

    {
        rank: 17,
        name: "「SH」Keen",
        score: "2469"
    },

    {
        rank: 18,
        name: "「SH」nero",
        score: "2609"
    },

    {
        rank: 19,
        name: "Vannesith",
        score: "2661"
    },

    {
        rank: 20,
        name: "Geeao",
        score: "2777"
    },

    {
        rank: 21,
        name: "「SH」Nahima",
        score: "2881"
    },

    {
        rank: 22,
        name: "ไอ๊หยาา",
        score: "3073"
    },

    {
        rank: 23,
        name: "「SH」DiPa",
        score: "3253"
    },

    {
        rank: 24,
        name: "Uncle.POM",
        score: "3376"
    },

    {
        rank: 25,
        name: "S_Chainzer",
        score: "4417"
    },

    {
        rank: 26,
        name: "EmptyCup",
        score: "5779"
    },

    {
        rank: 27,
        name: "WhoTao",
        score: "5861"
    },

    {
        rank: 28,
        name: "j4k4l41238325",
        score: "6282"
    },

    {
        rank: 29,
        name: "Nezunanda",
        score: "6927"
    },

    {
        rank: 30,
        name: "Relax",
        score: "7262"
    },

    {
        rank: 31,
        name: "Astra",
        score: "7637"
    },

    {
        rank: 32,
        name: "ⓋFOXSNOW✿࿐",
        score: "8419"
    },

    {
        rank: 33,
        name: "「SH」Fournier",
        score: "8504"
    },

    {
        rank: 34,
        name: "「SH」Xyren",
        score: "9005"
    },

    {
        rank: 35,
        name: "kondee",
        score: "9311"
    },

    {
        rank: 36,
        name: "「SH」SkyRish☆",
        score: "9411"
    },

    {
        rank: 37,
        name: "CallMeGarr",
        score: "13279"
    },

    {
        rank: 38,
        name: "Helheim",
        score: "26347"
    },

    {
        rank: 39,
        name: "Yayus",
        score: "#N/A"
    },

    {
        rank: 40,
        name: "「SH」Miyuki",
        score: "#N/A"
    },

    {
        rank: 41,
        name: "Kiralya",
        score: "#N/A"
    },

    {
        rank: 42,
        name: "5M0K3>.<",
        score: "#N/A"
    },

    {
        rank: 43,
        name: "ผมหิวข้าว",
        score: "#N/A"
    },

    {
        rank: 44,
        name: "coretta",
        score: "#N/A"
    }

];


/* =====================================================
   GA35 — HOD DATA
===================================================== */

const ga35Data = [

    {
        rank: 1,
        name: "Yayus",
        score: "34"
    },

    {
        rank: 2,
        name: "「SH」雨息",
        score: "243"
    },

    {
        rank: 3,
        name: "「SH」Nahima",
        score: "365"
    },

    {
        rank: 4,
        name: "セリーン",
        score: "442"
    },

    {
        rank: 5,
        name: "Polygon",
        score: "558"
    },

    {
        rank: 6,
        name: "「SH」Lunari",
        score: "601"
    },

    {
        rank: 7,
        name: "S_Chainzer",
        score: "824"
    },

    {
        rank: 8,
        name: "「SH」Messi",
        score: "839"
    },

    {
        rank: 9,
        name: "Vannesith",
        score: "1083"
    },

    {
        rank: 10,
        name: "「SH」DedeMiku",
        score: "1223"
    },

    {
        rank: 11,
        name: "「SH」Yura",
        score: "1263"
    },

    {
        rank: 12,
        name: "Rui",
        score: "1698"
    },

    {
        rank: 13,
        name: "Geeao",
        score: "1754"
    },

    {
        rank: 14,
        name: "「SH」Ronaldo",
        score: "1808"
    },

    {
        rank: 15,
        name: "「SH」Keen",
        score: "2396"
    },

    {
        rank: 16,
        name: "「SH」nero",
        score: "2486"
    },

    {
        rank: 17,
        name: "Mthanh",
        score: "3242"
    },

    {
        rank: 18,
        name: "Demornato",
        score: "3335"
    },

    {
        rank: 19,
        name: "「SH」Velloz",
        score: "3347"
    },

    {
        rank: 20,
        name: "Relax",
        score: "3443"
    },

    {
        rank: 21,
        name: "ⓋFOXSNOW✿࿐",
        score: "3794"
    },

    {
        rank: 22,
        name: "แควมวย (Ebimiso)",
        score: "3804"
    },

    {
        rank: 23,
        name: "WhoTao",
        score: "4001"
    },

    {
        rank: 24,
        name: "ไอ๊หยาา",
        score: "4091"
    },

    {
        rank: 25,
        name: "Derain",
        score: "5016"
    },

    {
        rank: 26,
        name: "「SH」Xyren",
        score: "5406"
    },

    {
        rank: 27,
        name: "「SH」Carrotic",
        score: "5605"
    },

    {
        rank: 28,
        name: "「SH」Fournier",
        score: "5876"
    },

    {
        rank: 29,
        name: "kondee",
        score: "7100"
    },

    {
        rank: 30,
        name: "「SH」DiPa",
        score: "8104"
    },

    {
        rank: 31,
        name: "Helheim",
        score: "8349"
    },

    {
        rank: 32,
        name: "Nezunanda",
        score: "9205"
    },

    {
        rank: 33,
        name: "Astra",
        score: "10862"
    },

    {
        rank: 34,
        name: "EmptyCup",
        score: "14477"
    },

    {
        rank: 35,
        name: "Uncle.POM",
        score: "15614"
    },

    {
        rank: 36,
        name: "CallMeGarr",
        score: "16152"
    },

    {
        rank: 37,
        name: "「SH」SkyRish☆",
        score: "30469"
    },

    {
        rank: 38,
        name: "j4k4l41238325",
        score: "#N/A"
    },

    {
        rank: 39,
        name: "「SH」Miyuki",
        score: "#N/A"
    },

    {
        rank: 40,
        name: "Kiralya",
        score: "#N/A"
    },

    {
        rank: 41,
        name: "5M0K3>.<",
        score: "#N/A"
    },

    {
        rank: 42,
        name: "ผมหิวข้าว",
        score: "#N/A"
    },

    {
        rank: 43,
        name: "coretta",
        score: "#N/A"
    }

];


/* =====================================================
   TA87 — GREGORIUS DATA
===================================================== */

const ta87Data = [

    {
        rank: 1,
        name: "「SH」Carrotic",
        score: "52"
    },

    {
        rank: 2,
        name: "Polygon",
        score: "191"
    },

    {
        rank: 3,
        name: "Yayus",
        score: "225"
    },

    {
        rank: 4,
        name: "セリーン",
        score: "249"
    },

    {
        rank: 5,
        name: "「SH」Nahima",
        score: "364"
    },

    {
        rank: 6,
        name: "「SH」Messi",
        score: "475"
    },

    {
        rank: 7,
        name: "「SH」雨息",
        score: "644"
    },

    {
        rank: 8,
        name: "S_Chainzer",
        score: "646"
    },

    {
        rank: 9,
        name: "「SH」Ronaldo",
        score: "720"
    },

    {
        rank: 10,
        name: "Derain",
        score: "730"
    },

    {
        rank: 11,
        name: "「SH」Lunari",
        score: "760"
    },

    {
        rank: 12,
        name: "Nezunanda",
        score: "797"
    },

    {
        rank: 13,
        name: "แควมวย (Ebimiso)",
        score: "1087"
    },

    {
        rank: 14,
        name: "「SH」DedeMiku",
        score: "1323"
    },

    {
        rank: 15,
        name: "Mthanh",
        score: "1613"
    },

    {
        rank: 16,
        name: "ⓋFOXSNOW✿࿐",
        score: "1627"
    },

    {
        rank: 17,
        name: "「SH」Yura",
        score: "1794"
    },

    {
        rank: 18,
        name: "「SH」DiPa",
        score: "2083"
    },

    {
        rank: 19,
        name: "「SH」nero",
        score: "2205"
    },

    {
        rank: 20,
        name: "「SH」Velloz",
        score: "2531"
    },

    {
        rank: 21,
        name: "Demornato",
        score: "2824"
    },

    {
        rank: 22,
        name: "「SH」Keen",
        score: "2853"
    },

    {
        rank: 23,
        name: "ไอ๊หยาา",
        score: "3278"
    },

    {
        rank: 24,
        name: "Rui",
        score: "3306"
    },

    {
        rank: 25,
        name: "Uncle.POM",
        score: "3325"
    },

    {
        rank: 26,
        name: "Geeao",
        score: "3605"
    },

    {
        rank: 27,
        name: "Vannesith",
        score: "3750"
    },

    {
        rank: 28,
        name: "j4k4l41238325",
        score: "3812"
    },

    {
        rank: 29,
        name: "「SH」Fournier",
        score: "6023"
    },

    {
        rank: 30,
        name: "WhoTao",
        score: "6170"
    },

    {
        rank: 31,
        name: "Astra",
        score: "6782"
    },

    {
        rank: 32,
        name: "kondee",
        score: "6793"
    },

    {
        rank: 33,
        name: "EmptyCup",
        score: "6812"
    },

    {
        rank: 34,
        name: "Kargvee",
        score: "7207"
    },

    {
        rank: 35,
        name: "「SH」SkyRish☆",
        score: "8468"
    },

    {
        rank: 36,
        name: "「SH」Xyren",
        score: "8623"
    },

    {
        rank: 37,
        name: "Helheim",
        score: "9203"
    },

    {
        rank: 38,
        name: "Relax",
        score: "10132"
    },

    {
        rank: 39,
        name: "CallMeGarr",
        score: "10781"
    },

    {
        rank: 40,
        name: "「SH」Miyuki",
        score: "#N/A"
    },

    {
        rank: 41,
        name: "Kiralya",
        score: "#N/A"
    },

    {
        rank: 42,
        name: "5M0K3>.<",
        score: "#N/A"
    },

    {
        rank: 43,
        name: "ผมหิวข้าว",
        score: "#N/A"
    },

    {
        rank: 44,
        name: "coretta",
        score: "#N/A"
    }

];


/* =====================================================
   BOSSES — รายชื่อบอสในหน้าเลือกบอส
===================================================== */

const bosses = [

    {
        id: "gregorius",
        code: "TA87",
        name: "GREGORIUS",
        image: "bosses/gregorius.webp",
        crop: false,
        color: "#5f86ff",
        data: ta87Data
    },

    {
        id: "hod",
        code: "GA35",
        name: "HOD",
        image: "bosses/hod.webp",
        crop: false,
        color: "#ffa53f",
        data: ga35Data
    },

    {
        id: "wakamo",
        code: "GA34",
        name: "WAKAMO",
        image: "bosses/wakamo.webp",
        crop: true,
        color: "#c08cff",
        data: ga34Data
    },

    {
        id: "drumbarka",
        code: "TA86",
        name: "DRUMBARKA",
        image: "bosses/drumbarka.webp",
        crop: true,
        color: "#3fd8c4",
        data: ta86Data
    },

    {
        id: "kurokage",
        code: "GA33",
        name: "KUROKAGE",
        image: "bosses/kurokage.webp",
        crop: true,
        color: "#ff3d6a",
        data: kuroKageData
    },

    {
        id: "kaiten",
        code: "",
        name: "KAITEN",
        image: "bosses/kaiten.webp",
        crop: true,
        color: "#ff5a4d",
        data: null
    },

    {
        id: "binah",
        code: "",
        name: "BINAH",
        image: "bosses/binah.webp",
        crop: false,
        color: "#ffc23d",
        data: null
    },

    {
        id: "chesed",
        code: "",
        name: "CHESED",
        image: "bosses/chesed.webp",
        crop: false,
        color: "#ffe08a",
        data: null
    },

    {
        id: "geburah",
        code: "",
        name: "GEBURAH",
        image: "bosses/geburah.webp",
        crop: false,
        color: "#ff7043",
        data: null
    },

    {
        id: "goz",
        code: "",
        name: "GOZ",
        image: "bosses/goz.webp",
        crop: false,
        color: "#6fb6d6",
        data: null
    },

    {
        id: "hieronymus",
        code: "",
        name: "HIERONYMUS",
        image: "bosses/hieronymus.webp",
        crop: false,
        color: "#e0583a",
        data: null
    },

    {
        id: "perorodzilla",
        code: "",
        name: "PERORODZILLA",
        image: "bosses/perorodzilla.webp",
        crop: true,
        color: "#9fe6ff",
        data: null
    },

    {
        id: "shiro-kuro",
        code: "",
        name: "SHIRO & KURO",
        image: "bosses/shiro-kuro.webp",
        crop: false,
        color: "#a9b8d8",
        data: null
    },

    {
        id: "yesod",
        code: "",
        name: "YESOD",
        image: "bosses/yesod.webp",
        crop: false,
        color: "#ff9f6b",
        data: null
    }

];
