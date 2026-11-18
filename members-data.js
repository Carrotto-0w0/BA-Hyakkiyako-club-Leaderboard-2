/* =====================================================
   HYAKKIYAKO CLUB — MEMBER DATA

   ไฟล์นี้แยกออกมาต่างหาก เพื่อให้แก้ไข "รูปสมาชิก"
   หรือเพิ่ม/แก้ "Info" ได้ง่าย โดยไม่ต้องไปยุ่งกับ
   script.js เลย

   วิธีแก้ไข:
   - image      = ชื่อไฟล์รูปหลัก (โชว์ตลอด) อยู่ในโฟลเดอร์ members/
   - imageAlt   = (ใช้เฉพาะ Leader / Manager) รูปที่จะโชว์
                  แทนตอนกดปุ่ม "i" เพื่อดู Info
                  ถ้าไม่มีรูปที่ 2 ให้ปล่อยเป็น "" ไว้
   - info       = ข้อความ Info ใต้ชื่อ (กดปุ่ม "i" เพื่อดู)
                  ถ้ายังไม่มี Info ให้ใส่ "" ไว้ก่อน
                  (ระบบจะไม่โชว์ปุ่ม "i" ให้อัตโนมัติ)

   เพิ่มสมาชิกใหม่: copy ทั้งก้อน { ... } แล้ววางต่อท้าย
   ใน clubMembers array ด้านล่าง พร้อมเปลี่ยนชื่อ/ไฟล์รูป
===================================================== */

const clubLeader = {
    name: "Nahima",
    image: "members/Nahima1.webp",
    imageAlt: "members/Nahima2.webp",
    info: "Our hardworking and extraordinary club leader — yet so adorable when teased."
};


const clubManagers = [

    {
        name: "Carrot",
        image: "members/Carrot1.webp",
        imageAlt: "members/Carrot2.webp",
        info: "Supa-slacc manager, F2P, and admires Nahima a lot."
    },

    {
        name: "Serene",
        image: "members/Serene1.webp",
        imageAlt: "members/Serene2.webp",
        info: "Nahima's right-hand man, highly reliable raids consultant."
    }

];


const clubMembers = [

    {
        name: "Yayus",
        image: "members/Yayus.webp",
        imageAlt: "",
        info: "Mighty Raid Fighter."
    },

    {
        name: "Polygon",
        image: "members/Polygon.webp",
        imageAlt: "",
        info: "Raids consultant, strong Raid Fighter."
    },

    {
        name: "Velloz",
        image: "members/Velloz.webp",
        imageAlt: "",
        info: "Strong Raid Fighter."
    },

    {
        name: "Yura",
        image: "members/Yura.webp",
        imageAlt: "",
        info: "Strong Raid Fighter."
    },

    {
        name: "Fui",
        image: "members/Fui.webp",
        imageAlt: "",
        info: "Top streak Izuna dabber."
    },

    {
        name: "Relax",
        image: "members/Relax.webp",
        imageAlt: "",
        info: "Raid Fighter."
    },

    {
        name: "Mthanh",
        image: "members/Mthanh.webp",
        imageAlt: "",
        info: "Club Pianist."
    },

    {
        name: "雨息",
        image: "members/雨息.webp",
        imageAlt: "",
        info: "Raid Fighter."
    },

    {
        name: "Demonarto",
        image: "members/Demonnarto.webp",
        imageAlt: "",
        info: "The elite and all mighty Raid Fighter of the club. Competitive hard carry, and owner of a barbershop who only knows the bald haircut. Can finish the raid blindfolded — only bad gacha can limit his unlimited power."
    },

    {
        name: "Vannesith",
        image: "members/Vannesith1.webp",
        imageAlt: "members/Vannesith2.webp",
        info: "Niche student? Goat ammi! Geburah? Nah!! Child? Im in!!!"
    },

    {
        name: "Foxsnow",
        image: "members/Foxsnow.webp",
        imageAlt: "",
        info: "Vannesith's art slave."
    },

    {
        name: "NW2M",
        image: "members/NW2M.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "Messi",
        image: "members/Messi.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "Keen",
        image: "members/Keen.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "Domtood",
        image: "members/Domtood.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "Geeao",
        image: "members/Geeao.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "Rui",
        image: "members/Rui.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "Derain",
        image: "members/Derain.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "Xyren",
        image: "members/Xyren.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "Helheim",
        image: "members/Helheim.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "SkyRish",
        image: "members/SkyRish.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "Jakala",
        image: "members/Jakala.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "EmptyCup",
        image: "members/EmptyCup.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "Chainzer",
        image: "members/Chainzer.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "Astra",
        image: "members/Astra.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "DiPa",
        image: "members/DiPa.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "Nero",
        image: "members/Nero.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "Nezunanda",
        image: "members/Nezunanda.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "UnclePom",
        image: "members/UnclePom.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "Kondee",
        image: "members/Kondee.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "WhoTao",
        image: "members/WhoTao.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "Fournier",
        image: "members/Fournier.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "Ayaya",
        image: "members/Ayaya.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "Kargvee",
        image: "members/Kargvee.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "JustCasual",
        image: "members/JustCasual.webp",
        imageAlt: "",
        info: ""
    },

    {
        name: "DedeMiku",
        image: "members/DedeMiku.webp",
        imageAlt: "",
        info: ""
    }

];
