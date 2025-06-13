// Category
import { Cat2SubMap } from '@/config/type';
import { genJpg1, } from '@/utils/genImageList'

const GH_ab = "ai8ai"
const GH_bb = "aidres8"
const GH_sb = "silkbeauty"

export const CatList: Cat2SubMap = {
    abstunning: [
        { id: "vintage_vixens", title: "🔥 Vintage Vixens" },
        { id: "tubetop", title: "🎀 Tube Top" },
        { id: "stunning", title: "💫 Really Stunning" },
        { id: "sensual_warrior", title: "🩰 Sensual Warriors" },
        { id: "pure_enchantment", title: "💖 Pure Enchantment" },

        { id: "naturally_seductive", title: "💃 Naturally Seductive" },
        { id: "minimal", title: "💃Flirty Minimal" },
        { id: "forever_divine", title: "👼 Forever Divine" },
        { id: "elite_queen", title: "🦵 Elite Queen" },
        { id: "exoticgrace", title: "🕌 Exotic Grace" },

        { id: "cutout", title: "Cutout Couture ✂️" },
        { id: "blooming_beauty", title: "🌺 Blooming Beauty" },
        { id: "bikini", title: "👙 Bikini Beauty" },
        { id: "bankunyuu", title: "Bankunyuu 🌰" },
        { id: "backless", title: "💫Bare Backless" },

        { id: "ai_grace", title: "💄 AI Grace" },
    ].map(item => ({ ...item, cover: genJpg1(GH_sb, `abstunning/main/${item.id}`)[0] })),


    ssart: [
        { id: "weddings", title: "💍 Angelically Innocent" },
        { id: "wallpaper", title: "🌸 Chic Wallpaper" },
        { id: "stonepaint", title: "Stone Paint 👕" },
        { id: "sketch", title: "🎨Artistic Sketches👚" },
        { id: "scene", title: "⛳ Glam on the Green" },

        { id: "picture", title: "Satin & Picture 👗" },
        { id: "oilpaint", title: "🔥 Oil Paint" },
        { id: "nature", title: "🍃 Nature’s Charm" },
        { id: "luneryear", title: "🏡 Chinese New Year" },
        { id: "lone", title: "🦵 Lone" },

        { id: "lips", title: "💋 Tempting Lips" },
        { id: "lightandshadow", title: "💡 Light & Shadow Drama" },
        { id: "flower", title: "🌸 Blooming Elegance" },
        { id: "face", title: "🎭 Mesmerizing Face" },
    ].map(item => ({ ...item, cover: genJpg1(GH_sb, `ssart/main/${item.id}`)[0] })),



    ssocialite: [
        { id: "fashionista", title: "Fashionista 👠👗" },
        { id: "night", title: "Nightlife Queen 🌃🍸" },
        { id: "jet", title: "Jetsetter ✈️👜" },
        { id: "redcarpet", title: "Red Carpet Look 🎬✨" },
        { id: "elegance", title: "Elegant Vibes 💅🕊️" },

        { id: "boss", title: "Boss Babe 👑📱" },
        { id: "citychic", title: "City Chic 🏙️👡" },
        { id: "brunch", title: "Brunch Date 🥐☕" },
        { id: "poolside", title: "Poolside 👙🌴" },
        { id: "luxury", title: "Luxury Life 💎🚗" },

        { id: "spotlight", title: "In the Spotlight 🎤📷" },
        { id: "goldenhour", title: "🌇Golden Hour 🌅" },
        
    ].map(item => ({ ...item, cover: genJpg1(GH_sb, `ssart/main/${item.id}`)[0] })),

    sai: [
        { id: "backless", title: "💫Bare Backless" },
        { id: "bakunyuu", title: "🍈 Voluptuous Curves" },
        { id: "camisole", title: "🌸Chic Camisole" },
        { id: "cosplay", title: "🎭 Cosplay Fantasy" },
        { id: "demins", title: "👖 Casual Chic in Demin" },
        { id: "freshair", title: "🔥 Daily Fresh" },
        { id: "lolita", title: "😇 Angelic Innocence" },
        { id: "oneshoulder", title: "👑 Fantasy & Queens" },
        { id: "outdoor", title: "Floral Escape 🍃" },
        { id: "slip", title: "🎭 Sultry Slip" },
        { id: "strapless", title: "💃 Bare & Beautiful" },
        { id: "stunning", title: "🔥 Breathtaking & Stunning" },
    ].map(item => ({ ...item, cover: genJpg1(GH_sb, `sai/main/${item.id}`)[0] })),


    ccmain: [
        { id: "sub_cc1shoulder", title: " 🩰 One Shoulder" },
        { id: "sub_ccbankunyuu", title: "Bankunyuu 🌰" },
        { id: "sub_ccbody", title: "🦵Goddess Body" },
        { id: "sub_ccbodycon", title: "💄Sculpted Bodycon" },
        { id: "sub_ccche", title: "Cheongsam 🌸" },

        { id: "sub_cccos", title: "Cosplay Fantasy 🎭", },
        { id: "sub_ccdemin", title: "👖Demin👖" },
        { id: "sub_ccelegance", title: "Elegance🌸" },
        { id: "sub_ccformal", title: "💼 Classic" },
        { id: "sub_ccgarage", title: " Garage 🚗" },

        { id: "sub_cchalter", title: "🎀 Allure en Halter" },
        { id: "sub_cchighneck", title: "👗 Chic in High-Neck" },
        { id: "sub_ccleggy", title: "Bare Legs👠腿控" },
        { id: "sub_cclowcut", title: "Sultry Lowcut 💄" },
        { id: "sub_ccnextdoor", title: "Irresistible🌺Next Door" },

        { id: "sub_ccoutdoor", title: "🍃 Breeze & Beyond" },
        { id: "sub_ccplunge", title: "🔥Plunging Passion" },
        { id: "sub_ccspa", title: "Slender Slip 💃" },
        { id: "sub_ccsultry", title: "Simply Irresistible 💘" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `${item.id.slice(4)}/main/cat`)[0] })),


    bwxy: [
        { id: "sub_xywearing", title: "Sassy in Body 👚" },
        { id: "sub_xyplunge", title: "🔥Plunging Passion" },
        { id: "sub_xysultry", title: "Simply Irresistible 💘" },
        { id: "sub_xybodycon", title: "👗Curves in Command💄" },
        { id: "sub_xycheongsam", title: "Elegant in Cheongsam 🏮" },

        { id: "sub_xyclassic", title: "Enchanting 💼 Classic" },
        { id: "sub_xyseethrough", title: "Teasing Transparency 🔍" },
        { id: "sub_xycos", title: "Cosplay Queens 🎭" },
        { id: "sub_xynextdoor", title: "Charm💋Next Door" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `${item.id.slice(4)}/main/cat`)[0] })),




    abinfluencer: [
        { id: "akasha", title: "Akasha's Allure 🔥" },
        { id: "anonymous", title: "Mystique Anonymous 🕶️" },
        { id: "bailu", title: "Bailu's Grace 🌿" },
        { id: "ccc", title: "ChengCheng 💃 程程程" },
        { id: "chumengyao", title: "Chu Mengyao 💋 初梦瑶" },
        { id: "nabi", title: "Yeon 娜比 🌸", },


        { id: "duxiaoyu", title: "👗 Timeless Du Xiaoyu" },
        { id: "liruoxi", title: "Liruoxi's Charm 💫" },
        { id: "luxuanxuan", title: "Lu Xuanxuan 💫" },
        { id: "mengxinyue", title: "Meng Xinyue's Elegance 🌙" },
        { id: "sumanxi", title: "Sumanxi's Seduction 💋" },
        { id: "susua", title: "SuSuA's Seduction 💋" },
        { id: "ula", title: "Chuir 嘉绮里 Ula 👠" },
        { id: "vanessa", title: "Vanessa's Vibes 💃" },
        { id: "wangyuchun", title: "Wang Yuchun's Radiance ✨" },
        { id: "xuanzi", title: "👑 Fantasy Xuanzi" },
        { id: "yanmo", title: "Yanmo's Enigma 🔮" },
        { id: "yey", title: "Yue Er yue💃玥儿玥" },

        { id: "zhangxinxin", title: "Zhang Xinxin's Glow 🌟" },
        { id: "zhouyuxi", title: "Zhou Yuxi's Elegance 🎀" },
    ].map(item => ({ ...item, cover: genJpg1(GH_ab, `abinfluencer/main/${item.id}`)[0] })),


    bnabi: [
        { id: "sparkling", title: "✨ Dazzling in Sparkling" },
        { id: "gown", title: "👗 Timeless Gown Beauty" },
        { id: "bodycon", title: "💃 Curves in Command" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `bnabi/main/${item.id}`)[0] })),


    absyz: [
        { id: "stunning", title: "🔥 Daily Fresh & Hot Trends" },
        { id: "bbs", title: "🛏️ Cozy & Seductive Moments" },
        { id: "korean", title: "💋 Sublime Korean" },
        { id: "floral", title: "🌸 Flirty Floral Charms" },
        { id: "lace", title: "🎀 Timeless Grace in Silk & Lace" },
        { id: "oneshoulder", title: "👑 Fantasy & Queens" },
        { id: "office", title: "💼 Chic at Work" },
        { id: "plunge", title: "🌸Plunging Passion" },
        { id: "slip", title: "🎭 Sultry Slip" },
        { id: "strapless", title: "💃 Bare & Beautiful" },
    ].map(item => ({ ...item, cover: genJpg1(GH_ab, `absyz/main/${item.id}`)[0] })),


    abanran: [
        { id: "sultry", title: "Simply Irresistible 💘" },
        { id: "stunning", title: "🔥 Daily Fresh & Hot Trends" },
        { id: "sparkling", title: "✨ Dazzling in Sparkling" },
        { id: "slip", title: "🪶 Silken Slip Dress" },
        { id: "plunge", title: "🔥Plunging Passion" },

        { id: "office", title: "🏢 Chic at Work" },

        { id: "lace", title: "🕊️ Timeless Grace in Silk & Lace" },
        { id: "hotel", title: "🌙 Luxe Escapes & Midnight Whispers" },
        { id: "demins", title: "👖 Casual Chic in Demin" },
        { id: "classroom", title: "🎓 Enchanting in Class" },
        { id: "bodycon", title: "🎭 Sculpted Seduction" },

    ].map(item => ({ ...item, cover: genJpg1(GH_ab, `abanran/main/${item.id}`)[0] })),

    ablxl: [
        { id: "afterbath", title: "🛏️ Just Stepped Out" },
        { id: "bodycon", title: "💃 Sensual & Sculpted Bodycon" },
        { id: "cheongsam", title: "👘 Elegant in Cheongsam" },
        { id: "demin_short", title: "💎 Sublime Demin" },
        { id: "fishdress", title: "🐠 Mythical Mermaid" },

        { id: "fur", title: "🧥 Luxurious Fur Looks" },
        { id: "halter", title: "🌶️ Halter Neck Elegance" },
        { id: "home", title: "🏡 Cozy Chic at Home" },
        { id: "keyhole", title: "Keyhole Temptation 🔑" },
        { id: "office", title: "🎓 Enchanting in Office" },

        { id: "oneshoulder", title: "👗 Bold One-Shoulder Styles" },
        { id: "plunge", title: "🔥Plunging Passion" },
        { id: "slip", title: "🪶 Silken Slip Dress" },
        { id: "snow", title: "❄️ Winter Wonderland" },
        { id: "student", title: "📚 Student Charm" },
        { id: "sultry", title: "🔥 Sultry Allure" },
    ].map(item => ({ ...item, cover: genJpg1(GH_ab, `ablxl/main/${item.id}`)[0] })),


    abxlz: [
        { id: "butt", title: "🛏️ Cozy & Seductive Moments" },
        { id: "cheongsam", title: "💃 Elegant in Timeless Cheongsam" },
        { id: "halter", title: "🎀 The Allure of Halter Styles" },
        { id: "keyhole", title: "Keyhole Temptation 🔑" },
        { id: "leggy", title: "🦵Leggy Goddess" },

        { id: "longskirt", title: "👗 Grace in Length" },
        { id: "office", title: "💼 Power Dressing at the Office" },
        { id: "oneshoulder", title: "One-Shoulder Icon 💃" },
        { id: "plunge", title: "🔥Plunging Passion" },
        { id: "seethrough", title: "👀 Seethrough Sensations" },

        { id: "slip", title: "🎀 Sultry Slip" },
        { id: "weddings", title: "💍 Angelically Innocent" },
        { id: "sultry", title: "🔥 Sultry Allure" },
    ].map(item => ({ ...item, cover: genJpg1(GH_ab, `abxlz/main/${item.id}`)[0] })),
    absuren: [
        { id: "backless", title: "💫Bare Backless" },
        { id: "bakunyuu", title: "🍈 Voluptuous Curves" },
        { id: "chubby", title: "👑 Regal Fantasy" },
        { id: "lolita", title: "😇 Angelic Innocence" },
        { id: "lowcut", title: "🔥Low-Cut Luxe" },
        { id: "mid", title: "🕰️ Timeless Elegance" },
        { id: "middleeast", title: "🕌 Exotic Allure" },
        { id: "nextdoor", title: "🏡 Sweet Next Door" },
        { id: "socialite", title: "💃 Flirty Socialite" },
        { id: "somebody", title: "🌟 Mystery Muse" },
        { id: "square", title: "📏 Sculpted Beauty" },
        { id: "stunning", title: "🔥 Breathtaking & Stunning" },
        { id: "travel", title: "✈️ Wanderlust Travel" },
        { id: "sultry", title: "Sultry Aura 🔥" },
        { id: "sb1", title: "👥 The Unseen Beauty" },
        { id: "sb2", title: "🚶‍♂️ Silent Stories" },
        { id: "sb3", title: "🌏 Beauty in the Crowd" },
        { id: "sb4", title: "📸 Capturing the Strangers" }
    ].map(item => ({ ...item, cover: genJpg1(GH_ab, `absuren/main/${item.id}`)[0] })),
    abcel: [
        { id: "clara", title: "💃 Clara 클라라" },
        { id: "dongliya", title: "🎭 Dong Liya" },
        { id: "jingtian", title: "🌟 Jing Tian 景甜" },
        { id: "others", title: "❓ Annonymous" },
        { id: "liuyan", title: "💎 Liu Yan" },
        { id: "yangmi", title: "👑 Yang Mi 大幂幂" },
        { id: "duxiaoyu", title: "📸 Du Xiaoyu" },
        { id: "xudongdong", title: "🌠 Xu Dongdong" },
        { id: "gulinazha", title: "🥵 Gu Li Na Zha" },
        { id: "zhangmeng", title: "🍑 Meng Zhang" },
        { id: "zhangxinyu", title: "😏 Zhang Xinyu" },
        { id: "yintao", title: "💖 Yin Tao" },
        { id: "xuanzi", title: "👀 Xuan Zi" },
        { id: "xuanlu", title: "😍 Xuan Lu" },
        { id: "mengziyi", title: "🍯 Meng Ziyi" },
        { id: "zhangyuyi", title: "☔ Raincoat Zhang" },
    ].map(item => ({ ...item, cover: genJpg1(GH_ab, `abcel/main/${item.id}`)[0] })),

    abspecialtaste: [
        { id: "stunning", title: "🔥 Daily Fresh & Hot Trends" },
        { id: "cosplay", title: "🎭 Cosplay Fantasy" },
        { id: "face", title: "😊 Face" },
        { id: "backbutt", title: "🍑 Back & Butt" },
        { id: "back", title: "🔙 Elegance from Behind" },
        { id: "butt", title: "🍑 Curves & Confidence" },
        { id: "finger", title: "🤌 Graceful Fingertips" },
        { id: "legfeet", title: "🦵 Poise in Every Step" },
    ].map(item => ({ ...item, cover: genJpg1(GH_ab, `abspecialtaste/main/${item.id}`)[0] })),


    abmini: [
        { id: "bakunyuu", title: "🍑 Lush & Voluptuous Curves" },
        { id: "bodycon", title: "🔥 Sculpted Seduction in Bodycon" },
        { id: "deco", title: "💖 Tempting Décolleté & Sultry Glamour" },
        { id: "haltertop", title: "🌿 Bare & Bold: The Halter Look" },
        { id: "nextdoor", title: "🏡 Irresistible Charm of the Girl Next Door" },

        { id: "spaghetti", title: "✨ Delicate Beauty in Slender Straps" },
        { id: "strapless", title: "👗 Bare Elegance in Strapless Styles" },
        { id: "suite", title: "🏨 Suite Seduction & Luxe Sophistication" },
        { id: "sweater", title: "🧣 Snug & Sultry: Cozy Yet Chic" },
        { id: "whiteshirt", title: "👔 Undone Desire: White Shirt Temptation" },
    ].map(item => ({ ...item, cover: genJpg1(GH_ab, `abmini/main/${item.id}`)[0] })),

    abss: [
        { id: "bodycon", title: "🔥 Sensual & Sculpted Bodycon" },
        { id: "cheongsam", title: "💃 Elegant in Timeless Cheongsam" },
        { id: "demin", title: "Casual Chic in Demin 👖" },
        { id: "desktop_wallpaper", title: "👔 Desktop" },
        { id: "floral", title: "🌸 Flirty Floral Charms" },
        { id: "haltertop", title: "🎀 Allure en Halter" },
        { id: "heart", title: "🖤 Mysterious Black Heart" },
        { id: "highneckhalter", title: "👗 Chic in High-Neck Halter" },
        { id: "kendall", title: "👠 The Allure of Kendall Style" },
        { id: "lace", title: "🕊️ Timeless Grace in Silk & Lace" },
        { id: "leopard", title: "🐆 Wild & Bold: Leopard Prints" },
        { id: "turtleneck", title: "🧥 Cozy & Stylish in Turtle Neck" },
        { id: "yellow", title: "🌼 Radiant in Dazzling Yellow" },
        { id: "split", title: "🪡 Sleek & Sexy Split Dresses" },
        { id: "spa", title: "💫 Sultry Spaghetti Straps" },
        { id: "oneshoulder", title: "👑 Fantasy & Queens" },
    ].map(item => ({ ...item, cover: genJpg1(GH_ab, `abss/main/${item.id}`)[0] })),

    abplaces: [
        { id: "bath", title: "🛁Cozy & Seductive Bath Moments" },
        { id: "bed", title: "🛏️ Serene Bed" },
        { id: "outdoor", title: "Floral Escape 🍃" },
        { id: "school", title: "🏫 School Days & Cute Styles" },
        { id: "sofa", title: "🛋️ Sofa Soft" },
        { id: "shanghai", title: "🌶️ Sultry Shanghai" },
        { id: "office", title: "💼 Power Dressing at the Office" },
        { id: "home", title: "🏡 Cozy Chic at Home" },
        { id: "night", title: "🌙 Midnight Glamour & Nightlife" },
    ].map(item => ({ ...item, cover: genJpg1(GH_ab, `abplaces/main/${item.id}`)[0] })),


    bgif: [
        { id: "gif", title: "🎞️ Animated GIFs" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `bgif/main/${item.id}`)[0] })),
    abpast: [
        { id: "b2025", title: "🌶️ Elegant 2025" },
        { id: "2024", title: "📅 Iconic Looks of 2024" },
        { id: "2023", title: "💎 Timeless Trends of 2023" },
        { id: "2022", title: "📜 Nostalgic Beauty of 2022" },
        { id: "2021", title: "⏳ Classic Elegance of 2021" },
        { id: "2020", title: "🕰️ Golden Memories of 2020" },
        { id: "2019", title: "📖 The Legacy of 2019" },
        { id: "2018", title: "🎞️ The Fashion Story of 2018" },
        { id: "2017", title: "🌟 Retro Glam of 2017" },
        { id: "2016", title: "💃 The Chic Vibes of 2016" },
    ].map(item => ({ ...item, cover: genJpg1(GH_ab, `abpast/main/${item.id}`)[0] })),

    abkele: [
        { id: "bikini", title: "👙 Bikini Beauty" },
        { id: "bodycon", title: "💃 Curves in Command" },
        { id: "cheongsam", title: "👘 Elegant in Cheongsam" },
        { id: "corset", title: "🔥Corset Passion" },
        { id: "cos", title: "Cosplay Fantasy 🎭", },

        { id: "floral", title: "🌸 Flirty Floral Charms" },

        { id: "halter", title: "🌶️ Halter Neck Elegance" },
        { id: "home", title: "🏡 Cozy Chic at Home" },
        { id: "laceshort", title: "💎 Sublime Short" },
        { id: "plunge", title: "🔥 Plunging Passion" },
        { id: "slip", title: "🎀 Sultry Slip" },

        { id: "stunning", title: "🔥 Daily Fresh & Hot Trends" },
        { id: "split", title: "💃Split Siren" },
        { id: "underwear", title: "👔 Underwear Soft" },

    ].map(item => ({ ...item, cover: genJpg1(GH_ab, `abkele/main/${item.id}`)[0] })),

};
