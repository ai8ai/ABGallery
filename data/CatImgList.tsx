// Category
import { CatInterface, Cat2SubMap } from '@/config/type';
import { genJpg8, genJpg5, genGifList, genJpgList } from '@/utils/genImageList'

export const HomeList: CatInterface[] = [
    { id: "abstunning", ghname:"ai8ai"     , title: "Hot & Stunning", shorttitle: "Hot & Stunning", cover: genJpg5("abcat/stunning")[0] },

    { id: "bycc",       ghname:"aidres8", title: "Yang Chenchen \n Yome Sugar 杨晨晨", shorttitle: "Yang Chenchen", cover: genJpgList("abcat/ycc/yc", 5)[0] },
    { id: "bwxy",       ghname:"aidres8", title: "Wang Xinyao \n Yanni 王馨瑶", shorttitle: "Wang Xinyao", cover: genJpgList("abcat/wxy/wc", 5)[0] },
    
    { id: "bcmy",       ghname:"aidres8", title: "Chu Mengyao 初梦瑶", shorttitle: "Chu Mengyao 初梦瑶", cover: genJpg8("abcat/cmy")[0]},
    { id: "bnabi",      ghname:"aidres8", title: "Yeon 娜比", shorttitle: "Yeon 娜比", cover: genJpg8("abcat/nabi")[0] },
    { id: "b2",         ghname:"aidres8", title: "Group", shorttitle: "Group", cover: genJpg8("abcat/b2")[0] },

    { id: "absyz",  ghname:"ai8ai"     , title: "Son Yoon Joo \n 손윤주 孙允珠", shorttitle: "Son Yoon Joo", cover: genJpgList("abcat/syz/sc", 5)[0] },
    { id: "absuren",ghname:"ai8ai"     , title: "Girl Next Door \n shirouto素人しろうと", shorttitle: "Girl Next Door", cover: genJpgList("abcat/suren/sc", 5)[0] },
    { id: "abkele", ghname:"ai8ai"     , title: "Kele Vicky", shorttitle: "Kele Vicky", cover: genJpgList("abcat/kele/kc", 5)[0] },
    { id: "abanran",ghname:"ai8ai"     , title: "Anran 安然", shorttitle: "Anran", cover: genJpgList("abcat/anran/ac", 5)[0] },
    { id: "abzyx",  ghname:"ai8ai"     , title: "Carol 周妍希", shorttitle: "Carol周妍希", cover: genJpg5("abcat/zyx")[0] },
    { id: "abxlz",  ghname:"ai8ai"     , title: "Xu Lizhi Booty \n 徐莉芝", shorttitle: "Xu Lizhi", cover: genJpgList("abcat/xlz/xc", 5)[0] },
    { id: "abccc",  ghname:"ai8ai"     , title: "Cheng Chengcheng 程程程", shorttitle: "Cheng Chengcheng", cover: genJpgList("abcat/ccc/cc", 5)[0] },
    { id: "ablxl",  ghname:"ai8ai"     , title: "Lin Xinglan 林星阑", shorttitle: "Lin Xinglan", cover: genJpgList("abcat/lxl/lc", 5)[0] },
    { id: "abcel",  ghname:"ai8ai"     , title: "Celebrities", shorttitle: "Celebrities", cover: genJpgList("abcat/cel/cc", 5)[0] },
    { id: "abholiday",ghname:"ai8ai"     , title: "Holidays", shorttitle: "Holidays", cover: genJpgList("abcat/holiday/hc", 5)[0] },
    { id: "abspecialtaste",ghname:"ai8ai"     , title: "Special Taste", shorttitle: "Special Taste", cover: genJpgList("abcat/special/sc", 5)[0] },
    { id: "absketch",ghname:"ai8ai"     , title: "Sketch & Hand-drawing", shorttitle: "Sketch & Hand-drawing", cover: genJpgList("abcat/sketch/sc", 5)[0] },
    { id: "abmini", ghname:"ai8ai"     , title: "Modern Minimalist", shorttitle: "Modern Minimalist", cover: genJpg5("abcat/mini")[0] },
    { id: "abss",   ghname:"ai8ai"     , title: "Signature Styles", shorttitle: "Signature Styles", cover: genJpg5("abcat/ss")[0] },
    { id: "abplaces",ghname:"ai8ai"     , title: "Places", shorttitle: "Places", cover: genJpg5("abcat/places")[0] },
    { id: "igif",   ghname:"ai8ai"     , title: "GIF MP4", shorttitle: "GIF", cover: genGifList("aicat/gif/gc", 5)[0] },
    { id: "abpast", ghname:"ai8ai"     , title: "Past Year Collection", shorttitle: "past", cover: genJpg5("abcat/past")[0] },
];

export const Cat2Sub2Img: Cat2SubMap = {
    bycc: [
        { id: "cc1", repo:"bycc", title: "Hot & Stunning", folder: "stunning" },
        { id: "cc2", repo:"bycc", title: "Angel's Temptation", folder: "pure" },
        { id: "cc3", repo:"bycc", title: "Irresistible Charm", folder: "nextdoor" },
        { id: "cc4", repo:"bycc", title: "Seduction in Bed", folder: "bed" },
        { id: "cc5", repo:"bycc", title: "Steamy in the Bath", folder: "bath" },
        { id: "cc6", repo:"bycc", title: "Mystic Blue", folder: "blue" },
        { id: "cc7", repo:"bycc", title: "Grace in Cheongsam", folder: "cheongsam" },
        { id: "cc8", repo:"bycc", title: "Cosplay Fantasy", folder: "cos" },
        { id: "cc9", repo:"bycc", title: "Flirty Florals", folder: "floral" },
        { id: "c10", repo:"bycc", title: "School Seduction", folder: "school" },
        { id: "c11", repo:"bycc", title: "Sensual Vision", folder: "glass" },
        { id: "c12", repo:"bycc", title: "Enchanting Green", folder: "green" },
        { id: "c13", repo:"bycc", title: "Casual Seduction", folder: "demin" },
        { id: "c14", repo:"bycc", title: "Soft Allure", folder: "pink" },
        { id: "c15", repo:"bycc", title: "Dazzling Sparkle", folder: "sparkling" },
        { id: "c16", repo:"bycc", title: "Mystic Red", folder: "red" },
        { id: "c17", repo:"bycc", title: "Bare & Bold", folder: "strapless" },
        { id: "c18", repo:"bycc", title: "Slender Straps", folder: "spaghetti" },
        { id: "c19", repo:"bycc", title: "Sultry Split", folder: "split" },
        { id: "c20", repo:"bycc", title: "Bridal Desire", folder: "wedding" },

        { id: "yc1", repo:"byc2", title: "bankunyuu", folder: "bankunyuu" },
        { id: "yc2", repo:"byc2", title: "garage", folder: "garage" },
        { id: "yc3", repo:"byc2", title: "halterneck", folder: "halterneck" },
        { id: "yc4", repo:"byc2", title: "heart", folder: "heart" },
        { id: "yc5", repo:"byc2", title: "", folder: "" },
        { id: "yc6", repo:"byc2", title: "", folder: "" },
        { id: "yc7", repo:"byc2", title: "", folder: "" },
        { id: "yc8", repo:"byc2", title: "", folder: "" },
        { id: "yc9", repo:"byc2", title: "", folder: "" },
        { id: "y10", repo:"byc2", title: "", folder: "" },
        { id: "y11", repo:"byc2", title: "", folder: "" },
        { id: "y12", repo:"byc2", title: "", folder: "" },
        { id: "y13", repo:"byc2", title: "", folder: "" },
        { id: "y14", repo:"byc2", title: "", folder: "" },
        { id: "y15", repo:"byc2", title: "", folder: "" },
        { id: "y16", repo:"byc2", title: "", folder: "" },
        { id: "y17", repo:"byc2", title: "", folder: "" },
        { id: "y18", repo:"byc2", title: "", folder: "" },
        { id: "y19", repo:"byc2", title: "", folder: "" },
        { id: "y20", repo:"byc2", title: "", folder: "" },
        { id: "y21", repo:"byc2", title: "New", folder: "new" },
		
        { id: "cp25", repo:"bycc24", title: "2025 Collection", folder: "2025" },
        { id: "cp24", repo:"bycc24", title: "2024 Collection", folder: "2024" },
        { id: "cp23", repo:"bycc23", title: "2023 Collection", folder: "2023" },
        { id: "cp22", repo:"bycc23", title: "2022 Collection", folder: "2022" },
        { id: "cp21", repo:"bycc23", title: "2021 Collection", folder: "2021" },
    ].map(item => ({
        ...item,
        ghname: "aidres8",
        cover: genJpg8(`${item.repo}/${item.folder}`)[0]
    })),


    bwxy: [
        { id: "w01", repo:"bwxy",  title: "Daily Fresh & Hot Trends",   folder: "stunning"},     
        { id: "w02", repo:"bwxy",  title: "Sultry Evenings Under the Lights",            		folder: "bar"},                 
        { id: "w03", repo:"bwxy",  title: "Cozy & Seductive Bath Moments",   folder: "bath"},          
        { id: "w04", repo:"bwxy",  title: "Elegant in Cheongsam",       folder: "cheongsam"},        
        { id: "w05", repo:"bwxy",  title: "Sassy in Croptops",          folder: "croptop"},             
        { id: "w06", repo:"bwxy",  title: "Sublime Décolleté",          folder: "decollete"},           
        { id: "w07", repo:"bwxy",  title: "Enchanting in Business",     folder: "formal"},         
        { id: "w08", repo:"bwxy",  title: "Allure en Halter",           folder: "haltertop"},            
        { id: "w09", repo:"bwxy",  title: "Timeless Grace in Silk & Lace",folder: "lace"},    
        { id: "w10", repo:"bwxy",  title: "Nocturne in New York",       folder: "nightnewyork"},     
        { id: "w11", repo:"bwxy",  title: "Chic at Work",               folder: "office"},                   
        { id: "w12", repo:"bwxy",  title: "Breeze & Beyond",            folder: "outdoor"},               
        { id: "w13", repo:"bwxy",  title: "Chic in Motion",             folder: "pants"},                  
        { id: "w14", repo:"bwxy",  title: "Teasing Transparency",             folder: "seethrough"},             
        { id: "w15", repo:"bwxy",  title: "Sultry Spaghetti Straps",    folder: "spaghetti"},   
        { id: "w16", repo:"bwxy",  title: "Mystic in Uniform",          folder: "uniform"},             
        { id: "vio", repo:"bwxy",  title: "A Royal Seduction",       folder: "violet" },
        { id: "spar", repo:"bwxy", title: "Dazzling in Sparkling", folder: "sparkling" },
        { id: "che", repo:"bwxy",  title: "Elegant in Cheongsam",       folder: "cheongsam" },
        { id: "bod", repo:"bwxy",  title: "Curves in Command",       folder: "bodycon" },
        { id: "coa", repo:"bwxy",  title: "Wrapped in Elegance",       folder: "coat" },
        { id: "cos", repo:"bwxy",  title: "Fantasy & Cosplay Queens", folder: "cos" },
        { id: "hom", repo:"bwxy",  title: "Cozy Chic & Homely Elegance", folder: "home" },
        { id: "nex", repo:"bwxy",  title: "The Girl Next Door", folder: "nextdoor" },
        { id: "sof", repo:"bwxy", title: "Relaxed Allure", folder: "sofa" },
        { id: "cc8", repo:"bwxy", title: "Classroom Charm", folder: "school" },
        { id: "c25", repo:"bwxy", title: "Bare & Beautiful & Strapless", folder: "strapless" },
        { id: "c12", repo:"bwxy", title: "Casual Chic in Demin", folder: "demin" },
        { id: "c13", repo:"bwxy", title: "Blush of Desire", folder: "pink" },
        { id: "c38", repo:"bwxy", title: "Passionate Hues", folder: "red" },
        { id: "c43", repo:"bwxy", title: "Daring Affair", folder: "split" },
        { id: "sul", repo:"bwxy", title: "Simply Irresistible", folder: "sultry" },
    ].map(item => ({...item,        ghname: "aidres8",        cover: genJpg8(`${item.repo}/${item.folder}`)[0]    })),


    b2: [
        { id: "w01", repo: "b2", title: "Twice the Temptation", folder: "two" },     
        { id: "w02", repo: "b2", title: "Craving More", folder: "more" },                  
    ].map(item => ({...item,        ghname: "aidres8",        cover: genJpg8(`${item.repo}/${item.folder}`)[0]    })),

    bnabi: [
        { id: "s01", title: "Dazzling in Sparkling", folder: "sparkling" },
        { id: "w02", title: "Timeless Gown Beauty",  folder: "gown"},                 
        { id: "bod", title: "Curves in Command",       folder: "bodycon" },
    ].map(item => ({...item,ghname: "aidres8",    repo: "bnabi", cover: genJpg8(`bnabi/${item.folder}`)[0]    })),

    bcmy: [
        { id: "s01", title: "Pure Temptation", folder: "white" },
        { id: "w02", title: "Dark Desire",  folder: "black"},                 
        { id: "bod", title: "Golden Glow",       folder: "yellow" },
        { id: "spar",title: "Dazzling in Sparkling", folder: "sparkling" },
    ].map(item => ({...item,ghname: "aidres8",    repo: "bcmy", cover: genJpg8(`bcmy/${item.folder}`)[0]    })),


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
    ].map(item => ({...item,ghname: "ai8ai",    repo: "abstunning",})),


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
    ].map(item => ({...item,ghname: "ai8ai",    repo: "abkele",})),


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
    ].map(item => ({...item,ghname: "ai8ai",    repo: "ablxl",})),

    abspecialtaste: [
        { id: "speStunning", title: "Daily Fresh & Hot Trends", folder: "stunning", cover: genJpgList("abspecialtaste/stunning/st", 5)[0] },
        { id: "as1", title: "Cosplay Fantasy", folder: "cosplay", cover: genJpg5("abspecialtaste/cosplay", 5)[0] },
        { id: "as2", title: "Face", folder: "face", cover: genJpg5("abspecialtaste/face", 5)[0] },
        { id: "as3", title: "Back & Butt", folder: "backbutt", cover: genJpg5("abspecialtaste/backbutt", 5)[0] },
        { id: "speBack", title: "Elegance from Behind", folder: "back", cover: genJpgList("abspecialtaste/back/ba", 5)[0] },
        { id: "speButt", title: "Curves & Confidence", folder: "butt", cover: genJpgList("abspecialtaste/butt/bu", 5)[0] },
        { id: "speFinger", title: "Graceful Fingertips", folder: "finger", cover: genJpgList("abspecialtaste/finger/fi", 5)[0] },
        { id: "speLeg", title: "Poise in Every Step", folder: "legfeet", cover: genJpgList("abspecialtaste/legfeet/le", 5)[0] },
    ].map(item => ({...item,ghname: "ai8ai",    repo: "abspecialtaste",})),


    abholiday: [
        { id: "holLuneryear", title: "Chinese New Year", folder: "luneryear", cover: genJpgList("abholiday/luneryear/lu", 5)[0] },
        { id: "holDeco", title: "Sublime Décolleté", folder: "deco", cover: genJpgList("abholiday/deco/de", 5)[0] },
        { id: "holWal", title: "Elegant Wallpaper", folder: "wallpaper", cover: genJpgList("abholiday/wallpaper/wa", 5)[0] },
        { id: "hol", title: "Weddings", folder: "weddings", cover: genJpgList("abholiday/weddings/bb", 5)[0] },
    ].map(item => ({...item,ghname: "ai8ai",    repo: "abholiday",})),


    abccc: [
        { id: "cccStunning", title: "Daily Fresh & Hot Trends", count: "10", folder: "stunning", cover: genJpgList("abccc/stunning/st", 5)[0] },
        { id: "cccBBS", title: "Cozy & Seductive Moments", count: "10", folder: "bbs", cover: genJpgList("abccc/bbs/ba", 5)[0] },
        { id: "cccBri", title: "Briliant ...", count: "10", folder: "briliant", cover: genJpgList("abccc/briliant/br", 5)[0] },
        { id: "cccSexy", title: "Sultry", count: "10", folder: "sexy", cover: genJpgList("abccc/sexy/se", 5)[0] },
        { id: "cccStr", title: "Bare & Beautiful", count: "10", folder: "strapless", cover: genJpgList("abccc/strapless/st", 5)[0] },
    ].map(item => ({...item,ghname: "ai8ai",    repo: "abccc",})),


    abanran: [
        { id: "anrStunning", title: "Daily Fresh & Hot Trends", folder: "stunning", cover: genJpgList("abanran/stunning/st", 5)[0] },
        { id: "anrSto", title: "Dazzling in Sparkling", folder: "sparkling", cover: genJpg5("abanran/sparkling", 5)[0] },
        { id: "anrOff", title: "Chic at Work", folder: "office", cover: genJpgList("abanran/office/of", 5)[0] },
        { id: "anrHotel", title: "Luxe Escapes & Midnight Whispers", folder: "hotel", cover: genJpgList("abanran/hotel/ho", 5)[0] },
        { id: "anrDenim", title: "Casual Chic in Denim", folder: "denims", cover: genJpgList("abanran/demins/de", 5)[0] },
        { id: "anrClass", title: "Enchanting in Class", folder: "classroom", cover: genJpgList("abanran/classroom/cl", 5)[0] },
        { id: "bod", title: "Sculpted Seduction", folder: "bodycon", cover: genJpg5("abanran/bodycon")[0] },

    ].map(item => ({...item,ghname: "ai8ai",    repo: "abanran",})),


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
    ].map(item => ({...item,ghname: "ai8ai",    repo: "abcel",})),


    igif: [
        { id: "sc1", title: "GIF", folder: "gif", cover: genGifList("igif/gif/gi", 5)[0] },
    ].map(item => ({...item,ghname: "ai8ai",    repo: "igif",})),


    absketch: [
        { id: "sc1", title: "Sketch", folder: "sketch", cover: genJpgList("absketch/sketch/sk", 5)[0] },
    ].map(item => ({...item,ghname: "ai8ai",    repo: "absketch",})),


    abxlz: [
        { id: "xlzBed", title: "Cozy & Seductive Moments", folder: "bbs", cover: genJpgList("abxlz/bbs/be", 5)[0] },
        { id: "xlzHome", title: "Cozy Chic & Homely Elegance", folder: "home", cover: genJpgList("abxlz/home/ho", 5)[0] },
        { id: "xlzOff", title: "Chic at Work", folder: "office", cover: genJpgList("abxlz/office/of", 5)[0] },
        { id: "xlzOut", title: "Breeze & Beyond", folder: "outdoor", cover: genJpgList("abxlz/outdoor/ou", 5)[0] },
        { id: "xlzSee", title: "Seethrough ...", folder: "seethrough", cover: genJpgList("abxlz/seethrough/se", 5)[0] },
        { id: "xlzSpa", title: "Sultry Spaghetti Straps", folder: "spaghetti", cover: genJpgList("abxlz/spaghetti/sp", 5)[0] },
        { id: "xlzSto", title: "Silken Allure & Enchanting Legs", folder: "stockings", cover: genJpgList("abxlz/stockings/st", 5)[0] },
        { id: "xlzWed", title: "Angelically Innocent", folder: "weddings", cover: genJpgList("abxlz/weddings/we", 5)[0] },
    ].map(item => ({...item,ghname: "ai8ai",    repo: "abxlz",})),


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
    ].map(item => ({...item,ghname: "ai8ai",    repo: "absuren",})),


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
    ].map(item => ({...item,ghname: "ai8ai",    repo: "abmini",})),


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
        { id: "cc5", title: "Flirty Floral Charms", folder: "floral" , cover: genJpg5("abss/floral")[0] },
        { id: "wxyHalt", title: "Allure en Halter", folder: "haltertop", cover: genJpg5("abss/haltertop")[0] },
        { id: "SYZLace", title: "Timeless Grace in Silk & Lace", folder: "lace", cover: genJpg5("abss/lace")[0] },
        { id: "SYZOne", title: "Fantasy & Queens", folder: "oneshoulder" , cover: genJpg5("abss/oneshoulder")[0] },
    ].map(item => ({...item,ghname: "ai8ai",    repo: "abss",})),


    abplaces: [
        { id: "sch1", title: "School", folder: "school", cover: genJpg5("abplaces/school")[0] },
        { id: "sch2", title: "Office", folder: "office", cover: genJpg5("abplaces/office")[0] },
        { id: "sch3", title: "Home", folder: "home", cover: genJpg5("abplaces/home")[0] },
        { id: "sch4", title: "Night", folder: "night", cover: genJpg5("abplaces/night")[0] },
    ].map(item => ({...item,ghname: "ai8ai",    repo: "abplaces",})),


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
    ].map(item => ({...item,ghname: "ai8ai",    repo: "abpast",})),


    abzyx: [
        { id: "az2", title: "bodycon", folder: "bodycon", cover: genJpg5("abzyx/bodycon")[0] },
        { id: "az3", title: "Elegant in Cheongsam", folder: "cheongsam", cover: genJpg5("abzyx/cheongsam")[0] },
        { id: "wxyHalt", title: "Allure en Halter", folder: "haltertop", cover: genJpg5("abzyx/haltertop")[0] },
        { id: "SYZLace", title: "Timeless Grace in Silk & Lace", folder: "lace", cover: genJpg5("abzyx/lace")[0] },
        { id: "YCCSpa", title: "Sultry Spaghetti Straps", folder: "spa", cover: genJpg5("abzyx/spa")[0] },
    ].map(item => ({...item,ghname: "ai8ai",    repo: "abzyx",})),

};
