// Category
import { CatInterface, Cat2SubMap } from '@/config/type';
import { genJpg1, genJpg8, genJpg5, genGifList, genJpgList } from '@/utils/genImageList'

const GH_ab = "ai8ai"
const GH_bb = "aidres8"

export const CatList: Cat2SubMap = {

    abstunning: [
        { id: "blooming_beauty", title: "🌺 Blooming Beauty" },
        { id: "elitequeen", title: "🦵 Elite Queen" },
        { id: "exoticgrace", title: "🔥 Exotic Grace" },
        { id: "forever_divine", title: "👼 Forever Divine" },
        { id: "lingerieboudoir", title: "💃 Lingerie Boudoir" },
        { id: "pureenchantment", title: "💖 Pure Enchantment" },
        { id: "sensualwarriors", title: "👗 Sensual Warriors" },
        { id: "vintagevixens", title: "🎀 Vintage Vixens" },
    ].map(item => ({ ...item, cover: genJpg1(GH_ab, `abstunning/main/${item.id}`)[0] })),

    ccmain: [
        { id: "sub_cc1shoulder", title: "Graceful 🩰 One Shoulder" },
        { id: "sub_ccbankunyuu", title: " 🌰 Bankunyuu" },
        { id: "sub_ccbody", title: "🦵Goddess" },
        { id: "sub_ccche", title: "Cheongsam 🌸 Collection" },
        { id: "sub_ccdemin", title: "👖Demin👖Desire👖" },
        { id: "sub_ccsultry", title: "Sultry Aura 🔥" },
        { id: "sub_ccbodycon", title: "👗Curves in Command💄" },
        { id: "sub_ccelegance", title: "🌸Elegance" },
        { id: "sub_ccformal", title: "Enchanting 💼 Classic" },
        { id: "sub_ccgarage", title: " Garage 🚗" },
        { id: "sub_cchalter", title: "🎀 Allure en Halter" },
        { id: "sub_cchighneck", title: "👗 Chic in High-Neck" },
        { id: "sub_ccleggy", title: "Bare Legs👠腿控" },
        { id: "sub_cclowcut", title: "Sultry Lowcut 💄" },
        { id: "sub_ccnextdoor", title: "Irresistible🌺Next Door" },
        { id: "sub_ccoutdoor", title: "🍃 Breeze & Beyond" },
        { id: "sub_ccplunge", title: "🔥Plunging Passion" },
        { id: "sub_ccspa", title: "Slender Slip 💃" },
        { id: "sub_cccos", title: "Cosplay Fantasy 🎭", },
        { id: "sub_ccwedding", title: "Bridal Desire 👰" }
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `${item.id.slice(4)}/main/cat`)[0] })),


    bwxy: [
        { id: "sub_xycos", title: "Cosplay Queens 🎭" },
        { id: "sub_xywearing", title: "Sassy in Body 👚" },
        { id: "sub_xysultry", title: "Simply Irresistible 💘" },

        { id: "sub_xybodycon", title: "👗Curves in Command💄" },
        { id: "sub_xycheongsam", title: "Elegant in Cheongsam 🏮" },
        { id: "sub_xyclassic", title: "Enchanting 💼 Classic" },
        { id: "sub_xyseethrough", title: "Teasing Transparency 🔍" },
        { id: "sub_xyplunge", title: "🔥Plunging Passion" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `${item.id.slice(4)}/main/cat`)[0] })),

    bnabi: [
        { id: "bn101", title: "✨ Dazzling in Sparkling", folder: "sparkling" },
        { id: "bn102", title: "👗 Timeless Gown Beauty", folder: "gown" },
        { id: "bn103", title: "💃 Curves in Command", folder: "bodycon" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "bnabi", cover: genJpg8(`bnabi/${item.folder}`)[0] })),

    bcmy: [
        { id: "bc101", title: "🤍 Pure Temptation White", folder: "white" },
        { id: "bc102", title: "🖤 Dark Desire", folder: "black" },
        { id: "bc103", title: "✨ Golden Glow", folder: "yellow" },
        { id: "bc104", title: "💎 Dazzling in Sparkling", folder: "sparkling" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "bcmy", cover: genJpg8(`bcmy/${item.folder}`)[0] })),

    absyz: [
        { id: "syz101", title: "🔥 Daily Fresh & Hot Trends", folder: "stunning" },
        { id: "syz102", title: "🛏️ Cozy & Seductive Moments", folder: "bbs" },
        { id: "syz103", title: "💋 Sublime Korean", folder: "korean" },
        { id: "syz104", title: "🌸 Flirty Floral Charms", folder: "floral" },
        { id: "syz105", title: "🎀 Timeless Grace in Silk & Lace", folder: "lace" },
        { id: "syz106", title: "👑 Fantasy & Queens", folder: "oneshoulder" },
        { id: "syz107", title: "💼 Chic at Work", folder: "office" },
        { id: "p01", title: "🌸Plunging Passion", folder: "plunge" },
        { id: "p02", title: "🌶️Plunging Lace", folder: "plunge_lace" },
        { id: "syz108", title: "🎭 Sultry Slip", folder: "slip" },
        { id: "syz109", title: "💃 Bare & Beautiful", folder: "strapless" },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "absyz", cover: genJpg5(`absyz/${item.folder}`)[0] })),

    abkele: [
        { id: "kel01", title: "🛏️ Cozy & Seductive Moments", count: "40", folder: "bbs" },
        { id: "kel02", title: "🖤 Timeless Grace in Silk & Lace", count: "20", folder: "blacksilk" },
        { id: "kel03", title: "👘 Elegant in Cheongsam", count: "30", folder: "cheongsam" },
        { id: "kel04", title: "🌸 Flirty Floral Charms", count: "20", folder: "floral" },
        { id: "kel05", title: "🏡 Cozy Chic & Homely Elegance", count: "30", folder: "home" },
        { id: "kel06", title: "👠 Bare & Beautiful Legs", count: "20", folder: "leg" },
        { id: "kel07", title: "🏢 Chic at Work", count: "30", folder: "office" },
        { id: "kel08", title: "🛋️ Sofa Soft", count: "40", folder: "sofa" },
        { id: "kel09", title: "🌶️ Sultry Spaghetti Straps", count: "10", folder: "spegatti" },
        { id: "kel10", title: "🧦 Silken Allure & Enchanting Legs", count: "20", folder: "stockings" },
        { id: "kel11", title: "🔥 Daily Fresh & Hot Trends", count: "10", folder: "stunning" },
    ].map(item => ({ ...item, cover: genJpg1(GH_ab, `abkele/main/${item.folder}`)[0] })),

    abanran: [
        { id: "sul", title: "Simply Irresistible 💘", folder: "sultry" },
        { id: "anrStunning", title: "🔥 Daily Fresh & Hot Trends", folder: "stunning" },
        { id: "anrSto", title: "✨ Dazzling in Sparkling", folder: "sparkling" },
        { id: "anrOff", title: "🏢 Chic at Work", folder: "office" },
        { id: "p01", title: "🔥Plunging Passion", folder: "plunge" },
        { id: "anrHotel", title: "🌙 Luxe Escapes & Midnight Whispers", folder: "hotel" },
        { id: "anrDenim", title: "👖 Casual Chic in Demin", folder: "demins" },
        { id: "anrClass", title: "🎓 Enchanting in Class", folder: "classroom" },
        { id: "bod", title: "🎭 Sculpted Seduction", folder: "bodycon" },
    ].map(item => ({ ...item, gh: GH_ab, cover: genJpg1(GH_ab, `abanran/main/${item.folder}`)[0] })),

    abccc: [
        { id: "cccStunning", title: "🔥 Daily Fresh & Hot Trends", count: "10", folder: "stunning", cover: genJpgList("abccc/stunning/st", 5)[0] },
        { id: "cccBBS", title: "🛏️ Cozy & Seductive Moments", count: "10", folder: "bbs", cover: genJpgList("abccc/bbs/ba", 5)[0] },
        { id: "cccBri", title: "💎 Brilliant Glamour", count: "10", folder: "briliant", cover: genJpgList("abccc/briliant/br", 5)[0] },
        { id: "cccSexy", title: "🌶️ Sultry Temptations", count: "10", folder: "sexy", cover: genJpgList("abccc/sexy/se", 5)[0] },
        { id: "cccStr", title: "👗 Bare & Beautiful", count: "10", folder: "strapless", cover: genJpgList("abccc/strapless/st", 5)[0] },
    ].map(item => ({ ...item, gh: GH_ab, cover: genJpg1(GH_ab, `abccc/main/${item.folder}`)[0] })),


    ablxl: [
        { id: "lxl01", title: "🛏️ Cozy & Seductive Moments", folder: "bodycon" },
        { id: "lxl02", title: "👘 Elegant in Cheongsam", folder: "cheongsam" },
        { id: "lxl03", title: "💎 Sublime Demin", folder: "demin_short" },
        { id: "lxl04", title: "🐠 Daily Fresh & Hot Trends", folder: "fishdress" },
        { id: "lxl05", title: "🧥 Luxurious Fur Looks", folder: "fur" },
        { id: "lxl06", title: "💃 Halter Neck Elegance", folder: "halter" },
        { id: "lxl08", title: "👗 Bold One-Shoulder Styles", folder: "onesholder" },

        { id: "p01", title: "🔥Plunging Passion", folder: "plunge" },
        { id: "s02", title: "💃Split Siren", folder: "split" },
        { id: "w05", title: "🪶 Silken Slip Dress", folder: "slip" },

        { id: "lxl11", title: "📚 Student Charm", folder: "student" },
        { id: "lxl13", title: "🎓 Enchanting in Teaching", folder: "teacher" },
        { id: "lxl14", title: "🤍 Classic White Shirt", folder: "whiteshirt" },

    ].map(item => ({ ...item, ghname: "ai8ai", repo: "ablxl", cover: genJpg5(`ablxl/${item.folder}`)[0] })),

    abspecialtaste: [
        { id: "spe01", title: "🔥 Daily Fresh & Hot Trends", folder: "stunning", cover: genJpgList("abspecialtaste/stunning/st", 5)[0] },
        { id: "spe02", title: "🎭 Cosplay Fantasy", folder: "cosplay", cover: genJpg5("abspecialtaste/cosplay", 5)[0] },
        { id: "spe03", title: "😊 Face", folder: "face", cover: genJpg5("abspecialtaste/face", 5)[0] },
        { id: "spe04", title: "🍑 Back & Butt", folder: "backbutt", cover: genJpg5("abspecialtaste/backbutt", 5)[0] },
        { id: "spe05", title: "🔙 Elegance from Behind", folder: "back", cover: genJpgList("abspecialtaste/back/ba", 5)[0] },
        { id: "spe06", title: "🍑 Curves & Confidence", folder: "butt", cover: genJpgList("abspecialtaste/butt/bu", 5)[0] },
        { id: "spe07", title: "🤌 Graceful Fingertips", folder: "finger", cover: genJpgList("abspecialtaste/finger/fi", 5)[0] },
        { id: "spe08", title: "🦵 Poise in Every Step", folder: "legfeet", cover: genJpgList("abspecialtaste/legfeet/le", 5)[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abspecialtaste", })),

    abholiday: [
        { id: "hol01", title: "🎊 Chinese New Year", folder: "luneryear", cover: genJpgList("abholiday/luneryear/lu", 5)[0] },
        { id: "hol02", title: "💎 Sublime Décolleté", folder: "deco", cover: genJpgList("abholiday/deco/de", 5)[0] },
        { id: "hol03", title: "🖼️ Elegant Wallpaper", folder: "wallpaper", cover: genJpgList("abholiday/wallpaper/wa", 5)[0] },
        { id: "hol04", title: "💍 Weddings", folder: "weddings", cover: genJpgList("abholiday/weddings/bb", 5)[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abholiday", })),


    abcel: [
        { id: "ce1", title: "💃 Clara 클라라", folder: "kelala", cover: genJpg5("abcel/kelala", 5)[0] },
        { id: "cel1", title: "🎭 Dong Liya", folder: "dongliya", cover: genJpg5("abcel/dongliya", 5)[0] },
        { id: "cel2", title: "🌟 Jing Tian 景甜", folder: "jingtian", cover: genJpg5("abcel/jingtian", 5)[0] },
        { id: "cel3", title: "❓ Annonymous", folder: "others", cover: genJpg5("abcel/others", 5)[0] },
        { id: "cel4", title: "🎀 Da Mi Mi", folder: "yangmi", cover: genJpg5("abcel/yangmi", 5)[0] },
        { id: "cel5", title: "☔ Raincoat Zhang", folder: "zhangyuyi", cover: genJpg5("abcel/zhangyuyi", 5)[0] },
        { id: "cel6", title: "💎 Liu Yan", folder: "liuyan", cover: genJpg5("abcel/liuyan")[0] },
        { id: "cel7", title: "👑 Yang Mi 大幂幂", folder: "yangmi", cover: genJpg5("abcel/yangmi")[0] },
        { id: "cel8", title: "📸 Du Xiaoyu", folder: "duxiaoyu", cover: genJpg5("abcel/duxiaoyu")[0] },
        { id: "ce9", title: "🌠 Xu Dongdong", folder: "xudongdong", cover: genJpg5("abcel/xudongdong")[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abcel", })),

    igif: [
        { id: "sc1", title: "🎞️ Animated GIFs", folder: "gif", cover: genGifList("igif/gif/gi", 5)[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "igif", })),

    absketch: [
        { id: "sc1", title: "🎨 Artistic Sketches", folder: "sketch", cover: genJpgList("absketch/sketch/sk", 5)[0] },
        { id: "sc2", title: "🏡 History", folder: "history", cover: genJpgList("absketch/history/hi", 5)[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "absketch", })),


    abxlz: [
        { id: "xlzBed", title: "🛏️ Cozy & Seductive Moments", folder: "bbs", cover: genJpgList("abxlz/bbs/be", 5)[0] },
        { id: "ss05", title: "💃 Elegant in Timeless Cheongsam", folder: "cheongsam", cover: genJpg5("abss/cheongsam")[0] },
        { id: "xlzHome", title: "🏡 Cozy Chic & Homely Elegance", folder: "home", cover: genJpgList("abxlz/home/ho", 5)[0] },
        { id: "xlzOff", title: "🏢 Chic at Work", folder: "office", cover: genJpgList("abxlz/office/of", 5)[0] },
        { id: "xlzOut", title: "🍃 Breeze & Beyond", folder: "outdoor", cover: genJpgList("abxlz/outdoor/ou", 5)[0] },
        { id: "xlzSee", title: "👀 Seethrough Sensations", folder: "seethrough", cover: genJpgList("abxlz/seethrough/se", 5)[0] },
        { id: "xlzSpa", title: "🎀 Sultry Spaghetti Straps", folder: "spaghetti", cover: genJpgList("abxlz/spaghetti/sp", 5)[0] },
        { id: "xlzSto", title: "🧦 Silken Allure & Enchanting Legs", folder: "stockings", cover: genJpg5("abxlz/stockings")[0] },
        { id: "xlzWed", title: "💍 Angelically Innocent", folder: "weddings", cover: genJpgList("abxlz/weddings/we", 5)[0] },
        { id: "s08", title: "🔥 Sultry Allure", folder: "sultry", cover: genJpg5("abxlz/sultry", 5)[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abxlz", })),

    absuren: [
        { id: "sur01", title: "🔥 Breathtaking & Stunning", folder: "stunning", cover: genJpg5("absuren/stunning")[0] },
        { id: "sur02", title: "🍈 Lush & Voluptuous Curves", folder: "bakunyuu", cover: genJpg5("absuren/bakunyuu")[0] },
        { id: "sur03", title: "👑 Regal Fantasy & Mesmerizing Queens", folder: "chubby", cover: genJpg5("absuren/chubby")[0] },
        { id: "sur07", title: "😇 Angelic Innocence \n 👀Pure Enchantment", folder: "lolita", cover: genJpg5("absuren/lolita")[0] },
        { id: "sur04", title: "🕰️ Timeless Elegance of the Golden Age", folder: "mid", cover: genJpg5("absuren/mid")[0] },
        { id: "sur05", title: "🕌 Exotic Allure of the Middle East", folder: "middleeast", cover: genJpg5("absuren/middleeast")[0] },
        { id: "sur06", title: "🏡 Sweet & Seductive Next Door Charms", folder: "nextdoor", cover: genJpg5("absuren/nextdoor")[0] },
        { id: "sur08", title: "💃 Flirty Socialite & Glamorous Nights", folder: "socialite", cover: genJpg5("absuren/socialite")[0] },
        { id: "sur11", title: "🌟 Mystery Muse: Somebody", folder: "somebody", cover: genJpg5("absuren/somebody")[0] },
        { id: "sur09", title: "📏 Sculpted Beauty in Perfect Proportions", folder: "square", cover: genJpg5("absuren/square")[0] },
        { id: "sur10", title: "✈️ Wanderlust & Chic Travel Moments", folder: "travel", cover: genJpg5("absuren/travel")[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "absuren", })),

    abmini: [
        { id: "min01", title: "🍑 Lush & Voluptuous Curves", folder: "bakunyuu", cover: genJpg5("abmini/bakunyuu")[0] },
        { id: "min02", title: "💖 Tempting Décolleté & Sultry Glamour", folder: "deco", cover: genJpg5("abmini/deco")[0] },
        { id: "min03", title: "🔥 Sculpted Seduction in Bodycon", folder: "bodycon", cover: genJpg5("abmini/bodycon")[0] },
        { id: "min04", title: "🌿 Bare & Bold: The Halter Look", folder: "haltertop", cover: genJpg5("abmini/haltertop")[0] },
        { id: "min05", title: "🏡 Irresistible Charm of the Girl Next Door", folder: "nextdoor", cover: genJpg5("abmini/nextdoor")[0] },
        { id: "min06", title: "✨ Delicate Beauty in Slender Straps", folder: "spaghetti", cover: genJpg5("abmini/spaghetti")[0] },
        { id: "min07", title: "👗 Bare Elegance in Strapless Styles", folder: "strapless", cover: genJpg5("abmini/strapless")[0] },
        { id: "min08", title: "🏨 Suite Seduction & Luxe Sophistication", folder: "suite", cover: genJpg5("abmini/suite")[0] },
        { id: "min09", title: "🧣 Snug & Sultry: Cozy Yet Chic", folder: "sweater", cover: genJpg5("abmini/sweater")[0] },
        { id: "min10", title: "👔 Undone Desire: White Shirt Temptation", folder: "whiteshirt", cover: genJpg5("abmini/whiteshirt")[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abmini", })),


    abss: [
        { id: "ss01", title: "🖤 Mysterious Black Heart", folder: "heart", cover: genJpg5("abss/heart")[0] },
        { id: "ss02", title: "👗 Chic in High-Neck Halter", folder: "highneckhalter", cover: genJpg5("abss/highneckhalter")[0] },
        { id: "ss03", title: "🐆 Wild & Bold: Leopard Prints", folder: "leopard", cover: genJpg5("abss/leopard")[0] },
        { id: "ss04", title: "🧥 Cozy & Stylish in Turtle Neck", folder: "turtleneck", cover: genJpg5("abss/turtleneck")[0] },
        { id: "ss05", title: "💃 Elegant in Timeless Cheongsam", folder: "cheongsam", cover: genJpg5("abss/cheongsam")[0] },
        { id: "ss06", title: "🔥 Sensual & Sculpted Bodycon", folder: "bodycon", cover: genJpg5("abss/bodycon")[0] },
        { id: "ss07", title: "🌼 Radiant in Dazzling Yellow", folder: "yellow", cover: genJpg5("abss/yellow")[0] },
        { id: "ss08", title: "👠 The Allure of Kendall Style", folder: "kendall", cover: genJpg5("abss/kendall")[0] },
        { id: "ss09", title: "🪡 Sleek & Sexy Split Dresses", folder: "split", cover: genJpg5("abss/split")[0] },
        { id: "ss10", title: "💫 Sultry Spaghetti Straps", folder: "spa", cover: genJpg5("abss/spa")[0] },
        { id: "ss11", title: "🌸 Flirty Floral Charms", folder: "floral", cover: genJpg5("abss/floral")[0] },
        { id: "ss12", title: "🎀 Allure en Halter", folder: "haltertop", cover: genJpg5("abss/haltertop")[0] },
        { id: "ss13", title: "🕊️ Timeless Grace in Silk & Lace", folder: "lace", cover: genJpg5("abss/lace")[0] },
        { id: "ss14", title: "👑 Fantasy & Queens", folder: "oneshoulder", cover: genJpg5("abss/oneshoulder")[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abss", })),

    abplaces: [
        { id: "plc01", title: "🏫 School Days & Cute Styles", folder: "school", cover: genJpg5("abplaces/school")[0] },
        { id: "plc02", title: "💼 Power Dressing at the Office", folder: "office", cover: genJpg5("abplaces/office")[0] },
        { id: "plc03", title: "🏡 Cozy Chic at Home", folder: "home", cover: genJpg5("abplaces/home")[0] },
        { id: "plc04", title: "🌙 Midnight Glamour & Nightlife", folder: "night", cover: genJpg5("abplaces/night")[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abplaces", })),

    abpast: [
        { id: "pst01", title: "📅 Iconic Looks of 2024", folder: "2024", cover: genJpg5("abpast/2024")[0] },
        { id: "pst02", title: "🗓️ Timeless Trends of 2023", folder: "2023", cover: genJpg5("abpast/2023")[0] },
        { id: "pst03", title: "📜 Nostalgic Beauty of 2022", folder: "2022", cover: genJpg5("abpast/2022")[0] },
        { id: "pst04", title: "⏳ Classic Elegance of 2021", folder: "2021", cover: genJpg5("abpast/2021")[0] },
        { id: "pst05", title: "🕰️ Golden Memories of 2020", folder: "2020", cover: genJpg5("abpast/2020")[0] },
        { id: "pst06", title: "📖 The Legacy of 2019", folder: "2019", cover: genJpg5("abpast/2019")[0] },
        { id: "pst07", title: "🎞️ The Fashion Story of 2018", folder: "2018", cover: genJpg5("abpast/2018")[0] },
        { id: "pst08", title: "🌟 Retro Glam of 2017", folder: "2017", cover: genJpg5("abpast/2017")[0] },
        { id: "pst09", title: "💃 The Chic Vibes of 2016", folder: "2016", cover: genJpg5("abpast/2016")[0] },
        { id: "pst10", title: "🌍 Fashion Evolution of 2015", folder: "2015", cover: genJpg5("abpast/2015")[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abpast", })),

    abzyx: [
        { id: "zyx01", title: "💃 Sensual & Sculpted Bodycon", folder: "bodycon", cover: genJpg5("abzyx/bodycon")[0] },
        { id: "zyx02", title: "🀄 Elegant in Cheongsam", folder: "cheongsam", cover: genJpg5("abzyx/cheongsam")[0] },
        { id: "zyx03", title: "🎀 The Allure of Halter Styles", folder: "haltertop", cover: genJpg5("abzyx/haltertop")[0] },
        { id: "zyx04", title: "🕊️ Timeless Silk & Lace Elegance", folder: "lace", cover: genJpg5("abzyx/lace")[0] },
        { id: "zyx05", title: "🌊 Sultry & Chic Spaghetti Straps", folder: "spa", cover: genJpg5("abzyx/spa")[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abzyx", })),

};

// { id: "b2", ghname: "aidres8", title: "Group", shorttitle: "Group", cover: genJpg5("abcat/b2")[0] },
