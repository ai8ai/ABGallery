// Category
import { Cat2SubMap } from '@/config/type';
import { genJpg1 } from '@/utils/genImageList'

const GH_ab = "ai8ai"
const GH_bb = "aidres8"
const GH_sb = "silkbeauty"

export const SubList: Cat2SubMap = {
    sub_cc1shoulder: [
        { id: "blacksilk", title: "🖤Black Pantyhose Allure" },
        { id: "bodycon", title: "👗Bodycon Temptation" },
        { id: "demin", title: "👖Demin Desire" },
        { id: "gown", title: "👑Gown Glamour" },
        { id: "leggy", title: "🦵Leggy Goddess" },
        { id: "sultry", title: "🔥Sultry Seduction" }
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `cc1shoulder/main/${item.id}`)[0] })),
    sub_ccbankunyuu: [
        { id: "tubetop", title: "🎀 Tube Top" },
        { id: "sultry", title: "Sultry Aura 🔥" },
        { id: "xstrap", title: "💫 Crisscross Desire" },
        { id: "singleband", title: "Minimal Muse 🎨" },
        { id: "camisole", title: "🌸Chic Camisole" },
        { id: "picnic", title: "Picnic Play 🍉" },
        { id: "nude", title: "🌿 Naturally Nude" },
        { id: "keyhole", title: "Keyhole Temptation 🔑" },
        { id: "croptop", title: "Sassy in Croptops 👚" },
        { id: "cutout", title: "Cutout Couture ✂️" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `ccbankunyuu/main/${item.id}`)[0] })),

    sub_ccbody: [
        { id: "back", title: "🔙 Elegance from Behind" },
        { id: "butt", title: "🍑 Curves & Confidence" },
        { id: "leg", title: "🦵 Leggy & Stunning" },
        { id: "face", title: "😊 Face" },
        { id: "s", title: "🔥S-Style Seduction" }
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `ccbody/main/${item.id}`)[0] })),
    sub_ccche: [
        { id: "keyhole", title: "Keyhole Temptation 🔑" },
        { id: "split", title: "💋Split Siren" },
        { id: "floral_color", title: "Petal Splash 🌼" },
        { id: "floral_dragongown", title: "Dragon Bloom 🐉" },
        { id: "floral_green", title: "Green Petal 🌿" },
        { id: "floral_greentea", title: "Greentea Bloom 🍵" },
        { id: "floral_monochrome", title: "Monochrome Bloom ⚫⚪" },
        { id: "floral_yellow", title: "Golden Petals 🌟" },
        { id: "japanese", title: "Cherry Kimono 🌸" },
        { id: "outdoor", title: "Floral Escape 🍃" },
        { id: "red", title: "Crimson Muse 🔴" },
        { id: "solidcolor", title: "Solid Chic ⚡" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `ccche/main/${item.id}`)[0] })),


    sub_ccsultry: [
        { id: "backless", title: "💫Bare Backless" },
        { id: "bath", title: "🛁Cozy Bath Moments" },
        { id: "bankunyuu", title: "🦵Bankunyuu🌰" },
        { id: "bombshells", title: "💃Bomb Shells" },
        { id: "camisole", title: "🌸Chic Camisole" },
        { id: "cosy", title: "☀️ Cozy Glow" },
        { id: "glass", title: "Clear 👓 Beautiful" },
        { id: "plunge", title: "🍝Plunging Passion" },
        { id: "s", title: "🔥S-Style Seduction" },
        { id: "seethrough", title: "✨Sheer Sensation" },
        { id: "split", title: "💋Split Siren" },
        { id: "xstrap", title: "💫 Crisscross Desire" },
        { id: "tubetop", title: "🎀 Tube Top" },
        { id: "stripper", title: "👠Sultry Stripper" }

    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `ccsultry/main/${item.id}`)[0] })),
    sub_ccdemin: [
        { id: "backless", title: "Backless Rebel 🔥" },
        { id: "bandeau", title: "Bold Bandeau 👙" },
        { id: "cutout", title: "Cutout Couture ✂️" },
        { id: "dark", title: "Twilight Denim 🌌" },
        { id: "darkblue", title: "Deep Indigo 💙" },
        { id: "lace_long_sleeve", title: "Lace Layers 🕸️" },
        { id: "oneshoulder", title: "One-Shoulder Icon 💃" },
        { id: "outdoor", title: "Wild Outdoors 🌲" },
        { id: "plunge", title: "🔥Plunging Passion" },
        { id: "choker", title: "❤️Ravishing Choker" },
        { id: "short", title: "Cutoff Cutie 👖" },
        { id: "yellowgreen", title: "Citrus Denim 🍋" }
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `ccdemin/main/${item.id}`)[0] })),

    sub_ccbodycon: [
        { id: "car", title: "🏎️Red Hot Ride" },
        { id: "floral", title: "🌸 Flirty Florals" },
        { id: "fur_red", title: "❤️Ravishing Fur Red" },
        { id: "fur_green", title: "🌫️Green Fur Grace" },
        { id: "fur_black", title: "🖤Black Fur Allure" },
        { id: "leggy", title: "🦵 Leggy & Stunning" },
        { id: "minimal", title: "💃Flirty Minimal" },
        { id: "nude", title: "🌿 Naturally Nude" },
        { id: "orange", title: "🍂Autumn Aura" },
        { id: "pink", title: "🌸 Blush & Bubbles" },
        { id: "red", title: "Crimson Muse 🔴" },
        { id: "seethrough", title: "✨Sheer Sensation" },
        { id: "slip", title: "🪶 Silken Slip Dress" },
        { id: "sultry", title: "🔥 Sultry Allure" },
        { id: "whiteshirt", title: "Crisp Contrast 👕" }
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `ccbodycon/main/${item.id}`)[0] })),
    sub_ccelegance: [
        { id: "beadedmesh", title: "✨ Beaded Mirage" },
        { id: "bench", title: "🪑 Beneath the Bench" },
        { id: "choker", title: "🎀 Choker Temptation" },
        { id: "fairy", title: "Sky High Chic ✈️" },
        { id: "gown", title: "👗Classic Gown" },
        { id: "halter", title: "Halter Dream 💭" },
        { id: "longskirt_orange", title: "🍂Autumn Aura" },
        { id: "longskirt_seethrough", title: "✨Sheer Sensation" },
        { id: "longskirt_sleeveless", title: "Sleeveless Rebel 🔥" },
        { id: "longskirt_white", title: "❄️Winter White" },
        { id: "mermaid", title: "🧜‍♀️ Enchanted Mermaid" },
        { id: "minimal", title: "💃Flirty Minimal" },
        { id: "uniform", title: "Uniform Grace 🎽" },
        { id: "yellow", title: "🌼Golden Glow" },
        { id: "sparkling", title: "✨ Sparkling Retreat" },
        { id: "sweater", title: "🧣 Soft Sweater Seduction" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `ccelegance/main/${item.id}`)[0] })),


    sub_ccformal: [
        { id: "bodycon_blueshirt", title: "Cool & Curvy 💙" },
        { id: "bodycon_pink", title: "Blushing Bodycon 🌸" },
        { id: "bodycon_ruched", title: "Ruched Royale 👗" },
        { id: "bodycon_violet", title: "Violet Affair 💜" },
        { id: "bodycon_whiteshirt", title: "Crisp Contrast 👕" },
        { id: "glass", title: "Clear 👓 Beautiful" },
        { id: "gown", title: "👑Gown Glamour" },
        { id: "official", title: "Executive Cool 👔" },
        { id: "office", title: "Office Charm 🩷" },
        { id: "pinkoffice", title: "Office Blush 👠" },
        { id: "pants", title: "Power Pants 👖" },
        { id: "school", title: "School Muse 🎓" },
        { id: "stewardess", title: "Sky High Chic ✈️" },
        { id: "stair", title: "Stairway to Glam ✨" },
        { id: "suite", title: "Boss Babe 👩‍💼" },
        { id: "stockings", title: "Laced in Elegance 👠" },
        { id: "sultry", title: "Sultry Statement 🔥" },
        { id: "uniform", title: "Uniform Grace 🎽" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `ccformal/main/${item.id}`)[0] })),
    sub_ccgarage: [
        { id: "bodycon", title: "💥Bold Bodycon" },
        { id: "lowcut", title: "🔥Low-Cut Luxe" },
        { id: "laceband", title: "⛓️Red Chain Glam" },
        { id: "motor", title: "Motor Muse 🏍️" }
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `ccgarage/main/${item.id}`)[0] })),

    sub_cchalter: [
        { id: "bodycon", title: "🔥 Bodycon Desire" },
        { id: "green", title: "🍃 Emerald Escape" },
        { id: "longskirt", title: "👗 Grace in Length" },
        { id: "whitebottom", title: "Angel's Temptation 😇" },
        { id: "lowcut", title: "🔥Low-Cut Luxe" },
        { id: "outdoor", title: "🌿 Outdoor Envy" },
        { id: "red", title: "Crimson Muse 🔴" },
        { id: "split", title: "💃Split Siren" },
        { id: "stole", title: "❤️Ravishing Stole" },
        { id: "sultry", title: "Sultry Statement 🔥" }

    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `cchalter/main/${item.id}`)[0] })),
    sub_cchighneck: [
        { id: "bodycon", title: "🔥 Bodycon Desire" },
        { id: "lace", title: "Laced in Elegance 👠" },
        { id: "turtleneck", title: "Cozy Chic Turtle🧥" }
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `cchighneck/main/${item.id}`)[0] })),

    sub_cclowcut: [
        { id: "creamwhite", title: "❄️ Cream White" },
        { id: "fishnet", title: "Net Temptation 🎣" },
        { id: "hat", title: "👑 Fantasy & Queens" },
        { id: "lace", title: "Laced in Elegance 👠" },
        { id: "lowsquare", title: "🔥 Square Desire" },
        { id: "palegreen", title: "🍃 Emerald Escape" },
        { id: "pink", title: "🌸 Blush & Bubbles" },
        { id: "ruched", title: "💘 Ruched Romance" },
        { id: "seethrough", title: "✨Sheer Sensation" },
        { id: "skyline", title: "🌃 Skyline Chic" },
        { id: "sultry", title: "Sultry Statement 🔥" },
        { id: "sofa", title: "🛋️ Sofa Soft" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `cclowcut/main/${item.id}`)[0] })),

    sub_ccleggy: [
        { id: "black_silk", title: "🖤Black Pantyhose Allure" },
        { id: "bodycon", title: "🔥 Bodycon Desire" },
        { id: "crisscross", title: "💫 Crisscross Desire" },
        { id: "lace", title: "🔥Sultry Lace" },
        { id: "laceband", title: "🔥Sultry Lace Band" },
        { id: "leo", title: "🐆 Leopard Prints" },
        { id: "night", title: "Midnight Bloom 🌙" },
        { id: "split", title: "💃Split Siren" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `ccleggy/main/${item.id}`)[0] })),

    sub_ccoutdoor: [
        { id: "bodycon", title: "🔥 Bodycon Desire" },
        { id: "garden", title: "Garden Dream 🌸" },
        { id: "golf", title: "⛳ Glam on the Green" },
        { id: "green_sultry", title: "🔥 Green Sultry Seduction" },
        { id: "nude", title: "🌿 Naturally Nude" },
        { id: "playground", title: "Playground Charm 🎠" },
        { id: "seaside", title: "Seaside Breeze 🌊" },
        { id: "soccer", title: "Soccer Chic ⚽" },
        { id: "sport", title: "Active Allure 🏃‍♀️" },
        { id: "yoga", title: "🪶 Silken Yoga" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `ccoutdoor/main/${item.id}`)[0] })),
    sub_ccnextdoor: [
        { id: "stunning", title: "🔥 Hot & Stunning 🔥" },
        { id: "braids", title: "Braided Beauty 💇‍♀️" },
        { id: "coat", title: "Cozy Layers 🧥" },
        { id: "eating", title: "Sweet Bite 🍭" },
        { id: "fan", title: "👑 Fan-tasy" },
        { id: "flowerinhand", title: "Floral Grace 🌺" },
        { id: "holiday", title: "Holiday Glow 🎄" },
        { id: "kitchen", title: "Mystic Kitchen 🔵" },
        { id: "light", title: "Soft Light 🌅" },
        { id: "nextdoor", title: "Irresistible Charm💋Next Door" },
        { id: "pure", title: "Angel's Temptation 😇" },
        { id: "selfi", title: "Crimson Muse 🔴" },
        { id: "sweatheart", title: "Heartfelt ❤️" },
        { id: "shower", title: "🛁Cozy Bath Moments" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `ccnextdoor/main/${item.id}`)[0] })),


    sub_ccplunge: [
        { id: "bodycon", title: "🔥 Bodycon Desire" },
        { id: "formal", title: "Boss Babe 👩‍💼" },
        { id: "green_lake", title: "Green Lake 🍵" },
        { id: "home", title: "Home Glow 🏨" },
        { id: "laceblack", title: "🔥 Sultry Lace" },
        { id: "lacered", title: "⛓️ Red Chain Glam" },
        { id: "lacewhite", title: "❄️ Lace White" },
        { id: "lightblue", title: "🌊 Blue Tranquility" },
        { id: "miniskirt", title: "💃 Flirty Mini" },
        { id: "pink", title: "🌸 Blush & Bubbles" },
        { id: "red", title: "Crimson Muse 🔴" },
        { id: "tubetop", title: "🎀 Tube Top" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `ccplunge/main/${item.id}`)[0] })),
    sub_ccspa: [
        { id: "bed", title: "🛏️ Serene Bed" },
        { id: "bodycon", title: "🔥 Bodycon Desire" },
        { id: "fairy", title: "Sky High Chic ✈️" },
        { id: "green_violet", title: "🍃 Emerald Escape" },
        { id: "hotel", title: "Hotel Glow 🏨" },
        { id: "lightbluedoor", title: "🌊 Blue Tranquility" },
        { id: "night", title: "🌙 Midnight Relaxation" },
        { id: "nude", title: "🌿 Naturally Nude" },
        { id: "pink_sultry", title: "🌟 Sultry Silhouettes Pink" },
        { id: "red", title: "Crimson Muse 🔴" },
        { id: "royalblue", title: "💙 Royal Blue Elegance" },
        { id: "sparkling", title: "✨ Sparkling Retreat" },
        { id: "split", title: "✂️ Split at the Spa" },
        { id: "sweater", title: "🧣 Soft Sweater Seduction" },
        { id: "sultry", title: "🛁 Spa Siren" },
        { id: "w_handbag", title: "👜 Spa Chic with Handbag" },
        { id: "yellow_sultry", title: "🔥 Yellow Desire" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `ccspa/main/${item.id}`)[0] })),

    sub_cccos: [
        { id: "sultry", title: "🛁 Spa Siren" },
        { id: "rabbit", title: "🧣 Rabbit" },
        { id: "police", title: "✂️ Policeman" },
        { id: "nurse", title: "🛏️ Serene Nurse" },
        { id: "chef", title: "🌿 Naturally Chef" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `cccos/main/${item.id}`)[0] })),
    sub_ccwedding: [
        { id: "outdoor", title: "Floral Escape 🍃" },
        { id: "indoor", title: "👑 Fantasy & Queens" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `ccwedding/main/${item.id}`)[0] })),

    sub_xycos: [
        { id: "sultry", title: "🛁 Spa Siren" },
        { id: "halter", title: "Halter Dream 💭" },
        { id: "police", title: "✂️ Policeman" },

    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `xycos/main/${item.id}`)[0] })),
    sub_xywearing: [
        { id: "croptop", title: "Sassy in Croptops 👚" },
        { id: "demin", title: "Casual Chic in Demin 👖" },
        { id: "lowcut", title: "Sultry Lowcut 💄" },
        { id: "red", title: "Mystic Red ❤️" },
        { id: "sofa", title: "Relaxed Allure 🛋️" },
        { id: "sparkling", title: "Dazzling in Sparkling ✨" },
        { id: "strapless", title: "Bare & Beautiful & Strapless 💋" },
        { id: "sultry", title: "🔥Sultry Seduction" }
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `xywearing/main/${item.id}`)[0] })),
    sub_xysultry: [
        { id: "braless", title: "👙No Bra, No Rules" },
        { id: "backless", title: "💫Bare Backless" },
        { id: "corset", title: "🔥Corset Passion" },
        { id: "haltertop", title: "Halter Dream 💭" },
        { id: "oneshoulder", title: "One-Shoulder Icon 💃" },
        { id: "swimming", title: "Swimming Breeze 🌊" },
        { id: "tubetop", title: "🎀 Tube Top" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `xysultry/main/${item.id}`)[0] })),


    sub_xybodycon: [
        { id: "fur", title: "🐾 Fur Allure" },
        { id: "halter", title: "Halter Dream 💭" },
        { id: "hat", title: "👑 Fantasy & Queens" },
        { id: "mini", title: "💃Flirty Mini" },
        { id: "office", title: "Executive Cool 👔" },
        { id: "plunge", title: "🔥Plunging Passion" },
        { id: "sultry", title: "🔥Sultry Seduction" },
        { id: "sweater", title: "🌌 Velvet Twilight" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `xybodycon/main/${item.id}`)[0] })),
    sub_xycheongsam: [
        { id: "keyhole", title: "Keyhole Temptation 🔑" },
        { id: "leggy", title: "🦵 Leggy & Stunning" },
        { id: "laceband", title: "🔥Sultry Lace Band" },
        { id: "split", title: "💃Split Siren" },
        { id: "traditional", title: "👑Traditional Glamour" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `xycheongsam/main/${item.id}`)[0] })),
    sub_xyclassic: [
        { id: "assistant", title: "Assistant Blush 🩷" },
        { id: "bodycon", title: "👗Bodycon Temptation" },
        { id: "coat", title: "Cozy Layers 🧥 Coat" },
        { id: "elegance", title: "🥂 Elegance" },
        { id: "gown", title: "👑Gown Glamour" },
        { id: "graceful", title: "🌸 Fantasy & Queens" },
        { id: "kitchen", title: "Mystic Kitchen 🔵" },
        { id: "longskirt", title: "👗 Grace in Length" },
        { id: "office", title: "Executive Cool 👔" },
        { id: "pants", title: "Power Pants 👖" },
        { id: "palazzo", title: "Stunning Palazzo 👖" },
        { id: "student", title: "School Muse 🎓" },
        { id: "teacher", title: "Teacher Muse 🎓" },
        { id: "uniform", title: "Uniform Grace 🎽" },
        { id: "whiteshirt", title: "Crisp Contrast 👕" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `xyclassic/main/${item.id}`)[0] })),
    
    sub_xyseethrough: [
        { id: "blacksilk", title: "🖤Black Pantyhose Allure" },
        { id: "bodycon", title: "👗Bodycon Temptation" },
        { id: "curling", title: "Cozy Curling🧥" },
        { id: "split", title: "💃Split Siren" },
        { id: "strapless", title: "❤️ Crimson Temptress" },
        { id: "sultry", title: "🔥Sultry Seduction" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `xyseethrough/main/${item.id}`)[0] })),
    sub_xyplunge: [
        { id: "drunk", title: "Midnight Bloom 🌙" },
        { id: "fur", title: "🐾 Fur Allure" },
        { id: "slip", title: "🪶 Silken Slip Dress" },
        { id: "split", title: "💃Split Siren" },
        { id: "seethrough", title: "✨Sheer Sensation" },
        { id: "sultry", title: "🔥Sultry Seduction" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `xyplunge/main/${item.id}`)[0] })),
    sub_xynextdoor: [
        { id: "outdoor", title: "Outdoor Escape 🍃" },
        { id: "floral", title: "🌸 Flirty Florals" },
        { id: "home", title: "Home Glow 🏨" },
        { id: "afterwork", title: "🛏️ Just Stepped Out" },
        { id: "leisuretime", title: "👑 Calm & Serene" },
    ].map(item => ({ ...item, cover: genJpg1(GH_bb, `xynextdoor/main/${item.id}`)[0] })),

    sub_ssketch: [
        { id: "sketch", title: "🎨 Artistic Sketches" },
        { id: "history", title: "🏡 History" },
        { id: "face", title: "🎭 Mesmerizing Face"},
        { id: "flower", title: "🌸 Blooming Elegance"},
        { id: "human", title: "👤 Divine Form"},
        { id: "legfinger", title: "🦵 Leggy Finger Allure"},
        { id: "lips", title: "💋 Tempting Lips"},
        { id: "nature", title: "🍃 Nature’s Charm"},
        { id: "lightandshadow", title: "💡 Light & Shadow Drama"},
    ].map(item => ({ ...item, cover: genJpg1(GH_sb, `ssketch/main/${item.id}`)[0] })),

    sub_sholiday: [
        { id: "luneryear", title: "🎊 Chinese New Year" },
        { id: "deco", title: "💎 Sublime Décolleté" },
        { id: "wallpaper", title: "🖼️ Elegant Wallpaper" },
        { id: "weddings", title: "💍 Weddings" },
    ].map(item => ({ ...item, cover: genJpg1(GH_sb, `sholiday/main/${item.id}`)[0] })),

    sub_sdesktop: [
        { id: "scene", title: "💎 Sublime Scene" },
        { id: "beauties", title: "🖼️ Elegant Wallpaper" },
    ].map(item => ({ ...item, cover: genJpg1(GH_sb, `sdesktop/main/${item.id}`)[0] })),

    sub_sscene: [
        { id: "sea", title: "🌊 Majestic Seascape",},
        { id: "lone", title: "🌟 Serene Solitude",},
        { id: "land", title: "🏞️ Enchanted Landscapes",},
        { id: "sky", title: "💎Twinkle, Twinkle, Little Star" },
    ].map(item => ({ ...item, cover: genJpg1(GH_sb, `sscene/main/${item.id}`)[0] })),

};
