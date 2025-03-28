import { CatInterface } from '@/config/type';
import { genJpg1, genGifList } from '@/utils/genImageList'

export const HomeList: CatInterface[] = [
    { id: "abstunning", gh: "ai8ai",    title: "Hot 🧨 Stunning", },  // id is repo
    { id: "ccmain",     gh: "aidres8",  title: "Yang Chenchen🈲杨晨晨", },

    // { id: "bwxy", gh: "aidres8", title: "Wang Xinyao 🔥 王馨瑶" },
    // { id: "bcmy", gh: "aidres8", title: "Chu Mengyao 💋 初梦瑶" },

    // { id: "bnabi", gh: "aidres8", title: "Yeon 娜比 🌸", },
    // { id: "absyz", gh: "ai8ai", title: "Son Yoon Joo 💖 손윤주" },

    // { id: "abkele", gh: "ai8ai", title: "Kele Vicky 🍑" },
    // { id: "abanran", gh: "ai8ai", title: "Anran ✨ 安然" },

    // { id: "abzyx", gh: "ai8ai", title: "Carol 周妍希 🔥" },
    // { id: "abxlz", gh: "ai8ai", title: "Xu Lizhi 🍑 徐莉芝" },

    // { id: "abccc", gh: "ai8ai", title: "Cheng Chengcheng 💃 程程程" },
    // { id: "ablxl", gh: "ai8ai", title: "Lin Xinglan 🌹 林星阑" },

    // { id: "absuren", gh: "ai8ai", title: "Girl Next Door 👗 素人しろうと" },
    // { id: "abcel", gh: "ai8ai", title: "Celebrities 🌟" },

    // { id: "abspecialtaste", gh: "ai8ai", title: "Special Taste 😈" },
    // { id: "absketch", gh: "ai8ai", title: "Sketch & Hand-drawing ✏️" },

    // { id: "abmini", gh: "ai8ai", title: "Modern Minimalist 🛋️" },
    // { id: "abss", gh: "ai8ai", title: "Signature Styles 🔥" },

    // { id: "abplaces", gh: "ai8ai", title: "Places 🌆" },
    // { id: "abholiday", gh: "ai8ai", title: "Holidays 🎉" },

    // { id: "igif", gh: "ai8ai", title: "GIF MP4 🎞️" },
    // { id: "abpast", gh: "ai8ai", title: "Past Year Collection 📸" },
].map(item => ({...item,
    cover: genJpg1(`${item.gh}`, `${item.id}/main/cat`)[0]   // cat is folder name.
}));
