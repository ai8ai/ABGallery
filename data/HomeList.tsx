// Category
import { CatInterface, Cat2SubMap } from '@/config/type';
import { genJpg88, genJpg55, genJpg8, genJpg5, genGifList, genJpgList } from '@/utils/genImageList'

export const HomeList: CatInterface[] = [
    { id: "abstunning", ghname: "ai8ai", title: "Hot 🧨 Stunning", shorttitle: "Hot & Stunning", cover: genJpg55("abcat/main/stunning")[0] },
    { id: "bycc", ghname: "aidres8", title: "Yang Chenchen🈲杨晨晨", shorttitle: "Yang Chenchen", cover: genJpg55("abcat/main/ycc")[0] },

    { id: "bwxy", ghname: "aidres8", title: "Wang Xinyao 🔥 王馨瑶", shorttitle: "Wang Xinyao", cover: genJpg55("abcat/main/wxy")[0] },
    { id: "bcmy", ghname: "aidres8", title: "Chu Mengyao 💋 初梦瑶", shorttitle: "Chu Mengyao 初梦瑶", cover: genJpg55("abcat/main/cmy")[0] },

    { id: "bnabi", ghname: "aidres8", title: "Yeon 娜比 🌸", shorttitle: "Yeon 娜比", cover: genJpg55("abcat/main/nabi")[0] },
    { id: "absyz", ghname: "ai8ai", title: "Son Yoon Joo 💖 손윤주", shorttitle: "Son Yoon Joo", cover: genJpg55("abcat/main/syz")[0] },

    { id: "abkele", ghname: "ai8ai", title: "Kele Vicky 🍑", shorttitle: "Kele Vicky", cover: genJpg55("abcat/main/kele")[0] },
    { id: "abanran", ghname: "ai8ai", title: "Anran ✨ 安然", shorttitle: "Anran", cover: genJpg55("abcat/main/anran")[0] },

    { id: "abzyx", ghname: "ai8ai", title: "Carol 周妍希 🔥", shorttitle: "Carol 周妍希", cover: genJpg55("abcat/main/zyx")[0] },
    { id: "abxlz", ghname: "ai8ai", title: "Xu Lizhi 🍑 徐莉芝", shorttitle: "Booty Xu Lizhi", cover: genJpg55("abcat/main/xlz")[0] },

    { id: "abccc", ghname: "ai8ai", title: "Cheng Chengcheng 💃 程程程", shorttitle: "Cheng Chengcheng", cover: genJpg55("abcat/main/ccc")[0] },
    { id: "ablxl", ghname: "ai8ai", title: "Lin Xinglan 🌹 林星阑", shorttitle: "Lin Xinglan", cover: genJpg55("abcat/main/lxl")[0] },

    { id: "absuren", ghname: "ai8ai", title: "Girl Next Door 👗 素人しろうと", shorttitle: "Girl Next Door", cover: genJpg55("abcat/main/suren")[0] },
    { id: "abcel", ghname: "ai8ai", title: "Celebrities 🌟", shorttitle: "Celebrities", cover: genJpg55("abcat/main/cel")[0] },

    { id: "abspecialtaste", ghname: "ai8ai", title: "Special Taste 😈", shorttitle: "Special Taste", cover: genJpg55("abcat/main/special")[0] },
    { id: "absketch", ghname: "ai8ai", title: "Sketch & Hand-drawing ✏️", shorttitle: "Sketch & Hand-drawing", cover: genJpg55("abcat/main/sketch")[0] },

    { id: "abmini", ghname: "ai8ai", title: "Modern Minimalist 🛋️", shorttitle: "Modern Minimalist", cover: genJpg55("abcat/main/mini")[0] },
    { id: "abss", ghname: "ai8ai", title: "Signature Styles 🔥", shorttitle: "Signature Styles", cover: genJpg55("abcat/main/ss")[0] },

    { id: "abplaces", ghname: "ai8ai", title: "Places 🌆", shorttitle: "Places", cover: genJpg55("abcat/main/places")[0] },
    { id: "abholiday", ghname: "ai8ai", title: "Holidays 🎉", shorttitle: "Holidays", cover: genJpg55("abcat/main/holiday")[0] },

    { id: "igif", ghname: "ai8ai", title: "GIF MP4 🎞️", shorttitle: "GIF", cover: genGifList("aicat/gif/gc", 5)[0] },
    { id: "abpast", ghname: "ai8ai", title: "Past Year Collection 📸", shorttitle: "past", cover: genJpg55("abcat/main/past")[0] },

    { id: "div1", ghname: "", title: "", shorttitle: "", cover: "" },
    { id: "div2", ghname: "", title: "", shorttitle: "", cover: "" },

    { id: "cc1shoulder", ghname: "aidres8", title: "Yang Chenchen🔥 \n One Shoulder", shorttitle: "Yome One Shoulder", cover: genJpg55("abcat/main/cc1shoulder")[0] },
    { id: "ccbankunyuu", ghname: "aidres8", title: "Yang Chenchen 🌰 Bankunyuu", shorttitle: "Yome 🌰 Bankunyuu", cover: genJpg55("abcat/main/ccbankunyuu")[0] },
    { id: "ccsultry", ghname: "aidres8", title: "Yang Chenchen 😈 Sultry", shorttitle: "Yome Sultry", cover: genJpg55("abcat/main/ccsultry")[0] },
    { id: "ccdemin", ghname: "aidres8", title: "Yang Chenchen 👖 Demin", shorttitle: "Yome 👖 Demin", cover: genJpg55("abcat/main/ccdemin")[0] },
    { id: "ccche", ghname: "aidres8", title: "Yang Chenchen 🌸 Cheongsam Collection", shorttitle: "Yome Cheongsam", cover: genJpg55("abcat/main/ccche")[0] },
    { id: "ccbody", ghname: "aidres8", title: "Yang Chenchen 🔥 Body", shorttitle: "Yome Body", cover: genJpg55("abcat/main/ccblue")[0] },


    // { id: "ccblue", ghname: "aidres8", title: "Yang Chenchen 💙 Blue", shorttitle: "Yome Blue", cover: genJpg55("abcat/main/ccblue")[0] },
    // { id: "ccbodycon", ghname: "aidres8", title: "Yang Chenchen 😍 Bodycon", shorttitle: "Yome Bodycon", cover: genJpg55("abcat/main/ccbodycon")[0] },
    // { id: "ccelegance", ghname: "aidres8", title: "Yang Chenchen 👑 Elegance", shorttitle: "Yome Elegance", cover: genJpg55("abcat/main/ccelegance")[0] },
    // { id: "ccformal", ghname: "aidres8", title: "Yang Chenchen 👗 Formal", shorttitle: "Yome Formal", cover: genJpg55("abcat/main/ccformal")[0] },
    // { id: "ccfur", ghname: "aidres8", title: "Yang Chenchen 🧸 Fur", shorttitle: "Yome Fur", cover: genJpg55("abcat/main/ccfur")[0] },
    // { id: "ccgarage", ghname: "aidres8", title: "Yang Chenchen 🚗 Garage", shorttitle: "Yome Garage", cover: genJpg55("abcat/main/ccgarage")[0] },
    // { id: "ccgreen", ghname: "aidres8", title: "Yang Chenchen 💚 in Green", shorttitle: "Yome Green", cover: genJpg55("abcat/main/ccgreen")[0] },
    // { id: "ccnextdoor", ghname: "aidres8", title: "Yang Chenchen 🌸 Next Door Girl", shorttitle: "Yome Next Door", cover: genJpg55("abcat/main/ccnextdoor")[0] },
    // { id: "ccoutdoor", ghname: "aidres8", title: "Yang Chenchen 🌿 Outdoor", shorttitle: "Yome Outdoor", cover: genJpg55("abcat/main/ccoutdoor")[0] },
    // { id: "ccpink", ghname: "aidres8", title: "Yang Chenchen 💖 in Pink", shorttitle: "Yome Pink", cover: genJpg55("abcat/main/ccpink")[0] },
    // { id: "ccred", ghname: "aidres8", title: "Yang Chenchen 🈲 in Red", shorttitle: "Yome 🈲 Red", cover: genJpg55("abcat/main/ccred")[0] },
    // { id: "ccspa", ghname: "aidres8", title: "Yang Chenchen 🍝 Spaghetti", shorttitle: "Yome Spaghetti", cover: genJpg55("abcat/main/ccspa")[0] },
    // { id: "ccstr", ghname: "aidres8", title: "Yang Chenchen 🍸 Strapless", shorttitle: "Yome Strapless", cover: genJpg55("abcat/main/ccstr")[0] },
    // { id: "ccviolet", ghname: "aidres8", title: "Yang Chenchen 💜 Violet", shorttitle: "Yome Violet", cover: genJpg55("abcat/main/ccviolet")[0] },
    // { id: "ccwhite", ghname: "aidres8", title: "Yang Chenchen 🤍 in White", shorttitle: "Yome White", cover: genJpg55("abcat/main/ccwhite")[0] },
    // { id: "ccyellow", ghname: "aidres8", title: "Yang Chenchen 💛 in Yellow", shorttitle: "Yome Yellow", cover: genJpg55("abcat/main/ccyellow")[0] },
    // { id: "ccpast", ghname: "aidres8", title: "Yang Chenchen 📸 Past Years", shorttitle: "Yome Past", cover: genJpg55("abcat/main/ccpast")[0] }
];

