// Category
import { CatInterface, SubCategoryConfig } from '@/config/type';
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
    { id: "abwxy", title: "Wang Xinyao \n Yanni 王馨瑶", shorttitle: "Wang Xinyao", cover: genImgList("abcat/wxy/wc", 5)[0] },
    { id: "abkel", title: "Kele Vicky", shorttitle: "Kele Vicky", cover: genImgList("abcat/kele/kc", 5)[0] },
    { id: "abanr", title: "Anran 安然", shorttitle: "Anran", cover: genImgList("abcat/anran/ac", 5)[0] },
    { id: "abxlz", title: "Xu Lizhi Booty \n 徐莉芝", shorttitle: "Xu Lizhi", cover: genImgList("abcat/xlz/xc", 5)[0] },
    { id: "abccc", title: "Cheng Chengcheng 程程程", shorttitle: "Cheng Chengcheng", cover: genImgList("abcat/ccc/cc", 5)[0] },
    { id: "abdxy", title: "Du Xiaoyu 杜小雨", shorttitle: "Du Xiaoyu", cover: genImgList("abcat/dxy/dc", 5)[0] },
    { id: "ablxl", title: "Lin Xinglan 林星阑", shorttitle: "Lin Xinglan", cover: genImgList("abcat/lxl/lc", 5)[0] },
    { id: "abhol", title: "Holidays", shorttitle: "Holidays", cover: genImgList("abcat/holiday/hc", 5)[0] },
    { id: "abspe", title: "Special Taste", shorttitle: "Special Taste", cover: genImgList("abcat/special/sc", 5)[0] },
    { id: "absur", title: "Girl Next Door \n shirouto, しろうと", shorttitle: "Girl Next Door", cover: genImgList("abcat/suren/sc", 5)[0] },
    { id: "isce", title: "Asian Scene", shorttitle: "Asican Scene", cover: genImgList("aicat/scene/sc", 5)[0] },
];

export const Cat2Sub2Img: SubCategoryConfig = {
    ycc: genSubCat("abycc", [
        { id: "abYCCyf1", title: "Daily Fresh & Hot Trends", count: "20", key: "ycc/yf" },
        { id: "abYCCPure", title: "Angelically Innocent", count: "30", key: "pure/pu" },
        { id: "abYCCSpa", title: "Sultry Spaghetti Straps", count: "40", key: "spaghetti/sp" },
        { id: "abYCCChe", title: "Elegant in Cheongsam", count: "50", key: "cheongsam/ch" },
        { id: "abYCCStr", title: "Bare & Beautiful", count: "40", key: "strapless/st" },
        { id: "abYCCBed", title: "Cozy & Seductive Moments", count: "30", key: "bedbathsofa/be" },
        { id: "abYCCSeq", title: "Dazzling in Sequins", count: "40", key: "sequins/se" },
        { id: "abYCCBlue", title: "Mystic in Blue", count: "50", key: "blue/bl" },
        { id: "abYCCFlo", title: "Flirty Floral Charms", count: "60", key: "floralskirt/fl" },
        { id: "abYCCGlass", title: "Sensual in Glasses", count: "30", key: "glass/gl" },
        { id: "abYCCGreen", title: "Enchanting in Green", count: "60", key: "green/gr" },
        { id: "abYCCDenim", title: "Casual Chic in Denim", count: "50", key: "demins/de" },
        { id: "abYCCPink", title: "Pretty in Pink", count: "20", key: "pinkgirl/pi" },
        { id: "abYCCCos", title: "Fantasy & Cosplay Queens", count: "40", key: "cosplay/co" },
    ]),

    syz: genSubCat("absyz", [
        { id: "abSYZStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning/st" },
        { id: "abSYZBed", title: "Cozy & Seductive Moments", count: "10", key: "bbs/be" },
        { id: "abSYZDeco", title: "Sublime Décolleté", count: "10", key: "decollete/de" },
        { id: "abSYZFlo", title: "Flirty Floral Charms", count: "10", key: "floral/fl" },
        { id: "abSYZLace", title: "Timeless Grace in Silk & Lace", count: "10", key: "lace/la" },
        { id: "abSYZOne", title: "Fantasy & Queens", count: "10", key: "oneshoulder/on" },
        { id: "abSYZOff", title: "Chic at Work", count: "10", key: "office/of" },
        { id: "abSYZSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spaghetti/sp" },
        { id: "abSYZStr", title: "Bare & Beautiful", count: "10", key: "strapless/st" },
    ]),

    wxy: genSubCat("abwxy", [
        { id: "abwxyStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning/st" },
        { id: "abwxyBar", title: "Night Life", count: "10", key: "bar/ba" },
        { id: "abwxyBed", title: "Cozy & Seductive Moments", count: "10", key: "bbs/be" },
        { id: "abwxyChe", title: "Elegant in Cheongsam", count: "10", key: "cheongsam/ch" },
        { id: "abwxyCro", title: "Sassy in Croptops", count: "10", key: "croptop/cr" },
        { id: "abwxyDeco", title: "Sublime Décolleté", count: "10", key: "decollete/de" },
        { id: "abwxyFormal", title: "Enchanting in Business", count: "10", key: "formal/fo" },
        { id: "abwxyHalt", title: "Allure en Halter", count: "10", key: "haltertop/ha" },
        { id: "abwxyLace", title: "Timeless Grace in Silk & Lace", count: "10", key: "lace/la" },
        { id: "abwxyNight", title: "Nocturne in New York", count: "10", key: "nightnewyork/ni" },
        { id: "abwxyOff", title: "Chic at Work", count: "10", key: "office/of" },
        { id: "abwxyOut", title: "Breeze & Beyond", count: "10", key: "outdoor/ou" },
        { id: "abwxyPants", title: "Chic in Motion", count: "10", key: "pants/pa" },
        { id: "abwxySee", title: "Seethrough ...", count: "10", key: "seethrough/se" },
        { id: "abwxySpa", title: "Sultry Spaghetti Straps", count: "40", key: "spaghetti/sp" },
        { id: "abwxyUni", title: "Mystic in Uniform", count: "10", key: "uniform/un" },
    ]),

    ccc: genSubCat("abccc", [
        { id: "abcccStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning/st" },
        { id: "abcccBBS", title: "Cozy & Seductive Moments", count: "10", key: "bbs/ba" },
        { id: "abcccBri", title: "Briliant ...", count: "10", key: "briliant/br" },
        { id: "abcccSexy", title: "Sultry", count: "10", key: "sexy/se" },
        { id: "abcccStr", title: "Bare & Beautiful", count: "10", key: "strapless/st" },
    ]),

    dxy: genSubCat("abdxy", [
        { id: "abdxyViolet", title: "Daily Fresh & Hot Trends", count: "10", key: "violet/vi" },
        { id: "abdxyGreen", title: "Cozy & Seductive Moments", count: "10", key: "green/gr" },
        { id: "abdxyPink", title: "Briliant Pinkcount", count: "10", key: "pink/pi" },
    ]),

    lxl: genSubCat("ablxl", [
        { id: "ablxlBed", title: "Cozy & Seductive Moments", count: "10", key: "bedbathsofa/be" },
        { id: "ablxlChe", title: "Elegant in Cheongsam", count: "10", key: "cheongsam/ch" },
        { id: "ablxlDeco", title: "Sublime Décolleté", count: "10", key: "deco/de" },
        { id: "ablxlFish", title: "Daily Fresh & Hot Trends", count: "10", key: "fishdress/fi" },
        { id: "ablxlOff", title: "Chic at Work", count: "10", key: "office/of" },
        { id: "ablxlPen", title: "Seductive Pencil", count: "10", key: "pencilskirt/pe" },
        { id: "ablxlSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spaghetti/sp" },
        { id: "ablxlStr", title: "Bare & Beautiful", count: "10", key: "strapless/st" },
        { id: "ablxlTeacher", title: "Enchanting in Teaching", count: "10", key: "teacher/te" },
    ]),

    spe: genSubCat("abspecialtaste", [
        { id: "abspeStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning/st" },
        { id: "abspeBack", title: "Elegance from Behind", count: "20", key: "back/ba" },
        { id: "abspeButt", title: "Curves & Confidence", count: "10", key: "butt/bu" },
        { id: "abspeFinger", title: "Graceful Fingertips", count: "10", key: "finger/fi" },
        { id: "abspeLeg", title: "Poise in Every Step", count: "30", key: "legfeet/le" },
    ]),

    hol: genSubCat("abholiday", [
        { id: "abholLuneryear", title: "Chinese New Year", count: "40", key: "luneryear/lu" },
        { id: "abholDeco", title: "Sublime Décolleté", count: "30", key: "deco/de" },
        { id: "abholWal", title: "Elegant Wallpaper", count: "50", key: "wallpaper/wa" },
    ]),


    anr: genSubCat("abanran", [
        { id: "abanrStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning/st" },
        { id: "abanrSto", title: "Silken Allure & Enchanting Legs", count: "10", key: "stockings/st" },
        { id: "abanrOff", title: "Chic at Work", count: "10", key: "office/of" },
        { id: "abanrHotel", title: "Luxe Escapes & Midnight Whispers", count: "10", key: "hotel/ho" },
        { id: "abanrDenim", title: "Casual Chic in Denim", count: "50", key: "demins/de" },
        { id: "abanrClass", title: "Enchanting in Class", count: "10", key: "classroom/cl" },
        { id: "abanr8k", title: "8K", count: "4", key: "k8/k8" },
    ]),

    sce: genSubCat("isce", [
        { id: "absc1", title: "Sea", count: "10", key: "sea/se" },
        { id: "absc2", title: "Lone", count: "10", key: "lone/lo" },
        { id: "absc3", title: "Land", count: "10", key: "land/la" },
    ]),

    xlz: genSubCat("abxlz", [
        { id: "abxlzBed", title: "Cozy & Seductive Moments", count: "10", key: "bbs/be" },
        { id: "abxlzHome", title: "Cozy Chic & Homely Elegance", count: "10", key: "home/ho" },
        { id: "abxlzOff", title: "Chic at Work", count: "10", key: "office/of" },
        { id: "abxlzOut", title: "Breeze & Beyond", count: "10", key: "outdoor/ou" },
        { id: "abxlzSee", title: "Seethrough ...", count: "10", key: "seethrough/se" },
        { id: "abxlzSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spaghetti/sp" },
        { id: "abxlzSto", title: "Silken Allure & Enchanting Legs", count: "10", key: "stockings/st" },
        { id: "abxlzWed", title: "Angelically Innocent", count: "10", key: "weddings/we" },
    ]),

    kel: genSubCat("abkele", [
        { id: "abkelBed", title: "Cozy & Seductive Moments", count: "40", key: "bbs/ba" },
        { id: "abkelBlackSilk", title: "Timeless Grace in Silk & Lace", count: "20", key: "blacksilk/bl" },
        { id: "abkelChe", title: "Elegant in Cheongsam", count: "30", key: "cheongsam/ch" },
        { id: "abkelFlo", title: "Flirty Floral Charms", count: "20", key: "floral/fl" },
        { id: "abkelHome", title: "Cozy Chic & Homely Elegance", count: "30", key: "home/ho" },
		{ id: "abxlzLeg", title: "Bare & Beautiful Legs", count: "20", key: "leg/le" },
        { id: "abkelOff", title: "Chic at Work", count: "30", key: "office/of" },
        { id: "abkelSofa", title: "Sofa Soft", count: "40", key: "sofa/so" },
        { id: "abkelSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spegatti/sp" },
        { id: "abkelSto", title: "Silken Allure & Enchanting Legs", count: "20", key: "stockings/st" },
        { id: "abkelStunning", title: "Daily Fresh & Hot Trends", count: "10", key: "stunning/st" },
    ]),

    
    sur: genSubCat("absuren", [
        { id: "absurChu", title: "Fantasy & Queens", count: "20", key: "chubby/ch" },
        { id: "absurDeco", title: "Sublime Décolleté", count: "6", key: "decollete/de" },
        { id: "absurDog", title: "Friend Forever", count: "50", key: "dog/do" },
        { id: "absurDot", title: "Mystic in Dot", count: "50", key: "dot/do" },
        { id: "absurFace", title: "Enchanting in Face", count: "60", key: "face/fa" },
        { id: "absurFlo", title: "Flirty Floral Charms", count: "60", key: "floralskirt/fl" },
        { id: "absurOff", title: "Chic at Work", count: "10", key: "office/of" },
        { id: "absurPure", title: "Angelically Innocent", count: "30", key: "pure/pu" },
        { id: "absurSpa", title: "Sultry Spaghetti Straps", count: "10", key: "spaghetti/sp" },
		{ id: "absurSee", title: "Seethrough ...", count: "10", key: "seethrough/se" },

    ]),
};
