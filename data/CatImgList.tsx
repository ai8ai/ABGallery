// Category
import { CatInterface, Cat2SubMap } from '@/config/type';
import { genImgList } from '@/utils/genImageList'

export const HomeList: CatInterface[] = [
    { id: "abycc", title: "Yang Chenchen \n Yome Sugar 杨晨晨", shorttitle: "Yang Chenchen", cover: genImgList("abcat/ycc/yc", 5)[0] },
    { id: "absyz", title: "Son Yoon Joo \n 손윤주 孙允珠", shorttitle: "Son Yoon Joo", cover: genImgList("abcat/syz/sc", 5)[0] },
    { id: "absuren", title: "Girl Next Door \n shirouto, しろうと", shorttitle: "Girl Next Door", cover: genImgList("abcat/suren/sc", 5)[0] },
    { id: "abwxy", title: "Wang Xinyao \n Yanni 王馨瑶", shorttitle: "Wang Xinyao", cover: genImgList("abcat/wxy/wc", 5)[0] },
    { id: "abkele", title: "Kele Vicky", shorttitle: "Kele Vicky", cover: genImgList("abcat/kele/kc", 5)[0] },
    { id: "abanr", title: "Anran 安然", shorttitle: "Anran", cover: genImgList("abcat/anran/ac", 5)[0] },
    { id: "abxlz", title: "Xu Lizhi Booty \n 徐莉芝", shorttitle: "Xu Lizhi", cover: genImgList("abcat/xlz/xc", 5)[0] },
    { id: "abccc", title: "Cheng Chengcheng 程程程", shorttitle: "Cheng Chengcheng", cover: genImgList("abcat/ccc/cc", 5)[0] },
    { id: "abdxy", title: "Du Xiaoyu 杜小雨", shorttitle: "Du Xiaoyu", cover: genImgList("abcat/dxy/dc", 5)[0] },
    { id: "ablxl", title: "Lin Xinglan 林星阑", shorttitle: "Lin Xinglan", cover: genImgList("abcat/lxl/lc", 5)[0] },
    { id: "abholiday", title: "Holidays", shorttitle: "Holidays", cover: genImgList("abcat/holiday/hc", 5)[0] },
    { id: "abspecialtaste", title: "Special Taste", shorttitle: "Special Taste", cover: genImgList("abcat/special/sc", 5)[0] },
    { id: "isce", title: "Asian Scene", shorttitle: "Asican Scene", cover: genImgList("aicat/scene/sc", 5)[0] },
];

export const Cat2Sub2Img: Cat2SubMap = {
    abycc: [
        { id: "YCCyf1", title: "Daily Fresh & Hot Trends", count: "20", key: "ycc", cover: genImgList("abycc/ycc/yf", 5)[0] },
        { id: "YCCPure", title: "Angelically Innocent", count: "30", key: "pure", cover: genImgList("abycc/pure/pu", 5)[0] },
        { id: "YCCSpa", title: "Sultry Spaghetti Straps", count: "40", key: "spaghetti", cover: genImgList("abycc/spaghetti/sp", 5)[0] },
        { id: "YCCChe", title: "Elegant in Cheongsam", count: "50", key: "cheongsam", cover: genImgList("abycc/cheongsam/ch", 5)[0] },
        { id: "YCCStr", title: "Bare & Beautiful & Strapless", count: "40", key: "strapless", cover: genImgList("abycc/strapless/st", 5)[0] },
        { id: "YCCBed", title: "Cozy & Seductive Moments in Bed", count: "30", key: "bedbathsofa", cover: genImgList("abycc/bedbathsofa/be", 5)[0] },
        { id: "YCCSeq", title: "Dazzling in Sequins", count: "40", key: "sequins", cover: genImgList("abycc/sequins/se", 5)[0] },
        { id: "YCCBlue", title: "Mystic in Blue", count: "50", key: "blue", cover: genImgList("abycc/blue/bl", 5)[0] },
        { id: "YCCFlo", title: "Flirty Floral Charms", count: "60", key: "floralskirt", cover: genImgList("abycc/floralskirt/fl", 5)[0] },
        { id: "YCCGlass", title: "Sensual in Glasses", count: "30", key: "glass", cover: genImgList("abycc/glass/gl", 5)[0] },
        { id: "YCCGreen", title: "Enchanting in Green", count: "60", key: "green", cover: genImgList("abycc/green/gr", 5)[0] },
        { id: "YCCDenim", title: "Casual Chic in Denim", count: "50", key: "demins", cover: genImgList("abycc/demins/de", 5)[0] },
        { id: "YCCPink", title: "Pretty in Pink", count: "20", key: "pinkgirl", cover: genImgList("abycc/pinkgirl/pi", 5)[0] },
        { id: "YCCCos", title: "Fantasy & Cosplay Queens", count: "40", key: "cosplay", cover: genImgList("abycc/cosplay/co", 5)[0] },
    ],


    absyz: [
        { id: "SYZStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning", cover: genImgList("absyz/stunning/st", 5)[0] },
        { id: "SYZBed", title: "Cozy & Seductive Moments", count: "10", key: "bbs", cover: genImgList("absyz/bbs/be", 5)[0] },
        { id: "SYZDeco", title: "Sublime Décolleté", count: "10", key: "decollete", cover: genImgList("absyz/decollete/de", 5)[0] },
        { id: "SYZFlo", title: "Flirty Floral Charms", count: "10", key: "floral", cover: genImgList("absyz/floral/fl", 5)[0] },
        { id: "SYZLace", title: "Timeless Grace in Silk & Lace", count: "10", key: "lace", cover: genImgList("absyz/lace/la", 5)[0] },
        { id: "SYZOne", title: "Fantasy & Queens", count: "10", key: "oneshoulder", cover: genImgList("absyz/oneshoulder/on", 5)[0] },
        { id: "SYZOff", title: "Chic at Work", count: "10", key: "office", cover: genImgList("absyz/office/of", 5)[0] },
        { id: "SYZSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spaghetti", cover: genImgList("absyz/spaghetti/sp", 5)[0] },
        { id: "SYZStr", title: "Bare & Beautiful", count: "10", key: "strapless", cover: genImgList("absyz/strapless/st", 5)[0] },
    ],



    abwxy: [
        { id: "wxyStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning", cover: genImgList("abwxy/stunning/st", 5)[0] },
        { id: "wxyBar", title: "Night Life", count: "10", key: "bar", cover: genImgList("abwxy/bar/ba", 5)[0] },
        { id: "wxyBed", title: "Cozy & Seductive Moments", count: "10", key: "bbs", cover: genImgList("abwxy/bbs/be", 5)[0] },
        { id: "wxyChe", title: "Elegant in Cheongsam", count: "10", key: "cheongsam", cover: genImgList("abwxy/cheongsam/ch", 5)[0] },
        { id: "wxyCro", title: "Sassy in Croptops", count: "10", key: "croptop", cover: genImgList("abwxy/croptop/cr", 5)[0] },
        { id: "wxyDeco", title: "Sublime Décolleté", count: "10", key: "decollete", cover: genImgList("abwxy/decollete/de", 5)[0] },
        { id: "wxyFormal", title: "Enchanting in Business", count: "10", key: "formal", cover: genImgList("abwxy/formal/fo", 5)[0] },
        { id: "wxyHalt", title: "Allure en Halter", count: "10", key: "haltertop", cover: genImgList("abwxy/haltertop/ha", 5)[0] },
        { id: "wxyLace", title: "Timeless Grace in Silk & Lace", count: "10", key: "lace", cover: genImgList("abwxy/lace/la", 5)[0] },
        { id: "wxyNight", title: "Nocturne in New York", count: "10", key: "nightnewyork", cover: genImgList("abwxy/nightnewyork/ni", 5)[0] },
        { id: "wxyOff", title: "Chic at Work", count: "10", key: "office", cover: genImgList("abwxy/office/of", 5)[0] },
        { id: "wxyOut", title: "Breeze & Beyond", count: "10", key: "outdoor", cover: genImgList("abwxy/outdoor/ou", 5)[0] },
        { id: "wxyPants", title: "Chic in Motion", count: "10", key: "pants", cover: genImgList("abwxy/pants/pa", 5)[0] },
        { id: "wxySee", title: "Seethrough ...", count: "10", key: "seethrough", cover: genImgList("abwxy/seethrough/se", 5)[0] },
        { id: "wxySpa", title: "Sultry Spaghetti Straps", count: "40", key: "spaghetti", cover: genImgList("abwxy/spaghetti/sp", 5)[0] },
        { id: "wxyUni", title: "Mystic in Uniform", count: "10", key: "uniform", cover: genImgList("abwxy/uniform/un", 5)[0] },
    ],

    abccc: [
        { id: "cccStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning", cover: genImgList("abccc/stunning/st", 5)[0] },
        { id: "cccBBS", title: "Cozy & Seductive Moments", count: "10", key: "bbs", cover: genImgList("abccc/bbs/ba", 5)[0] },
        { id: "cccBri", title: "Briliant ...", count: "10", key: "briliant", cover: genImgList("abccc/briliant/br", 5)[0] },
        { id: "cccSexy", title: "Sultry", count: "10", key: "sexy", cover: genImgList("abccc/sexy/se", 5)[0] },
        { id: "cccStr", title: "Bare & Beautiful", count: "10", key: "strapless", cover: genImgList("abccc/strapless/st", 5)[0] },
    ],

    abdxy: [
        { id: "dxyViolet", title: "Daily Fresh & Hot Trends", count: "10", key: "violet", cover: genImgList("abdxy/violet/vi", 5)[0] },
        { id: "dxyGreen", title: "Cozy & Seductive Moments", count: "10", key: "green", cover: genImgList("abdxy/green/gr", 5)[0] },
        { id: "dxyPink", title: "Briliant Pinkcount", count: "10", key: "pink", cover: genImgList("abdxy/pink/pi", 5)[0] },
    ],

    abkele: [
        { id: "kelBed", title: "Cozy & Seductive Moments", count: "40", key: "bbs", cover: genImgList("abkele/bbs/ba", 5)[0] },
        { id: "kelBlackSilk", title: "Timeless Grace in Silk & Lace", count: "20", key: "blacksilk", cover: genImgList("abkele/blacksilk/bl", 5)[0] },
        { id: "kelChe", title: "Elegant in Cheongsam", count: "30", key: "cheongsam", cover: genImgList("abkele/cheongsam/ch", 5)[0] },
        { id: "kelFlo", title: "Flirty Floral Charms", count: "20", key: "floral", cover: genImgList("abkele/floral/fl", 5)[0] },
        { id: "kelHome", title: "Cozy Chic & Homely Elegance", count: "30", key: "home", cover: genImgList("abkele/home/ho", 5)[0] },
        { id: "kelLeg", title: "Bare & Beautiful Legs", count: "20", key: "leg", cover: genImgList("abkele/leg/le", 5)[0] },
        { id: "kelOff", title: "Chic at Work", count: "30", key: "office", cover: genImgList("abkele/office/of", 5)[0] },
        { id: "kelSofa", title: "Sofa Soft", count: "40", key: "sofa", cover: genImgList("abkele/sofa/so", 5)[0] },
        { id: "kelSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spaghetti", cover: genImgList("abkele/spegatti/sp", 5)[0] },
        { id: "kelSto", title: "Silken Allure & Enchanting Legs", count: "20", key: "stockings", cover: genImgList("abkele/stockings/st", 5)[0] },
        { id: "kelStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning", cover: genImgList("abkele/stunning/st", 5)[0] },
    ],
    

    ablxl: [
        { id: "lxlBed", title: "Cozy & Seductive Moments", count: "10", key: "bedbathsofa", cover: genImgList("ablxl/bedbathsofa/be", 5)[0] },
        { id: "lxlChe", title: "Elegant in Cheongsam", count: "10", key: "cheongsam", cover: genImgList("ablxl/cheongsam/ch", 5)[0] },
        { id: "lxlDeco", title: "Sublime Décolleté", count: "10", key: "deco", cover: genImgList("ablxl/deco/de", 5)[0] },
        { id: "lxlFish", title: "Daily Fresh & Hot Trends", count: "10", key: "fishdress", cover: genImgList("ablxl/fishdress/fi", 5)[0] },
        { id: "lxlOff", title: "Chic at Work", count: "10", key: "office", cover: genImgList("ablxl/office/of", 5)[0] },
        { id: "lxlPen", title: "Seductive Pencil", count: "10", key: "pencilskirt", cover: genImgList("ablxl/pencilskirt/pe", 5)[0] },
        { id: "lxlSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spaghetti", cover: genImgList("ablxl/spaghetti/sp", 5)[0] },
        { id: "lxlStr", title: "Bare & Beautiful", count: "10", key: "strapless", cover: genImgList("ablxl/strapless/st", 5)[0] },
        { id: "lxlTeacher", title: "Enchanting in Teaching", count: "10", key: "teacher", cover: genImgList("ablxl/teacher/te", 5)[0] },
    ],

    abspecialtaste: [
        { id: "speStunning", title: "Daily Fresh & Hot Trends", key: "stunning", cover: genImgList("abspecialtaste/stunning/st", 5)[0] },
        { id: "speBack", title: "Elegance from Behind", key: "back", cover: genImgList("abspecialtaste/back/ba", 5)[0] },
        { id: "speButt", title: "Curves & Confidence", key: "butt", cover: genImgList("abspecialtaste/butt/bu", 5)[0] },
        { id: "speFinger", title: "Graceful Fingertips", key: "finger", cover: genImgList("abspecialtaste/finger/fi", 5)[0] },
        { id: "speLeg", title: "Poise in Every Step", key: "legfeet", cover: genImgList("abspecialtaste/legfeet/le", 5)[0] },
    ],

    abholiday: [
        { id: "holLuneryear", title: "Chinese New Year", key: "luneryear", cover: genImgList("abholiday/luneryear/lu", 5)[0] },
        { id: "holDeco", title: "Sublime Décolleté", key: "deco", cover: genImgList("abholiday/deco/de", 5)[0] },
        { id: "holWal", title: "Elegant Wallpaper", key: "wallpaper", cover: genImgList("abholiday/wallpaper/wa", 5)[0] },
    ],

    abanr: [
        { id: "anrStunning", title: "Daily Fresh & Hot Trends", key: "stunning", cover: genImgList("abanran/stunning/st", 5)[0] },
        { id: "anrSto", title: "Silken Allure & Enchanting Legs", key: "stockings", cover: genImgList("abanran/stockings/st", 5)[0] },
        { id: "anrOff", title: "Chic at Work", key: "office", cover: genImgList("abanran/office/of", 5)[0] },
        { id: "anrHotel", title: "Luxe Escapes & Midnight Whispers", key: "hotel", cover: genImgList("abanran/hotel/ho", 5)[0] },
        { id: "anrDenim", title: "Casual Chic in Denim", key: "denims", cover: genImgList("abanran/demins/de", 5)[0] },
        { id: "anrClass", title: "Enchanting in Class", key: "classroom", cover: genImgList("abanran/classroom/cl", 5)[0] },
        { id: "anr8k", title: "8K", key: "k8", cover: genImgList("abanran/k8/k8", 5)[0] },
    ],

    isce: [
        { id: "sc1", title: "Sea", key: "sea", cover: genImgList("isce/sea/se", 5)[0] },
        { id: "sc2", title: "Lone", key: "lone", cover: genImgList("isce/lone/lo", 5)[0] },
        { id: "sc3", title: "Land", key: "land", cover: genImgList("isce/land/la", 5)[0] },
    ],

    abxlz: [
        { id: "xlzBed", title: "Cozy & Seductive Moments", key: "bbs", cover: genImgList("abxlz/bbs/be", 5)[0] },
        { id: "xlzHome", title: "Cozy Chic & Homely Elegance", key: "home", cover: genImgList("abxlz/home/ho", 5)[0] },
        { id: "xlzOff", title: "Chic at Work", key: "office", cover: genImgList("abxlz/office/of", 5)[0] },
        { id: "xlzOut", title: "Breeze & Beyond", key: "outdoor", cover: genImgList("abxlz/outdoor/ou", 5)[0] },
        { id: "xlzSee", title: "Seethrough ...", key: "seethrough", cover: genImgList("abxlz/seethrough/se", 5)[0] },
        { id: "xlzSpa", title: "Sultry Spaghetti Straps", key: "spaghetti", cover: genImgList("abxlz/spaghetti/sp", 5)[0] },
        { id: "xlzSto", title: "Silken Allure & Enchanting Legs", key: "stockings", cover: genImgList("abxlz/stockings/st", 5)[0] },
        { id: "xlzWed", title: "Angelically Innocent", key: "weddings", cover: genImgList("abxlz/weddings/we", 5)[0] },
    ],

    absuren: [
        { id: "surChu", title: "Fantasy & Queens", key: "chubby", cover: genImgList("absuren/chubby/ch", 5)[0] },
        { id: "surDeco", title: "Sublime Décolleté", key: "deco", cover: genImgList("absuren/deco/de", 5)[0] },
        { id: "surDog", title: "Friend Forever", key: "dog", cover: genImgList("absuren/dog/do", 5)[0] },
        { id: "surDot", title: "Mystic in Dot", key: "dot", cover: genImgList("absuren/dot/do", 5)[0] },
        { id: "surFace", title: "Enchanting in Face", key: "face", cover: genImgList("absuren/face/fa", 5)[0] },
        { id: "surFlo", title: "Flirty Floral Charms", key: "floralskirt", cover: genImgList("absuren/floralskirt/fl", 5)[0] },
        { id: "surOff", title: "Chic at Work", key: "office", cover: genImgList("absuren/office/of", 5)[0] },
        { id: "surPure", title: "Angelically Innocent", key: "pure", cover: genImgList("absuren/pure/pu", 5)[0] },
        { id: "surSpa", title: "Sultry Spaghetti Straps", key: "spaghetti", cover: genImgList("absuren/spaghetti/sp", 5)[0] },
        { id: "surSee", title: "Seethrough ...", key: "seethrough", cover: genImgList("absuren/seethrough/se", 5)[0] },
    ],
};
