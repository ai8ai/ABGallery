import { CatInterface, Cat2SubMap } from '@/config/type';
import { genJpg88, genJpg55, genJpg8, genJpg5, genGifList, genJpgList } from '@/utils/genImageList'

export const HomeList: CatInterface[] = [
    { id: "abstunning", ghname: "ai8ai", title: "Hot 🧨 Stunning", cover: genJpg55("abcat/main/stunning")[0] },
    { id: "bycc", ghname: "aidres8", title: "Yang Chenchen🈲杨晨晨", cover: genJpg55("abcat/main/ycc")[0] },

    { id: "bwxy", ghname: "aidres8", title: "Wang Xinyao 🔥 王馨瑶", cover: genJpg55("abcat/main/wxy")[0] },
    { id: "bcmy", ghname: "aidres8", title: "Chu Mengyao 💋 初梦瑶", cover: genJpg55("abcat/main/cmy")[0] },

    { id: "bnabi", ghname: "aidres8", title: "Yeon 娜比 🌸", cover: genJpg55("abcat/main/nabi")[0] },
    { id: "absyz", ghname: "ai8ai", title: "Son Yoon Joo 💖 손윤주", cover: genJpg55("abcat/main/syz")[0] },

    { id: "abkele", ghname: "ai8ai", title: "Kele Vicky 🍑", cover: genJpg55("abcat/main/kele")[0] },
    { id: "abanran", ghname: "ai8ai", title: "Anran ✨ 安然", cover: genJpg55("abcat/main/anran")[0] },

    { id: "abzyx", ghname: "ai8ai", title: "Carol 周妍希 🔥", cover: genJpg55("abcat/main/zyx")[0] },
    { id: "abxlz", ghname: "ai8ai", title: "Xu Lizhi 🍑 徐莉芝", cover: genJpg55("abcat/main/xlz")[0] },

    { id: "abccc", ghname: "ai8ai", title: "Cheng Chengcheng 💃 程程程", cover: genJpg55("abcat/main/ccc")[0] },
    { id: "ablxl", ghname: "ai8ai", title: "Lin Xinglan 🌹 林星阑", cover: genJpg55("abcat/main/lxl")[0] },

    { id: "absuren", ghname: "ai8ai", title: "Girl Next Door 👗 素人しろうと", cover: genJpg55("abcat/main/suren")[0] },
    { id: "abcel", ghname: "ai8ai", title: "Celebrities 🌟", cover: genJpg55("abcat/main/cel")[0] },

    { id: "abspecialtaste", ghname: "ai8ai", title: "Special Taste 😈", cover: genJpg55("abcat/main/special")[0] },
    { id: "absketch", ghname: "ai8ai", title: "Sketch & Hand-drawing ✏️", cover: genJpg55("abcat/main/sketch")[0] },

    { id: "abmini", ghname: "ai8ai", title: "Modern Minimalist 🛋️", cover: genJpg55("abcat/main/mini")[0] },
    { id: "abss", ghname: "ai8ai", title: "Signature Styles 🔥", cover: genJpg55("abcat/main/ss")[0] },

    { id: "abplaces", ghname: "ai8ai", title: "Places 🌆", cover: genJpg55("abcat/main/places")[0] },
    { id: "abholiday", ghname: "ai8ai", title: "Holidays 🎉", cover: genJpg55("abcat/main/holiday")[0] },

    { id: "igif", ghname: "ai8ai", title: "GIF MP4 🎞️", cover: genGifList("aicat/gif/gc", 5)[0] },
    { id: "abpast", ghname: "ai8ai", title: "Past Year Collection 📸", cover: genJpg55("abcat/main/past")[0] },
];

