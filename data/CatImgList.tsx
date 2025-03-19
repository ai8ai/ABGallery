// Category
import { CatInterface, Cat2SubMap } from '@/config/type';
import { genJpg8, genJpg5, genGifList, genJpgList } from '@/utils/genImageList'

export const HomeList: CatInterface[] = [
    { id: "abstunning", ghname: "ai8ai", title: "Hot & Stunning", shorttitle: "Hot & Stunning", cover: genJpg5("abcat/stunning")[0] },

    { id: "bycc", ghname: "aidres8", title: "Yang Chenchen \n Yome Sugar 杨晨晨", shorttitle: "Yang Chenchen", cover: genJpgList("abcat/ycc/yc", 5)[0] },
    { id: "bwxy", ghname: "aidres8", title: "Wang Xinyao \n Yanni 王馨瑶", shorttitle: "Wang Xinyao", cover: genJpgList("abcat/wxy/wc", 5)[0] },

    { id: "bcmy", ghname: "aidres8", title: "Chu Mengyao 初梦瑶", shorttitle: "Chu Mengyao 初梦瑶", cover: genJpg5("abcat/cmy")[0] },
    { id: "bnabi", ghname: "aidres8", title: "Yeon 娜比", shorttitle: "Yeon 娜比", cover: genJpg5("abcat/nabi")[0] },
    { id: "b2", ghname: "aidres8", title: "Group", shorttitle: "Group", cover: genJpg5("abcat/b2")[0] },

    { id: "absyz", ghname: "ai8ai", title: "Son Yoon Joo \n 손윤주 孙允珠", shorttitle: "Son Yoon Joo", cover: genJpgList("abcat/syz/sc", 5)[0] },
    { id: "absuren", ghname: "ai8ai", title: "Girl Next Door \n shirouto素人しろうと", shorttitle: "Girl Next Door", cover: genJpgList("abcat/suren/sc", 5)[0] },
    { id: "abkele", ghname: "ai8ai", title: "Kele Vicky", shorttitle: "Kele Vicky", cover: genJpgList("abcat/kele/kc", 5)[0] },
    { id: "abanran", ghname: "ai8ai", title: "Anran 安然", shorttitle: "Anran", cover: genJpgList("abcat/anran/ac", 5)[0] },
    { id: "abzyx", ghname: "ai8ai", title: "Carol 周妍希", shorttitle: "Carol周妍希", cover: genJpg5("abcat/zyx")[0] },
    { id: "abxlz", ghname: "ai8ai", title: "Xu Lizhi Booty \n 徐莉芝", shorttitle: "Xu Lizhi", cover: genJpgList("abcat/xlz/xc", 5)[0] },
    { id: "abccc", ghname: "ai8ai", title: "Cheng Chengcheng 程程程", shorttitle: "Cheng Chengcheng", cover: genJpgList("abcat/ccc/cc", 5)[0] },
    { id: "ablxl", ghname: "ai8ai", title: "Lin Xinglan 林星阑", shorttitle: "Lin Xinglan", cover: genJpgList("abcat/lxl/lc", 5)[0] },
    { id: "abcel", ghname: "ai8ai", title: "Celebrities", shorttitle: "Celebrities", cover: genJpgList("abcat/cel/cc", 5)[0] },
    { id: "abholiday", ghname: "ai8ai", title: "Holidays", shorttitle: "Holidays", cover: genJpgList("abcat/holiday/hc", 5)[0] },
    { id: "abspecialtaste", ghname: "ai8ai", title: "Special Taste", shorttitle: "Special Taste", cover: genJpgList("abcat/special/sc", 5)[0] },
    { id: "absketch", ghname: "ai8ai", title: "Sketch & Hand-drawing", shorttitle: "Sketch & Hand-drawing", cover: genJpgList("abcat/sketch/sc", 5)[0] },
    { id: "abmini", ghname: "ai8ai", title: "Modern Minimalist", shorttitle: "Modern Minimalist", cover: genJpg5("abcat/mini")[0] },
    { id: "abss", ghname: "ai8ai", title: "Signature Styles", shorttitle: "Signature Styles", cover: genJpg5("abcat/ss")[0] },
    { id: "abplaces", ghname: "ai8ai", title: "Places", shorttitle: "Places", cover: genJpg5("abcat/places")[0] },
    { id: "igif", ghname: "ai8ai", title: "GIF MP4", shorttitle: "GIF", cover: genGifList("aicat/gif/gc", 5)[0] },
    { id: "abpast", ghname: "ai8ai", title: "Past Year Collection", shorttitle: "past", cover: genJpg5("abcat/past")[0] },

    { id: "ccbankunyuu", ghname: "aidres8", title: "Yang Chenchen: Bankunyuu", shorttitle: "Yome Bankunyuu", cover: genJpg5("abcat/ccbankunyuu")[0] },
    { id: "ccche", ghname: "aidres8", title: "Yang Chenchen: Cheongsam Collection", shorttitle: "Yome Cheongsam", cover: genJpg5("abcat/ccche")[0] },
    { id: "ccdemin", ghname: "aidres8", title: "Yang Chenchen: Demin", shorttitle: "Yome Demin", cover: genJpg5("abcat/ccdemin")[0] },
    { id: "ccpink", ghname: "aidres8", title: "Yang Chenchen: in Pink", shorttitle: "Yome Pink", cover: genJpg5("abcat/ccpink")[0] },
    { id: "ccred", ghname: "aidres8", title: "Yang Chenchen: in Red", shorttitle: "Yome Red", cover: genJpg5("abcat/ccred")[0] },
    { id: "ccwhite", ghname: "aidres8", title: "Yang Chenchen: in White", shorttitle: "Yome White", cover: genJpg5("abcat/ccwhite")[0] },
    { id: "ccgreen", ghname: "aidres8", title: "Yang Chenchen: in Green", shorttitle: "Yome Green", cover: genJpg5("abcat/ccgreen")[0] },
    { id: "ccyellow", ghname: "aidres8", title: "Yang Chenchen: in Yellow", shorttitle: "Yome Yellow", cover: genJpg5("abcat/ccyellow")[0] },
    { id: "ccformal", ghname: "aidres8", title: "Yang Chenchen: Formal", shorttitle: "Yome Formal", cover: genJpg5("abcat/ccformal")[0] },
    { id: "ccnextdoor", ghname: "aidres8", title: "Yang Chenchen: Next Door Girl", shorttitle: "Yome Next Door", cover: genJpg5("abcat/ccnextdoor")[0] },
    { id: "ccoutdoor", ghname: "aidres8", title: "Yang Chenchen: Outdoor", shorttitle: "Yome Outdoor", cover: genJpg5("abcat/ccoutdoor")[0] },
    { id: "ccspa", ghname: "aidres8", title: "Yang Chenchen: Spaghetti", shorttitle: "Yome Spaghetti", cover: genJpg5("abcat/ccspa")[0] },
    { id: "ccstr", ghname: "aidres8", title: "Yang Chenchen: Strapless", shorttitle: "Yome Strapless", cover: genJpg5("abcat/ccstr")[0] },
];



export const Cat2Sub2Img: Cat2SubMap = {
    ccyellow: [
        { id: "s01", title: "sultry", folder: "sultry" },
        { id: "w02", title: "lowcut", folder: "lowcut" },
        { id: "so3", title: "cosy", folder: "cosy" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccyellow", cover: genJpg8(`ccyellow/${item.folder}`)[0] })),

    ccstr: [
        { id: "s01", title: "bodycon", folder: "bodycon" },
        { id: "w02", title: "longskirt", folder: "longskirt" },
        { id: "so3", title: "sparkling", folder: "sparkling" },
        { id: "s04", title: "sequined", folder: "sequined" },

    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccstr", cover: genJpg8(`ccstr/${item.folder}`)[0] })),


    ccspa: [
        { id: "s01", title: "sultry", folder: "sultry" },
        { id: "w02", title: "sparkling", folder: "sparkling" },
        { id: "so3", title: "green", folder: "green" },
        { id: "s04", title: "pink", folder: "pink" },
        { id: "w05", title: "night", folder: "night" },
        { id: "s11", title: "blue", folder: "blue" },
        { id: "w12", title: "sofa", folder: "sofa" },

    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccspa", cover: genJpg8(`ccspa/${item.folder}`)[0] })),


    ccred: [
        { id: "s01", title: "fur", folder: "fur" },
        { id: "w02", title: "floral", folder: "floral" },
        { id: "so3", title: "deco", folder: "deco" },
        { id: "s04", title: "che", folder: "che" },
        { id: "w05", title: "camisole", folder: "camisole" },
        { id: "s11", title: "choker", folder: "choker" },
        { id: "w12", title: "bodycon", folder: "bodycon" },
        { id: "s13", title: "blacktopV", folder: "blacktopV" },
        { id: "s14", title: "bench", folder: "bench" },
        { id: "w15", title: "backless", folder: "backless" },

        { id: "a01", title: "sultry", folder: "sultry" },
        { id: "a02", title: "sweater", folder: "sweater" },
        { id: "ao3", title: "whitshirtbodycon", folder: "whitshirtbodycon" },
        { id: "a04", title: "straplessonsofa", folder: "straplessonsofa" },
        { id: "a05", title: "spa_w_handbag", folder: "spa_w_handbag" },
        { id: "a11", title: "spasplit", folder: "spasplit" },
        { id: "a12", title: "spabed", folder: "spabed" },
        { id: "a13", title: "spa", folder: "spa" },
        { id: "a14", title: "lowneckhalter", folder: "lowneckhalter" },
        { id: "a15", title: "outdoor", folder: "outdoor" },
        { id: "a21", title: "ruched", folder: "ruched" },
        { id: "a22", title: "highneckhalter", folder: "highneckhalter" },
        { id: "a23", title: "golf", folder: "golf" },
        { id: "a24", title: "deepredstrapless", folder: "deepredstrapless" },

    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccred", cover: genJpg8(`ccred/${item.folder}`)[0] })),



    ccoutdoor: [
        { id: "s01", title: "sport", folder: "sport" },
        { id: "w02", title: "playground", folder: "playground" },
        { id: "so3", title: "seaside", folder: "seaside" },
        { id: "s04", title: "motor", folder: "motor" },
        { id: "w05", title: "garden", folder: "garden" },
        { id: "s11", title: "soccer", folder: "soccer" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccoutdoor", cover: genJpg8(`ccoutdoor/${item.folder}`)[0] })),



    ccnextdoor: [
        { id: "s01", title: "braids", folder: "braids" },
        { id: "w02", title: "light", folder: "light" },
        { id: "so3", title: "coat", folder: "coat" },
        { id: "s04", title: "eating", folder: "eating" },
        { id: "w05", title: "flowerinhand", folder: "flowerinhand" },
        { id: "s11", title: "heart", folder: "heart" },
        { id: "s13", title: "holiday", folder: "holiday" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccnextdoor", cover: genJpg8(`ccnextdoor/${item.folder}`)[0] })),

    ccformal: [
        { id: "s01", title: "sultry", folder: "sultry" },
        { id: "w02", title: "suite", folder: "suite" },
        { id: "so3", title: "stockings", folder: "stockings" },
        { id: "s04", title: "stewardess", folder: "stewardess" },
        { id: "w05", title: "stair", folder: "stair" },
        { id: "s11", title: "school", folder: "school" },
        { id: "w12", title: "pinkoffice", folder: "pinkoffice" },
        { id: "s13", title: "pants", folder: "pants" },
        { id: "s14", title: "bodycon_whiteshirt", folder: "bodycon_whiteshirt" },
        { id: "w15", title: "bodycon_blueshirt", folder: "bodycon_blueshirt" },
        { id: "s21", title: "bodycon_lace", folder: "bodycon_lace" },
        { id: "w22", title: "bodycon_ruched", folder: "bodycon_ruched" },
        { id: "s23", title: "bodycon_violet", folder: "bodycon_violet" },
        { id: "s24", title: "bodycon_pink", folder: "bodycon_pink" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccformal", cover: genJpg8(`ccformal/${item.folder}`)[0] })),

    ccbankunyuu: [
        { id: "s01", title: "sultry", folder: "sultry" },
        { id: "w02", title: "singleband", folder: "singleband" },
        { id: "so3", title: "picnic", folder: "picnic" },
        { id: "s04", title: "keyhole", folder: "keyhole" },
        { id: "w05", title: "cutout", folder: "cutout" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccbankunyuu", cover: genJpg8(`ccbankunyuu/${item.folder}`)[0] })),

    ccgreen: [
        { id: "s01", title: "uniform", folder: "uniform" },
        { id: "w02", title: "spa", folder: "spa" },
        { id: "so3", title: "pale", folder: "pale" },
        { id: "s04", title: "office", folder: "office" },
        { id: "w05", title: "keyhole", folder: "keyhole" },
        { id: "bo6", title: "halterneck", folder: "halterneck" },
        { id: "s07", title: "fur", folder: "fur" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccgreen", cover: genJpg8(`ccgreen/${item.folder}`)[0] })),

    ccwhite: [
        { id: "s01", title: "turtleneck", folder: "turtleneck" },
        { id: "w02", title: "pants", folder: "pants" },
        { id: "so3", title: "sp_sweater", folder: "sp_sweater" },
        { id: "s04", title: "glass", folder: "glass" },
        { id: "w05", title: "fish-net", folder: "fish-net" },
        { id: "bo6", title: "bridal", folder: "bridal" },
        { id: "s07", title: "bodycon", folder: "bodycon" },
        { id: "w08", title: "bbs", folder: "bbs" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccwhite", cover: genJpg8(`ccwhite/${item.folder}`)[0] })),





    ccpink: [
        { id: "s01", title: "whitetop", folder: "whitetop" },
        { id: "w02", title: "whitebottom", folder: "whitebottom" },
        { id: "so3", title: "purepink", folder: "purepink" },
        { id: "s04", title: "hotel", folder: "hotel" },
        { id: "w05", title: "deeppink", folder: "deeppink" },
        { id: "bo6", title: "brown", folder: "brown" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccpink", cover: genJpg8(`ccpink/${item.folder}`)[0] })),



    ccdemin: [
        { id: "s01", title: "yellowgreen", folder: "yellowgreen" },
        { id: "w02", title: "short", folder: "short" },
        { id: "so3", title: "regular", folder: "regular" },
        { id: "s04", title: "outdoor", folder: "outdoor" },
        { id: "w05", title: "lace_long_sleeve", folder: "lace_long_sleeve" },
        { id: "bo6", title: "darkblue", folder: "darkblue" },
        { id: "s07", title: "dark", folder: "dark" },
        { id: "w08", title: "bandeau", folder: "bandeau" },
        { id: "bo9", title: "backless", folder: "backless" },
        { id: "bob", title: "1shoulder", folder: "1shoulder" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccdemin", cover: genJpg8(`ccdemin/${item.folder}`)[0] })),


    ccche: [
        { id: "s01", title: "floral_violet", folder: "floral_violet" },
        { id: "w02", title: "floral_dragongown", folder: "floral_dragongown" },
        { id: "so3", title: "floral_color", folder: "floral_color" },
        { id: "s04", title: "floral_monochrome", folder: "floral_monochrome" },
        { id: "w05", title: "floral_green", folder: "floral_green" },
        { id: "w05", title: "floral_greentea", folder: "floral_greentea" },
        { id: "bob", title: "floral_yellow", folder: "floral_yellow" },
        { id: "bo6", title: "japanese", folder: "japanese" },
        { id: "s07", title: "night", folder: "night" },
        { id: "w08", title: "solidcolor", folder: "solidcolor" },
        { id: "o08", title: "outdoor", folder: "outdoor" },
        { id: "bo9", title: "red", folder: "red" },
        { id: "boa", title: "solidred", folder: "solidred" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccche", cover: genJpg8(`ccche/${item.folder}`)[0] })),


    bycc: [
        { id: "cc1", repo: "bycc", title: "Hot & Stunning", folder: "stunning" },
        { id: "cc2", repo: "bycc", title: "Angel's Temptation", folder: "pure" },
        { id: "c14", repo: "bycc", title: "Soft Allure", folder: "pink" },
        { id: "cc3", repo: "bycc", title: "Irresistible Charm", folder: "nextdoor" },

        { id: "cc4", repo: "bycc", title: "Seduction in Bed", folder: "bed" },
        { id: "cc5", repo: "bycc", title: "Steamy in the Bath", folder: "bath" },
        { id: "cc6", repo: "bycc", title: "Mystic Blue", folder: "blue" },
        { id: "cc7", repo: "bycc", title: "Grace in Cheongsam", folder: "cheongsam" },
        { id: "cc8", repo: "bycc", title: "Cosplay Fantasy", folder: "cos" },
        { id: "c13", repo: "bycc", title: "Casual Seduction", folder: "demin" },
        { id: "cc9", repo: "bycc", title: "Flirty Florals", folder: "floral" },
        { id: "c11", repo: "bycc", title: "Sensual Vision", folder: "glass" },
        { id: "c12", repo: "bycc", title: "Enchanting Green", folder: "green" },
        { id: "c16", repo: "bycc", title: "Mystic Red", folder: "red" },
        { id: "c10", repo: "bycc", title: "School Seduction", folder: "school" },

        { id: "c15", repo: "bycc", title: "Dazzling Sparkle", folder: "sparkling" },
        { id: "c17", repo: "bycc", title: "Bare & Bold", folder: "strapless" },
        { id: "c18", repo: "bycc", title: "Slender Straps", folder: "spaghetti" },
        { id: "c19", repo: "bycc", title: "Sultry Split", folder: "split" },
        { id: "c20", repo: "bycc", title: "Bridal Desire", folder: "wedding" },

        { id: "cp25", repo: "bycc24", title: "2025 Collection", folder: "2025" },
        { id: "cp24", repo: "bycc24", title: "2024 Collection", folder: "2024" },
        { id: "cp23", repo: "bycc23", title: "2023 Collection", folder: "2023" },
        { id: "cp22", repo: "bycc23", title: "2022 Collection", folder: "2022" },
        { id: "cp21", repo: "bycc23", title: "2021 Collection", folder: "2021" },
    ].map(item => ({
        ...item,
        ghname: "aidres8",
        cover: genJpg8(`${item.repo}/${item.folder}`)[0]
    })),


    bwxy: [
        { id: "w01", repo: "bwxy", title: "Daily Fresh & Hot Trends", folder: "stunning" },
        { id: "w02", repo: "bwxy", title: "Sultry Evenings Under the Lights", folder: "bar" },
        { id: "w03", repo: "bwxy", title: "Cozy & Seductive Bath Moments", folder: "bath" },
        { id: "w04", repo: "bwxy", title: "Elegant in Cheongsam", folder: "cheongsam" },
        { id: "w05", repo: "bwxy", title: "Sassy in Croptops", folder: "croptop" },
        { id: "w06", repo: "bwxy", title: "Sublime Décolleté", folder: "decollete" },
        { id: "w07", repo: "bwxy", title: "Enchanting in Business", folder: "formal" },
        { id: "w08", repo: "bwxy", title: "Allure en Halter", folder: "haltertop" },
        { id: "w09", repo: "bwxy", title: "Timeless Grace in Silk & Lace", folder: "lace" },
        { id: "w10", repo: "bwxy", title: "Nocturne in New York", folder: "nightnewyork" },
        { id: "w11", repo: "bwxy", title: "Chic at Work", folder: "office" },
        { id: "w12", repo: "bwxy", title: "Breeze & Beyond", folder: "outdoor" },
        { id: "w13", repo: "bwxy", title: "Chic in Motion", folder: "pants" },
        { id: "w14", repo: "bwxy", title: "Teasing Transparency", folder: "seethrough" },
        { id: "w15", repo: "bwxy", title: "Sultry Spaghetti Straps", folder: "spaghetti" },
        { id: "w16", repo: "bwxy", title: "Mystic in Uniform", folder: "uniform" },
        { id: "vio", repo: "bwxy", title: "A Royal Seduction", folder: "violet" },
        { id: "spar", repo: "bwxy", title: "Dazzling in Sparkling", folder: "sparkling" },
        { id: "che", repo: "bwxy", title: "Elegant in Cheongsam", folder: "cheongsam" },
        { id: "bod", repo: "bwxy", title: "Curves in Command", folder: "bodycon" },
        { id: "coa", repo: "bwxy", title: "Wrapped in Elegance", folder: "coat" },
        { id: "cos", repo: "bwxy", title: "Fantasy & Cosplay Queens", folder: "cos" },
        { id: "hom", repo: "bwxy", title: "Cozy Chic & Homely Elegance", folder: "home" },
        { id: "nex", repo: "bwxy", title: "The Girl Next Door", folder: "nextdoor" },
        { id: "sof", repo: "bwxy", title: "Relaxed Allure", folder: "sofa" },
        { id: "cc8", repo: "bwxy", title: "Classroom Charm", folder: "school" },
        { id: "c25", repo: "bwxy", title: "Bare & Beautiful & Strapless", folder: "strapless" },
        { id: "c12", repo: "bwxy", title: "Casual Chic in Demin", folder: "demin" },
        { id: "c13", repo: "bwxy", title: "Blush of Desire", folder: "pink" },
        { id: "c38", repo: "bwxy", title: "Passionate Hues", folder: "red" },
        { id: "c43", repo: "bwxy", title: "Daring Affair", folder: "split" },
        { id: "sul", repo: "bwxy", title: "Simply Irresistible", folder: "sultry" },
    ].map(item => ({ ...item, ghname: "aidres8", cover: genJpg8(`${item.repo}/${item.folder}`)[0] })),


    b2: [
        { id: "w01", repo: "b2", title: "Twice the Temptation", folder: "two" },
        { id: "w02", repo: "b2", title: "Craving More", folder: "more" },
    ].map(item => ({ ...item, ghname: "aidres8", cover: genJpg8(`${item.repo}/${item.folder}`)[0] })),

    bnabi: [
        { id: "s01", title: "Dazzling in Sparkling", folder: "sparkling" },
        { id: "w02", title: "Timeless Gown Beauty", folder: "gown" },
        { id: "bod", title: "Curves in Command", folder: "bodycon" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "bnabi", cover: genJpg8(`bnabi/${item.folder}`)[0] })),

    bcmy: [
        { id: "s01", title: "Pure Temptation", folder: "white" },
        { id: "w02", title: "Dark Desire", folder: "black" },
        { id: "bod", title: "Golden Glow", folder: "yellow" },
        { id: "spar", title: "Dazzling in Sparkling", folder: "sparkling" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "bcmy", cover: genJpg8(`bcmy/${item.folder}`)[0] })),


    absyz: [
        { id: "SYZStunning", title: "Daily Fresh & Hot Trends", folder: "stunning" },
        { id: "SYZBed", title: "Cozy & Seductive Moments", folder: "bbs" },
        { id: "SYZDeco", title: "Sublime Décolleté", folder: "decollete" },
        { id: "SYZFlo", title: "Flirty Floral Charms", folder: "floral" },
        { id: "SYZLace", title: "Timeless Grace in Silk & Lace", folder: "lace" },
        { id: "SYZOne", title: "Fantasy & Queens", folder: "oneshoulder" },
        { id: "SYZOff", title: "Chic at Work", folder: "office" },
        { id: "SYZSpa", title: "Sultry Spaghetti Straps", folder: "spaghetti" },
        { id: "SYZStr", title: "Bare & Beautiful", folder: "strapless" },
    ].map(item => ({
        ...item,
        ghname: "ai8ai",
        repo: "absyz",
        cover: genJpg5(`absyz/${item.folder}`)[0]   // Use `folder` for `cover`
    })),

    abstunning: [
        { id: "abs3", title: "Forever Divine", folder: "forever_divine", cover: genJpg5("abstunning/forever_divine")[0] },
        { id: "abs1", title: "Blooming Beauty", folder: "blooming_beauty", cover: genJpg5("abstunning/blooming_beauty")[0] },
        { id: "abs2", title: "Bare & Beautiful", folder: "sultry", cover: genJpg5("abstunning/sultry")[0] },
        { id: "abs4", title: "Lovely", folder: "lovely", cover: genJpg5("abstunning/lovely")[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abstunning", })),


    abkele: [
        { id: "kelBed", title: "Cozy & Seductive Moments", count: "40", folder: "bbs", cover: genJpgList("abkele/bbs/ba", 5)[0] },
        { id: "kelBlackSilk", title: "Timeless Grace in Silk & Lace", count: "20", folder: "blacksilk", cover: genJpgList("abkele/blacksilk/bl", 5)[0] },
        { id: "kelChe", title: "Elegant in Cheongsam", count: "30", folder: "cheongsam", cover: genJpgList("abkele/cheongsam/ch", 5)[0] },
        { id: "kelFlo", title: "Flirty Floral Charms", count: "20", folder: "floral", cover: genJpgList("abkele/floral/fl", 5)[0] },
        { id: "kelHome", title: "Cozy Chic & Homely Elegance", count: "30", folder: "home", cover: genJpgList("abkele/home/ho", 5)[0] },
        { id: "kelLeg", title: "Bare & Beautiful Legs", count: "20", folder: "leg", cover: genJpgList("abkele/leg/le", 5)[0] },
        { id: "kelOff", title: "Chic at Work", count: "30", folder: "office", cover: genJpgList("abkele/office/of", 5)[0] },
        { id: "kelSofa", title: "Sofa Soft", count: "40", folder: "sofa", cover: genJpgList("abkele/sofa/so", 5)[0] },
        { id: "kelSpa", title: "Sultry Spaghetti Straps", count: "10", folder: "spaghetti", cover: genJpgList("abkele/spegatti/sp", 5)[0] },
        { id: "kelSto", title: "Silken Allure & Enchanting Legs", count: "20", folder: "stockings", cover: genJpgList("abkele/stockings/st", 5)[0] },
        { id: "kelStunning", title: "Daily Fresh & Hot Trends", count: "10", folder: "stunning", cover: genJpgList("abkele/stunning/st", 5)[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abkele", })),


    ablxl: [
        { id: "lxlBed", title: "Cozy & Seductive Moments", count: "10", folder: "bedbathsofa", cover: genJpgList("ablxl/bedbathsofa/be", 5)[0] },
        { id: "lxlChe", title: "Elegant in Cheongsam", count: "10", folder: "cheongsam", cover: genJpgList("ablxl/cheongsam/ch", 5)[0] },
        { id: "lxlDeco", title: "Sublime Décolleté", count: "10", folder: "deco", cover: genJpgList("ablxl/deco/de", 5)[0] },
        { id: "lxlFish", title: "Daily Fresh & Hot Trends", count: "10", folder: "fishdress", cover: genJpgList("ablxl/fishdress/fi", 5)[0] },
        { id: "lxlOff", title: "Chic at Work", count: "10", folder: "office", cover: genJpgList("ablxl/office/of", 5)[0] },
        { id: "lxlPen", title: "Seductive Pencil", count: "10", folder: "pencilskirt", cover: genJpgList("ablxl/pencilskirt/pe", 5)[0] },
        { id: "lxlSpa", title: "Sultry Spaghetti Straps", count: "10", folder: "spaghetti", cover: genJpgList("ablxl/spaghetti/sp", 5)[0] },
        { id: "lxlStr", title: "Bare & Beautiful", count: "10", folder: "strapless", cover: genJpgList("ablxl/strapless/st", 5)[0] },
        { id: "lxlTeacher", title: "Enchanting in Teaching", count: "10", folder: "teacher", cover: genJpgList("ablxl/teacher/te", 5)[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "ablxl", })),

    abspecialtaste: [
        { id: "speStunning", title: "Daily Fresh & Hot Trends", folder: "stunning", cover: genJpgList("abspecialtaste/stunning/st", 5)[0] },
        { id: "as1", title: "Cosplay Fantasy", folder: "cosplay", cover: genJpg5("abspecialtaste/cosplay", 5)[0] },
        { id: "as2", title: "Face", folder: "face", cover: genJpg5("abspecialtaste/face", 5)[0] },
        { id: "as3", title: "Back & Butt", folder: "backbutt", cover: genJpg5("abspecialtaste/backbutt", 5)[0] },
        { id: "speBack", title: "Elegance from Behind", folder: "back", cover: genJpgList("abspecialtaste/back/ba", 5)[0] },
        { id: "speButt", title: "Curves & Confidence", folder: "butt", cover: genJpgList("abspecialtaste/butt/bu", 5)[0] },
        { id: "speFinger", title: "Graceful Fingertips", folder: "finger", cover: genJpgList("abspecialtaste/finger/fi", 5)[0] },
        { id: "speLeg", title: "Poise in Every Step", folder: "legfeet", cover: genJpgList("abspecialtaste/legfeet/le", 5)[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abspecialtaste", })),


    abholiday: [
        { id: "holLuneryear", title: "Chinese New Year", folder: "luneryear", cover: genJpgList("abholiday/luneryear/lu", 5)[0] },
        { id: "holDeco", title: "Sublime Décolleté", folder: "deco", cover: genJpgList("abholiday/deco/de", 5)[0] },
        { id: "holWal", title: "Elegant Wallpaper", folder: "wallpaper", cover: genJpgList("abholiday/wallpaper/wa", 5)[0] },
        { id: "hol", title: "Weddings", folder: "weddings", cover: genJpgList("abholiday/weddings/bb", 5)[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abholiday", })),


    abccc: [
        { id: "cccStunning", title: "Daily Fresh & Hot Trends", count: "10", folder: "stunning", cover: genJpgList("abccc/stunning/st", 5)[0] },
        { id: "cccBBS", title: "Cozy & Seductive Moments", count: "10", folder: "bbs", cover: genJpgList("abccc/bbs/ba", 5)[0] },
        { id: "cccBri", title: "Briliant ...", count: "10", folder: "briliant", cover: genJpgList("abccc/briliant/br", 5)[0] },
        { id: "cccSexy", title: "Sultry", count: "10", folder: "sexy", cover: genJpgList("abccc/sexy/se", 5)[0] },
        { id: "cccStr", title: "Bare & Beautiful", count: "10", folder: "strapless", cover: genJpgList("abccc/strapless/st", 5)[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abccc", })),


    abanran: [
        { id: "anrStunning", title: "Daily Fresh & Hot Trends", folder: "stunning", cover: genJpgList("abanran/stunning/st", 5)[0] },
        { id: "anrSto", title: "Dazzling in Sparkling", folder: "sparkling", cover: genJpg5("abanran/sparkling", 5)[0] },
        { id: "anrOff", title: "Chic at Work", folder: "office", cover: genJpgList("abanran/office/of", 5)[0] },
        { id: "anrHotel", title: "Luxe Escapes & Midnight Whispers", folder: "hotel", cover: genJpgList("abanran/hotel/ho", 5)[0] },
        { id: "anrDenim", title: "Casual Chic in Denim", folder: "denims", cover: genJpgList("abanran/demins/de", 5)[0] },
        { id: "anrClass", title: "Enchanting in Class", folder: "classroom", cover: genJpgList("abanran/classroom/cl", 5)[0] },
        { id: "bod", title: "Sculpted Seduction", folder: "bodycon", cover: genJpg5("abanran/bodycon")[0] },

    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abanran", })),


    abcel: [
        { id: "ce1", title: "Clara 클라라", folder: "kelala", cover: genJpg5("abcel/kelala", 5)[0] },
        { id: "cel1", title: "Dong Liya ", folder: "dongliya", cover: genJpg5("abcel/dongliya", 5)[0] },
        { id: "cel2", title: "Jing Tian 景甜", folder: "jingtian", cover: genJpg5("abcel/jingtian", 5)[0] },
        { id: "cel3", title: "Annonymous", folder: "others", cover: genJpg5("abcel/others", 5)[0] },
        { id: "cel4", title: "Da Mi Mi", folder: "yangmi", cover: genJpg5("abcel/yangmi", 5)[0] },
        { id: "cel5", title: "Raincoat Zhang", folder: "zhangyuyi", cover: genJpg5("abcel/zhangyuyi", 5)[0] },
        { id: "cel6", title: "Liu Yan", folder: "liuyan", cover: genJpg5("abcel/liuyan")[0] },
        { id: "cel7", title: "Yang Mi 大幂幂", folder: "yangmi", cover: genJpg5("abcel/yangmi")[0] },
        { id: "cel8", title: "Du Xiaoyu", folder: "duxiaoyu", cover: genJpg5("abcel/duxiaoyu")[0] },
        { id: "ce9", title: "Xu Dongdong", folder: "xudongdong", cover: genJpg5("abcel/xudongdong")[0] },
        { id: "ce8", title: "Yue Yue 玥儿玥", folder: "yey", cover: genJpg5("abcel/yey")[0] },
        { id: "ce7", title: "He Ruixian 何瑞贤", folder: "heruixian", cover: genJpg5("abcel/heruixian")[0] },
        { id: "ce6", title: "Xuan Lu 宣璐", folder: "xuanlu", cover: genJpg5("abcel/xuanlu")[0] },
        { id: "ce5", title: "Zhang Xinxin 张欣欣", folder: "zhangxinxin", cover: genJpg5("abcel/zhangxinxin")[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abcel", })),


    igif: [
        { id: "sc1", title: "GIF", folder: "gif", cover: genGifList("igif/gif/gi", 5)[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "igif", })),


    absketch: [
        { id: "sc1", title: "Sketch", folder: "sketch", cover: genJpgList("absketch/sketch/sk", 5)[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "absketch", })),


    abxlz: [
        { id: "xlzBed", title: "Cozy & Seductive Moments", folder: "bbs", cover: genJpgList("abxlz/bbs/be", 5)[0] },
        { id: "xlzHome", title: "Cozy Chic & Homely Elegance", folder: "home", cover: genJpgList("abxlz/home/ho", 5)[0] },
        { id: "xlzOff", title: "Chic at Work", folder: "office", cover: genJpgList("abxlz/office/of", 5)[0] },
        { id: "xlzOut", title: "Breeze & Beyond", folder: "outdoor", cover: genJpgList("abxlz/outdoor/ou", 5)[0] },
        { id: "xlzSee", title: "Seethrough ...", folder: "seethrough", cover: genJpgList("abxlz/seethrough/se", 5)[0] },
        { id: "xlzSpa", title: "Sultry Spaghetti Straps", folder: "spaghetti", cover: genJpgList("abxlz/spaghetti/sp", 5)[0] },
        { id: "xlzSto", title: "Silken Allure & Enchanting Legs", folder: "stockings", cover: genJpgList("abxlz/stockings/st", 5)[0] },
        { id: "xlzWed", title: "Angelically Innocent", folder: "weddings", cover: genJpgList("abxlz/weddings/we", 5)[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abxlz", })),


    absuren: [
        { id: "surOff", title: "Stunning", folder: "stunning", cover: genJpg5("absuren/stunning")[0] },
        { id: "ire1", title: "Bakunyuu", folder: "bakunyuu", cover: genJpg5("absuren/bakunyuu")[0] },
        { id: "surChu", title: "Fantasy & Queens", folder: "chubby", cover: genJpg5("absuren/chubby")[0] },
        { id: "surDeco", title: "Middle Age", folder: "mid", cover: genJpg5("absuren/mid")[0] },
        { id: "mie", title: "Middle East", folder: "middleeast", cover: genJpg5("absuren/middleeast")[0] },
        { id: "surDot", title: "Next Door Girls", folder: "nextdoor", cover: genJpg5("absuren/nextdoor")[0] },
        { id: "surPure", title: "Angelically Innocent", folder: "pure", cover: genJpg5("absuren/lolita")[0] },
        { id: "surFlo", title: "Flirty Socialite 名媛", folder: "socialite", cover: genJpg5("absuren/socialite")[0] },
        { id: "squ", title: "Square", folder: "square", cover: genJpg5("absuren/square")[0] },
        { id: "surFace", title: "Travel", folder: "travel", cover: genJpg5("absuren/travel")[0] },
        { id: "surFace3", title: "Somebody 2", folder: "sb2", cover: genJpg5("absuren/sb2")[0] },
        { id: "surFace2", title: "Somebody 3", folder: "sb3", cover: genJpg5("absuren/sb3")[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "absuren", })),


    abmini: [
        { id: "ire1", title: "Lush Curves", folder: "bakunyuu", cover: genJpg5("abmini/bakunyuu")[0] },
        { id: "ire2", title: "Tempting Décolleté", folder: "deco", cover: genJpg5("abmini/deco")[0] },
        { id: "ire3", title: "Sculpted Seduction", folder: "bodycon", cover: genJpg5("abmini/bodycon")[0] },
        { id: "ire8", title: "Bare & Bold", folder: "haltertop", cover: genJpg5("abmini/haltertop")[0] },
        { id: "ire4", title: "Irresistible Charm", folder: "nextdoor", cover: genJpg5("abmini/nextdoor")[0] },
        { id: "ire5", title: "Slender Straps", folder: "spaghetti", cover: genJpg5("abmini/spaghetti")[0] },
        { id: "ire6", title: "Bare Elegance", folder: "strapless", cover: genJpg5("abmini/strapless")[0] },
        { id: "ire7", title: "Suite Seduction", folder: "suite", cover: genJpg5("abmini/suite")[0] },
        { id: "ire17", title: "Snug & Sultry", folder: "sweater", cover: genJpg5("abmini/sweater")[0] },
        { id: "ire27", title: "Undone Desire", folder: "whiteshirt", cover: genJpg5("abmini/whiteshirt")[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abmini", })),


    abss: [
        { id: "flo1", title: "black heart", folder: "heart", cover: genJpg5("abss/heart")[0] },
        { id: "flo2", title: "high-neck halter", folder: "highneckhalter", cover: genJpg5("abss/highneckhalter")[0] },
        { id: "flo3", title: "Leopard", folder: "leopard", cover: genJpg5("abss/leopard")[0] },
        { id: "flo4", title: "turtle neck", folder: "turtleneck", cover: genJpg5("abss/turtleneck")[0] },
        { id: "fl5", title: "Elegant in Cheongsam", folder: "cheongsam", cover: genJpg5("abss/cheongsam")[0] },
        { id: "fl6", title: "Bodycon", folder: "bodycon", cover: genJpg5("abss/bodycon")[0] },
        { id: "fye6", title: "Yellow", folder: "yellow", cover: genJpg5("abss/yellow")[0] },
        { id: "ken", title: "Kendall Style", folder: "kendall", cover: genJpg5("abss/kendall")[0] },
        { id: "ff6", title: "Split", folder: "split", cover: genJpg5("abss/split")[0] },
        { id: "YCCSpa", title: "Sultry Spaghetti Straps", folder: "spa", cover: genJpg5("abss/spa")[0] },
        { id: "cc5", title: "Flirty Floral Charms", folder: "floral", cover: genJpg5("abss/floral")[0] },
        { id: "wxyHalt", title: "Allure en Halter", folder: "haltertop", cover: genJpg5("abss/haltertop")[0] },
        { id: "SYZLace", title: "Timeless Grace in Silk & Lace", folder: "lace", cover: genJpg5("abss/lace")[0] },
        { id: "SYZOne", title: "Fantasy & Queens", folder: "oneshoulder", cover: genJpg5("abss/oneshoulder")[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abss", })),


    abplaces: [
        { id: "sch1", title: "School", folder: "school", cover: genJpg5("abplaces/school")[0] },
        { id: "sch2", title: "Office", folder: "office", cover: genJpg5("abplaces/office")[0] },
        { id: "sch3", title: "Home", folder: "home", cover: genJpg5("abplaces/home")[0] },
        { id: "sch4", title: "Night", folder: "night", cover: genJpg5("abplaces/night")[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abplaces", })),


    abpast: [
        { id: "sch1", title: "2024", folder: "2024", cover: genJpg5("abpast/2024")[0] },
        { id: "sch2", title: "2023", folder: "2023", cover: genJpg5("abpast/2023")[0] },
        { id: "sch3", title: "2022", folder: "2022", cover: genJpg5("abpast/2022")[0] },
        { id: "sch4", title: "2021", folder: "2021", cover: genJpg5("abpast/2021")[0] },
        { id: "sch41", title: "2020", folder: "2020", cover: genJpg5("abpast/2020")[0] },
        { id: "sch42", title: "2019", folder: "2019", cover: genJpg5("abpast/2019")[0] },
        { id: "sch43", title: "2018", folder: "2018", cover: genJpg5("abpast/2018")[0] },
        { id: "sch47", title: "2017", folder: "2017", cover: genJpg5("abpast/2017")[0] },
        { id: "sch46", title: "2016", folder: "2016", cover: genJpg5("abpast/2016")[0] },
        { id: "sch45", title: "2015", folder: "2015", cover: genJpg5("abpast/2015")[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abpast", })),


    abzyx: [
        { id: "az2", title: "bodycon", folder: "bodycon", cover: genJpg5("abzyx/bodycon")[0] },
        { id: "az3", title: "Elegant in Cheongsam", folder: "cheongsam", cover: genJpg5("abzyx/cheongsam")[0] },
        { id: "wxyHalt", title: "Allure en Halter", folder: "haltertop", cover: genJpg5("abzyx/haltertop")[0] },
        { id: "SYZLace", title: "Timeless Grace in Silk & Lace", folder: "lace", cover: genJpg5("abzyx/lace")[0] },
        { id: "YCCSpa", title: "Sultry Spaghetti Straps", folder: "spa", cover: genJpg5("abzyx/spa")[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abzyx", })),

};
