
const kanjiData = [

{ character:"会", meaning:"meet", onyomi:"カイ", kunyomi:"あう", jlpt:4, exampleWords:[{word:"会社",reading:"かいしゃ",meaning:"company"}]},
{ character:"同", meaning:"same", onyomi:"ドウ", kunyomi:"おなじ", jlpt:4, exampleWords:[{word:"同じ",reading:"おなじ",meaning:"same"}]},
{ character:"事", meaning:"thing", onyomi:"ジ", kunyomi:"こと", jlpt:4, exampleWords:[{word:"仕事",reading:"しごと",meaning:"work"}]},
{ character:"自", meaning:"self", onyomi:"ジ", kunyomi:"みずから", jlpt:4, exampleWords:[{word:"自分",reading:"じぶん",meaning:"oneself"}]},
{ character:"社", meaning:"company", onyomi:"シャ", kunyomi:"やしろ", jlpt:4, exampleWords:[{word:"会社",reading:"かいしゃ",meaning:"company"}]},
{ character:"発", meaning:"depart", onyomi:"ハツ", kunyomi:"たつ", jlpt:4, exampleWords:[{word:"出発",reading:"しゅっぱつ",meaning:"departure"}]},
{ character:"者", meaning:"person", onyomi:"シャ", kunyomi:"もの", jlpt:4, exampleWords:[{word:"医者",reading:"いしゃ",meaning:"doctor"}]},
{ character:"地", meaning:"ground", onyomi:"チ", kunyomi:"", jlpt:4, exampleWords:[{word:"地下",reading:"ちか",meaning:"underground"}]},
{ character:"業", meaning:"business", onyomi:"ギョウ", kunyomi:"", jlpt:4, exampleWords:[{word:"作業",reading:"さぎょう",meaning:"work"}]},
{ character:"方", meaning:"direction", onyomi:"ホウ", kunyomi:"かた", jlpt:4, exampleWords:[{word:"方法",reading:"ほうほう",meaning:"method"}]},



{ character:"動", meaning:"move", onyomi:"ドウ", kunyomi:"うごく", jlpt:4, exampleWords:[{word:"運動",reading:"うんどう",meaning:"exercise"}]},
{ character:"京", meaning:"capital", onyomi:"キョウ", kunyomi:"", jlpt:4, exampleWords:[{word:"東京",reading:"とうきょう",meaning:"Tokyo"}]},
{ character:"主", meaning:"main", onyomi:"シュ", kunyomi:"ぬし", jlpt:4, exampleWords:[{word:"主人",reading:"しゅじん",meaning:"master"}]},
{ character:"題", meaning:"topic", onyomi:"ダイ", kunyomi:"", jlpt:4, exampleWords:[{word:"問題",reading:"もんだい",meaning:"problem"}]},
{ character:"意", meaning:"idea", onyomi:"イ", kunyomi:"", jlpt:4, exampleWords:[{word:"意味",reading:"いみ",meaning:"meaning"}]},
{ character:"不", meaning:"not", onyomi:"フ", kunyomi:"", jlpt:4, exampleWords:[{word:"不便",reading:"ふべん",meaning:"inconvenient"}]},
{ character:"作", meaning:"make", onyomi:"サク", kunyomi:"つくる", jlpt:4, exampleWords:[{word:"作る",reading:"つくる",meaning:"to make"}]},
{ character:"用", meaning:"use", onyomi:"ヨウ", kunyomi:"もちいる", jlpt:4, exampleWords:[{word:"利用",reading:"りよう",meaning:"use"}]},
{ character:"度", meaning:"degree", onyomi:"ド", kunyomi:"", jlpt:4, exampleWords:[{word:"温度",reading:"おんど",meaning:"temperature"}]},
{ character:"強", meaning:"strong", onyomi:"キョウ", kunyomi:"つよい", jlpt:4, exampleWords:[{word:"強い",reading:"つよい",meaning:"strong"}]},

{ character:"公", meaning:"public", onyomi:"コウ", kunyomi:"", jlpt:4, exampleWords:[{word:"公園",reading:"こうえん",meaning:"park"}]},
{ character:"持", meaning:"hold", onyomi:"ジ", kunyomi:"もつ", jlpt:4, exampleWords:[{word:"持つ",reading:"もつ",meaning:"to hold"}]},
{ character:"野", meaning:"field", onyomi:"ヤ", kunyomi:"の", jlpt:4, exampleWords:[{word:"野球",reading:"やきゅう",meaning:"baseball"}]},
{ character:"以", meaning:"by means", onyomi:"イ", kunyomi:"", jlpt:4, exampleWords:[{word:"以上",reading:"いじょう",meaning:"more than"}]},
{ character:"思", meaning:"think", onyomi:"シ", kunyomi:"おもう", jlpt:4, exampleWords:[{word:"思う",reading:"おもう",meaning:"to think"}]},
{ character:"家", meaning:"house", onyomi:"カ", kunyomi:"いえ", jlpt:4, exampleWords:[{word:"家族",reading:"かぞく",meaning:"family"}]},
{ character:"世", meaning:"world", onyomi:"セイ", kunyomi:"", jlpt:4, exampleWords:[{word:"世界",reading:"せかい",meaning:"world"}]},
{ character:"多", meaning:"many", onyomi:"タ", kunyomi:"おおい", jlpt:4, exampleWords:[{word:"多い",reading:"おおい",meaning:"many"}]},
{ character:"正", meaning:"correct", onyomi:"セイ", kunyomi:"ただしい", jlpt:4, exampleWords:[{word:"正しい",reading:"ただしい",meaning:"correct"}]},
{ character:"安", meaning:"cheap/safe", onyomi:"アン", kunyomi:"やすい", jlpt:4, exampleWords:[{word:"安全",reading:"あんぜん",meaning:"safety"}]},
{ character:"感", meaning:"feeling", onyomi:"カン", kunyomi:"", jlpt:3, exampleWords:[{word:"感情",reading:"かんじょう",meaning:"emotion"}]},
{ character:"想", meaning:"thought", onyomi:"ソウ", kunyomi:"おもう", jlpt:3, exampleWords:[{word:"感想",reading:"かんそう",meaning:"impression"}]},
{ character:"決", meaning:"decide", onyomi:"ケツ", kunyomi:"きめる", jlpt:3, exampleWords:[{word:"決定",reading:"けってい",meaning:"decision"}]},
{ character:"続", meaning:"continue", onyomi:"ゾク", kunyomi:"つづく", jlpt:3, exampleWords:[{word:"続く",reading:"つづく",meaning:"to continue"}]},
{ character:"勝", meaning:"win", onyomi:"ショウ", kunyomi:"かつ", jlpt:3, exampleWords:[{word:"勝利",reading:"しょうり",meaning:"victory"}]},
{ character:"敗", meaning:"lose", onyomi:"ハイ", kunyomi:"やぶれる", jlpt:3, exampleWords:[{word:"失敗",reading:"しっぱい",meaning:"failure"}]},
{ character:"説", meaning:"theory", onyomi:"セツ", kunyomi:"とく", jlpt:3, exampleWords:[{word:"説明",reading:"せつめい",meaning:"explanation"}]},

{ character:"限", meaning:"limit", onyomi:"ゲン", kunyomi:"かぎる", jlpt:2, exampleWords:[{word:"制限",reading:"せいげん",meaning:"limit"}]},
{ character:"態", meaning:"condition", onyomi:"タイ", kunyomi:"", jlpt:2, exampleWords:[{word:"状態",reading:"じょうたい",meaning:"condition"}]},
{ character:"増", meaning:"increase", onyomi:"ゾウ", kunyomi:"ふえる", jlpt:2, exampleWords:[{word:"増加",reading:"ぞうか",meaning:"increase"}]},
{ character:"減", meaning:"decrease", onyomi:"ゲン", kunyomi:"へる", jlpt:2, exampleWords:[{word:"減少",reading:"げんしょう",meaning:"decrease"}]},
{ character:"測", meaning:"measure", onyomi:"ソク", kunyomi:"はかる", jlpt:2, exampleWords:[{word:"測定",reading:"そくてい",meaning:"measurement"}]},
{ character:"効", meaning:"effect", onyomi:"コウ", kunyomi:"", jlpt:2, exampleWords:[{word:"効果",reading:"こうか",meaning:"effect"}]},
{ character:"解", meaning:"solve", onyomi:"カイ", kunyomi:"とく", jlpt:2, exampleWords:[{word:"解決",reading:"かいけつ",meaning:"solution"}]},

{ character:"複", meaning:"complex", onyomi:"フク", kunyomi:"", jlpt:1, exampleWords:[{word:"複雑",reading:"ふくざつ",meaning:"complex"}]},
{ character:"雑", meaning:"misc", onyomi:"ザツ", kunyomi:"", jlpt:1, exampleWords:[{word:"雑誌",reading:"ざっし",meaning:"magazine"}]},
{ character:"圧", meaning:"pressure", onyomi:"アツ", kunyomi:"", jlpt:1, exampleWords:[{word:"圧力",reading:"あつりょく",meaning:"pressure"}]},
{ character:"資", meaning:"resource", onyomi:"シ", kunyomi:"", jlpt:1, exampleWords:[{word:"資源",reading:"しげん",meaning:"resource"}]},
{ character:"源", meaning:"origin", onyomi:"ゲン", kunyomi:"みなもと", jlpt:1, exampleWords:[{word:"資源",reading:"しげん",meaning:"resource"}]},
{ character:"構", meaning:"structure", onyomi:"コウ", kunyomi:"かまう", jlpt:1, exampleWords:[{word:"構造",reading:"こうぞう",meaning:"structure"}]},
{ character:"導", meaning:"guide", onyomi:"ドウ", kunyomi:"みちびく", jlpt:1, exampleWords:[{word:"指導",reading:"しどう",meaning:"guidance"}]},
{
      "character": "日",
      "meaning": "sun, day",
      "onyomi": "ニチ, ジツ",
      "kunyomi": "ひ, か",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "日本",
          "reading": "にほん",
          "meaning": "Japan"
        }
      ]
    },
    {
      "character": "人",
      "meaning": "person",
      "onyomi": "ジン, ニン",
      "kunyomi": "ひと",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "日本人",
          "reading": "にほんじん",
          "meaning": "Japanese person"
        }
      ]
    },
    {
      "character": "月",
      "meaning": "moon, month",
      "onyomi": "ゲツ, ガツ",
      "kunyomi": "つき",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "月曜日",
          "reading": "げつようび",
          "meaning": "Monday"
        }
      ]
    },
    {
      "character": "火",
      "meaning": "fire",
      "onyomi": "カ",
      "kunyomi": "ひ",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "火山",
          "reading": "かざん",
          "meaning": "volcano"
        }
      ]
    },
    {
      "character": "水",
      "meaning": "water",
      "onyomi": "スイ",
      "kunyomi": "みず",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "水曜日",
          "reading": "すいようび",
          "meaning": "Wednesday"
        }
      ]
    },
    {
      "character": "木",
      "meaning": "tree, wood",
      "onyomi": "モク, ボク",
      "kunyomi": "き",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "木曜日",
          "reading": "もくようび",
          "meaning": "Thursday"
        }
      ]
    },
    {
      "character": "金",
      "meaning": "gold, money",
      "onyomi": "キン, コン",
      "kunyomi": "かね",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "金曜日",
          "reading": "きんようび",
          "meaning": "Friday"
        }
      ]
    },
    {
      "character": "土",
      "meaning": "earth, soil",
      "onyomi": "ド, ト",
      "kunyomi": "つち",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "土曜日",
          "reading": "どようび",
          "meaning": "Saturday"
        }
      ]
    },
    {
      "character": "山",
      "meaning": "mountain",
      "onyomi": "サン",
      "kunyomi": "やま",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "富士山",
          "reading": "ふじさん",
          "meaning": "Mount Fuji"
        }
      ]
    },
    {
      "character": "川",
      "meaning": "river",
      "onyomi": "セン",
      "kunyomi": "かわ",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "川口",
          "reading": "かわぐち",
          "meaning": "river mouth"
        }
      ]
    },
    {
      "character": "田",
      "meaning": "rice field",
      "onyomi": "デン",
      "kunyomi": "た",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "田中",
          "reading": "たなか",
          "meaning": "Tanaka"
        }
      ]
    },
    {
      "character": "口",
      "meaning": "mouth",
      "onyomi": "コウ, ク",
      "kunyomi": "くち",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "入口",
          "reading": "いりぐち",
          "meaning": "entrance"
        }
      ]
    },
    {
      "character": "目",
      "meaning": "eye",
      "onyomi": "モク",
      "kunyomi": "め",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "目的",
          "reading": "もくてき",
          "meaning": "purpose"
        }
      ]
    },
    {
      "character": "耳",
      "meaning": "ear",
      "onyomi": "ジ",
      "kunyomi": "みみ",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "耳鼻科",
          "reading": "じびか",
          "meaning": "ear, nose, throat department"
        }
      ]
    },
    {
      "character": "手",
      "meaning": "hand",
      "onyomi": "シュ",
      "kunyomi": "て",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "上手",
          "reading": "じょうず",
          "meaning": "skillful"
        }
      ]
    },
    {
      "character": "足",
      "meaning": "foot, leg",
      "onyomi": "ソク",
      "kunyomi": "あし",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "足音",
          "reading": "あしおと",
          "meaning": "footsteps"
        }
      ]
    },
    {
      "character": "力",
      "meaning": "power",
      "onyomi": "リョク, リキ",
      "kunyomi": "ちから",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "電力",
          "reading": "でんりょく",
          "meaning": "electric power"
        }
      ]
    },
    {
      "character": "男",
      "meaning": "man",
      "onyomi": "ダン, ナン",
      "kunyomi": "おとこ",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "男の子",
          "reading": "おとこのこ",
          "meaning": "boy"
        }
      ]
    },
    {
      "character": "女",
      "meaning": "woman",
      "onyomi": "ジョ, ニョ",
      "kunyomi": "おんな",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "女性",
          "reading": "じょせい",
          "meaning": "woman, female"
        }
      ]
    },
    {
      "character": "子",
      "meaning": "child",
      "onyomi": "シ, ス",
      "kunyomi": "こ",
      "jlpt": 5,
      "exampleWords": [
        {
          "word": "子供",
          "reading": "こども",
          "meaning": "child"
        }
      ]
    }
  
];

export default kanjiData;