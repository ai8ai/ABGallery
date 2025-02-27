// Category
import { CatInterface, Cat2SubMap } from '@/config/type';
import { genGifList, genJpgList } from '@/utils/genImageList'

export const HomeList: CatInterface[] = [
    { id: "abycc", title: "Yang Chenchen \n Yome Sugar 杨晨晨", shorttitle: "Yang Chenchen", cover: genJpgList("abcat/ycc/yc", 5)[0] },
    { id: "absyz", title: "Son Yoon Joo \n 손윤주 孙允珠", shorttitle: "Son Yoon Joo", cover: genJpgList("abcat/syz/sc", 5)[0] },
    { id: "absuren", title: "Girl Next Door \n shirouto素人しろうと", shorttitle: "Girl Next Door", cover: genJpgList("abcat/suren/sc", 5)[0] },
    { id: "igif", title: "GIF MP4", shorttitle: "GIF", cover: genGifList("aicat/gif/gc", 5)[0] },
    { id: "abwxy", title: "Wang Xinyao \n Yanni 王馨瑶", shorttitle: "Wang Xinyao", cover: genJpgList("abcat/wxy/wc", 5)[0] },
    { id: "abkele", title: "Kele Vicky", shorttitle: "Kele Vicky", cover: genJpgList("abcat/kele/kc", 5)[0] },
    { id: "abanran", title: "Anran 安然", shorttitle: "Anran", cover: genJpgList("abcat/anran/ac", 5)[0] },
    { id: "abxlz", title: "Xu Lizhi Booty \n 徐莉芝", shorttitle: "Xu Lizhi", cover: genJpgList("abcat/xlz/xc", 5)[0] },
    { id: "abccc", title: "Cheng Chengcheng 程程程", shorttitle: "Cheng Chengcheng", cover: genJpgList("abcat/ccc/cc", 5)[0] },
    { id: "abdxy", title: "Du Xiaoyu 杜小雨", shorttitle: "Du Xiaoyu", cover: genJpgList("abcat/dxy/dc", 5)[0] },
    { id: "ablxl", title: "Lin Xinglan 林星阑", shorttitle: "Lin Xinglan", cover: genJpgList("abcat/lxl/lc", 5)[0] },
    { id: "abcel", title: "Celebrities", shorttitle: "Celebrities", cover: genJpgList("abcat/cel/cc", 5)[0] },
    { id: "abholiday", title: "Holidays", shorttitle: "Holidays", cover: genJpgList("abcat/holiday/hc", 5)[0] },
    { id: "abspecialtaste", title: "Special Taste", shorttitle: "Special Taste", cover: genJpgList("abcat/special/sc", 5)[0] },
    { id: "absketch", title: "Sketch & Hand-drawing", shorttitle: "Sketch & Hand-drawing", cover: genJpgList("abcat/sketch/sc", 5)[0] },
    { id: "isce", title: "Asian Scene", shorttitle: "Asican Scene", cover: genJpgList("aicat/scene/sc", 5)[0] },
];

export const Cat2Sub2Img: Cat2SubMap = {
    abycc: [
        { id: "YCCyf1", title: "Daily Fresh & Hot Trends", count: "20", key: "ycc", cover: genJpgList("abycc/ycc/yf", 5)[0] },
        { id: "YCCPure", title: "Angelically Innocent", count: "30", key: "pure", cover: genJpgList("abycc/pure/pu", 5)[0] },
        { id: "YCCSpa", title: "Sultry Spaghetti Straps", count: "40", key: "spaghetti", cover: genJpgList("abycc/spaghetti/sp", 5)[0] },
        { id: "YCCChe", title: "Elegant in Cheongsam", count: "50", key: "cheongsam", cover: genJpgList("abycc/cheongsam/ch", 5)[0] },
        { id: "YCCStr", title: "Bare & Beautiful & Strapless", count: "40", key: "strapless", cover: genJpgList("abycc/strapless/st", 5)[0] },
        { id: "YCCBed", title: "Cozy & Seductive Moments in Bed", count: "30", key: "bedbathsofa", cover: genJpgList("abycc/bedbathsofa/be", 5)[0] },
        { id: "YCCSeq", title: "Dazzling in Sequins", count: "40", key: "sequins", cover: genJpgList("abycc/sequins/se", 5)[0] },
        { id: "YCCBlue", title: "Mystic in Blue", count: "50", key: "blue", cover: genJpgList("abycc/blue/bl", 5)[0] },
        { id: "YCCFlo", title: "Flirty Floral Charms", count: "60", key: "floralskirt", cover: genJpgList("abycc/floralskirt/fl", 5)[0] },
        { id: "YCCGlass", title: "Sensual in Glasses", count: "30", key: "glass", cover: genJpgList("abycc/glass/gl", 5)[0] },
        { id: "YCCGreen", title: "Enchanting in Green", count: "60", key: "green", cover: genJpgList("abycc/green/gr", 5)[0] },
        { id: "YCCDenim", title: "Casual Chic in Denim", count: "50", key: "demins", cover: genJpgList("abycc/demins/de", 5)[0] },
        { id: "YCCPink", title: "Pretty in Pink", count: "20", key: "pinkgirl", cover: genJpgList("abycc/pinkgirl/pi", 5)[0] },
        { id: "YCCCos", title: "Fantasy & Cosplay Queens", count: "40", key: "cosplay", cover: genJpgList("abycc/cosplay/co", 5)[0] },
    ],


    absyz: [
        { id: "SYZStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning", cover: genJpgList("absyz/stunning/st", 5)[0] },
        { id: "SYZBed", title: "Cozy & Seductive Moments", count: "10", key: "bbs", cover: genJpgList("absyz/bbs/be", 5)[0] },
        { id: "SYZDeco", title: "Sublime Décolleté", count: "10", key: "decollete", cover: genJpgList("absyz/decollete/de", 5)[0] },
        { id: "SYZFlo", title: "Flirty Floral Charms", count: "10", key: "floral", cover: genJpgList("absyz/floral/fl", 5)[0] },
        { id: "SYZLace", title: "Timeless Grace in Silk & Lace", count: "10", key: "lace", cover: genJpgList("absyz/lace/la", 5)[0] },
        { id: "SYZOne", title: "Fantasy & Queens", count: "10", key: "oneshoulder", cover: genJpgList("absyz/oneshoulder/on", 5)[0] },
        { id: "SYZOff", title: "Chic at Work", count: "10", key: "office", cover: genJpgList("absyz/office/of", 5)[0] },
        { id: "SYZSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spaghetti", cover: genJpgList("absyz/spaghetti/sp", 5)[0] },
        { id: "SYZStr", title: "Bare & Beautiful", count: "10", key: "strapless", cover: genJpgList("absyz/strapless/st", 5)[0] },
    ],



    abwxy: [
        { id: "wxyStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning", cover: genJpgList("abwxy/stunning/st", 5)[0] },
        { id: "wxyBar", title: "Night Life", count: "10", key: "bar", cover: genJpgList("abwxy/bar/ba", 5)[0] },
        { id: "wxyBed", title: "Cozy & Seductive Moments", count: "10", key: "bbs", cover: genJpgList("abwxy/bbs/be", 5)[0] },
        { id: "wxyChe", title: "Elegant in Cheongsam", count: "10", key: "cheongsam", cover: genJpgList("abwxy/cheongsam/ch", 5)[0] },
        { id: "wxyCro", title: "Sassy in Croptops", count: "10", key: "croptop", cover: genJpgList("abwxy/croptop/cr", 5)[0] },
        { id: "wxyDeco", title: "Sublime Décolleté", count: "10", key: "decollete", cover: genJpgList("abwxy/decollete/de", 5)[0] },
        { id: "wxyFormal", title: "Enchanting in Business", count: "10", key: "formal", cover: genJpgList("abwxy/formal/fo", 5)[0] },
        { id: "wxyHalt", title: "Allure en Halter", count: "10", key: "haltertop", cover: genJpgList("abwxy/haltertop/ha", 5)[0] },
        { id: "wxyLace", title: "Timeless Grace in Silk & Lace", count: "10", key: "lace", cover: genJpgList("abwxy/lace/la", 5)[0] },
        { id: "wxyNight", title: "Nocturne in New York", count: "10", key: "nightnewyork", cover: genJpgList("abwxy/nightnewyork/ni", 5)[0] },
        { id: "wxyOff", title: "Chic at Work", count: "10", key: "office", cover: genJpgList("abwxy/office/of", 5)[0] },
        { id: "wxyOut", title: "Breeze & Beyond", count: "10", key: "outdoor", cover: genJpgList("abwxy/outdoor/ou", 5)[0] },
        { id: "wxyPants", title: "Chic in Motion", count: "10", key: "pants", cover: genJpgList("abwxy/pants/pa", 5)[0] },
        { id: "wxySee", title: "Seethrough ...", count: "10", key: "seethrough", cover: genJpgList("abwxy/seethrough/se", 5)[0] },
        { id: "wxySpa", title: "Sultry Spaghetti Straps", count: "40", key: "spaghetti", cover: genJpgList("abwxy/spaghetti/sp", 5)[0] },
        { id: "wxyUni", title: "Mystic in Uniform", count: "10", key: "uniform", cover: genJpgList("abwxy/uniform/un", 5)[0] },
    ],

    abccc: [
        { id: "cccStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning", cover: genJpgList("abccc/stunning/st", 5)[0] },
        { id: "cccBBS", title: "Cozy & Seductive Moments", count: "10", key: "bbs", cover: genJpgList("abccc/bbs/ba", 5)[0] },
        { id: "cccBri", title: "Briliant ...", count: "10", key: "briliant", cover: genJpgList("abccc/briliant/br", 5)[0] },
        { id: "cccSexy", title: "Sultry", count: "10", key: "sexy", cover: genJpgList("abccc/sexy/se", 5)[0] },
        { id: "cccStr", title: "Bare & Beautiful", count: "10", key: "strapless", cover: genJpgList("abccc/strapless/st", 5)[0] },
    ],

    abdxy: [
        { id: "dxyViolet", title: "Daily Fresh & Hot Trends", count: "10", key: "violet", cover: genJpgList("abdxy/violet/vi", 5)[0] },
        { id: "dxyGreen", title: "Cozy & Seductive Moments", count: "10", key: "green", cover: genJpgList("abdxy/green/gr", 5)[0] },
        { id: "dxyPink", title: "Briliant Pinkcount", count: "10", key: "pink", cover: genJpgList("abdxy/pink/pi", 5)[0] },
    ],

    abkele: [
        { id: "kelBed", title: "Cozy & Seductive Moments", count: "40", key: "bbs", cover: genJpgList("abkele/bbs/ba", 5)[0] },
        { id: "kelBlackSilk", title: "Timeless Grace in Silk & Lace", count: "20", key: "blacksilk", cover: genJpgList("abkele/blacksilk/bl", 5)[0] },
        { id: "kelChe", title: "Elegant in Cheongsam", count: "30", key: "cheongsam", cover: genJpgList("abkele/cheongsam/ch", 5)[0] },
        { id: "kelFlo", title: "Flirty Floral Charms", count: "20", key: "floral", cover: genJpgList("abkele/floral/fl", 5)[0] },
        { id: "kelHome", title: "Cozy Chic & Homely Elegance", count: "30", key: "home", cover: genJpgList("abkele/home/ho", 5)[0] },
        { id: "kelLeg", title: "Bare & Beautiful Legs", count: "20", key: "leg", cover: genJpgList("abkele/leg/le", 5)[0] },
        { id: "kelOff", title: "Chic at Work", count: "30", key: "office", cover: genJpgList("abkele/office/of", 5)[0] },
        { id: "kelSofa", title: "Sofa Soft", count: "40", key: "sofa", cover: genJpgList("abkele/sofa/so", 5)[0] },
        { id: "kelSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spaghetti", cover: genJpgList("abkele/spegatti/sp", 5)[0] },
        { id: "kelSto", title: "Silken Allure & Enchanting Legs", count: "20", key: "stockings", cover: genJpgList("abkele/stockings/st", 5)[0] },
        { id: "kelStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning", cover: genJpgList("abkele/stunning/st", 5)[0] },
    ],
    

    ablxl: [
        { id: "lxlBed", title: "Cozy & Seductive Moments", count: "10", key: "bedbathsofa", cover: genJpgList("ablxl/bedbathsofa/be", 5)[0] },
        { id: "lxlChe", title: "Elegant in Cheongsam", count: "10", key: "cheongsam", cover: genJpgList("ablxl/cheongsam/ch", 5)[0] },
        { id: "lxlDeco", title: "Sublime Décolleté", count: "10", key: "deco", cover: genJpgList("ablxl/deco/de", 5)[0] },
        { id: "lxlFish", title: "Daily Fresh & Hot Trends", count: "10", key: "fishdress", cover: genJpgList("ablxl/fishdress/fi", 5)[0] },
        { id: "lxlOff", title: "Chic at Work", count: "10", key: "office", cover: genJpgList("ablxl/office/of", 5)[0] },
        { id: "lxlPen", title: "Seductive Pencil", count: "10", key: "pencilskirt", cover: genJpgList("ablxl/pencilskirt/pe", 5)[0] },
        { id: "lxlSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spaghetti", cover: genJpgList("ablxl/spaghetti/sp", 5)[0] },
        { id: "lxlStr", title: "Bare & Beautiful", count: "10", key: "strapless", cover: genJpgList("ablxl/strapless/st", 5)[0] },
        { id: "lxlTeacher", title: "Enchanting in Teaching", count: "10", key: "teacher", cover: genJpgList("ablxl/teacher/te", 5)[0] },
    ],

    abspecialtaste: [
        { id: "speStunning", title: "Daily Fresh & Hot Trends", key: "stunning", cover: genJpgList("abspecialtaste/stunning/st", 5)[0] },
        { id: "speBack", title: "Elegance from Behind", key: "back", cover: genJpgList("abspecialtaste/back/ba", 5)[0] },
        { id: "speButt", title: "Curves & Confidence", key: "butt", cover: genJpgList("abspecialtaste/butt/bu", 5)[0] },
        { id: "speFinger", title: "Graceful Fingertips", key: "finger", cover: genJpgList("abspecialtaste/finger/fi", 5)[0] },
        { id: "speLeg", title: "Poise in Every Step", key: "legfeet", cover: genJpgList("abspecialtaste/legfeet/le", 5)[0] },
    ],

    abholiday: [
        { id: "holLuneryear", title: "Chinese New Year", key: "luneryear", cover: genJpgList("abholiday/luneryear/lu", 5)[0] },
        { id: "holDeco", title: "Sublime Décolleté", key: "deco", cover: genJpgList("abholiday/deco/de", 5)[0] },
        { id: "holWal", title: "Elegant Wallpaper", key: "wallpaper", cover: genJpgList("abholiday/wallpaper/wa", 5)[0] },
    ],

    abanran: [
        { id: "anrStunning", title: "Daily Fresh & Hot Trends", key: "stunning", cover: genJpgList("abanran/stunning/st", 5)[0] },
        { id: "anrSto", title: "Silken Allure & Enchanting Legs", key: "stockings", cover: genJpgList("abanran/stockings/st", 5)[0] },
        { id: "anrOff", title: "Chic at Work", key: "office", cover: genJpgList("abanran/office/of", 5)[0] },
        { id: "anrHotel", title: "Luxe Escapes & Midnight Whispers", key: "hotel", cover: genJpgList("abanran/hotel/ho", 5)[0] },
        { id: "anrDenim", title: "Casual Chic in Denim", key: "denims", cover: genJpgList("abanran/demins/de", 5)[0] },
        { id: "anrClass", title: "Enchanting in Class", key: "classroom", cover: genJpgList("abanran/classroom/cl", 5)[0] },
        { id: "anr8k", title: "8K", key: "k8", cover: genJpgList("abanran/k8/k8", 5)[0] },
    ],

    abcel: [
        { id: "cel1", title: "Dong Liya", key: "dongliya", cover: genJpgList("abcel/dongliya/do", 5)[0] },
        { id: "cel2", title: "Jing Tian", key: "jingtian", cover: genJpgList("abcel/jingtian/ji", 5)[0] },
        { id: "cel3", title: "Annonymous",key: "others",   cover: genJpgList("abcel/others/ot", 5)[0] },
        { id: "cel4", title: "Da Mi Mi", key: "yangmi",   cover: genJpgList("abcel/yangmi/ya", 5)[0] },
        { id: "cel5", title: "Raincoat Zhang", key: "zhangyuyi", cover: genJpgList("abcel/zhangyuyi/zh", 5)[0] },
    ],

    isce: [
        { id: "sc1", title: "Sea", key: "sea", cover: genJpgList("isce/sea/se", 5)[0] },
        { id: "sc2", title: "Lone", key: "lone", cover: genJpgList("isce/lone/lo", 5)[0] },
        { id: "sc3", title: "Land", key: "land", cover: genJpgList("isce/land/la", 5)[0] },
    ],

    igif: [
        { id: "sc1", title: "GIF", key: "gif", cover: genGifList("igif/gif/gi", 5)[0] },
    ],

    absketch: [
        { id: "sc1", title: "Sketch", key: "sketch", cover: genJpgList("absketch/sketch/sk", 5)[0] },
    ],

    abxlz: [
        { id: "xlzBed", title: "Cozy & Seductive Moments", key: "bbs", cover: genJpgList("abxlz/bbs/be", 5)[0] },
        { id: "xlzHome", title: "Cozy Chic & Homely Elegance", key: "home", cover: genJpgList("abxlz/home/ho", 5)[0] },
        { id: "xlzOff", title: "Chic at Work", key: "office", cover: genJpgList("abxlz/office/of", 5)[0] },
        { id: "xlzOut", title: "Breeze & Beyond", key: "outdoor", cover: genJpgList("abxlz/outdoor/ou", 5)[0] },
        { id: "xlzSee", title: "Seethrough ...", key: "seethrough", cover: genJpgList("abxlz/seethrough/se", 5)[0] },
        { id: "xlzSpa", title: "Sultry Spaghetti Straps", key: "spaghetti", cover: genJpgList("abxlz/spaghetti/sp", 5)[0] },
        { id: "xlzSto", title: "Silken Allure & Enchanting Legs", key: "stockings", cover: genJpgList("abxlz/stockings/st", 5)[0] },
        { id: "xlzWed", title: "Angelically Innocent", key: "weddings", cover: genJpgList("abxlz/weddings/we", 5)[0] },
    ],

    absuren: [
        { id: "surChu", title: "Fantasy & Queens", key: "chubby", cover: genJpgList("absuren/chubby/ch", 5)[0] },
        { id: "surDeco", title: "Sublime Décolleté", key: "deco", cover: genJpgList("absuren/deco/de", 5)[0] },
        { id: "surDog", title: "Friend Forever", key: "dog", cover: genJpgList("absuren/dog/do", 5)[0] },
        { id: "surDot", title: "Mystic in Dot", key: "dot", cover: genJpgList("absuren/dot/do", 5)[0] },
        { id: "surFace", title: "Enchanting in Face", key: "face", cover: genJpgList("absuren/face/fa", 5)[0] },
        { id: "surFlo", title: "Flirty Floral Charms", key: "floral", cover: genJpgList("absuren/floral/fl", 5)[0] },
        { id: "surOff", title: "Chic at Work", key: "office", cover: genJpgList("absuren/office/of", 5)[0] },
        { id: "surPure", title: "Angelically Innocent", key: "pure", cover: genJpgList("absuren/pure/pu", 5)[0] },
        { id: "surSpa", title: "Sultry Spaghetti Straps", key: "spagatti", cover: genJpgList("absuren/spagatti/sp", 5)[0] },
        { id: "surSee", title: "Seethrough ...", key: "seethrough", cover: genJpgList("absuren/seethrough/se", 5)[0] },
    ],
};
