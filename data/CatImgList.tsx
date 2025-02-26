// Category
import { CatInterface, Cat2SubMap } from '@/config/type';
import { genImgList } from '@/utils/genImageList'

function genSubCat(subBasePath: string, items: { id: string; title: string; count: string; key: string }[]) {
    return items.map(({ id, title, count, key }) => ({
        id,
        title,
        count,
        cover: genImgList(`${subBasePath}/${key}`, 10)[0],
        path: `${subBasePath}/${key}`,
    }));
}

export const HomeList: CatInterface[] = [
    { id: "abycc", title: "Yang Chenchen \n Yome Sugar 杨晨晨", shorttitle: "Yang Chenchen", cover: genImgList("abcat/ycc/yc", 5)[0] },
    { id: "absyz", title: "Son Yoon Joo \n 손윤주 孙允珠", shorttitle: "Son Yoon Joo", cover: genImgList("abcat/syz/sc", 5)[0] },
    { id: "absur", title: "Girl Next Door \n shirouto, しろうと", shorttitle: "Girl Next Door", cover: genImgList("abcat/suren/sc", 5)[0] },
    { id: "abwxy", title: "Wang Xinyao \n Yanni 王馨瑶", shorttitle: "Wang Xinyao", cover: genImgList("abcat/wxy/wc", 5)[0] },
    { id: "abkel", title: "Kele Vicky", shorttitle: "Kele Vicky", cover: genImgList("abcat/kele/kc", 5)[0] },
    { id: "abanr", title: "Anran 安然", shorttitle: "Anran", cover: genImgList("abcat/anran/ac", 5)[0] },
    { id: "abxlz", title: "Xu Lizhi Booty \n 徐莉芝", shorttitle: "Xu Lizhi", cover: genImgList("abcat/xlz/xc", 5)[0] },
    { id: "abccc", title: "Cheng Chengcheng 程程程", shorttitle: "Cheng Chengcheng", cover: genImgList("abcat/ccc/cc", 5)[0] },
    { id: "abdxy", title: "Du Xiaoyu 杜小雨", shorttitle: "Du Xiaoyu", cover: genImgList("abcat/dxy/dc", 5)[0] },
    { id: "ablxl", title: "Lin Xinglan 林星阑", shorttitle: "Lin Xinglan", cover: genImgList("abcat/lxl/lc", 5)[0] },
    { id: "abhol", title: "Holidays", shorttitle: "Holidays", cover: genImgList("abcat/holiday/hc", 5)[0] },
    { id: "abspe", title: "Special Taste", shorttitle: "Special Taste", cover: genImgList("abcat/special/sc", 5)[0] },
    { id: "isce", title: "Asian Scene", shorttitle: "Asican Scene", cover: genImgList("aicat/scene/sc", 5)[0] },
];

export const Cat2Sub2Img: Cat2SubMap = {
    abycc: [
        { id: "YCCyf1", title: "Daily Fresh & Hot Trends", count: "20", key: "ycc" },
        { id: "YCCPure", title: "Angelically Innocent", count: "30", key: "pure" },
        { id: "YCCSpa", title: "Sultry Spaghetti Straps", count: "40", key: "spaghetti" },
        { id: "YCCChe", title: "Elegant in Cheongsam", count: "50", key: "cheongsam" },
        { id: "YCCStr", title: "Bare & Beautiful", count: "40", key: "strapless" },
        { id: "YCCBed", title: "Cozy & Seductive Moments", count: "30", key: "bedbathsofa" },
        { id: "YCCSeq", title: "Dazzling in Sequins", count: "40", key: "sequins" },
        { id: "YCCBlue", title: "Mystic in Blue", count: "50", key: "blue" },
        { id: "YCCFlo", title: "Flirty Floral Charms", count: "60", key: "floralskirt" },
        { id: "YCCGlass", title: "Sensual in Glasses", count: "30", key: "glass" },
        { id: "YCCGreen", title: "Enchanting in Green", count: "60", key: "green" },
        { id: "YCCDenim", title: "Casual Chic in Denim", count: "50", key: "demins" },
        { id: "YCCPink", title: "Pretty in Pink", count: "20", key: "pinkgirl" },
        { id: "YCCCos", title: "Fantasy & Cosplay Queens", count: "40", key: "cosplay" },
    ],

    absyz: [
        { id: "SYZStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning" },
        { id: "SYZBed", title: "Cozy & Seductive Moments", count: "10", key: "bbs" },
        { id: "SYZDeco", title: "Sublime Décolleté", count: "10", key: "decollete" },
        { id: "SYZFlo", title: "Flirty Floral Charms", count: "10", key: "floral" },
        { id: "SYZLace", title: "Timeless Grace in Silk & Lace", count: "10", key: "lace" },
        { id: "SYZOne", title: "Fantasy & Queens", count: "10", key: "oneshoulder" },
        { id: "SYZOff", title: "Chic at Work", count: "10", key: "office" },
        { id: "SYZSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spaghetti" },
        { id: "SYZStr", title: "Bare & Beautiful", count: "10", key: "strapless" },
    ],

    abwxy: [
        { id: "wxyStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning/st" },
        { id: "wxyBar", title: "Night Life", count: "10", key: "bar/ba" },
        { id: "wxyBed", title: "Cozy & Seductive Moments", count: "10", key: "bbs/be" },
        { id: "wxyChe", title: "Elegant in Cheongsam", count: "10", key: "cheongsam/ch" },
        { id: "wxyCro", title: "Sassy in Croptops", count: "10", key: "croptop/cr" },
        { id: "wxyDeco", title: "Sublime Décolleté", count: "10", key: "decollete/de" },
        { id: "wxyFormal", title: "Enchanting in Business", count: "10", key: "formal/fo" },
        { id: "wxyHalt", title: "Allure en Halter", count: "10", key: "haltertop/ha" },
        { id: "wxyLace", title: "Timeless Grace in Silk & Lace", count: "10", key: "lace/la" },
        { id: "wxyNight", title: "Nocturne in New York", count: "10", key: "nightnewyork/ni" },
        { id: "wxyOff", title: "Chic at Work", count: "10", key: "office/of" },
        { id: "wxyOut", title: "Breeze & Beyond", count: "10", key: "outdoor/ou" },
        { id: "wxyPants", title: "Chic in Motion", count: "10", key: "pants/pa" },
        { id: "wxySee", title: "Seethrough ...", count: "10", key: "seethrough/se" },
        { id: "wxySpa", title: "Sultry Spaghetti Straps", count: "40", key: "spaghetti/sp" },
        { id: "wxyUni", title: "Mystic in Uniform", count: "10", key: "uniform/un" },
    ],

    abccc: [
        { id: "cccStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning/st" },
        { id: "cccBBS", title: "Cozy & Seductive Moments", count: "10", key: "bbs/ba" },
        { id: "cccBri", title: "Briliant ...", count: "10", key: "briliant/br" },
        { id: "cccSexy", title: "Sultry", count: "10", key: "sexy/se" },
        { id: "cccStr", title: "Bare & Beautiful", count: "10", key: "strapless/st" },
    ],

    abdxy: [
        { id: "dxyViolet", title: "Daily Fresh & Hot Trends", count: "10", key: "violet/vi" },
        { id: "dxyGreen", title: "Cozy & Seductive Moments", count: "10", key: "green/gr" },
        { id: "dxyPink", title: "Briliant Pinkcount", count: "10", key: "pink/pi" },
    ],

    ablxl: [
        { id: "lxlBed", title: "Cozy & Seductive Moments", count: "10", key: "bedbathsofa/be" },
        { id: "lxlChe", title: "Elegant in Cheongsam", count: "10", key: "cheongsam/ch" },
        { id: "lxlDeco", title: "Sublime Décolleté", count: "10", key: "deco/de" },
        { id: "lxlFish", title: "Daily Fresh & Hot Trends", count: "10", key: "fishdress/fi" },
        { id: "lxlOff", title: "Chic at Work", count: "10", key: "office/of" },
        { id: "lxlPen", title: "Seductive Pencil", count: "10", key: "pencilskirt/pe" },
        { id: "lxlSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spaghetti/sp" },
        { id: "lxlStr", title: "Bare & Beautiful", count: "10", key: "strapless/st" },
        { id: "lxlTeacher", title: "Enchanting in Teaching", count: "10", key: "teacher/te" },
    ],

    abspe: [
        { id: "speStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning/st" },
        { id: "speBack", title: "Elegance from Behind", count: "20", key: "back/ba" },
        { id: "speButt", title: "Curves & Confidence", count: "10", key: "butt/bu" },
        { id: "speFinger", title: "Graceful Fingertips", count: "10", key: "finger/fi" },
        { id: "speLeg", title: "Poise in Every Step", count: "30", key: "legfeet/le" },
    ],

    abhol: [
        { id: "holLuneryear", title: "Chinese New Year", count: "40", key: "luneryear/lu" },
        { id: "holDeco", title: "Sublime Décolleté", count: "30", key: "deco/de" },
        { id: "holWal", title: "Elegant Wallpaper", count: "50", key: "wallpaper/wa" },
    ],


    abanr: [
        { id: "anrStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning/st" },
        { id: "anrSto", title: "Silken Allure & Enchanting Legs", count: "10", key: "stockings/st" },
        { id: "anrOff", title: "Chic at Work", count: "10", key: "office/of" },
        { id: "anrHotel", title: "Luxe Escapes & Midnight Whispers", count: "10", key: "hotel/ho" },
        { id: "anrDenim", title: "Casual Chic in Denim", count: "50", key: "demins/de" },
        { id: "anrClass", title: "Enchanting in Class", count: "10", key: "classroom/cl" },
        { id: "anr8k", title: "8K", count: "4", key: "k8/k8" },
    ],

    isce: [
        { id: "sc1", title: "Sea", count: "10", key: "sea/se" },
        { id: "sc2", title: "Lone", count: "10", key: "lone/lo" },
        { id: "sc3", title: "Land", count: "10", key: "land/la" },
    ],

    abxlz:[
        { id: "xlzBed", title: "Cozy & Seductive Moments", count: "10", key: "bbs/be" },
        { id: "xlzHome", title: "Cozy Chic & Homely Elegance", count: "10", key: "home/ho" },
        { id: "xlzOff", title: "Chic at Work", count: "10", key: "office/of" },
        { id: "xlzOut", title: "Breeze & Beyond", count: "10", key: "outdoor/ou" },
        { id: "xlzSee", title: "Seethrough ...", count: "10", key: "seethrough/se" },
        { id: "xlzSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spaghetti/sp" },
        { id: "xlzSto", title: "Silken Allure & Enchanting Legs", count: "10", key: "stockings/st" },
        { id: "xlzWed", title: "Angelically Innocent", count: "10", key: "weddings/we" },
    ],

    abkel:[
        { id: "kelBed", title: "Cozy & Seductive Moments", count: "40", key: "bbs/ba" },
        { id: "kelBlackSilk", title: "Timeless Grace in Silk & Lace", count: "20", key: "blacksilk/bl" },
        { id: "kelChe", title: "Elegant in Cheongsam", count: "30", key: "cheongsam/ch" },
        { id: "kelFlo", title: "Flirty Floral Charms", count: "20", key: "floral/fl" },
        { id: "kelHome", title: "Cozy Chic & Homely Elegance", count: "30", key: "home/ho" },
		{ id: "xlzLeg", title: "Bare & Beautiful Legs", count: "20", key: "leg/le" },
        { id: "kelOff", title: "Chic at Work", count: "30", key: "office/of" },
        { id: "kelSofa", title: "Sofa Soft", count: "40", key: "sofa/so" },
        { id: "kelSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spegatti/sp" },
        { id: "kelSto", title: "Silken Allure & Enchanting Legs", count: "20", key: "stockings/st" },
        { id: "kelStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning/st" },
    ],

    
    absur: [
        { id: "surChu", title: "Fantasy & Queens", count: "20", key: "chubby/ch" },
        { id: "surDeco", title: "Sublime Décolleté", count: "6", key: "decollete/de" },
        { id: "surDog", title: "Friend Forever", count: "50", key: "dog/do" },
        { id: "surDot", title: "Mystic in Dot", count: "50", key: "dot/do" },
        { id: "surFace", title: "Enchanting in Face", count: "60", key: "face/fa" },
        { id: "surFlo", title: "Flirty Floral Charms", count: "60", key: "floralskirt/fl" },
        { id: "surOff", title: "Chic at Work", count: "10", key: "office/of" },
        { id: "surPure", title: "Angelically Innocent", count: "30", key: "pure/pu" },
        { id: "surSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spaghetti/sp" },
		{ id: "surSee", title: "Seethrough ...", count: "10", key: "seethrough/se" },

    ],
};
