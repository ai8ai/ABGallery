import { CatInterface } from '@/config/type';
import { genJpg1, genGifList } from '@/utils/genImageList'

export const HomeList: CatInterface[] = [
    { id: "abstunning", gh: "silkbeauty",    title: "Hot 🧨 Stunning", },  // id is repo
    { id: "ccmain",     gh: "aidres8",  title: "Yang Chenchen🈲杨晨晨", },

    { id: "bwxy", gh: "aidres8", title: "Wang Xinyao 🔥 王馨瑶" },
    { id: "abkele", gh: "ai8ai", title: "Kele Vicky 🍑" },

    { id: "ablxl", gh: "ai8ai", title: "Lin Xinglan 🌹 林星阑" },
    { id: "absyz", gh: "ai8ai", title: "Son Yoon Joo 💖 손윤주" },

    { id: "abxlz", gh: "ai8ai", title: "Xu Lizhi 🍑 徐莉芝" },
    { id: "abanran", gh: "ai8ai", title: "Anran ✨ 安然" },
    
    { id: "absuren", gh: "ai8ai", title: "Next Door👗素人しろうと" },
    { id: "abspecialtaste", gh: "ai8ai", title: "Special Taste 😈" },

    { id: "bgif", gh: "aidres8", title: "GIF MP4 🎞️" },
    { id: "abinfluencer", gh: "ai8ai", title: "📸 Influencer 🎥" },

    { id: "abccc", gh: "ai8ai", title: "Chengcheng 💃 程程程" },
    { id: "abzyx", gh: "ai8ai", title: "Carol 周妍希 🔥" },

    { id: "bcmy", gh: "aidres8", title: "Chu Mengyao 💋 初梦瑶" },
    { id: "bnabi", gh: "aidres8", title: "Yeon 娜比 🌸", },

    { id: "byey", gh: "aidres8", title: "Yue Er yue💃玥儿玥" },
    { id: "abmini", gh: "ai8ai", title: "Modern Minimalist 🛋️" },

    { id: "abss", gh: "ai8ai", title: "Signature Styles 🔥" },
    { id: "abplaces", gh: "ai8ai", title: "Scenarios 🌆" },

    { id: "sart", gh: "silkbeauty", title: "🎨 Artistic Elegance" },
    { id: "sai",  gh: "silkbeauty", title: "DeepSeek Generated🎉" },

    
].map(item => ({...item,
    cover: genJpg1(`${item.gh}`, `${item.id}/main/cat`)[0]   // cat is folder name.
}));
