// Category
import { Cat2SubMap } from '@/config/type';
import { genJpg88 } from '@/utils/genImageList'
    // { id: "ccblue", ghname: "aidres8", title: "Yang Chenchen 💙 Blue", cover: genJpg55("abcat/main/ccblue")[0] },
    // { id: "ccbodycon", ghname: "aidres8", title: "Yang Chenchen 😍 Bodycon", cover: genJpg55("abcat/main/ccbodycon")[0] },
    // { id: "ccelegance", ghname: "aidres8", title: "Yang Chenchen 👑 Elegance", cover: genJpg55("abcat/main/ccelegance")[0] },
    // { id: "ccformal", ghname: "aidres8", title: "Yang Chenchen 👗 Formal", cover: genJpg55("abcat/main/ccformal")[0] },
    // { id: "ccfur", ghname: "aidres8", title: "Yang Chenchen 🧸 Fur", cover: genJpg55("abcat/main/ccfur")[0] },
    // { id: "ccgreen", ghname: "aidres8", title: "Yang Chenchen 💚 in Green", cover: genJpg55("abcat/main/ccgreen")[0] },
    // { id: "ccpink", ghname: "aidres8", title: "Yang Chenchen 💖 in Pink", cover: genJpg55("abcat/main/ccpink")[0] },
    // { id: "ccred", ghname: "aidres8", title: "Yang Chenchen 🈲 in Red", cover: genJpg55("abcat/main/ccred")[0] },
    // { id: "ccstr", ghname: "aidres8", title: "Yang Chenchen 🍸 Strapless", cover: genJpg55("abcat/main/ccstr")[0] },
    // { id: "ccviolet", ghname: "aidres8", title: "Yang Chenchen 💜 Violet", cover: genJpg55("abcat/main/ccviolet")[0] },
    // { id: "ccyellow", ghname: "aidres8", title: "Yang Chenchen 💛 in Yellow", cover: genJpg55("abcat/main/ccyellow")[0] },
    // { id: "ccpast", ghname: "aidres8", title: "Yang Chenchen 📸 Past Years", cover: genJpg55("abcat/main/ccpast")[0] }

export const YCCImg: Cat2SubMap = {
    sub_cc1shoulder: [
        { id: "bp01", title: "🖤Black Pantyhose Allure", folder: "blacksilk" },
        { id: "bc01", title: "👗Bodycon Temptation", folder: "bodycon" },
        { id: "dm01", title: "👖Demin Desire", folder: "demin" },
        { id: "gw01", title: "👑Gown Glamour", folder: "gown" },
        { id: "lg01", title: "🦵Leggy Goddess", folder: "leggy" },
        { id: "su01", title: "🔥Sultry Seduction", folder: "sultry" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "cc1shoulder", cover: genJpg88(`cc1shoulder/main/${item.folder}`)[0] })),
    sub_ccbankunyuu: [
        { id: "s01", title: "Sultry Aura 🔥", folder: "sultry" },
        { id: "w02", title: "Minimal Muse 🎨", folder: "singleband" },
        { id: "so3", title: "Picnic Play 🍉", folder: "picnic" },
        { id: "s23", title: "🌿 Naturally Nude", folder: "nude" },
        { id: "s04", title: "Keyhole Temptation 🔑", folder: "keyhole" },
        { id: "w05", title: "Cutout Couture ✂️", folder: "cutout" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccbankunyuu", cover: genJpg88(`ccbankunyuu/main/${item.folder}`)[0] })),


    sub_ccbody: [
        { id: "s01", title: "🔙 Elegance from Behind", folder: "back" },
        { id: "s05", title: "🍑 Curves & Confidence", folder: "butt" },
        { id: "w02", title: "🦵 Leggy & Stunning", folder: "leg" },
        { id: "so3", title: "😊 Face", folder: "face" },
        { id: "s11", title: "🔥S-Style Seduction", folder: "s" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccbody", cover: genJpg88(`ccbody/main/${item.folder}`)[0] })),
    sub_ccche: [
        { id: "so3", title: "Petal Splash 🌼", folder: "floral_color" },
        { id: "w02", title: "Dragon Bloom 🐉", folder: "floral_dragongown" },
        { id: "w05", title: "Green Petal 🌿", folder: "floral_green" },
        { id: "w05", title: "Greentea Bloom 🍵", folder: "floral_greentea" },
        { id: "s04", title: "Monochrome Bloom ⚫⚪", folder: "floral_monochrome" },
        { id: "s01", title: "Violet Blossom 💜", folder: "floral_violet" },
        { id: "bob", title: "Golden Petals 🌟", folder: "floral_yellow" },
        { id: "bo6", title: "Cherry Kimono 🌸", folder: "japanese" },
        { id: "s07", title: "Midnight Bloom 🌙", folder: "night" },
        { id: "o08", title: "Floral Escape 🍃", folder: "outdoor" },
        { id: "bo9", title: "Crimson Muse 🔴", folder: "red" },
        { id: "w08", title: "Solid Chic ⚡", folder: "solidcolor" },
        { id: "boa", title: "Solid Scarlet ❤️", folder: "solidred" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccche", cover: genJpg88(`ccche/main/${item.folder}`)[0] })),


    sub_ccsultry: [
        { id: "b01", title: "💫Bare Backless", folder: "backless" },
        { id: "b02", title: "🦵Bankunyuu🌰",   folder: "bankunyuu" },
        { id: "c01", title: "🌸Chic Camisole", folder: "camisole" },
        { id: "p01", title: "🔥Plunging Passion", folder: "plunge" },
        { id: "s01", title: "🔥S-Style Seduction", folder: "s" },
        { id: "n01", title: "✨Sheer Sensation", folder: "seethrough" },
        { id: "s02", title: "💃Split Siren", folder: "split" },
        { id: "s03", title: "👠Sultry Stripper", folder: "stripper" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccsultry", cover: genJpg88(`ccsultry/main/${item.folder}`)[0] })),
    sub_ccdemin: [
        { id: "bo9", title: "Backless Rebel 🔥", folder: "backless" },
        { id: "w08", title: "Bold Bandeau 👙", folder: "bandeau" },
        { id: "w05", title: "Cutout Couture ✂️", folder: "cutout" },
        { id: "s07", title: "Twilight Denim 🌌", folder: "dark" },
        { id: "bo6", title: "Deep Indigo 💙", folder: "darkblue" },
        { id: "w05", title: "Lace Layers 🕸️", folder: "lace_long_sleeve" },
        { id: "bob", title: "One-Shoulder Icon 💃", folder: "oneshoulder" },
        { id: "s04", title: "Wild Outdoors 🌲", folder: "outdoor" },
        { id: "p01", title: "🔥Plunging Passion", folder: "plunge" },
        { id: "r01", title: "❤️Ravishing Red", folder: "red" },
        { id: "w02", title: "Cutoff Cutie 👖", folder: "short" },
        { id: "s01", title: "Citrus Denim 🍋", folder: "yellowgreen" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccdemin", cover: genJpg88(`ccdemin/main/${item.folder}`)[0] })),




    ccblue: [
        { id: "s01", title: "🧜‍♀️ Enchanted Mermaid", folder: "mermaid" },
        { id: "w02", title: "🩰 Graceful One Shoulder", folder: "oneshoulder" },
        { id: "so3", title: "💙 Royal Blue Elegance", folder: "royalblue" },
        { id: "s04", title: "🌃 Skyline Mini Chic", folder: "skylinemini" },
        { id: "w05", title: "🪶 Silken Slip Dress", folder: "slip" },
        { id: "s06", title: "🫐 Soft Blue Dream", folder: "softblue" },
        { id: "w07", title: "🍝 Spaghetti Strap Bodycon", folder: "spaghatti_bodycon" },
        { id: "s08", title: "🔥 Sultry Allure", folder: "sultry" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccblue", cover: genJpg88(`ccblue/main/${item.folder}`)[0] })),

    ccfur: [
        { id: "b01", title: "🔥Bold Bodycon", folder: "bodycon" },
        { id: "c01", title: "🏎️Red Hot Ride", folder: "car" },
        { id: "r01", title: "❤️Ravishing Red", folder: "red" },
        { id: "s01", title: "🌫️Grey Grace", folder: "stole_grey" },
        { id: "s02", title: "❄️Winter White", folder: "stole_white" },
        { id: "su1", title: "💋Sultry Elegance", folder: "sultry" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccfur", cover: genJpg88(`ccfur/main/${item.folder}`)[0] })),


    ccpast: [
        { id: "b01", title: "💥1M", folder: "p1m" },
        { id: "l01", title: "🔥33K", folder: "p33k" },
        { id: "r01", title: "⛓️500K", folder: "p500k" },
        { id: "b02", title: "💫100K", folder: "p100k" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccpast", cover: genJpg88(`ccpast/main/${item.folder}`)[0] })),


    ccyellow: [
        { id: "s01", title: "🌅 Sultry Sunrise", folder: "sultry" },
        { id: "w02", title: "✨ Golden Temptation", folder: "lowcut" },
        { id: "so3", title: "☀️ Cozy Glow", folder: "cosy" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccyellow", cover: genJpg88(`ccyellow/main/${item.folder}`)[0] })),

    ccviolet: [
        { id: "s01", title: "💫 Crisscross Desire", folder: "xstrap" },
        { id: "w02", title: "🌌 Velvet Twilight", folder: "sweater" },
        { id: "so3", title: "🍝 Spaghetti Seduction", folder: "spaghetti" },
        { id: "so5", title: "🌙 Midnight Cut", folder: "lowcut" },
        { id: "s04", title: "✨ Beaded Mirage", folder: "beadedmesh" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccviolet", cover: genJpg88(`ccviolet/main/${item.folder}`)[0] })),

    ccstr: [
        { id: "s01", title: "⚡ Curves in Control", folder: "bodycon" },
        { id: "w02", title: "👗 Grace in Length", folder: "longskirt" },
        { id: "so3", title: "✨ Sparkle & Shine", folder: "sparkling" },
        { id: "s04", title: "💎 Sequin Dreams", folder: "sequined" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccstr", cover: genJpg88(`ccstr/main/${item.folder}`)[0] })),


    ccred: [
        { id: "s01", title: "🐾 Fur Allure", folder: "fur" },
        { id: "w02", title: "🌸 Flirty Florals", folder: "floral" },
        { id: "so3", title: "🎨 Deco Dreams", folder: "deco" },
        { id: "s04", title: "🎭 Chic in Che", folder: "che" },
        { id: "w05", title: "🌹 Camisole Charm", folder: "camisole" },
        { id: "s11", title: "🎀 Choker Temptation", folder: "choker" },
        { id: "w12", title: "🔥 Bodycon Desire", folder: "bodycon" },
        { id: "s13", title: "✨ V-Neck Vibe", folder: "blacktopV" },
        { id: "s14", title: "🪑 Beneath the Bench", folder: "bench" },
        { id: "w15", title: "💫 Backless Beauty", folder: "backless" },
        { id: "a01", title: "🌟 Sultry Silhouettes", folder: "sultry" },
        { id: "a02", title: "🧣 Soft Sweater Seduction", folder: "sweater" },
        { id: "ao3", title: "👚 White Shirt Curves", folder: "whitshirtbodycon" },
        { id: "a04", title: "💭 Strapless Reverie", folder: "straplessonsofa" },
        { id: "a05", title: "👜 Spa Chic with Handbag", folder: "spa_w_handbag" },
        { id: "a11", title: "✂️ Split at the Spa", folder: "spasplit" },
        { id: "a12", title: "🛏️ Serene Spa Bed", folder: "spabed" },
        { id: "a13", title: "🧖‍♀️ Spa Muse", folder: "spa" },
        { id: "a14", title: "🔦 Low Necklight", folder: "lowneckhalter" },
        { id: "a15", title: "🌿 Outdoor Envy", folder: "outdoor" },
        { id: "a21", title: "💘 Ruched Romance", folder: "ruched" },
        { id: "a22", title: "👑 Highneck Halo", folder: "highneckhalter" },
        { id: "a23", title: "⛳ Glam on the Green", folder: "golf" },
        { id: "a24", title: "❤️ Crimson Temptress", folder: "deepredstrapless" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccred", cover: genJpg88(`ccred/main/${item.folder}`)[0] })),



    ccgreen: [
        { id: "s01", title: "Uniform Grace 🎽", folder: "uniform" },
        { id: "w02", title: "Spa Radiance 💆‍♀️", folder: "spa" },
        { id: "so3", title: "Pale Whisper 🌫️", folder: "pale" },
        { id: "s04", title: "Executive Cool 👔", folder: "office" },
        { id: "w05", title: "Green Glimpse 🌱", folder: "keyhole" },
        { id: "bo6", title: "Halter Dream 💭", folder: "halterneck" },
        { id: "s07", title: "Fur Fantasy 🐾", folder: "fur" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccgreen", cover: genJpg88(`ccgreen/main/${item.folder}`)[0] })),

    ccwhite: [
        { id: "s01", title: "Snowy Seduction ❄️", folder: "turtleneck" },
        { id: "w02", title: "Winter Whites ⛄", folder: "pants" },
        { id: "so3", title: "Cozy Chic 🧥", folder: "sp_sweater" },
        { id: "s04", title: "Clear Vision 👓", folder: "glass" },
        { id: "w05", title: "Net Temptation 🎣", folder: "fish-net" },
        { id: "bo6", title: "Bridal Muse 👰", folder: "bridal" },
        { id: "s07", title: "Ivory Curve 🤍", folder: "bodycon" },
        { id: "w08", title: "BBS Allure 🎀", folder: "bbs" },
        { id: "w09", title: "Silken Touch 🧵", folder: "silk" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccwhite", cover: genJpg88(`ccwhite/main/${item.folder}`)[0] })),

    ccpink: [
        { id: "s01", title: "Pure Bloom 🌸", folder: "whitetop" },
        { id: "w02", title: "Soft Hues 🌷", folder: "whitebottom" },
        { id: "so3", title: "Blush Fantasy 💗", folder: "purepink" },
        { id: "s04", title: "Hotel Glow 🏨", folder: "hotel" },
        { id: "w05", title: "Deep Desire 💖", folder: "deeppink" },
        { id: "bo6", title: "Mocha Mist ☕", folder: "brown" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccpink", cover: genJpg88(`ccpink/main/${item.folder}`)[0] })),

    sub_xybodycon: [
        { id: "s01", title: "🐾 Fur Allure", folder: "fur" },
        { id: "bo6", title: "Halter Dream 💭", folder: "halter" },
        { id: "syz106", title: "👑 Fantasy & Queens", folder: "hat" },
        { id: "m01", title: "💃Flirty Mini", folder: "mini" },
        { id: "s04", title: "Executive Cool 👔", folder: "office" },
        { id: "p01", title: "🔥Plunging Passion", folder: "plunge" },
        { id: "su01", title: "🔥Sultry Seduction", folder: "sultry" },
        { id: "w02", title: "🌌 Velvet Twilight", folder: "sweater" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "xybodycon", cover: genJpg88(`xybodycon/main/${item.folder}`)[0] })),

    sub_xycheongsam: [
        { id: "s04", title: "Keyhole Temptation 🔑", folder: "keyhole" },
        { id: "w02", title: "🦵 Leggy & Stunning", folder: "leggy" },
        { id: "su01", title: "🔥Sultry Lace Band", folder: "laceband" },
        { id: "s02", title: "💃Split Siren", folder: "split" },
        { id: "gw01", title: "👑Tradtional Glamour", folder: "traditional" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "xycheongsam", cover: genJpg88(`xycheongsam/main/${item.folder}`)[0] })),


    sub_xyclassic: [
        { id: "w12", title: "Assistant Blush 🩷", folder: "assistant" },
        { id: "bc01", title: "👗Bodycon Temptation", folder: "bodycon" },
        { id: "so3", title: "Cozy Layers 🧥 Coat", folder: "coat" },
        { id: "cdd", title: "🥂 Elegance", folder: "elegance"},
        { id: "vi1", title: "👑 Fantasy & Queens", folder: "graceful" },
        { id: "cc3", title: "Irresistible Charm💋Next Door", folder: "nextdoor" },        
        { id: "cc6", title: "Mystic Kitchen 🔵", folder: "kitchen" }, 
        { id: "s04", title: "Executive Cool 👔", folder: "office" },
        { id: "s13", title: "Power Pants 👖", folder: "pants" },
        { id: "s23", title: "Stunning Palazzo 👖", folder: "palazzo" },
        { id: "s11", title: "School Muse 🎓", folder: "student" },
        { id: "s01", title: "Uniform Grace 🎽", folder: "uniform" },
        { id: "s14", title: "Crisp Contrast 👕", folder: "whiteshirt" },
        { id: "gw01", title: "👑Gown Glamour", folder: "gown" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "xyclassic", cover: genJpg88(`xyclassic/main/${item.folder}`)[0] })),


    sub_xyseethrough: [
        { id: "bp01", title: "🖤Black Pantyhose Allure", folder: "blacksilk" },
        { id: "bc01", title: "👗Bodycon Temptation", folder: "bodycon" },
        { id: "so3", title: "Cozy Curling🧥 ", folder: "curling" },
        { id: "s02", title: "💃Split Siren", folder: "split" },
        { id: "a24", title: "❤️ Crimson Temptress", folder: "strapless" },
        { id: "su01", title: "🔥Sultry Seduction", folder: "sultry" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "xyseethrough", cover: genJpg88(`xyseethrough/main/${item.folder}`)[0] })),

    sub_xyplunge: [
        { id: "s07", title: "Midnight Bloom 🌙", folder: "drunk" },
        { id: "s01", title: "🐾 Fur Allure", folder: "fur" },
        { id: "w05", title: "🪶 Silken Slip Dress", folder: "slip" },
        { id: "s02", title: "💃Split Siren", folder: "split" },
        { id: "a24", title: "❤️ Crimson Temptress", folder: "strapless" },
        { id: "su01", title: "🔥Sultry Seduction", folder: "sultry" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "xyplunge", cover: genJpg88(`xyplunge/main/${item.folder}`)[0] })),

    sub_ccbodycon: [
        { id: "c01", title: "🏎️Red Hot Ride", folder: "car" },
        { id: "s01", title: "🐾 Fur Allure", folder: "fur" },
        { id: "w02", title: "🦵 Leggy & Stunning", folder: "leggy" },
        { id: "m01", title: "💃Flirty Minimal", folder: "minimal" },
        { id: "s23", title: "🌿 Naturally Nude", folder: "nude" },
        { id: "l02", title: "🍂Autumn Aura", folder: "orange" },
        { id: "s04", title: "🌸 Blush & Bubbles", folder: "pink" },
        { id: "bo9", title: "Crimson Muse 🔴", folder: "red" },
        { id: "n01", title: "✨Sheer Sensation", folder: "seethrough" },
        { id: "w05", title: "🪶 Silken Slip Dress", folder: "slip" },
        { id: "s08", title: "🔥 Sultry Allure", folder: "sultry" },
        { id: "s14", title: "Crisp Contrast 👕", folder: "whiteshirt" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccbodycon", cover: genJpg88(`ccbodycon/main/${item.folder}`)[0] })),
    sub_ccelegance: [
        { id: "s04", title: "Sky High Chic ✈️", folder: "fairy" },
        { id: "g01", title: "👗Classic Gown", folder: "gown" },
        { id: "l02", title: "🍂Autumn Aura", folder: "longskirt_orange" },
        { id: "n01", title: "✨Sheer Sensation", folder: "longskirt_seethrough" },
        { id: "bo9", title: "Sleeveless Rebel 🔥", folder: "longskirt_sleeveless" },
        { id: "s02", title: "❄️Winter White", folder: "longskirt_white" },
        { id: "s01", title: "🧜‍♀️ Enchanted Mermaid", folder: "mermaid" },
        { id: "g03", title: "🌼Golden Glow", folder: "yellow" },
        { id: "m01", title: "💃Flirty Minimal", folder: "minimal" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccelegance", cover: genJpg88(`ccelegance/main/${item.folder}`)[0] })),


    sub_ccformal: [
        { id: "w15", title: "Cool & Curvy 💙", folder: "bodycon_blueshirt" },
        { id: "s21", title: "Lacy Vision 🌹", folder: "bodycon_lace" },
        { id: "s24", title: "Blushing Bodycon 🌸", folder: "bodycon_pink" },
        { id: "w22", title: "Ruched Royale 👗", folder: "bodycon_ruched" },
        { id: "s23", title: "Violet Affair 💜", folder: "bodycon_violet" },
        { id: "s14", title: "Crisp Contrast 👕", folder: "bodycon_whiteshirt" },
        { id: "gw01", title: "👑Gown Glamour", folder: "gown" },
        { id: "s04", title: "Executive Cool 👔", folder: "official" },
        { id: "s13", title: "Power Pants 👖", folder: "pants" },
        { id: "s11", title: "School Muse 🎓", folder: "school" },
        { id: "w12", title: "Office Blush 🩷", folder: "pinkoffice" },
        { id: "s04", title: "Sky High Chic ✈️", folder: "stewardess" },
        { id: "w05", title: "Stairway to Glam ✨", folder: "stair" },
        { id: "s01", title: "Sultry Statement 🔥", folder: "sultry" },
        { id: "w02", title: "Boss Babe 👩‍💼", folder: "suite" },
        { id: "so3", title: "Laced in Elegance 👠", folder: "stockings" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccformal", cover: genJpg88(`ccformal/main/${item.folder}`)[0] })),

    sub_ccgarage: [
        { id: "b01", title: "💥Bold Bodycon", folder: "bodycon" },
        { id: "l01", title: "🔥Low-Cut Luxe", folder: "lowcut" },
        { id: "r01", title: "⛓️Red Chain Glam", folder: "laceband" },
        { id: "s04", title: "Motor Muse 🏍️", folder: "motor" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccgarage", cover: genJpg88(`ccgarage/main/${item.folder}`)[0] })),

    sub_cchalter: [
        { id: "w12", title: "🔥 Bodycon Desire", folder: "bodycon" },
        { id: "so3", title: "🍃 Emerald Escape", folder: "green" },
        { id: "l01", title: "🔥Low-Cut Luxe", folder: "lowcut" },
        { id: "a15", title: "🌿 Outdoor Envy", folder: "outdoor" },
        { id: "s02", title: "💃Split Siren", folder: "split" },
        { id: "r01", title: "❤️Ravishing Stole", folder: "stole" },
        { id: "s01", title: "Sultry Statement 🔥", folder: "sultry" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "cchalter", cover: genJpg88(`cchalter/main/${item.folder}`)[0] })),

    sub_cchighneck: [
        { id: "w12", title: "🔥 Bodycon Desire", folder: "bodycon" },
        { id: "so3", title: "Laced in Elegance 👠", folder: "lace" },
        { id: "so3", title: "Cozy Chic Turtle🧥", folder: "turtleneck" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "cchighneck", cover: genJpg88(`cchighneck/main/${item.folder}`)[0] })),

    sub_cclowcut: [
        { id: "s02", title: "❄️ Cream White", folder: "creamwhite" },
        { id: "w05", title: "Net Temptation 🎣", folder: "fishnet" },
        { id: "syz106", title: "👑 Fantasy & Queens", folder: "hat" },
        { id: "w12", title: "🔥 Square Desire", folder: "lowsquare" },
        { id: "so3", title: "🍃 Emerald Escape", folder: "palegreen" },
        { id: "s04", title: "🌸 Blush & Bubbles", folder: "pink" },
        { id: "cos", title: "Servant Queens 🎭", folder: "servant" },
        { id: "s04", title: "🌃 Skyline Chic", folder: "skyline" },
        { id: "sa3", title: "Laced in Elegance 👠", folder: "lace" },
        { id: "s01", title: "Sultry Statement 🔥", folder: "sultry" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "cclowcut", cover: genJpg88(`cclowcut/main/${item.folder}`)[0] })),

    sub_ccoutdoor: [
        { id: "w12", title: "🔥 Bodycon Desire", folder: "bodycon" },
        { id: "w05", title: "Garden Dream 🌸", folder: "garden" },
        { id: "s23", title: "🌿 Naturally Nude", folder: "nude" },
        { id: "w02", title: "Playground Charm 🎠", folder: "playground" },
        { id: "so3", title: "Seaside Breeze 🌊", folder: "seaside" },
        { id: "s11", title: "Soccer Chic ⚽", folder: "soccer" },
        { id: "s01", title: "Active Allure 🏃‍♀️", folder: "sport" },
        { id: "w05", title: "🪶 Silken Yoga", folder: "yoga" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccoutdoor", cover: genJpg88(`ccoutdoor/main/${item.folder}`)[0] })),

    sub_ccnextdoor: [
        { id: "cc1", title: "🔥 Hot & Stunning 🔥", folder: "stunning" },
        { id: "s01", title: "Braided Beauty 💇‍♀️", folder: "braids" },
        { id: "so3", title: "Cozy Layers 🧥", folder: "coat" },
        { id: "s04", title: "Sweet Bite 🍭", folder: "eating" },
        { id: "syz106", title: "👑 Fan-tasy", folder: "fan" },
        { id: "w05", title: "Floral Grace 🌺", folder: "flowerinhand" },
        { id: "s13", title: "Holiday Glow 🎄", folder: "holiday" },
        { id: "cc3", title: "Irresistible Charm💋Next Door", folder: "nextdoor" },        
        { id: "cc6", title: "Mystic Kitchen 🔵", folder: "kitchen" }, 
        { id: "w02", title: "Soft Light 🌅", folder: "light" },
        { id: "suc2",  title: "Angel's Temptation 😇", folder: "pure" },
        { id: "s11", title: "Heartfelt ❤️", folder: "sweatheart" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccnextdoor", cover: genJpg88(`ccnextdoor/main/${item.folder}`)[0] })),

    sub_ccplunge: [
        { id: "w12", title: "🔥 Bodycon Desire", folder: "bodycon" },
        { id: "w02", title: "Boss Babe 👩‍💼", folder: "formal" },
        { id: "w05", title: "Green Lake 🍵", folder: "green_lake" },
        { id: "s04", title: "Home Glow 🏨", folder: "home" },
        { id: "su01", title: "🔥Sultry Lace", folder: "laceblack" },
        { id: "s02", title: "❄️Lace White", folder: "lacewhite" },
        { id: "s11", title: "🌊 Blue Tranquility", folder: "lightblue" },
        { id: "m01", title: "💃Flirty Mini", folder: "miniskirt" },
        { id: "s04", title: "🌸 Blush & Bubbles", folder: "pink" },
        { id: "bo9", title: "Crimson Muse 🔴", folder: "red" },
        { id: "su01", title: "🔥Sultry Seduction", folder: "sultry" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccplunge", cover: genJpg88(`ccplunge/main/${item.folder}`)[0] })),

    sub_ccleggy: [
        { id: "ss03", title: "🐆 Leopard Prints", folder: "leo"},
        { id: "bp01", title: "🖤Black Pantyhose Allure", folder: "black_silk" },
        { id: "w12", title: "🔥 Bodycon Desire", folder: "bodycon" },
        { id: "s01", title: "💫 Crisscross Desire", folder: "crisscross" },
        { id: "su01", title: "🔥Sultry Lace", folder: "lace" },
        { id: "su02", title: "🔥Sultry Lace Band", folder: "laceband" },
        { id: "s07", title: "Midnight Bloom 🌙", folder: "night" },
        { id: "s02", title: "💃Split Siren", folder: "split" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccleggy", cover: genJpg88(`ccleggy/main/${item.folder}`)[0] })),

    sub_ccspa: [
        { id: "w12", title: "🔥 Bodycon Desire", folder: "bodycon" },
        { id: "s04", title: "Sky High Chic ✈️", folder: "fairy" },
        { id: "so3", title: "🍃 Emerald Escape", folder: "green" },
        { id: "s11", title: "🌊 Blue Tranquility", folder: "lightbluedoor" },
        { id: "sbl", title: "💙 Royal Blue Elegance", folder: "royalblue" },
        { id: "w05", title: "🌙 Midnight Relaxation", folder: "night" },
        { id: "s23", title: "🌿 Naturally Nude", folder: "nude" },
        { id: "w02", title: "✨ Sparkling Retreat", folder: "sparkling" },
        { id: "ao3", title: "👚 White Curves", folder: "white" },
        { id: "s01", title: "🛁 Spa Siren", folder: "sultry" },
    ].map(item => ({ ...item, ghname: "aidres8", repo: "ccspa", cover: genJpg88(`ccspa/main/${item.folder}`)[0] })),

};


