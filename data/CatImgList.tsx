// Category
import { CatInterface, Cat2SubMap } from '@/config/type';
import { genJpg88, genJpg55, genJpg8, genJpg5, genGifList, genJpgList } from '@/utils/genImageList'

export const Cat2Sub2Img: Cat2SubMap = {


    bycc: [
        { id: "cc1", repo: "bycc", title: "Hot & Stunning 🔥", folder: "stunning" },
        { id: "cc2", repo: "bycc", title: "Angel's Temptation 😇", folder: "pure" },
        { id: "c14", repo: "bycc", title: "Soft Allure 🌸", folder: "pink" },
        { id: "cc3", repo: "bycc", title: "Irresistible Charm 💋", folder: "nextdoor" },
        { id: "cc4", repo: "bycc", title: "Seduction in Bed 🛏️", folder: "bed" },
        { id: "cc5", repo: "bycc", title: "Steamy in the Bath 🚿", folder: "bath" },
        { id: "cc6", repo: "bycc", title: "Mystic Blue 🔵", folder: "blue" },
        { id: "cc7", repo: "bycc", title: "Grace in Cheongsam 🏮", folder: "cheongsam" },
        { id: "cc8", repo: "bycc", title: "Cosplay Fantasy 🎭", folder: "cos" },
        { id: "c13", repo: "bycc", title: "Casual Seduction 👖", folder: "demin" },
        { id: "cc9", repo: "bycc", title: "Flirty Florals 🌺", folder: "floral" },
        { id: "c11", repo: "bycc", title: "Sensual Vision 👓", folder: "glass" },
        { id: "c12", repo: "bycc", title: "Enchanting Green 🌿", folder: "green" },
        { id: "c16", repo: "bycc", title: "Mystic Red ❤️", folder: "red" },
        { id: "c10", repo: "bycc", title: "School Seduction 🎒", folder: "school" },
        { id: "c15", repo: "bycc", title: "Dazzling Sparkle ✨", folder: "sparkling" },
        { id: "c17", repo: "bycc", title: "Bare & Bold 🔥", folder: "strapless" },
        { id: "c18", repo: "bycc", title: "Slender Straps 💃", folder: "spaghetti" },
        { id: "c19", repo: "bycc", title: "Sultry Split 🔥", folder: "split" },
        { id: "c20", repo: "bycc", title: "Bridal Desire 👰", folder: "wedding" },
        { id: "cp25", repo: "bycc24", title: "2025 Collection 📅", folder: "2025" },
        { id: "cp24", repo: "bycc24", title: "2024 Collection 📆", folder: "2024" },
        { id: "cp23", repo: "bycc23", title: "2023 Collection ⏳", folder: "2023" },
        { id: "cp22", repo: "bycc23", title: "2022 Collection 🕰️", folder: "2022" },
        { id: "cp21", repo: "bycc23", title: "2021 Collection 🎞️", folder: "2021" },
    ].map(item => ({
        ...item,
        ghname: "aidres8",
        cover: genJpg8(`${item.repo}/${item.folder}`)[0]
    })),

    bwxy: [
        { id: "w01", repo: "bwxy", title: "Daily Fresh & Hot Trends 🌟", folder: "stunning" },
        { id: "w02", repo: "bwxy", title: "Sultry Evenings Under the Lights 🌃", folder: "bar" },
        { id: "w03", repo: "bwxy", title: "Cozy & Seductive Bath Moments 🛁", folder: "bath" },
        { id: "w04", repo: "bwxy", title: "Elegant in Cheongsam 🏮", folder: "cheongsam" },
        { id: "w05", repo: "bwxy", title: "Sassy in Croptops 👚", folder: "croptop" },
        { id: "w06", repo: "bwxy", title: "Sublime Décolleté 💖", folder: "decollete" },
        { id: "w07", repo: "bwxy", title: "Enchanting in Business 💼", folder: "formal" },
        { id: "w08", repo: "bwxy", title: "Allure en Halter 🌺", folder: "haltertop" },
        { id: "w09", repo: "bwxy", title: "Timeless Grace in Silk & Lace 🕊️", folder: "lace" },
        { id: "w10", repo: "bwxy", title: "Nocturne in New York 🌙", folder: "nightnewyork" },
        { id: "w11", repo: "bwxy", title: "Chic at Work 👠", folder: "office" },
        { id: "w12", repo: "bwxy", title: "Breeze & Beyond 🍃", folder: "outdoor" },
        { id: "w13", repo: "bwxy", title: "Chic in Motion 🏃‍♀️", folder: "pants" },
        { id: "w14", repo: "bwxy", title: "Teasing Transparency 🔍", folder: "seethrough" },
        { id: "w15", repo: "bwxy", title: "Sultry Spaghetti Straps 💃", folder: "spaghetti" },
        { id: "w16", repo: "bwxy", title: "Mystic in Uniform 🎽", folder: "uniform" },
        { id: "vi1", repo: "bwxy", title: "👑 Fantasy & Queens", folder: "graceful" },
        { id: "vio", repo: "bwxy", title: "A Royal Seduction 👑", folder: "violet" },
        { id: "spa", repo: "bwxy", title: "Dazzling in Sparkling ✨", folder: "sparkling" },
        { id: "bod", repo: "bwxy", title: "Curves in Command 🔥", folder: "bodycon" },
        { id: "coa", repo: "bwxy", title: "Wrapped in Elegance 🧥", folder: "coat" },
        { id: "cos", repo: "bwxy", title: "Fantasy & Cosplay Queens 🎭", folder: "cos" },
        { id: "hom", repo: "bwxy", title: "Cozy Chic & Homely Elegance 🏡", folder: "home" },
        { id: "nex", repo: "bwxy", title: "The Girl Next Door 🚪", folder: "nextdoor" },
        { id: "sof", repo: "bwxy", title: "Relaxed Allure 🛋️", folder: "sofa" },
        { id: "c25", repo: "bwxy", title: "Bare & Beautiful & Strapless 💋", folder: "strapless" },
        { id: "c12", repo: "bwxy", title: "Casual Chic in Denim 👖", folder: "demin" },
        { id: "c13", repo: "bwxy", title: "Blush of Desire 🌷", folder: "pink" },
        { id: "c38", repo: "bwxy", title: "Passionate Hues ❤️", folder: "red" },
        { id: "c43", repo: "bwxy", title: "Daring Affair 🚀", folder: "split" },
        { id: "sul", repo: "bwxy", title: "Simply Irresistible 💘", folder: "sultry" },
    ].map(item => ({ ...item, ghname: "aidres8", cover: genJpg8(`${item.repo}/${item.folder}`)[0] })),

    b2: [
        { id: "b201", repo: "b2", title: "🔥 Twice the Temptation", folder: "two" },
        { id: "b202", repo: "b2", title: "💖 Craving More", folder: "more" },
    ].map(item => ({ ...item, ghname: "aidres8", cover: genJpg8(`${item.repo}/${item.folder}`)[0] })),

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
        { id: "syz103", title: "💋 Sublime Décolleté", folder: "decollete" },
        { id: "syz104", title: "🌸 Flirty Floral Charms", folder: "floral" },
        { id: "syz105", title: "🎀 Timeless Grace in Silk & Lace", folder: "lace" },
        { id: "syz106", title: "👑 Fantasy & Queens", folder: "oneshoulder" },
        { id: "syz107", title: "💼 Chic at Work", folder: "office" },
        { id: "syz108", title: "🎭 Sultry Spaghetti Straps", folder: "spaghetti" },
        { id: "syz109", title: "💃 Bare & Beautiful", folder: "strapless" },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "absyz", cover: genJpg5(`absyz/${item.folder}`)[0] })),

    abstunning: [
        { id: "abs101", title: "👼 Forever Divine", folder: "forever_divine", cover: genJpg55("abstunning/main/forever_divine")[0] },
        { id: "abs102", title: "🌺 Blooming Beauty", folder: "blooming_beauty", cover: genJpg55("abstunning/main/blooming_beauty")[0] },
        { id: "abs103", title: "💃 Bare & Beautiful", folder: "sultry", cover: genJpg55("abstunning/main/sultry")[0] },
        { id: "abs104", title: "💖 Lovely", folder: "lovely", cover: genJpg55("abstunning/main/lovely")[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abstunning", })),


    abkele: [
        { id: "kel01", title: "🛏️ Cozy & Seductive Moments", count: "40", folder: "bbs", cover: genJpgList("abkele/bbs/ba", 5)[0] },
        { id: "kel02", title: "🖤 Timeless Grace in Silk & Lace", count: "20", folder: "blacksilk", cover: genJpgList("abkele/blacksilk/bl", 5)[0] },
        { id: "kel03", title: "👘 Elegant in Cheongsam", count: "30", folder: "cheongsam", cover: genJpgList("abkele/cheongsam/ch", 5)[0] },
        { id: "kel04", title: "🌸 Flirty Floral Charms", count: "20", folder: "floral", cover: genJpgList("abkele/floral/fl", 5)[0] },
        { id: "kel05", title: "🏡 Cozy Chic & Homely Elegance", count: "30", folder: "home", cover: genJpgList("abkele/home/ho", 5)[0] },
        { id: "kel06", title: "👠 Bare & Beautiful Legs", count: "20", folder: "leg", cover: genJpgList("abkele/leg/le", 5)[0] },
        { id: "kel07", title: "🏢 Chic at Work", count: "30", folder: "office", cover: genJpgList("abkele/office/of", 5)[0] },
        { id: "kel08", title: "🛋️ Sofa Soft", count: "40", folder: "sofa", cover: genJpgList("abkele/sofa/so", 5)[0] },
        { id: "kel09", title: "🌶️ Sultry Spaghetti Straps", count: "10", folder: "spegatti", cover: genJpgList("abkele/spegatti/sp", 5)[0] },
        { id: "kel10", title: "🧦 Silken Allure & Enchanting Legs", count: "20", folder: "stockings", cover: genJpgList("abkele/stockings/st", 5)[0] },
        { id: "kel11", title: "🔥 Daily Fresh & Hot Trends", count: "10", folder: "stunning", cover: genJpgList("abkele/stunning/st", 5)[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abkele", })),

    ablxl: [
        { id: "lxl01", title: "🛏️ Cozy & Seductive Moments", folder: "bodycon" },
        { id: "lxl02", title: "👘 Elegant in Cheongsam", folder: "cheongsam" },
        { id: "lxl03", title: "💎 Sublime Décolleté", folder: "deco" },
        { id: "lxl04", title: "🐠 Daily Fresh & Hot Trends", folder: "fishdress" },
        { id: "lxl05", title: "🧥 Luxurious Fur Looks", folder: "fur" },
        { id: "lxl06", title: "💃 Halter Neck Elegance", folder: "halter" },
        { id: "lxl07", title: "🛋️ Relaxed & Chic", folder: "sofa" },
        { id: "lxl08", title: "👗 Bold One-Shoulder Styles", folder: "onesholder" },
        { id: "lxl09", title: "🌲 Outdoor Allure", folder: "outdoor" },
        { id: "lxl10", title: "🌶️ Sultry Spaghetti Straps", folder: "spaghetti" },
        { id: "lxl11", title: "📚 Student Charm", folder: "student" },
        { id: "lxl12", title: "🔥 Bold & Sultry", folder: "sultry" },
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

    abccc: [
        { id: "cccStunning", title: "🔥 Daily Fresh & Hot Trends", count: "10", folder: "stunning", cover: genJpgList("abccc/stunning/st", 5)[0] },
        { id: "cccBBS", title: "🛏️ Cozy & Seductive Moments", count: "10", folder: "bbs", cover: genJpgList("abccc/bbs/ba", 5)[0] },
        { id: "cccBri", title: "💎 Brilliant Glamour", count: "10", folder: "briliant", cover: genJpgList("abccc/briliant/br", 5)[0] },
        { id: "cccSexy", title: "🌶️ Sultry Temptations", count: "10", folder: "sexy", cover: genJpgList("abccc/sexy/se", 5)[0] },
        { id: "cccStr", title: "👗 Bare & Beautiful", count: "10", folder: "strapless", cover: genJpgList("abccc/strapless/st", 5)[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abccc", })),

    abanran: [
        { id: "anrStunning", title: "🔥 Daily Fresh & Hot Trends", folder: "stunning", cover: genJpgList("abanran/stunning/st", 5)[0] },
        { id: "anrSto", title: "✨ Dazzling in Sparkling", folder: "sparkling", cover: genJpg5("abanran/sparkling", 5)[0] },
        { id: "anrOff", title: "🏢 Chic at Work", folder: "office", cover: genJpgList("abanran/office/of", 5)[0] },
        { id: "anrHotel", title: "🌙 Luxe Escapes & Midnight Whispers", folder: "hotel", cover: genJpgList("abanran/hotel/ho", 5)[0] },
        { id: "anrDenim", title: "👖 Casual Chic in Denim", folder: "denims", cover: genJpgList("abanran/demins/de", 5)[0] },
        { id: "anrClass", title: "🎓 Enchanting in Class", folder: "classroom", cover: genJpgList("abanran/classroom/cl", 5)[0] },
        { id: "bod", title: "🎭 Sculpted Seduction", folder: "bodycon", cover: genJpg5("abanran/bodycon")[0] },
    ].map(item => ({ ...item, ghname: "ai8ai", repo: "abanran", })),

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
