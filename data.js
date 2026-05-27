// data.js

/*
  重要：
  請將您 simulator.html 檔案中的 `allProfessionsData` 和 `recommendedBuilds` 
  這兩個 const 變數的完整內容，從 simulator.html 中「剪下」(Cut)，
  然後「貼上」(Paste) 到這個檔案中。

  完成後，這個檔案看起來應該會像這樣：*/

/*const allProfessionsData = {
    Bishop: {  ...主教的所有技能資料...  },
    // ...其他所有職業的資料
};

const recommendedBuilds = {
    Bishop: [ {  ...主教的推薦配點...  } ],
    // ...其他所有推薦配點的資料
};*/
const allProfessionsData = {
    "主教 (Bishop)": {
        emblemUrl: 'emblems/Bishop.png',
        startingLevelForSp: 8,
        jobAdvancementSpBonuses: [8, 30, 70, 120],
        jobStagesOrder: ["0轉 (新手)", "1轉 (魔法師)", "2轉 (僧侶)", "3轉 (祭司)", "4轉 (主教)", "超技能", "5轉技能", "共通技能"],
        spRequiredFor2ndJob: 67, // 法師2轉點數需求
        spRequiredFor3rdJob: 188, // 法師3轉點數需求
        spRequiredFor4thJob: 339, // 4轉通用點數需求
        skills: {
            "0轉 (新手)": [],
            "1轉 (魔法師)": [
                {
                    id: "magicPurify", name: "魔力淨化", maxLevel: 16, requiredLevel: 10, preRequisite: {}, description: "每10秒鐘可恢復更多量的MP。", imageUrl: "images/magicPurify.png",
                    levels: Array(17).fill(null).map((_, i) => i === 0 ? null : { effect: `${(0.1 * i).toFixed(1)}x角色等級+3 MP回復量`, fullDescription: `每10秒鐘可恢復更多量的MP。回復量公式：${(0.1 * i).toFixed(1)}x角色等級+3` })
                },
                {
                    id: "magicExtension", name: "魔力擴展", maxLevel: 10, requiredLevel: 10, preRequisite: { "magicPurify": 5 }, description: "當等級提升時，增加MP的最大追加量。", imageUrl: "images/magicExtension.png",
                    levels: Array(11).fill(null).map((_, i) => i === 0 ? null : { effect: `升級追加量: ${2 * i}`, fullDescription: `當等級提升時，增加MP的最大追加量。等級${i}效果：升級追加量${2 * i}。` })
                },
                {
                    id: "magicGuard", name: "魔心防禦", maxLevel: 20, requiredLevel: 10, preRequisite: {}, description: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。但若MP達到0時，則直接消耗HP。", imageUrl: "images/magicGuard.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 6, 持續時間: 170秒, 替代率: 23%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級1效果：消耗MP6，持續170秒，替代率23%。" },
                        { effect: "消耗MP: 6, 持續時間: 180秒, 替代率: 26%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級2效果：消耗MP6，持續180秒，替代率26%。" },
                        { effect: "消耗MP: 6, 持續時間: 190秒, 替代率: 29%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級3效果：消耗MP6，持續190秒，替代率29%。" },
                        { effect: "消耗MP: 6, 持續時間: 200秒, 替代率: 32%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級4效果：消耗MP6，持續200秒，替代率32%。" },
                        { effect: "消耗MP: 6, 持續時間: 210秒, 替代率: 35%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級5效果：消耗MP6，持續210秒，替代率35%。" },
                        { effect: "消耗MP: 6, 持續時間: 220秒, 替代率: 38%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級6效果：消耗MP6，持續220秒，替代率38%。" },
                        { effect: "消耗MP: 6, 持續時間: 230秒, 替代率: 41%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級7效果：消耗MP6，持續230秒，替代率41%。" },
                        { effect: "消耗MP: 6, 持續時間: 240秒, 替代率: 44%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級8效果：消耗MP6，持續240秒，替代率44%。" },
                        { effect: "消耗MP: 6, 持續時間: 250秒, 替代率: 47%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級9效果：消耗MP6，持續250秒，替代率47%。" },
                        { effect: "消耗MP: 6, 持續時間: 260秒, 替代率: 50%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級10效果：消耗MP6，持續260秒，替代率50%。" },
                        { effect: "消耗MP: 12, 持續時間: 270秒, 替代率: 53%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級11效果：消耗MP12，持續270秒，替代率53%。" },
                        { effect: "消耗MP: 12, 持續時間: 280秒, 替代率: 56%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級12效果：消耗MP12，持續280秒，替代率56%。" },
                        { effect: "消耗MP: 12, 持續時間: 290秒, 替代率: 59%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級13效果：消耗MP12，持續290秒，替代率59%。" },
                        { effect: "消耗MP: 12, 持續時間: 300秒, 替代率: 62%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級14效果：消耗MP12，持續300秒，替代率62%。" },
                        { effect: "消耗MP: 12, 持續時間: 310秒, 替代率: 65%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級15效果：消耗MP12，持續310秒，替代率65%。" },
                        { effect: "消耗MP: 12, 持續時間: 320秒, 替代率: 68%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級16效果：消耗MP12，持續320秒，替代率68%。" },
                        { effect: "消耗MP: 12, 持續時間: 330秒, 替代率: 71%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級17效果：消耗MP12，持續330秒，替代率71%。" },
                        { effect: "消耗MP: 12, 持續時間: 340秒, 替代率: 74%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級18效果：消耗MP12，持續340秒，替代率74%。" },
                        { effect: "消耗MP: 12, 持續時間: 350秒, 替代率: 77%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級19效果：消耗MP12，持續350秒，替代率77%。" },
                        { effect: "消耗MP: 12, 持續時間: 360秒，替代率: 80%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級20效果：消耗MP12，持續360秒，替代率80%。" }
                    ]
                },
                {
                    id: "magicShield", name: "魔力之盾", maxLevel: 20, requiredLevel: 10, preRequisite: { "magicGuard": 3 }, description: "一定時間內把魔力集中在盔甲上，提高物理防禦力。", imageUrl: "images/magicShield.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 8, 持續時間: 20秒, 防禦力: 2", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級1效果：消耗MP8，持續20秒，防禦力2。" },
                        { effect: "消耗MP: 8, 持續時間: 40秒, 防禦力: 4", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級2效果：消耗MP8，持續40秒，防禦力4。" },
                        { effect: "消耗MP: 8, 持續時間: 60秒, 防禦力: 6", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級3效果：消耗MP8，持續60秒，防禦力6。" },
                        { effect: "消耗MP: 8, 持續時間: 80秒, 防禦力: 8", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級4效果：消耗MP8，持續80秒，防禦力8。" },
                        { effect: "消耗MP: 8, 持續時間: 100秒, 防禦力: 10", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級5效果：消耗MP8，持續100秒，防禦力10。" },
                        { effect: "消耗MP: 8, 持續時間: 120秒, 防禦力: 12", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級6效果：消耗MP8，持續120秒，防禦力12。" },
                        { effect: "消耗MP: 8, 持續時間: 140秒, 防禦力: 14", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級7效果：消耗MP8，持續140秒，防禦力14。" },
                        { effect: "消耗MP: 8, 持續時間: 160秒, 防禦力: 16", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級8效果：消耗MP8，持續160秒，防禦力16。" },
                        { effect: "消耗MP: 8, 持續時間: 180秒, 防禦力: 18", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級9效果：消耗MP8，持續180秒，防禦力18。" },
                        { effect: "消耗MP: 8, 持續時間: 200秒, 防禦力: 20", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級10效果：消耗MP8，持續200秒，防禦力20。" },
                        { effect: "消耗MP: 13, 持續時間: 196秒, 防禦力: 22", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級11效果：消耗MP13，持續196秒，防禦力22。" },
                        { effect: "消耗MP: 13, 持續時間: 210秒, 防禦力: 24", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級12效果：消耗MP13，持續210秒，防禦力24。" },
                        { effect: "消耗MP: 13, 持續時間: 224秒, 防禦力: 26", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級13效果：消耗MP13，持續224秒，防禦力26。" },
                        { effect: "消耗MP: 13, 持續時間: 238秒, 防禦力: 28", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級14效果：消耗MP13，持續238秒，防禦力28。" },
                        { effect: "消耗MP: 13, 持續時間: 252秒, 防禦力: 30", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級15效果：消耗MP13，持續252秒，防禦力30。" },
                        { effect: "消耗MP: 16, 持續時間: 260秒, 防禦力: 32", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級16效果：消耗MP16，持續260秒，防禦力32。" },
                        { effect: "消耗MP: 16, 持續時間: 270秒, 防禦力: 34", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級17效果：消耗MP16，持續270秒，防禦力34。" },
                        { effect: "消耗MP: 16, 持續時間: 280秒, 防禦力: 36", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級18效果：消耗MP16，持續280秒，防禦力36。" },
                        { effect: "消耗MP: 16, 持續時間: 290秒, 防禦力: 38", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級19效果：消耗MP16，持續290秒，防禦力38。" },
                        { effect: "消耗MP: 16, 持續時間: 300秒，防禦力: 40", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級20效果：消耗MP16，持續300秒，防禦力40。" }
                    ]
                },
                {
                    id: "magicArrow", name: "魔靈彈", maxLevel: 20, requiredLevel: 10, preRequisite: {}, description: "消耗MP來攻擊單一個怪物。", imageUrl: "images/magicArrow.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 6, 攻擊力: 20, 熟練度: 15%", fullDescription: "消耗MP來攻擊單一個怪物。等級1效果：消耗MP6，攻擊力20，熟練度15%。" },
                        { effect: "消耗MP: 6, 攻擊力: 21, 熟練度: 15%", fullDescription: "消耗MP來攻擊單一個怪物。等級2效果：消耗MP6，攻擊力21，熟練度15%。" },
                        { effect: "消耗MP: 6, 攻擊力: 22, 熟練度: 20%", fullDescription: "消耗MP來攻擊單一個怪物。等級3效果：消耗MP6，攻擊力22，熟練度20%。" },
                        { effect: "消耗MP: 6, 攻擊力: 23, 熟練度: 20%", fullDescription: "消耗MP來攻擊單一個怪物。等級4效果：消耗MP6，攻擊力23，熟練度20%。" },
                        { effect: "消耗MP: 6, 攻擊力: 24, 熟練度: 25%", fullDescription: "消耗MP來攻擊單一個怪物。等級5效果：消耗MP6，攻擊力24，熟練度25%。" },
                        { effect: "消耗MP: 6, 攻擊力: 25, 熟練度: 25%", fullDescription: "消耗MP來攻擊單一個怪物。等級6效果：消耗MP6，攻擊力25，熟練度25%。" },
                        { effect: "消耗MP: 6, 攻擊力: 26, 熟練度: 30%", fullDescription: "消耗MP來攻擊單一個怪物。等級7效果：消耗MP6，攻擊力26，熟練度30%。" },
                        { effect: "消耗MP: 6, 攻擊力: 27, 熟練度: 30%", fullDescription: "消耗MP來攻擊單一個怪物。等級8效果：消耗MP6，攻擊力27，熟練度30%。" },
                        { effect: "消耗MP: 6, 攻擊力: 28, 熟練度: 35%", fullDescription: "消耗MP來攻擊單一個怪物。等級9效果：消耗MP6，攻擊力28，熟練度35%。" },
                        { effect: "消耗MP: 6, 攻擊力: 29, 熟練度: 35%", fullDescription: "消耗MP來攻擊單一個怪物。等級10效果：消耗MP6，攻擊力29，熟練度35%。" },
                        { effect: "消耗MP: 14, 攻擊力: 30, 熟練度: 40%", fullDescription: "消耗MP來攻擊單一個怪物。等級11效果：消耗MP14，攻擊力30，熟練度40%。" },
                        { effect: "消耗MP: 14, 攻擊力: 31, 熟練度: 40%", fullDescription: "消耗MP來攻擊單一個怪物。等級12效果：消耗MP14，攻擊力31，熟練度40%。" },
                        { effect: "消耗MP: 14, 攻擊力: 32, 熟練度: 45%", fullDescription: "消耗MP來攻擊單一個怪物。等級13效果：消耗MP14，攻擊力32，熟練度45%。" },
                        { effect: "消耗MP: 14, 攻擊力: 33, 熟練度: 45%", fullDescription: "消耗MP來攻擊單一個怪物。等級14效果：消耗MP14，攻擊力33，熟練度45%。" },
                        { effect: "消耗MP: 14, 攻擊力: 34, 熟練度: 50%", fullDescription: "消耗MP來攻擊單一個怪物。等級15效果：消耗MP14，攻擊力34，熟練度50%。" },
                        { effect: "消耗MP: 14, 攻擊力: 35, 熟練度: 50%", fullDescription: "消耗MP來攻擊單一個怪物。等級16效果：消耗MP14，攻擊力35，熟練度50%。" },
                        { effect: "消耗MP: 14, 攻擊力: 36, 熟練度: 55%", fullDescription: "消耗MP來攻擊單一個怪物。等級17效果：消耗MP14，攻擊力36，熟練度55%。" },
                        { effect: "消耗MP: 14, 攻擊力: 37, 熟練度: 55%", fullDescription: "消耗MP來攻擊單一個怪物。等級18效果：消耗MP14，攻擊力37，熟練度55%。" },
                        { effect: "消耗MP: 14, 攻擊力: 38, 熟練度: 60%", fullDescription: "消耗MP來攻擊單一個怪物。等級19效果：消耗MP14，攻擊力38，熟練度60%。" },
                        { effect: "消耗MP: 14, 攻擊力: 39, 熟練度: 60%", fullDescription: "消耗MP來攻擊單一個怪物。等級20效果：消耗MP14，攻擊力39，熟練度60%。" }
                    ]
                },
                {
                    id: "magicClaw", name: "魔力爪", maxLevel: 20, requiredLevel: 10, preRequisite: { "magicArrow": 1 }, description: "消耗MP來對同一個怪物發動兩次的連續攻擊。", imageUrl: "images/magicClaw.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 10, 攻擊力: 11, 熟練度: 15%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級1效果：消耗MP10，攻擊力11，熟練度15%。" },
                        { effect: "消耗MP: 10, 攻擊力: 12, 熟練度: 15%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級2效果：消耗MP10，攻擊力12，熟練度15%。" },
                        { effect: "消耗MP: 10, 攻擊力: 13, 熟練度: 20%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級3效果：消耗MP10，攻擊力13，熟練度20%。" },
                        { effect: "消耗MP: 10, 攻擊力: 14, 熟練度: 20%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級4效果：消耗MP10，攻擊力14，熟練度20%。" },
                        { effect: "消耗MP: 10, 攻擊力: 15, 熟練度: 25%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級5效果：消耗MP10，攻擊力15，熟練度25%。" },
                        { effect: "消耗MP: 10, 攻擊力: 16, 熟練度: 25%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級6效果：消耗MP10，攻擊力16，熟練度25%。" },
                        { effect: "消耗MP: 10, 攻擊力: 17, 熟練度: 30%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級7效果：消耗MP10，攻擊力17，熟練度30%。" },
                        { effect: "消耗MP: 10, 攻擊力: 18, 熟練度: 30%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級8效果：消耗MP10，攻擊力18，熟練度30%。" },
                        { effect: "消耗MP: 10, 攻擊力: 19, 熟練度: 35%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級9效果：消耗MP10，攻擊力19，熟練度35%。" },
                        { effect: "消耗MP: 10, 攻擊力: 20, 熟練度: 35%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級10效果：消耗MP10，攻擊力20，熟練度35%。" },
                        { effect: "消耗MP: 20, 攻擊力: 22, 熟練度: 40%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級11效果：消耗MP20，攻擊力22，熟練度40%。" },
                        { effect: "消耗MP: 20, 攻擊力: 24, 熟練度: 40%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級12效果：消耗MP20，攻擊力24，熟練度40%。" },
                        { effect: "消耗MP: 20, 攻擊力: 26, 熟練度: 45%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級13效果：消耗MP20，攻擊力26，熟練度45%。" },
                        { effect: "消耗MP: 20, 攻擊力: 28, 熟練度: 45%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級14效果：消耗MP20，攻擊力28，熟練度45%。" },
                        { effect: "消耗MP: 20, 攻擊力: 30, 熟練度: 50%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級15效果：消耗MP20，攻擊力30，熟練度50%。" },
                        { effect: "消耗MP: 20, 攻擊力: 32, 熟練度: 50%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級16效果：消耗MP20，攻擊力32，熟練度50%。" },
                        { effect: "消耗MP: 20, 攻擊力: 34, 熟練度: 55%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級17效果：消耗MP20，攻擊力34，熟練度55%。" },
                        { effect: "消耗MP: 20, 攻擊力: 36, 熟練度: 55%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級18效果：消耗MP20，攻擊力36，熟練度55%。" },
                        { effect: "消耗MP: 20, 攻擊力: 38, 熟練度: 60%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級19效果：消耗MP20，攻擊力38，熟練度60%。" },
                        { effect: "消耗MP: 20, 攻擊力: 40, 熟練度: 60%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級20效果：消耗MP20，攻擊力40，熟練度60%。" }
                    ]
                }
            ],
            "2轉 (僧侶)": [
                {
                    id: "magicDrain",
                    name: "魔力吸收",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "每次向敵人施展魔法攻擊時，依比例率吸收對方的MP直到敵人的MP為0。",
                    imageUrl: "images/magicDrain.png",
                    levels: Array(21).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `發動率: ${10 + i}%, 吸收率: ${20 + i}%`,
                        fullDescription: `每次向敵人施展魔法攻擊時，依比例率吸收對方的MP直到敵人的MP為0。等級${i}效果：發動率${10 + i}%，吸收率${20 + i}%。`
                    })
                },
                {
                    "id": "teleport",
                    "name": "瞬間移動",
                    "maxLevel": 20,
                    "requiredLevel": 30,
                    "preRequisite": {},
                    "description": "利用魔法在一定的範圍內瞬間移動到指定位置，但若指定位置必須要有立足點。",
                    "imageUrl": "images/teleport.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, moveDistance;
                        if (i === 0) return null;

                        // 消耗MP 的規律 (精確數值)
                        const mpCosts = [null, 60, 57, 54, 51, 48, 45, 42, 39, 36, 33, 31, 29, 27, 25, 23, 21, 19, 17, 15, 13];
                        mpCost = mpCosts[i];

                        // 移動距離 的規律
                        if (i >= 1 && i <= 10) {
                            moveDistance = 130;
                        } else {
                            moveDistance = 130 + (i - 10) * 2;
                        }

                        return {
                            effect: `消耗MP: ${mpCost}, 移動距離: ${moveDistance}`,
                            fullDescription: `利用魔法在一定的範圍內瞬間移動到指定位置，但若指定位置必須要有立足點。等級${i}效果：消耗MP${mpCost}，移動距離${moveDistance}。`
                        };
                    })
                },
                {
                    id: "holyLight",
                    name: "神聖之光",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: { "massHeal": 5 },
                    description: "在一定時間內，降低自己所受到物理攻擊傷害，但不包含魔法攻擊。",
                    imageUrl: "images/holyLight.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        const mp = i <= 10 ? 15 : 30;
                        return i === 0 ? null : {
                            effect: `消耗MP: ${mp}, 持續時間: ${i * 15}秒, 減輕傷害: ${10 + i}%`,
                            fullDescription: `在一定時間內，降低自己所受到物理攻擊傷害，但不包含魔法攻擊。等級${i}效果：消耗MP${mp}，持續${i * 15}秒，減輕傷害${10 + i}%。`
                        };
                    })
                },
                {
                    id: "angelBlessing",
                    name: "天使祝福",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: { "holyLight": 5 },
                    description: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。",
                    imageUrl: "images/angelBlessing.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 12, 持續時間: 10秒, 各能力值: 1", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級1效果：消耗MP12，持續10秒，各能力值1。" },
                        { effect: "消耗MP: 12, 持續時間: 20秒, 各能力值: 2", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級2效果：消耗MP12，持續20秒，各能力值2。" },
                        { effect: "消耗MP: 12, 持續時間: 30秒, 各能力值: 3", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級3效果：消耗MP12，持續30秒，各能力值3。" },
                        { effect: "消耗MP: 12, 持續時間: 40秒, 各能力值: 4", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級4效果：消耗MP12，持續40秒，各能力值4。" },
                        { effect: "消耗MP: 12, 持續時間: 50秒, 各能力值: 5", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級5效果：消耗MP12，持續50秒，各能力值5。" },
                        { effect: "消耗MP: 12, 持續時間: 60秒, 各能力值: 6", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級6效果：消耗MP12，持續60秒，各能力值6。" },
                        { effect: "消耗MP: 12, 持續時間: 70秒, 各能力值: 7", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級7效果：消耗MP12，持續70秒，各能力值7。" },
                        { effect: "消耗MP: 12, 持續時間: 80秒, 各能力值: 8", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級8效果：消耗MP12，持續80秒，各能力值8。" },
                        { effect: "消耗MP: 12, 持續時間: 90秒, 各能力值: 9", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級9效果：消耗MP12，持續90秒，各能力值9。" },
                        { effect: "消耗MP: 12, 持續時間: 100秒, 各能力值: 10", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級10效果：消耗MP12，持續100秒，各能力值10。" },
                        { effect: "消耗MP: 24, 持續時間: 120秒, 各能力值: 11", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級11效果：消耗MP24，持續120秒，各能力值11。" },
                        { effect: "消耗MP: 24, 持續時間: 140秒, 各能力值: 12", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級12效果：消耗MP24，持續140秒，各能力值12。" },
                        { effect: "消耗MP: 24, 持續時間: 160秒, 各能力值: 13", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級13效果：消耗MP24，持續160秒，各能力值13。" },
                        { effect: "消耗MP: 24, 持續時間: 180秒, 各能力值: 14", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級14效果：消耗MP24，持續180秒，各能力值14。" },
                        { effect: "消耗MP: 24, 持續時間: 200秒, 各能力值: 15", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級15效果：消耗MP24，持續200秒，各能力值15。" },
                        { effect: "消耗MP: 24, 持續時間: 220秒, 各能力值: 16", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級16效果：消耗MP24，持續220秒，各能力值16。" },
                        { effect: "消耗MP: 24, 持續時間: 240秒, 各能力值: 17", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級17效果：消耗MP24，持續240秒，各能力值17。" },
                        { effect: "消耗MP: 24, 持續時間: 260秒, 各能力值: 18", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級18效果：消耗MP24，持續260秒，各能力值18。" },
                        { effect: "消耗MP: 24, 持續時間: 280秒, 各能力值: 19", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級19效果：消耗MP24，持續280秒，各能力值19。" },
                        { effect: "消耗MP: 24, 持續時間: 300秒，各能力值: 20", fullDescription: "在一定時間內，提高周圍隊員的物理防禦、魔法防禦、命中率與迴避率，但不能與其他技能或各種藥水一起使用。等級20效果：消耗MP24，持續300秒，各能力值20。" }
                    ]
                },
                {
                    id: "massHeal",
                    name: "群體治癒",
                    maxLevel: 30,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "恢復範圍內所有隊員的HP並對群體黑暗屬性怪物可造成損傷（最多6名敵人）。",
                    imageUrl: "images/massHeal.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        const mp = i <= 15 ? 12 : 24;
                        return i === 0 ? null : {
                            effect: `消耗MP: ${mp}, 回復量: ${i * 10}%`,
                            fullDescription: `恢復範圍內所有隊員的HP並對群體黑暗屬性怪物可造成損傷（最多6名敵人）。等級${i}效果：消耗MP${mp}，回復量${i * 10}%。`
                        };
                    })
                },
                {
                    id: "holyArrow",
                    name: "神聖之箭",
                    maxLevel: 30,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "召喚聖箭，向單一敵人發動攻擊，對不死系怪物或惡魔系怪物，會造成更大的損害。",
                    imageUrl: "images/holyArrow.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        const mp = i <= 15 ? 12 : 24;
                        // 攻擊力數據有跳變，需分段處理
                        let attack;
                        if (i === 1) attack = 13;
                        else if (i === 2) attack = 24;
                        else if (i === 3) attack = 26;
                        else if (i === 4) attack = 28;
                        else if (i === 5) attack = 30;
                        else if (i === 6) attack = 32;
                        else if (i === 7) attack = 34;
                        else if (i === 8) attack = 36;
                        else if (i === 9) attack = 38;
                        else if (i === 10) attack = 40;
                        else if (i === 11) attack = 42;
                        else if (i === 12) attack = 44;
                        else if (i === 13) attack = 46;
                        else if (i === 14) attack = 48;
                        else if (i === 15) attack = 50;
                        else if (i === 16) attack = 52;
                        else if (i === 17) attack = 54;
                        else if (i === 18) attack = 56;
                        else if (i === 19) attack = 58;
                        else if (i === 20) attack = 60;
                        else if (i === 21) attack = 62;
                        else if (i === 22) attack = 64;
                        else if (i === 23) attack = 66;
                        else if (i === 24) attack = 68;
                        else if (i === 25) attack = 70;
                        else if (i === 26) attack = 72;
                        else if (i === 27) attack = 74;
                        else if (i === 28) attack = 76;
                        else if (i === 29) attack = 78;
                        else if (i === 30) attack = 80;
                        else attack = 0; // Default for unexpected values

                        const mastery = 15 + Math.floor((i - 1) / 3) * 5;
                        return i === 0 ? null : {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}, 熟練度: ${mastery}%`,
                            fullDescription: `召喚聖箭，向單一敵人發動攻擊，對不死系怪物或惡魔系怪物，會造成更大的損害。等級${i}效果：消耗MP${mp}，攻擊力${attack}，熟練度${mastery}%。`
                        };
                    })
                }
            ],
            "3轉 (祭司)": [
                {
                    id: "summonHolyDragon",
                    name: "聖龍召喚",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "消耗召喚石在一定時間內，召喚出聖龍守護在主人身邊，並對敵人發動攻擊。技能等級越高時，可以召喚攻擊力更強的聖龍。",
                    imageUrl: "images/summonHolyDragon.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, duration, attack;
                        if (i === 0) return null;
                        const mpCosts = [null, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];
                        const attacks = [null, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150];
                        mp = mpCosts[i];
                        duration = durations[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗MP: ${mp}, 持續時間: ${duration}秒, 攻擊力: ${attack}`,
                            fullDescription: `消耗召喚石在一定時間內，召喚出聖龍守護在主人身邊，並對敵人發動攻擊。等級${i}效果：消耗MP${mp}，持續${duration}秒，攻擊力${attack}。`
                        };
                    })
                },
                {
                    id: "magicResistance",
                    name: "魔法抵抗",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "提高對所有性魔法攻擊的抗性。",
                    imageUrl: "images/magicResistance.png",
                    levels: Array(21).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `抗性增加: ${10 + i * 2}%`,
                        fullDescription: `提高對所有性魔法攻擊的抗性。等級${i}效果：抗性增加${10 + i * 2}%。`
                    })
                },
                {
                    id: "dispel",
                    name: "淨化",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "一定範圍內使怪物的魔法效果無效，同時解除自己及周圍隊友的異常狀態。",
                    imageUrl: "images/dispel.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        const mp = i <= 10 ? 15 : 20;
                        return i === 0 ? null : {
                            effect: `消耗MP: ${mp}, 成功率: ${30 + i * 4}%, 施法範圍: ${100 + i * 10}%`,
                            fullDescription: `一定範圍內使怪物的魔法效果無效，同時解除自己及周圍隊友的異常狀態。等級${i}效果：消耗MP${mp}，成功率${30 + i * 4}%，施法範圍${100 + i * 10}%。`
                        };
                    })
                },
                {
                    "id": "monsterTransformation",
                    "name": "喚化術",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "對多名敵方施加蝸牛詛咒，降低其魔法攻擊力及移動速度，BOSS無效。最多可使6隻怪物受到詛咒。",
                    "imageUrl": "images/monsterTransformation.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, duration, moveSpeedReduction, magicAttackReduction;
                        if (i === 0) return null;

                        // 消耗MP 的精確數值
                        const mpCosts = [null, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
                        mpCost = mpCosts[i];

                        // 持續時間 的精確數值
                        const durations = [null, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20];
                        duration = durations[i];

                        // 移動速度降低 的精確數值
                        const moveSpeedReductions = [null, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
                        moveSpeedReduction = moveSpeedReductions[i];

                        // 魔法攻擊力降低 的精確數值
                        const magicAttackReductions = [null, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25];
                        magicAttackReduction = magicAttackReductions[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 持續時間: ${duration}秒, 移動速度降低: -${moveSpeedReduction}, 魔法攻擊力降低: -${magicAttackReduction}`,
                            fullDescription: `對多名敵方施加蝸牛詛咒，降低其魔法攻擊力及移動速度，BOSS無效。等級${i}效果：消耗MP${mpCost}，持續時間${duration}秒，移動速度降低-${moveSpeedReduction}，魔法攻擊力降低-${magicAttackReduction}。`
                        };
                    })
                },
                {
                    id: "mysticDoor",
                    name: "時空門",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: { "dispel": 3 },
                    description: "消耗魔法石創造出通往最近村莊的時空門，在時空門消失前，自已以及隊友可進入時空門回到村莊。",
                    imageUrl: "images/mysticDoor.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 80, 77, 74, 71, 68, 65, 62, 59, 56, 53, 51, 49, 47, 45, 43, 41, 39, 37, 35, 33];
                        const durations = [null, 30, 40, 50, 60, 70, 80, 90, 100, 110, 126, 126, 132, 138, 144, 150, 156, 162, 168, 174, 180];
                        mp = mpCosts[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 持續時間: ${duration}秒`,
                            fullDescription: `消耗魔法石創造出通往最近村莊的時空門，在時空門消失前，自已以及隊友可進入時空門回到村莊。等級${i}效果：消耗MP${mp}，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "holySymbol",
                    name: "神聖祈禱",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: { "dispel": 3 },
                    description: "在一定的時間內，組隊獵殺怪物時，可獲得更多的經驗值。只有在兩人以上的包含施放者組隊狀態下，才能發揮100%效果。單人只生效50％效果",
                    imageUrl: "images/holySymbol.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, duration, expBonus;
                        if (i === 0) return null;
                        const mpCosts = [null, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];
                        const expBonuses = [null, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150];
                        mp = mpCosts[i];
                        duration = durations[i];
                        expBonus = expBonuses[i];
                        return {
                            effect: `消耗MP: ${mp}, 持續時間: ${duration}秒, 經驗值: ${expBonus}%`,
                            fullDescription: `在一定的時間內，組隊獵殺怪物時，可獲得更多的經驗值。等級${i}效果：消耗MP${mp}，持續${duration}秒，經驗值${expBonus}%。`
                        };
                    })
                },
                {
                    id: "shiningRay",
                    name: "聖光",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "利用神聖的光芒攻擊周圍的敵人。對不死系與魔族怪物，可造成更大的損害。",
                    imageUrl: "images/shiningRay.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, attack, mastery;
                        if (i === 0) return null;
                        const mpCosts = [null, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
                        const attacks = [null, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118];
                        const masteries = [null, 15, 15, 15, 20, 20, 20, 25, 25, 25, 30, 30, 30, 35, 35, 35, 40, 40, 40, 45, 45, 45, 50, 50, 50, 55, 55, 55, 60, 60, 60];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        mastery = masteries[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}, 熟練度: ${mastery}%`,
                            fullDescription: `利用神聖的光芒攻擊周圍的敵人。等級${i}效果：消耗MP${mp}，攻擊力${attack}，熟練度${mastery}%。`
                        };
                    })
                }
            ],
            "4轉 (主教)": [
                {
                    id: "mapleWarrior",
                    name: "楓葉祝福",
                    maxLevel: 30,
                    requiredLevel: 120, // 楓葉祝福通常無等級限制，可根據需求自行修改
                    preRequisite: {},
                    description: "全職業的共通技能，一定時間內全能力(力量、敏捷、智力、幸運)增加固定%數。",
                    imageUrl: "images/mapleWarrior.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 10, 持續時間: 30秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級1效果：消耗MP 10，持續時間 30秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 60秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級2效果：消耗MP 10，持續時間 60秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 90秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級3效果：消耗MP 10，持續時間 90秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 120秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級4效果：消耗MP 10，持續時間 120秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 150秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級5效果：消耗MP 10，持續時間 150秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 180秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級6效果：消耗MP 20，持續時間 180秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 210秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級7效果：消耗MP 20，持續時間 210秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 240秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級8效果：消耗MP 20，持續時間 240秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 270秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級9效果：消耗MP 20，持續時間 270秒，全能力增加 5%。" },
                        { effect: "消耗MP: 20, 持續時間: 300秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級10效果：消耗MP 20，持續時間 300秒，全能力增加 5%。" },
                        { effect: "消耗MP: 30, 持續時間: 330秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級11效果：消耗MP 30，持續時間 330秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 360秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級12效果：消耗MP 30，持續時間 360秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 390秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級13效果：消耗MP 30，持續時間 390秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 420秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級14效果：消耗MP 30，持續時間 420秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 450秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級15效果：消耗MP 30，持續時間 450秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 480秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級16效果：消耗MP 40，持續時間 480秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 510秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級17效果：消耗MP 40，持續時間 510秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 540秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級18效果：消耗MP 40，持續時間 540秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 570秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級19效果：消耗MP 40，持續時間 570秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 600秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級20效果：消耗MP 40，持續時間 600秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 630秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級21效果：消耗MP 40，持續時間 630秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 660秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級22效果：消耗MP 40，持續時間 660秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 690秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級23效果：消耗MP 40，持續時間 690秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 720秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級24效果：消耗MP 40，持續時間 720秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 750秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級25效果：消耗MP 40，持續時間 750秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 780秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級26效果：消耗MP 40，持續時間 780秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 810秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級27效果：消耗MP 40，持續時間 810秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 840秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級28效果：消耗MP 40，持續時間 840秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 870秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級29效果：消耗MP 40，持續時間 870秒，全能力增加 15%。" },
                        { effect: "消耗MP: 40, 持續時間: 900秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級30效果：消耗MP 40，持續時間 900秒，全能力增加 15%。" }
                    ]
                },
                {
                    id: "heroesWill",
                    name: "楓葉淨化",
                    maxLevel: 1,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。",
                    imageUrl: "images/heroesWill.png",
                    levels: [
                        null,
                        {
                            effect: "消耗MP: 30, 冷卻時間: 600秒",
                            fullDescription: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。等級1效果：消耗MP 30，冷卻時間 600秒。"
                        }
                    ]
                },
                {
                    id: "genesis",
                    name: "核爆術",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "集合空氣中的微塵粒子，集氣後放射出粒子塵造成敵人傷害，最多攻擊6個怪物。",
                    imageUrl: "images/genesis.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const mp = i <= 10 ? 25 : i <= 20 ? 40 : 55;
                        const power = 150 + (i * 10);
                        const mastery = 30 + Math.ceil(i / 3) * 5;
                        const effect = `消耗MP: ${mp}, 最大威力: ${power}%, 熟練度: ${mastery}%`;
                        return {
                            effect: effect,
                            fullDescription: `集合空氣中的微塵粒子，集氣後放射出粒子塵造成敵人傷害，最多攻擊6個怪物。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "infinity",
                    name: "魔力無限",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "一定時間內，把周圍的元素凝聚到自已身上，讓MP不會減少。技能間隔時間：7分鐘。",
                    imageUrl: "images/infinity.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const duration = 10 + i;
                        const effect = `持續時間: ${duration}秒`;
                        return {
                            effect: effect,
                            fullDescription: `一定時間內，把周圍的元素凝聚到自已身上，讓MP不會減少。等級${i}效果：持續時間${duration}秒。技能間隔時間：7分鐘。`
                        };
                    })
                },
                {
                    id: "magicReflect",
                    name: "魔法反射",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "把敵人所施放的攻擊魔法反彈回去一部份，但不超過敵人HP總量的 20%。",
                    imageUrl: "images/magicReflect.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 數值規律處理
                        // MP: 1-20級為 25+i, 21級(含)以後固定為 45
                        const mp = i <= 20 ? (25 + i) : 45;
                        const time = i * 10;
                        const accuracy = 30 + i;
                        const reflectPower = 50 + (i * 5);

                        const effect = `消耗MP: ${mp}, 持續時間: ${time}秒, 準確率: ${accuracy}%, 反彈威力: ${reflectPower}%`;

                        return {
                            effect: effect,
                            fullDescription: `把敵人所施放的攻擊魔法反彈回去一部份，但不超過敵人HP總量的 20%。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "holyShield",
                    name: "聖盾護鎧",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "在一定時間內，幫全隊的隊員施放，可防止隊員陷入異常狀態。(下次施放間隔時間2分鐘)",
                    imageUrl: "images/holyShield.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 數值規律處理
                        // MP規律：
                        // 1-10級: 10 + (i * 2)
                        // 11-20級: 0 + (i * 2)  [即 11級=22, 20級=40]
                        // 21-30級: 10 + i       [即 21級=31, 30級=40]
                        let mp;
                        if (i <= 10) {
                            mp = 10 + (i * 2);
                        } else if (i <= 20) {
                            mp = i * 2;
                        } else {
                            mp = 10 + i;
                        }

                        const duration = 10 + i;
                        const effect = `消耗MP: ${mp}, 持續時間: ${duration}秒`;

                        return {
                            effect: effect,
                            fullDescription: `在一定時間內，幫全隊的隊員施放，可防止隊員陷入異常狀態。(下次施放間隔時間2分鐘)。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "summonDragon",
                    name: "召喚神龍",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: { "summonHolyDragon": 15 },
                    description: "召喚一隻強力的赤聖龍幫助玩家，最多攻擊3個敵人。",
                    imageUrl: "images/summonDragon.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 從 13 開始，每級增加 3 (13, 16, 19...)
                        const mp = 10 + (i * 3);

                        // 2. 持續時間: 每級增加 10 秒
                        const duration = i * 10;

                        // 3. 攻擊力規律: 
                        // 1-10級: 110 + (每級+3)，但前2級固定113
                        // 11-20級: 100 + (每級+4)
                        // 21-30級: 80 + (每級+5)
                        let attack;
                        if (i <= 10) {
                            attack = (i === 1 || i === 2) ? 113 : 110 + (i * 3);
                        } else if (i <= 20) {
                            attack = 100 + (i * 4);
                        } else {
                            attack = 80 + (i * 5);
                        }

                        // 4. 熟練度: 每 3 級增加 5%
                        const mastery = 30 + Math.ceil(i / 3) * 5;

                        const effect = `消耗MP: ${mp}, 持續時間: ${duration}秒, 攻擊力: ${attack}, 熟練度: ${mastery}%`;

                        return {
                            effect: effect,
                            fullDescription: `召喚一隻強力的赤聖龍幫助玩家，最多攻擊3個敵人。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "resurrection",
                    name: "復甦之光",
                    maxLevel: 10,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "讓一組隊隊員立即復活，並為所有隊員提供了兩秒鐘的神聖護盾，神聖護盾可防禦致命傷害。",
                    imageUrl: "images/resurrection.png",
                    levels: Array(11).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 數值規律處理
                        // 消耗MP: 固定 85
                        const mp = 85;
                        // 間隔時間: 60 - (i * 3) 分鐘
                        const cooldown = 60 - (i * 3);

                        const effect = `消耗MP: ${mp}, 間隔時間: ${cooldown}分`;

                        return {
                            effect: effect,
                            fullDescription: `讓一組隊隊員立即復活，並為所有隊員提供了兩秒鐘的神聖護盾，神聖護盾可防禦致命傷害。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "angelRay",
                    name: "天使之箭",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "使用高級神聖之箭攻擊單體怪物，附加聖屬性攻擊。",
                    imageUrl: "images/angelRay.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP規律
                        // 1-10級: 16
                        // 11-20級: 24
                        // 21-25級: 30
                        // 26-30級: 每級減 1 (29, 28, 27, 26, 25)
                        let mp;
                        if (i <= 10) mp = 16;
                        else if (i <= 20) mp = 24;
                        else if (i <= 25) mp = 30;
                        else mp = 30 - (i - 25);

                        // 2. 攻擊力規律
                        // 1-10級: 120 + (i * 3)
                        // 11-20級: 110 + (i * 4)
                        // 21-30級: 90 + (i * 5)
                        let attack;
                        if (i <= 10) attack = 120 + (i * 3);
                        else if (i <= 20) attack = 110 + (i * 4);
                        else attack = 90 + (i * 5);

                        // 3. 熟練度規律: 每 3 級增加 5% (起始 15%)
                        const mastery = 10 + Math.ceil(i / 3) * 5;

                        const effect = `消耗MP: ${mp}, 攻擊力: ${attack}%, 熟練度: ${mastery}%`;

                        return {
                            effect: effect,
                            fullDescription: `使用高級神聖之箭攻擊單體怪物，附加聖屬性攻擊。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "heavensDoor",
                    name: "天怒",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "從天空照下神聖光芒，給予15名敵人強大的聖屬性傷害。",
                    imageUrl: "images/heavensDoor.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mpCost, attack;
                        if (i === 0) return null;
                        const mpCosts = [null, 3200, 3400, 3600, 3800, 4000, 4200, 4400, 4600, 4800, 5000, 5200, 5400, 5600, 5800, 6000, 6200, 6400, 6600, 6800, 7000, 6950, 6900, 6850, 6800, 6750, 6700, 6650, 6600, 6550, 6500]; // 精確數值
                        const attacks = [null, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600, 610, 620, 630, 670]; // 精確數值
                        mpCost = mpCosts[i];
                        attack = attacks[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}`,
                            fullDescription: `從天空照下神聖光芒，給予15名敵人強大的聖屬性傷害。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}。`
                        };
                    })
                }
            ],
            "超技能": [],
            "5轉技能": [],
            "共通技能": []
        }
    },
    "火毒大魔導 (ArchMageF/P)": {
        emblemUrl: 'emblems/archmage_fp.png',
        startingLevelForSp: 8,
        jobAdvancementSpBonuses: [8, 30, 70, 120], // 轉職額外SP的等級點
        jobStagesOrder: ["0轉 (新手)", "1轉 (魔法師)", "2轉 (火毒巫師)", "3轉 (火毒魔導士)", "4轉 (火毒大魔導)", "超技能", "5轉技能", "共通技能"], // 定義轉職階段的順序
        spRequiredFor2ndJob: 67, // 法師2轉點數需求
        spRequiredFor3rdJob: 188, // 法師3轉點數需求
        spRequiredFor4thJob: 339, // 4轉通用點數需求
        skills: {
            "0轉 (新手)": [],
            "1轉 (魔法師)": [
                {
                    id: "magicPurify",
                    name: "魔力淨化",
                    maxLevel: 16,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "每10秒鐘可恢復更多量的MP。",
                    imageUrl: "images/magicPurify.png",
                    levels: Array(17).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `${(0.1 * i).toFixed(1)}x角色等級+3 MP回復量`,
                        fullDescription: `每10秒鐘可恢復更多量的MP。回復量公式：${(0.1 * i).toFixed(1)}x角色等級+3`
                    })
                },
                {
                    id: "magicExtension",
                    name: "魔力擴展",
                    maxLevel: 10,
                    requiredLevel: 10,
                    preRequisite: { "magicPurify": 5 },
                    description: "當等級提升時，增加MP的最大追加量。",
                    imageUrl: "images/magicExtension.png",
                    levels: Array(11).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `升級追加量: ${2 * i}`,
                        fullDescription: `當等級提升時，增加MP的最大追加量。等級${i}效果：升級追加量${2 * i}。`
                    })
                },
                {
                    id: "magicGuard",
                    name: "魔心防禦",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。但若MP達到0時，則直接消耗HP。",
                    imageUrl: "images/magicGuard.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 6, 持續時間: 170秒, 替代率: 23%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級1效果：消耗MP6，持續170秒，替代率23%。" },
                        { effect: "消耗MP: 6, 持續時間: 180秒, 替代率: 26%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級2效果：消耗MP6，持續180秒，替代率26%。" },
                        { effect: "消耗MP: 6, 持續時間: 190秒, 替代率: 29%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級3效果：消耗MP6，持續190秒，替代率29%。" },
                        { effect: "消耗MP: 6, 持續時間: 200秒, 替代率: 32%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級4效果：消耗MP6，持續200秒，替代率32%。" },
                        { effect: "消耗MP: 6, 持續時間: 210秒, 替代率: 35%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級5效果：消耗MP6，持續210秒，替代率35%。" },
                        { effect: "消耗MP: 6, 持續時間: 220秒, 替代率: 38%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級6效果：消耗MP6，持續220秒，替代率38%。" },
                        { effect: "消耗MP: 6, 持續時間: 230秒, 替代率: 41%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級7效果：消耗MP6，持續230秒，替代率41%。" },
                        { effect: "消耗MP: 6, 持續時間: 240秒, 替代率: 44%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級8效果：消耗MP6，持續240秒，替代率44%。" },
                        { effect: "消耗MP: 6, 持續時間: 250秒, 替代率: 47%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級9效果：消耗MP6，持續250秒，替代率47%。" },
                        { effect: "消耗MP: 6, 持續時間: 260秒, 替代率: 50%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級10效果：消耗MP6，持續260秒，替代率50%。" },
                        { effect: "消耗MP: 12, 持續時間: 270秒, 替代率: 53%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級11效果：消耗MP12，持續270秒，替代率53%。" },
                        { effect: "消耗MP: 12, 持續時間: 280秒, 替代率: 56%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級12效果：消耗MP12，持續280秒，替代率56%。" },
                        { effect: "消耗MP: 12, 持續時間: 290秒, 替代率: 59%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級13效果：消耗MP12，持續290秒，替代率59%。" },
                        { effect: "消耗MP: 12, 持續時間: 300秒, 替代率: 62%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級14效果：消耗MP12，持續300秒，替代率62%。" },
                        { effect: "消耗MP: 12, 持續時間: 310秒, 替代率: 65%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級15效果：消耗MP12，持續310秒，替代率65%。" },
                        { effect: "消耗MP: 12, 持續時間: 320秒, 替代率: 68%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級16效果：消耗MP12，持續320秒，替代率68%。" },
                        { effect: "消耗MP: 12, 持續時間: 330秒, 替代率: 71%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級17效果：消耗MP12，持續330秒，替代率71%。" },
                        { effect: "消耗MP: 12, 持續時間: 340秒, 替代率: 74%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級18效果：消耗MP12，持續340秒，替代率74%。" },
                        { effect: "消耗MP: 12, 持續時間: 350秒, 替代率: 77%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級19效果：消耗MP12，持續350秒，替代率77%。" },
                        { effect: "消耗MP: 12, 持續時間: 360秒，替代率: 80%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級20效果：消耗MP12，持續360秒，替代率80%。" }]
                },
                {
                    id: "magicShield", name: "魔力之盾", maxLevel: 20, requiredLevel: 10, preRequisite: { "magicGuard": 3 }, description: "一定時間內把魔力集中在盔甲上，提高物理防禦力。", imageUrl: "images/magicShield.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 8, 持續時間: 20秒, 防禦力: 2", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級1效果：消耗MP8，持續20秒，防禦力2。" },
                        { effect: "消耗MP: 8, 持續時間: 40秒, 防禦力: 4", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級2效果：消耗MP8，持續40秒，防禦力4。" },
                        { effect: "消耗MP: 8, 持續時間: 60秒, 防禦力: 6", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級3效果：消耗MP8，持續60秒，防禦力6。" },
                        { effect: "消耗MP: 8, 持續時間: 80秒, 防禦力: 8", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級4效果：消耗MP8，持續80秒，防禦力8。" },
                        { effect: "消耗MP: 8, 持續時間: 100秒, 防禦力: 10", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級5效果：消耗MP8，持續100秒，防禦力10。" },
                        { effect: "消耗MP: 8, 持續時間: 120秒, 防禦力: 12", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級6效果：消耗MP8，持續120秒，防禦力12。" },
                        { effect: "消耗MP: 8, 持續時間: 140秒, 防禦力: 14", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級7效果：消耗MP8，持續140秒，防禦力14。" },
                        { effect: "消耗MP: 8, 持續時間: 160秒, 防禦力: 16", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級8效果：消耗MP8，持續160秒，防禦力16。" },
                        { effect: "消耗MP: 8, 持續時間: 180秒, 防禦力: 18", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級9效果：消耗MP8，持續180秒，防禦力18。" },
                        { effect: "消耗MP: 8, 持續時間: 200秒, 防禦力: 20", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級10效果：消耗MP8，持續200秒，防禦力20。" },
                        { effect: "消耗MP: 13, 持續時間: 196秒, 防禦力: 22", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級11效果：消耗MP13，持續196秒，防禦力22。" },
                        { effect: "消耗MP: 13, 持續時間: 210秒, 防禦力: 24", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級12效果：消耗MP13，持續210秒，防禦力24。" },
                        { effect: "消耗MP: 13, 持續時間: 224秒, 防禦力: 26", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級13效果：消耗MP13，持續224秒，防禦力26。" },
                        { effect: "消耗MP: 13, 持續時間: 238秒, 防禦力: 28", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級14效果：消耗MP13，持續238秒，防禦力28。" },
                        { effect: "消耗MP: 13, 持續時間: 252秒, 防禦力: 30", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級15效果：消耗MP13，持續252秒，防禦力30。" },
                        { effect: "消耗MP: 16, 持續時間: 260秒, 防禦力: 32", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級16效果：消耗MP16，持續260秒，防禦力32。" },
                        { effect: "消耗MP: 16, 持續時間: 270秒, 防禦力: 34", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級17效果：消耗MP16，持續270秒，防禦力34。" },
                        { effect: "消耗MP: 16, 持續時間: 280秒, 防禦力: 36", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級18效果：消耗MP16，持續280秒，防禦力36。" },
                        { effect: "消耗MP: 16, 持續時間: 290秒, 防禦力: 38", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級19效果：消耗MP16，持續290秒，防禦力38。" },
                        { effect: "消耗MP: 16, 持續時間: 300秒，防禦力: 40", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級20效果：消耗MP16，持續300秒，防禦力40。" }
                    ]
                },
                {
                    id: "magicArrow", name: "魔靈彈", maxLevel: 20, requiredLevel: 10, preRequisite: {}, description: "消耗MP來攻擊單一個怪物。", imageUrl: "images/magicArrow.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 6, 攻擊力: 20, 熟練度: 15%", fullDescription: "消耗MP來攻擊單一個怪物。等級1效果：消耗MP6，攻擊力20，熟練度15%。" },
                        { effect: "消耗MP: 6, 攻擊力: 21, 熟練度: 15%", fullDescription: "消耗MP來攻擊單一個怪物。等級2效果：消耗MP6，攻擊力21，熟練度15%。" },
                        { effect: "消耗MP: 6, 攻擊力: 22, 熟練度: 20%", fullDescription: "消耗MP來攻擊單一個怪物。等級3效果：消耗MP6，攻擊力22，熟練度20%。" },
                        { effect: "消耗MP: 6, 攻擊力: 23, 熟練度: 20%", fullDescription: "消耗MP來攻擊單一個怪物。等級4效果：消耗MP6，攻擊力23，熟練度20%。" },
                        { effect: "消耗MP: 6, 攻擊力: 24, 熟練度: 25%", fullDescription: "消耗MP來攻擊單一個怪物。等級5效果：消耗MP6，攻擊力24，熟練度25%。" },
                        { effect: "消耗MP: 6, 攻擊力: 25, 熟練度: 25%", fullDescription: "消耗MP來攻擊單一個怪物。等級6效果：消耗MP6，攻擊力25，熟練度25%。" },
                        { effect: "消耗MP: 6, 攻擊力: 26, 熟練度: 30%", fullDescription: "消耗MP來攻擊單一個怪物。等級7效果：消耗MP6，攻擊力26，熟練度30%。" },
                        { effect: "消耗MP: 6, 攻擊力: 27, 熟練度: 30%", fullDescription: "消耗MP來攻擊單一個怪物。等級8效果：消耗MP6，攻擊力27，熟練度30%。" },
                        { effect: "消耗MP: 6, 攻擊力: 28, 熟練度: 35%", fullDescription: "消耗MP來攻擊單一個怪物。等級9效果：消耗MP6，攻擊力28，熟練度35%。" },
                        { effect: "消耗MP: 6, 攻擊力: 29, 熟練度: 35%", fullDescription: "消耗MP來攻擊單一個怪物。等級10效果：消耗MP6，攻擊力29，熟練度35%。" },
                        { effect: "消耗MP: 14, 攻擊力: 30, 熟練度: 40%", fullDescription: "消耗MP來攻擊單一個怪物。等級11效果：消耗MP14，攻擊力30，熟練度40%。" },
                        { effect: "消耗MP: 14, 攻擊力: 31, 熟練度: 40%", fullDescription: "消耗MP來攻擊單一個怪物。等級12效果：消耗MP14，攻擊力31，熟練度40%。" },
                        { effect: "消耗MP: 14, 攻擊力: 32, 熟練度: 45%", fullDescription: "消耗MP來攻擊單一個怪物。等級13效果：消耗MP14，攻擊力32，熟練度45%。" },
                        { effect: "消耗MP: 14, 攻擊力: 33, 熟練度: 45%", fullDescription: "消耗MP來攻擊單一個怪物。等級14效果：消耗MP14，攻擊力33，熟練度45%。" },
                        { effect: "消耗MP: 14, 攻擊力: 34, 熟練度: 50%", fullDescription: "消耗MP來攻擊單一個怪物。等級15效果：消耗MP14，攻擊力34，熟練度50%。" },
                        { effect: "消耗MP: 14, 攻擊力: 35, 熟練度: 50%", fullDescription: "消耗MP來攻擊單一個怪物。等級16效果：消耗MP14，攻擊力35，熟練度50%。" },
                        { effect: "消耗MP: 14, 攻擊力: 36, 熟練度: 55%", fullDescription: "消耗MP來攻擊單一個怪物。等級17效果：消耗MP14，攻擊力36，熟練度55%。" },
                        { effect: "消耗MP: 14, 攻擊力: 37, 熟練度: 55%", fullDescription: "消耗MP來攻擊單一個怪物。等級18效果：消耗MP14，攻擊力37，熟練度55%。" },
                        { effect: "消耗MP: 14, 攻擊力: 38, 熟練度: 60%", fullDescription: "消耗MP來攻擊單一個怪物。等級19效果：消耗MP14，攻擊力38，熟練度60%。" },
                        { effect: "消耗MP: 14, 攻擊力: 39, 熟練度: 60%", fullDescription: "消耗MP來攻擊單一個怪物。等級20效果：消耗MP14，攻擊力39，熟練度60%。" }
                    ]
                },
                {
                    id: "magicClaw", name: "魔力爪", maxLevel: 20, requiredLevel: 10, preRequisite: { "magicArrow": 1 }, description: "消耗MP來對同一個怪物發動兩次的連續攻擊。", imageUrl: "images/magicClaw.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 10, 攻擊力: 11, 熟練度: 15%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級1效果：消耗MP10，攻擊力11，熟練度15%。" },
                        { effect: "消耗MP: 10, 攻擊力: 12, 熟練度: 15%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級2效果：消耗MP10，攻擊力12，熟練度15%。" },
                        { effect: "消耗MP: 10, 攻擊力: 13, 熟練度: 20%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級3效果：消耗MP10，攻擊力13，熟練度20%。" },
                        { effect: "消耗MP: 10, 攻擊力: 14, 熟練度: 20%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級4效果：消耗MP10，攻擊力14，熟練度20%。" },
                        { effect: "消耗MP: 10, 攻擊力: 15, 熟練度: 25%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級5效果：消耗MP10，攻擊力15，熟練度25%。" },
                        { effect: "消耗MP: 10, 攻擊力: 16, 熟練度: 25%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級6效果：消耗MP10，攻擊力16，熟練度25%。" },
                        { effect: "消耗MP: 10, 攻擊力: 17, 熟練度: 30%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級7效果：消耗MP10，攻擊力17，熟練度30%。" },
                        { effect: "消耗MP: 10, 攻擊力: 18, 熟練度: 30%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級8效果：消耗MP10，攻擊力18，熟練度30%。" },
                        { effect: "消耗MP: 10, 攻擊力: 19, 熟練度: 35%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級9效果：消耗MP10，攻擊力19，熟練度35%。" },
                        { effect: "消耗MP: 10, 攻擊力: 20, 熟練度: 35%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級10效果：消耗MP10，攻擊力20，熟練度35%。" },
                        { effect: "消耗MP: 20, 攻擊力: 22, 熟練度: 40%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級11效果：消耗MP20，攻擊力22，熟練度40%。" },
                        { effect: "消耗MP: 20, 攻擊力: 24, 熟練度: 40%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級12效果：消耗MP20，攻擊力24，熟練度40%。" },
                        { effect: "消耗MP: 20, 攻擊力: 26, 熟練度: 45%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級13效果：消耗MP20，攻擊力26，熟練度45%。" },
                        { effect: "消耗MP: 20, 攻擊力: 28, 熟練度: 45%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級14效果：消耗MP20，攻擊力28，熟練度45%。" },
                        { effect: "消耗MP: 20, 攻擊力: 30, 熟練度: 50%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級15效果：消耗MP20，攻擊力30，熟練度50%。" },
                        { effect: "消耗MP: 20, 攻擊力: 32, 熟練度: 50%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級16效果：消耗MP20，攻擊力32，熟練度50%。" },
                        { effect: "消耗MP: 20, 攻擊力: 34, 熟練度: 55%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級17效果：消耗MP20，攻擊力34，熟練度55%。" },
                        { effect: "消耗MP: 20, 攻擊力: 36, 熟練度: 55%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級18效果：消耗MP20，攻擊力36，熟練度55%。" },
                        { effect: "消耗MP: 20, 攻擊力: 38, 熟練度: 60%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級19效果：消耗MP20，攻擊力38，熟練度60%。" },
                        { effect: "消耗MP: 20, 攻擊力: 40, 熟練度: 60%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級20效果：消耗MP20，攻擊力40，熟練度60%。" }
                    ]
                }
            ],
            "2轉 (火毒巫師)": [
                {
                    id: "magicDrain",
                    name: "魔力吸收",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "每次向敵人施展魔法攻擊時，依比例率吸收對方的MP直到敵人的MP為0。",
                    imageUrl: "images/magicDrain.png",
                    levels: Array(21).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `發動率: ${10 + i}%, 吸收率: ${20 + i}%`,
                        fullDescription: `每次向敵人施展魔法攻擊時，依比例率吸收對方的MP直到敵人的MP為0。等級${i}效果：發動率${10 + i}%，吸收率${20 + i}%。`
                    })
                },
                {
                    "id": "teleport",
                    "name": "瞬間移動",
                    "maxLevel": 20,
                    "requiredLevel": 30,
                    "preRequisite": {},
                    "description": "利用魔法在一定的範圍內瞬間移動到指定位置，但若指定位置必須要有立足點。",
                    "imageUrl": "images/teleport.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, moveDistance;
                        if (i === 0) return null;

                        // 消耗MP 的規律 (精確數值)
                        const mpCosts = [null, 60, 57, 54, 51, 48, 45, 42, 39, 36, 33, 31, 29, 27, 25, 23, 21, 19, 17, 15, 13];
                        mpCost = mpCosts[i];

                        // 移動距離 的規律
                        if (i >= 1 && i <= 10) {
                            moveDistance = 130;
                        } else {
                            moveDistance = 130 + (i - 10) * 2;
                        }

                        return {
                            effect: `消耗MP: ${mpCost}, 移動距離: ${moveDistance}`,
                            fullDescription: `利用魔法在一定的範圍內瞬間移動到指定位置，但若指定位置必須要有立足點。等級${i}效果：消耗MP${mpCost}，移動距離${moveDistance}。`
                        };
                    })
                },
                {
                    "id": "mentalClarity",
                    "name": "精神強化",
                    "maxLevel": 20,
                    "requiredLevel": 30,
                    "preRequisite": {},
                    "description": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。",
                    "imageUrl": "images/mentalClarity.png",
                    "levels": [
                        null,
                        { "effect": "消耗MP: 10, 魔法攻擊力: 1, 持續時間: 10秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級1效果：消耗MP10，魔法攻擊力1，持續10秒。" },
                        { "effect": "消耗MP: 10, 魔法攻擊力: 2, 持續時間: 20秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級2效果：消耗MP10，魔法攻擊力2，持續20秒。" },
                        { "effect": "消耗MP: 10, 魔法攻擊力: 3, 持續時間: 30秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級3效果：消耗MP10，魔法攻擊力3，持續30秒。" },
                        { "effect": "消耗MP: 10, 魔法攻擊力: 4, 持續時間: 40秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級4效果：消耗MP10，魔法攻擊力4，持續40秒。" },
                        { "effect": "消耗MP: 10, 魔法攻擊力: 5, 持續時間: 50秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級5效果：消耗MP10，魔法攻擊力5，持續50秒。" },
                        { "effect": "消耗MP: 10, 魔法攻擊力: 6, 持續時間: 60秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級6效果：消耗MP10，魔法攻擊力6，持續60秒。" },
                        { "effect": "消耗MP: 10, 魔法攻擊力: 7, 持續時間: 70秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級7效果：消耗MP10，魔法攻擊力7，持續70秒。" },
                        { "effect": "消耗MP: 10, 魔法攻擊力: 8, 持續時間: 80秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級8效果：消耗MP10，魔法攻擊力8，持續80秒。" },
                        { "effect": "消耗MP: 10, 魔法攻擊力: 9, 持續時間: 90秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級9效果：消耗MP10，魔法攻擊力9，持續90秒。" },
                        { "effect": "消耗MP: 10, 魔法攻擊力: 10, 持續時間: 100秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級10效果：消耗MP10，魔法攻擊力10，持續100秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 11, 持續時間: 120秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級11效果：消耗MP20，魔法攻擊力11，持續120秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 12, 持續時間: 140秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級12效果：消耗MP20，魔法攻擊力12，持續140秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 13, 持續時間: 160秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級13效果：消耗MP20，魔法攻擊力13，持續160秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 14, 持續時間: 180秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級14效果：消耗MP20，魔法攻擊力14，持續180秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 15, 持續時間: 200秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級15效果：消耗MP20，魔法攻擊力15，持續200秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 16, 持續時間: 220秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級16效果：消耗MP20，魔法攻擊力16，持續220秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 17, 持續時間: 240秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級17效果：消耗MP20，魔法攻擊力17，持續240秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 18, 持續時間: 260秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級18效果：消耗MP20，魔法攻擊力18，持續260秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 19, 持續時間: 280秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級19效果：消耗MP20，魔法攻擊力19，持續280秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 20, 持續時間: 300秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級20效果：消耗MP20，魔法攻擊力20，持續300秒。" }
                    ]
                },
                {
                    id: "slow",
                    name: "緩速術",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "在一定時間內，降低怪物的移動速度。施展一次可影響6個怪物，但無法對同一怪物重複使用。",
                    imageUrl: "images/slow.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        const mp = i <= 10 ? 8 : 16;
                        return i === 0 ? null : {
                            effect: `消耗MP: ${mp}, 怪物移動速度: -${i * 2}, 持續時間: ${i * 2}秒`,
                            fullDescription: `在一定時間內，降低怪物的移動速度。施展一次可影響6個怪物，但無法對同一怪物重複使用。等級${i}效果：消耗MP${mp}，移動速度-${i * 2}，持續${i * 2}秒。`
                        };
                    })
                },
                {
                    id: "flameArrow",
                    name: "火焰箭",
                    maxLevel: 30,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "利用魔法製作火箭來攻擊前方三隻怪物。對冰屬性的怪物可產生1.5倍的效力，但對火屬性的怪物，其效果則會減半。",
                    imageUrl: "images/flameArrow.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        const mp = i <= 15 ? 14 : 28;
                        const attack = 15 + (i > 1 ? (i - 1) * 2 : 0);
                        const mastery = 15 + (i > 3 ? (Math.floor((i - 1) / 3)) * 5 : 0);
                        return i === 0 ? null : {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}, 熟練度: ${mastery}%`,
                            fullDescription: `利用魔法製作火箭來攻擊前方三隻怪物。對冰屬性的怪物可產生1.5倍的效力，但對火屬性的怪物，其效果則會減半。等級${i}效果：消耗MP${mp}，攻擊力${attack}，熟練度${mastery}%。`
                        };
                    })
                },
                {
                    id: "poisonMist",
                    name: "毒霧",
                    maxLevel: 30,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "製作劇毒的水珠，向單一怪物進行攻擊。在一定時間內，使怪物中毒，而在中毒的狀況下，怪物的HP會逐漸減少。",
                    imageUrl: "images/poisonMist.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        const mp = i <= 15 ? 10 : 20;
                        const attack = 10 + (i > 1 ? (i - 1) * 2 : 0);
                        const poisonRate = 100;
                        const mastery = 15 + (i > 3 ? (Math.floor((i - 1) / 3)) * 5 : 0);
                        const duration = 4 + (i > 3 ? (Math.floor((i - 1) / 3)) * 4 : 0);
                        return i === 0 ? null : {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}, 中毒率: ${poisonRate}%, 熟練度: ${mastery}%, 持續時間: ${duration}秒`,
                            fullDescription: `製作劇毒的水珠，向單一怪物進行攻擊。在一定時間內，在一定時間內，使怪物中毒，而在中毒的狀況下，怪物的HP會逐漸減少。等級${i}效果：消耗MP${mp}，攻擊力${attack}，中毒率${poisonRate}%，熟練度${mastery}%，持續${duration}秒。`
                        };
                    })
                }
            ],
            "3轉 (火毒魔導士)": [
                {
                    "id": "magicBooster",
                    "name": "魔力激發",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "消耗自身的MP用來提高魔法攻擊力。",
                    "imageUrl": "images/magicBooster.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCostPercent, magicAttackPercent, duration;
                        if (i === 0) return null;

                        // 消耗MP 的精確數值
                        const mpCostsRaw = [null, 105, 110, 119, 122, 125, 130, 135, 140, 145, 150, 160, 155, 165, 160, 170, 165, 175, 170, 180, 175, 180, 180, 190, 185, 195, 190, 205, 200, 195, 200];
                        mpCostPercent = mpCostsRaw[i];

                        // 魔法攻擊力 的精確數值
                        const magicAttacksRaw = [null, 102, 104, 113, 114, 109, 110, 111, 112, 113, 114, 116, 116, 118, 118, 120, 120, 122, 122, 124, 124, 126, 126, 128, 128, 130, 130, 132, 132, 132, 135];
                        magicAttackPercent = magicAttacksRaw[i];

                        // 持續時間 的規律：分段線性
                        const durations = [null, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];
                        duration = durations[i];

                        return {
                            effect: `消耗MP: ${mpCostPercent}%, 魔法攻擊力: ${magicAttackPercent}%, 持續時間: ${duration}秒`,
                            fullDescription: `消耗自身的MP用來提高魔法攻擊力。等級${i}效果：消耗MP${mpCostPercent}%，魔法攻擊力${magicAttackPercent}%，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "magicSeal",
                    name: "魔法封印",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: { "magicBooster": 3 },
                    description: "使敵人在一段時間內變成封印狀態。被封印狀態的怪物其物理防禦力與魔法防禦力會降低。",
                    imageUrl: "images/magicSeal.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        const mp = i <= 5 ? 12 : (i <= 10 ? 18 : (i <= 15 ? 24 : 30));
                        const defenseReduction = i * 0.5;
                        const duration = 9 + Math.floor((i - 1) / 2); // Simplified based on data
                        return i === 0 ? null : {
                            effect: `消耗MP: ${mp}, 物理與魔法防禦: -${defenseReduction}%, 持續時間: ${duration}秒`,
                            fullDescription: `使敵人在一段時間內變成封印狀態。等級${i}效果：消耗MP${mp}，物理與魔法防禦-${defenseReduction}%，持續${duration}秒。`
                        };
                    })
                },
                {
                    "id": "extremeCasting",
                    "name": "極速詠唱",
                    "maxLevel": 20,
                    "requiredLevel": 70,
                    "preRequisite": { "magicBooster": 3 },
                    "description": "消耗自身的HP及MP，縮短使用攻擊性魔法的施法速度。",
                    "imageUrl": "images/extremeCasting.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let hpCost, mpCost, castSpeed, duration;
                        if (i === 0) return null;

                        // 消耗HP 的精確數值
                        const hpCosts = [null, 58, 56, 54, 52, 50, 48, 46, 44, 42, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30];
                        hpCost = hpCosts[i];

                        // 消耗MP 的精確數值
                        const mpCosts = [null, 53, 51, 49, 47, 45, 43, 41, 39, 37, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25];
                        mpCost = mpCosts[i];

                        // 施法速度 的規律
                        castSpeed = i <= 10 ? 1 : 2;

                        // 持續時間 的規律
                        if (i <= 10) {
                            duration = i * 10;
                        } else {
                            duration = 100 + (i - 10) * 20;
                        }

                        return {
                            effect: `消耗HP: ${hpCost}, 消耗MP: ${mpCost}, 施法速度: ${castSpeed}, 持續時間: ${duration}秒`,
                            fullDescription: `消耗自身的HP及MP，縮短使用攻擊性魔法的施法速度。等級${i}效果：消耗HP${hpCost}，消耗MP${mpCost}，施法速度${castSpeed}，持續${duration}秒。`
                        };
                    })
                },
                {
                    "id": "firePoisonStrike",
                    "name": "火毒合擊",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "混合火、毒屬性的魔法，攻擊一個怪物。對火、毒屬性為弱點的怪物將可能造成致命性的傷害，並且有一定的機率會使怪物中毒。",
                    "imageUrl": "images/firePoisonStrike.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, poisonRate, attack, duration, mastery;
                        if (i === 0) return null;

                        // 消耗MP 的精確數值
                        const mpCosts = [null, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22];
                        mpCost = mpCosts[i];

                        // 中毒機率 的規律 (精確數值)
                        const poisonRates = [null, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70];
                        poisonRate = poisonRates[i];

                        // 攻擊力 的精確數值
                        const attacks = [null, 80, 84, 88, 92, 95, 98, 101, 104, 107, 110, 113, 116, 119, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 147, 148, 149, 150];
                        attack = attacks[i];

                        // 持續時間 的規律
                        let durationRaw;
                        if (i <= 3) durationRaw = 4;
                        else if (i <= 6) durationRaw = 8;
                        else if (i <= 9) durationRaw = 12;
                        else if (i <= 12) durationRaw = 16;
                        else if (i <= 15) durationRaw = 20;
                        else if (i <= 18) durationRaw = 24;
                        else if (i <= 21) durationRaw = 28;
                        else if (i <= 24) durationRaw = 32;
                        else if (i <= 27) durationRaw = 36;
                        else durationRaw = 40;
                        duration = durationRaw;

                        // 熟練度 的規律 (精確數值)
                        const masteries = [null, 15, 15, 15, 20, 20, 20, 25, 25, 25, 30, 30, 30, 35, 35, 35, 40, 40, 40, 45, 45, 45, 50, 50, 50, 55, 55, 55, 60, 60, 60];
                        mastery = masteries[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 中毒機率: ${poisonRate}%, 攻擊力: ${attack}, 持續時間: ${duration}秒, 熟練度: ${mastery}%`,
                            fullDescription: `混合火、毒屬性的魔法，攻擊一個怪物。等級${i}效果：消耗MP${mpCost}，中毒機率${poisonRate}%，攻擊力${attack}%，持續時間${duration}秒，熟練度${mastery}%。`
                        };
                    })
                },
                {
                    id: "firePoisonResistance",
                    name: "火毒抵抗",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "提高對火、毒屬性魔法攻擊的抗性。",
                    imageUrl: "images/firePoisonResistance.png",
                    levels: Array(21).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `抗性增加: ${0 + i * 3}%`,
                        fullDescription: `提高對火、毒屬性魔法攻擊的抗性。等級${i}效果：抗性增加${0 + i * 3}%。`
                    })
                },
                {
                    "id": "apocalypse",
                    "name": "末日烈焰",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "引發大爆炸來攻擊自身周圍的敵人。最多可攻擊6名敵人。",
                    "imageUrl": "images/apocalypse.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, attack, attackRange, mastery;
                        if (i === 0) return null;

                        // 消耗MP 的精確數值
                        const mpCosts = [null, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
                        mpCost = mpCosts[i];

                        // 攻擊力 的精確數值
                        const attacks = [null, 60, 64, 67, 70, 72, 75, 77, 79, 81, 84, 86, 88, 90, 92, 94, 95, 97, 99, 101, 103, 105, 106, 108, 110, 112, 113, 115, 117, 118, 120];
                        attack = attacks[i];

                        // 攻擊範圍 的精確數值
                        const attackRanges = [null, 110, 110, 110, 120, 120, 120, 130, 130, 130, 140, 140, 140, 150, 150, 150, 160, 160, 160, 170, 170, 170, 180, 180, 180, 190, 190, 190, 200, 200, 200];
                        attackRange = attackRanges[i];

                        // 熟練度 的規律 (精確數值)
                        const masteries = [null, 15, 15, 15, 20, 20, 20, 25, 25, 25, 30, 30, 30, 35, 35, 35, 40, 40, 40, 45, 45, 45, 50, 50, 50, 55, 55, 55, 60, 60, 60];
                        mastery = masteries[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}, 攻擊範圍: ${attackRange}%, 熟練度: ${mastery}%`,
                            fullDescription: `引發大爆炸來攻擊自身周圍的敵人。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}，攻擊範圍${attackRange}%，熟練度${mastery}%。`
                        };
                    })
                },
                {
                    id: "deadlyPoison",
                    name: "致命毒霧",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "在一定的時間內，施放毒霧攻擊自身周圍的敵人。在毒霧內的怪物，會因中毒而使HP下降，對中毒怪物的數量則沒有限制。",
                    imageUrl: "images/deadlyPoison.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, poisonRate, attack, duration, mastery, range;
                        if (i === 0) return null;
                        mp = 20 + i;
                        poisonRate = 40 + i;
                        attack = 30 + i * 2;
                        duration = 4 + Math.floor((i - 1) / 3) * 4;
                        mastery = 15 + Math.floor((i - 1) / 3) * 5;
                        range = 100 + i * 3;
                        return {
                            effect: `消耗MP: ${mp}, 中毒機率: ${poisonRate}%, 攻擊力: ${attack}, 持續時間: ${duration}秒, 熟練度: ${mastery}%, 攻擊範圍: ${range}%`,
                            fullDescription: `在一定的時間內，施放毒霧攻擊自身周圍的敵人。等級${i}效果：消耗MP${mp}，中毒機率${poisonRate}%，攻擊力${attack}，持續時間${duration}秒，熟練度${mastery}%，攻擊範圍${range}%。`
                        };
                    })
                }
            ],
            "4轉 (火毒大魔導)": [
                {
                    id: "mapleWarrior",
                    name: "楓葉祝福",
                    maxLevel: 30,
                    requiredLevel: 120, // 楓葉祝福通常無等級限制，可根據需求自行修改
                    preRequisite: {},
                    description: "全職業的共通技能，一定時間內全能力(力量、敏捷、智力、幸運)增加固定%數。",
                    imageUrl: "images/mapleWarrior.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 10, 持續時間: 30秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級1效果：消耗MP 10，持續時間 30秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 60秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級2效果：消耗MP 10，持續時間 60秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 90秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級3效果：消耗MP 10，持續時間 90秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 120秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級4效果：消耗MP 10，持續時間 120秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 150秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級5效果：消耗MP 10，持續時間 150秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 180秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級6效果：消耗MP 20，持續時間 180秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 210秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級7效果：消耗MP 20，持續時間 210秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 240秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級8效果：消耗MP 20，持續時間 240秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 270秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級9效果：消耗MP 20，持續時間 270秒，全能力增加 5%。" },
                        { effect: "消耗MP: 20, 持續時間: 300秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級10效果：消耗MP 20，持續時間 300秒，全能力增加 5%。" },
                        { effect: "消耗MP: 30, 持續時間: 330秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級11效果：消耗MP 30，持續時間 330秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 360秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級12效果：消耗MP 30，持續時間 360秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 390秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級13效果：消耗MP 30，持續時間 390秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 420秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級14效果：消耗MP 30，持續時間 420秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 450秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級15效果：消耗MP 30，持續時間 450秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 480秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級16效果：消耗MP 40，持續時間 480秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 510秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級17效果：消耗MP 40，持續時間 510秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 540秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級18效果：消耗MP 40，持續時間 540秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 570秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級19效果：消耗MP 40，持續時間 570秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 600秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級20效果：消耗MP 40，持續時間 600秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 630秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級21效果：消耗MP 40，持續時間 630秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 660秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級22效果：消耗MP 40，持續時間 660秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 690秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級23效果：消耗MP 40，持續時間 690秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 720秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級24效果：消耗MP 40，持續時間 720秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 750秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級25效果：消耗MP 40，持續時間 750秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 780秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級26效果：消耗MP 40，持續時間 780秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 810秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級27效果：消耗MP 40，持續時間 810秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 840秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級28效果：消耗MP 40，持續時間 840秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 870秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級29效果：消耗MP 40，持續時間 870秒，全能力增加 15%。" },
                        { effect: "消耗MP: 40, 持續時間: 900秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級30效果：消耗MP 40，持續時間 900秒，全能力增加 15%。" }
                    ]
                },
                {
                    id: "heroesWill",
                    name: "楓葉淨化",
                    maxLevel: 1,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。",
                    imageUrl: "images/heroesWill.png",
                    levels: [
                        null,
                        {
                            effect: "消耗MP: 30, 冷卻時間: 600秒",
                            fullDescription: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。等級1效果：消耗MP 30，冷卻時間 600秒。"
                        }
                    ]
                },
                {
                    id: "genesis",
                    name: "核爆術",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "集合空氣中的微塵粒子，集氣後放射出粒子塵造成敵人傷害，最多攻擊6個怪物。",
                    imageUrl: "images/genesis.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const mp = i <= 10 ? 25 : i <= 20 ? 40 : 55;
                        const power = 150 + (i * 10);
                        const mastery = 30 + Math.ceil(i / 3) * 5;
                        const effect = `消耗MP: ${mp}, 最大威力: ${power}%, 熟練度: ${mastery}%`;
                        return {
                            effect: effect,
                            fullDescription: `集合空氣中的微塵粒子，集氣後放射出粒子塵造成敵人傷害，最多攻擊6個怪物。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "infinity",
                    name: "魔力無限",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "一定時間內，把周圍的元素凝聚到自已身上，讓MP不會減少。技能間隔時間：7分鐘。",
                    imageUrl: "images/infinity.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const duration = 10 + i;
                        const effect = `持續時間: ${duration}秒`;
                        return {
                            effect: effect,
                            fullDescription: `一定時間內，把周圍的元素凝聚到自已身上，讓MP不會減少。等級${i}效果：持續時間${duration}秒。技能間隔時間：7分鐘。`
                        };
                    })
                },
                {
                    id: "magicReflect",
                    name: "魔法反射",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "把敵人所施放的攻擊魔法反彈回去一部份，但不超過敵人HP總量的 20%。",
                    imageUrl: "images/magicReflect.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 數值規律處理
                        // MP: 1-20級為 25+i, 21級(含)以後固定為 45
                        const mp = i <= 20 ? (25 + i) : 45;
                        const time = i * 10;
                        const accuracy = 30 + i;
                        const reflectPower = 50 + (i * 5);

                        const effect = `消耗MP: ${mp}, 持續時間: ${time}秒, 準確率: ${accuracy}%, 反彈威力: ${reflectPower}%`;

                        return {
                            effect: effect,
                            fullDescription: `把敵人所施放的攻擊魔法反彈回去一部份，但不超過敵人HP總量的 20%。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "fieryHell",
                    name: "炎靈地獄",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "在固定射程距離300範圍內向敵人丟出一顆火球彈，把敵人困在火牢裡，造成持續傷害。使怪物弱點冰屬性傷害的效果。",
                    imageUrl: "images/fieryHell.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 階梯式 (15 -> 18 -> 21 -> 31 -> 34)
                        let mp;
                        if (i <= 6) mp = 15;
                        else if (i <= 12) mp = 18;
                        else if (i <= 18) mp = 21;
                        else if (i <= 24) mp = 31;
                        else mp = 34;

                        // 2. 攻擊力: 起始 105，每級 +2
                        const attack = 105 + (i * 2);

                        // 3. 持續時間: 18級前 10秒，18級起 15秒
                        const duration = i < 18 ? 10 : 15;

                        // 4. 熟練度: 每 3 級增加 5% (起始 15%)
                        const mastery = 10 + Math.ceil(i / 3) * 5;

                        // 5. 攻擊數目: 階梯式增加 (2 -> 3 -> 4 -> 5 -> 6)
                        let count;
                        if (i <= 6) count = 2;
                        else if (i <= 12) count = 3;
                        else if (i <= 18) count = 4;
                        else if (i <= 24) count = 5;
                        else count = 6;

                        const effect = `消耗MP: ${mp}, 攻擊力: ${attack}, 持續時間: ${duration}秒, 熟練度: ${mastery}%, 攻擊數目: ${count}`;

                        return {
                            effect: effect,
                            fullDescription: `在固定射程距離300範圍內向敵人丟出一顆火球彈，把敵人困在火牢裡。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "summonIfritI",
                    name: "召喚冰魔",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: { "fieryHell": 5 },
                    description: "召喚一隻冰屬性的魔物在一定時間內攻擊敵人。可以同時攻擊3個敵人。",
                    imageUrl: "images/summonIfritI.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 從 13 開始，每級增加 3 (13, 16, 19...)
                        const mp = 10 + (i * 3);

                        // 2. 持續時間: 每級增加 10 秒
                        const duration = i * 10;

                        // 3. 攻擊力規律:
                        // 1-10級: 150 + (i * 3)
                        // 11-20級: 140 + (i * 4) [11級=184, 20級=220]
                        // 21-30級: 120 + (i * 5) [21級=225, 30級=270]
                        let attack;
                        if (i <= 10) {
                            attack = 150 + (i * 3);
                        } else if (i <= 20) {
                            attack = 140 + (i * 4);
                        } else {
                            attack = 120 + (i * 5);
                        }

                        // 4. 凍結時間: 每 10 級增加 1 秒 (1-10=1s, 11-20=2s, 21-30=3s)
                        const freezeTime = Math.ceil(i / 10);

                        const effect = `消耗MP: ${mp}, 持續時間: ${duration}秒, 攻擊力: ${attack}, 凍結時間: ${freezeTime}秒`;

                        return {
                            effect: effect,
                            fullDescription: `召喚一隻冰屬性的魔物在一定時間內攻擊敵人。可以同時攻擊3個敵人。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "paralyze",
                    name: "劇毒麻痺",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "對單一敵方進行毒屬性的攻擊，並使其麻痺一段時間，若劇毒麻痺等級高於火流星，則火流星會附加麻痺效果。（增加10%對BOSS的攻擊）",
                    imageUrl: "images/paralyze.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP規律
                        // 1-10級: 16
                        // 11-20級: 24
                        // 21-25級: 30
                        // 26-30級: 遞減 (29, 28, 27, 26, 25)
                        let mp;
                        if (i <= 10) mp = 16;
                        else if (i <= 20) mp = 24;
                        else if (i <= 25) mp = 30;
                        else mp = 30 - (i - 25);

                        // 2. 攻擊力規律
                        // 1-20級: 200 + (i * 3)
                        // 21-30級: 220 + (i * 2) [21級=262, 30級=280]
                        const attack = i <= 20 ? (200 + i * 3) : (220 + i * 2);

                        // 3. 熟練度規律: 每 3 級增加 5% (起始 15%)
                        const mastery = 10 + Math.ceil(i / 3) * 5;

                        // 4. 持續時間規律: 1-10級=5s, 11-20級=10s, 21-30級=15s
                        const duration = Math.ceil(i / 10) * 5;

                        const effect = `消耗MP: ${mp}, 攻擊力: ${attack}, 熟練度: ${mastery}%, 持續時間: ${duration}秒`;

                        return {
                            effect: effect,
                            fullDescription: `對單一敵方進行毒屬性的攻擊，並使其麻痺一段時間。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "meteorShower",
                    name: "火流星",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "召喚隕石從天而降，對畫面最多15名敵人使用炎屬性加以攻擊。如果火流星等級低於麻痺術等級，釋放火流星時會追加麻痺效果。",
                    imageUrl: "images/meteorShower.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP規律
                        // 1-20級: 2000 + (i * 100)
                        // 21-30級: 4000 - (i - 20) * 50 [21級=3950, 30級=3500]
                        let mp;
                        if (i <= 20) {
                            mp = 2000 + (i * 100);
                        } else {
                            mp = 4000 - (i - 20) * 50;
                        }

                        // 2. 攻擊力規律
                        // 1-20級: 320 + (i * 10)
                        // 21-30級: 520 + (i - 20) * 5 [21級=525, 30級=570]
                        let attack;
                        if (i <= 20) {
                            attack = 320 + (i * 10);
                        } else {
                            attack = 520 + (i - 20) * 5;
                        }

                        const effect = `消耗MP: ${mp}, 攻擊力: ${attack}`;

                        return {
                            effect: effect,
                            fullDescription: `召喚隕石從天而降，對畫面最多15名敵人使用炎屬性加以攻擊。等級${i}效果：${effect}。`
                        };
                    })
                }
            ],
            "超技能": [],
            "5轉技能": [],
            "共通技能": []
        }
    },
    "冰雷大魔導 (ArchMageI/L)": {
        emblemUrl: 'emblems/archmage_il.png',
        startingLevelForSp: 8,
        jobAdvancementSpBonuses: [8, 30, 70, 120],
        jobStagesOrder: ["0轉 (新手)", "1轉 (魔法師)", "2轉 (冰雷巫師)", "3轉 (冰雷魔導士)", "4轉 (冰雷大魔導)", "超技能", "5轉技能", "共通技能"],
        spRequiredFor2ndJob: 67, // 法師2轉點數需求
        spRequiredFor3rdJob: 188, // 法師3轉點數需求
        spRequiredFor4thJob: 339, // 4轉通用點數需求
        skills: {
            "0轉 (新手)": [],
            "1轉 (魔法師)": [
                {
                    id: "magicPurify", name: "魔力淨化", maxLevel: 16, requiredLevel: 10, preRequisite: {}, description: "每10秒鐘可恢復更多量的MP。", imageUrl: "images/magicPurify.png",
                    levels: Array(17).fill(null).map((_, i) => i === 0 ? null : { effect: `${(0.1 * i).toFixed(1)}x角色等級+3 MP回復量`, fullDescription: `每10秒鐘可恢復更多量的MP。回復量公式：${(0.1 * i).toFixed(1)}x角色等級+3` })
                },
                {
                    id: "magicExtension", name: "魔力擴展", maxLevel: 10, requiredLevel: 10, preRequisite: { "magicPurify": 5 }, description: "當等級提升時，增加MP的最大追加量。", imageUrl: "images/magicExtension.png",
                    levels: Array(11).fill(null).map((_, i) => i === 0 ? null : { effect: `升級追加量: ${2 * i}`, fullDescription: `當等級提升時，增加MP的最大追加量。等級${i}效果：升級追加量${2 * i}。` })
                },
                {
                    id: "magicGuard", name: "魔心防禦", maxLevel: 20, requiredLevel: 10, preRequisite: {}, description: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。但若MP達到0時，則直接消耗HP。", imageUrl: "images/magicGuard.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 6, 持續時間: 170秒, 替代率: 23%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級1效果：消耗MP6，持續170秒，替代率23%。" },
                        { effect: "消耗MP: 6, 持續時間: 180秒, 替代率: 26%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級2效果：消耗MP6，持續180秒，替代率26%。" },
                        { effect: "消耗MP: 6, 持續時間: 190秒, 替代率: 29%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級3效果：消耗MP6，持續190秒，替代率29%。" },
                        { effect: "消耗MP: 6, 持續時間: 200秒, 替代率: 32%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級4效果：消耗MP6，持續200秒，替代率32%。" },
                        { effect: "消耗MP: 6, 持續時間: 210秒, 替代率: 35%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級5效果：消耗MP6，持續210秒，替代率35%。" },
                        { effect: "消耗MP: 6, 持續時間: 220秒, 替代率: 38%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級6效果：消耗MP6，持續220秒，替代率38%。" },
                        { effect: "消耗MP: 6, 持續時間: 230秒, 替代率: 41%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級7效果：消耗MP6，持續230秒，替代率41%。" },
                        { effect: "消耗MP: 6, 持續時間: 240秒, 替代率: 44%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級8效果：消耗MP6，持續240秒，替代率44%。" },
                        { effect: "消耗MP: 6, 持續時間: 250秒, 替代率: 47%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級9效果：消耗MP6，持續250秒，替代率47%。" },
                        { effect: "消耗MP: 6, 持續時間: 260秒, 替代率: 50%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級10效果：消耗MP6，持續260秒，替代率50%。" },
                        { effect: "消耗MP: 12, 持續時間: 270秒, 替代率: 53%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級11效果：消耗MP12，持續270秒，替代率53%。" },
                        { effect: "消耗MP: 12, 持續時間: 280秒, 替代率: 56%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級12效果：消耗MP12，持續280秒，替代率56%。" },
                        { effect: "消耗MP: 12, 持續時間: 290秒, 替代率: 59%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級13效果：消耗MP12，持續290秒，替代率59%。" },
                        { effect: "消耗MP: 12, 持續時間: 300秒, 替代率: 62%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級14效果：消耗MP12，持續300秒，替代率62%。" },
                        { effect: "消耗MP: 12, 持續時間: 310秒, 替代率: 65%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級15效果：消耗MP12，持續310秒，替代率65%。" },
                        { effect: "消耗MP: 12, 持續時間: 320秒, 替代率: 68%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級16效果：消耗MP12，持續320秒，替代率68%。" },
                        { effect: "消耗MP: 12, 持續時間: 330秒, 替代率: 71%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級17效果：消耗MP12，持續330秒，替代率71%。" },
                        { effect: "消耗MP: 12, 持續時間: 340秒, 替代率: 74%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級18效果：消耗MP12，持續340秒，替代率74%。" },
                        { effect: "消耗MP: 12, 持續時間: 350秒, 替代率: 77%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級19效果：消耗MP12，持續350秒，替代率77%。" },
                        { effect: "消耗MP: 12, 持續時間: 360秒，替代率: 80%", fullDescription: "一定的時間內，依比例用MP來帶替傷害所耗損的HP生命值。等級20效果：消耗MP12，持續360秒，替代率80%。" }]
                },
                {
                    id: "magicShield", name: "魔力之盾", maxLevel: 20, requiredLevel: 10, preRequisite: { "magicGuard": 3 }, description: "一定時間內把魔力集中在盔甲上，提高物理防禦力。", imageUrl: "images/magicShield.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 8, 持續時間: 20秒, 防禦力: 2", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級1效果：消耗MP8，持續20秒，防禦力2。" },
                        { effect: "消耗MP: 8, 持續時間: 40秒, 防禦力: 4", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級2效果：消耗MP8，持續40秒，防禦力4。" },
                        { effect: "消耗MP: 8, 持續時間: 60秒, 防禦力: 6", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級3效果：消耗MP8，持續60秒，防禦力6。" },
                        { effect: "消耗MP: 8, 持續時間: 80秒, 防禦力: 8", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級4效果：消耗MP8，持續80秒，防禦力8。" },
                        { effect: "消耗MP: 8, 持續時間: 100秒, 防禦力: 10", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級5效果：消耗MP8，持續100秒，防禦力10。" },
                        { effect: "消耗MP: 8, 持續時間: 120秒, 防禦力: 12", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級6效果：消耗MP8，持續120秒，防禦力12。" },
                        { effect: "消耗MP: 8, 持續時間: 140秒, 防禦力: 14", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級7效果：消耗MP8，持續140秒，防禦力14。" },
                        { effect: "消耗MP: 8, 持續時間: 160秒, 防禦力: 16", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級8效果：消耗MP8，持續160秒，防禦力16。" },
                        { effect: "消耗MP: 8, 持續時間: 180秒, 防禦力: 18", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級9效果：消耗MP8，持續180秒，防禦力18。" },
                        { effect: "消耗MP: 8, 持續時間: 200秒, 防禦力: 20", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級10效果：消耗MP8，持續200秒，防禦力20。" },
                        { effect: "消耗MP: 13, 持續時間: 196秒, 防禦力: 22", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級11效果：消耗MP13，持續196秒，防禦力22。" },
                        { effect: "消耗MP: 13, 持續時間: 210秒, 防禦力: 24", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級12效果：消耗MP13，持續210秒，防禦力24。" },
                        { effect: "消耗MP: 13, 持續時間: 224秒, 防禦力: 26", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級13效果：消耗MP13，持續224秒，防禦力26。" },
                        { effect: "消耗MP: 13, 持續時間: 238秒, 防禦力: 28", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級14效果：消耗MP13，持續238秒，防禦力28。" },
                        { effect: "消耗MP: 13, 持續時間: 252秒, 防禦力: 30", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級15效果：消耗MP13，持續252秒，防禦力30。" },
                        { effect: "消耗MP: 16, 持續時間: 260秒, 防禦力: 32", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級16效果：消耗MP16，持續260秒，防禦力32。" },
                        { effect: "消耗MP: 16, 持續時間: 270秒, 防禦力: 34", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級17效果：消耗MP16，持續270秒，防禦力34。" },
                        { effect: "消耗MP: 16, 持續時間: 280秒, 防禦力: 36", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級18效果：消耗MP16，持續280秒，防禦力36。" },
                        { effect: "消耗MP: 16, 持續時間: 290秒, 防禦力: 38", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級19效果：消耗MP16，持續290秒，防禦力38。" },
                        { effect: "消耗MP: 16, 持續時間: 300秒，防禦力: 40", fullDescription: "一定時間內把魔力集中在盔甲上，提高物理防禦力。等級20效果：消耗MP16，持續300秒，防禦力40。" }
                    ]
                },
                {
                    id: "magicArrow", name: "魔靈彈", maxLevel: 20, requiredLevel: 10, preRequisite: {}, description: "消耗MP來攻擊單一個怪物。", imageUrl: "images/magicArrow.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 6, 攻擊力: 20, 熟練度: 15%", fullDescription: "消耗MP來攻擊單一個怪物。等級1效果：消耗MP6，攻擊力20，熟練度15%。" },
                        { effect: "消耗MP: 6, 攻擊力: 21, 熟練度: 15%", fullDescription: "消耗MP來攻擊單一個怪物。等級2效果：消耗MP6，攻擊力21，熟練度15%。" },
                        { effect: "消耗MP: 6, 攻擊力: 22, 熟練度: 20%", fullDescription: "消耗MP來攻擊單一個怪物。等級3效果：消耗MP6，攻擊力22，熟練度20%。" },
                        { effect: "消耗MP: 6, 攻擊力: 23, 熟練度: 20%", fullDescription: "消耗MP來攻擊單一個怪物。等級4效果：消耗MP6，攻擊力23，熟練度20%。" },
                        { effect: "消耗MP: 6, 攻擊力: 24, 熟練度: 25%", fullDescription: "消耗MP來攻擊單一個怪物。等級5效果：消耗MP6，攻擊力24，熟練度25%。" },
                        { effect: "消耗MP: 6, 攻擊力: 25, 熟練度: 25%", fullDescription: "消耗MP來攻擊單一個怪物。等級6效果：消耗MP6，攻擊力25，熟練度25%。" },
                        { effect: "消耗MP: 6, 攻擊力: 26, 熟練度: 30%", fullDescription: "消耗MP來攻擊單一個怪物。等級7效果：消耗MP6，攻擊力26，熟練度30%。" },
                        { effect: "消耗MP: 6, 攻擊力: 27, 熟練度: 30%", fullDescription: "消耗MP來攻擊單一個怪物。等級8效果：消耗MP6，攻擊力27，熟練度30%。" },
                        { effect: "消耗MP: 6, 攻擊力: 28, 熟練度: 35%", fullDescription: "消耗MP來攻擊單一個怪物。等級9效果：消耗MP6，攻擊力28，熟練度35%。" },
                        { effect: "消耗MP: 6, 攻擊力: 29, 熟練度: 35%", fullDescription: "消耗MP來攻擊單一個怪物。等級10效果：消耗MP6，攻擊力29，熟練度35%。" },
                        { effect: "消耗MP: 14, 攻擊力: 30, 熟練度: 40%", fullDescription: "消耗MP來攻擊單一個怪物。等級11效果：消耗MP14，攻擊力30，熟練度40%。" },
                        { effect: "消耗MP: 14, 攻擊力: 31, 熟練度: 40%", fullDescription: "消耗MP來攻擊單一個怪物。等級12效果：消耗MP14，攻擊力31，熟練度40%。" },
                        { effect: "消耗MP: 14, 攻擊力: 32, 熟練度: 45%", fullDescription: "消耗MP來攻擊單一個怪物。等級13效果：消耗MP14，攻擊力32，熟練度45%。" },
                        { effect: "消耗MP: 14, 攻擊力: 33, 熟練度: 45%", fullDescription: "消耗MP來攻擊單一個怪物。等級14效果：消耗MP14，攻擊力33，熟練度45%。" },
                        { effect: "消耗MP: 14, 攻擊力: 34, 熟練度: 50%", fullDescription: "消耗MP來攻擊單一個怪物。等級15效果：消耗MP14，攻擊力34，熟練度50%。" },
                        { effect: "消耗MP: 14, 攻擊力: 35, 熟練度: 50%", fullDescription: "消耗MP來攻擊單一個怪物。等級16效果：消耗MP14，攻擊力35，熟練度50%。" },
                        { effect: "消耗MP: 14, 攻擊力: 36, 熟練度: 55%", fullDescription: "消耗MP來攻擊單一個怪物。等級17效果：消耗MP14，攻擊力36，熟練度55%。" },
                        { effect: "消耗MP: 14, 攻擊力: 37, 熟練度: 55%", fullDescription: "消耗MP來攻擊單一個怪物。等級18效果：消耗MP14，攻擊力37，熟練度55%。" },
                        { effect: "消耗MP: 14, 攻擊力: 38, 熟練度: 60%", fullDescription: "消耗MP來攻擊單一個怪物。等級19效果：消耗MP14，攻擊力38，熟練度60%。" },
                        { effect: "消耗MP: 14, 攻擊力: 39, 熟練度: 60%", fullDescription: "消耗MP來攻擊單一個怪物。等級20效果：消耗MP14，攻擊力39，熟練度60%。" }
                    ]
                },
                {
                    id: "magicClaw", name: "魔力爪", maxLevel: 20, requiredLevel: 10, preRequisite: { "magicArrow": 1 }, description: "消耗MP來對同一個怪物發動兩次的連續攻擊。", imageUrl: "images/magicClaw.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 10, 攻擊力: 11, 熟練度: 15%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級1效果：消耗MP10，攻擊力11，熟練度15%。" },
                        { effect: "消耗MP: 10, 攻擊力: 12, 熟練度: 15%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級2效果：消耗MP10，攻擊力12，熟練度15%。" },
                        { effect: "消耗MP: 10, 攻擊力: 13, 熟練度: 20%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級3效果：消耗MP10，攻擊力13，熟練度20%。" },
                        { effect: "消耗MP: 10, 攻擊力: 14, 熟練度: 20%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級4效果：消耗MP10，攻擊力14，熟練度20%。" },
                        { effect: "消耗MP: 10, 攻擊力: 15, 熟練度: 25%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級5效果：消耗MP10，攻擊力15，熟練度25%。" },
                        { effect: "消耗MP: 10, 攻擊力: 16, 熟練度: 25%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級6效果：消耗MP10，攻擊力16，熟練度25%。" },
                        { effect: "消耗MP: 10, 攻擊力: 17, 熟練度: 30%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級7效果：消耗MP10，攻擊力17，熟練度30%。" },
                        { effect: "消耗MP: 10, 攻擊力: 18, 熟練度: 30%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級8效果：消耗MP10，攻擊力18，熟練度30%。" },
                        { effect: "消耗MP: 10, 攻擊力: 19, 熟練度: 35%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級9效果：消耗MP10，攻擊力19，熟練度35%。" },
                        { effect: "消耗MP: 10, 攻擊力: 20, 熟練度: 35%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級10效果：消耗MP10，攻擊力20，熟練度35%。" },
                        { effect: "消耗MP: 20, 攻擊力: 22, 熟練度: 40%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級11效果：消耗MP20，攻擊力22，熟練度40%。" },
                        { effect: "消耗MP: 20, 攻擊力: 24, 熟練度: 40%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級12效果：消耗MP20，攻擊力24，熟練度40%。" },
                        { effect: "消耗MP: 20, 攻擊力: 26, 熟練度: 45%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級13效果：消耗MP20，攻擊力26，熟練度45%。" },
                        { effect: "消耗MP: 20, 攻擊力: 28, 熟練度: 45%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級14效果：消耗MP20，攻擊力28，熟練度45%。" },
                        { effect: "消耗MP: 20, 攻擊力: 30, 熟練度: 50%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級15效果：消耗MP20，攻擊力30，熟練度50%。" },
                        { effect: "消耗MP: 20, 攻擊力: 32, 熟練度: 50%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級16效果：消耗MP20，攻擊力32，熟練度50%。" },
                        { effect: "消耗MP: 20, 攻擊力: 34, 熟練度: 55%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級17效果：消耗MP20，攻擊力34，熟練度55%。" },
                        { effect: "消耗MP: 20, 攻擊力: 36, 熟練度: 55%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級18效果：消耗MP20，攻擊力36，熟練度55%。" },
                        { effect: "消耗MP: 20, 攻擊力: 38, 熟練度: 60%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級19效果：消耗MP20，攻擊力38，熟練度60%。" },
                        { effect: "消耗MP: 20, 攻擊力: 40, 熟練度: 60%", fullDescription: "消耗MP來對同一個怪物發動兩次的連續攻擊。等級20效果：消耗MP20，攻擊力40，熟練度60%。" }
                    ]
                }
            ],
            "2轉 (冰雷巫師)": [
                {
                    id: "magicDrain",
                    name: "魔力吸收",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "每次向敵人施展魔法攻擊時，依比例率吸收對方的MP直到敵人的MP為0。",
                    imageUrl: "images/magicDrain.png",
                    levels: Array(21).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `發動率: ${10 + i}%, 吸收率: ${20 + i}%`,
                        fullDescription: `每次向敵人施展魔法攻擊時，依比例率吸收對方的MP直到敵人的MP為0。等級${i}效果：發動率${10 + i}%，吸收率${20 + i}%。`
                    })
                },
                {
                    "id": "teleport",
                    "name": "瞬間移動",
                    "maxLevel": 20,
                    "requiredLevel": 30,
                    "preRequisite": {},
                    "description": "利用魔法在一定的範圍內瞬間移動到指定位置，但若指定位置必須要有立足點。",
                    "imageUrl": "images/teleport.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, moveDistance;
                        if (i === 0) return null;

                        // 消耗MP 的規律 (精確數值)
                        const mpCosts = [null, 60, 57, 54, 51, 48, 45, 42, 39, 36, 33, 31, 29, 27, 25, 23, 21, 19, 17, 15, 13];
                        mpCost = mpCosts[i];

                        // 移動距離 的規律
                        if (i >= 1 && i <= 10) {
                            moveDistance = 130;
                        } else {
                            moveDistance = 130 + (i - 10) * 2;
                        }

                        return {
                            effect: `消耗MP: ${mpCost}, 移動距離: ${moveDistance}`,
                            fullDescription: `利用魔法在一定的範圍內瞬間移動到指定位置，但若指定位置必須要有立足點。等級${i}效果：消耗MP${mpCost}，移動距離${moveDistance}。`
                        };
                    })
                },
                {
                    "id": "mentalClarity",
                    "name": "精神強化",
                    "maxLevel": 20,
                    "requiredLevel": 30,
                    "preRequisite": {},
                    "description": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。",
                    "imageUrl": "images/mentalClarity.png",
                    "levels": [
                        null,
                        { "effect": "消耗MP: 10, 魔法攻擊力: 1, 持續時間: 10秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級1效果：消耗MP10，魔法攻擊力1，持續10秒。" },
                        { "effect": "消耗MP: 10, 魔法攻擊力: 2, 持續時間: 20秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級2效果：消耗MP10，魔法攻擊力2，持續20秒。" },
                        { "effect": "消耗MP: 10, 魔法攻擊力: 3, 持續時間: 30秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級3效果：消耗MP10，魔法攻擊力3，持續30秒。" },
                        { "effect": "消耗MP: 10, 魔法攻擊力: 4, 持續時間: 40秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級4效果：消耗MP10，魔法攻擊力4，持續40秒。" },
                        { "effect": "消耗MP: 10, 魔法攻擊力: 5, 持續時間: 50秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級5效果：消耗MP10，魔法攻擊力5，持續50秒。" },
                        { "effect": "消耗MP: 10, 魔法攻擊力: 6, 持續時間: 60秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級6效果：消耗MP10，魔法攻擊力6，持續60秒。" },
                        { "effect": "消耗MP: 10, 魔法攻擊力: 7, 持續時間: 70秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級7效果：消耗MP10，魔法攻擊力7，持續70秒。" },
                        { "effect": "消耗MP: 10, 魔法攻擊力: 8, 持續時間: 80秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級8效果：消耗MP10，魔法攻擊力8，持續80秒。" },
                        { "effect": "消耗MP: 10, 魔法攻擊力: 9, 持續時間: 90秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級9效果：消耗MP10，魔法攻擊力9，持續90秒。" },
                        { "effect": "消耗MP: 10, 魔法攻擊力: 10, 持續時間: 100秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級10效果：消耗MP10，魔法攻擊力10，持續100秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 11, 持續時間: 120秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級11效果：消耗MP20，魔法攻擊力11，持續120秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 12, 持續時間: 140秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級12效果：消耗MP20，魔法攻擊力12，持續140秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 13, 持續時間: 160秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級13效果：消耗MP20，魔法攻擊力13，持續160秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 14, 持續時間: 180秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級14效果：消耗MP20，魔法攻擊力14，持續180秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 15, 持續時間: 200秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級15效果：消耗MP20，魔法攻擊力15，持續200秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 16, 持續時間: 220秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級16效果：消耗MP20，魔法攻擊力16，持續220秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 17, 持續時間: 240秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級17效果：消耗MP20，魔法攻擊力17，持續240秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 18, 持續時間: 260秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級18效果：消耗MP20，魔法攻擊力18，持續260秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 19, 持續時間: 280秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級19效果：消耗MP20，魔法攻擊力19，持續280秒。" },
                        { "effect": "消耗MP: 20, 魔法攻擊力: 20, 持續時間: 300秒", "fullDescription": "經由冥想使精神集中，一定時間內提高周圍所有隊員的魔法攻擊力。等級20效果：消耗MP20，魔法攻擊力20，持續300秒。" }
                    ]
                },
                {
                    id: "slow",
                    name: "緩速術",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "在一定時間內，降低怪物的移動速度。施展一次可影響6個怪物，但無法對同一怪物重複使用。",
                    imageUrl: "images/slow.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        const mp = i <= 10 ? 8 : 16;
                        return i === 0 ? null : {
                            effect: `消耗MP: ${mp}, 怪物移動速度: -${i * 2}, 持續時間: ${i * 2}秒`,
                            fullDescription: `在一定時間內，降低怪物的移動速度。施展一次可影響6個怪物，但無法對同一怪物重複使用。等級${i}效果：消耗MP${mp}，移動速度-${i * 2}，持續${i * 2}秒。`
                        };
                    })
                },
                {
                    "id": "iceBolt",
                    "name": "冰錐術",
                    "maxLevel": 30,
                    "requiredLevel": 30,
                    "preRequisite": {},
                    "description": "製作出尖銳的冰錐，向單一怪物發動攻擊，被命中的怪物會無法行動。對火屬性的怪物，會造成1.5倍殺傷力，而對冰屬性的怪物，其效力便會減半。",
                    "imageUrl": "images/iceBolt.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, attack, freezeDuration, mastery;
                        if (i === 0) return null;

                        // 消耗MP 的精確數值
                        const mpCosts = [null, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
                        mpCost = mpCosts[i];

                        // 攻擊力 的精確數值
                        const attacks = [null, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85, 88, 91, 94, 97, 100];
                        attack = attacks[i];

                        // 凍結時間 的規律
                        freezeDuration = i <= 15 ? "1秒" : "2秒";

                        // 熟練度 的規律 (精確數值)
                        const masteries = [null, 15, 15, 15, 20, 20, 20, 25, 25, 25, 30, 30, 30, 35, 35, 35, 40, 40, 40, 45, 45, 45, 50, 50, 50, 55, 55, 55, 60, 60, 60];
                        mastery = masteries[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}, 凍結時間: ${freezeDuration}, 熟練度: ${mastery}%`,
                            fullDescription: `製作出尖銳的冰錐，向單一怪物發動攻擊，被命中的怪物會無法行動。對火屬性的怪物，會造成1.5倍殺傷力，而對冰屬性的怪物，其效力便會減半。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}，凍結時間${freezeDuration}，熟練度${mastery}%。`
                        };
                    })
                },
                {
                    "id": "thunderBolt",
                    "name": "雷閃電鳴",
                    "maxLevel": 30,
                    "requiredLevel": 30,
                    "preRequisite": {},
                    "description": "在周圍製造強力磁場，向周遭至多六支怪物發起雷電攻擊。",
                    "imageUrl": "images/thunderBolt.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, attack, mastery;
                        if (i === 0) return null;

                        // 消耗MP 的規律 (精確數值)
                        const mpCosts = [null, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40];
                        mpCost = mpCosts[i];

                        // 攻擊力 的規律 (精確數值)
                        const attacks = [null, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60];
                        attack = attacks[i];

                        // 熟練度 的規律 (精確數值)
                        const masteries = [null, 15, 15, 15, 20, 20, 20, 25, 25, 25, 30, 30, 30, 35, 35, 35, 40, 40, 40, 45, 45, 45, 50, 50, 50, 55, 55, 55, 60, 60, 60];
                        mastery = masteries[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}, 熟練度: ${mastery}%`,
                            fullDescription: `在周圍製造強力磁場，向周遭至多六支怪物發起雷電攻擊。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}，熟練度${mastery}%。`
                        };
                    })
                }
            ],
            "3轉 (冰雷魔導士)": [
                {
                    "id": "magicBooster",
                    "name": "魔力激發",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "消耗自身的MP用來提高魔法攻擊力。",
                    "imageUrl": "images/magicBooster.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCostPercent, magicAttackPercent, duration;
                        if (i === 0) return null;

                        // 消耗MP 的精確數值
                        const mpCostsRaw = [null, 105, 110, 119, 122, 125, 130, 135, 140, 145, 150, 160, 155, 165, 160, 170, 165, 175, 170, 180, 175, 180, 180, 190, 185, 195, 190, 205, 200, 195, 200];
                        mpCostPercent = mpCostsRaw[i];

                        // 魔法攻擊力 的精確數值
                        const magicAttacksRaw = [null, 102, 104, 113, 114, 109, 110, 111, 112, 113, 114, 116, 116, 118, 118, 120, 120, 122, 122, 124, 124, 126, 126, 128, 128, 130, 130, 132, 132, 132, 135];
                        magicAttackPercent = magicAttacksRaw[i];

                        // 持續時間 的規律：分段線性
                        const durations = [null, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];
                        duration = durations[i];

                        return {
                            effect: `消耗MP: ${mpCostPercent}%, 魔法攻擊力: ${magicAttackPercent}%, 持續時間: ${duration}秒`,
                            fullDescription: `消耗自身的MP用來提高魔法攻擊力。等級${i}效果：消耗MP${mpCostPercent}%，魔法攻擊力${magicAttackPercent}%，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "magicSeal",
                    name: "魔法封印",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: { "magicBooster": 3 },
                    description: "使敵人在一段時間內變成封印狀態。被封印狀態的怪物其物理防禦力與魔法防禦力會降低。（適用於BOSS）",
                    imageUrl: "images/magicSeal.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        const mp = i <= 5 ? 12 : (i <= 10 ? 18 : (i <= 15 ? 24 : 30));
                        const defenseReduction = i * 0.5;
                        const duration = 9 + Math.floor((i - 1) / 2);
                        return i === 0 ? null : {
                            effect: `消耗MP: ${mp}, 物理與魔法防禦: -${defenseReduction}%, 持續時間: ${duration}秒`,
                            fullDescription: `使敵人在一段時間內變成封印狀態。等級${i}效果：消耗MP${mp}，物理與魔法防禦-${defenseReduction}%，持續${duration}秒。（適用於BOSS）`
                        };
                    })
                },
                {
                    "id": "extremeCasting",
                    "name": "極速詠唱",
                    "maxLevel": 20,
                    "requiredLevel": 70,
                    "preRequisite": { "magicBooster": 3 },
                    "description": "消耗自身的HP及MP，縮短使用攻擊性魔法的施法速度。",
                    "imageUrl": "images/extremeCasting.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let hpCost, mpCost, castSpeed, duration;
                        if (i === 0) return null;

                        // 消耗HP 的精確數值
                        const hpCosts = [null, 58, 56, 54, 52, 50, 48, 46, 44, 42, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30];
                        hpCost = hpCosts[i];

                        // 消耗MP 的精確數值
                        const mpCosts = [null, 53, 51, 49, 47, 45, 43, 41, 39, 37, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25];
                        mpCost = mpCosts[i];

                        // 施法速度 的規律
                        castSpeed = i <= 10 ? 1 : 2;

                        // 持續時間 的規律
                        if (i <= 10) {
                            duration = i * 10;
                        } else {
                            duration = 100 + (i - 10) * 20;
                        }

                        return {
                            effect: `消耗HP: ${hpCost}, 消耗MP: ${mpCost}, 施法速度: ${castSpeed}, 持續時間: ${duration}秒`,
                            fullDescription: `消耗自身的HP及MP，縮短使用攻擊性魔法的施法速度。等級${i}效果：消耗HP${hpCost}，消耗MP${mpCost}，施法速度${castSpeed}，持續${duration}秒。`
                        };
                    })
                },
                {
                    "id": "iceLightningStrike",
                    "name": "冰雷合擊",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "混合冰、雷屬性的魔法，攻擊一個怪物。對冰、雷屬性為弱點的怪物將可能造成致命性的傷害，並且以一定的機率會使怪物變成凍結狀態。",
                    "imageUrl": "images/iceLightningStrike.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, attack, freezeDuration, mastery;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        if (i >= 1 && i <= 10) {
                            mpCost = 14;
                        } else if (i >= 11 && i <= 20) {
                            mpCost = 18;
                        } else if (i >= 21 && i <= 30) {
                            mpCost = 22;
                        }

                        // 攻擊力 的規律 (精確數值)
                        const attacks = [null, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 170];
                        attack = attacks[i];

                        // 冰凍時間 的規律
                        freezeDuration = i <= 15 ? "1秒" : "2秒";

                        // 熟練度 的規律 (精確數值)
                        const masteries = [null, 15, 15, 15, 20, 20, 20, 25, 25, 25, 30, 30, 30, 35, 35, 35, 40, 40, 40, 45, 45, 45, 50, 50, 50, 55, 55, 55, 60, 60, 60];
                        mastery = masteries[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}%, 冰凍時間: ${freezeDuration}, 熟練度: ${mastery}%`,
                            fullDescription: `混合冰、雷屬性的魔法，攻擊一個怪物。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}%，冰凍時間${freezeDuration}，熟練度${mastery}%。`
                        };
                    })
                },
                {
                    id: "iceLightningResistance",
                    name: "冰雷抵抗",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "提高對冰、雷屬性魔法攻擊的抗性。",
                    imageUrl: "images/iceLightningResistance.png",
                    levels: Array(21).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `抗性增加: ${0 + i * 3}%`,
                        fullDescription: `提高對冰、雷屬性魔法攻擊的抗性。等級${i}效果：抗性增加${0 + i * 3}%。`
                    })
                },
                {
                    "id": "iceStorm",
                    "name": "冰風暴",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "召喚出尖銳的冰塊，對周圍的敵人發動攻擊。非冰屬性的怪物被攻擊到時會有暫時凍結的效果，最多一次可攻擊6個怪物。",
                    "imageUrl": "images/iceStorm.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, attack, freezeDuration, mastery, attackRange;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        const mpCosts = [null, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
                        mpCost = mpCosts[i];

                        // 攻擊力 的精確數值
                        const attacks = [null, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 63, 66, 69, 72, 75, 79, 83, 87, 91, 95, 99, 103, 107, 111, 115];
                        attack = attacks[i];

                        // 冰凍時間 的規律
                        freezeDuration = i <= 15 ? "1秒" : "2秒";

                        // 熟練度 的規律 (精確數值)
                        const masteries = [null, 15, 15, 15, 20, 20, 20, 25, 25, 25, 30, 30, 30, 35, 35, 35, 40, 40, 40, 45, 45, 45, 50, 50, 50, 55, 55, 55, 60, 60, 60];
                        mastery = masteries[i];

                        // 攻擊範圍 的規律 (精確數值)
                        const attackRanges = [null, 110, 110, 110, 120, 120, 120, 130, 130, 130, 140, 140, 140, 150, 150, 150, 160, 160, 160, 170, 170, 170, 180, 180, 180, 190, 190, 190, 200, 200, 200];
                        attackRange = attackRanges[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}, 凍結時間: ${freezeDuration}, 熟練度: ${mastery}%, 攻擊範圍: ${attackRange}%`,
                            fullDescription: `召喚出尖銳的冰塊，對周圍的敵人發動攻擊。非冰屬性的怪物被攻擊到時會有暫時凍結的效果，最多一次可攻擊6個怪物。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}，凍結時間${freezeDuration}，熟練度${mastery}%，攻擊範圍${attackRange}%。`
                        };
                    })
                },
                {
                    "id": "lightningOrb",
                    "name": "落雷凝聚",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "集結雷電的力量，對單一敵人發動強力的雷屬性攻擊。",
                    "imageUrl": "images/lightningOrb.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, attack, mastery;
                        if (i === 0) return null;

                        // 消耗MP 的規律 (精確數值)
                        const mpCosts = [null, 10, 10, 10, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24];
                        mpCost = mpCosts[i];

                        // 攻擊力 的規律 (精確數值)
                        const attacks = [null, 84, 88, 92, 96, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 144, 148, 152, 156, 160, 164, 168, 172, 176, 180, 184, 188, 192, 196, 200];
                        attack = attacks[i];

                        // 熟練度 的規律 (精確數值)
                        const masteries = [null, 15, 15, 15, 20, 20, 20, 25, 25, 25, 30, 30, 30, 35, 35, 35, 40, 40, 40, 45, 45, 45, 50, 50, 50, 55, 55, 55, 60, 60, 60];
                        mastery = masteries[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}, 熟練度: ${mastery}%`,
                            fullDescription: `集結雷電的力量，對單一敵人發動強力的雷屬性攻擊。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}，熟練度${mastery}%。`
                        };
                    })
                }
            ],
            "4轉 (冰雷大魔導)": [
                {
                    id: "mapleWarrior",
                    name: "楓葉祝福",
                    maxLevel: 30,
                    requiredLevel: 120, // 楓葉祝福通常無等級限制，可根據需求自行修改
                    preRequisite: {},
                    description: "全職業的共通技能，一定時間內全能力(力量、敏捷、智力、幸運)增加固定%數。",
                    imageUrl: "images/mapleWarrior.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 10, 持續時間: 30秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級1效果：消耗MP 10，持續時間 30秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 60秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級2效果：消耗MP 10，持續時間 60秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 90秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級3效果：消耗MP 10，持續時間 90秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 120秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級4效果：消耗MP 10，持續時間 120秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 150秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級5效果：消耗MP 10，持續時間 150秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 180秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級6效果：消耗MP 20，持續時間 180秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 210秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級7效果：消耗MP 20，持續時間 210秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 240秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級8效果：消耗MP 20，持續時間 240秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 270秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級9效果：消耗MP 20，持續時間 270秒，全能力增加 5%。" },
                        { effect: "消耗MP: 20, 持續時間: 300秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級10效果：消耗MP 20，持續時間 300秒，全能力增加 5%。" },
                        { effect: "消耗MP: 30, 持續時間: 330秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級11效果：消耗MP 30，持續時間 330秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 360秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級12效果：消耗MP 30，持續時間 360秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 390秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級13效果：消耗MP 30，持續時間 390秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 420秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級14效果：消耗MP 30，持續時間 420秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 450秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級15效果：消耗MP 30，持續時間 450秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 480秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級16效果：消耗MP 40，持續時間 480秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 510秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級17效果：消耗MP 40，持續時間 510秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 540秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級18效果：消耗MP 40，持續時間 540秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 570秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級19效果：消耗MP 40，持續時間 570秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 600秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級20效果：消耗MP 40，持續時間 600秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 630秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級21效果：消耗MP 40，持續時間 630秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 660秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級22效果：消耗MP 40，持續時間 660秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 690秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級23效果：消耗MP 40，持續時間 690秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 720秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級24效果：消耗MP 40，持續時間 720秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 750秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級25效果：消耗MP 40，持續時間 750秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 780秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級26效果：消耗MP 40，持續時間 780秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 810秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級27效果：消耗MP 40，持續時間 810秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 840秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級28效果：消耗MP 40，持續時間 840秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 870秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級29效果：消耗MP 40，持續時間 870秒，全能力增加 15%。" },
                        { effect: "消耗MP: 40, 持續時間: 900秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級30效果：消耗MP 40，持續時間 900秒，全能力增加 15%。" }
                    ]
                },
                {
                    id: "heroesWill",
                    name: "楓葉淨化",
                    maxLevel: 1,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。",
                    imageUrl: "images/heroesWill.png",
                    levels: [
                        null,
                        {
                            effect: "消耗MP: 30, 冷卻時間: 600秒",
                            fullDescription: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。等級1效果：消耗MP 30，冷卻時間 600秒。"
                        }
                    ]
                },
                {
                    id: "genesis",
                    name: "核爆術",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "集合空氣中的微塵粒子，集氣後放射出粒子塵造成敵人傷害，最多攻擊6個怪物。",
                    imageUrl: "images/genesis.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const mp = i <= 10 ? 25 : i <= 20 ? 40 : 55;
                        const power = 150 + (i * 10);
                        const mastery = 30 + Math.ceil(i / 3) * 5;
                        const effect = `消耗MP: ${mp}, 最大威力: ${power}%, 熟練度: ${mastery}%`;
                        return {
                            effect: effect,
                            fullDescription: `集合空氣中的微塵粒子，集氣後放射出粒子塵造成敵人傷害，最多攻擊6個怪物。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "infinity",
                    name: "魔力無限",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "一定時間內，把周圍的元素凝聚到自已身上，讓MP不會減少。技能間隔時間：7分鐘。",
                    imageUrl: "images/infinity.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const duration = 10 + i;
                        const effect = `持續時間: ${duration}秒`;
                        return {
                            effect: effect,
                            fullDescription: `一定時間內，把周圍的元素凝聚到自已身上，讓MP不會減少。等級${i}效果：持續時間${duration}秒。技能間隔時間：7分鐘。`
                        };
                    })
                },
                {
                    id: "magicReflect",
                    name: "魔法反射",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "把敵人所施放的攻擊魔法反彈回去一部份，但不超過敵人HP總量的 20%。",
                    imageUrl: "images/magicReflect.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 數值規律處理
                        // MP: 1-20級為 25+i, 21級(含)以後固定為 45
                        const mp = i <= 20 ? (25 + i) : 45;
                        const time = i * 10;
                        const accuracy = 30 + i;
                        const reflectPower = 50 + (i * 5);

                        const effect = `消耗MP: ${mp}, 持續時間: ${time}秒, 準確率: ${accuracy}%, 反彈威力: ${reflectPower}%`;

                        return {
                            effect: effect,
                            fullDescription: `把敵人所施放的攻擊魔法反彈回去一部份，但不超過敵人HP總量的 20%。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "iceInferno",
                    name: "寒冰地獄",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "向敵人丟出一顆冰球彈，把敵人困在冰的氣息裡，造成持續傷害。並使怪物弱點火屬性傷害的效果。",
                    imageUrl: "images/iceInferno.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 階梯式 (15 -> 18 -> 21 -> 31 -> 34)
                        let mp;
                        if (i <= 6) mp = 15;
                        else if (i <= 12) mp = 18;
                        else if (i <= 18) mp = 21;
                        else if (i <= 24) mp = 31;
                        else mp = 34;

                        // 2. 攻擊力: 起始 85，每級 +2
                        const attack = 85 + (i * 2);

                        // 3. 持續時間: 16級前 10秒，16級起 (含) 15秒
                        const duration = i < 16 ? 10 : 15;

                        // 4. 熟練度: 每 3 級增加 5% (起始 15%)
                        const mastery = 10 + Math.ceil(i / 3) * 5;

                        // 5. 攻擊數目: 階梯式增加 (2 -> 3 -> 4 -> 5 -> 6)
                        let count;
                        if (i <= 6) count = 2;
                        else if (i <= 12) count = 3;
                        else if (i <= 18) count = 4;
                        else if (i <= 24) count = 5;
                        else count = 6;

                        const effect = `消耗MP: ${mp}, 攻擊力: ${attack}, 持續時間: ${duration}秒, 熟練度: ${mastery}%, 攻擊數目: ${count}`;

                        return {
                            effect: effect,
                            fullDescription: `向敵人丟出一顆冰球彈，把敵人困在冰的氣息裡，造成持續傷害。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "summonIfritF",
                    name: "召喚火炎神",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: { "iceInferno": 5 },
                    description: "召喚一隻火屬性的魔物在一定時間內攻擊敵人。可以同時攻擊3個敵人。",
                    imageUrl: "images/summonIfritF.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 從 13 開始，每級增加 3
                        const mp = 10 + (i * 3);

                        // 2. 持續時間: 每級增加 10 秒
                        const duration = i * 10;

                        // 3. 攻擊力規律:
                        // 1-10級: 180 + (i * 3)
                        // 11-20級: 170 + (i * 4) [11級=214, 20級=250]
                        // 21-30級: 150 + (i * 5) [21級=255, 30級=300]
                        let attack;
                        if (i <= 10) {
                            attack = 180 + (i * 3);
                        } else if (i <= 20) {
                            attack = 170 + (i * 4);
                        } else {
                            attack = 150 + (i * 5);
                        }

                        const effect = `消耗MP: ${mp}, 持續時間: ${duration}秒, 攻擊力: ${attack}`;

                        return {
                            effect: effect,
                            fullDescription: `召喚一隻火屬性的魔物在一定時間內攻擊敵人。可以同時攻擊3個敵人。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "blizzard",
                    name: "暴風雪",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "召喚冰風暴，使用冰屬性攻擊畫面上所有的敵人，最多15名敵人。",
                    imageUrl: "images/blizzard.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP規律
                        // 1-20級: 2000 + (i * 100)
                        // 21-30級: 4000 - (i - 20) * 50 [21級=3950, 30級=3500]
                        let mp;
                        if (i <= 20) {
                            mp = 2000 + (i * 100);
                        } else {
                            mp = 4000 - (i - 20) * 50;
                        }

                        // 2. 攻擊力規律
                        // 1-20級: 320 + (i * 10)
                        // 21-30級: 520 + (i - 20) * 5 [21級=525, 30級=570]
                        let attack;
                        if (i <= 20) {
                            attack = 320 + (i * 10);
                        } else {
                            attack = 520 + (i - 20) * 5;
                        }

                        const effect = `消耗MP: ${mp}, 攻擊力: ${attack}`;

                        return {
                            effect: effect,
                            fullDescription: `召喚冰風暴，使用冰屬性攻擊畫面上所有的敵人，最多15名敵人。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "chainLightning",
                    name: "閃電連擊",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "對單體怪物施加強力的攻擊，隨之對周圍目標導電，導電傷害減少13％。",
                    imageUrl: "images/chainLightning.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 階梯式 % (16% -> 18% -> 20% -> 23% -> 25%)
                        let mp;
                        if (i <= 6) mp = "16%";
                        else if (i <= 12) mp = "18%";
                        else if (i <= 18) mp = "20%";
                        else if (i <= 24) mp = "23%";
                        else mp = "25%";

                        // 2. 攻擊力規律
                        // 1-20級: 110 + (i * 3)
                        // 21-30級: 150 + (i * 2) [21級=172, 30級=190]
                        const attack = i <= 20 ? (110 + i * 3) : (150 + i * 2);

                        // 3. 熟練度規律: 每 3 級增加 5% (起始 15%)
                        const mastery = 10 + Math.ceil(i / 3) * 5;

                        // 4. 連鎖數目: 階梯式增加 (2 -> 3 -> 4 -> 5 -> 6)
                        let count;
                        if (i <= 6) count = 2;
                        else if (i <= 12) count = 3;
                        else if (i <= 18) count = 4;
                        else if (i <= 24) count = 5;
                        else count = 6;

                        const effect = `消耗MP: ${mp}, 攻擊力: ${attack}, 熟練度: ${mastery}%, 連鎖數目: ${count}`;

                        return {
                            effect: effect,
                            fullDescription: `對單體怪物施加強力的攻擊，隨之對周圍目標導電。等級${i}效果：${effect}。`
                        };
                    })
                }],
            "超技能": [],
            "5轉技能": [],
            "共通技能": []
        }
    },
    "英雄 (Hero)": {
        emblemUrl: 'emblems/Hero.png',
        startingLevelForSp: 10, // 劍士系通常10等轉職
        jobAdvancementSpBonuses: [10, 30, 70, 120],
        jobStagesOrder: ["0轉 (新手)", "1轉 (劍士)", "2轉 (狂戰士)", "3轉 (十字軍)", "4轉 (英雄)", "超技能", "5轉技能", "共通技能"],
        spRequiredFor2ndJob: 61, // 其他職業2轉點數需求
        spRequiredFor3rdJob: 182, // 其他職業3轉點數需求
        spRequiredFor4thJob: 333, // 4轉通用點數需求        
        skills: {
            "0轉 (新手)": [],
            "1轉 (劍士)": [
                {
                    id: "hpRecovery",
                    name: "生命淨化",
                    maxLevel: 16,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "自我恢复时能回复更多HP。移動中可恢復",
                    imageUrl: "images/hpRecovery.png",
                    levels: Array(17).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `回復量: ${i * 3}`,
                        fullDescription: `自我恢復時能回復更多HP。移動中可恢復。等級${i}效果：回復量${i * 3}。`
                    })
                },
                {
                    id: "hpBoost",
                    name: "生命擴展",
                    maxLevel: 10,
                    requiredLevel: 10,
                    preRequisite: { "hpRecovery": 5 },
                    description: "等級上升或使用升級點(AP)數增加HP的增血量。",
                    imageUrl: "images/hpBoost.png",
                    levels: Array(11).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `升級血量: ${i * 4}`,
                        fullDescription: `等級上升或使用升級點(AP)數增加HP的增血量。等級${i}效果：升級血量${i * 4}。`
                    })
                },
                {
                    id: "hpRestore",
                    name: "生命恢復",
                    maxLevel: 8,
                    requiredLevel: 10,
                    preRequisite: { "hpRecovery": 5, "hpBoost": 3 },
                    description: "提升自我恢復HP。可與生命淨化疊加。",
                    imageUrl: "images/hpRestore.png",
                    levels: Array(9).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `HP追加恢復: ${i * 4}`,
                        fullDescription: `提升自我恢復HP。可與生命淨化疊加。等級${i}效果：HP追加恢復${i * 4}。`
                    })
                },
                {
                    "id": "ironBody",
                    "name": "自身強化",
                    "maxLevel": 20,
                    "requiredLevel": 10,
                    "preRequisite": { "hpRecovery": 5, "hpBoost": 3, "hpRestore": 3 },
                    "description": "一定時間內增加物理防禦力。",
                    "imageUrl": "images/ironBody.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, defense, moveSpeed, duration;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        mpCost = i <= 10 ? 8 : (i === 20 ? 15 : 10);

                        // 防禦力 的規律：線性
                        defense = i * 2;

                        // 移動速度 的規律
                        moveSpeed = Math.ceil(i / 2);
                        if (i > 18) moveSpeed = 10;

                        // 持續時間 的精確數值
                        const durations = [null, 75, 85, 95, 105, 120, 130, 140, 155, 165, 175, 190, 200, 215, 225, 240, 250, 265, 275, 290, 300];
                        duration = durations[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 防禦力: ${defense}, 移動速度: ${moveSpeed}, 持續時間: ${duration}秒`,
                            fullDescription: `一定時間內增加物理防禦力。等級${i}效果：消耗MP${mpCost}，防禦力${defense}，移動速度${moveSpeed}，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "slashBlast",
                    name: "魔天一擊",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "消耗MP，給予怪物強力一擊。",
                    imageUrl: "images/slashBlast.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack;
                        if (i === 0) return null;
                        const mpCosts = [null, 4, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12];
                        const attacks = [null, 114, 120, 126, 132, 142, 148, 154, 164, 170, 180, 186, 196, 202, 212, 218, 228, 234, 244, 250, 260];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `消耗MP，給予怪物強力一擊。等級${i}效果：消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "powerStrike",
                    name: "劍氣縱橫",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: { "slashBlast": 1 },
                    description: "消耗HP和MP，同時攻擊周遭的多個怪物。",
                    imageUrl: "images/powerStrike.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let hp, mp, attack;
                        if (i === 0) return null;
                        const hpCosts = [null, 8, 8, 8, 8, 9, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16];
                        const mpCosts = [null, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14];
                        const attacks = [null, 57, 60, 63, 66, 71, 74, 77, 85, 88, 93, 96, 101, 104, 109, 112, 117, 120, 122, 125, 130];
                        hp = hpCosts[i];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗HP: ${hp}, 消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `消耗HP和MP，同時攻擊周遭的多個怪物。等級${i}效果：消耗HP${hp}，消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                }
            ],
            "2轉 (狂戰士)": [
                {
                    id: "swordMastery",
                    name: "精準之劍",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "提升劍系武器的命中率及熟練度，此技能必須是使用單手劍或雙手劍的情況下，才能發揮作用。",
                    imageUrl: "images/swordMastery.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let hitRate, mastery;
                        if (i === 0) return null;
                        const hitRates = [null, 1, 2, 3, 4, 5, 6, 6, 8, 8, 10, 10, 12, 12, 14, 14, 16, 16, 18, 19, 20];
                        const masteries = [null, 15, 15, 20, 20, 25, 25, 25, 30, 30, 35, 35, 40, 40, 45, 45, 50, 50, 55, 60, 60];
                        hitRate = hitRates[i];
                        mastery = masteries[i];
                        return {
                            effect: `命中率: ${hitRate}, 熟練度: ${mastery}%`,
                            fullDescription: `提升劍系武器的命中率及熟練度，此技能必須是使用單手劍或雙手劍的情況下，才能發揮作用。等級${i}效果：命中率${hitRate}，熟練度${mastery}%。`
                        };
                    })
                },
                {
                    id: "axeMastery",
                    name: "精準之斧",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "提升斧系武器的命中率及熟練度，此技能必須是使用單手斧或雙手斧的情況下，才會發揮作用。",
                    imageUrl: "images/axeMastery.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let hitRate, mastery;
                        if (i === 0) return null;
                        const hitRates = [null, 1, 2, 3, 4, 5, 6, 6, 8, 8, 10, 10, 12, 12, 14, 14, 16, 16, 18, 19, 20];
                        const masteries = [null, 15, 15, 20, 20, 25, 25, 25, 30, 30, 35, 35, 40, 40, 45, 45, 50, 50, 55, 60, 60];
                        hitRate = hitRates[i];
                        mastery = masteries[i];
                        return {
                            effect: `命中率: ${hitRate}, 熟練度: ${mastery}%`,
                            fullDescription: `提升斧系武器的命中率及熟練度，此技能必須是使用單手斧或雙手斧的情況下，才會發揮作用。等級${i}效果：命中率${hitRate}，熟練度${mastery}%。`
                        };
                    })
                },
                {
                    id: "swordBooster",
                    name: "快速之劍",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: { "swordMastery": 5 },
                    description: "消耗HP與MP，將使用刀劍的攻擊速度，向上提升一個等級。此技能必須是使用單手劍或雙手劍的情況下，才能發揮作用。",
                    imageUrl: "images/swordBooster.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, hp, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const hpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];
                        mp = mpCosts[i];
                        hp = hpCosts[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 消耗HP: ${hp}, 持續時間: ${duration}秒`,
                            fullDescription: `消耗HP與MP，將使用刀劍的攻擊速度，向上提升一個等級。此技能必須是使用單手劍或雙手劍的情況下，才能發揮作用。等級${i}效果：消耗MP${mp}，消耗HP${hp}，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "axeBooster",
                    name: "快速之斧",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: { "axeMastery": 5 },
                    description: "消耗HP與MP，將使用斧頭的攻擊速度，向上提升一個等級。此技能必須是使用單手斧或雙手斧的情況下，才能發揮作用。",
                    imageUrl: "images/axeBooster.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, hp, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const hpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];
                        mp = mpCosts[i];
                        hp = hpCosts[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 消耗HP: ${hp}, 持續時間: ${duration}秒`,
                            fullDescription: `消耗HP與MP，將使用斧頭的攻擊速度，向上提升一個等級。此技能必須是使用單手斧或雙手斧的情況下，才能發揮作用。等級${i}效果：消耗MP${mp}，消耗HP${hp}，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "finalAttackSword",
                    name: "終極之劍",
                    maxLevel: 30,
                    requiredLevel: 30,
                    preRequisite: { "swordMastery": 3 },
                    description: "按照一定機率，在使用攻擊技能後發動連續攻擊。此技能必須是使用單手劍或雙手劍的情況下，才能發揮作用。",
                    imageUrl: "images/finalAttackSword.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let procRate, attack;
                        if (i === 0) return null;
                        const procRates = [null, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60];
                        const attacks = [null, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 10, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250]; // Level 18 attack is 10% as provided
                        procRate = procRates[i];
                        attack = attacks[i];
                        return {
                            effect: `發動率: ${procRate}%, 攻擊力: ${attack}%`,
                            fullDescription: `按照一定機率，在使用攻擊技能後發動連續攻擊。此技能必須是使用單手劍或雙手劍的情況下，才能發揮作用。等級${i}效果：發動率${procRate}%，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "finalAttackAxe",
                    name: "終極之斧",
                    maxLevel: 30,
                    requiredLevel: 30,
                    preRequisite: { "axeMastery": 3 },
                    description: "按照一定機率，在使用攻擊技能後發動連續攻擊。此技能必須是使用單手斧或雙手斧的情況下，才能發揮作用。",
                    imageUrl: "images/finalAttackAxe.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let procRate, attack;
                        if (i === 0) return null;
                        const procRates = [null, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60];
                        const attacks = [null, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 10, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250]; // Level 18 attack is 10% as provided
                        procRate = procRates[i];
                        attack = attacks[i];
                        return {
                            effect: `發動率: ${procRate}%, 攻擊力: ${attack}%`,
                            fullDescription: `按照一定機率，在使用攻擊技能後發動連續攻擊。此技能必須是使用單手斧或雙手斧的情況下，才能發揮作用。等級${i}效果：發動率${procRate}%，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    "id": "rage",
                    "name": "激勵",
                    "maxLevel": 20,
                    "requiredLevel": 30,
                    "preRequisite": {},
                    "description": "在一定時間內，提升周圍組員的物理攻擊力，但物理防禦力會相對下降。",
                    "imageUrl": "images/rage.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, pAttack, pDef, duration;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        // 1-10級: 12
                        // 11-20級: 20
                        if (i >= 1 && i <= 10) {
                            mpCost = 12;
                        } else if (i >= 11 && i <= 20) {
                            mpCost = 20;
                        }

                        // 物理攻擊 和 物理防禦 的規律：
                        // 攻擊力從1到10，防禦力從-1到-10
                        // 1-10級: 攻擊力 i/2 (向下取整再根據數據調整), 防禦力 -i/2 (向下取整再根據數據調整)
                        // 11-20級: 攻擊力從6到10，防禦力從-6到-10 (根據數據)
                        // 這裡直接使用數據中觀察到的線性關係
                        pAttack = Math.floor((i + 1) / 2); // 攻擊力
                        if (i % 2 === 0) pAttack = Math.floor(i / 2); // 為了讓1,2級都為1，3,4級都為2，etc.
                        if (i >= 1 && i <= 10) {
                            pAttack = Math.ceil(i / 2); // 1,1,2,2,3,3,4,4,5,5
                        } else { // i >= 11
                            pAttack = Math.ceil((i - 10) / 2) + 5; // 從6開始
                        }
                        // 根據提供的數據硬編碼攻擊力和防禦力，以確保精確性
                        const pAttacksRaw = [null, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
                        pAttack = pAttacksRaw[i];
                        pDef = -pAttack; // 物理防禦是物理攻擊力的負數

                        // 持續時間 的規律：每級加10秒
                        duration = i * 10 + 100; // 等級1是110秒，所以是 (100 + 10)

                        return {
                            effect: `消耗MP: ${mpCost}, 物理攻擊: ${pAttack}, 物理防禦: ${pDef}, 持續時間: ${duration}秒`,
                            fullDescription: `在一定時間內，提升周圍組員的物理攻擊力，但物理防禦力會相對下降。等級${i}效果：消耗MP${mpCost}，物理攻擊${pAttack}，物理防禦${pDef}，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    "id": "powerReflection",
                    "name": "反射之盾",
                    "maxLevel": 30,
                    "requiredLevel": 30,
                    "preRequisite": {},
                    "description": "將怪物對自身傷害的一定量回饋給怪物，但所能轉移給怪物的傷害，以怪物的最大HP10%為限度。",
                    "imageUrl": "images/powerReflection.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, counterRate, duration;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        if (i >= 1 && i <= 15) {
                            mpCost = 15;
                        } else { // i >= 16
                            mpCost = 50;
                        }

                        // 反擊率 的規律：線性增加 (11% 到 40%) => 10 + i
                        counterRate = 10 + i;

                        // 持續時間 的規律：多段線性
                        if (i >= 1 && i <= 15) {
                            duration = i * 3;
                        } else if (i >= 16 && i <= 20) {
                            duration = 45 + (i - 15) * 3; // 從15級的45秒開始計算
                        } else if (i >= 21 && i <= 28) {
                            duration = 60 + (i - 20) * 30; // 20級是60秒，21級跳到90秒，每級加30秒
                        } else { // i >= 29
                            duration = 300; // 29和30級固定300秒
                        }

                        return {
                            effect: `消耗MP: ${mpCost}, 反擊率: ${counterRate}%, 持續時間: ${duration}秒`,
                            fullDescription: `將怪物對自身傷害的一定量回饋給怪物，但所能轉移給怪物的傷害，以怪物的最大HP10%為限度。等級${i}效果：消耗MP${mpCost}，反擊率${counterRate}%，持續${duration}秒。`
                        };
                    })
                }
            ],
            "3轉 (十字軍)": [
                {
                    id: "mpRecoveryHero",
                    name: "魔力恢復",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "增加每10秒的MP恢復量。",
                    imageUrl: "images/mpRecoveryHero.png",
                    levels: Array(21).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `回復量: ${i * 2}`,
                        fullDescription: `增加每10秒的MP恢復量。等級${i}效果：回復量${i * 2}。`
                    })
                },
                {
                    id: "shieldMastery",
                    name: "盾防精通",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "提升所佩帶的盾牌的防禦力，若未佩帶盾牌便不會產生效果。",
                    imageUrl: "images/shieldMastery.png",
                    levels: Array(21).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `盾牌防禦: ${100 + i * 5}%`,
                        fullDescription: `提升所佩帶的盾牌的防禦力，若未佩帶盾牌便不會產生效果。等級${i}效果：盾牌防禦${100 + i * 5}%。`
                    })
                },
                {
                    id: "combatMastery",
                    name: "鬥氣集中",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "集中全身的鬥氣，使角色成為可集中鬥氣的狀態，每次進行攻擊時便會提升鬥氣，最多可集中到5個鬥氣，鬥氣集中後可大幅提升一般攻擊與技能攻擊的殺傷力，並且可消耗全部鬥氣施展黑暗之劍與氣絕劍。",
                    imageUrl: "images/combatMastery.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, attack, comboCount, duration;
                        if (i === 0) return null;
                        mp = i <= 10 ? 25 : (i <= 20 ? 30 : 35);
                        attack = 100 + i * 4; // Simplified
                        comboCount = i <= 10 ? 3 : (i <= 20 ? 4 : 5);
                        duration = 100 + (i > 5 ? Math.floor((i - 1) / 5) * 20 : 0); // Simplified
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 連擊數量: ${comboCount}, 持續時間: ${duration}秒`,
                            fullDescription: `集中全身的鬥氣，使角色成為可集中鬥氣的狀態，每次進行攻擊時便會提升鬥氣，最多可集中到5個鬥氣，鬥氣集中後可大幅提升一般攻擊與技能攻擊的殺傷力，並且可消耗全部鬥氣施展黑暗之劍與氣絕劍。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，連擊數量${comboCount}，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    id: "brandishSword",
                    name: "黑暗之劍",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "對單一敵人發動黑暗狀態攻擊，但必須裝備劍，且需處於鬥氣集中的狀態下才能使用。",
                    imageUrl: "images/brandishSword.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, attack, darkChance;
                        if (i === 0) return null;
                        mp = i <= 10 ? 10 : (i <= 20 ? 17 : 24);
                        attack = 149 + i * 7; // Simplified
                        darkChance = 30 + i * 2; // Simplified
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 黑暗機率: ${darkChance}%`,
                            fullDescription: `對單一敵人發動黑暗狀態攻擊，但必須裝備劍，且需處於鬥氣集中的狀態下才能使用。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，黑暗機率${darkChance}%。`
                        };
                    })
                },
                {
                    id: "brandishAxe",
                    name: "黑暗之斧",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "對單一敵人發動黑暗狀態攻擊，但必須裝備斧，且需處於鬥氣集中的狀態下才能使用。",
                    imageUrl: "images/brandishAxe.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, attack, darkChance;
                        if (i === 0) return null;
                        mp = i <= 10 ? 10 : (i <= 20 ? 17 : 24);
                        attack = 149 + i * 7; // Simplified
                        darkChance = 30 + i * 2; // Simplified
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 黑暗機率: ${darkChance}%`,
                            fullDescription: `對單一敵人發動黑暗狀態攻擊，但必須裝備斧，且需處於鬥氣集中的狀態下才能使用。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，黑暗機率${darkChance}%。`
                        };
                    })
                },
                {
                    id: "panicSword",
                    name: "氣絕劍",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "對週遭怪物發動攻擊使對方昏迷，但必須裝備劍，且需處於鬥氣集中的狀態下才能使用。",
                    imageUrl: "images/panicSword.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let hp, mp, attack, stunChance;
                        if (i === 0) return null;
                        hp = i <= 10 ? 15 : (i <= 20 ? 20 : 25);
                        mp = i <= 10 ? 12 : (i <= 20 ? 17 : 26);
                        attack = 80 + i * 4; // Simplified
                        stunChance = 30 + i * 2; // Simplified
                        return {
                            effect: `消耗HP: ${hp}, 消耗MP: ${mp}, 攻擊力: ${attack}%, 昏迷機率: ${stunChance}%`,
                            fullDescription: `對週遭怪物發動攻擊使對方昏迷，但必須裝備劍，且需處於鬥氣集中的狀態下才能使用。等級${i}效果：消耗HP${hp}，消耗MP${mp}，攻擊力${attack}%，昏迷機率${stunChance}%。`
                        };
                    })
                },
                {
                    id: "panicAxe",
                    name: "氣絕斧",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "對週遭怪物發動攻擊使對方昏迷，但必須裝備斧，且需處於鬥氣集中的狀態下才能使用。",
                    imageUrl: "images/panicAxe.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let hp, mp, attack, stunChance;
                        if (i === 0) return null;
                        hp = i <= 10 ? 15 : (i <= 20 ? 20 : 25);
                        mp = i <= 10 ? 12 : (i <= 20 ? 17 : 26);
                        attack = 80 + i * 4; // Simplified
                        stunChance = 30 + i * 2; // Simplified
                        return {
                            effect: `消耗HP: ${hp}, 消耗MP: ${mp}, 攻擊力: ${attack}%, 昏迷機率: ${stunChance}%`,
                            fullDescription: `對週遭怪物發動攻擊使對方昏迷，但必須裝備斧，且需處於鬥氣集中的狀態下才能使用。等級${i}效果：消耗HP${hp}，消耗MP${mp}，攻擊力${attack}%，昏迷機率${stunChance}%。`
                        };
                    })
                },
                {
                    id: "tigerOfFury",
                    name: "虎咆哮",
                    maxLevel: 30,
                    requiredLevel: 70, // 通常為三轉技能
                    preRequisite: {},
                    description: "對周邊怪物發出虎吼並加以給予傷害，同時並以一定機率使其昏迷。該技能一次最多僅能攻擊6隻怪物。",
                    imageUrl: "images/tigerOfFury.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 1-10級:8, 11-20級:12, 21-30級:16
                        const mp = i <= 10 ? 8 : i <= 20 ? 12 : 16;

                        // 2. 昏迷機率: 1-10級每級+2% (52%~70%), 11-30級每級+1% (72%~95% 但15級後微調)
                        // 根據數據表精確邏輯：
                        let stunChance;
                        if (i <= 10) stunChance = 50 + (i * 2);
                        else if (i <= 15) stunChance = 50 + (i * 2); // 11-15 延續 +2 邏輯到 80%
                        else stunChance = 65 + i; // 16級(81%)到30級(95%)

                        // 3. 攻擊力: 1-10級每級+1%, 11-30每2級+1%
                        const attack = 10 + Math.ceil(i / 1.5); // 此公式近似數據跳動點
                        // 為求精確，使用階梯判定：
                        let atk;
                        if (i <= 10) atk = 10 + i;
                        else atk = 15 + Math.ceil(i / 2);

                        // 4. 持續時間: 每 5 級增加 1 秒 (起始 5秒)
                        const duration = 4 + Math.ceil(i / 5);

                        // 5. 攻擊範圍: 起始 110%，每 3-4 級增加 10%
                        const range = 100 + Math.floor((i + 2) / 3) * 10;

                        const effect = `消耗MP: ${mp}, 昏迷機率: ${stunChance}%, 攻擊力: ${atk}%, 持續時間: ${duration}秒, 攻擊範圍: ${range}%`;

                        return {
                            effect: effect,
                            fullDescription: `對周邊怪物發出虎吼並加以給予傷害。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "guardCancel",
                    name: "防禦消除",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: { "shout": 3 },
                    description: "無視怪物防禦力5%。",
                    imageUrl: "images/guardCancel.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP規律
                        // 1-10級: 37 - (i * 2)
                        // 11-19級: 27 - i
                        // 20級: 35 (突然跳回)
                        let mp;
                        if (i === 20) {
                            mp = 35;
                        } else if (i <= 10) {
                            mp = 37 - (i * 2);
                        } else {
                            mp = 27 - i;
                        }

                        // 2. 持續時間規律
                        // 1-10級: i * 10
                        // 11-20級: 100 + (i - 10) * 20
                        const duration = i <= 10 ? (i * 10) : (100 + (i - 10) * 20);

                        // 3. 無視怪物防禦力: 每 2 級增加 0.5%
                        const ignoreDef = (Math.ceil(i / 2) * 0.5).toFixed(1);

                        const effect = `消耗MP: ${mp}, 持續時間: ${duration}秒, 無視怪物防禦力: ${ignoreDef}%`;

                        return {
                            effect: effect,
                            fullDescription: `無視怪物防禦力5%。等級${i}效果：${effect}。`
                        };
                    })
                }
            ],
            "4轉 (英雄)": [
                {
                    id: "mapleWarrior",
                    name: "楓葉祝福",
                    maxLevel: 30,
                    requiredLevel: 120, // 楓葉祝福通常無等級限制，可根據需求自行修改
                    preRequisite: {},
                    description: "全職業的共通技能，一定時間內全能力(力量、敏捷、智力、幸運)增加固定%數。",
                    imageUrl: "images/mapleWarrior.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 10, 持續時間: 30秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級1效果：消耗MP 10，持續時間 30秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 60秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級2效果：消耗MP 10，持續時間 60秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 90秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級3效果：消耗MP 10，持續時間 90秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 120秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級4效果：消耗MP 10，持續時間 120秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 150秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級5效果：消耗MP 10，持續時間 150秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 180秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級6效果：消耗MP 20，持續時間 180秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 210秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級7效果：消耗MP 20，持續時間 210秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 240秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級8效果：消耗MP 20，持續時間 240秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 270秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級9效果：消耗MP 20，持續時間 270秒，全能力增加 5%。" },
                        { effect: "消耗MP: 20, 持續時間: 300秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級10效果：消耗MP 20，持續時間 300秒，全能力增加 5%。" },
                        { effect: "消耗MP: 30, 持續時間: 330秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級11效果：消耗MP 30，持續時間 330秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 360秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級12效果：消耗MP 30，持續時間 360秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 390秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級13效果：消耗MP 30，持續時間 390秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 420秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級14效果：消耗MP 30，持續時間 420秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 450秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級15效果：消耗MP 30，持續時間 450秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 480秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級16效果：消耗MP 40，持續時間 480秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 510秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級17效果：消耗MP 40，持續時間 510秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 540秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級18效果：消耗MP 40，持續時間 540秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 570秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級19效果：消耗MP 40，持續時間 570秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 600秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級20效果：消耗MP 40，持續時間 600秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 630秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級21效果：消耗MP 40，持續時間 630秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 660秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級22效果：消耗MP 40，持續時間 660秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 690秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級23效果：消耗MP 40，持續時間 690秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 720秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級24效果：消耗MP 40，持續時間 720秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 750秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級25效果：消耗MP 40，持續時間 750秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 780秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級26效果：消耗MP 40，持續時間 780秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 810秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級27效果：消耗MP 40，持續時間 810秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 840秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級28效果：消耗MP 40，持續時間 840秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 870秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級29效果：消耗MP 40，持續時間 870秒，全能力增加 15%。" },
                        { effect: "消耗MP: 40, 持續時間: 900秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級30效果：消耗MP 40，持續時間 900秒，全能力增加 15%。" }
                    ]
                },
                {
                    id: "heroesWill",
                    name: "楓葉淨化",
                    maxLevel: 1,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。",
                    imageUrl: "images/heroesWill.png",
                    levels: [
                        null,
                        {
                            effect: "消耗MP: 30, 冷卻時間: 600秒",
                            fullDescription: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。等級1效果：消耗MP 30，冷卻時間 600秒。"
                        }
                    ]
                },
                {
                    id: "sturdyArmor",
                    name: "武神防禦",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "強化自身的物理防禦",
                    imageUrl: "images/sturdyArmor.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let damageReduction;
                        if (i === 0) return null;
                        // 物理傷害 的規律
                        damageReduction = 0 - i * 0.5; // 每級-0.5%
                        return {
                            effect: `物理傷害: ${damageReduction}%`,
                            fullDescription: `強化自身的物理防禦。等級${i}效果：物理傷害${damageReduction}%。`
                        };
                    })
                },
                {
    id: "powerGuard",
    name: "格擋",
    maxLevel: 30,
    requiredLevel: 120,
    preRequisite: {},
    description: "一定時間內受到怪物攻擊，有一定的機率不會被擊退。",
    imageUrl: "images/powerGuard.png",
    levels: Array(31).fill(null).map((_, i) => {
        if (i === 0) return null;

        // 1. 消耗MP: 1-20級採階梯成長，21級起固定為 50
        const mpCosts = [
            null,
            30, 30, 30, 30, 30, // 1-5
            36, 36, 36, 36, 36, // 6-10
            42, 42, 42, 42, 42, // 11-15
            48, 48, 48, 48, 48, // 16-20
            50, 50, 50, 50, 50, // 21-25
            50, 50, 50, 50, 50  // 26-30
        ];

        // 2. 持續時間: i * 10 秒 (10秒 ~ 300秒)
        const duration = i * 10;

        // 3. 不退後機率: 30 + (i * 2) (32% ~ 90%)
        const chance = 30 + (i * 2);

        const mp = mpCosts[i];

        return {
            effect: `消耗MP: ${mp}, 持續時間: ${duration}秒, 不退後機率: ${chance}%`,
            fullDescription: `受到怪物攻擊時，有一定的機率不被擊退。等級${i}效果：持續${duration}秒，機率${chance}%。`
        };
    })
},
                {
                    id: "absolutecity",
                    name: "絕對引力",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "遠距離的怪物在一定的範圍內，會受到磁鐵的吸力而吸引過來。",
                    imageUrl: "images/absolutecity.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP規律: 階梯式 (10 -> 13 -> 18 -> 21 -> 25)
                        let mp;
                        if (i <= 5) mp = 10;
                        else if (i <= 10) mp = 13;
                        else if (i <= 15) mp = 18;
                        else if (i <= 20) mp = 21;
                        else mp = 25;

                        // 2. 範圍規律: 階梯式 (100 -> 150 -> 250)
                        let range;
                        if (i <= 10) range = 100;
                        else if (i <= 20) range = 150;
                        else range = 250;

                        // 3. 成功率: 起始 40%，每級增加 2%
                        const successRate = 40 + (i * 2);

                        const effect = `消耗MP: ${mp}, 範圍: ${range}, 成功率: ${successRate}%`;

                        return {
                            effect: effect,
                            fullDescription: `遠距離的怪物在一定的範圍內，會受到磁鐵的吸力而吸引過來。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "ultimateShield",
                    name: "究極神盾",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "在裝備盾牌的情況下，有一定的機率在敵人近距離的物理攻擊(接觸)時，把敵人擊退，擊退後會有2秒的無敵時間。",
                    imageUrl: "images/ultimateShield.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let procChance;
                        if (i === 0) return null;
                        // 擊退機率 的規律
                        damageReduction = i * 0.5; // 每級加0.5%
                        return {
                            effect: `擊退機率: ${damageReduction}%`,
                            fullDescription: `在裝備盾牌的情況下，有一定的機率在敵人近距離的物理攻擊(接觸)時，把敵人擊退，擊退後會有2秒的無敵時間。等級${i}效果：擊退機率${damageReduction}%。`
                        };
                    })
                },
                {
                    id: "ultimateSpear",
                    name: "究極突刺",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "向前方的敵人進行突刺攻擊，可一次攻擊15名敵人，玩家使用突刺攻擊，會穿越敵人的身體。(無怪物時仍可移動的效果)",
                    imageUrl: "images/ultimateSpear.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mpCost, attack, range;
                        if (i === 0) return null;
                        const mpCosts = [null, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50]; // 精確數值
                        const attacks = [null, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130]; // 精確數值
                        const ranges = [null, 80, 80, 80, 85, 85, 85, 90, 90, 90, 95, 95, 95, 100, 100, 100, 105, 105, 105, 110, 110, 110, 115, 115, 115, 120, 120, 120, 125, 125, 125]; // 精確數值
                        mpCost = mpCosts[i];
                        attack = attacks[i];
                        range = ranges[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 威力: ${attack}%, 範圍: ${range}`,
                            fullDescription: `向前方的敵人進行突刺攻擊，可一次攻擊15名敵人，玩家使用突刺攻擊，會穿越敵人的身體。(無怪物時仍可移動的效果)等級${i}效果：消耗MP${mpCost}，威力${attack}%，範圍${range}。`
                        };
                    })
                },
                {
                    id: "advancedCombatMastery",
                    name: "進階鬥氣",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: { "combatMastery": 30 },
                    description: "最大鬥氣提升至10，並有一定機率一次累積兩個鬥氣，需先經通鬥氣集中才能學習此技能。",
                    imageUrl: "images/advancedCombatMastery.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 回復量: 與等級同步 (1級=1, 30級=30)
                        const recovery = i;

                        // 2. 鬥氣最大數: 階梯式增加 (1 -> 2 -> 3 -> 4 -> 5)
                        // 規律：1-6級=1, 7-12級=2, 13-18級=3, 19-24級=4, 25-30級=5
                        const maxComboExtra = Math.ceil(i / 6);

                        // 3. 自動填充機率: 起始 30%，每級增加 1%
                        const autoFillChance = 30 + i;

                        const effect = `回復量: ${recovery}, 鬥氣最大數: ${maxComboExtra}, 自動填充機率: ${autoFillChance}%`;

                        return {
                            effect: effect,
                            fullDescription: `最大鬥氣提升至10，並有一定機率一次累積兩個鬥氣。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "berserk",
                    name: "鬥氣爆發",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "使用10個氣球，一定時間內使攻擊力上升，施放間隔時間為6分鐘。",
                    imageUrl: "images/berserk.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 10 + i (1級=11, 30級=40)
                        const mp = 10 + i;

                        // 2. 持續時間規律:
                        // 1-21級: i * 10
                        // 22-27級: 210 + (i-21) * 5
                        // 28-30級: 固定 240
                        let duration;
                        if (i <= 21) {
                            duration = i * 10;
                        } else if (i <= 27) {
                            duration = 210 + (i - 21) * 5;
                        } else {
                            duration = 240;
                        }

                        // 3. 攻擊力規律: 起始 10, 每 2 級增加 1 (1級=11, 2級=12, 30級=26)
                        const attack = 10 + Math.ceil(i / 2) + (i % 2 === 1 ? 0 : 0);
                        // 簡單公式化：10 + Math.floor(i / 2) + 1
                        const atkValue = 10 + Math.ceil(i / 2);

                        const effect = `消耗MP: ${mp}, 持續時間: ${duration}秒, 攻擊力: ${atkValue}`;

                        return {
                            effect: effect,
                            fullDescription: `使用10個氣球，一定時間內使攻擊力上升。等級${i}效果：${effect}。施放間隔時間為6分鐘。`
                        };
                    })
                },
                {
                    id: "monsterMagnet",
                    name: "無雙劍舞",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "在範圍內(150)瞬間攻擊敵人2下，最多3名敵人。",
                    imageUrl: "images/monsterMagnet.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP規律
                        // 1-10級: 16
                        // 11-20級: 24
                        // 21-25級: 30
                        // 26-30級: 每級遞減 1 (29, 28, 27, 26, 25)
                        let mp;
                        if (i <= 10) mp = 16;
                        else if (i <= 20) mp = 24;
                        else if (i <= 25) mp = 30;
                        else mp = 30 - (i - 25);

                        // 2. 攻擊力規律
                        // 1-10級: 130 + (i * 5)
                        // 11-20級: 140 + (i * 4) [11級=184, 20級=220]
                        // 21-30級: 140 + (i * 4) [21級=224, 30級=260] (維持+4%成長)
                        const attack = i <= 10 ? (130 + i * 5) : (140 + i * 4);

                        // 3. 敵人數量: 每 10 級增加 1 (1-10=1, 11-20=2, 21-30=3)
                        const targetCount = Math.ceil(i / 10);

                        const effect = `消耗MP: ${mp}, 攻擊力: ${attack}%, 敵人數量: ${targetCount}`;

                        return {
                            effect: effect,
                            fullDescription: `在範圍內(150)瞬間攻擊敵人2下，最多3名敵人。等級${i}效果：${effect}。`
                        };
                    })
                }
            ],
            "超技能": [],
            "5轉技能": [],
            "共通技能": []
        }
    },
    "聖騎士 (Paladin)": {
        emblemUrl: 'emblems/Paladin.png',
        startingLevelForSp: 10, // 劍士系通常10等轉職
        jobAdvancementSpBonuses: [10, 30, 70, 120],
        jobStagesOrder: ["0轉 (新手)", "1轉 (劍士)", "2轉 (見習騎士)", "3轉 (騎士)", "4轉 (聖騎士)", "超技能", "5轉技能", "共通技能"],
        spRequiredFor2ndJob: 61, // 其他職業2轉點數需求
        spRequiredFor3rdJob: 182, // 其他職業3轉點數需求
        spRequiredFor4thJob: 333, // 4轉通用點數需求            
        skills: {
            "0轉 (新手)": [],
            "1轉 (劍士)": [
                {
                    id: "hpRecovery",
                    name: "生命淨化",
                    maxLevel: 16,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "自我恢复时能回复更多HP。移動中可恢復",
                    imageUrl: "images/hpRecovery.png",
                    levels: Array(17).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `回復量: ${i * 3}`,
                        fullDescription: `自我恢復時能回復更多HP。移動中可恢復。等級${i}效果：回復量${i * 3}。`
                    })
                },
                {
                    id: "hpBoost",
                    name: "生命擴展",
                    maxLevel: 10,
                    requiredLevel: 10,
                    preRequisite: { "hpRecovery": 5 },
                    description: "等級上升或使用升級點(AP)數增加HP的增血量。",
                    imageUrl: "images/hpBoost.png",
                    levels: Array(11).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `升級血量: ${i * 4}`,
                        fullDescription: `等級上升或使用升級點(AP)數增加HP的增血量。等級${i}效果：升級血量${i * 4}。`
                    })
                },
                {
                    id: "hpRestore",
                    name: "生命恢復",
                    maxLevel: 8,
                    requiredLevel: 10,
                    preRequisite: { "hpRecovery": 5, "hpBoost": 3 },
                    description: "提升自我恢復HP。可與生命淨化疊加。",
                    imageUrl: "images/hpRestore.png",
                    levels: Array(9).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `HP追加恢復: ${i * 4}`,
                        fullDescription: `提升自我恢復HP。可與生命淨化疊加。等級${i}效果：HP追加恢復${i * 4}。`
                    })
                },
                {
                    "id": "ironBody",
                    "name": "自身強化",
                    "maxLevel": 20,
                    "requiredLevel": 10,
                    "preRequisite": { "hpRecovery": 5, "hpBoost": 3, "hpRestore": 3 },
                    "description": "一定時間內增加物理防禦力。",
                    "imageUrl": "images/ironBody.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, defense, moveSpeed, duration;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        mpCost = i <= 10 ? 8 : (i === 20 ? 15 : 10);

                        // 防禦力 的規律：線性
                        defense = i * 2;

                        // 移動速度 的規律
                        moveSpeed = Math.ceil(i / 2);
                        if (i > 18) moveSpeed = 10;

                        // 持續時間 的精確數值
                        const durations = [null, 75, 85, 95, 105, 120, 130, 140, 155, 165, 175, 190, 200, 215, 225, 240, 250, 265, 275, 290, 300];
                        duration = durations[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 防禦力: ${defense}, 移動速度: ${moveSpeed}, 持續時間: ${duration}秒`,
                            fullDescription: `一定時間內增加物理防禦力。等級${i}效果：消耗MP${mpCost}，防禦力${defense}，移動速度${moveSpeed}，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "slashBlast",
                    name: "魔天一擊",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "消耗MP，給予怪物強力一擊。",
                    imageUrl: "images/slashBlast.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack;
                        if (i === 0) return null;
                        const mpCosts = [null, 4, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12];
                        const attacks = [null, 114, 120, 126, 132, 142, 148, 154, 164, 170, 180, 186, 196, 202, 212, 218, 228, 234, 244, 250, 260];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `消耗MP，給予怪物強力一擊。等級${i}效果：消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "powerStrike",
                    name: "劍氣縱橫",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: { "slashBlast": 1 },
                    description: "消耗HP和MP，同時攻擊周遭的多個怪物。",
                    imageUrl: "images/powerStrike.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let hp, mp, attack;
                        if (i === 0) return null;
                        const hpCosts = [null, 8, 8, 8, 8, 9, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16];
                        const mpCosts = [null, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14];
                        const attacks = [null, 57, 60, 63, 66, 71, 74, 77, 85, 88, 93, 96, 101, 104, 109, 112, 117, 120, 122, 125, 130];
                        hp = hpCosts[i];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗HP: ${hp}, 消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `消耗HP和MP，同時攻擊周遭的多個怪物。等級${i}效果：消耗HP${hp}，消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                }
            ],
            "2轉 (見習騎士)": [
                {
                    id: "swordMastery",
                    name: "精準之劍",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "提升劍系武器的命中率及熟練度，此技能必須是使用單手劍或雙手劍的情況下，才能發揮作用。",
                    imageUrl: "images/swordMastery.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let hitRate, mastery;
                        if (i === 0) return null;
                        const hitRates = [null, 1, 2, 3, 4, 5, 6, 6, 8, 8, 10, 10, 12, 12, 14, 14, 16, 16, 18, 19, 20];
                        const masteries = [null, 15, 15, 20, 20, 25, 25, 25, 30, 30, 35, 35, 40, 40, 45, 45, 50, 50, 55, 60, 60];
                        hitRate = hitRates[i];
                        mastery = masteries[i];
                        return {
                            effect: `命中率: ${hitRate}, 熟練度: ${mastery}%`,
                            fullDescription: `提升劍系武器的命中率及熟練度，此技能必須是使用單手劍或雙手劍的情況下，才能發揮作用。等級${i}效果：命中率${hitRate}，熟練度${mastery}%。`
                        };
                    })
                },
                {
                    id: "bluntWeaponMastery",
                    name: "精準之棍",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "提升棍系武器的命中率及熟練度，此技能必須是使用單手棍或雙手棍的情況下，才會發揮作用。",
                    imageUrl: "images/bluntWeaponMastery.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let hitRate, mastery;
                        if (i === 0) return null;
                        const hitRates = [null, 1, 2, 3, 4, 5, 6, 6, 8, 8, 10, 10, 12, 12, 14, 14, 16, 16, 18, 19, 20];
                        const masteries = [null, 15, 15, 20, 20, 25, 25, 25, 30, 30, 35, 35, 40, 40, 45, 45, 50, 50, 55, 60, 60];
                        hitRate = hitRates[i];
                        mastery = masteries[i];
                        return {
                            effect: `命中率: ${hitRate}, 熟練度: ${mastery}%`,
                            fullDescription: `提升棍系武器的命中率及熟練度，此技能必須是使用單手棍或雙手棍的情況下，才會發揮作用。等級${i}效果：命中率${hitRate}，熟練度${mastery}%。`
                        };
                    })
                },
                {
                    id: "swordBooster",
                    name: "快速之劍",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: { "swordMastery": 5 },
                    description: "消耗HP與MP，將使用刀劍的攻擊速度，向上提升一個等級。此技能必須是使用單手劍或雙手劍的情況下，才能發揮作用。",
                    imageUrl: "images/swordBooster.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, hp, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const hpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];
                        mp = mpCosts[i];
                        hp = hpCosts[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 消耗HP: ${hp}, 持續時間: ${duration}秒`,
                            fullDescription: `消耗HP與MP，將使用刀劍的攻擊速度，向上提升一個等級。此技能必須是使用單手劍或雙手劍的情況下，才能發揮作用。等級${i}效果：消耗MP${mp}，消耗HP${hp}，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "bluntWeaponBooster",
                    name: "快速之棍",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: { "bluntWeaponMastery": 5 },
                    description: "消耗HP與MP，將使用棍的攻擊速度，向上提升一個等級。此技能必須是使用單手棍或雙手棍的情況下，才能發揮作用。",
                    imageUrl: "images/bluntWeaponBooster.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, hp, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const hpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];
                        mp = mpCosts[i];
                        hp = hpCosts[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 消耗HP: ${hp}, 持續時間: ${duration}秒`,
                            fullDescription: `消耗HP與MP，將使用棍的攻擊速度，向上提升一個等級。此技能必須是使用單手棍或雙手棍的情況下，才能發揮作用。等級${i}效果：消耗MP${mp}，消耗HP${hp}，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "finalAttackSword",
                    name: "終極之劍",
                    maxLevel: 30,
                    requiredLevel: 30,
                    preRequisite: { "swordMastery": 3 },
                    description: "按照一定機率，在使用攻擊技能後發動連續攻擊。此技能必須是使用單手劍或雙手劍的情況下，才能發揮作用。",
                    imageUrl: "images/finalAttackSword.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let procRate, attack;
                        if (i === 0) return null;
                        const procRates = [null, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60];
                        const attacks = [null, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 10, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250]; // Level 18 attack is 10% as provided
                        procRate = procRates[i];
                        attack = attacks[i];
                        return {
                            effect: `發動率: ${procRate}%, 攻擊力: ${attack}%`,
                            fullDescription: `按照一定機率，在使用攻擊技能後發動連續攻擊。此技能必須是使用單手劍或雙手劍的情況下，才能發揮作用。等級${i}效果：發動率${procRate}%，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "finalAttackBluntWeapon",
                    name: "終極之棍",
                    maxLevel: 30,
                    requiredLevel: 30,
                    preRequisite: { "bluntWeaponMastery": 3 },
                    description: "按照一定機率，在使用攻擊技能後發動連續攻擊。此技能必須是使用單手棍或雙手棍的情況下，才能發揮作用。",
                    imageUrl: "images/finalAttackBluntWeapon.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let procRate, attack;
                        if (i === 0) return null;
                        const procRates = [null, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60];
                        const attacks = [null, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250];
                        procRate = procRates[i];
                        attack = attacks[i];
                        return {
                            effect: `發動率: ${procRate}%, 攻擊力: ${attack}%`,
                            fullDescription: `按照一定機率，在使用攻擊技能後發動連續攻擊。此技能必須是使用單手棍或雙手棍的情況下，才能發揮作用。等級${i}效果：發動率${procRate}%，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "threaten",
                    name: "降魔咒",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "消耗MP而讓周圍的怪物感到壓制感，降低怪物的物理攻擊力與物理防禦力。（適用於BOSS）",
                    imageUrl: "images/threaten.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, pDef, pAttack, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20];
                        const defs = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
                        const attacks = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
                        const durations = [null, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45];
                        mp = mpCosts[i];
                        pDef = defs[i];
                        pAttack = attacks[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 物理防禦: -${pDef}%, 物理攻擊: -${pAttack}%, 持續時間: ${duration}秒`,
                            fullDescription: `消耗MP而讓周圍的怪物感到壓制感，降低怪物的物理攻擊力與物理防禦力。（適用於BOSS）等級${i}效果：消耗MP${mp}，物理防禦-${pDef}%，物理攻擊-${pAttack}%，持續${duration}秒。`
                        };
                    })
                },
                {
                    "id": "powerReflection",
                    "name": "反射之盾",
                    "maxLevel": 30,
                    "requiredLevel": 30,
                    "preRequisite": {},
                    "description": "將怪物對自身傷害的一定量回饋給怪物，但所能轉移給怪物的傷害，以怪物的最大HP10%為限度。",
                    "imageUrl": "images/powerReflection.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, counterRate, duration;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        if (i >= 1 && i <= 15) {
                            mpCost = 15;
                        } else { // i >= 16
                            mpCost = 50;
                        }

                        // 反擊率 的規律：線性增加 (11% 到 40%) => 10 + i
                        counterRate = 10 + i;

                        // 持續時間 的規律：多段線性
                        if (i >= 1 && i <= 15) {
                            duration = i * 3;
                        } else if (i >= 16 && i <= 20) {
                            duration = 45 + (i - 15) * 3; // 從15級的45秒開始計算
                        } else if (i >= 21 && i <= 28) {
                            duration = 60 + (i - 20) * 30; // 20級是60秒，21級跳到90秒，每級加30秒
                        } else { // i >= 29
                            duration = 300; // 29和30級固定300秒
                        }

                        return {
                            effect: `消耗MP: ${mpCost}, 反擊率: ${counterRate}%, 持續時間: ${duration}秒`,
                            fullDescription: `將怪物對自身傷害的一定量回饋給怪物，但所能轉移給怪物的傷害，以怪物的最大HP10%為限度。等級${i}效果：消耗MP${mpCost}，反擊率${counterRate}%，持續${duration}秒。`
                        };
                    })
                }
            ],
            "3轉 (騎士)": [
                {
                    id: "mpRecoveryKnight",
                    name: "魔力恢復",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "增加每10秒的MP恢復量。",
                    imageUrl: "images/mpRecoveryKnight.png",
                    levels: Array(21).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `回復量: ${i * 2}`,
                        fullDescription: `增加每10秒的MP恢復量。等級${i}效果：回復量${i * 2}。`
                    })
                },
                {
                    id: "shieldMastery",
                    name: "盾防精通",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "提升所佩帶的盾牌的防禦力，若未佩帶盾牌便不會產生效果。",
                    imageUrl: "images/shieldMastery.png",
                    levels: Array(21).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `盾牌防禦: ${100 + i * 5}%`,
                        fullDescription: `提升所佩帶的盾牌的防禦力，若未佩帶盾牌便不會產生效果。等級${i}效果：盾牌防禦${100 + i * 5}%。`
                    })
                },
                {
                    "id": "elementalCharge",
                    "name": "屬性攻擊",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "利用賦予在武器的屬性，同時攻擊6個以下的多數敵人。該技能必須在賦予屬性的情況下使用。",
                    "imageUrl": "images/elementalCharge.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let hpCost, mpCost, attack;
                        if (i === 0) return null;

                        // 消耗hP 的規律
                        if (i >= 1 && i <= 10) {
                            hpCost = 15;
                        } else if (i >= 11 && i <= 20) {
                            hpCost = 20;
                        } else if (i >= 21 && i <= 30) {
                            hpCost = 25;
                        }
                        // 消耗mP 的規律
                        if (i >= 1 && i <= 10) {
                            mpCost = 12;
                        } else if (i >= 11 && i <= 20) {
                            mpCost = 19;
                        } else if (i >= 21 && i <= 30) {
                            mpCost = 26;
                        }

                        // 攻擊力 的規律：分段線性
                        const attacks = [null, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 183, 186, 189, 192, 195, 198, 201, 204, 207, 210, 214, 218, 222, 226, 230, 234, 238, 242, 246, 250];
                        attack = attacks[i];

                        return {
                            effect: `消耗HP: ${hpCost}, 消耗MP: ${mpCost}, 攻擊力: ${attack}%`,
                            fullDescription: `利用賦予在武器的屬性，同時攻擊6個以下的多數敵人。等級${i}效果：消耗HP${hpCost}，消耗MP${mpCost}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    "id": "flameChargeSword",
                    "name": "烈焰之劍",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "在配帶的劍類武器上賦予火屬性。發動攻擊時，會對週遭敵人造成火焰殺傷力，若配合屬性攻擊則會造成強大的傷害，並且此技能會消失。",
                    "imageUrl": "images/flameChargeSword.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mp, attack, duration;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        const mpCosts = [null, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 30, 30, 30, 30, 30, 30, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35];
                        mp = mpCosts[i];

                        // 攻擊力 的規律 (精確數值)
                        const attacks = [null, 102, 103, 104, 105, 106, 107, 108, 109, 109, 110, 110, 111, 111, 112, 112, 113, 113, 114, 114, 115, 115, 116, 116, 117, 117, 118, 118, 119, 119, 120];
                        attack = attacks[i];

                        // 持續時間 的規律 (精確數值)
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];
                        duration = durations[i];

                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 持續時間: ${duration}秒`,
                            fullDescription: `在配帶的劍類武器上賦予火屬性。發動攻擊時，會對週遭敵人造成火焰殺傷力，若配合屬性攻擊則會造成強大的傷害，並且此技能會消失。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    "id": "flameChargeBluntWeapon",
                    "name": "烈焰之棍",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "在配帶的棍類武器上賦予火屬性。發動攻擊時，會對週遭敵人造成火焰殺傷力，若配合屬性攻擊則會造成強大的傷害，並且此技能會消失。",
                    "imageUrl": "images/flameChargeBluntWeapon.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mp, attack, duration;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        const mpCosts = [null, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 30, 30, 30, 30, 30, 30, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35];
                        mp = mpCosts[i];

                        // 攻擊力 的規律 (精確數值)
                        const attacks = [null, 102, 103, 104, 105, 106, 107, 108, 109, 109, 110, 110, 111, 111, 112, 112, 113, 113, 114, 114, 115, 115, 116, 116, 117, 117, 118, 118, 119, 119, 120];
                        attack = attacks[i];

                        // 持續時間 的規律 (精確數值)
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];
                        duration = durations[i];

                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 持續時間: ${duration}秒`,
                            fullDescription: `在配帶的棍類武器上賦予火屬性。發動攻擊時，會對週遭敵人造成火焰殺傷力，若配合屬性攻擊則會造成強大的傷害，並且此技能會消失。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    "id": "iceChargeSword",
                    "name": "寒冰之劍",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "在配帶的劍類武器上賦予冰屬性。發動攻擊時，敵人會在一定時間內維持冰凍狀態，若配合屬性攻擊則會造成強大的傷害，並且此技能會消失。",
                    "imageUrl": "images/iceChargeSword.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mp, attack, duration;
                        if (i === 0) return null;

                        // 消耗MP 的規律：分段
                        const mpCosts = [null, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 30, 30, 30, 30, 30, 30, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35];
                        mp = mpCosts[i];

                        // 攻擊力 的規律：有不規則跳變，精確列出
                        const attacks = [null, 102, 103, 104, 105, 106, 107, 108, 109, 109, 110, 110, 111, 111, 112, 112, 113, 113, 114, 114, 115, 115, 116, 116, 117, 117, 118, 118, 119, 119, 120];
                        attack = attacks[i];

                        // 持續時間 的規律：有不規則跳變，精確列出
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];
                        duration = durations[i];

                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 持續時間: ${duration}秒`,
                            fullDescription: `在配帶的劍類武器上賦予冰屬性。發動攻擊時，敵人會在一定時間內維持冰凍狀態，若配合屬性攻擊則會造成強大的傷害，並且此技能會消失。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    "id": "iceChargeBluntWeapon",
                    "name": "寒冰之棍",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "在配帶的棍類武器上賦予冰屬性。發動攻擊時，敵人會在一定時間內維持冰凍狀態，若配合屬性攻擊則會造成強大的傷害，並且此技能會消失。",
                    "imageUrl": "images/iceChargeBluntWeapon.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mp, attack, duration;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        const mpCosts = [null, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 30, 30, 30, 30, 30, 30, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35];
                        mp = mpCosts[i];

                        // 攻擊力 的規律 (精確數值)
                        const attacks = [null, 102, 103, 104, 105, 106, 107, 108, 109, 109, 110, 110, 111, 111, 112, 112, 113, 113, 114, 114, 115, 115, 116, 116, 117, 117, 118, 118, 119, 119, 120];
                        attack = attacks[i];

                        // 持續時間 的規律 (精確數值)
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];
                        duration = durations[i];

                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 持續時間: ${duration}秒`,
                            fullDescription: `在配帶的棍類武器上賦予冰屬性。發動攻擊時，敵人會在一定時間內維持冰凍狀態，若配合屬性攻擊則會造成強大的傷害，並且此技能會消失。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    "id": "lightningChargeSword",
                    "name": "雷鳴之劍",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "在配帶的劍類武器上賦予雷屬性。發動攻擊時，會對週遭敵人造成雷電殺傷力，若配合屬性攻擊則會造成強大的傷害，並且此技能會消失。",
                    "imageUrl": "images/lightningChargeSword.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mp, attack, duration;
                        if (i === 0) return null;

                        // 消耗MP 的規律：分段
                        const mpCosts = [null, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 30, 30, 30, 30, 30, 30, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35];
                        mp = mpCosts[i];

                        // 攻擊力 的規律 (精確數值)
                        const attacks = [null, 102, 104, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 117, 118, 118, 119, 119, 120, 120, 121, 121, 122, 122, 123, 123, 124, 124, 125];
                        attack = attacks[i];

                        // 持續時間 的規律 (精確數值)
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];
                        duration = durations[i];

                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 持續時間: ${duration}秒`,
                            fullDescription: `在配帶的劍類武器上賦予雷屬性。發動攻擊時，會對週遭敵人造成雷電殺傷力，若配合屬性攻擊則會造成強大的傷害，並且此技能會消失。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    "id": "lightningChargeBluntWeapon",
                    "name": "雷鳴之棍",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "在配帶的棍類武器上賦予雷屬性。發動攻擊時，會對週遭敵人造成雷電殺傷力，若配合屬性攻擊則會產生強大的傷害，並且此技能會消失。",
                    "imageUrl": "images/lightningChargeBluntWeapon.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mp, attack, duration;
                        if (i === 0) return null;

                        // 消耗MP 的規律：分段
                        const mpCosts = [null, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 30, 30, 30, 30, 30, 30, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35];
                        mp = mpCosts[i];

                        // 攻擊力 的規律 (精確數值)
                        const attacks = [null, 102, 104, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 117, 118, 118, 119, 119, 120, 120, 121, 121, 122, 122, 123, 123, 124, 124, 125];
                        attack = attacks[i];

                        // 持續時間 的規律 (精確數值)
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];
                        duration = durations[i];

                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 持續時間: ${duration}秒`,
                            fullDescription: `在配帶的棍類武器上賦予雷屬性。發動攻擊時，會對週遭敵人造成雷電殺傷力，若配合屬性攻擊則會產生強大的傷害，並且此技能會消失。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    "id": "magicCrash",
                    "name": "魔防消除",
                    "maxLevel": 20,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "增加自身與隊友屬性攻擊傷害。（屬性充能增加10%，法師的屬性魔法傷害乘算110%）",
                    "imageUrl": "images/magicCrash.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, attributeDmgIncrease, duration;
                        if (i === 0) return null;

                        // 消耗MP 的規律 (精確數值)
                        const mpCosts = [null, 35, 33, 31, 29, 27, 25, 23, 21, 19, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7];
                        mpCost = mpCosts[i];

                        // 屬性傷害增加 的規律：線性 (i * 0.5)
                        attributeDmgIncrease = i * 0.5;

                        // 持續時間 的規律 (精確數值)
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];
                        duration = durations[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 屬性傷害增加: ${attributeDmgIncrease}%, 持續時間: ${duration}秒`,
                            fullDescription: `增加自身與隊友屬性攻擊傷害。（屬性充能增加10%，法師的屬性魔法傷害乘算110%）等級${i}效果：消耗MP${mpCost}，屬性傷害增加${attributeDmgIncrease}%，持續時間${duration}秒。`
                        };
                    })
                }
            ],
            "4轉 (聖騎士)": [
                {
                    id: "mapleWarrior",
                    name: "楓葉祝福",
                    maxLevel: 30,
                    requiredLevel: 120, // 楓葉祝福通常無等級限制，可根據需求自行修改
                    preRequisite: {},
                    description: "全職業的共通技能，一定時間內全能力(力量、敏捷、智力、幸運)增加固定%數。",
                    imageUrl: "images/mapleWarrior.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 10, 持續時間: 30秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級1效果：消耗MP 10，持續時間 30秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 60秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級2效果：消耗MP 10，持續時間 60秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 90秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級3效果：消耗MP 10，持續時間 90秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 120秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級4效果：消耗MP 10，持續時間 120秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 150秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級5效果：消耗MP 10，持續時間 150秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 180秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級6效果：消耗MP 20，持續時間 180秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 210秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級7效果：消耗MP 20，持續時間 210秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 240秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級8效果：消耗MP 20，持續時間 240秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 270秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級9效果：消耗MP 20，持續時間 270秒，全能力增加 5%。" },
                        { effect: "消耗MP: 20, 持續時間: 300秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級10效果：消耗MP 20，持續時間 300秒，全能力增加 5%。" },
                        { effect: "消耗MP: 30, 持續時間: 330秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級11效果：消耗MP 30，持續時間 330秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 360秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級12效果：消耗MP 30，持續時間 360秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 390秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級13效果：消耗MP 30，持續時間 390秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 420秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級14效果：消耗MP 30，持續時間 420秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 450秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級15效果：消耗MP 30，持續時間 450秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 480秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級16效果：消耗MP 40，持續時間 480秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 510秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級17效果：消耗MP 40，持續時間 510秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 540秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級18效果：消耗MP 40，持續時間 540秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 570秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級19效果：消耗MP 40，持續時間 570秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 600秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級20效果：消耗MP 40，持續時間 600秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 630秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級21效果：消耗MP 40，持續時間 630秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 660秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級22效果：消耗MP 40，持續時間 660秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 690秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級23效果：消耗MP 40，持續時間 690秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 720秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級24效果：消耗MP 40，持續時間 720秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 750秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級25效果：消耗MP 40，持續時間 750秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 780秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級26效果：消耗MP 40，持續時間 780秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 810秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級27效果：消耗MP 40，持續時間 810秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 840秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級28效果：消耗MP 40，持續時間 840秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 870秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級29效果：消耗MP 40，持續時間 870秒，全能力增加 15%。" },
                        { effect: "消耗MP: 40, 持續時間: 900秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級30效果：消耗MP 40，持續時間 900秒，全能力增加 15%。" }
                    ]
                },
                {
                    id: "heroesWill",
                    name: "楓葉淨化",
                    maxLevel: 1,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。",
                    imageUrl: "images/heroesWill.png",
                    levels: [
                        null,
                        {
                            effect: "消耗MP: 30, 冷卻時間: 600秒",
                            fullDescription: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。等級1效果：消耗MP 30，冷卻時間 600秒。"
                        }
                    ]
                },
                {
                    id: "sturdyArmor",
                    name: "武神防禦",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "強化自身的物理防禦",
                    imageUrl: "images/sturdyArmor.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const damageReduction = -i * 0.5;
                        return {
                            effect: `物理傷害: ${damageReduction.toFixed(2)}%`,
                            fullDescription: `強化自身的物理防禦。等級${i}效果：物理傷害${damageReduction.toFixed(2)}%。`
                        };
                    })
                },
                {
    id: "powerGuard",
    name: "格擋",
    maxLevel: 30,
    requiredLevel: 120,
    preRequisite: {},
    description: "一定時間內受到怪物攻擊，有一定的機率不會被擊退。",
    imageUrl: "images/powerGuard.png",
    levels: Array(31).fill(null).map((_, i) => {
        if (i === 0) return null;

        // 1. 消耗MP: 1-20級採階梯成長，21級起固定為 50
        const mpCosts = [
            null,
            30, 30, 30, 30, 30, // 1-5
            36, 36, 36, 36, 36, // 6-10
            42, 42, 42, 42, 42, // 11-15
            48, 48, 48, 48, 48, // 16-20
            50, 50, 50, 50, 50, // 21-25
            50, 50, 50, 50, 50  // 26-30
        ];

        // 2. 持續時間: i * 10 秒 (10秒 ~ 300秒)
        const duration = i * 10;

        // 3. 不退後機率: 30 + (i * 2) (32% ~ 90%)
        const chance = 30 + (i * 2);

        const mp = mpCosts[i];

        return {
            effect: `消耗MP: ${mp}, 持續時間: ${duration}秒, 不退後機率: ${chance}%`,
            fullDescription: `受到怪物攻擊時，有一定的機率不被擊退。等級${i}效果：持續${duration}秒，機率${chance}%。`
        };
    })
},
                {
                    id: "absolutecity",
                    name: "絕對引力",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "遠距離的怪物在一定的範圍內，會受到磁鐵的吸力而吸引過來。",
                    imageUrl: "images/absolutecity.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP規律: 階梯式 (10 -> 13 -> 18 -> 21 -> 25)
                        let mp;
                        if (i <= 5) mp = 10;
                        else if (i <= 10) mp = 13;
                        else if (i <= 15) mp = 18;
                        else if (i <= 20) mp = 21;
                        else mp = 25;

                        // 2. 範圍規律: 階梯式 (100 -> 150 -> 250)
                        let range;
                        if (i <= 10) range = 100;
                        else if (i <= 20) range = 150;
                        else range = 250;

                        // 3. 成功率: 起始 40%，每級增加 2%
                        const successRate = 40 + (i * 2);

                        const effect = `消耗MP: ${mp}, 範圍: ${range}, 成功率: ${successRate}%`;

                        return {
                            effect: effect,
                            fullDescription: `遠距離的怪物在一定的範圍內，會受到磁鐵的吸力而吸引過來。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "ultimateShield",
                    name: "究極神盾",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "在裝備盾牌的情況下，有一定的機率在敵人近距離的物理攻擊(接觸)時，把敵人擊退，擊退後會有2秒的無敵時間。",
                    imageUrl: "images/ultimateShield.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const procChance = i * 0.5;
                        return {
                            effect: `擊退機率: ${procChance.toFixed(2)}%`,
                            fullDescription: `在裝備盾牌的情況下，有一定的機率在敵人近距離的物理攻擊(接觸)時，把敵人擊退，擊退後會有2秒的無敵時間。等級${i}效果：擊退機率${procChance.toFixed(2)}%。`
                        };
                    })
                },
                {
                    id: "ultimateSpear",
                    name: "究極突刺",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "向前方的敵人進行突刺攻擊，可一次攻擊15名敵人，玩家使用突刺攻擊，會穿越敵人的身體。(無怪物時仍可移動的效果)",
                    imageUrl: "images/ultimateSpear.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const mpCosts = [null, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50];
                        const attacks = [null, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130];
                        const ranges = [null, 80, 80, 80, 85, 85, 85, 90, 90, 90, 95, 95, 95, 100, 100, 100, 105, 105, 105, 110, 110, 110, 115, 115, 115, 120, 120, 120, 125, 125, 125];
                        return {
                            effect: `消耗MP: ${mpCosts[i]}, 威力: ${attacks[i]}%, 範圍: ${ranges[i]}`,
                            fullDescription: `向前方的敵人進行突刺攻擊，可一次攻擊15名敵人，玩家使用突刺攻擊，會穿越敵人的身體。(無怪物時仍可移動的效果)等級${i}效果：消耗MP${mpCosts[i]}，威力${attacks[i]}%，範圍${ranges[i]}。`
                        };
                    })
                },
                {
                    id: "holyChargeSword",
                    name: "聖靈之劍",
                    maxLevel: 20,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "使武器有附加聖屬性的能力。",
                    imageUrl: "images/holyChargeSword.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const mpCost = i <= 10 ? 20 : 30;
                        const attack = 100 + i * 2;
                        const duration = i * 15;
                        return {
                            effect: `消耗MP: ${mpCost}, 屬性威力: ${attack}%, 持續時間: ${duration}秒`,
                            fullDescription: `使武器有附加聖屬性的能力。等級${i}效果：消耗MP${mpCost}，屬性威力${attack}%，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    id: "holyChargeBlunt",
                    name: "聖靈之棍",
                    maxLevel: 20,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "使武器有附加聖屬性的能力。",
                    imageUrl: "images/holyChargeBlunt.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const mpCost = i <= 10 ? 20 : 30;
                        const attack = 100 + i * 2;
                        const duration = i * 15;
                        return {
                            effect: `消耗MP: ${mpCost}, 屬性威力: ${attack}%, 持續時間: ${duration}秒`,
                            fullDescription: `使武器有附加聖屬性的能力。等級${i}效果：消耗MP${mpCost}，屬性威力${attack}%，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    id: "elementalReinforcement",
                    name: "屬性強化",
                    maxLevel: 10,
                    requiredLevel: 120,
                    preRequisite: { "elementalStrike": 30 },
                    description: "使用屬性攻擊時，威力上升且有一定機率造成暈眩。",
                    imageUrl: "images/elementalReinforcement.png",
                    levels: Array(11).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 攻擊力規律: 起始 250%，每級增加 10%
                        const attack = 250 + (i * 10);

                        // 2. 暈眩機率規律: 每級增加 10%，最高 90%
                        const stunChance = Math.min(90, i * 10);

                        const effect = `攻擊力: ${attack}%, 暈眩機率: ${stunChance}%`;

                        return {
                            effect: effect,
                            fullDescription: `使用屬性攻擊時，威力上升且有一定機率造成暈眩。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "blast",
                    name: "騎士衝擊波",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "對單體怪物施加強力的攻擊。",
                    imageUrl: "images/blast.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const mpCosts = [null, 17, 17, 17, 17, 17, 20, 20, 20, 20, 20, 23, 23, 23, 23, 23, 26, 26, 26, 26, 26, 29, 29, 29, 29, 29, 28, 27, 26, 25, 24];
                        const attacks = [null, 370, 390, 410, 430, 450, 470, 490, 510, 530, 550, 560, 570, 580, 590, 600, 610, 620, 630, 640, 650, 660, 670, 680, 690, 700, 710, 720, 730, 740, 750];
                        return {
                            effect: `消耗MP: ${mpCosts[i]}, 攻擊力: ${attacks[i]}%`,
                            fullDescription: `對單體怪物施加強力的攻擊。等級${i}效果：消耗MP${mpCosts[i]}，攻擊力${attacks[i]}%。`
                        };
                    })
                },
                {
                    id: "heavensHammer",
                    name: "鬼神之擊",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "用巨槌打擊地面的攻擊，最多攻擊15名敵人，只可在使用聖劍/鎚的狀態下使用。若對怪物造成其體力一定比例時，將怪物HP降至1，但若造成100%傷害可直接擊殺怪物。",
                    imageUrl: "images/heavensHammer.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 30 + i (1級=31, 30級=60)
                        const mp = 30 + i;

                        // 2. 傷害比例: 全等級固定 30%
                        const damageRate = "30%";

                        // 3. 攻擊力規律:
                        // 1-20級: 400% + (i * 20%) [1級=420%, 20級=800%]
                        // 21-30級: 800% + (i - 20) * 10% [21級=810%, 30級=900%]
                        let power;
                        if (i <= 20) {
                            power = 400 + (i * 20);
                        } else {
                            power = 800 + (i - 20) * 10;
                        }

                        // 4. 冷卻時間: 330 - (i * 10) [1級=320秒, 30級=30秒]
                        const cooldown = 330 - (i * 10);

                        const effect = `消耗MP: ${mp}, 傷害比例: ${damageRate}, 攻擊力: ${power}%, 冷卻時間: ${cooldown}秒`;

                        return {
                            effect: effect,
                            fullDescription: `用巨槌打擊地面的攻擊，最多攻擊15名敵人。等級${i}效果：${effect}。`
                        };
                    })
                }
            ],
            "超技能": [],
            "5轉技能": [],
            "共通技能": []
        }
    },
    "黑騎士 (DarkKnight)": {
        emblemUrl: 'emblems/DarkKnight.png',
        startingLevelForSp: 10, // 劍士系通常10等轉職
        jobAdvancementSpBonuses: [10, 30, 70, 120],
        jobStagesOrder: ["0轉 (新手)", "1轉 (劍士)", "2轉 (槍騎兵)", "3轉 (龍騎士)", "4轉 (黑騎士)", "超技能", "5轉技能", "共通技能"],
        spRequiredFor2ndJob: 61, // 其他職業2轉點數需求
        spRequiredFor3rdJob: 182, // 其他職業3轉點數需求
        spRequiredFor4thJob: 333, // 4轉通用點數需求    
        skills: {
            "0轉 (新手)": [],
            "1轉 (劍士)": [
                {
                    id: "hpRecovery",
                    name: "生命淨化",
                    maxLevel: 16,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "自我恢复时能回复更多HP。移動中可恢復",
                    imageUrl: "images/hpRecovery.png", // 確保圖片檔案存在
                    levels: Array(17).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `回復量: ${i * 3}`,
                        fullDescription: `自我恢復時能回復更多HP。移動中可恢復。等級${i}效果：回復量${i * 3}。`
                    })
                },
                {
                    id: "hpBoost",
                    name: "生命擴展",
                    maxLevel: 10,
                    requiredLevel: 10,
                    preRequisite: { "hpRecovery": 5 },
                    description: "等級上升或使用升級點(AP)數增加HP的增血量。",
                    imageUrl: "images/hpBoost.png", // 確保圖片檔案存在
                    levels: Array(11).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `升級血量: ${i * 4}`,
                        fullDescription: `等級上升或使用升級點(AP)數增加HP的增血量。等級${i}效果：升級血量${i * 4}。`
                    })
                },
                {
                    id: "hpRestore",
                    name: "生命恢復",
                    maxLevel: 8,
                    requiredLevel: 10,
                    preRequisite: { "hpRecovery": 5, "hpBoost": 3 },
                    description: "提升自我恢復HP。可與生命淨化疊加。",
                    imageUrl: "images/hpRestore.png", // 確保圖片檔案存在
                    levels: Array(9).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `HP追加恢復: ${i * 4}`,
                        fullDescription: `提升自我恢復HP。可與生命淨化疊加。等級${i}效果：HP追加恢復${i * 4}。`
                    })
                },
                {
                    "id": "ironBody",
                    "name": "自身強化",
                    "maxLevel": 20,
                    "requiredLevel": 10,
                    "preRequisite": { "hpRecovery": 5, "hpBoost": 3, "hpRestore": 3 },
                    "description": "一定時間內增加物理防禦力。",
                    "imageUrl": "images/ironBody.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, defense, moveSpeed, duration;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        mpCost = i <= 10 ? 8 : (i === 20 ? 15 : 10);

                        // 防禦力 的規律：線性
                        defense = i * 2;

                        // 移動速度 的規律
                        moveSpeed = Math.ceil(i / 2);
                        if (i > 18) moveSpeed = 10;

                        // 持續時間 的精確數值
                        const durations = [null, 75, 85, 95, 105, 120, 130, 140, 155, 165, 175, 190, 200, 215, 225, 240, 250, 265, 275, 290, 300];
                        duration = durations[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 防禦力: ${defense}, 移動速度: ${moveSpeed}, 持續時間: ${duration}秒`,
                            fullDescription: `一定時間內增加物理防禦力。等級${i}效果：消耗MP${mpCost}，防禦力${defense}，移動速度${moveSpeed}，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "slashBlast",
                    name: "魔天一擊",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "消耗MP，給予怪物強力一擊。",
                    imageUrl: "images/slashBlast.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack;
                        if (i === 0) return null;
                        const mpCosts = [null, 4, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12];
                        const attacks = [null, 114, 120, 126, 132, 142, 148, 154, 164, 170, 180, 186, 196, 202, 212, 218, 228, 234, 244, 250, 260];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `消耗MP，給予怪物強力一擊。等級${i}效果：消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "powerStrike",
                    name: "劍氣縱橫",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: { "slashBlast": 1 },
                    description: "消耗HP和MP，同時攻擊周遭的多個怪物。",
                    imageUrl: "images/powerStrike.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let hp, mp, attack;
                        if (i === 0) return null;
                        const hpCosts = [null, 8, 8, 8, 8, 9, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16];
                        const mpCosts = [null, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14];
                        const attacks = [null, 57, 60, 63, 66, 71, 74, 77, 85, 88, 93, 96, 101, 104, 109, 112, 117, 120, 122, 125, 130];
                        hp = hpCosts[i];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗HP: ${hp}, 消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `消耗HP和MP，同時攻擊周遭的多個怪物。等級${i}效果：消耗HP${hp}，消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                }
            ],
            "2轉 (槍騎兵)": [
                {
                    id: "spearMastery",
                    name: "精準之槍",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "提升槍系武器的命中率及熟練度，此技能必須是使用槍的情況下，才能發揮作用。",
                    imageUrl: "images/spearMastery.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let hitRate, mastery;
                        if (i === 0) return null;
                        const hitRates = [null, 1, 2, 3, 4, 5, 6, 6, 8, 8, 10, 10, 12, 12, 14, 14, 16, 16, 18, 19, 20];
                        const masteries = [null, 15, 15, 20, 20, 25, 25, 25, 30, 30, 35, 35, 40, 40, 45, 45, 50, 50, 55, 60, 60];
                        hitRate = hitRates[i];
                        mastery = masteries[i];
                        return {
                            effect: `命中率: ${hitRate}, 熟練度: ${mastery}%`,
                            fullDescription: `提升槍系武器的命中率及熟練度，此技能必須是使用槍的情況下，才能發揮作用。等級${i}效果：命中率${hitRate}，熟練度${mastery}%。`
                        };
                    })
                },
                {
                    id: "polearmMastery",
                    name: "精準之矛",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "提升矛系武器的命中率及熟練度，此技能必須是使用矛的情況下，才會發揮作用。",
                    imageUrl: "images/polearmMastery.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let hitRate, mastery;
                        if (i === 0) return null;
                        const hitRates = [null, 1, 2, 3, 4, 5, 6, 6, 8, 8, 10, 10, 12, 12, 14, 14, 16, 16, 18, 19, 20];
                        const masteries = [null, 15, 15, 20, 20, 25, 25, 25, 30, 30, 35, 35, 40, 40, 45, 45, 50, 50, 55, 60, 60];
                        hitRate = hitRates[i];
                        mastery = masteries[i];
                        return {
                            effect: `命中率: ${hitRate}, 熟練度: ${mastery}%`,
                            fullDescription: `提升矛系武器的命中率及熟練度，此技能必須是使用矛的情況下，才會發揮作用。等級${i}效果：命中率${hitRate}，熟練度${mastery}%。`
                        };
                    })
                },
                {
                    id: "spearBooster",
                    name: "快速之槍",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: { "spearMastery": 5 },
                    description: "消耗HP與MP，將使用槍的攻擊速度，向上提升一個等級。此技能必須是使用槍的情況下，才能發揮作用。",
                    imageUrl: "images/spearBooster.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, hp, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const hpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];
                        mp = mpCosts[i];
                        hp = hpCosts[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 消耗HP: ${hp}, 持續時間: ${duration}秒`,
                            fullDescription: `消耗HP與MP，將使用槍的攻擊速度，向上提升一個等級。此技能必須是使用槍的情況下，才能發揮作用。等級${i}效果：消耗MP${mp}，消耗HP${hp}，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "polearmBooster",
                    name: "快速之矛",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: { "polearmMastery": 5 },
                    description: "消耗HP與MP，將使用矛的攻擊速度，向上提升一個等級。此技能必須是使用矛的情況下，才能發揮作用。",
                    imageUrl: "images/polearmBooster.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, hp, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const hpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];
                        mp = mpCosts[i];
                        hp = hpCosts[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 消耗HP: ${hp}, 持續時間: ${duration}秒`,
                            fullDescription: `消耗HP與MP，將使用矛的攻擊速度，向上提升一個等級。此技能必須是使用矛的情況下，才能發揮作用。等級${i}效果：消耗MP${mp}，消耗HP${hp}，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "finalAttackSpear",
                    name: "終極之槍",
                    maxLevel: 30,
                    requiredLevel: 30,
                    preRequisite: { "spearMastery": 3 },
                    description: "按照一定機率，在使用攻擊技能後發動連續攻擊。此技能必須是使用槍的情況下，才能發揮作用。",
                    imageUrl: "images/finalAttackSpear.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let procRate, attack;
                        if (i === 0) return null;
                        const procRates = [null, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60];
                        const attacks = [null, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 10, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250]; // Level 18 attack is 10% as provided
                        procRate = procRates[i];
                        attack = attacks[i];
                        return {
                            effect: `發動率: ${procRate}%, 攻擊力: ${attack}%`,
                            fullDescription: `按照一定機率，在使用攻擊技能後發動連續攻擊。此技能必須是使用槍的情況下，才能發揮作用。等級${i}效果：發動率${procRate}%，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "finalAttackPolearm",
                    name: "終極之矛",
                    maxLevel: 30,
                    requiredLevel: 30,
                    preRequisite: { "polearmMastery": 3 },
                    description: "按照一定機率，在使用攻擊技能後發動連續攻擊。此技能必須是使用矛的情況下，才能發揮作用。",
                    imageUrl: "images/finalAttackPolearm.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let procRate, attack;
                        if (i === 0) return null;
                        const procRates = [null, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60];
                        const attacks = [null, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 10, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250]; // Level 18 attack is 10% as provided
                        procRate = procRates[i];
                        attack = attacks[i];
                        return {
                            effect: `發動率: ${procRate}%, 攻擊力: ${attack}%`,
                            fullDescription: `按照一定機率，在使用攻擊技能後發動連續攻擊。此技能必須是使用矛的情況下，才能發揮作用。等級${i}效果：發動率${procRate}%，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "hyperBody",
                    name: "禦魔陣",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "在一定時間內，提升周圍組員的物理防禦力與魔法防禦力。但若是使用自身強化技能的狀態下的話，則只提昇魔法防禦力。",
                    imageUrl: "images/hyperBody.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, pDef, mDef, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
                        const defs = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
                        const durations = [null, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300];
                        mp = mpCosts[i];
                        pDef = defs[i];
                        mDef = defs[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 物理防禦: ${pDef}, 魔法防禦: ${mDef}, 持續時間: ${duration}秒`,
                            fullDescription: `在一定時間內，提升周圍組員的物理防禦力與魔法防禦力。等級${i}效果：消耗MP${mp}，物理防禦${pDef}，魔法防禦${mDef}，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "holyFire",
                    name: "神聖之火",
                    maxLevel: 30,
                    requiredLevel: 30,
                    preRequisite: { "hyperBody": 3 },
                    description: "將怪物對自身傷害的一定量回饋給怪物，但所能轉移給怪物的傷害，以怪物的最大HP10%為限度。",
                    imageUrl: "images/holyFire.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, hpIncrease, mpIncrease, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50];
                        const percents = [null, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];
                        mp = mpCosts[i];
                        hpIncrease = percents[i];
                        mpIncrease = percents[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, HP提升: ${hpIncrease}%, MP提升: ${mpIncrease}%, 持續時間: ${duration}秒`,
                            fullDescription: `將怪物對自身傷害的一定量回饋給怪物，但所能轉移給怪物的傷害，以怪物的最大HP10%為限度。等級${i}效果：消耗MP${mp}，HP提升${hpIncrease}%，MP提升${mpIncrease}%，持續${duration}秒。`
                        };
                    })
                }
            ],
            "3轉 (龍騎士)": [
                {
                    id: "magicResistance",
                    name: "魔法抵抗",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "提高對所有屬性魔法的抗性。",
                    imageUrl: "images/magicResistance.png",
                    levels: Array(21).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `抵抗性: ${i * 2}%`,
                        fullDescription: `提高對所有屬性魔法的抗性。等級${i}效果：抵抗性${i * 2}%。`
                    })
                },
                {
                    id: "dragonBusterSpear",
                    name: "槍連擊",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "配帶槍類武器時，可對前方多個怪物進行連續攻擊。",
                    imageUrl: "images/dragonBusterSpear.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, attack, numAttacks, numEnemies;
                        if (i === 0) return null;
                        const mpCosts = [null, 10, 10, 10, 10, 10, 13, 13, 13, 13, 13, 16, 16, 16, 16, 16, 19, 19, 19, 19, 19, 22, 22, 22, 22, 22, 25, 25, 25, 25, 25];
                        const attacks = [null, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170];
                        const numAttacksArr = [null, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
                        const numEnemiesArr = [null, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3]; // This might be for "enemies hit"
                        mp = mpCosts[i];
                        attack = attacks[i];
                        numAttacks = numAttacksArr[i];
                        numEnemies = numEnemiesArr[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 攻擊次數: ${numAttacks}, 敵人數量: ${numEnemies}`,
                            fullDescription: `配帶槍類武器時，可對前方多個怪物進行連續攻擊。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，攻擊次數${numAttacks}，敵人數量${numEnemies}。`
                        };
                    })
                },
                {
                    id: "dragonBusterPolearm",
                    name: "矛連擊",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "配帶矛類武器時，可對前方多個怪物進行連續攻擊。",
                    imageUrl: "images/dragonBusterPolearm.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, attack, numAttacks, numEnemies;
                        if (i === 0) return null;
                        const mpCosts = [null, 10, 10, 10, 10, 10, 13, 13, 13, 13, 13, 16, 16, 16, 16, 16, 19, 19, 19, 19, 19, 22, 22, 22, 22, 22, 25, 25, 25, 25, 25];
                        const attacks = [null, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 104, 108, 112, 116, 120, 124, 128, 132, 136, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170];
                        const numAttacksArr = [null, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
                        const numEnemiesArr = [null, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        numAttacks = numAttacksArr[i];
                        numEnemies = numEnemiesArr[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 攻擊次數: ${numAttacks}, 敵人數量: ${numEnemies}`,
                            fullDescription: `配帶矛類武器時，可對前方多個怪物進行連續攻擊。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，攻擊次數${numAttacks}，敵人數量${numEnemies}。`
                        };
                    })
                },
                {
                    id: "dragonFurySpear",
                    name: "無雙槍",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "配帶槍類武器時，可大範圍揮舞攻擊敵人。",
                    imageUrl: "images/dragonFurySpear.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let hp, mp, attack;
                        if (i === 0) return null;
                        const hpCosts = [null, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30];
                        const mpCosts = [null, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20];
                        const attacks = [null, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 223, 226, 229, 232, 235, 238, 241, 244, 247, 250];
                        hp = hpCosts[i];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗HP: ${hp}, 消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `配帶槍類武器時，可大範圍揮舞攻擊敵人。等級${i}效果：消耗HP${hp}，消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "dragonFuryPolearm",
                    name: "無雙矛",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "配帶矛類武器時，可大範圍揮舞攻擊敵人。",
                    imageUrl: "images/dragonFuryPolearm.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let hp, mp, attack;
                        if (i === 0) return null;
                        const hpCosts = [null, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30];
                        const mpCosts = [null, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20];
                        const attacks = [null, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 223, 226, 229, 232, 235, 238, 241, 244, 247, 250];
                        hp = hpCosts[i];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗HP: ${hp}, 消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `配帶矛類武器時，可大範圍揮舞攻擊敵人。等級${i}效果：消耗HP${hp}，消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "dragonSacrifice",
                    name: "龍之獻祭",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "犧牲自己的HP換取對敵人進行無視物理防禦的單體攻擊。對魔王級怪物無效，使用後自身HP不會少於1。",
                    imageUrl: "images/dragonSacrifice.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, attack, hpReduction;
                        if (i === 0) return null;
                        const mpCosts = [null, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18];
                        const attacks = [null, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320, 325, 330, 335, 340, 345, 350];
                        const hpReductions = [null, 30, 29, 28, 27, 18, 17, 17, 16, 16, 15, 15, 14, 14, 13, 13, 12, 12, 11, 11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        hpReduction = hpReductions[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 減少最大HP: ${hpReduction}%`,
                            fullDescription: `犧牲自己的HP換取對敵人進行無視物理防禦的單體攻擊。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，減少最大HP${hpReduction}%。`
                        };
                    })
                },
                {
                    id: "dragonRoar",
                    name: "龍咆哮",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: { "dragonSacrifice": 3 },
                    description: "犧牲自己的HP換取對敵人進行大範圍攻擊，最多可同時攻擊15人。發動技能的瞬間角色將無法動彈。( HP須大於 50%以上才可使用)。",
                    imageUrl: "images/dragonRoar.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, hpCost, attack, range, interval;
                        if (i === 0) return null;
                        const mpCosts = [null, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 24, 24, 24, 24, 24, 24, 24, 24, 24, 30];
                        const hpCosts = [null, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30];
                        const attacks = [null, 96, 102, 108, 114, 120, 126, 132, 138, 144, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 204, 208, 212, 216, 220, 224, 228, 232, 236, 240];
                        const ranges = [null, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400];
                        const intervals = [null, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
                        mp = mpCosts[i];
                        hpCost = hpCosts[i];
                        attack = attacks[i];
                        range = ranges[i];
                        interval = intervals[i];
                        return {
                            effect: `消耗MP: ${mp}, 消耗最大HP: ${hpCost}%, 攻擊: ${attack}%, 攻擊範圍: ${range}%, 間隔時間: ${interval}秒`,
                            fullDescription: `犧牲自己的HP換取對敵人進行大範圍攻擊。等級${i}效果：消耗MP${mp}，消耗最大HP${hpCost}%，攻擊${attack}%，攻擊範圍${range}%，間隔時間${interval}秒。`
                        };
                    })
                },
                {
                    id: "powerCrash",
                    name: "力量消除",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: { "dragonSpirit": 3 },
                    description: "一定時間內，使隊員獲得依照施法者HP比例計算的傷害減免效果。以HP1,000為基准為1%，最高20%",
                    imageUrl: "images/powerCrash.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 全等級固定 35
                        const mp = 35;

                        // 2. 持續時間規律: 每級增加 15 秒
                        const duration = i * 15;

                        const effect = `消耗MP: ${mp}, 持續時間: ${duration}秒`;

                        return {
                            effect: effect,
                            fullDescription: `一定時間內，使隊員獲得依照施法者HP比例計算的傷害減免效果。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "dragonSpirit",
                    name: "龍之魂",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "一定時間內提升攻擊力，但HP會逐漸減少。若HP低於每4秒減少的數值，則不會再減少HP。",
                    imageUrl: "images/dragonSpirit.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, hpReduction, attackIncrease, duration;
                        if (i === 0) return null;
                        mp = i <= 10 ? 12 : 24;
                        hpReduction = i === 20 ? 295 : "--"; // Only level 20 has this value
                        attackIncrease = i;
                        duration = i * 8;
                        return {
                            effect: `消耗MP: ${mp}, 每4秒減少HP: ${hpReduction}, 增加攻擊力: ${attackIncrease}, 持續時間: ${duration}秒`,
                            fullDescription: `一定時間內提升攻擊力，但HP會逐漸減少。等級${i}效果：消耗MP${mp}，每4秒減少HP${hpReduction}，增加攻擊力${attackIncrease}，持續時間${duration}秒。`
                        };
                    })
                }
            ],
            "4轉 (黑騎士)": [
                {
                    id: "mapleWarrior",
                    name: "楓葉祝福",
                    maxLevel: 30,
                    requiredLevel: 120, // 楓葉祝福通常無等級限制，可根據需求自行修改
                    preRequisite: {},
                    description: "全職業的共通技能，一定時間內全能力(力量、敏捷、智力、幸運)增加固定%數。",
                    imageUrl: "images/mapleWarrior.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 10, 持續時間: 30秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級1效果：消耗MP 10，持續時間 30秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 60秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級2效果：消耗MP 10，持續時間 60秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 90秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級3效果：消耗MP 10，持續時間 90秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 120秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級4效果：消耗MP 10，持續時間 120秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 150秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級5效果：消耗MP 10，持續時間 150秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 180秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級6效果：消耗MP 20，持續時間 180秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 210秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級7效果：消耗MP 20，持續時間 210秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 240秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級8效果：消耗MP 20，持續時間 240秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 270秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級9效果：消耗MP 20，持續時間 270秒，全能力增加 5%。" },
                        { effect: "消耗MP: 20, 持續時間: 300秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級10效果：消耗MP 20，持續時間 300秒，全能力增加 5%。" },
                        { effect: "消耗MP: 30, 持續時間: 330秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級11效果：消耗MP 30，持續時間 330秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 360秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級12效果：消耗MP 30，持續時間 360秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 390秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級13效果：消耗MP 30，持續時間 390秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 420秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級14效果：消耗MP 30，持續時間 420秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 450秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級15效果：消耗MP 30，持續時間 450秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 480秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級16效果：消耗MP 40，持續時間 480秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 510秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級17效果：消耗MP 40，持續時間 510秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 540秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級18效果：消耗MP 40，持續時間 540秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 570秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級19效果：消耗MP 40，持續時間 570秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 600秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級20效果：消耗MP 40，持續時間 600秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 630秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級21效果：消耗MP 40，持續時間 630秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 660秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級22效果：消耗MP 40，持續時間 660秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 690秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級23效果：消耗MP 40，持續時間 690秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 720秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級24效果：消耗MP 40，持續時間 720秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 750秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級25效果：消耗MP 40，持續時間 750秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 780秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級26效果：消耗MP 40，持續時間 780秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 810秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級27效果：消耗MP 40，持續時間 810秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 840秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級28效果：消耗MP 40，持續時間 840秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 870秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級29效果：消耗MP 40，持續時間 870秒，全能力增加 15%。" },
                        { effect: "消耗MP: 40, 持續時間: 900秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級30效果：消耗MP 40，持續時間 900秒，全能力增加 15%。" }
                    ]
                },
                {
                    id: "heroesWill",
                    name: "楓葉淨化",
                    maxLevel: 1,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。",
                    imageUrl: "images/heroesWill.png",
                    levels: [
                        null,
                        {
                            effect: "消耗MP: 30, 冷卻時間: 600秒",
                            fullDescription: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。等級1效果：消耗MP 30，冷卻時間 600秒。"
                        }
                    ]
                },
                {
                    id: "sturdyArmor",
                    name: "武神防禦",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "強化自身的物理防禦",
                    imageUrl: "images/sturdyArmor.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const damageReduction = -i * 0.5;
                        return {
                            effect: `物理傷害: ${damageReduction.toFixed(2)}%`,
                            fullDescription: `強化自身的物理防禦。等級${i}效果：物理傷害${damageReduction.toFixed(2)}%。`
                        };
                    })
                },
                {
    id: "powerGuard",
    name: "格擋",
    maxLevel: 30,
    requiredLevel: 120,
    preRequisite: {},
    description: "一定時間內受到怪物攻擊，有一定的機率不會被擊退。",
    imageUrl: "images/powerGuard.png",
    levels: Array(31).fill(null).map((_, i) => {
        if (i === 0) return null;

        // 1. 消耗MP: 1-20級採階梯成長，21級起固定為 50
        const mpCosts = [
            null,
            30, 30, 30, 30, 30, // 1-5
            36, 36, 36, 36, 36, // 6-10
            42, 42, 42, 42, 42, // 11-15
            48, 48, 48, 48, 48, // 16-20
            50, 50, 50, 50, 50, // 21-25
            50, 50, 50, 50, 50  // 26-30
        ];

        // 2. 持續時間: i * 10 秒 (10秒 ~ 300秒)
        const duration = i * 10;

        // 3. 不退後機率: 30 + (i * 2) (32% ~ 90%)
        const chance = 30 + (i * 2);

        const mp = mpCosts[i];

        return {
            effect: `消耗MP: ${mp}, 持續時間: ${duration}秒, 不退後機率: ${chance}%`,
            fullDescription: `受到怪物攻擊時，有一定的機率不被擊退。等級${i}效果：持續${duration}秒，機率${chance}%。`
        };
    })
},
                {
                    id: "absolutecity",
                    name: "絕對引力",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "遠距離的怪物在一定的範圍內，會受到磁鐵的吸力而吸引過來。",
                    imageUrl: "images/absolutecity.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP規律: 階梯式 (10 -> 13 -> 18 -> 21 -> 25)
                        let mp;
                        if (i <= 5) mp = 10;
                        else if (i <= 10) mp = 13;
                        else if (i <= 15) mp = 18;
                        else if (i <= 20) mp = 21;
                        else mp = 25;

                        // 2. 範圍規律: 階梯式 (100 -> 150 -> 250)
                        let range;
                        if (i <= 10) range = 100;
                        else if (i <= 20) range = 150;
                        else range = 250;

                        // 3. 成功率: 起始 40%，每級增加 2%
                        const successRate = 40 + (i * 2);

                        const effect = `消耗MP: ${mp}, 範圍: ${range}, 成功率: ${successRate}%`;

                        return {
                            effect: effect,
                            fullDescription: `遠距離的怪物在一定的範圍內，會受到磁鐵的吸力而吸引過來。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "ultimateShield",
                    name: "究極神盾",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "在裝備盾牌的情況下，有一定的機率在敵人近距離的物理攻擊(接觸)時，把敵人擊退，擊退後會有2秒的無敵時間。",
                    imageUrl: "images/ultimateShield.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const procChance = i * 0.5;
                        return {
                            effect: `擊退機率: ${procChance.toFixed(2)}%`,
                            fullDescription: `在裝備盾牌的情況下，有一定的機率在敵人近距離的物理攻擊(接觸)時，把敵人擊退，擊退後會有2秒的無敵時間。等級${i}效果：擊退機率${procChance.toFixed(2)}%。`
                        };
                    })
                },
                {
                    id: "ultimateSpear",
                    name: "究極突刺",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "向前方的敵人進行突刺攻擊，可一次攻擊15名敵人，玩家使用突刺攻擊，會穿越敵人的身體。(無怪物時仍可移動的效果)",
                    imageUrl: "images/ultimateSpear.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const mpCosts = [null, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50];
                        const attacks = [null, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130];
                        const ranges = [null, 80, 80, 80, 85, 85, 85, 90, 90, 90, 95, 95, 95, 100, 100, 100, 105, 105, 105, 110, 110, 110, 115, 115, 115, 120, 120, 120, 125, 125, 125];
                        return {
                            effect: `消耗MP: ${mpCosts[i]}, 威力: ${attacks[i]}%, 範圍: ${ranges[i]}`,
                            fullDescription: `向前方的敵人進行突刺攻擊，可一次攻擊15名敵人，玩家使用突刺攻擊，會穿越敵人的身體。(無怪物時仍可移動的效果)等級${i}效果：消耗MP${mpCosts[i]}，威力${attacks[i]}%，範圍${ranges[i]}。`
                        };
                    })
                },
                {
                    id: "darkForce",
                    name: "黑暗力量",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "自身HP高於一定百分比以上時，自行引發出潛力，增加最大攻擊的威力。",
                    imageUrl: "images/darkForce.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const hpThreshold = 85 - i;
                        const attackIncrease = 110 + i * 3;
                        return {
                            effect: `HP剩量: ${hpThreshold}%, 攻擊威力: ${attackIncrease}%`,
                            fullDescription: `自身HP高於一定百分比以上時，自行引發出潛力，增加最大攻擊的威力。等級${i}效果：HP剩量${hpThreshold}%，攻擊威力${attackIncrease}%。`
                        };
                    })
                },
                {
                    id: "darkSoul",
                    name: "暗之靈魂",
                    maxLevel: 10,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "召喚暗黑之魂(持續15分鐘)，永久提升武器熟練度，若因神聖之火技能造成隊友HP超過MAX值(3萬)，每超出1500點HP將獲得1%傷害減免效果。",
                    imageUrl: "images/darkSoul.png",
                    levels: Array(11).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP規律: 從 120 開始每級減少 6 (1級=114, 10級=60)
                        const mp = 120 - (i * 6);

                        // 2. 持續時間: 固定 15 分鐘
                        const duration = "15分";

                        // 3. 熟練度規律: 每 3 級增加 5%
                        // 1-3級: 5%, 4-6級: 10%, 7-9級: 15%, 10級: 20%
                        const mastery = Math.ceil(i / 3) * 5;

                        // 4. 減少傷害: 固定機制描述
                        const dmgReduction = "每超過1500額外增加1%";

                        const effect = `消耗MP: ${mp}, 持續時間: ${duration}, 熟練度: ${mastery}%, 減少傷害: ${dmgReduction}`;

                        return {
                            effect: effect,
                            fullDescription: `召喚暗黑之魂。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                   id: "darkSpiritHeal",
    name: "闇靈治癒",
    maxLevel: 25,
    requiredLevel: 120,
    preRequisite: { "darkSoul": 1 }, // 需召喚暗黑之魂
    description: "暗黑之魂存在的一定時間之內補充黑騎士的HP，隨技能等級提高，補充量也上升。",
    imageUrl: "images/darkSpiritHeal.png",
    levels: Array(26).fill(null).map((_, i) => {
        if (i === 0) return null;

        // 1. 間隔時間: 全等級固定 4 秒
        const interval = 4;

        // 2. HP回復量: 捕捉每 5 級產生的 +60 跳躍點
        const hpValues = [
            null,
            40, 55, 70, 85, 100, // 1-5
            160, 170, 180, 190, 200, // 6-10
            260, 270, 280, 290, 300, // 11-15 (11級跳躍)
            360, 370, 380, 390, 400, // 16-20 (16級跳躍)
            460, 470, 480, 490, 500  // 21-25 (21級跳躍)
        ];

        const hpRecover = hpValues[i];

        return {
            effect: `每 ${interval} 秒回復 HP: ${hpRecover}`,
            fullDescription: `暗黑之魂附身期間，每 ${interval} 秒自動回復 HP ${hpRecover}。`
        };
    })
                },
                {
                    id: "darkGuardian",
                    name: "黑暗守護",
                    maxLevel: 25,
                    requiredLevel: 120,
                    preRequisite: { "darkSoul": 1 },
                    description: "暗黑之魂存在的時間之內幫角色賦予狀態，隨技能等級提高，物理防禦力、魔法防禦力、物理攻擊力、攻擊速度、無視防禦上升。",
                    imageUrl: "images/darkGuardian.png",
                    levels: Array(26).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 固定屬性
                        const interval = "4秒";
                        const duration = "240秒";

                        // 2. 階梯解鎖邏輯
                        // 物防：1-5級成長(20*i)，6級後封頂100
                        const pDef = i <= 5 ? i * 20 : 100;

                        // 魔防：6-10級成長(20*(i-5))，11級後封頂100
                        let mDef = "-";
                        if (i >= 6) {
                            mDef = i <= 10 ? (i - 5) * 20 : 100;
                        }

                        // 攻擊速度：11級解鎖，固定提升1階段
                        const atkSpeed = i >= 11 ? "提升1階段" : "-";

                        // 攻擊力：16-20級成長(1*(i-15))，21級後封頂5
                        let atk = "-";
                        if (i >= 16) {
                            atk = i <= 20 ? (i - 15) : 5;
                        }

                        // 無視防禦：21-25級成長(6%*(i-20))
                        let ignoreDef = "-";
                        if (i >= 21) {
                            ignoreDef = `${(i - 20) * 6}%`;
                        }

                        const effect = `間隔: ${interval}, 持續: ${duration}, 物防: ${pDef}, 魔防: ${mDef}, 攻速: ${atkSpeed}, 攻擊: ${atk}, 無視防禦: ${ignoreDef}`;

                        return {
                            effect: effect,
                            fullDescription: `暗黑之魂存在的時間之內幫角色賦予狀態。等級${i}效果：${effect}。`
                        };
                    })
                }
            ],
            "超技能": [],
            "5轉技能": [],
            "共通技能": []
        }
    },
    "箭神 (Bowmaster)": {
        emblemUrl: 'emblems/Bowmaster.png',
        startingLevelForSp: 10, // 弓箭手系通常10等轉職
        jobAdvancementSpBonuses: [10, 30, 70, 120],
        jobStagesOrder: ["0轉 (新手)", "1轉 (弓箭手)", "2轉 (獵人)", "3轉 (遊俠)", "4轉 (箭神)", "超技能", "5轉技能", "共通技能"],
        spRequiredFor2ndJob: 61, // 其他職業2轉點數需求
        spRequiredFor3rdJob: 182, // 其他職業3轉點數需求
        spRequiredFor4thJob: 333, // 4轉通用點數需求
        skills: {
            "0轉 (新手)": [],
            "1轉 (弓箭手)": [
                {
                    id: "archeryMastery",
                    name: "精準強化",
                    maxLevel: 16,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "增加命中率",
                    imageUrl: "images/archeryMastery.png", // 確保圖片檔案存在
                    levels: Array(17).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `命中率: ${i}`,
                        fullDescription: `增加命中率。等級${i}效果：命中率${i}。`
                    })
                },
                {
                    id: "eyeOfTheAmazon",
                    name: "百步穿楊",
                    maxLevel: 8,
                    requiredLevel: 10,
                    preRequisite: { "archeryMastery": 3 },
                    description: "增加弓或弩弓的射程距離",
                    imageUrl: "images/eyeOfTheAmazon.png", // 確保圖片檔案存在
                    levels: [
                        null, null, null, null, null, null, null, null, // Levels 1-7 are null/empty as per provided data
                        { effect: "射程: 120", fullDescription: "增加弓或弩弓的射程距離。等級8效果：射程120。" } // Level 8 data
                    ]
                },
                {
                    id: "criticalShot",
                    name: "霸王箭",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "攻擊中會有一定比例出現致命性一擊",
                    imageUrl: "images/criticalShot.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let procRate, critAttack;
                        if (i === 0) return null;
                        procRate = i * 2;
                        critAttack = 100 + i * 5;
                        return {
                            effect: `發動率: ${procRate}%, 暴擊攻擊力: ${critAttack}%`,
                            fullDescription: `攻擊中會有一定比例出現致命性一擊。等級${i}效果：發動率${procRate}%，暴擊攻擊力${critAttack}%。`
                        };
                    })
                },
                {
                    id: "focus",
                    name: "集中術",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: { "archeryMastery": 3 },
                    description: "可在一定時間集中精神，增加命中率和迴避率。",
                    imageUrl: "images/focus.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, hitRate, avoidRate, duration;
                        if (i === 0) return null;
                        mp = i <= 10 ? 8 : 16;
                        hitRate = i;
                        avoidRate = i;
                        duration = i * 10 + 100; // From 110s to 300s
                        return {
                            effect: `消耗MP: ${mp}, 命中率: ${hitRate}, 迴避率: ${avoidRate}, 持續時間: ${duration}秒`,
                            fullDescription: `可在一定時間集中精神，增加命中率和迴避率。等級${i}效果：消耗MP${mp}，命中率${hitRate}，迴避率${avoidRate}，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    "id": "arrowBlow",
                    "name": "斷魂箭",
                    "maxLevel": 20,
                    "requiredLevel": 10,
                    "preRequisite": {},
                    "description": "發射強力的箭矢，對敵人造成較大的殺傷力。",
                    "imageUrl": "images/arrowBlow.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, attack;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        const mpCosts = [null, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 13];
                        mpCost = mpCosts[i];

                        // 攻擊力 的規律：分段線性
                        const attacks = [null, 190, 193, 196, 200, 203, 206, 210, 213, 216, 220, 223, 226, 230, 233, 236, 240, 243, 248, 253, 260];
                        attack = attacks[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}%`,
                            fullDescription: `發射強力的箭矢，對敵人造成較大的殺傷力。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    "id": "doubleShot",
                    "name": "二連箭",
                    "maxLevel": 20,
                    "requiredLevel": 10,
                    "preRequisite": { "arrowBlow": 1 },
                    "description": "一次射出兩枝箭，向怪物發動兩次攻擊。",
                    "imageUrl": "images/doubleShot.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, attack;
                        if (i === 0) return null;

                        // 消耗MP 的精確數值
                        const mpCosts = [null, 8, 8, 8, 8, 9, 9, 11, 12, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15];
                        mpCost = mpCosts[i];

                        // 攻擊力 的精確數值
                        const attacks = [null, 76, 78, 80, 82, 86, 88, 90, 94, 96, 100, 102, 106, 108, 112, 114, 118, 120, 124, 126, 130];
                        attack = attacks[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}%`,
                            fullDescription: `一次射出兩枝箭，向怪物發動兩次攻擊。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}%。`
                        };
                    })
                }
            ],
            "2轉 (獵人)": [
                {
                    id: "bowMastery",
                    name: "精準之弓",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "提升弓系列武器的命中率及熟練度，此技能必須是配帶弓的情況下，才能發揮作用。",
                    imageUrl: "images/bowMastery.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let hitRate, mastery;
                        if (i === 0) return null;
                        const hitRates = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
                        const masteries = [null, 15, 15, 20, 20, 25, 25, 30, 30, 35, 35, 40, 40, 45, 45, 50, 50, 55, 55, 60, 60];
                        hitRate = hitRates[i];
                        mastery = masteries[i];
                        return {
                            effect: `命中率: ${hitRate}, 熟練度: ${mastery}%`,
                            fullDescription: `提升弓系列武器的命中率及熟練度，此技能必須是配帶弓的情況下，才能發揮作用。等級${i}效果：命中率${hitRate}，熟練度${mastery}%。`
                        };
                    })
                },
                {
                    id: "finalAttackBow",
                    name: "終極之弓",
                    maxLevel: 30,
                    requiredLevel: 30,
                    preRequisite: { "bowMastery": 3 },
                    description: "按照一定機率，在使用攻擊技能後發動連續攻擊。此技能必須是配帶弓的情況下，才能發揮作用。",
                    imageUrl: "images/finalAttackBow.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let procRate, attack;
                        if (i === 0) return null;
                        procRate = i * 2;
                        attack = 100 + i * 5;
                        return {
                            effect: `連續攻擊率: ${procRate}%, 攻擊力: ${attack}%`,
                            fullDescription: `按照一定機率，在使用攻擊技能後發動連續攻擊。此技能必須是配帶弓的情況下，才能發揮作用。等級${i}效果：連續攻擊率${procRate}%，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "bowBooster",
                    name: "快速之箭",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: { "bowMastery": 5 },
                    description: "消耗HP與MP，將使用弓箭的攻擊速度，向上提升一個等級。此技能必須是配帶弓的情況下，才能發揮作用。",
                    imageUrl: "images/bowBooster.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, hp, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const hpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];
                        mp = mpCosts[i];
                        hp = hpCosts[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 消耗HP: ${hp}, 持續時間: ${duration}秒`,
                            fullDescription: `消耗HP與MP，將使用弓箭的攻擊速度，向上提升一個等級。此技能必須是配帶弓的情況下，才能發揮作用。等級${i}效果：消耗MP${mp}，消耗HP${hp}，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "powerKnockBack",
                    name: "強弓",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "提升揮動弓時使怪物後退的機率，而且隨著等級上升，可擊退怪物數量也會增加。",
                    imageUrl: "images/powerKnockBack.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack, knockbackRate, numEnemies;
                        if (i === 0) return null;
                        const mpCosts = [null, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 16, 16, 16, 16, 16, 16, 16, 16, 16, 15];
                        const attacks = [null, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200];
                        const knockbackRates = [null, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 70];
                        const numEnemiesArr = [null, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        knockbackRate = knockbackRates[i];
                        numEnemies = numEnemiesArr[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 擊退率: ${knockbackRate}%, 擊怪數量: ${numEnemies}`,
                            fullDescription: `提升揮動弓時使怪物後退的機率，而且隨著等級上升，可擊退怪物數量也會增加。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，擊退率${knockbackRate}%，擊怪數量${numEnemies}。`
                        };
                    })
                },
                {
                    "id": "arrowPlatter",
                    "name": "無形之箭",
                    "maxLevel": 20,
                    "requiredLevel": 30,
                    "preRequisite": { "crossbowBooster": 5 },
                    "description": "在一定時間內，在不需消耗箭的情況下，也可進行攻擊。此技能必須是配帶弓或弩的情況下，才能發揮作用。",
                    "imageUrl": "images/arrowPlatter.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, duration, ignoreDefense;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        if (i >= 1 && i <= 5) {
                            mpCost = 10;
                        } else if (i >= 6 && i <= 10) {
                            mpCost = 10;
                        } else if (i >= 11 && i <= 15) {
                            mpCost = 20;
                        } else if (i >= 16 && i <= 20) {
                            mpCost = 20;
                        }

                        // 持續時間 的規律
                        duration = 100 + (i - 10) * 10;
                        if (i <= 5) { duration = 100 + (i - 1) * 10; }
                        if (i === 1) { duration = 110; }
                        // 根據提供的精確數值來生成
                        const durations = [null, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];
                        duration = durations[i];

                        // 無視防禦力 的規律
                        if (i >= 1 && i <= 5) { ignoreDefense = 1; }
                        else if (i >= 6 && i <= 10) { ignoreDefense = 2; }
                        else if (i >= 11 && i <= 15) { ignoreDefense = 3; }
                        else if (i >= 16 && i <= 20) { ignoreDefense = 4; }
                        if (i === 1) { ignoreDefense = 1; }
                        // 根據提供的精確數值來生成
                        const ignoreDefenses = [null, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4];
                        ignoreDefense = ignoreDefenses[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 持續時間: ${duration}秒, 無視防禦力: ${ignoreDefense}%`,
                            fullDescription: `在一定時間內，在不需消耗箭的情況下，也可進行攻擊。等級${i}效果：消耗MP${mpCost}，持續時間${duration}秒，無視防禦力${ignoreDefense}%。此技能必須是配帶弓或弩的情況下，才能發揮作用。`
                        };
                    })
                },
                {
                    id: "bombArrow",
                    name: "炸彈箭",
                    maxLevel: 30,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "利用安裝炸彈的箭攻擊怪物，而周圍的怪物則以一定比例暈倒。能夠攻擊的對手上限為6人，而且只限配帶弓的狀況下才能使用。",
                    imageUrl: "images/bombArrow.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, attack, stunRate;
                        if (i === 0) return null;
                        mp = i <= 15 ? 14 : 28;
                        attack = 70 + i * 2;
                        stunRate = 30 + i;
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 暈眩率: ${stunRate}%`,
                            fullDescription: `利用安裝炸彈的箭攻擊怪物，而周圍的怪物則以一定比例暈倒。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，暈眩率${stunRate}%。`
                        };
                    })
                }
            ],
            "3轉 (遊俠)": [
                {
                    id: "nimbleFeet", // 假設這是疾風步，因為移動速度增加
                    name: "疾風步",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "提升移動速度",
                    imageUrl: "images/nimbleFeet.png",
                    levels: Array(21).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `移動速度: ${10 + i}`,
                        fullDescription: `提升移動速度。等級${i}效果：移動速度${10 + i}。`
                    })
                },
                {
                    "id": "mortalBlow",
                    "name": "致命箭",
                    "maxLevel": 20,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "無視怪物5%物理防禦，同時增加昇龍弩跟箭雨傷害60%。",
                    "imageUrl": "images/mortalBlow.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let ignoreDef, dmgIncrease;
                        if (i === 0) return null;

                        // 無視防禦力 的規律
                        if (i >= 1 && i <= 5) {
                            ignoreDef = 1;
                        } else if (i >= 6 && i <= 10) {
                            ignoreDef = 2;
                        } else if (i >= 11 && i <= 15) {
                            ignoreDef = 3;
                        } else if (i >= 16 && i <= 19) {
                            ignoreDef = 4;
                        } else if (i === 20) {
                            ignoreDef = 5;
                        }

                        // 傷害增加 的規律：線性增加 (每次加3%) => i * 3
                        dmgIncrease = i * 3;

                        return {
                            effect: `無視防禦力: ${ignoreDef}%, 傷害增加: ${dmgIncrease}%`,
                            fullDescription: `無視怪物5%物理防禦，同時增加昇龍弩跟箭雨傷害60%。等級${i}效果：無視防禦力${ignoreDef}%，傷害增加${dmgIncrease}%。`
                        };
                    })
                },
                {
                    id: "puppet",
                    name: "替身術",
                    maxLevel: 20,
                    requiredLevel: 70, // 通常為三轉技能
                    preRequisite: {},
                    description: "在一定時間內製造出自己的分身。 怪物攻擊時傀儡代替承受傷害的效果。",
                    imageUrl: "images/puppet.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP與抵擋傷害: 每 5 級跳轉一次
                        // MP: 23 -> 26 -> 29 -> 32
                        // 抵擋: 10% -> 15% -> 20% -> 25%
                        const stage = Math.floor((i - 1) / 5);
                        const mp = 23 + (stage * 3);
                        const damageResist = 10 + (stage * 5);

                        // 2. 持續時間規律:
                        // 1-2級: 5s, 3-5級: 10s, 6-8級: 20s, 9-11級: 30s... 略有交錯
                        // 直接依據數據表設定階梯：
                        let duration;
                        if (i <= 2) duration = 5;
                        else if (i <= 5) duration = 10;
                        else if (i <= 8) duration = 20;
                        else if (i <= 11) duration = 30;
                        else if (i <= 14) duration = 40;
                        else if (i <= 17) duration = 50;
                        else duration = 60;

                        // 3. 替身 HP 規律:
                        // 1-5級: 500 + (i-1)*100
                        // 6-10級: 1000 + (i-6)*200
                        // 11-15級: 2000 + (i-11)*400
                        // 16-20級: 4000 + (i-16)*500
                        let hp;
                        if (i <= 5) hp = 400 + (i * 100);
                        else if (i <= 10) hp = 1000 + (i - 6) * 200;
                        else if (i <= 15) hp = 2000 + (i - 11) * 400;
                        else hp = 4000 + (i - 16) * 500;

                        const effect = `消耗MP: ${mp}, 抵擋傷害: ${damageResist}%, 持續時間: ${duration}秒, 替身HP: ${hp}`;

                        return {
                            effect: effect,
                            fullDescription: `在一定時間內製造出自己的分身。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    "id": "strafeBow",
                    "name": "四連箭",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "同時射出四發弓箭給予敵人四次傷害。只限裝備弓箭才可使用。增加BOSS傷害20%，增加爆擊率30%，最大爆擊傷害上限為150%，最大爆擊率上限為70%。",
                    "imageUrl": "images/strafeBow.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, attack, bonusCritRate;
                        if (i === 0) return null;

                        // 消耗MP 的規律：
                        // 1-15級: 26
                        // 16-30級: 32
                        if (i >= 1 && i <= 15) {
                            mpCost = 26;
                        } else if (i >= 16 && i <= 30) {
                            mpCost = 32;
                        }

                        // 攻擊力 的規律：71% 到 100% (每次加1%) => 70 + i
                        attack = 70 + i;

                        // 追加爆擊機率 的規律：1% 到 30% (每次加1%) => i
                        bonusCritRate = i;

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}%, 追加爆擊機率: ${bonusCritRate}%`,
                            fullDescription: `同時射出四發弓箭給予敵人四次傷害。只限裝備弓箭才可使用。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}%，追加爆擊機率${bonusCritRate}%。增加BOSS傷害20%，增加爆擊率30%，最大爆擊傷害上限為150%，最大爆擊率上限為70%。`
                        };
                    })
                },
                {
                    id: "inferno",
                    name: "烈火箭",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "利用烈焰攻擊敵人，在攻擊目標敵人的同時也會使周圍敵人造成傷害。最多攻擊6個敵人，只限裝備弓箭才能使用。",
                    imageUrl: "images/inferno.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, attack;
                        if (i === 0) return null;
                        mp = i <= 10 ? 20 : (i <= 20 ? 25 : 30);
                        attack = 49 + i * 3; // Simplified
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `利用烈焰攻擊敵人，在攻擊目標敵人的同時也會使周圍敵人造成傷害。等級${i}效果：消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    "id": "arrowRain",
                    "name": "箭雨",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": { "mortalBlow": 5 },
                    "description": "從高空墜落箭雨攻擊周圍的敵人，最多攻擊6個怪物。只限裝備弓箭才能使用。",
                    "imageUrl": "images/arrowRain.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, attack;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        if (i >= 1 && i <= 10) {
                            mpCost = 18;
                        } else if (i >= 11 && i <= 20) {
                            mpCost = 23;
                        } else if (i >= 21 && i <= 30) {
                            mpCost = 28;
                        }

                        // 攻擊力 的規律 (精確數值)
                        const attacks = [null, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 113, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 154, 156, 158, 159, 160];
                        attack = attacks[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}%`,
                            fullDescription: `從高空墜落箭雨攻擊周圍的敵人，最多攻擊6個怪物。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "summonSilverHawk",
                    name: "銀鷹召喚",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: { "puppet": 5 },
                    description: "消費召喚石召喚銀色老鷹，在一定的時間會跟隨在主人周圍，並且對附近的怪物發動攻擊。",
                    imageUrl: "images/summonSilverHawk.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, procRate, numAttacks, duration;
                        if (i === 0) return null;
                        mp = 30 + Math.floor((i - 1) / 5) * 2; // Simplified
                        procRate = 50 + Math.floor((i - 1) / 5) * 3; // Simplified
                        numAttacks = 13 + Math.floor((i - 1) / 5) * 3; // Simplified
                        duration = 100 + Math.floor((i - 1) / 5) * 15; // Simplified
                        return {
                            effect: `消耗MP: ${mp}, 發動率: ${procRate}%, 攻擊次數: ${numAttacks}, 持續時間: ${duration}秒`,
                            fullDescription: `消費召喚石召喚銀色老鷹，在一定的時間會跟隨在主人周圍，並且對附近的怪物發動攻擊。等級${i}效果：消耗MP${mp}，發動率${procRate}%，攻擊次數${numAttacks}，持續時間${duration}秒。`
                        };
                    })
                }
            ],
            "4轉 (箭神)": [
                {
                    id: "mapleWarrior",
                    name: "楓葉祝福",
                    maxLevel: 30,
                    requiredLevel: 120, // 楓葉祝福通常無等級限制，可根據需求自行修改
                    preRequisite: {},
                    description: "全職業的共通技能，一定時間內全能力(力量、敏捷、智力、幸運)增加固定%數。",
                    imageUrl: "images/mapleWarrior.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 10, 持續時間: 30秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級1效果：消耗MP 10，持續時間 30秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 60秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級2效果：消耗MP 10，持續時間 60秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 90秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級3效果：消耗MP 10，持續時間 90秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 120秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級4效果：消耗MP 10，持續時間 120秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 150秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級5效果：消耗MP 10，持續時間 150秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 180秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級6效果：消耗MP 20，持續時間 180秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 210秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級7效果：消耗MP 20，持續時間 210秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 240秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級8效果：消耗MP 20，持續時間 240秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 270秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級9效果：消耗MP 20，持續時間 270秒，全能力增加 5%。" },
                        { effect: "消耗MP: 20, 持續時間: 300秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級10效果：消耗MP 20，持續時間 300秒，全能力增加 5%。" },
                        { effect: "消耗MP: 30, 持續時間: 330秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級11效果：消耗MP 30，持續時間 330秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 360秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級12效果：消耗MP 30，持續時間 360秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 390秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級13效果：消耗MP 30，持續時間 390秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 420秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級14效果：消耗MP 30，持續時間 420秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 450秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級15效果：消耗MP 30，持續時間 450秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 480秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級16效果：消耗MP 40，持續時間 480秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 510秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級17效果：消耗MP 40，持續時間 510秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 540秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級18效果：消耗MP 40，持續時間 540秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 570秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級19效果：消耗MP 40，持續時間 570秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 600秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級20效果：消耗MP 40，持續時間 600秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 630秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級21效果：消耗MP 40，持續時間 630秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 660秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級22效果：消耗MP 40，持續時間 660秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 690秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級23效果：消耗MP 40，持續時間 690秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 720秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級24效果：消耗MP 40，持續時間 720秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 750秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級25效果：消耗MP 40，持續時間 750秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 780秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級26效果：消耗MP 40，持續時間 780秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 810秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級27效果：消耗MP 40，持續時間 810秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 840秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級28效果：消耗MP 40，持續時間 840秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 870秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級29效果：消耗MP 40，持續時間 870秒，全能力增加 15%。" },
                        { effect: "消耗MP: 40, 持續時間: 900秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級30效果：消耗MP 40，持續時間 900秒，全能力增加 15%。" }
                    ]
                },
                {
                    id: "heroesWill",
                    name: "楓葉淨化",
                    maxLevel: 1,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。",
                    imageUrl: "images/heroesWill.png",
                    levels: [
                        null,
                        {
                            effect: "消耗MP: 30, 冷卻時間: 600秒",
                            fullDescription: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。等級1效果：消耗MP 30，冷卻時間 600秒。"
                        }
                    ]
                },
                {
                    id: "sharpEyes",
                    name: "會心之眼",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "鎖定敵方弱點，一定時間內，增加本身和組隊的爆擊率跟爆擊傷害。",
                    imageUrl: "images/sharpEyes.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const mpCosts = [null, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 45, 45, 45, 45, 45, 44, 43, 42, 41, 40];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];
                        const attacks = [null, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
                        const critChances = [null, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15];
                        return {
                            effect: `消耗MP: ${mpCosts[i]}, 持續時間: ${durations[i]}秒, 攻擊力: ${attacks[i]}%, 必殺機率: ${critChances[i]}%`,
                            fullDescription: `鎖定敵方弱點，一定時間內，增加本身和組隊的爆擊率跟爆擊傷害。等級${i}效果：消耗MP${mpCosts[i]}，持續時間${durations[i]}秒，攻擊力${attacks[i]}%，必殺機率${critChances[i]}%。`
                        };
                    })
                },
                {
                    id: "dragonBreath",
                    name: "龍魂之箭",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "寄宿在弓箭上的龍魂，100%擊退敵人，最多攻擊6個敵人。(攻擊距離固定為440)",
                    imageUrl: "images/dragonBreath.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const mpCosts = [null, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36];
                        const attacks = [null, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100];
                        const numEnemiesArr = [null, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
                        return {
                            effect: `消耗MP: ${mpCosts[i]}, 攻擊力: ${attacks[i]}%, 敵人數目: ${numEnemiesArr[i]}`,
                            fullDescription: `寄宿在弓箭上的龍魂，100%擊退敵人，最多攻擊6個敵人。(攻擊距離固定為440) 等級${i}效果：消耗MP${mpCosts[i]}，攻擊力${attacks[i]}%，敵人數目${numEnemiesArr[i]}。`
                        };
                    })
                },
                {
                    id: "bowExpert",
                    name: "弓術精通",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "拿弓時再往上增加攻擊力、爆擊率。",
                    imageUrl: "images/bowExpert.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const masteries = [null, 65, 65, 65, 65, 65, 70, 70, 70, 70, 70, 75, 75, 75, 75, 75, 80, 80, 80, 80, 80, 85, 85, 85, 85, 85, 90, 90, 90, 90, 90];
                        const pAttacks = [null, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10];
                        const critChances = [null, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5];
                        let effect = `熟練度: ${masteries[i]}%`;
                        if (pAttacks[i] > 0) effect += `, 物理攻擊力: ${pAttacks[i]}`;
                        if (critChances[i] > 0) effect += `, 爆擊率: ${critChances[i]}%`;
                        return {
                            effect: effect,
                            fullDescription: `拿弓時再往上增加攻擊力、爆擊率。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "hurricane",
                    name: "暴風神射",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "寄宿在箭上的風神，造成超快速的箭連射，射出速度為每秒10隻箭矢，每支箭消耗定量的MP，按住按鈕就會連射。且有一定的機率向另一隻怪物發射額外箭矢，並增加10%對BOSS的傷害。",
                    imageUrl: "images/hurricane.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP規律: 1-9級:6, 10-20級:8, 21-30級:9
                        let mp;
                        if (i <= 9) mp = 6;
                        else if (i <= 20) mp = 8;
                        else mp = 9;

                        // 2. 攻擊威力: 起始 80%，每級增加 1%
                        const power = 80 + i;

                        // 3. 追加攻擊機率: 起始 20%，每級增加 1%
                        const extraAttackChance = 20 + i;

                        const effect = `消耗MP: ${mp}, 攻擊威力: ${power}%, 追加攻擊機率: ${extraAttackChance}%`;

                        return {
                            effect: effect,
                            fullDescription: `寄宿在箭上的風神，造成超快速的箭連射。等級${i}效果：${effect}。增加10%對BOSS的傷害。`
                        };
                    })
                },
                {
                    id: "phoenix",
                    name: "召喚鳳凰",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: { "summonSilverHawk": 15 },
                    description: "召喚一隻火屬性的鳳凰出來幫助玩家攻擊，最多攻擊4名敵人。",
                    imageUrl: "images/phoenix.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 從 40 開始，每級增加 2 (1級=42, 30級=100)
                        const mp = 40 + (i * 2);

                        // 2. 持續時間: 每級增加 10 秒
                        const duration = i * 10;

                        // 3. 攻擊力規律分析：
                        // 1-10級: 300 + (i * 5) [1級=305, 10級=350]
                        // 11-20級: 350 + (i-10)*5 + 50 = 295 + (i * 5) + 50 = 345 + (i * 5) [11級=405, 20級=450]
                        // 21-30級: 450 + (i-20)*5 + 50 = 390 + (i * 5) + 100 = 490 + (i * 5) [21級=505, 30級=550]

                        // 簡化逻辑：基礎值隨每10級增加 50
                        const stageBonus = Math.floor((i - 1) / 10) * 50;
                        const attack = 300 + (i * 5) + stageBonus;

                        const effect = `消耗MP: ${mp}, 持續時間: ${duration}秒, 攻擊力: ${attack}`;

                        return {
                            effect: effect,
                            fullDescription: `召喚一隻火屬性的鳳凰出來幫助玩家攻擊。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "hamstringShot",
                    name: "牽制射擊",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "一定機率向怪物的腿部一擊，使怪物的移動速度下降，適用所有攻擊型態。",
                    imageUrl: "images/hamstringShot.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP規律
                        // 1-10級: 12
                        // 11-20級: 24
                        // 21-24級: 36
                        // 25-30級: 從 35 開始每級遞減 1 (35, 34, 33, 32, 31, 30)
                        let mp;
                        if (i <= 10) mp = 12;
                        else if (i <= 20) mp = 24;
                        else if (i <= 24) mp = 36;
                        else mp = 35 - (i - 25);

                        // 2. 持續時間: 每級增加 10 秒
                        const duration = i * 10;

                        // 3. 準確率: 起始 10%，每級增加 1%
                        const accuracy = 10 + i;

                        // 4. 怪物速度: 每級減少 2
                        const mobSpeed = -(i * 2);

                        // 5. 綁腿時間: 每 10 級增加 5 秒 (1-10=5s, 11-20=10s, 21-30=15s)
                        const hamstringTime = Math.ceil(i / 10) * 5;

                        const effect = `消耗MP: ${mp}, 持續時間: ${duration}秒, 準確率: ${accuracy}%, 怪物速度: ${mobSpeed}, 綁腿時間: ${hamstringTime}秒`;

                        return {
                            effect: effect,
                            fullDescription: `一定機率使怪物的移動速度下降。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
    id: "concentrate",
    name: "念力集中",
    maxLevel: 30,
    requiredLevel: 120,
    preRequisite: {},
    description: "一定時間內攻擊力上升，技能施放的時間內MP的使用量減少。(下次施放待機時間6分鐘)",
    imageUrl: "images/concentrate.png",
    levels: Array(31).fill(null).map((_, i) => {
        if (i === 0) return null;

        // 1. 消耗MP: 10 + i (線性成長，1級=11, 30級=40)
        const mpCost = 10 + i;

        // 2. 攻擊力: 使用陣列確保精準 (數據中攻擊力每2級才提升一點，有些則是連跳)
        const attackValues = [
            null,
            11, 12, 12, 13, 13, 14, 14, 15, 15, 16, // 1-10
            16, 17, 17, 18, 18, 19, 19, 20, 20, 21, // 11-20
            21, 22, 22, 23, 23, 24, 24, 25, 25, 26  // 21-30
        ];

        // 3. MP減少量: 1-20級每級+2%, 21-30級每級+1%
        const mpReduction = i <= 20 ? i * 2 : 40 + (i - 20);

        // 4. 持續時間: 數據前幾級不規律，之後為每級+8秒，使用陣列最安全
        const durations = [
            null,
            72, 78, 84, 92, 100, 108, 116, 124, 132, 140, // 1-10
            148, 156, 164, 172, 180, 188, 196, 204, 212, 220, // 11-20
            228, 236, 244, 252, 260, 268, 276, 284, 292, 300  // 21-30
        ];

        const atk = attackValues[i];
        const red = mpReduction;
        const time = durations[i];
        const cooldown = 360; // 固定6分鐘待機

        return {
            effect: `消耗MP: ${mpCost}, 攻擊力: +${atk}, MP減少量: ${red}%, 持續時間: ${time}秒`,
            fullDescription: `一定時間內增加攻擊力並減少MP消耗。等級${i}效果：攻擊力+${atk}，MP消耗減少${red}%，持續${time}秒，冷卻時間${cooldown}秒。`
        };
    })
}
            ],
            "超技能": [],
            "5轉技能": [],
            "共通技能": []
        }
    },
    "神射手 (Marksman)": {
        emblemUrl: 'emblems/Marksman.png',
        startingLevelForSp: 10, // 弓箭手系通常10等轉職
        jobAdvancementSpBonuses: [10, 30, 70, 120],
        jobStagesOrder: ["0轉 (新手)", "1轉 (弓箭手)", "2轉 (弩弓手)", "3轉 (狙擊手)", "4轉 (神射手)", "超技能", "5轉技能", "共通技能"],
        spRequiredFor2ndJob: 61, // 其他職業2轉點數需求
        spRequiredFor3rdJob: 182, // 其他職業3轉點數需求
        spRequiredFor4thJob: 333, // 4轉通用點數需求
        skills: {
            "0轉 (新手)": [],
            "1轉 (弓箭手)": [
                {
                    id: "archeryMastery",
                    name: "精準強化",
                    maxLevel: 16,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "增加命中率",
                    imageUrl: "images/archeryMastery.png", // 確保圖片檔案存在
                    levels: Array(17).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `命中率: ${i}`,
                        fullDescription: `增加命中率。等級${i}效果：命中率${i}。`
                    })
                },
                {
                    id: "eyeOfTheAmazon",
                    name: "百步穿楊",
                    maxLevel: 8,
                    requiredLevel: 10,
                    preRequisite: { "archeryMastery": 3 },
                    description: "增加弓或弩弓的射程距離",
                    imageUrl: "images/eyeOfTheAmazon.png", // 確保圖片檔案存在
                    levels: [
                        null, null, null, null, null, null, null, null,
                        { effect: "射程: 120", fullDescription: "增加弓或弩弓的射程距離。等級8效果：射程120。" }
                    ]
                },
                {
                    id: "criticalShot",
                    name: "霸王箭",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "攻擊中會有一定比例出現致命性一擊",
                    imageUrl: "images/criticalShot.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let procRate, critAttack;
                        if (i === 0) return null;
                        procRate = i * 2;
                        critAttack = 100 + i * 5;
                        return {
                            effect: `發動率: ${procRate}%, 暴擊攻擊力: ${critAttack}%`,
                            fullDescription: `攻擊中會有一定比例出現致命性一擊。等級${i}效果：發動率${procRate}%，暴擊攻擊力${critAttack}%。`
                        };
                    })
                },
                {
                    id: "focus",
                    name: "集中術",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: { "archeryMastery": 3 },
                    description: "可在一定時間集中精神，增加命中率和迴避率。",
                    imageUrl: "images/focus.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, hitRate, avoidRate, duration;
                        if (i === 0) return null;
                        mp = i <= 10 ? 8 : 16;
                        hitRate = i;
                        avoidRate = i;
                        duration = i * 10 + 100;
                        return {
                            effect: `消耗MP: ${mp}, 命中率: ${hitRate}, 迴避率: ${avoidRate}, 持續時間: ${duration}秒`,
                            fullDescription: `可在一定時間集中精神，增加命中率和迴避率。等級${i}效果：消耗MP${mp}，命中率${hitRate}，迴避率${avoidRate}，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    "id": "arrowBlow",
                    "name": "斷魂箭",
                    "maxLevel": 20,
                    "requiredLevel": 10,
                    "preRequisite": {},
                    "description": "發射強力的箭矢，對敵人造成較大的殺傷力。",
                    "imageUrl": "images/arrowBlow.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, attack;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        const mpCosts = [null, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 13];
                        mpCost = mpCosts[i];

                        // 攻擊力 的規律：分段線性
                        const attacks = [null, 190, 193, 196, 200, 203, 206, 210, 213, 216, 220, 223, 226, 230, 233, 236, 240, 243, 248, 253, 260];
                        attack = attacks[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}%`,
                            fullDescription: `發射強力的箭矢，對敵人造成較大的殺傷力。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    "id": "doubleShot",
                    "name": "二連箭",
                    "maxLevel": 20,
                    "requiredLevel": 10,
                    "preRequisite": { "arrowBlow": 1 },
                    "description": "一次射出兩枝箭，向怪物發動兩次攻擊。",
                    "imageUrl": "images/doubleShot.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, attack;
                        if (i === 0) return null;

                        // 消耗MP 的精確數值
                        const mpCosts = [null, 8, 8, 8, 8, 9, 9, 11, 12, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 15];
                        mpCost = mpCosts[i];

                        // 攻擊力 的精確數值
                        const attacks = [null, 76, 78, 80, 82, 86, 88, 90, 94, 96, 100, 102, 106, 108, 112, 114, 118, 120, 124, 126, 130];
                        attack = attacks[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}%`,
                            fullDescription: `一次射出兩枝箭，向怪物發動兩次攻擊。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}%。`
                        };
                    })
                }
            ],
            "2轉 (弩弓手)": [
                {
                    id: "crossbowMastery",
                    name: "精準之弩",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "提升弩系列武器的命中率及熟練度，此技能必須是配帶弩的情況下，才能發揮作用。",
                    imageUrl: "images/crossbowMastery.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let hitRate, mastery;
                        if (i === 0) return null;
                        const hitRates = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
                        const masteries = [null, 15, 15, 20, 20, 25, 25, 30, 30, 35, 35, 40, 40, 45, 45, 50, 50, 55, 55, 60, 60];
                        hitRate = hitRates[i];
                        mastery = masteries[i];
                        return {
                            effect: `命中率: ${hitRate}, 熟練度: ${mastery}%`,
                            fullDescription: `提升弩系列武器的命中率及熟練度，此技能必須是配帶弩的情況下，才能發揮作用。等級${i}效果：命中率${hitRate}，熟練度${mastery}%。`
                        };
                    })
                },
                {
                    id: "finalAttackCrossbow",
                    name: "終極之弩",
                    maxLevel: 30,
                    requiredLevel: 30,
                    preRequisite: { "crossbowMastery": 3 },
                    description: "按照一定機率，在使用攻擊技能後發動連續攻擊。此技能必須是配帶弩的情況下，才能發揮作用。",
                    imageUrl: "images/finalAttackCrossbow.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let procRate, attack;
                        if (i === 0) return null;
                        procRate = i * 2;
                        attack = 100 + i * 5;
                        return {
                            effect: `連續攻擊率: ${procRate}%, 攻擊力: ${attack}%`,
                            fullDescription: `按照一定機率，在使用攻擊技能後發動連續攻擊。此技能必須是配帶弩的情況下，才能發揮作用。等級${i}效果：連續攻擊率${procRate}%，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "crossbowBooster",
                    name: "快速之弩",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: { "crossbowMastery": 5 },
                    description: "消耗HP與MP，將使用弩的攻擊速度，向上提升一個等級。此技能必須是配帶弩的情況下，才能發揮作用。",
                    imageUrl: "images/crossbowBooster.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, hp, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const hpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];
                        mp = mpCosts[i];
                        hp = hpCosts[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 消耗HP: ${hp}, 持續時間: ${duration}秒`,
                            fullDescription: `消耗HP與MP，將使用弩的攻擊速度，向上提升一個等級。此技能必須是配帶弩的情況下，才能發揮作用。等級${i}效果：消耗MP${mp}，消耗HP${hp}，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "boltBurst",
                    name: "強弩",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "提升揮動弩時使怪物後退的機率，而且隨著等級上升，可擊退怪物數量也會增加。",
                    imageUrl: "images/boltBurst.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack, knockbackRate, numEnemies;
                        if (i === 0) return null;
                        const mpCosts = [null, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16];
                        const attacks = [null, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200];
                        const knockbackRates = [null, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40];
                        const numEnemiesArr = [null, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        knockbackRate = knockbackRates[i];
                        numEnemies = numEnemiesArr[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 擊退率: ${knockbackRate}%, 擊怪數量: ${numEnemies}`,
                            fullDescription: `提升揮動弩時使怪物後退的機率，而且隨著等級上升，可擊退怪物數量也會增加。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，擊退率${knockbackRate}%，擊怪數量${numEnemies}。`
                        };
                    })
                },
                {
                    "id": "arrowPlatter",
                    "name": "無形之箭",
                    "maxLevel": 20,
                    "requiredLevel": 30,
                    "preRequisite": { "crossbowBooster": 5 },
                    "description": "在一定時間內，在不需消耗箭的情況下，也可進行攻擊。此技能必須是配帶弓或弩的情況下，才能發揮作用。",
                    "imageUrl": "images/arrowPlatter.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, duration, ignoreDefense;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        if (i >= 1 && i <= 5) {
                            mpCost = 10;
                        } else if (i >= 6 && i <= 10) {
                            mpCost = 10;
                        } else if (i >= 11 && i <= 15) {
                            mpCost = 20;
                        } else if (i >= 16 && i <= 20) {
                            mpCost = 20;
                        }

                        // 持續時間 的規律
                        duration = 100 + (i - 10) * 10;
                        if (i <= 5) { duration = 100 + (i - 1) * 10; }
                        if (i === 1) { duration = 110; }
                        // 根據提供的精確數值來生成
                        const durations = [null, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];
                        duration = durations[i];

                        // 無視防禦力 的規律
                        if (i >= 1 && i <= 5) { ignoreDefense = 1; }
                        else if (i >= 6 && i <= 10) { ignoreDefense = 2; }
                        else if (i >= 11 && i <= 15) { ignoreDefense = 3; }
                        else if (i >= 16 && i <= 20) { ignoreDefense = 4; }
                        if (i === 1) { ignoreDefense = 1; }
                        // 根據提供的精確數值來生成
                        const ignoreDefenses = [null, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4];
                        ignoreDefense = ignoreDefenses[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 持續時間: ${duration}秒, 無視防禦力: ${ignoreDefense}%`,
                            fullDescription: `在一定時間內，在不需消耗箭的情況下，也可進行攻擊。等級${i}效果：消耗MP${mpCost}，持續時間${duration}秒，無視防禦力${ignoreDefense}%。此技能必須是配帶弓或弩的情況下，才能發揮作用。`
                        };
                    })
                },
                {
                    "id": "piercingArrow",
                    "name": "穿透之箭",
                    "maxLevel": 30,
                    "requiredLevel": 30,
                    "preRequisite": {},
                    "description": "發射的弩箭可貫穿怪物，每當慣穿第一個怪物時，其殺傷力會減弱，最多能貫穿6個怪物。此技能必須是配帶弩的情況下，才能發揮作用。",
                    "imageUrl": "images/piercingArrow.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, attack;
                        if (i === 0) return null;

                        // 消耗MP 的精確數值
                        const mpCosts = [null, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 25, 25, 25, 25, 25, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 28, 28, 28, 28, 28];
                        mpCost = mpCosts[i];

                        // 攻擊力 的精確數值
                        const attacks = [null, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180];
                        attack = attacks[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}%`,
                            fullDescription: `發射的弩箭可貫穿怪物，每當慣穿第一個怪物時，其殺傷力會減弱，最多能貫穿6個怪物。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}%。`
                        };
                    })
                }
            ],
            "3轉 (狙擊手)": [
                {
                    id: "nimbleFeet",
                    name: "疾風步",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "提升移動速度",
                    imageUrl: "images/nimbleFeet.png",
                    levels: Array(21).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `移動速度: ${10 + i}`,
                        fullDescription: `提升移動速度。等級${i}效果：移動速度${10 + i}。`
                    })
                },
                {
                    "id": "mortalBlow",
                    "name": "致命箭",
                    "maxLevel": 20,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "無視怪物5%物理防禦，同時增加昇龍弩跟箭雨傷害60%。",
                    "imageUrl": "images/mortalBlow.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let ignoreDef, dmgIncrease;
                        if (i === 0) return null;

                        // 無視防禦力 的規律
                        if (i >= 1 && i <= 5) {
                            ignoreDef = 1;
                        } else if (i >= 6 && i <= 10) {
                            ignoreDef = 2;
                        } else if (i >= 11 && i <= 15) {
                            ignoreDef = 3;
                        } else if (i >= 16 && i <= 19) {
                            ignoreDef = 4;
                        } else if (i === 20) {
                            ignoreDef = 5;
                        }

                        // 傷害增加 的規律：線性增加 (每次加3%) => i * 3
                        dmgIncrease = i * 3;

                        return {
                            effect: `無視防禦力: ${ignoreDef}%, 傷害增加: ${dmgIncrease}%`,
                            fullDescription: `無視怪物5%物理防禦，同時增加昇龍弩跟箭雨傷害60%。等級${i}效果：無視防禦力${ignoreDef}%，傷害增加${dmgIncrease}%。`
                        };
                    })
                },
                {
                    "id": "puppet",
                    "name": "替身術",
                    "maxLevel": 20,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "在一定時間內製造出自己的分身。 怪物攻擊時傀儡代替承受25%傷害的效果。",
                    "imageUrl": "images/puppet.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, damageReduction, duration, puppetHP;
                        if (i === 0) return null;

                        // 消耗MP 的精確數值
                        const mpCosts = [null, 23, 23, 23, 23, 23, 26, 26, 26, 26, 26, 29, 29, 29, 29, 29, 32, 32, 32, 32, 32];
                        mpCost = mpCosts[i];

                        // 抵擋傷害 的精確數值
                        const damageReductions = [null, 10, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
                        damageReduction = damageReductions[i];

                        // 持續時間 的精確數值
                        const durations = [null, 5, 5, 10, 10, 10, 20, 20, 20, 30, 30, 30, 40, 40, 40, 50, 50, 50, 60, 60, 60];
                        duration = durations[i];

                        // 替身HP 的精確數值
                        const puppetHPs = [null, 500, 600, 700, 800, 900, 1000, 1200, 1400, 1600, 1800, 2000, 2400, 2800, 3200, 3600, 4000, 4500, 5000, 5500, 6000];
                        puppetHP = puppetHPs[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 抵擋傷害: ${damageReduction}%, 持續時間: ${duration}秒, 替身HP: ${puppetHP}`,
                            fullDescription: `在一定時間內製造出自己的分身。怪物攻擊時傀儡代替承受25%傷害的效果。等級${i}效果：消耗MP${mpCost}，抵擋傷害${damageReduction}%，持續${duration}秒，替身HP${puppetHP}。`
                        };
                    })
                },
                {
                    "id": "strafeBow",
                    "name": "四連箭",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "同時射出四發弓箭給予敵人四次傷害。只限裝備弓箭才可使用。增加BOSS傷害20%，增加爆擊率30%，最大爆擊傷害上限為150%，最大爆擊率上限為70%。",
                    "imageUrl": "images/strafeBow.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, attack, bonusCritRate;
                        if (i === 0) return null;

                        // 消耗MP 的規律：
                        // 1-15級: 26
                        // 16-30級: 32
                        if (i >= 1 && i <= 15) {
                            mpCost = 26;
                        } else if (i >= 16 && i <= 30) {
                            mpCost = 32;
                        }

                        // 攻擊力 的規律：71% 到 100% (每次加1%) => 70 + i
                        attack = 70 + i;

                        // 追加爆擊機率 的規律：1% 到 30% (每次加1%) => i
                        bonusCritRate = i;

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}%, 追加爆擊機率: ${bonusCritRate}%`,
                            fullDescription: `同時射出四發弓箭給予敵人四次傷害。只限裝備弓箭才可使用。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}%，追加爆擊機率${bonusCritRate}%。增加BOSS傷害20%，增加爆擊率30%，最大爆擊傷害上限為150%，最大爆擊率上限為70%。`
                        };
                    })
                },
                {
                    id: "blizzardCrossbow", // 寒冰箭對應冰屬性攻擊
                    name: "寒冰箭",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "利用寒冰攻擊敵人，在攻擊目標敵人的同時也會使周圍敵人造成傷害。最多攻擊6個敵人，只限裝備弩弓的情況下才能使用。（可爆擊）",
                    imageUrl: "images/blizzardCrossbow.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, attack, freezeDuration;
                        if (i === 0) return null;
                        mp = i <= 10 ? 20 : (i <= 20 ? 25 : 30);
                        attack = 99 + i; // Simplified
                        freezeDuration = i <= 10 ? 1 : (i <= 20 ? 2 : 3);
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 冰凍時間: ${freezeDuration}秒`,
                            fullDescription: `利用寒冰攻擊敵人，在攻擊目標敵人的同時也會使周圍敵人造成傷害。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，冰凍時間${freezeDuration}秒。`
                        };
                    })
                },
                {
                    id: "arrowEruptionCrossbow", // 昇龍弩，針對弩弓
                    name: "昇龍弩",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: { "mortalBlow": 5 },
                    description: "從地面向高空發射弩箭攻擊周圍的敵人，最多可攻擊6個怪物。只限裝備弩弓的情況下才能使用。",
                    imageUrl: "images/arrowEruptionCrossbow.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, attack;
                        if (i === 0) return null;
                        mp = i <= 10 ? 18 : (i <= 20 ? 23 : 28);
                        attack = 59 + i * 3.5; // Simplified
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `從地面向高空發射弩箭攻擊周圍的敵人，最多可攻擊6個怪物。等級${i}效果：消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "summonGoldenEagle",
                    name: "金鷹召喚",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: { "puppet": 5 },
                    description: "消費召喚石召喚金色老鷹，在一定的時間會跟隨在主人周圍，並且對附近的怪物發動攻擊。",
                    imageUrl: "images/summonGoldenEagle.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, procRate, numAttacks, duration;
                        if (i === 0) return null;
                        mp = 30 + Math.floor((i - 1) / 5) * 2; // Simplified
                        procRate = 50 + Math.floor((i - 1) / 5) * 3; // Simplified
                        numAttacks = 13 + Math.floor((i - 1) / 5) * 3; // Simplified
                        duration = 100 + Math.floor((i - 1) / 5) * 15; // Simplified
                        return {
                            effect: `消耗MP: ${mp}, 發動率: ${procRate}%, 攻擊次數: ${numAttacks}, 持續時間: ${duration}秒`,
                            fullDescription: `消費召喚石召喚金色老鷹，在一定的時間會跟隨在主人周圍，並且對附近的怪物發動攻擊。等級${i}效果：消耗MP${mp}，發動率${procRate}%，攻擊次數${numAttacks}，持續時間${duration}秒。`
                        };
                    })
                }
            ],
            "4轉 (神射手)": [
                {
                    id: "mapleWarrior",
                    name: "楓葉祝福",
                    maxLevel: 30,
                    requiredLevel: 120, // 楓葉祝福通常無等級限制，可根據需求自行修改
                    preRequisite: {},
                    description: "全職業的共通技能，一定時間內全能力(力量、敏捷、智力、幸運)增加固定%數。",
                    imageUrl: "images/mapleWarrior.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 10, 持續時間: 30秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級1效果：消耗MP 10，持續時間 30秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 60秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級2效果：消耗MP 10，持續時間 60秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 90秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級3效果：消耗MP 10，持續時間 90秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 120秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級4效果：消耗MP 10，持續時間 120秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 150秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級5效果：消耗MP 10，持續時間 150秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 180秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級6效果：消耗MP 20，持續時間 180秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 210秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級7效果：消耗MP 20，持續時間 210秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 240秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級8效果：消耗MP 20，持續時間 240秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 270秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級9效果：消耗MP 20，持續時間 270秒，全能力增加 5%。" },
                        { effect: "消耗MP: 20, 持續時間: 300秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級10效果：消耗MP 20，持續時間 300秒，全能力增加 5%。" },
                        { effect: "消耗MP: 30, 持續時間: 330秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級11效果：消耗MP 30，持續時間 330秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 360秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級12效果：消耗MP 30，持續時間 360秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 390秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級13效果：消耗MP 30，持續時間 390秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 420秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級14效果：消耗MP 30，持續時間 420秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 450秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級15效果：消耗MP 30，持續時間 450秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 480秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級16效果：消耗MP 40，持續時間 480秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 510秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級17效果：消耗MP 40，持續時間 510秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 540秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級18效果：消耗MP 40，持續時間 540秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 570秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級19效果：消耗MP 40，持續時間 570秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 600秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級20效果：消耗MP 40，持續時間 600秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 630秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級21效果：消耗MP 40，持續時間 630秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 660秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級22效果：消耗MP 40，持續時間 660秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 690秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級23效果：消耗MP 40，持續時間 690秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 720秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級24效果：消耗MP 40，持續時間 720秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 750秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級25效果：消耗MP 40，持續時間 750秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 780秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級26效果：消耗MP 40，持續時間 780秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 810秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級27效果：消耗MP 40，持續時間 810秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 840秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級28效果：消耗MP 40，持續時間 840秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 870秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級29效果：消耗MP 40，持續時間 870秒，全能力增加 15%。" },
                        { effect: "消耗MP: 40, 持續時間: 900秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級30效果：消耗MP 40，持續時間 900秒，全能力增加 15%。" }
                    ]
                },
                {
                    id: "heroesWill",
                    name: "楓葉淨化",
                    maxLevel: 1,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。",
                    imageUrl: "images/heroesWill.png",
                    levels: [
                        null,
                        {
                            effect: "消耗MP: 30, 冷卻時間: 600秒",
                            fullDescription: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。等級1效果：消耗MP 30，冷卻時間 600秒。"
                        }
                    ]
                },
                {
                    id: "sharpEyes",
                    name: "會心之眼",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "鎖定敵方弱點，一定時間內，增加本身和組隊的爆擊率跟爆擊傷害。",
                    imageUrl: "images/sharpEyes.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const mpCosts = [null, 29, 29, 29, 29, 29, 29, 29, 29, 29, 29, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 45, 45, 45, 45, 45, 44, 43, 42, 41, 40];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];
                        const attacks = [null, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
                        const critChances = [null, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15];
                        return {
                            effect: `消耗MP: ${mpCosts[i]}, 持續時間: ${durations[i]}秒, 攻擊力: ${attacks[i]}%, 必殺機率: ${critChances[i]}%`,
                            fullDescription: `鎖定敵方弱點，一定時間內，增加本身和組隊的爆擊率跟爆擊傷害。等級${i}效果：消耗MP${mpCosts[i]}，持續時間${durations[i]}秒，攻擊力${attacks[i]}%，必殺機率${critChances[i]}%。`
                        };
                    })
                },
                {
                    id: "dragonBreath",
                    name: "龍魂之箭",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "寄宿在弓箭上的龍魂，100%擊退敵人，最多攻擊6個敵人。(攻擊距離固定為440)",
                    imageUrl: "images/dragonBreath.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const mpCosts = [null, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36];
                        const attacks = [null, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100];
                        const numEnemiesArr = [null, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
                        return {
                            effect: `消耗MP: ${mpCosts[i]}, 攻擊力: ${attacks[i]}%, 敵人數目: ${numEnemiesArr[i]}`,
                            fullDescription: `寄宿在弓箭上的龍魂，100%擊退敵人，最多攻擊6個敵人。(攻擊距離固定為440) 等級${i}效果：消耗MP${mpCosts[i]}，攻擊力${attacks[i]}%，敵人數目${numEnemiesArr[i]}。`
                        };
                    })
                },
                {
                    id: "crossbowExpert",
                    name: "弩術精通",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "拿弩時再往上增加攻擊力、爆擊率。",
                    imageUrl: "images/crossbowExpert.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const masteries = [null, 65, 65, 65, 65, 65, 70, 70, 70, 70, 70, 75, 75, 75, 75, 75, 80, 80, 80, 80, 80, 85, 85, 85, 85, 85, 90, 90, 90, 90, 90];
                        const pAttacks = [null, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10];
                        const critChances = [null, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5];
                        let effect = `熟練度: ${masteries[i]}%`;
                        if (pAttacks[i] > 0) effect += `, 物理攻擊力: +${pAttacks[i]}`;
                        if (critChances[i] > 0) effect += `, 爆擊率: ${critChances[i]}%`;
                        return {
                            effect: effect,
                            fullDescription: `拿弩時再往上增加攻擊力、爆擊率。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "piercingArrowMarksman",
                    name: "光速神弩",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "射出一箭貫射力超強的箭，穿透敵人越多，攻擊力越強。不需蓄力，且最多對6個敵人造成傷害。",
                    imageUrl: "images/piercingArrowMarksman.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const mpCosts = [null, 18, 18, 18, 18, 18, 18, 18, 18, 18, 40, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 38, 38, 38, 38, 38, 37, 36, 35, 34, 33];
                        const maxPowers = [null, 265, 280, 295, 310, 325, 340, 355, 370, 385, 400, 415, 430, 445, 460, 475, 490, 505, 520, 535, 550, 565, 580, 595, 610, 625, 640, 655, 670, 685, 700];
                        return {
                            effect: `消耗MP: ${mpCosts[i]}, 最大威力: ${maxPowers[i]}%`,
                            fullDescription: `射出一箭貫射力超強的箭，穿透敵人越多，攻擊力越強。不需蓄力，且最多對6個敵人造成傷害。等級${i}效果：消耗MP${mpCosts[i]}，最大威力${maxPowers[i]}%。`
                        };
                    })
                },
                {
                    id: "frostprey",
                    name: "召喚銀隼",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: { "summonGoldenEagle": 15 },
                    description: "召喚一隻冰屬性的鳳凰出來幫助玩家攻擊，最多攻擊4名敵人。",
                    imageUrl: "images/frostprey.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 從 40 開始，每級增加 2
                        const mp = 40 + (i * 2);

                        // 2. 持續時間: 每級增加 10 秒
                        const duration = i * 10;

                        // 3. 攻擊力規律分析：
                        // 1-10級: 250 + (i * 5) [1級=255, 10級=300]
                        // 11-20級: 300 + (i-10)*5 + 50 = 355 [11級=355, 20級=400]
                        // 21-30級: 400 + (i-20)*5 + 50 = 455 [21級=455, 30級=500]

                        // 階梯邏輯：每10級基礎值額外跳 50
                        const stageBonus = Math.floor((i - 1) / 10) * 50;
                        const attack = 250 + (i * 5) + stageBonus;

                        const effect = `消耗MP: ${mp}, 持續時間: ${duration}秒, 攻擊力: ${attack}`;

                        return {
                            effect: effect,
                            fullDescription: `召喚一隻冰屬性的鳳凰出來幫助玩家攻擊。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "blind",
                    name: "黑暗狙擊",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "一定時間遮斷怪物的視野，使其命中率下降，適用所有攻擊型態。",
                    imageUrl: "images/blind.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP規律: 1-10級:12, 11-20級:19, 21-30級:30
                        const mp = i <= 10 ? 12 : i <= 20 ? 19 : 30;

                        // 2. 持續時間: 每級增加 10 秒
                        const duration = i * 10;

                        // 3. 準確率: 起始 10%，每級增加 1%
                        const accuracy = 10 + i;

                        // 4. 怪物命中率: 每級減少 1%
                        const mobHitRate = -i;

                        // 5. 失明時間: 每 10 級增加 5 秒 (1-10=5s, 11-20=10s, 21-30=15s)
                        const blindTime = Math.ceil(i / 10) * 5;

                        const effect = `消耗MP: ${mp}, 持續時間: ${duration}秒, 準確率: ${accuracy}%, 怪物命中率: ${mobHitRate}%, 失明時間: ${blindTime}秒`;

                        return {
                            effect: effect,
                            fullDescription: `一定時間遮斷怪物的視野，使其命中率下降。等級${i}效果：${effect}。`
                        };
                    })
                },
                {
                    id: "snipe",
                    name: "必殺狙擊",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "瞄準怪物的弱點，給予其劇烈傷害，傷害隨疊層逐漸累積，最多可疊加10層，當角色受到傷害時，所有疊層都會被重製。",
                    imageUrl: "images/snipe.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP規律: 從 41 開始每級減少 1 (1級=40, 30級=11)
                        const mp = 41 - i;

                        // 2. 最低傷害: 從 470% 開始每級增加 10%
                        const minDmg = 470 + (i * 10);

                        // 3. 最高傷害: 從 1160% 開始每級增加 10%
                        const maxDmg = 1160 + (i * 10);

                        // 4. 每疊加一層增加傷害: 全等級固定 69%
                        const bonusPerStack = 69;

                        const effect = `消耗MP: ${mp}, 最低傷害: ${minDmg}%, 最高傷害: ${maxDmg}%, 每疊加一層增加傷害: ${bonusPerStack}%`;

                        return {
                            effect: effect,
                            fullDescription: `瞄準怪物的弱點，最多可疊加10層。等級${i}效果：${effect}。`
                        };
                    })
                }
            ],
            "超技能": [],
            "5轉技能": [],
            "共通技能": []
        }
    },
    "暗影神偷 (Shadower)": {
        emblemUrl: 'emblems/Shadower.png',
        startingLevelForSp: 10, // 盜賊系通常10等轉職
        jobAdvancementSpBonuses: [10, 30, 70, 120],
        jobStagesOrder: ["0轉 (新手)", "1轉 (盜賊)", "2轉 (俠盜)", "3轉 (神偷)", "4轉 (暗影神偷)", "超技能", "5轉技能", "共通技能"],
        spRequiredFor2ndJob: 61, // 其他職業2轉點數需求
        spRequiredFor3rdJob: 182, // 其他職業3轉點數需求
        spRequiredFor4thJob: 333, // 4轉通用點數需求
        skills: {
            "0轉 (新手)": [],
            "1轉 (盜賊)": [
                {
                    id: "haste",
                    name: "幻化術",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "增加命中率和迴避率",
                    imageUrl: "images/haste.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `命中率: ${i}, 迴避率: ${i}`,
                        fullDescription: `增加命中率和迴避率。等級${i}效果：命中率${i}，迴避率${i}。`
                    })
                },
                {
                    id: "keenEyes",
                    name: "鷹之眼",
                    maxLevel: 8,
                    requiredLevel: 10,
                    preRequisite: { "haste": 3 },
                    description: "增加暗器系武器的射程距離",
                    imageUrl: "images/keenEyes.png", // 確保圖片檔案存在
                    levels: Array(9).fill(null).map((_, i) => {
                        const rangePercent = 15 * i;
                        return i === 0 ? null : {
                            effect: `射程: ${rangePercent}`,
                            fullDescription: `增加暗器系武器的射程距離。等級${i}效果：射程${rangePercent}%。`
                        };
                    })
                },
                {
                    "id": "curse",
                    "name": "詛咒術",
                    "maxLevel": 20,
                    "requiredLevel": 10,
                    "preRequisite": {},
                    "description": "可於一定時間降低怪物的物理防禦力。（適用於BOSS）",
                    "imageUrl": "images/curse.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, pAttackReduction, pDefReduction, duration;
                        if (i === 0) return null;

                        // 消耗MP 的精確數值
                        mpCost = 5;

                        // 物理攻擊降低 的規律
                        pAttackReduction = i;

                        // 物理防禦降低 的規律：線性
                        pDefReduction = 0.5 * i;

                        // 持續時間 的規律：線性
                        duration = 5 + i * 2;

                        return {
                            effect: `消耗MP: ${mpCost}, 物理攻擊: -${pAttackReduction}, 物理防禦: -${pDefReduction}%, 持續時間: ${duration}秒`,
                            fullDescription: `可於一定時間降低怪物的物理防禦力。（適用於BOSS）等級${i}效果：消耗MP${mpCost}，物理攻擊-${pAttackReduction}，物理防禦-${pDefReduction}%，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    id: "darkSight",
                    name: "隱身術",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "一定時間內消耗MP而隱身於影子之中。不會受怪物碰撞傷害但會受環境影響如地震、毒氣、會損血的環境，無法攻擊怪物，可喝水，但其他行動則會正常，使用普通攻擊與技能可以解除隱身。",
                    imageUrl: "images/darkSight.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, moveSpeed, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5];
                        const moveSpeeds = [null, -30, -28, -26, -24, -22, -20, -18, -16, -14, -12, -10, -8, -7, -6, -5, -4, -3, -2, -1, -0];
                        const durations = Array(21).fill(10); // 持續時間固定10秒
                        mp = mpCosts[i];
                        moveSpeed = moveSpeeds[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 減少移動速度: ${moveSpeed}, 持續時間: ${duration}秒`,
                            fullDescription: `一定時間內消耗MP而隱身於影子之中。等級${i}效果：消耗MP${mp}，移動速度${moveSpeed}，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "doubleStab",
                    name: "劈空斬",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "消耗 MP 使用短刀連續攻擊怪物兩次。",
                    imageUrl: "images/doubleStab.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack;
                        if (i === 0) return null;
                        const mpCosts = [null, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14];
                        const attacks = [null, 103, 106, 109, 112, 115, 118, 121, 124, 127, 130, 133, 136, 139, 142, 145, 148, 151, 154, 157, 160];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `消耗MP使用短刀連續攻擊怪物兩次。等級${i}效果：消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "luckySeven",
                    name: "雙飛斬",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "消耗MP，發射兩個飛鏢向怪物進行攻擊，而攻擊力則受幸運數值的影響。不受暗器精準的影響，以固定的形式進行攻擊。",
                    imageUrl: "images/luckySeven.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack;
                        if (i === 0) return null;
                        const mpCosts = [null, 8, 8, 8, 8, 9, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16];
                        const attacks = [null, 58, 62, 68, 72, 78, 84, 88, 94, 98, 104, 108, 114, 118, 124, 128, 132, 136, 142, 144, 150];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `消耗MP，發射兩個飛鏢向怪物進行攻擊，而攻擊力則受幸運數值的影響。等級${i}效果：消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                }
            ],
            "2轉 (俠盜)": [
                {
                    "id": "recovery",
                    "name": "恢復術",
                    "maxLevel": 20,
                    "requiredLevel": 30,
                    "preRequisite": {},
                    "description": "增加恢復HP/ MP。當等級提高，恢復速度會愈快，所能恢復量也會變多。",
                    "imageUrl": "images/recovery.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let hpAdd, mpAdd;
                        if (i === 0) return null;

                        // HP追加回復量 的規律：線性
                        hpAdd = i * 3;

                        // MP追加回復量 的規律：線性
                        mpAdd = i;

                        return {
                            effect: `HP追加回復量: ${hpAdd}, MP追加回復量: ${mpAdd}`,
                            fullDescription: `增加恢復HP/ MP。當等級提高，恢復速度會愈快，所能恢復量也會變多。等級${i}效果：HP追加回復量${hpAdd}，MP追加回復量${mpAdd}。`
                        };
                    })
                },
                {
                    id: "booster",
                    name: "速度激發",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "於一定時間內，提升所有隊員的移動速度與跳躍力。",
                    imageUrl: "images/booster.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, moveSpeed, jump, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30];
                        const moveSpeeds = [null, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40];
                        const jumps = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];
                        mp = mpCosts[i];
                        moveSpeed = moveSpeeds[i];
                        jump = jumps[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 移動速度: ${moveSpeed}, 跳躍力: ${jump}, 持續時間: ${duration}秒`,
                            fullDescription: `於一定時間內，提升所有隊員的移動速度與跳躍力。等級${i}效果：消耗MP${mp}，移動速度${moveSpeed}，跳躍力${jump}，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    id: "daggerMastery",
                    name: "精準之刀",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "提升短劍系列武器的命中率及熟練度，該技能只限在配帶短劍的情況下，才會發揮效力。",
                    imageUrl: "images/daggerMastery.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let hitRate, mastery;
                        if (i === 0) return null;
                        const hitRates = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
                        const masteries = [null, 15, 15, 20, 20, 25, 25, 30, 30, 35, 35, 40, 40, 45, 45, 50, 50, 55, 55, 60, 60];
                        hitRate = hitRates[i];
                        mastery = masteries[i];
                        return {
                            effect: `命中率: ${hitRate}, 熟練度: ${mastery}%`,
                            fullDescription: `提升短劍系列武器的命中率及熟練度，該技能只限在配帶短劍的情況下，才會發揮效力。等級${i}效果：命中率${hitRate}，熟練度${mastery}%。`
                        };
                    })
                },
                {
                    id: "daggerBooster",
                    name: "快速之刀",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: { "daggerMastery": 5 },
                    description: "消耗HP與MP，而使一定時間內，讓所配帶的短劍的攻擊速度，向上提升一個等級。該技能只限在配帶短劍的情況下，才會發揮效力。",
                    imageUrl: "images/daggerBooster.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, hp, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const hpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];
                        mp = mpCosts[i];
                        hp = hpCosts[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 消耗HP: ${hp}, 持續時間: ${duration}秒`,
                            fullDescription: `消耗HP與MP，而使一定時間內，讓所配帶的短劍的攻擊速度，向上提升一個等級。等級${i}效果：消耗MP${mp}，消耗HP${hp}，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "steal",
                    name: "妙手術",
                    maxLevel: 30,
                    requiredLevel: 30,
                    preRequisite: { "booster": 5 },
                    description: "攻擊範圍內的敵人，並有40%的機率恢復造成傷害的10%HP。",
                    imageUrl: "images/steal.png", // 確保圖片檔案存在
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, attack, successRate;
                        if (i === 0) return null;
                        mp = i <= 15 ? 12 : 24;
                        attack = 80 + i * 2; // Simplified
                        successRate = 10 + i; // Simplified
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 成功率: ${successRate}%`,
                            fullDescription: `攻擊範圍內的敵人，並有40%的機率恢復造成傷害的10%HP。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，成功率${successRate}%。`
                        };
                    })
                },
                {
                    id: "savageBlow",
                    name: "迴旋斬",
                    maxLevel: 30,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "消耗MP而對敵人連續發動六次的攻擊，天、流、血、斬、殺",
                    imageUrl: "images/savageBlow.png", // 確保圖片檔案存在
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, attack, numAttacks;
                        if (i === 0) return null;
                        mp = i <= 10 ? 9 : (i <= 20 ? 18 : 27);
                        attack = 50 + i * 2; // Simplified
                        numAttacks = i <= 10 ? 2 : (i <= 20 ? 4 : 6);
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 攻擊次數: ${numAttacks}`,
                            fullDescription: `消耗MP而對敵人連續發動六次的攻擊。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，攻擊次數${numAttacks}。`
                        };
                    })
                }
            ],
            "3轉 (神偷)": [
                {
                    id: "shieldMasteryThief",
                    name: "強化盾",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "提高裝備盾牌的防禦力，必須裝備盾牌才能發揮效果。",
                    imageUrl: "images/shieldMasteryThief.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `防禦力: ${100 + i * 5}%`,
                        fullDescription: `提高裝備盾牌的防禦力，必須裝備盾牌才能發揮效果。等級${i}效果：防禦力${100 + i * 5}%。`
                    })
                },
                {
                    id: "mesoGuard",
                    name: "血魔轉換",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "消耗MP轉換成HP，轉換過程中若角色受到攻擊或移動，技能便會停止。冷卻時間210秒",
                    imageUrl: "images/mesoGuard.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, hpRestoreRate, dmgTakenReduction;
                        if (i === 0) return null;
                        mp = i <= 10 ? 15 : (i <= 20 ? 21 : 27);
                        hpRestoreRate = 9 + i * 7.5; // Simplified
                        dmgTakenReduction = 200 - i * 2.8; // Simplified
                        return {
                            effect: `消耗MP: ${mp}, HP回復率: ${hpRestoreRate}%, 被攻擊損血: ${dmgTakenReduction}%`,
                            fullDescription: `消耗MP轉換成HP，轉換過程中若角色受到攻擊或移動，技能便會停止。冷卻時間210秒。等級${i}效果：消耗MP${mp}，HP回復率${hpRestoreRate}%，被攻擊損血${dmgTakenReduction}%。`
                        };
                    })
                },
                {
                    id: "assaulter",
                    name: "落葉斬",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "對單一敵人發動快速且強力的攻擊，並且在一定機率內有機會使敵人昏迷。攻擊無視物理傷害的怪物效果",
                    imageUrl: "images/assaulter.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, attack, stunRate;
                        if (i === 0) return null;
                        mp = i <= 10 ? 12 : (i <= 20 ? 19 : 26);
                        attack = 200 + i * 10; // Simplified
                        stunRate = 20 + i * 2; // Simplified
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 昏迷率: ${stunRate}%`,
                            fullDescription: `對單一敵人發動快速且強力的攻擊，並且在一定機率內有機會使敵人昏迷。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，昏迷率${stunRate}%。`
                        };
                    })
                },
                {
                    id: "mesoUp",
                    name: "勇者掠奪術",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: { "mesoExplosion": 3 },
                    description: "於一定時間內當玩家攻擊怪物時，使怪物額外掉落楓幣。掉落的楓幣量會隨著技能等級和傷殺力而增加。",
                    imageUrl: "images/mesoUp.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, duration, procRate;
                        if (i === 0) return null;
                        const mpCosts = [null, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
                        const durations = [null, 90, 90, 90, 90, 90, 120, 120, 120, 120, 120, 150, 150, 150, 150, 150, 180, 180, 180, 180, 180];
                        const procRates = [null, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60];
                        mp = mpCosts[i];
                        duration = durations[i];
                        procRate = procRates[i];
                        return {
                            effect: `消耗MP: ${mp}, 持續時間: ${duration}秒, 發動率: ${procRate}%`,
                            fullDescription: `於一定時間內當玩家攻擊怪物時，使怪物額外掉落楓幣。等級${i}效果：消耗MP${mp}，持續時間${duration}秒，發動率${procRate}%。`
                        };
                    })
                },
                {
                    "id": "shadowPartner",
                    "name": "分身術",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "召喚分身對周圍多個敵人發動攻擊，最多可同時攻擊6個怪物。",
                    "imageUrl": "images/shadowPartner.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, attack, numClones;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        if (i >= 1 && i <= 6) {
                            mpCost = 10;
                        } else if (i >= 7 && i <= 12) {
                            mpCost = 20;
                        } else if (i >= 13 && i <= 18) {
                            mpCost = 30;
                        } else if (i >= 19 && i <= 24) {
                            mpCost = 40;
                        } else { // i >= 25
                            mpCost = 50;
                        }

                        // 攻擊力 的規律：分段線性
                        if (i >= 1 && i <= 6) {
                            attack = 104 + i * 10;
                        } else if (i >= 7 && i <= 12) {
                            attack = 110 + (i - 6) * 10;
                        } else if (i >= 13 && i <= 18) {
                            attack = 120 + (i - 12) * 10;
                        } else if (i >= 19 && i <= 24) {
                            attack = 130 + (i - 18) * 10;
                        } else { // i >= 25
                            attack = 150 + (i - 24) * 10;
                        }

                        const attacksRaw = [null, 110, 120, 130, 140, 150, 160, 120, 130, 140, 150, 160, 170, 130, 140, 150, 160, 170, 180, 140, 150, 160, 170, 180, 190, 160, 170, 180, 190, 200, 210]; // 精確數值
                        attack = attacksRaw[i];

                        // 分身數 的規律：分段
                        if (i >= 1 && i <= 6) {
                            numClones = 1;
                        } else if (i >= 7 && i <= 12) {
                            numClones = 2;
                        } else if (i >= 13 && i <= 18) {
                            numClones = 3;
                        } else if (i >= 19 && i <= 24) {
                            numClones = 4;
                        } else { // i >= 25
                            numClones = 5;
                        }

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}%, 分身數: ${numClones}`,
                            fullDescription: `召喚分身對周圍多個敵人發動攻擊，最多可同時攻擊6個怪物。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}%，分身數${numClones}。`
                        };
                    })
                },
                {
                    id: "mesoGuardShield",
                    name: "楓幣護盾",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: { "mesoGuard": 3 }, // 假設血魔轉換的ID是mesoGuard
                    description: "用楓幣來抵擋怪物對自身造成的50%殺傷力。使用此技能時，身上需具備足夠的楓幣，當角色損血時，將會以一定比例扣除角色楓幣，當身上楓幣為零時，技能便自動解除。(公式:自身傷害除2 乘 楓幣減少%=減少的金幣)",
                    imageUrl: "images/mesoGuardShield.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, mesoConsumptionRate, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 20, 20, 20, 20, 20, 25, 25, 25, 25, 25, 30, 30, 30, 30, 30, 35, 35, 35, 35, 35];
                        const mesoConsumptionRates = [null, 90, 90, 89, 89, 88, 88, 87, 87, 86, 86, 85, 85, 84, 84, 83, 82, 81, 80, 79, 80]; // From data
                        const durations = [null, 33, 36, 39, 42, 53, 56, 59, 62, 65, 76, 79, 82, 85, 88, 99, 102, 105, 108, 111, 120]; // From data
                        mp = mpCosts[i];
                        mesoConsumptionRate = mesoConsumptionRates[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 楓幣消耗率: ${mesoConsumptionRate}%, 持續時間: ${duration}秒`,
                            fullDescription: `用楓幣來抵擋怪物對自身造成的50%殺傷力。等級${i}效果：消耗MP${mp}，楓幣消耗率${mesoConsumptionRate}%，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    id: "mesoExplosion",
                    name: "楓幣炸彈",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "引爆前方掉落在地上的楓幣來攻擊附近的怪物，當累積的楓幣超過當前怪物的生命值時，楓幣圖像現在將變為閃亮的楓幣。",
                    imageUrl: "images/mesoExplosion.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, explodeCount, mastery;
                        if (i === 0) return null;
                        mp = i <= 10 ? 18 : (i <= 20 ? 24 : 30);
                        explodeCount = 10 + Math.floor((i - 1) / 5) * 2; // Simplified
                        mastery = 50 + Math.floor((i - 1) / 5) * 2; // Simplified
                        return {
                            effect: `消耗MP: ${mp}, 引爆數: ${explodeCount}, 熟練度: ${mastery}%`,
                            fullDescription: `引爆前方掉落在地上的楓幣來攻擊附近的怪物。等級${i}效果：消耗MP${mp}，引爆數${explodeCount}，熟練度${mastery}%。`
                        };
                    })
                }
            ],
            "4轉 (暗影神偷)": [
                {
                    id: "mapleWarrior",
                    name: "楓葉祝福",
                    maxLevel: 30,
                    requiredLevel: 120, // 楓葉祝福通常無等級限制，可根據需求自行修改
                    preRequisite: {},
                    description: "全職業的共通技能，一定時間內全能力(力量、敏捷、智力、幸運)增加固定%數。",
                    imageUrl: "images/mapleWarrior.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 10, 持續時間: 30秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級1效果：消耗MP 10，持續時間 30秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 60秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級2效果：消耗MP 10，持續時間 60秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 90秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級3效果：消耗MP 10，持續時間 90秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 120秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級4效果：消耗MP 10，持續時間 120秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 150秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級5效果：消耗MP 10，持續時間 150秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 180秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級6效果：消耗MP 20，持續時間 180秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 210秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級7效果：消耗MP 20，持續時間 210秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 240秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級8效果：消耗MP 20，持續時間 240秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 270秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級9效果：消耗MP 20，持續時間 270秒，全能力增加 5%。" },
                        { effect: "消耗MP: 20, 持續時間: 300秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級10效果：消耗MP 20，持續時間 300秒，全能力增加 5%。" },
                        { effect: "消耗MP: 30, 持續時間: 330秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級11效果：消耗MP 30，持續時間 330秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 360秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級12效果：消耗MP 30，持續時間 360秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 390秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級13效果：消耗MP 30，持續時間 390秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 420秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級14效果：消耗MP 30，持續時間 420秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 450秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級15效果：消耗MP 30，持續時間 450秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 480秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級16效果：消耗MP 40，持續時間 480秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 510秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級17效果：消耗MP 40，持續時間 510秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 540秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級18效果：消耗MP 40，持續時間 540秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 570秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級19效果：消耗MP 40，持續時間 570秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 600秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級20效果：消耗MP 40，持續時間 600秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 630秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級21效果：消耗MP 40，持續時間 630秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 660秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級22效果：消耗MP 40，持續時間 660秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 690秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級23效果：消耗MP 40，持續時間 690秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 720秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級24效果：消耗MP 40，持續時間 720秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 750秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級25效果：消耗MP 40，持續時間 750秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 780秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級26效果：消耗MP 40，持續時間 780秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 810秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級27效果：消耗MP 40，持續時間 810秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 840秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級28效果：消耗MP 40，持續時間 840秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 870秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級29效果：消耗MP 40，持續時間 870秒，全能力增加 15%。" },
                        { effect: "消耗MP: 40, 持續時間: 900秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級30效果：消耗MP 40，持續時間 900秒，全能力增加 15%。" }
                    ]
                },
                {
                    id: "heroesWill",
                    name: "楓葉淨化",
                    maxLevel: 1,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。",
                    imageUrl: "images/heroesWill.png",
                    levels: [
                        null,
                        {
                            effect: "消耗MP: 30, 冷卻時間: 600秒",
                            fullDescription: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。等級1效果：消耗MP 30，冷卻時間 600秒。"
                        }
                    ]
                },
                {
                    id: "shadowerInstinct",
                    name: "瞬身迴避",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "提升本身的迴避能力，一定的機率完全迴避敵人攻擊。若系統判定完全閃避時，會出現木人特效。",
                    imageUrl: "images/shadowerInstinct.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 使用陣列方式列出機率，確保未來若有版本平衡微調時容易修改
                        const evasionChances = [
                            null,
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                            21, 22, 23, 24, 25, 26, 27, 28, 29, 30
                        ];

                        const chance = evasionChances[i];

                        return {
                            effect: `完全迴避機率: ${chance}%`,
                            fullDescription: `提升本身的迴避能力，一定的機率完全迴避敵人攻擊。等級${i}效果：完全迴避機率${chance}%。`
                        };
                    })
                },
                {
                    id: "taunt",
                    name: "挑釁",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "最多可挑釁6名敵方，持續120秒敵人防禦、經驗值、掉寶率上升一定%數。該技能不受攻擊速度影響，當挑釁與神聖祈禱一起使用時，額外經驗值是相加。",
                    imageUrl: "images/taunt.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP規律：
                        // 1-20級: 20 + i
                        // 21-30級: 固定 40
                        const mpCosts = [
                            null,
                            21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                            31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                            40, 40, 40, 40, 40, 40, 40, 40, 40, 40
                        ];

                        // 2. 機率提升規律：10 + i (1級=11%, 30級=40%)
                        // 這裡示範混用公式，讓程式碼簡潔一點
                        const bonusChance = 10 + i;

                        const mp = mpCosts[i];
                        const duration = 120; // 固定 120 秒

                        return {
                            effect: `消耗MP: ${mp}, 經驗/掉寶/防禦提升: ${bonusChance}%, 持續時間: ${duration}秒`,
                            fullDescription: `最多可挑釁6名敵方。等級${i}效果：經驗值與掉寶率提升${bonusChance}%，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "venom",
                    name: "飛毒殺",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "把短劍塗上毒後再攻擊敵人，一定機率會讓敵人中毒造成持續的傷害，最多有3次可以重覆中毒的可能性，且不會使敵方HP降到1以下。",
                    imageUrl: "images/venom.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 攻擊力: 30 + i (線性成長，1級=31%, 30級=60%)
                        const power = 30 + i;

                        // 2. 中毒機率: 不規則跳動，使用陣列查表
                        const poisonChances = [
                            null,
                            22, 22, 22, 24, 24, 24, 26, 26, 26, 28, // 1-10
                            28, 28, 30, 30, 30, 32, 32, 32, 34, 34, // 11-20
                            34, 36, 36, 36, 38, 38, 38, 40, 40, 40  // 21-30
                        ];

                        // 3. 持續時間: 階梯式成長
                        const durations = [
                            null,
                            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, // 1-10
                            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, // 11-20
                            4, 4, 4, 4, 4, 4, 4, 4, 4, 4  // 21-30
                        ];

                        const chance = poisonChances[i];
                        const time = durations[i];

                        return {
                            effect: `中毒傷害: ${power}%, 中毒機率: ${chance}%, 持續時間: ${time}秒`,
                            fullDescription: `攻擊時有${chance}%機率使敵人中毒。等級${i}效果：每秒造成${power}%持續傷害，持續${time}秒，最高可堆疊3次。`
                        };
                    })
                },
                {
                    id: "ninjaAmbush",
                    name: "忍影瞬殺",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: { "shadowerInstinct": 5 },
                    description: "呼喚影分身出來躲起來偷襲範圍內的敵人，給予持續傷害，最多6名敵人，且不會使敵方HP下降到1以下。",
                    imageUrl: "images/ninjaAmbush.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 1-10級:16, 11-20級:32, 21-29級:48, 30級:43
                        const mpCosts = [
                            null,
                            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, // 1-10
                            32, 32, 32, 32, 32, 32, 32, 32, 32, 32, // 11-20
                            48, 48, 48, 48, 48, 48, 48, 48, 48, 43  // 21-30
                        ];

                        // 2. 攻擊力: 1-10級每級+2% (60+i*2), 11-30級每級+1% (70+i)
                        let attack;
                        if (i <= 10) {
                            attack = 60 + (i * 2);
                        } else {
                            attack = 70 + i;
                        }

                        // 3. 持續時間: 每10級增加 4秒 (1-10=4s, 11-20=8s, 21-30=12s)
                        const duration = Math.ceil(i / 10) * 4;

                        // 4. 距離: 不規則階梯，使用陣列查表
                        const distances = [
                            null,
                            110, 110, 110, 120, 120, 120, 130, 130, 130, 140, // 1-10
                            140, 140, 150, 150, 150, 160, 160, 160, 170, 170, // 11-20
                            170, 170, 180, 180, 190, 190, 190, 200, 200, 200  // 21-30
                        ];

                        const mp = mpCosts[i];
                        const dist = distances[i];

                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 持續時間: ${duration}秒, 距離: ${dist}`,
                            fullDescription: `呼喚影分身躲起來偷襲最多6名敵人。等級${i}效果：給予${attack}%持續傷害，持續${duration}秒，攻擊距離${dist}。`
                        };
                    })
                },
                {
                    id: "assassinate",
                    name: "致命暗殺",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "連擊4下，最後一招有一定機率造成爆擊。",
                    imageUrl: "images/assassinate.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const mpCosts = [null, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 44, 43, 42, 41, 40];
                        const firstThreeAttacks = [null, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 325, 340, 355, 370, 385, 400, 415, 430, 445, 460, 470, 480, 490, 500, 510, 520, 530, 540, 550, 560];
                        const lastAttacks = [null, 820, 840, 860, 880, 900, 920, 940, 960, 980, 1000, 1020, 1040, 1060, 1080, 1100, 1120, 1140, 1160, 1180, 1200, 1220, 1240, 1260, 1280, 1300, 1320, 1340, 1360, 1380, 1400];
                        const critPowers = [null, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250];
                        const critChances = [null, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90];
                        return {
                            effect: `消耗MP: ${mpCosts[i]}, 前三次攻擊力: ${firstThreeAttacks[i]}%, 最後一下攻擊: ${lastAttacks[i]}%, 暴擊威力: ${critPowers[i]}%, 暴擊機率: ${critChances[i]}%`,
                            fullDescription: `連擊4下，最後一招有一定機率造成爆擊。等級${i}效果：消耗MP${mpCosts[i]}，前三次攻擊力${firstThreeAttacks[i]}%，最後一下攻擊${lastAttacks[i]}%，暴擊威力${critPowers[i]}%，暴擊機率${critChances[i]}%。`
                        };
                    })
                },
                {
                    id: "smokescreen",
                    name: "煙霧彈",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "撒開煙霧，在一定時間內的煙霧範圍不會受到怪物的攻擊，但玩家可以攻擊怪物。(間隔施放時間10分鐘)",
                    imageUrl: "images/smokescreen.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const mpCosts = [null, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
                        const durations = [null, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
                        const ranges = [null, 110, 110, 110, 120, 120, 120, 130, 130, 130, 140, 140, 140, 150, 150, 150, 160, 160, 160, 170, 170, 170, 180, 180, 180, 190, 190, 190, 200, 200, 200];
                        return {
                            effect: `消耗MP: ${mpCosts[i]}, 持續時間: ${durations[i]}秒, 範圍: ${ranges[i]}`,
                            fullDescription: `撒開煙霧，在一定時間內的煙霧範圍不會受到怪物的攻擊，但玩家可以攻擊怪物。等級${i}效果：消耗MP${mpCosts[i]}，持續時間${durations[i]}秒，範圍${ranges[i]}。`
                        };
                    })
                },
                {
                    id: "boomerangStep",
                    name: "順步連擊",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "瞬間攻擊怪物2次，一定機率使怪物昏迷。(攻擊範圍300)",
                    imageUrl: "images/boomerangStep.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP規律：
                        // 1-5級: 16, 6-10級: 19, 11-15級: 22, 16-20級: 25, 21-25級: 28
                        // 26-30級: 回降至 26
                        let mp;
                        if (i <= 25) {
                            const stage = Math.floor((i - 1) / 5);
                            mp = 16 + (stage * 3);
                        } else {
                            mp = 26;
                        }

                        // 2. 敵人數量：1-10級:2, 11-20級:3, 21-30級:4
                        const targetCount = i <= 10 ? 2 : i <= 20 ? 3 : 4;

                        // 3. 攻擊威力：250 + (i * 5) [1級=255%, 30級=400%]
                        const power = 250 + (i * 5);

                        // 4. 昏迷機率：i * 2 [1級=2% , 30級=60%]
                        const stunChance = i * 2;

                        const effect = `消耗MP: ${mp}, 敵人數量: ${targetCount}, 攻擊威力: ${power}%, 昏迷機率: ${stunChance}%`;

                        return {
                            effect: effect,
                            fullDescription: `瞬間攻擊怪物2次。等級${i}效果：消耗MP${mp}，最多攻擊${targetCount}名敵人，威力${power}%，${stunChance}%機率使怪物昏迷。`
                        };
                    })
                }
            ],
            "超技能": [],
            "5轉技能": [],
            "共通技能": []
        }
    },
    "夜使者 (NightLord)": {
        emblemUrl: 'emblems/NightLord.png',
        startingLevelForSp: 10, // 盜賊系通常10等轉職
        jobAdvancementSpBonuses: [10, 30, 70, 120],
        jobStagesOrder: ["0轉 (新手)", "1轉 (盜賊)", "2轉 (刺客)", "3轉 (暗殺者)", "4轉 (夜使者)", "超技能", "5轉技能", "共通技能"],
        spRequiredFor2ndJob: 61, // 其他職業2轉點數需求
        spRequiredFor3rdJob: 182, // 其他職業3轉點數需求
        spRequiredFor4thJob: 333, // 4轉通用點數需求
        skills: {
            "0轉 (新手)": [],
            "1轉 (盜賊)": [
                {
                    id: "haste",
                    name: "幻化術",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "增加命中率和迴避率",
                    imageUrl: "images/haste.png",
                    levels: Array(21).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `命中率: ${i}, 迴避率: ${i}`,
                        fullDescription: `增加命中率和迴避率。等級${i}效果：命中率${i}，迴避率${i}。`
                    })
                },
                {
                    id: "keenEyes",
                    name: "鷹之眼",
                    maxLevel: 8,
                    requiredLevel: 10,
                    preRequisite: { "haste": 3 },
                    description: "增加暗器系武器的射程距離",
                    imageUrl: "images/keenEyes.png",
                    levels: Array(9).fill(null).map((_, i) => {
                        const rangePercent = 15 * i;
                        return i === 0 ? null : {
                            effect: `射程: ${rangePercent}`,
                            fullDescription: `增加暗器系武器的射程距離。等級${i}效果：射程${rangePercent}%。`
                        };
                    })
                },
                {
                    "id": "curse",
                    "name": "詛咒術",
                    "maxLevel": 20,
                    "requiredLevel": 10,
                    "preRequisite": {},
                    "description": "可於一定時間降低怪物的物理防禦力。（適用於BOSS）",
                    "imageUrl": "images/curse.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, pAttackReduction, pDefReduction, duration;
                        if (i === 0) return null;

                        // 消耗MP 的精確數值
                        mpCost = 5;

                        // 物理攻擊降低 的規律
                        pAttackReduction = i;

                        // 物理防禦降低 的規律：線性
                        pDefReduction = 0.5 * i;

                        // 持續時間 的規律：線性
                        duration = 5 + i * 2;

                        return {
                            effect: `消耗MP: ${mpCost}, 物理攻擊: -${pAttackReduction}, 物理防禦: -${pDefReduction}%, 持續時間: ${duration}秒`,
                            fullDescription: `可於一定時間降低怪物的物理防禦力。（適用於BOSS）等級${i}效果：消耗MP${mpCost}，物理攻擊-${pAttackReduction}，物理防禦-${pDefReduction}%，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    id: "darkSight",
                    name: "隱身術",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "一定時間內消耗MP而隱身於影子之中。不會受怪物碰撞傷害但會受環境影響如地震、毒氣、會損血的環境，無法攻擊怪物，可喝水，但其他行動則會正常，使用普通攻擊與技能可以解除隱身。",
                    imageUrl: "images/darkSight.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, moveSpeed, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5];
                        const moveSpeeds = [null, -30, -28, -26, -24, -22, -20, -18, -16, -14, -12, -10, -8, -7, -6, -5, -4, -3, -2, -1, -0];
                        const durations = Array(21).fill(10); // 持續時間固定10秒
                        mp = mpCosts[i];
                        moveSpeed = moveSpeeds[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 減少移動速度: ${moveSpeed}, 持續時間: ${duration}秒`,
                            fullDescription: `一定時間內消耗MP而隱身於影子之中。等級${i}效果：消耗MP${mp}，移動速度${moveSpeed}，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "doubleStab",
                    name: "劈空斬",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "消耗 MP 使用短刀連續攻擊怪物兩次。",
                    imageUrl: "images/doubleStab.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack;
                        if (i === 0) return null;
                        const mpCosts = [null, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14];
                        const attacks = [null, 103, 106, 109, 112, 115, 118, 121, 124, 127, 130, 133, 136, 139, 142, 145, 148, 151, 154, 157, 160];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `消耗MP使用短刀連續攻擊怪物兩次。等級${i}效果：消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "luckySeven",
                    name: "雙飛斬",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "消耗MP，發射兩個飛鏢向怪物進行攻擊，而攻擊力則受幸運數值的影響。不受暗器精準的影響，以固定的形式進行攻擊。",
                    imageUrl: "images/luckySeven.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack;
                        if (i === 0) return null;
                        const mpCosts = [null, 8, 8, 8, 8, 9, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16];
                        const attacks = [null, 58, 62, 68, 72, 78, 84, 88, 94, 98, 104, 108, 114, 118, 124, 128, 132, 136, 142, 144, 150];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `消耗MP，發射兩個飛鏢向怪物進行攻擊，而攻擊力則受幸運數值的影響。等級${i}效果：消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                }
            ],
            "2轉 (刺客)": [
                {
                    "id": "recovery",
                    "name": "恢復術",
                    "maxLevel": 20,
                    "requiredLevel": 30,
                    "preRequisite": {},
                    "description": "增加恢復HP/ MP。當等級提高，恢復速度會愈快，所能恢復量也會變多。",
                    "imageUrl": "images/recovery.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let hpAdd, mpAdd;
                        if (i === 0) return null;

                        // HP追加回復量 的規律：線性
                        hpAdd = i * 3;

                        // MP追加回復量 的規律：線性
                        mpAdd = i;

                        return {
                            effect: `HP追加回復量: ${hpAdd}, MP追加回復量: ${mpAdd}`,
                            fullDescription: `增加恢復HP/ MP。當等級提高，恢復速度會愈快，所能恢復量也會變多。等級${i}效果：HP追加回復量${hpAdd}，MP追加回復量${mpAdd}。`
                        };
                    })
                },
                {
                    id: "booster",
                    name: "速度激發",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "於一定時間內，提升所有隊員的移動速度與跳躍力。",
                    imageUrl: "images/booster.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, moveSpeed, jump, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30];
                        const moveSpeeds = [null, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40];
                        const jumps = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];
                        mp = mpCosts[i];
                        moveSpeed = moveSpeeds[i];
                        jump = jumps[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 移動速度: ${moveSpeed}, 跳躍力: ${jump}, 持續時間: ${duration}秒`,
                            fullDescription: `於一定時間內，提升所有隊員的移動速度與跳躍力。等級${i}效果：消耗MP${mp}，移動速度${moveSpeed}，跳躍力${jump}，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    id: "shurikenMastery",
                    name: "精準暗器",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "增加使用暗器系武器的命中率及熟練度。該技能需在投擲飛鏢等武器時才會發揮效力。",
                    imageUrl: "images/shurikenMastery.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let hitRate, mastery;
                        if (i === 0) return null;
                        const hitRates = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
                        const masteries = [null, 15, 15, 20, 20, 25, 25, 30, 30, 35, 35, 40, 40, 45, 45, 50, 50, 55, 55, 60, 60];
                        hitRate = hitRates[i];
                        mastery = masteries[i];
                        return {
                            effect: `命中率: ${hitRate}, 熟練度: ${mastery}%`,
                            fullDescription: `增加使用暗器系武器的命中率及熟練度。等級${i}效果：命中率${hitRate}，熟練度${mastery}%。`
                        };
                    })
                },
                {
                    id: "shurikenBooster",
                    name: "極速暗殺",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: { "shurikenMastery": 5 },
                    description: "消耗HP與MP，而使所配帶的拳套的攻擊速度向上提升一個等級。該技能只限角色配戴拳套，並投擲飛鏢等武器時才會發揮效力。",
                    imageUrl: "images/shurikenBooster.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, hp, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const hpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];
                        mp = mpCosts[i];
                        hp = hpCosts[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 消耗HP: ${hp}, 持續時間: ${duration}秒`,
                            fullDescription: `消耗HP與MP，而使所配帶的拳套的攻擊速度向上提升一個等級。等級${i}效果：消耗MP${mp}，消耗HP${hp}，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "criticalThrow",
                    name: "強力投擲",
                    maxLevel: 30,
                    requiredLevel: 30,
                    preRequisite: { "shurikenMastery": 3 },
                    description: "按照一定比率，可發動致命一擊的攻擊。",
                    imageUrl: "images/criticalThrow.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let procRate, attack;
                        if (i === 0) return null;
                        const procRates = [null, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
                        const attacks = [null, 113, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 176, 179, 182, 185, 188, 191, 194, 197, 200];
                        procRate = procRates[i];
                        attack = attacks[i];
                        return {
                            effect: `發動機率: ${procRate}%, 攻擊力: ${attack}%`,
                            fullDescription: `按照一定比率，可發動致命一擊的攻擊。等級${i}效果：發動機率${procRate}%，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    "id": "drain",
                    "name": "吸血術",
                    "maxLevel": 30,
                    "requiredLevel": 30,
                    "preRequisite": {},
                    "description": "吸收怪物所收到的傷害值，並按照一定比例，恢復角色自身的HP。所吸收的能量，不大於角色最大HP的50%，亦不大於怪獸最大HP。",
                    "imageUrl": "images/drain.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, attack, absorbRate;
                        if (i === 0) return null;

                        // 消耗MP 的精確數值
                        const mpCosts = [null, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
                        mpCost = mpCosts[i];

                        // 攻擊力 的精確數值
                        const attacks = [null, 98, 101, 104, 107, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160];
                        attack = attacks[i];

                        // 吸收率 的規律：線性
                        absorbRate = 15 + i;

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}, 吸收率: ${absorbRate}%`,
                            fullDescription: `吸收怪物所收到的傷害值，並按照一定比例，恢復角色自身的HP。所吸收的能量，不大於角色最大HP的50%，亦不大於怪獸最大HP。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}，吸收率${absorbRate}%。`
                        };
                    })
                }
            ],
            "3轉 (暗殺者)": [
                {
                    "id": "alchemist",
                    "name": "藥劑精通",
                    "maxLevel": 20,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "增加恢復性道具的回復量及延長狀態道具的持續時間。但若是根據比例來恢復的道具則不適用，例如特殊藥水。",
                    "imageUrl": "images/alchemist.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let recoveryAmount, durationIncrease;
                        if (i === 0) return null;

                        // 回復量 和 適用時間增加 的規律
                        // 1-10級: 103% 106% ... 130% (每次加3%) => 100 + i * 3
                        // 11-20級: 132% 134% ... 150% (每次加2%) => 130 + (i-10)*2
                        if (i >= 1 && i <= 10) {
                            recoveryAmount = 100 + i * 3;
                            durationIncrease = 100 + i * 3;
                        } else if (i >= 11 && i <= 20) {
                            recoveryAmount = 130 + (i - 10) * 2;
                            durationIncrease = 130 + (i - 10) * 2;
                        }

                        return {
                            effect: `回復量: ${recoveryAmount}%, 適用時間增加: ${durationIncrease}%`,
                            fullDescription: `增加恢復性道具的回復量及延長狀態道具的持續時間。等級${i}效果：回復量${recoveryAmount}%，適用時間增加${durationIncrease}%。`
                        };
                    })
                },
                {
                    "id": "luckyCharm",
                    "name": "幸運術",
                    "maxLevel": 20,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "一定時間內，包括自己及周圍的隊友，在獵殺怪物時可獲得更多的楓幣。",
                    "imageUrl": "images/luckyCharm.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, duration, increaseRate;
                        if (i === 0) return null;

                        // 消耗MP 的規律：分段
                        if (i >= 1 && i <= 5) {
                            mpCost = 45;
                        } else if (i >= 6 && i <= 10) {
                            mpCost = 50;
                        } else if (i >= 11 && i <= 15) {
                            mpCost = 55;
                        } else if (i >= 16 && i <= 20) {
                            mpCost = 60;
                        }

                        // 持續時間 的規律：分段線性
                        if (i >= 1 && i <= 10) {
                            duration = i * 10;
                        } else { // i >= 11 && i <= 20
                            duration = 100 + (i - 10) * 20;
                        }

                        // 增加率 的規律：分段線性
                        if (i >= 1 && i <= 10) {
                            increaseRate = 10 + i * 3;
                        } else { // i >= 11 && i <= 20
                            increaseRate = 40 + (i - 10) * 2;
                        }

                        return {
                            effect: `消耗MP: ${mpCost}, 持續時間: ${duration}秒, 增加率: ${increaseRate}%`,
                            fullDescription: `一定時間內，包括自己及周圍的隊友，在獵殺怪物時可獲得更多的楓幣。等級${i}效果：消耗MP${mpCost}，持續時間${duration}秒，增加率${increaseRate}%。`
                        };
                    })
                },
                {
                    "id": "shadowClone",
                    "name": "影分身",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "消費召喚石於一定時間內召喚出分身，分身會模仿主人做出相同的動作或攻擊。影分身並沒有HP，當超過時效時便會自動消失。",
                    "imageUrl": "images/shadowClone.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, duration, cloneDamage;
                        if (i === 0) return null;

                        // 消耗MP 的精確數值
                        const mpCosts = [null, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135, 130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55];
                        mpCost = mpCosts[i];

                        // 持續時間 的精確數值
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300];
                        duration = durations[i];

                        // 分身傷害 的精確數值 (普通攻擊、技能攻擊合併為單一數值)
                        // 攻擊力 的精確數值
                        const cloneDamages = [null, 21, 21, 21, 21, 21, 21, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 40, 42, 44, 46, 48, 50];
                        cloneDamage = cloneDamages[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 持續時間: ${duration}秒, 分身傷害: ${cloneDamage}%`,
                            fullDescription: `消費召喚石於一定時間內召喚出分身，分身會模仿主人做出相同的動作或攻擊。影分身並沒有HP，當超過時效時便會自動消失。等級${i}效果：消耗MP${mpCost}，持續時間${duration}秒，分身傷害${cloneDamage}%。`
                        };
                    })
                },
                {
                    id: "shadowWeb",
                    name: "影網術",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "將自己的影子做成蜘蛛網，用來纏住六個以下的敵人。被蜘蛛網束縛住的敵人將無法動彈力。",
                    imageUrl: "images/shadowWeb.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, duration, bindRate;
                        if (i === 0) return null;
                        mp = i <= 5 ? 10 : (i <= 10 ? 14 : (i <= 15 ? 18 : 22));
                        duration = Math.floor((i - 1) / 5) + 5; // Simplified
                        bindRate = 40 + i * 2; // Simplified
                        return {
                            effect: `消耗MP: ${mp}, 持續時間: ${duration}秒, 束縛成功率: ${bindRate}%`,
                            fullDescription: `將自己的影子做成蜘蛛網，用來纏住六個以下的敵人。等級${i}效果：消耗MP${mp}，持續時間${duration}秒，束縛成功率${bindRate}%。`
                        };
                    })
                },
                {
                    "id": "mesoAttack",
                    "name": "楓幣攻擊",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": { "luckyCharm": 5 },
                    "description": "使用楓幣進行攻擊，根據投擲的楓幣數量，對敵人造成傷害。該技能將無視敵人物理防禦及魔法防禦的提升。強打率:一定機率多增加50%傷害",
                    "imageUrl": "images/mesoAttack.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let minMeso, maxMeso, procRate, attack;
                        if (i === 0) return null;

                        minMeso = 40 + i * 10;
                        maxMeso = 200 + i * 20;
                        procRate = i;
                        attack = 150;

                        return {
                            effect: `最小消耗金幣: ${minMeso}, 最大消耗金幣: ${maxMeso}, 強打率: ${procRate}%, 攻擊力: ${attack}%`,
                            fullDescription: `使用楓幣進行攻擊，根據投擲的楓幣數量，對敵人造成傷害。等級${i}效果：最小消耗金幣${minMeso}，最大消耗金幣${maxMeso}，強打率${procRate}%，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "windDemonShuriken", // 風魔手裡劍
                    name: "風魔手裡劍",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "消耗MP對怪物投擲出大型飛鏢(消費3個飛鏢)，投擲的飛鏢將貫穿敵人，可同時對前方的怪物造成傷害。",
                    imageUrl: "images/windDemonShuriken.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, attack, numEnemies;
                        if (i === 0) return null;
                        mp = i <= 10 ? 16 : (i <= 20 ? 23 : 30);
                        attack = 60 + i * 4; // Simplified
                        numEnemies = 4 + Math.floor((i - 1) / 10); // Simplified
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 敵人數量: ${numEnemies}`,
                            fullDescription: `消耗MP對怪物投擲出大型飛鏢(消費3個飛鏢)，投擲的飛鏢將貫穿敵人，可同時對前方的怪物造成傷害。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，敵人數量${numEnemies}。`
                        };
                    })
                },
                {
                    id: "doubleJump",
                    name: "二段跳",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: { "windDemonShuriken": 5 }, // 前置技能：風魔手裡劍x5
                    description: "角色跳躍時，可使用此技能在空中進行向前方遠距離跳躍的動作。",
                    imageUrl: "images/doubleJump.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp;
                        if (i === 0) return null;
                        mp = 60 - i * 2.35; // Simplified
                        return {
                            effect: `消耗MP: ${Math.round(mp)}`,
                            fullDescription: `角色跳躍時，可使用此技能在空中進行向前方遠距離跳躍的動作。等級${i}效果：消耗MP${Math.round(mp)}。`
                        };
                    })
                }
            ],
            "4轉 (夜使者)": [
                {
                    id: "mapleWarrior",
                    name: "楓葉祝福",
                    maxLevel: 30,
                    requiredLevel: 120, // 楓葉祝福通常無等級限制，可根據需求自行修改
                    preRequisite: {},
                    description: "全職業的共通技能，一定時間內全能力(力量、敏捷、智力、幸運)增加固定%數。",
                    imageUrl: "images/mapleWarrior.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 10, 持續時間: 30秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級1效果：消耗MP 10，持續時間 30秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 60秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級2效果：消耗MP 10，持續時間 60秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 90秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級3效果：消耗MP 10，持續時間 90秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 120秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級4效果：消耗MP 10，持續時間 120秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 150秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級5效果：消耗MP 10，持續時間 150秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 180秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級6效果：消耗MP 20，持續時間 180秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 210秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級7效果：消耗MP 20，持續時間 210秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 240秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級8效果：消耗MP 20，持續時間 240秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 270秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級9效果：消耗MP 20，持續時間 270秒，全能力增加 5%。" },
                        { effect: "消耗MP: 20, 持續時間: 300秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級10效果：消耗MP 20，持續時間 300秒，全能力增加 5%。" },
                        { effect: "消耗MP: 30, 持續時間: 330秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級11效果：消耗MP 30，持續時間 330秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 360秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級12效果：消耗MP 30，持續時間 360秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 390秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級13效果：消耗MP 30，持續時間 390秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 420秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級14效果：消耗MP 30，持續時間 420秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 450秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級15效果：消耗MP 30，持續時間 450秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 480秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級16效果：消耗MP 40，持續時間 480秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 510秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級17效果：消耗MP 40，持續時間 510秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 540秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級18效果：消耗MP 40，持續時間 540秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 570秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級19效果：消耗MP 40，持續時間 570秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 600秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級20效果：消耗MP 40，持續時間 600秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 630秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級21效果：消耗MP 40，持續時間 630秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 660秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級22效果：消耗MP 40，持續時間 660秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 690秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級23效果：消耗MP 40，持續時間 690秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 720秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級24效果：消耗MP 40，持續時間 720秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 750秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級25效果：消耗MP 40，持續時間 750秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 780秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級26效果：消耗MP 40，持續時間 780秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 810秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級27效果：消耗MP 40，持續時間 810秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 840秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級28效果：消耗MP 40，持續時間 840秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 870秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級29效果：消耗MP 40，持續時間 870秒，全能力增加 15%。" },
                        { effect: "消耗MP: 40, 持續時間: 900秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級30效果：消耗MP 40，持續時間 900秒，全能力增加 15%。" }
                    ]
                },
                {
                    id: "heroesWill",
                    name: "楓葉淨化",
                    maxLevel: 1,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。",
                    imageUrl: "images/heroesWill.png",
                    levels: [
                        null,
                        {
                            effect: "消耗MP: 30, 冷卻時間: 600秒",
                            fullDescription: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。等級1效果：消耗MP 30，冷卻時間 600秒。"
                        }
                    ]
                },
                {
                    id: "shadowerInstinct",
                    name: "瞬身迴避",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "提升本身的迴避能力，一定的機率完全迴避敵人攻擊。若系統判定完全閃避時，會出現木人特效。",
                    imageUrl: "images/shadowerInstinct.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 使用陣列方式列出機率，確保未來若有版本平衡微調時容易修改
                        const evasionChances = [
                            null,
                            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                            21, 22, 23, 24, 25, 26, 27, 28, 29, 30
                        ];

                        const chance = evasionChances[i];

                        return {
                            effect: `完全迴避機率: ${chance}%`,
                            fullDescription: `提升本身的迴避能力，一定的機率完全迴避敵人攻擊。等級${i}效果：完全迴避機率${chance}%。`
                        };
                    })
                },
                {
                    id: "tauntNL",
                    name: "挑釁",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "最多可挑釁6名敵方，持續120秒敵人防禦、經驗值、掉寶率上升一定%數。該技能不受攻擊速度影響，當挑釁與神聖祈禱一起使用時，額外經驗值是相加。",
                    imageUrl: "images/tauntNL.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP規律：1-20級為 20+i，21級起固定為 40
                        const mpCosts = [
                            null,
                            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, // 1-10
                            31, 32, 33, 34, 35, 36, 37, 38, 39, 40, // 11-20
                            40, 40, 40, 40, 40, 40, 40, 40, 40, 40  // 21-30
                        ];

                        // 2. 機率提升規律：起始 10%，每級增加 1% (1級=11%, 30級=40%)
                        const bonusChance = 10 + i;

                        const mp = mpCosts[i];
                        const duration = 120; // 固定 120 秒

                        return {
                            effect: `消耗MP: ${mp}, 經驗/掉寶/防禦提升: ${bonusChance}%, 持續時間: ${duration}秒`,
                            fullDescription: `最多可挑釁6名敵方。等級${i}效果：經驗值、掉寶率與怪物防禦提升${bonusChance}%，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "toxicVenom",
                    name: "飛毒殺",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "把飛鏢塗上毒後再攻擊敵人，一定機率會讓敵人中毒造成持續的傷害，最多有3次可以重覆中毒的可能性，且不會使敵方HP降到1以下。",
                    imageUrl: "images/toxicVenom.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 攻擊力：線性成長，1級=31, 30級=60
                        const power = 30 + i;

                        // 2. 中毒機率：不規則跳動，採陣列查表
                        const poisonChances = [
                            null,
                            22, 22, 22, 24, 24, 24, 26, 26, 26, 28, // 1-10
                            28, 28, 30, 30, 30, 32, 32, 32, 34, 34, // 11-20
                            34, 36, 36, 36, 38, 38, 38, 40, 40, 40  // 21-30
                        ];

                        // 3. 持續時間：每10級增加1秒
                        const durations = [
                            null,
                            2, 2, 2, 2, 2, 2, 2, 2, 2, 2, // 1-10
                            3, 3, 3, 3, 3, 3, 3, 3, 3, 3, // 11-20
                            4, 4, 4, 4, 4, 4, 4, 4, 4, 4  // 21-30
                        ];

                        const chance = poisonChances[i];
                        const time = durations[i];

                        return {
                            effect: `中毒傷害: ${power}%, 中毒機率: ${chance}%, 持續時間: ${time}秒`,
                            fullDescription: `攻擊時有${chance}%機率使敵人中毒。等級${i}效果：每秒造成${power}%持續傷害，持續${time}秒，最高可堆疊3次。`
                        };
                    })
                },
                {
                    id: "ninjaAmbushNL",
                    name: "忍影瞬殺",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {"shadowerInstinct":5},
                    description: "呼喚影分身出來躲起來偷襲範圍內的敵人，給予持續傷害，最多6名敵人，且不會使敵方HP下降到1以下。",
                    imageUrl: "images/ninjaAmbush.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const mpCosts = [null, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 48, 48, 48, 48, 48, 48, 48, 48, 48, 43];
                        const attacks = [null, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
                        const durations = [null, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12];
                        const ranges = [null, 110, 110, 110, 120, 120, 120, 130, 130, 130, 140, 140, 140, 150, 150, 150, 160, 160, 160, 170, 170, 170, 170, 180, 180, 190, 190, 190, 200, 200, 200];
                        return {
                            effect: `消耗MP: ${mpCosts[i]}, 攻擊力: ${attacks[i]}%, 持續時間: ${durations[i]}秒, 距離: ${ranges[i]}`,
                            fullDescription: `呼喚影分身出來躲起來偷襲範圍內的敵人，給予持續傷害，最多6名敵人，且不會使敵方HP下降到1以下。等級${i}效果：消耗MP${mpCosts[i]}，攻擊力${attacks[i]}%，持續時間${durations[i]}秒，距離${ranges[i]}。`
                        };
                    })
                },
                {
                    id: "expertThrowingStarHandling",
                    name: "無形鏢",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "增加對BOSS傷害。",
                    imageUrl: "images/expertThrowingStarHandling.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 1-10級:15, 11-20級:20, 21-30級:25
                        const mpCosts = [
                            null,
                            15, 15, 15, 15, 15, 15, 15, 15, 15, 15, // 1-10
                            20, 20, 20, 20, 20, 20, 20, 20, 20, 20, // 11-20
                            25, 25, 25, 25, 25, 25, 25, 25, 25, 25  // 21-30
                        ];

                        // 2. 持續時間: 每級增加 10 秒 (i * 10)
                        const duration = i * 10;

                        // 3. 傷害增加: 規律的三級一跳
                        const damageIncreases = [
                            null,
                            1, 1, 1, 2, 2, 2, 3, 3, 3, 4, // 1-10
                            4, 4, 5, 5, 5, 6, 6, 6, 7, 7, // 11-20
                            7, 8, 8, 8, 9, 9, 9, 10, 10, 10 // 21-30
                        ];

                        const mp = mpCosts[i];
                        const bossDmg = damageIncreases[i];

                        return {
                            effect: `消耗MP: ${mp}, 持續時間: ${duration}秒, 對BOSS傷害增加: ${bossDmg}%`,
                            fullDescription: `凝聚無形的氣勁於鏢中。等級${i}效果：持續${duration}秒，對BOSS傷害增加${bossDmg}%。`
                        };
                    })
                },
                {
                    id: "ninjaStorm",
                    name: "忍術風影",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "將周圍怪物擊退，技能等級越高推的數量越多。",
                    imageUrl: "images/ninjaStorm.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 1-10級:16, 11-20級:24, 21-30級:30
                        const mpCosts = [
                            null,
                            16, 16, 16, 16, 16, 16, 16, 16, 16, 16, // 1-10
                            24, 24, 24, 24, 24, 24, 24, 24, 24, 24, // 11-20
                            30, 30, 30, 30, 30, 30, 30, 30, 30, 30  // 21-30
                        ];

                        // 2. 擊退數量: 每5級跳一次 (1, 2, 3, 4, 5, 6)
                        const mobCounts = [
                            null,
                            1, 1, 1, 1, 1, // 1-5
                            2, 2, 2, 2, 2, // 6-10
                            3, 3, 3, 3, 3, // 11-15
                            4, 4, 4, 4, 4, // 16-20
                            5, 5, 5, 5, 5, // 21-25
                            6, 6, 6, 6, 6  // 26-30
                        ];

                        // 3. 攻擊力規律:
                        // 1-10級: 40 + (i * 2) [1級=42%, 10級=60%]
                        // 11-30級: 50 + i [11級=61%, 30級=80%]
                        let attack;
                        if (i <= 10) {
                            attack = 40 + (i * 2);
                        } else {
                            attack = 50 + i;
                        }

                        const mp = mpCosts[i];
                        const mobCount = mobCounts[i];

                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 擊退數量: ${mobCount}`,
                            fullDescription: `將周圍怪物擊退。等級${i}效果：消耗MP ${mp}，造成${attack}%傷害，最多擊退${mobCount}名怪物。`
                        };
                    })
                },
                {
                    id: "tripleThrow",
                    name: "三飛閃",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "一次用3個飛鏢攻擊怪物，每增加77點運氣屬性，增加1%熟練度，最大效果為55.55% + 20% = 75.55%",
                    imageUrl: "images/tripleThrow.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;
                        const mpCosts = [null, 11, 11, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16, 16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20];
                        const attacks = [null, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150];
                        return {
                            effect: `消耗MP: ${mpCosts[i]}, 攻擊力: ${attacks[i]}%`,
                            fullDescription: `一次用3個飛鏢攻擊怪物。等級${i}效果：消耗MP${mpCosts[i]}，攻擊力${attacks[i]}%。`
                        };
                    })
                }
            ],
            "超技能": [],
            "共通技能": []
        }
    },
    "拳霸 (Buccaneer)": {
        emblemUrl: 'emblems/Buccaneer.png',
        startingLevelForSp: 10, // 海盜系通常10等轉職
        jobAdvancementSpBonuses: [10, 30, 70, 120],
        jobStagesOrder: ["0轉 (新手)", "1轉 (海盜)", "2轉 (打手)", "3轉 (格鬥家)", "4轉 (拳霸)", "超技能", "5轉技能", "共通技能"],
        spRequiredFor2ndJob: 61, // 其他職業2轉點數需求
        spRequiredFor3rdJob: 182, // 其他職業3轉點數需求
        spRequiredFor4thJob: 333, // 4轉通用點數需求
        skills: {
            "0轉 (新手)": [],
            "1轉 (海盜)": [
                {
                    id: "nimbleBody",
                    name: "極限迴避",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "增加命中率和迴避率",
                    imageUrl: "images/nimbleBody.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `命中率: ${i}, 迴避率: ${i}`,
                        fullDescription: `增加命中率和迴避率。等級${i}效果：命中率${i}，迴避率${i}。`
                    })
                },
                {
                    id: "straightPunch",
                    name: "衝擊拳",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "以拳頭快速攻擊單一敵人。",
                    imageUrl: "images/straightPunch.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack;
                        if (i === 0) return null;
                        const mpCosts = [null, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14];
                        const attacks = [null, 156, 162, 168, 174, 180, 186, 192, 198, 204, 210, 216, 222, 228, 234, 240, 246, 252, 258, 264, 270];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `以拳頭快速攻擊單一敵人。等級${i}效果：消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "somersaultKick",
                    name: "旋風斬",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "跳躍動作向後旋轉，同時以腿部向週遭的多個敵人展開攻擊。",
                    imageUrl: "images/somersaultKick.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack, numEnemies;
                        if (i === 0) return null;
                        const mpCosts = [null, 8, 8, 8, 8, 9, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 17];
                        const attacks = [null, 114, 118, 122, 126, 130, 134, 138, 142, 146, 150, 154, 158, 162, 166, 170, 174, 178, 182, 186, 190];
                        const numEnemiesArr = [null, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        numEnemies = numEnemiesArr[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 攻擊敵人數: ${numEnemies}`,
                            fullDescription: `跳躍動作向後旋轉，同時以腿部向週遭的多個敵人展開攻擊。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，攻擊敵人數${numEnemies}。`
                        };
                    })
                },
                {
                    id: "doubleShotPirate", // 為了區分其他職業的Double Shot
                    name: "雙子星攻擊",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "一次發射兩顆子彈來攻擊敵人。",
                    imageUrl: "images/doubleShotPirate.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack;
                        if (i === 0) return null;
                        const mpCosts = [null, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7];
                        const attacks = [null, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89, 92, 95, 98, 101, 104, 107, 110];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `一次發射兩顆子彈來攻擊敵人。等級${i}效果：消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "dash",
                    name: "衝鋒",
                    maxLevel: 10,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "暫時提升移動速度與跳躍力。",
                    imageUrl: "images/dash.png", // 確保圖片檔案存在
                    levels: Array(11).fill(null).map((_, i) => {
                        let mp, duration, moveSpeed, jump;
                        if (i === 0) return null;
                        const mpCosts = [null, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5];
                        const durations = [null, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150]; // Level 10 duration is 150s
                        const moveSpeeds = [null, 8, 8, 8, 8, 8, 15, 15, 15, 15, 15];
                        const jumps = [null, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5];
                        mp = mpCosts[i];
                        duration = durations[i];
                        moveSpeed = moveSpeeds[i];
                        jump = jumps[i];
                        return {
                            effect: `消耗MP: ${mp}, 持續時間: ${duration}秒, 移動速度: ${moveSpeed}, 跳躍力: ${jump}`,
                            fullDescription: `暫時提升移動速度與跳躍力。等級${i}效果：消耗MP${mp}，持續時間${duration}秒，移動速度${moveSpeed}，跳躍力${jump}。`
                        };
                    })
                }
            ],
            "2轉 (打手)": [
                {
                    id: "hpIncrease",
                    name: "體魄強健",
                    maxLevel: 10,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "當角色升級，或是將升級時所獲得能力點數分配到最大HP時，可提升最大HP的增加量。",
                    imageUrl: "images/hpIncrease.png", // 確保圖片檔案存在
                    levels: Array(11).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `最大HP: ${i * 3}`,
                        fullDescription: `當角色升級，或是將升級時所獲得能力點數分配到最大HP時，可提升最大HP的增加量。等級${i}效果：最大HP${i * 3}。`
                    })
                },
                {
                    id: "knuckleMastery",
                    name: "精通指虎",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "提升指虎系列武器的熟練度與命中率。限定必須裝備指虎。增加10%的BOSS傷害",
                    imageUrl: "images/knuckleMastery.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let hitRate, mastery;
                        if (i === 0) return null;
                        const hitRates = [null, 1, 2, 3, 4, 5, 6, 6, 8, 8, 10, 10, 12, 12, 14, 14, 16, 16, 18, 19, 20];
                        const masteries = [null, 15, 15, 20, 20, 25, 25, 25, 30, 30, 35, 35, 40, 40, 45, 45, 50, 50, 55, 60, 60];
                        hitRate = hitRates[i];
                        mastery = masteries[i];
                        return {
                            effect: `命中率: ${hitRate}, 熟練度: ${mastery}%`,
                            fullDescription: `提升指虎系列武器的熟練度與命中率。等級${i}效果：命中率${hitRate}，熟練度${mastery}%。`
                        };
                    })
                },
                {
                    id: "backspinBlow",
                    name: "迴旋肘擊",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "快速滑向後方，用手肘對後方多名敵人造成暈眩與傷害。減少後置延遲",
                    imageUrl: "images/backspinBlow.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack, numEnemies;
                        if (i === 0) return null;
                        const mpCosts = [null, 12, 12, 14, 14, 16, 16, 18, 18, 20, 20, 22, 22, 24, 24, 26, 26, 28, 28, 30, 30];
                        const attacks = [null, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232, 240];
                        const numEnemiesArr = Array(21).fill(3); // 敵人數量固定3
                        mp = mpCosts[i];
                        attack = attacks[i];
                        numEnemies = numEnemiesArr[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 攻擊敵人個數: ${numEnemies}`,
                            fullDescription: `快速滑向後方，用手肘對後方多名敵人造成暈眩與傷害。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，攻擊敵人個數${numEnemies}。`
                        };
                    })
                },
                {
                    id: "screwPunch",
                    name: "昇龍拳",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "以拳頭快速向敵人發動連續兩次攻擊，造成暈眩與傷害。",
                    imageUrl: "images/screwPunch.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack;
                        if (i === 0) return null;
                        const mpCosts = [null, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 25, 25, 25, 25, 25, 30, 30, 30, 30, 30];
                        const attacks = [null, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `以拳頭快速向敵人發動連續兩次攻擊，造成暈眩與傷害。等級${i}效果：消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "corkscrewBlow",
                    name: "狂暴衝擊",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "向前方衝刺，並對前方的敵人以拳頭發動攻擊。",
                    imageUrl: "images/corkscrewBlow.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack, numEnemies;
                        if (i === 0) return null;
                        const mpCosts = [null, 20, 20, 20, 20, 24, 24, 24, 24, 28, 28, 28, 28, 32, 32, 32, 32, 36, 36, 36, 36];
                        const attacks = [null, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345, 360, 375, 390, 405, 420];
                        const numEnemiesArr = Array(21).fill(3); // 敵人數量固定3
                        mp = mpCosts[i];
                        attack = attacks[i];
                        numEnemies = numEnemiesArr[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 攻擊敵人個數: ${numEnemies}`,
                            fullDescription: `向前方衝刺，並對前方的敵人以拳頭發動攻擊。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，攻擊敵人個數${numEnemies}。`
                        };
                    })
                },
                {
                    id: "mpRecovery",
                    name: "魔力再生",
                    maxLevel: 10,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "消耗自己的HP來恢復MP。",
                    imageUrl: "images/mpRecovery.png", // 確保圖片檔案存在
                    levels: Array(11).fill(null).map((_, i) => {
                        let hpCost, mpRestore, cooldown;
                        if (i === 0) return null;
                        const hpCosts = Array(11).fill("10%"); // HP消耗固定10%
                        const mpRestores = [null, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
                        const cooldowns = [null, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25];
                        hpCost = hpCosts[i];
                        mpRestore = mpRestores[i];
                        cooldown = cooldowns[i];
                        return {
                            effect: `消耗HP: ${hpCost}, 回復MP: ${mpRestore}%, 冷卻時間: ${cooldown}秒`,
                            fullDescription: `消耗自己的HP來恢復MP。等級${i}效果：消耗HP${hpCost}，回復MP${mpRestore}%，冷卻時間${cooldown}秒。`
                        };
                    })
                },
                {
                    id: "knuckleBooster",
                    name: "致命快打",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: { "knuckleMastery": 5 },
                    description: "消耗HP、MP，一定時間內提升指虎的攻擊速度。限定必須裝備指虎。",
                    imageUrl: "images/knuckleBooster.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, hp, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const hpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300]; // Level 13-20 durations are adjusted
                        mp = mpCosts[i];
                        hp = hpCosts[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 消耗HP: ${hp}, 持續時間: ${duration}秒`,
                            fullDescription: `消耗HP、MP，一定時間內提升指虎的攻擊速度。限定必須裝備指虎。等級${i}效果：消耗MP${mp}，消耗HP${hp}，持續${duration}秒。`
                        };
                    })
                },
                {
                    "id": "oakBarrel",
                    "name": "偽裝術",
                    "maxLevel": 10,
                    "requiredLevel": 30,
                    "preRequisite": {},
                    "description": "套上能阻檔一次傷害的木桶。有幾率打穿而受到傷害。若成功擋下攻擊，將無法繼續阻擋傷害，除非再次使用技能",
                    "imageUrl": "images/oakBarrel.png",
                    "levels": Array(11).fill(null).map((_, i) => {
                        let mpCost, missRate, cooldown;
                        if (i === 0) return null;

                        // 消耗MP 的規律：精確數值
                        const mpCosts = [null, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20];
                        mpCost = mpCosts[i];

                        // 未格檔機率 的規律：線性遞減
                        missRate = 40 - i * 3;

                        // 冷卻時間 的規律：固定20秒
                        cooldown = 20;

                        return {
                            effect: `消耗MP: ${mpCost}, 未格檔機率: ${missRate}%, 冷卻時間: ${cooldown}秒`,
                            fullDescription: `套上能阻檔一次傷害的木桶。等級${i}效果：消耗MP${mpCost}，未格檔機率${missRate}%，冷卻時間${cooldown}秒。`
                        };
                    })
                }
            ],
            "3轉 (格鬥家)": [
                {
                    "id": "demolition",
                    "name": "致命暗襲",
                    "maxLevel": 20,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "對暈眩狀態的敵人進行攻擊時，會以一定機率發動致命一擊。對BOSS會造成額外傷害。",
                    "imageUrl": "images/demolition.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let procRate, normalDmg, bossDmg;
                        if (i === 0) return null;

                        // 機率 的規律：線性
                        procRate = 20 + i * 2;

                        // 一般怪物額外傷害 的規律：線性
                        normalDmg = i * 3;

                        // BOSS額外傷害 的規律：線性
                        bossDmg = i * 0.5;

                        return {
                            effect: `機率: ${procRate}%, 一般怪物額外傷害: ${normalDmg}%, BOSS額外傷害: ${bossDmg}%`,
                            fullDescription: `對暈眩狀態的敵人進行攻擊時，會以一定機率發動致命一擊。等級${i}效果：機率${procRate}%，一般怪物額外傷害${normalDmg}%，BOSS額外傷害${bossDmg}%。`
                        };
                    })
                },
                {
                    id: "energyCharge",
                    name: "蓄能激發",
                    maxLevel: 40,
                    requiredLevel: 70, // 通常為海盜三轉技能
                    preRequisite: {},
                    description: "每次攻擊就會儲存一定的能量，當能量補滿就會自動發動物理攻擊與狀態的特效，並可使用消耗能量的技能。",
                    imageUrl: "images/energyCharge.png",
                    levels: Array(41).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 攻擊力：階梯式成長
                        const attackValues = [
                            null,
                            10, 10, 10, 11, 11, 11, 11, 12, 12, 12, // 1-10
                            12, 13, 13, 13, 13, 14, 14, 14, 14, 15, // 11-20
                            15, 15, 15, 16, 16, 16, 16, 17, 17, 17, // 21-30
                            17, 18, 18, 18, 18, 19, 19, 19, 19, 20  // 31-40
                        ];

                        // 2. 命中率與迴避率：數據相同，三級跳或二級跳交替
                        const accEvaValues = [
                            null,
                            1, 1, 2, 2, 3, 3, 4, 4, 5, 5,   // 1-10
                            6, 6, 7, 7, 8, 8, 9, 9, 10, 10, // 11-20
                            11, 11, 12, 12, 13, 13, 14, 14, 15, 15, // 21-30
                            16, 16, 17, 17, 18, 18, 19, 19, 20, 20  // 31-40
                        ];

                        // 3. 持續時間：30 + ceil(i/2) 規律 (1級=31, 40級=50)
                        // 為了保持風格統一，這裡也直接列出
                        const durationValues = [
                            null,
                            31, 31, 32, 32, 33, 33, 34, 34, 35, 35, // 1-10
                            36, 36, 37, 37, 38, 38, 39, 39, 40, 40, // 11-20
                            41, 41, 42, 42, 43, 43, 44, 44, 45, 45, // 21-30
                            46, 46, 47, 47, 48, 48, 49, 49, 50, 50  // 31-40
                        ];

                        const atk = attackValues[i];
                        const accEva = accEvaValues[i];
                        const duration = durationValues[i];

                        return {
                            effect: `物理攻擊力: +${atk}, 命中率: +${accEva}, 迴避率: +${accEva}, 持續時間: ${duration}秒`,
                            fullDescription: `能量補滿時自動發動特效。等級${i}效果：攻擊力+${atk}，命中與迴避+${accEva}，持續${duration}秒。`
                        };
                    })
                },
                {
                    id: "energyBlast",
                    name: "能量暴擊",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: { "energyCharge": 1 },
                    description: "藉著消耗能量，向近距離的多個敵人發動攻擊。只限在能量補滿的狀態下使用。",
                    imageUrl: "images/energyBlast.png", // 確保圖片檔案存在
                    levels: Array(31).fill(null).map((_, i) => {
                        let attack, numEnemies;
                        if (i === 0) return null;
                        const attacks = [null, 246, 252, 258, 264, 270, 276, 282, 288, 294, 300, 306, 312, 318, 324, 330, 336, 342, 348, 354, 360, 366, 372, 378, 384, 390, 396, 402, 408, 414, 420];
                        const numEnemiesArr = [null, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
                        attack = attacks[i];
                        numEnemies = numEnemiesArr[i];
                        return {
                            effect: `攻擊力: ${attack}%, 攻擊敵人個數: ${numEnemies}`,
                            fullDescription: `藉著消耗能量，向近距離的多個敵人發動攻擊。等級${i}效果：攻擊力${attack}%，攻擊敵人個數${numEnemies}。`
                        };
                    })
                },
                {
                    id: "energyDrain",
                    name: "損人利己",
                    maxLevel: 20,
                    requiredLevel: 70,
                    preRequisite: { "energyCharge": 1 },
                    description: "在能量補滿的狀態下利用能量將敵人的部份HP轉變為自己的HP。只限在能量補滿的狀態下使用。",
                    imageUrl: "images/energyDrain.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let absorbPercent, attack;
                        if (i === 0) return null;
                        const absorbPercents = [null, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20];
                        const attacks = [null, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320, 325, 330, 335, 340, 345, 350, 355, 360];
                        absorbPercent = absorbPercents[i];
                        attack = attacks[i];
                        return {
                            effect: `吸收敵人傷害百分比: ${absorbPercent}%, 攻擊力: ${attack}%`,
                            fullDescription: `在能量補滿的狀態下利用能量將敵人的部份HP轉變為自己的HP。等級${i}效果：吸收敵人傷害百分比${absorbPercent}%，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    "id": "transformation",
                    "name": "鬥神附體",
                    "maxLevel": 20,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "240秒內可轉變為變身狀態。可使用技能：衝擊波、極限再起、能量衝擊、損人利己、楓葉祝福、堅忍意志、最終極速、時間置換。",
                    "imageUrl": "images/transformation.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, pDef, mDef, cooldown;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        mpCost = 20 + i * 2;

                        // 物理防禦力 和 魔法防禦力 的規律：線性
                        pDef = i * 2;
                        mDef = i * 2;

                        // 冷卻時間 的規律
                        cooldown = 560 - i * 10;
                        if (i === 1) cooldown = 550;

                        return {
                            effect: `消耗MP: ${mpCost}, 物理防禦力: ${pDef}, 魔法防禦力: ${mDef}, 冷卻時間: ${cooldown}秒`,
                            fullDescription: `240秒內可轉變為變身狀態。等級${i}效果：消耗MP${mpCost}，物理防禦力${pDef}，魔法防禦力${mDef}，冷卻時間${cooldown}秒。`
                        };
                    })
                },
                {
                    id: "shockwave",
                    name: "衝擊波",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: { "transformation": 1 },
                    description: "強烈地敲擊地面，藉此衝擊讓多個敵人收到傷害。只限鬥神附體、鬥神降世狀態下才能使用。",
                    imageUrl: "images/shockwave.png", // 確保圖片檔案存在
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, attack, numEnemies;
                        if (i === 0) return null;
                        mp = 18 + Math.floor((i - 1) / 5) * 4; // Simplified
                        attack = 260 + i * 15; // Simplified
                        numEnemies = 4 + Math.floor((i - 1) / 10) * 1; // Simplified
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 攻擊敵人個數: ${numEnemies}`,
                            fullDescription: `強烈地敲擊地面，藉此衝擊讓多個敵人收到傷害。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，攻擊敵人個數${numEnemies}。`
                        };
                    })
                }
            ],
            "4轉 (拳霸)": [
                {
                    id: "mapleWarrior",
                    name: "楓葉祝福",
                    maxLevel: 30,
                    requiredLevel: 120, // 楓葉祝福通常無等級限制，可根據需求自行修改
                    preRequisite: {},
                    description: "全職業的共通技能，一定時間內全能力(力量、敏捷、智力、幸運)增加固定%數。",
                    imageUrl: "images/mapleWarrior.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 10, 持續時間: 30秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級1效果：消耗MP 10，持續時間 30秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 60秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級2效果：消耗MP 10，持續時間 60秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 90秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級3效果：消耗MP 10，持續時間 90秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 120秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級4效果：消耗MP 10，持續時間 120秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 150秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級5效果：消耗MP 10，持續時間 150秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 180秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級6效果：消耗MP 20，持續時間 180秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 210秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級7效果：消耗MP 20，持續時間 210秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 240秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級8效果：消耗MP 20，持續時間 240秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 270秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級9效果：消耗MP 20，持續時間 270秒，全能力增加 5%。" },
                        { effect: "消耗MP: 20, 持續時間: 300秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級10效果：消耗MP 20，持續時間 300秒，全能力增加 5%。" },
                        { effect: "消耗MP: 30, 持續時間: 330秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級11效果：消耗MP 30，持續時間 330秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 360秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級12效果：消耗MP 30，持續時間 360秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 390秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級13效果：消耗MP 30，持續時間 390秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 420秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級14效果：消耗MP 30，持續時間 420秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 450秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級15效果：消耗MP 30，持續時間 450秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 480秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級16效果：消耗MP 40，持續時間 480秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 510秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級17效果：消耗MP 40，持續時間 510秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 540秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級18效果：消耗MP 40，持續時間 540秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 570秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級19效果：消耗MP 40，持續時間 570秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 600秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級20效果：消耗MP 40，持續時間 600秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 630秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級21效果：消耗MP 40，持續時間 630秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 660秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級22效果：消耗MP 40，持續時間 660秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 690秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級23效果：消耗MP 40，持續時間 690秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 720秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級24效果：消耗MP 40，持續時間 720秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 750秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級25效果：消耗MP 40，持續時間 750秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 780秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級26效果：消耗MP 40，持續時間 780秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 810秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級27效果：消耗MP 40，持續時間 810秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 840秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級28效果：消耗MP 40，持續時間 840秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 870秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級29效果：消耗MP 40，持續時間 870秒，全能力增加 15%。" },
                        { effect: "消耗MP: 40, 持續時間: 900秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級30效果：消耗MP 40，持續時間 900秒，全能力增加 15%。" }
                    ]
                },
                {
                    id: "heroesWill",
                    name: "楓葉淨化",
                    maxLevel: 1,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。",
                    imageUrl: "images/heroesWill.png",
                    levels: [
                        null,
                        {
                            effect: "消耗MP: 30, 冷卻時間: 600秒",
                            fullDescription: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。等級1效果：消耗MP 30，冷卻時間 600秒。"
                        }
                    ]
                },
                {
                    "id": "dragonLord",
                    "name": "魔龍降臨",
                    "maxLevel": 30,
                    "requiredLevel": 120,
                    "preRequisite": {},
                    "description": "召喚出沉睡在地底深處的魔龍，向週遭多數敵人造成傷害。",
                    "imageUrl": "images/dragonLord.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, numEnemies, attack;
                        if (i === 0) return null;

                        // 消耗MP 的規律：分段線性
                        if (i <= 2) {
                            mpCost = 21 + (i - 1) * 0; // 21, 21, 22...
                        } else if (i <= 6) {
                            mpCost = 22 + (i - 2);
                        } else if (i <= 10) {
                            mpCost = 23 + (i - 4);
                        } else if (i <= 20) {
                            mpCost = 26 + (i - 10);
                        } else {
                            mpCost = 25 + (i - 18);
                        }

                        const mpCosts = [null, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 35]; // 根據提供的數據硬編碼，以確保精確
                        mpCost = mpCosts[i];

                        // 攻擊敵人個數 的規律：分段
                        if (i <= 10) {
                            numEnemies = 4;
                        } else if (i <= 20) {
                            numEnemies = 5;
                        } else {
                            numEnemies = 6;
                        }

                        // 攻擊力 的規律：線性
                        attack = 270 + i * 15;

                        const attacksRaw = [null, 275, 290, 305, 320, 335, 350, 365, 380, 395, 410, 475, 490, 505, 520, 535, 550, 565, 580, 595, 610, 630, 650, 670, 690, 710, 730, 750, 770, 790, 810]; // 根據提供的數據硬編碼，以確保精確
                        attack = attacksRaw[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊敵人個數: ${numEnemies}, 攻擊力: ${attack}%`,
                            fullDescription: `召喚出沉睡在地底深處的魔龍，向週遭多數敵人造成傷害。等級${i}效果：消耗MP${mpCost}，攻擊敵人個數${numEnemies}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "energyBlastPlus", // 原 ID 含有特殊字元，建議改為 camelCase
                    name: "元氣彈",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: { "energyCharge": 1 },
                    description: "將能量投擲對前方多數敵人來發動攻擊。最多攻擊3隻怪物。",
                    imageUrl: "images/energyBlast.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 攻擊力規律分析：
                        // 1-10級: 280 + (i * 20) [1級=300, 10級=480]
                        // 11-20級: 10級(480) + 30 + (i-10)*20 [11級=510, 20級=690]
                        // 21-30級: 20級(690) + 30 + (i-20)*20 [21級=720, 30級=900]

                        const attackPowers = [
                            null,
                            300, 320, 340, 360, 380, 400, 420, 440, 460, 480, // 1-10
                            510, 530, 550, 570, 590, 610, 630, 650, 670, 690, // 11-20
                            720, 740, 760, 780, 800, 820, 840, 860, 880, 900  // 21-30
                        ];

                        const power = attackPowers[i];
                        const targetCount = 3; // 固定攻擊3隻

                        return {
                            effect: `攻擊力: ${power}%, 攻擊數量: ${targetCount}`,
                            fullDescription: `將能量投擲對前方多數敵人來發動攻擊。等級${i}效果：造成${power}%傷害，最多攻擊${targetCount}隻怪物。`
                        };
                    })
                },
                {
                    id: "finalAttack",
                    name: "鬥神降世",
                    maxLevel: 20,
                    requiredLevel: 120,
                    preRequisite: { "transformation": 20 }, // 前置：鬥神附體 20級
                    description: "240秒內可轉變為鬥神狀態。可使用技能：衝擊波、閃．爆破、閃．索命、極限再起、能量衝擊、損人利己、楓葉祝福、堅忍意志、最終極速、時間置換、魔龍降臨、狂暴衝擊、迴旋肘擊。",
                    imageUrl: "images/finalAttack.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 20 + (i * 2) [1級=22, 20級=60]
                        const mp = 20 + (i * 2);

                        // 2. 防禦力: 40 + i [1級=41, 20級=60]
                        const def = 40 + i;

                        // 3. 冷卻時間: 640 - (i * 20) [1級=620, 20級=240]
                        const cooldown = 640 - (i * 20);

                        // 4. 持續時間: 固定 240 秒
                        const duration = 240;

                        return {
                            effect: `消耗MP: ${mp}, 物理/魔法防禦: +${def}, 冷卻時間: ${cooldown}秒`,
                            fullDescription: `${duration}秒內轉變為鬥神狀態。等級${i}效果：物理與魔法防禦力增加${def}，冷卻時間${cooldown}秒。`
                        };
                    })
                },
                {
                    id: "flashBlast",
                    name: "閃．爆破",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: { "finalAttack": 1 },
                    description: "以迅雷不及掩耳的快速攻擊，向單一敵人造成極大的傷害。只限鬥神降世狀態下才能使用。",
                    imageUrl: "images/flashBlast.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 1-10級:20, 11-20級:35, 21-30級:50
                        const mpCosts = [
                            null,
                            20, 20, 20, 20, 20, 20, 20, 20, 20, 20, // 1-10
                            35, 35, 35, 35, 35, 35, 35, 35, 35, 35, // 11-20
                            50, 50, 50, 50, 50, 50, 50, 50, 50, 50  // 21-30
                        ];

                        // 2. 攻擊威力: 捕捉每10級額外跳20%的特徵
                        const attackPowers = [
                            null,
                            90, 100, 110, 120, 130, 140, 150, 160, 170, 180, // 1-10
                            200, 210, 220, 230, 240, 250, 260, 270, 280, 290, // 11-20
                            310, 320, 330, 340, 350, 360, 370, 380, 390, 400  // 21-30
                        ];

                        // 3. 攻擊次數: 每 5 級增加 1 次 (3, 4, 5, 6, 7, 8)
                        const hitCounts = [
                            null,
                            3, 3, 3, 3, 3, // 1-5
                            4, 4, 4, 4, 4, // 6-10
                            5, 5, 5, 5, 5, // 11-15
                            6, 6, 6, 6, 6, // 16-20
                            7, 7, 7, 7, 7, // 21-25
                            8, 8, 8, 8, 8  // 26-30
                        ];

                        const mp = mpCosts[i];
                        const power = attackPowers[i];
                        const hits = hitCounts[i];

                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${power}%, 攻擊次數: ${hits}次`,
                            fullDescription: `以迅雷不及掩耳的快速攻擊單一敵人。等級${i}效果：造成${hits}次${power}%的傷害。`
                        };
                    })
                },
                {
                    "id": "flashAssault",
                    "name": "閃．索命",
                    "maxLevel": 30,
                    "requiredLevel": 120,
                    "preRequisite": {
                        "finalAttack": 1
                    },
                    "description": "向遠方的敵人造成傷害，並將敵人拉到角色的面前並使其暈眩。只限鬥神降世狀態下才能使用。",
                    "imageUrl": "images/flashAssault.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, attack, numEnemies;
                        if (i === 0) return null;
                        const mpCosts = [null, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
                        const attacks = [null, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600];
                        const numEnemiesArr = [null, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6];
                        mpCost = mpCosts[i];
                        attack = attacks[i];
                        numEnemies = numEnemiesArr[i];
                        return {
                            "effect": "消耗MP: " + mpCost + ", 攻擊力: " + attack + "%, 攻擊敵人個數: " + numEnemies,
                            "fullDescription": "向遠方的敵人造成傷害，並將敵人拉到角色的面前並使其暈眩。只限鬥神降世狀態下才能使用。等級" + i + "效果：消耗MP" + mpCost + "，攻擊力" + attack + "%，攻擊敵人個數" + numEnemies + "。"
                        };
                    })
                },
                {
                    "id": "flashAssaultS",
                    "name": "閃．連殺",
                    "maxLevel": 30,
                    "requiredLevel": 120,
                    "preRequisite": {},
                    "description": "向近距離的敵人，快速攻擊6次。",
                    "imageUrl": "images/flashAssaultS.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, attack;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        const mpCosts = [null, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 35];
                        mpCost = mpCosts[i];

                        // 攻擊力 的規律：分段線性
                        if (i >= 1 && i <= 2) {
                            attack = 90 + i * 4; // 94, 98
                        } else if (i >= 3 && i <= 4) {
                            attack = 96 + (i - 2) * 4; // 100, 102
                        } else if (i >= 5 && i <= 6) {
                            attack = 102 + (i - 4) * 4;
                        } else if (i >= 7 && i <= 10) {
                            attack = 114 + (i - 6) * 4;
                        } else if (i >= 11 && i <= 14) {
                            attack = 130 + (i - 10) * 4;
                        } else if (i >= 15 && i <= 18) {
                            attack = 156 + (i - 14) * 4;
                        } else if (i >= 19 && i <= 22) {
                            attack = 188 + (i - 18) * 4;
                        } else if (i >= 23 && i <= 26) {
                            attack = 202 + (i - 22) * 4;
                        } else { // i >= 27
                            attack = 210 + (i - 26) * 4;
                        }

                        const attacksRaw = [null, 94, 98, 102, 106, 110, 114, 116, 122, 126, 130, 144, 148, 152, 156, 160, 164, 168, 172, 176, 180, 194, 198, 202, 206, 210, 214, 218, 222, 226, 230];
                        attack = attacksRaw[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}%`,
                            fullDescription: `向近距離的敵人，快速攻擊6次。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    "id": "finalAttackS",
                    "name": "最終極速",
                    "maxLevel": 20,
                    "requiredLevel": 120,
                    "preRequisite": { "knuckleBooster": 20 },
                    "description": "消耗HP和MP，於一定時間內將武器的攻擊速度向上提升一級；可與既有的輔助技能可重複使用，其效果會適用到所有組隊成員。",
                    "imageUrl": "images/finalAttackS.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let hpCost, mpCost, duration;
                        if (i === 0) return null;

                        // 消耗HP、消耗MP的規律：
                        // 1-10級: 78 -> 60 (每次減2)
                        // 11-20級: 58 -> 40 (每次減2)
                        if (i >= 1 && i <= 10) {
                            hpCost = 80 - i * 2;
                            mpCost = 80 - i * 2;
                        } else { // i >= 11
                            hpCost = 60 - (i - 10) * 2;
                            mpCost = 60 - (i - 10) * 2;
                        }

                        // 持續時間 的規律：每級加10秒
                        duration = i * 10 + 100;

                        return {
                            effect: `消耗HP: ${hpCost}, 消耗MP: ${mpCost}, 持續時間: ${duration}秒`,
                            fullDescription: `消耗HP和MP，於一定時間內將武器的攻擊速度向上提升一級；可與既有的輔助技能可重複使用，其效果會適用到所有組隊成員。等級${i}效果：消耗HP${hpCost}，消耗MP${mpCost}，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    "id": "timeLeap",
                    "name": "時間置換",
                    "maxLevel": 30,
                    "requiredLevel": 120,
                    "preRequisite": {},
                    "description": "將自己與隊友所使用的所有技能的再次使用等待時間初始化，但無法將自己與隊友的時間置換技能的再次使用時間初始化。並且在登入後五分鐘才可使用",
                    "imageUrl": "images/timeLeap.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, cooldown;
                        if (i === 0) return null;

                        // 消耗MP 的規律：線性遞減
                        if (i <= 20) {
                            mpCost = 200 - i * 5;
                        } else { // i >= 21
                            mpCost = 100 - (i - 20) * 5;
                        }

                        // 冷卻時間 的規律：線性遞減
                        if (i <= 20) {
                            cooldown = 60 - i;
                        } else { // i >= 21
                            cooldown = 40 - (i - 20);
                        }

                        return {
                            effect: `消耗MP: ${mpCost}, 冷卻時間: ${cooldown}分`,
                            fullDescription: `將自己與隊友所使用的所有技能的再次使用等待時間初始化，但無法將自己與隊友的時間置換技能的再次使用時間初始化。並且在登入後五分鐘才可使用。等級${i}效果：消耗MP${mpCost}，冷卻時間${cooldown}分。`
                        };
                    })
                }
            ],
            "超技能": [],
            "5轉技能": [],
            "共通技能": []
        }
    },
    "槍神 (Corsair)": {
        emblemUrl: 'emblems/Corsair.png',
        startingLevelForSp: 10, // 海盜系通常10等轉職
        jobAdvancementSpBonuses: [10, 30, 70, 120],
        jobStagesOrder: ["0轉 (新手)", "1轉 (海盜)", "2轉 (槍手)", "3轉 (神槍手)", "4轉 (槍神)", "超技能", "5轉技能", "共通技能"],
        spRequiredFor2ndJob: 61, // 其他職業2轉點數需求
        spRequiredFor3rdJob: 182, // 其他職業3轉點數需求
        spRequiredFor4thJob: 333, // 4轉通用點數需求
        skills: {
            "0轉 (新手)": [],
            "1轉 (海盜)": [
                {
                    id: "nimbleBody",
                    name: "極限迴避",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "增加命中率和迴避率",
                    imageUrl: "images/nimbleBody.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => i === 0 ? null : {
                        effect: `命中率: ${i}, 迴避率: ${i}`,
                        fullDescription: `增加命中率和迴避率。等級${i}效果：命中率${i}，迴避率${i}。`
                    })
                },
                {
                    id: "straightPunch",
                    name: "衝擊拳",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "以拳頭快速攻擊單一敵人。",
                    imageUrl: "images/straightPunch.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack;
                        if (i === 0) return null;
                        const mpCosts = [null, 6, 6, 6, 6, 7, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14];
                        const attacks = [null, 156, 162, 168, 174, 180, 186, 192, 198, 204, 210, 216, 222, 228, 234, 240, 246, 252, 258, 264, 270];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `以拳頭快速攻擊單一敵人。等級${i}效果：消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "somersaultKick",
                    name: "旋風斬",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "跳躍動作向後旋轉，同時以腿部向週遭的多個敵人展開攻擊。",
                    imageUrl: "images/somersaultKick.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack, numEnemies;
                        if (i === 0) return null;
                        const mpCosts = [null, 8, 8, 8, 8, 9, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 17];
                        const attacks = [null, 114, 118, 122, 126, 130, 134, 138, 142, 146, 150, 154, 158, 162, 166, 170, 174, 178, 182, 186, 190];
                        const numEnemiesArr = [null, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        numEnemies = numEnemiesArr[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 攻擊敵人數: ${numEnemies}`,
                            fullDescription: `跳躍動作向後旋轉，同時以腿部向週遭的多個敵人展開攻擊。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，攻擊敵人數${numEnemies}。`
                        };
                    })
                },
                {
                    id: "doubleShotPirate", // 為了區分其他職業的Double Shot
                    name: "雙子星攻擊",
                    maxLevel: 20,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "一次發射兩顆子彈來攻擊敵人。",
                    imageUrl: "images/doubleShotPirate.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack;
                        if (i === 0) return null;
                        const mpCosts = [null, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7];
                        const attacks = [null, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89, 92, 95, 98, 101, 104, 107, 110];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `一次發射兩顆子彈來攻擊敵人。等級${i}效果：消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "dash",
                    name: "衝鋒",
                    maxLevel: 10,
                    requiredLevel: 10,
                    preRequisite: {},
                    description: "暫時提升移動速度與跳躍力。",
                    imageUrl: "images/dash.png", // 確保圖片檔案存在
                    levels: Array(11).fill(null).map((_, i) => {
                        let mp, duration, moveSpeed, jump;
                        if (i === 0) return null;
                        const mpCosts = [null, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5];
                        const durations = [null, 4, 4, 8, 8, 12, 12, 16, 16, 20, 150]; // Level 10 duration is 150s
                        const moveSpeeds = [null, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
                        const jumps = [null, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
                        mp = mpCosts[i];
                        duration = durations[i];
                        moveSpeed = moveSpeeds[i];
                        jump = jumps[i];
                        return {
                            effect: `消耗MP: ${mp}, 持續時間: ${duration}秒, 移動速度: ${moveSpeed}, 跳躍力: ${jump}`,
                            fullDescription: `暫時提升移動速度與跳躍力。等級${i}效果：消耗MP${mp}，持續時間${duration}秒，移動速度${moveSpeed}，跳躍力${jump}。`
                        };
                    })
                }
            ],
            "2轉 (槍手)": [
                {
                    id: "gunMastery",
                    name: "精通槍法",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "提升火槍系列武器的熟練度與命中率。限定必須裝備火槍。",
                    imageUrl: "images/gunMastery.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let hitRate, mastery;
                        if (i === 0) return null;
                        const hitRates = [null, 1, 2, 3, 4, 5, 6, 6, 8, 8, 10, 10, 12, 12, 14, 14, 16, 16, 18, 19, 20];
                        const masteries = [null, 15, 15, 20, 20, 25, 25, 25, 30, 30, 35, 35, 40, 40, 45, 45, 50, 50, 55, 60, 60];
                        hitRate = hitRates[i];
                        mastery = masteries[i];
                        return {
                            effect: `命中率: ${hitRate}, 熟練度: ${mastery}%`,
                            fullDescription: `提升火槍系列武器的命中率及熟練度。等級${i}效果：命中率${hitRate}，熟練度${mastery}%。`
                        };
                    })
                },
                {
                    id: "scatterShot",
                    name: "散射",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "在短時間內，以迅雷不及掩耳的速度發射子彈來攻擊敵人。",
                    imageUrl: "images/scatterShot.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack, numEnemies;
                        if (i === 0) return null;
                        const mpCosts = [null, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 25]; // Level 20 MP is 25
                        const attacks = [null, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170];
                        const numEnemiesArr = Array(21).fill(3); // 敵人數量固定3
                        mp = mpCosts[i];
                        attack = attacks[i];
                        numEnemies = numEnemiesArr[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 攻擊敵人個數: ${numEnemies}`,
                            fullDescription: `在短時間內，以迅雷不及掩耳的速度發射子彈來攻擊敵人。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，攻擊敵人個數${numEnemies}。`
                        };
                    })
                },
                {
                    id: "bombToss",
                    name: "炸彈投擲",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: {},
                    description: "丟擲炸彈來攻擊敵人，被擊中的敵方降低攻擊力予防禦力。",
                    imageUrl: "images/bombToss.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack, procRate, defReduction;
                        if (i === 0) return null;
                        const mpCosts = [null, 18, 18, 18, 18, 18, 24, 24, 24, 24, 24, 30, 30, 30, 30, 30, 36, 36, 36, 36, 27]; // Level 20 MP is 27
                        const attacks = [null, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 195]; // Level 20 attack is 195%
                        const procRates = Array(21).fill(100); // 機率固定100%
                        const defReductions = [null, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]; // 降低的防禦力
                        mp = mpCosts[i];
                        attack = attacks[i];
                        procRate = procRates[i];
                        defReduction = defReductions[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 機率: ${procRate}%, 攻擊力與防禦力降低: -${defReduction}%`,
                            fullDescription: `丟擲炸彈來攻擊敵人，被擊中的敵方降低攻擊力予防禦力。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，機率${procRate}%，攻擊力與防禦力降低-${defReduction}%。`
                        };
                    })
                },
                {
                    id: "gunBooster",
                    name: "迅雷再起",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: { "gunMastery": 5 },
                    description: "消耗HP與MP，一定時間內提升火槍的攻擊速度。限定必須裝備火槍。",
                    imageUrl: "images/gunBooster.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, hp, duration;
                        if (i === 0) return null;
                        const mpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const hpCosts = [null, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
                        const durations = [null, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];
                        mp = mpCosts[i];
                        hp = hpCosts[i];
                        duration = durations[i];
                        return {
                            effect: `消耗MP: ${mp}, 消耗HP: ${hp}, 持續時間: ${duration}秒`,
                            fullDescription: `消耗HP與MP，一定時間內提升火槍的攻擊速度。限定必須裝備火槍。等級${i}效果：消耗MP${mp}，消耗HP${hp}，持續${duration}秒。`
                        };
                    })
                },
                {
                    "id": "fakeShot",
                    "name": "偽裝射擊",
                    "maxLevel": 20,
                    "requiredLevel": 30,
                    "preRequisite": {},
                    "description": "假裝要發射子彈，但卻投擲出旗幟來讓敵人感到驚嚇，藉此讓敵人無法動彈。同時可對3個敵人發動攻擊。",
                    "imageUrl": "images/fakeShot.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, attack, stunRate, stunDuration;
                        if (i === 0) return null;

                        // 消耗MP 的規律 (精確數值)
                        const mpCosts = [null, 10, 10, 10, 10, 10, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20, 25, 25, 25, 25, 25];
                        mpCost = mpCosts[i];

                        // 攻擊力 的規律 (精確數值)
                        const attacks = [null, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99, 102, 105, 108, 111, 114, 117, 120];
                        attack = attacks[i];

                        // 暈眩機率 的精確數值
                        const stunRates = [null, 43, 46, 49, 52, 55, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85, 88, 91, 94, 97, 100];
                        stunRate = stunRates[i];

                        // 暈眩秒數 的規律
                        stunDuration = i <= 5 ? "1" : (i <= 10 ? "2" : (i <= 15 ? "3" : "4"));

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}%, 暈眩機率: ${stunRate}%, 暈眩秒數: ${stunDuration}`,
                            fullDescription: `假裝要發射子彈，但卻投擲出旗幟來讓敵人感到驚嚇，藉此讓敵人無法動彈。同時可對3個敵人發動攻擊。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}%，暈眩機率${stunRate}%，暈眩秒數${stunDuration}。`
                        };
                    })
                },
                {
                    "id": "slowDescent",
                    "name": "緩降術",
                    "maxLevel": 10,
                    "requiredLevel": 30,
                    "preRequisite": {},
                    "description": "比起一般跳躍，可施展空中駐留時間更長的跳躍，最多駐留時間為5秒",
                    "imageUrl": "images/slowDescent.png",
                    "levels": Array(11).fill(null).map((_, i) => {
                        let mpCost, descentSpeed;
                        if (i === 0) return null;

                        // 消耗MP 的規律：線性遞減
                        mpCost = 54 - i * 4; // 從50開始
                        if (i === 1) { mpCost = 50; } // 第一級MP數據為50，但沒有找到規律

                        // 降落速度 的規律：線性遞減
                        descentSpeed = 300 - i * 20;

                        return {
                            effect: `消耗MP: ${mpCost}, 降落速度: ${descentSpeed}`,
                            fullDescription: `比起一般跳躍，可施展空中駐留時間更長的跳躍，最多駐留時間為5秒。等級${i}效果：消耗MP${mpCost}，降落速度${descentSpeed}。`
                        };
                    })
                },
                {
                    id: "recoilShot",
                    name: "脫離戰場",
                    maxLevel: 20,
                    requiredLevel: 30,
                    preRequisite: { "slowDescent": 5 },
                    description: "利用火槍的後座力，發射子彈攻擊敵人並向後方移動，再次使用等待時間：3秒。",
                    imageUrl: "images/recoilShot.png", // 確保圖片檔案存在
                    levels: Array(21).fill(null).map((_, i) => {
                        let mp, attack;
                        if (i === 0) return null;
                        const mpCosts = [null, 14, 14, 14, 14, 14, 18, 18, 18, 18, 18, 22, 22, 22, 22, 22, 26, 26, 26, 26, 26];
                        const attacks = [null, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260];
                        mp = mpCosts[i];
                        attack = attacks[i];
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%`,
                            fullDescription: `利用火槍的後座力，發射子彈攻擊敵人並向後方移動。等級${i}效果：消耗MP${mp}，攻擊力${attack}%。`
                        };
                    })
                }
            ],
            "3轉 (神槍手)": [
                {
                    "id": "tripleFire",
                    "name": "3連發",
                    "maxLevel": 20,
                    "requiredLevel": 70,
                    "preRequisite": { "doubleShotPirate": 20 },
                    "description": "使用連擊時所發射的子彈數量增多，且攻擊力也會提升。",
                    "imageUrl": "images/tripleFire.png",
                    "levels": Array(21).fill(null).map((_, i) => {
                        let mpCost, attack;
                        if (i === 0) return null;

                        // 消耗MP 的精確數值
                        const mpCosts = [null, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22];
                        mpCost = mpCosts[i];

                        // 攻擊力 的規律：線性 (110 + i * 5)
                        attack = 110 + i * 5;

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}%`,
                            fullDescription: `使用連擊時所發射的子彈數量增多，且攻擊力也會提升。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}%。`
                        };
                    })
                },
                {
                    id: "summonOctopus",
                    name: "章魚砲台",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "召喚可幫助攻擊的章魚，但所召喚出的章魚不會移動。再次使用等待時間：10秒。",
                    imageUrl: "images/summonOctopus.png", // 確保圖片檔案存在
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, attack, duration;
                        if (i === 0) return null;
                        mp = i <= 10 ? 10 + i : (i <= 20 ? 10 + Math.floor((i - 1) / 2) : 20 + Math.floor((i - 20) / 2)); // Simplified
                        attack = 80 + i * 4; // Simplified
                        duration = 10 + Math.floor((i - 1) / 10) * 10; // Simplified
                        return {
                            effect: `消耗MP: ${mp}, 物理攻擊力: ${attack}, 持續時間: ${duration}秒`,
                            fullDescription: `召喚可幫助攻擊的章魚，但所召喚出的章魚不會移動。等級${i}效果：消耗MP${mp}，物理攻擊力${attack}，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    "id": "gaviota",
                    "name": "海鷗突擊隊",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "召喚出會向敵人投擲炸彈的海鷗，被召喚出的海鷗一旦發現敵人，便會投擲炸彈後消失。再次使用等待時間：5秒。",
                    "imageUrl": "images/gaviota.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, attack, duration;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        const mpCosts = [null, 11, 11, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16, 16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20];
                        mpCost = mpCosts[i];

                        // 攻擊力 的規律 (精確數值)
                        const attacks = [null, 218, 226, 234, 242, 250, 258, 266, 274, 282, 290, 298, 306, 314, 322, 330, 338, 346, 354, 362, 370, 378, 386, 394, 402, 410, 418, 426, 434, 442, 450];
                        attack = attacks[i];

                        // 持續時間 的規律：分段
                        const durations = [null, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30];
                        duration = durations[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 物理攻擊力: ${attack}, 持續時間: ${duration}秒`,
                            fullDescription: `召喚出會向敵人投擲炸彈的海鷗，被召喚出的海鷗一旦發現敵人，便會投擲炸彈後消失。等級${i}效果：消耗MP${mpCost}，物理攻擊力${attack}，持續時間${duration}秒。`
                        };
                    })
                },
                {
                    "id": "flamethrower",
                    "name": "火焰噴射",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "向近距離的敵人發動火焰屬性攻擊，受到攻擊的敵人會在一定時間內額外受到持續性傷害。",
                    "imageUrl": "images/flamethrower.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, attack, numEnemies;
                        if (i === 0) return null;

                        // 消耗MP 的規律 (精確數值)
                        const mpCosts = [null, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35];
                        mpCost = mpCosts[i];

                        // 攻擊力 的規律 (精確數值)
                        const attacks = [null, 73, 76, 79, 82, 85, 88, 91, 94, 97, 100, 103, 106, 109, 112, 115, 118, 121, 124, 127, 130, 133, 136, 139, 142, 145, 148, 151, 154, 157, 160];
                        attack = attacks[i];

                        // 攻擊敵人個數 的規律 (精確數值)
                        const numEnemiesArr = [null, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6];
                        numEnemies = numEnemiesArr[i];

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}%, 攻擊敵人個數: ${numEnemies}`,
                            fullDescription: `向近距離的敵人發動火焰屬性攻擊，受到攻擊的敵人會在一定時間內額外受到持續性傷害。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}%，攻擊敵人個數${numEnemies}。`
                        };
                    })
                },
                {
                    id: "coldBeam",
                    name: "寒霜噴射",
                    maxLevel: 30,
                    requiredLevel: 70,
                    preRequisite: {},
                    description: "向近距離的敵人發動寒霜攻擊，受到攻擊的對方將在一定時間內成為結冰狀態。",
                    imageUrl: "images/coldBeam.png", // 確保圖片檔案存在
                    levels: Array(31).fill(null).map((_, i) => {
                        let mp, attack, numEnemies, freezeDuration;
                        if (i === 0) return null;
                        mp = i <= 10 ? 25 : (i <= 20 ? 30 : 35);
                        attack = 70 + i * 2; // Simplified
                        numEnemies = i <= 6 ? 2 : (i <= 18 ? 3 : (i <= 24 ? 4 : 5)); // Simplified
                        freezeDuration = i <= 10 ? 1 : (i <= 20 ? 2 : 3);
                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${attack}%, 攻擊敵人個數: ${numEnemies}, 冰凍時間: ${freezeDuration}秒`,
                            fullDescription: `向近距離的敵人發動寒霜攻擊。等級${i}效果：消耗MP${mp}，攻擊力${attack}%，攻擊敵人個數${numEnemies}，冰凍時間${freezeDuration}秒。`
                        };
                    })
                },
                {
                    "id": "targeting",
                    "name": "指定攻擊",
                    "maxLevel": 30,
                    "requiredLevel": 70,
                    "preRequisite": {},
                    "description": "派出鸚鵡為敵方標記，攻擊被鸚鵡標記得敵方時，會造成額外傷害。",
                    "imageUrl": "images/targeting.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, attack, extraDmg;
                        if (i === 0) return null;

                        // 消耗MP 的精確數值
                        const mpCosts = [null, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30];
                        mpCost = mpCosts[i];

                        // 攻擊力 的精確數值
                        const attacks = [null, 148, 156, 164, 172, 180, 188, 196, 204, 212, 220, 228, 236, 244, 252, 260, 268, 276, 284, 292, 300, 308, 316, 324, 332, 340, 348, 356, 364, 372, 380];
                        attack = attacks[i];

                        // 追加傷害 的精確數值
                        if (i >= 1 && i <= 3) {
                            extraDmg = "10秒內追加1％";
                        } else if (i >= 4 && i <= 6) {
                            extraDmg = "10秒內追加2％";
                        } else if (i >= 7 && i <= 9) {
                            extraDmg = "10秒內追加3％";
                        } else if (i >= 10 && i <= 12) {
                            extraDmg = "10秒內追加4％";
                        } else if (i >= 13 && i <= 15) {
                            extraDmg = "10秒內追加5％";
                        } else if (i >= 16 && i <= 18) {
                            extraDmg = "15秒內追加6％";
                        } else if (i >= 19 && i <= 21) {
                            extraDmg = "15秒內追加7％";
                        } else if (i >= 22 && i <= 24) {
                            extraDmg = "15秒內追加8％";
                        } else if (i >= 25 && i <= 27) {
                            extraDmg = "15秒內追加9％";
                        } else if (i >= 28 && i <= 30) {
                            extraDmg = "15秒內追加10％";
                        }

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}%, 追加傷害: ${extraDmg}`,
                            fullDescription: `派出鸚鵡為敵方標記，攻擊被鸚鵡標記得敵方時，會造成額外傷害。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}%，追加傷害${extraDmg}。`
                        };
                    })
                }
            ],
            "4轉 (槍神)": [
                {
                    id: "mapleWarrior",
                    name: "楓葉祝福",
                    maxLevel: 30,
                    requiredLevel: 120, // 楓葉祝福通常無等級限制，可根據需求自行修改
                    preRequisite: {},
                    description: "全職業的共通技能，一定時間內全能力(力量、敏捷、智力、幸運)增加固定%數。",
                    imageUrl: "images/mapleWarrior.png",
                    levels: [
                        null,
                        { effect: "消耗MP: 10, 持續時間: 30秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級1效果：消耗MP 10，持續時間 30秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 60秒, 能力增加: 1%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級2效果：消耗MP 10，持續時間 60秒，全能力增加 1%。" },
                        { effect: "消耗MP: 10, 持續時間: 90秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級3效果：消耗MP 10，持續時間 90秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 120秒, 能力增加: 2%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級4效果：消耗MP 10，持續時間 120秒，全能力增加 2%。" },
                        { effect: "消耗MP: 10, 持續時間: 150秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級5效果：消耗MP 10，持續時間 150秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 180秒, 能力增加: 3%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級6效果：消耗MP 20，持續時間 180秒，全能力增加 3%。" },
                        { effect: "消耗MP: 20, 持續時間: 210秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級7效果：消耗MP 20，持續時間 210秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 240秒, 能力增加: 4%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級8效果：消耗MP 20，持續時間 240秒，全能力增加 4%。" },
                        { effect: "消耗MP: 20, 持續時間: 270秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級9效果：消耗MP 20，持續時間 270秒，全能力增加 5%。" },
                        { effect: "消耗MP: 20, 持續時間: 300秒, 能力增加: 5%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級10效果：消耗MP 20，持續時間 300秒，全能力增加 5%。" },
                        { effect: "消耗MP: 30, 持續時間: 330秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級11效果：消耗MP 30，持續時間 330秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 360秒, 能力增加: 6%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級12效果：消耗MP 30，持續時間 360秒，全能力增加 6%。" },
                        { effect: "消耗MP: 30, 持續時間: 390秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級13效果：消耗MP 30，持續時間 390秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 420秒, 能力增加: 7%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級14效果：消耗MP 30，持續時間 420秒，全能力增加 7%。" },
                        { effect: "消耗MP: 30, 持續時間: 450秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級15效果：消耗MP 30，持續時間 450秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 480秒, 能力增加: 8%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級16效果：消耗MP 40，持續時間 480秒，全能力增加 8%。" },
                        { effect: "消耗MP: 40, 持續時間: 510秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級17效果：消耗MP 40，持續時間 510秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 540秒, 能力增加: 9%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級18效果：消耗MP 40，持續時間 540秒，全能力增加 9%。" },
                        { effect: "消耗MP: 40, 持續時間: 570秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級19效果：消耗MP 40，持續時間 570秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 600秒, 能力增加: 10%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級20效果：消耗MP 40，持續時間 600秒，全能力增加 10%。" },
                        { effect: "消耗MP: 40, 持續時間: 630秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級21效果：消耗MP 40，持續時間 630秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 660秒, 能力增加: 11%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級22效果：消耗MP 40，持續時間 660秒，全能力增加 11%。" },
                        { effect: "消耗MP: 40, 持續時間: 690秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級23效果：消耗MP 40，持續時間 690秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 720秒, 能力增加: 12%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級24效果：消耗MP 40，持續時間 720秒，全能力增加 12%。" },
                        { effect: "消耗MP: 40, 持續時間: 750秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級25效果：消耗MP 40，持續時間 750秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 780秒, 能力增加: 13%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級26效果：消耗MP 40，持續時間 780秒，全能力增加 13%。" },
                        { effect: "消耗MP: 40, 持續時間: 810秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級27效果：消耗MP 40，持續時間 810秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 840秒, 能力增加: 14%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級28效果：消耗MP 40，持續時間 840秒，全能力增加 14%。" },
                        { effect: "消耗MP: 40, 持續時間: 870秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級29效果：消耗MP 40，持續時間 870秒，全能力增加 15%。" },
                        { effect: "消耗MP: 40, 持續時間: 900秒, 能力增加: 15%", fullDescription: "全職業的共通技能，一定時間內全能力增加固定%數。等級30效果：消耗MP 40，持續時間 900秒，全能力增加 15%。" }
                    ]
                },
                {
                    id: "heroesWill",
                    name: "楓葉淨化",
                    maxLevel: 1,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。",
                    imageUrl: "images/heroesWill.png",
                    levels: [
                        null,
                        {
                            effect: "消耗MP: 30, 冷卻時間: 600秒",
                            fullDescription: "全職業的共通技能，能解除異常狀態，隨著等級提高，可解除的狀態會增加，等級越高冷卻越短。等級1效果：消耗MP 30，冷卻時間 600秒。"
                        }
                    ]
                },
                {
                    "id": "instantBlizzard",
                    "name": "瞬‧冰火連擊",
                    "maxLevel": 30,
                    "requiredLevel": 120,
                    "preRequisite": {},
                    "description": "提升火焰噴射和寒霜噴射的殺傷力和效果。",
                    "imageUrl": "images/instantBlizzard.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let attackIncrease, freezeTimeIncrease, burnDamageIncrease;
                        if (i === 0) return null;

                        // 攻擊力增加 的規律
                        const attackIncreases = [null, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 76, 82, 88, 94, 100, 106, 112, 118, 124, 130, 146, 152, 158, 164, 170, 176, 182, 188, 194, 200];
                        attackIncrease = attackIncreases[i];

                        // 冰凍時間上升 的規律
                        const freezeTimeIncreases = [null, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
                        freezeTimeIncrease = freezeTimeIncreases[i];

                        // 燒灼傷害力上升 的規律
                        const burnDamageIncreases = [null, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5];
                        burnDamageIncrease = burnDamageIncreases[i];

                        return {
                            "effect": `攻擊力增加: ${attackIncrease}%, 冰凍時間上升: ${freezeTimeIncrease}秒, 燒灼傷害力上升: ${burnDamageIncrease}%`,
                            "fullDescription": `提升火焰噴射和寒霜噴射的殺傷力和效果。等級${i}效果：攻擊力增加${attackIncrease}%，冰凍時間上升${freezeTimeIncrease}秒，燒灼傷害力上升${burnDamageIncrease}%。`
                        };
                    })
                },
                {
                    id: "octopusKing",
                    name: "砲台章魚王",
                    maxLevel: 20,
                    requiredLevel: 120,
                    preRequisite: { "summonOctopus": 30 }, // 章魚砲台 30級
                    description: "可額外召喚出一隻章魚炮台，並且提升連射速度與殺傷力。",
                    imageUrl: "images/octopusKing.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 1-10級緩慢成長，11級後固定為 35
                        const mpCosts = [
                            null,
                            31, 31, 32, 32, 33, 33, 34, 34, 35, 35, // 1-10
                            35, 35, 35, 35, 35, 35, 35, 35, 35, 35  // 11-20
                        ];

                        // 2. 物理攻擊力: 
                        // 1-10級: 200 + (i * 10) [1級=210, 10級=300]
                        // 11-20級: 300 + (i - 10) * 20 [11級=320, 20級=500]
                        let attack;
                        if (i <= 10) {
                            attack = 200 + (i * 10);
                        } else {
                            attack = 300 + (i - 10) * 20;
                        }

                        // 3. 持續時間: 1-10級 35秒, 11-20級 40秒
                        const duration = i <= 10 ? 35 : 40;

                        // 4. 冷卻時間: 固定 10秒
                        const cooldown = 10;

                        const mp = mpCosts[i];

                        return {
                            effect: `消耗MP: ${mp}, 物理攻擊力: ${attack}, 持續時間: ${duration}秒, 冷卻時間: ${cooldown}秒`,
                            fullDescription: `召喚砲台章魚王協助攻擊。等級${i}效果：物理攻擊力${attack}，持續${duration}秒，冷卻${cooldown}秒。`
                        };
                    })
                },
                {
                    id: "specialForce",
                    name: "海鷗特戰隊",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: { "gaviota": 15 }, // 海鷗突擊隊 15級
                    description: "利用海鷗突擊隊的炸彈攻擊，向6個以下的敵人發動攻擊。",
                    imageUrl: "images/specialForce.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 30 + i (線性成長，1級=31, 30級=60)
                        const mp = 30 + i;

                        // 2. 攻擊力規律分析：
                        // 基礎每級增加 20%，但在 11級與 21級額外跳 50%
                        // 1-10級: 500 + (i * 20) [1級=520, 10級=700]
                        // 11-20級: 700 + 50 + (i-10)*20 [11級=770, 20級=950]
                        // 21-30級: 950 + 50 + (i-20)*20 [21級=1020, 30級=1200]
                        const stageBonus = Math.floor((i - 1) / 10) * 50;
                        const attackPower = 500 + (i * 20) + stageBonus;

                        // 3. 冷卻時間: 固定 5秒
                        const cooldown = 5;

                        // 4. 敵人數量: 固定 6名
                        const mobCount = 6;

                        const effect = `消耗MP: ${mp}, 攻擊力: ${attackPower}%, 冷卻時間: ${cooldown}秒`;

                        return {
                            effect: effect,
                            fullDescription: `利用海鷗炸彈攻擊最多${mobCount}個敵人。等級${i}效果：造成${attackPower}%傷害，冷卻時間${cooldown}秒。`
                        };
                    })
                },
                {
                    id: "instantFlash",
                    name: "瞬‧迅雷",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: { "tripleFire": 20 }, // 3連發 20級
                    description: "以極快的速度發射子彈，按住技能鍵，便會持續發射子彈。",
                    imageUrl: "images/instantFlash.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 1-10級:6, 11-20級:8, 21-30級:9
                        const mpCosts = [
                            null,
                            6, 6, 6, 6, 6, 6, 6, 6, 6, 6, // 1-10
                            8, 8, 8, 8, 8, 8, 8, 8, 8, 8, // 11-20
                            9, 9, 9, 9, 9, 9, 9, 9, 9, 9  // 21-30
                        ];

                        // 2. 攻擊力規律分析：
                        // 1-20級: 130 + (i * 2) [1級=132, 20級=170]
                        // 21-30級: 140 + (i * 2) [21級=182, 30級=200] (21級額外跳了10%)
                        const stageBonus = i >= 21 ? 10 : 0;
                        const power = 130 + (i * 2) + stageBonus;

                        const mp = mpCosts[i];

                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${power}%`,
                            fullDescription: `以極快的速度持續發射子彈。等級${i}效果：每一發子彈造成${power}%傷害。`
                        };
                    })
                },
                {
                    id: "pirateShip",
                    name: "海盜船",
                    maxLevel: 10,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "搭乘海盜船。每當角色受到傷害，耐久度會下降，而當達到0時，便無法再搭乘海盜船。可在乘船中跳躍。可使用技能：砲轟、散彈射擊、火焰噴射、寒霜噴射。",
                    imageUrl: "images/pirateShip.png",
                    levels: Array(11).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 20 + (i * 2) [1級=22, 10級=40]
                        const mp = 20 + (i * 2);

                        // 2. 物理與魔法防禦上升: i * 10 [1級=10, 10級=100]
                        const def = i * 10;

                        // 3. 耐久度公式說明 (假設以角色等級為變數，這裡提供字串描述)
                        const durabilityNote = "80,000 + (等級 - 100) * 3,000";

                        return {
                            effect: `消耗MP: ${mp}, 物理/魔法防禦: +${def}`,
                            fullDescription: `搭乘海盜船，防禦力增加${def}。耐久度公式為：${durabilityNote}。`
                        };
                    })
                },
                {
                    "id": "pirateCannon",
                    "name": "海盜加農炮",
                    "maxLevel": 30,
                    "requiredLevel": 120,
                    "preRequisite": { "pirateShip": 1 },
                    "description": "連續發設多發炸彈，只限在搭乘海盜船的狀態下使用。",
                    "imageUrl": "images/pirateCannon.png",
                    "levels": Array(31).fill(null).map((_, i) => {
                        let mpCost, attack, numAttacks;
                        if (i === 0) return null;

                        // 消耗MP 的規律
                        const mpCosts = [null, 22, 22, 22, 24, 24, 24, 26, 26, 26, 28, 28, 28, 30, 30, 30, 32, 32, 32, 34, 34, 34, 36, 36, 36, 38, 38, 38, 40, 40, 40];
                        mpCost = mpCosts[i];

                        // 攻擊力 的規律 (精確數值)
                        const attacks = [null, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 335, 340, 345, 350, 355, 360, 365, 370, 375, 380];
                        attack = attacks[i];

                        // 攻擊敵人次數 的規律
                        numAttacks = i <= 10 ? 3 : 4;

                        return {
                            effect: `消耗MP: ${mpCost}, 攻擊力: ${attack}%, 攻擊敵人次數: ${numAttacks}`,
                            fullDescription: `連續發設多發炸彈，只限在搭乘海盜船的狀態下使用。等級${i}效果：消耗MP${mpCost}，攻擊力${attack}%，攻擊敵人次數${numAttacks}。`
                        };
                    })
                },
                {
                    id: "pirateTorpedo",
                    name: "海盜魚雷",
                    maxLevel: 30,
                    requiredLevel: 120,
                    preRequisite: { "pirateShip": 1 },
                    description: "發射可貫穿敵人的堅固炸彈。只限在搭乘海盜船的狀態下使用。",
                    imageUrl: "images/pirateTorpedo.png",
                    levels: Array(31).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 不規則跳動，採陣列定義
                        const mpCosts = [
                            null,
                            22, 22, 22, 24, 24, 24, 26, 26, 26, 28, // 1-10
                            28, 28, 30, 30, 30, 32, 32, 32, 34, 34, // 11-20
                            34, 36, 36, 36, 38, 38, 38, 40, 40, 40  // 21-30
                        ];

                        // 2. 攻擊力: 630 + (i * 5) [1級=635%, 30級=780%]
                        const power = 630 + (i * 5);

                        // 3. 攻擊敵人個數: 1-10級:4, 11-20級:5, 21-30級:6
                        const targetCount = i <= 10 ? 4 : i <= 20 ? 5 : 6;

                        const mp = mpCosts[i];

                        return {
                            effect: `消耗MP: ${mp}, 攻擊力: ${power}%, 攻擊敵人數量: ${targetCount}`,
                            fullDescription: `發射貫穿敵人的炸彈。等級${i}效果：造成${power}%傷害，最多攻擊${targetCount}名敵人。`
                        };
                    })
                },
                {
                    id: "mindControl",
                    name: "心靈控制",
                    maxLevel: 20,
                    requiredLevel: 120,
                    preRequisite: {},
                    description: "操控怪物的心志。使其提升目標怪物掉落率的效果（不適用於BOSS）。",
                    imageUrl: "images/mindControl.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 30 + i [1級=31, 20級=50]
                        const mp = 30 + i;

                        // 2. 道具掉落率提升: 每級增加 1%
                        const dropRate = i;

                        // 3. 控制時間規律:
                        // 1-19級: 20 + i [1級=21秒, 19級=39秒]
                        // 20級: 數據顯示回歸 30秒
                        const duration = i === 20 ? 30 : 20 + i;

                        return {
                            effect: `消耗MP: ${mp}, 道具掉落率: +${dropRate}%, 控制時間: ${duration}秒`,
                            fullDescription: `操控怪物心志。等級${i}效果：道具掉落率提升${dropRate}%，持續${duration}秒（不適用於BOSS）。`
                        };
                    })
                },
                {
                    id: "preciseCannon",
                    name: "精準砲擊",
                    maxLevel: 20,
                    requiredLevel: 120,
                    preRequisite: { "targeting": 30 }, // 指定攻擊 30級
                    description: "對已受到指定攻擊的怪物，造成更大的傷害。",
                    imageUrl: "images/preciseCannon.png",
                    levels: Array(21).fill(null).map((_, i) => {
                        if (i === 0) return null;

                        // 1. 消耗MP: 1-10級: 35, 11-20級: 40
                        const mp = i <= 10 ? 35 : 40;

                        // 2. 額外傷害力: 每級增加 1%
                        const extraDamage = i;

                        // 3. 持續時間: 10 + i [1級=11秒, 20級=30秒]
                        const duration = 10 + i;

                        return {
                            effect: `消耗MP: ${mp}, 額外傷害力: +${extraDamage}%, 持續時間: ${duration}秒`,
                            fullDescription: `對指定攻擊目標造成更大傷害。等級${i}效果：額外傷害力+${extraDamage}%，持續${duration}秒。`
                        };
                    })
                }
            ],
            "超技能": [],
            "5轉技能": [],
            "共通技能": []
        }
    }
    // ... 未來可以繼續添加其他職業
};

// --- 新增：存放推薦配點的資料結構 ---
const recommendedBuilds = {
    "主教 (Bishop)": [
        {
            name: "標準輔助型 (Lv. 200) - by Jamox",
            level: 200,
            description: "此配點為全方位輔助型主教，最大化所有輔助技能，確保在任何團隊中都能發揮最大效益。適合喜歡組隊打王、幫助隊友的玩家。",
            priority: "1轉: 魔力淨化5>魔力擴展10>魔靈彈1>魔力爪20>魔力淨化16>魔心防禦20\n2轉: 瞬間移動1>群體治癒30>魔力吸收10>瞬間移動20>神聖之光5>天使祝福20>神聖之光20>魔力吸收20>自由分配\n3轉: 聖光1>淨化3>神聖祈禱30>魔法抵抗1>時空門1>聖光30>魔法抵抗20>聖龍召喚15>自由分配\n4轉: 天怒1----->4轉網路上比較少人分享，歡迎加入dc群自己建立推薦配點",
            // --- 注意：這裡現在使用中文技能名稱 ---
            skills: "魔力淨化:16,魔力擴展:10,魔心防禦:20,魔力之盾:11,魔靈彈:1,魔力爪:20,魔力吸收:20,瞬間移動:20,神聖之光:20,天使祝福:20,群體治癒:30,聖龍召喚:15,魔法抵抗:20,淨化:3,時空門:1,神聖祈禱:30,聖光:30,天怒:1"
        },
      {
        name: "四轉前洗點(Lv.120)- by懷曲",
level: 120,
description: "非練等用配點!!!\n此配點為120等時，進行四轉前的技能配點，不適用於剛開始創建遊戲角色的玩家!!!\n1轉:\n魔力爪:保留魔力爪是因為這是主教段數最高的技能，打活動怪時大多是看傷害段數，不使用魔力爪會相對吃力\n魔力之盾:不會與其他Buff衝突，可加減減少碰撞傷害\n魔心防禦:可依照需求減少配點，以求達到省水的效果\n2轉:\n神聖之箭:不點，傷害倍率太低，且四轉有天使之箭作為替代\n3轉:\n聖龍召喚:神龍前置需15點，且兩個不能同時召喚，所以點到15點即可\n時空門:進出時空門後出現的位置，與進出自由市場出來後的位置相同，某些地圖可依靠進出時空門的方式進行練等\n喚化術:可保持攻擊狀態，但不會吸引到怪物仇恨值，吸經驗時若無幫忙推怪的玩家，可用這個技能每10秒放一次，順利吸經驗",
priority: "1轉: 魔力淨化16>魔力擴展10>魔靈彈1>魔力爪11>魔心防禦20>魔力之盾20\n2轉: 瞬間移動20>群體治癒30>魔力吸收20>神聖之光20>天使祝福20>\n3轉: 淨化20>神聖祈禱30>聖光30>魔法抵抗20>聖龍召喚15>喚化術16>時空門20\n4轉: 楓葉祝福3",
//---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
skills: "魔力淨化:16,魔力擴展:10,魔心防禦:20,魔力之盾:20,魔靈彈:1,魔力爪:11,魔力吸收:20,瞬間移動:20,神聖之光:20,天使祝福:20,群體治癒:30,神聖之箭:0,聖龍召喚:15,魔法抵抗:20,淨化:20,喚化術:16,時空門:20,神聖祈禱:30,聖光:30,楓葉祝福:3,楓葉淨化:0,核爆術:0,魔力無限:0,魔法反射:0,聖盾護鎧:0,召喚神龍:0,復甦之光:0,天使之箭:0,天怒:0"
      }
    ],
    "火毒大魔導 (ArchMageF/P)": [
        {
            name: "毒養火衝等型(LV.200)- by Jamox&Pee",
            level: 200,
            description: "強化火毒練功優勢，以毒養火，以最快速度拉高等級，補足前期弱勢。\n2轉開始以毒霧拉等級。\n3轉致命毒霧後轉戰金勾或無傷打王可選擇末日先滿，若需要先單體高傷可選擇火毒合擊先滿。\n4轉還沒開參考Pee大，以練功cp最高的炎靈跟冰魔先滿，後續補火流星。\n(Pee大建議4轉前可先重置技能，用火流星取代末日，點滿抵抗)",
            priority: "1轉: 魔力淨化 5->魔力擴展 10->魔靈彈 1->魔力爪 20->魔力淨化 16->魔心防禦 20\n2轉: 瞬間移動 1->火焰箭 30->魔力吸收 3->瞬間移動 20->毒霧 30 ->精神強化 20->魔力吸收 20->緩速術 1\n3轉: 致命毒霧 28->火毒抵抗 3 (不打維京可以先不點)->末日烈焰 1->魔力激發 3 (詠唱前置)->極速詠唱 11(拿+2施法速度)->末日烈焰 28->魔力激發 30->火毒合擊 30->魔法封印 20->火毒抵抗 4\n練功點法:\n4轉: 火流星 1->炎靈 5->冰魔 10->炎靈 20->冰魔 20->炎靈 30->楓祝 9->火流星點高\n有炎魔團點法:\n4轉: 火流星 1->炎靈 5->冰魔 10->炎靈 20->冰魔 20->炎靈 30->劇毒 30->楓祝 9→火流星點高",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "魔力淨化:16,魔力擴展:10,魔心防禦:20,魔靈彈:1,魔力爪:20,魔力吸收:20,瞬間移動:20,精神強化:20,緩速術:1,火焰箭:30,毒霧:30,魔力激發:30,魔法封印:20,極速詠唱:11,火毒合擊:30,火毒抵抗:4,末日烈焰:28,致命毒霧:28,楓葉祝褔:9,炎靈地獄:30,召喚冰魔:20,劇毒麻痺:30,火流星:30"
        }
    ],
    "冰雷大魔導 (ArchMageI/L)": [
        {
            name: "標準型 (Lv. 200) - by 滷蛋&DJ魚",
            level: 200,
            description: "整體平衡型配點，是最通用的成長路線選擇。\n1轉：魔心點5三轉血量達1600前，打煉獄獵犬可以藉此降低MP水錢的消耗魔力之盾可以等2轉精神強化20後，優先將其點滿\n魔心防禦等三轉中期血量超過1600後，使用技能重置卷將二轉冰錐術的點數挪過來點滿。\n3轉：冰風暴點29因為和30只差1MP消耗和4點基礎攻擊，剩下的那一點投資到極速詠唱的話，在84等可以點到11提升成二速\n4轉：若是水錢有充足準備開銷可以給暴風雪練的的話，則可以改成先點1魔力無限+暴風雪10，長期單練的話楓葉祝福也可以先點9\n*技能書-閃電連擊30目前國際服只在寒霜冰龍及困難拉圖斯身上產出，若價格過於昂貴可先暫時跳過。",
            priority: "1轉: 魔力淨化5>魔力擴展10>魔靈彈1>魔力爪20>魔力淨化16>魔心防禦5>魔力之盾15\n2轉: 瞬移1>魔力吸收1>電閃雷鳴30>瞬移20>魔力吸收20>精神強化20>魔力之盾20>冰錐術26 \n3轉: 魔力激發3>極速詠唱1>冰風暴29>極速詠唱11>冰風暴30>魔力激發30>冰雷合擊30>魔法封印20>冰雷抵抗20>落雷凝聚1\n4轉: 魔力無限1>暴風雪1>閃電連擊19>寒冰地獄5>召喚火炎神10>楓葉祝福9>暴風雪10>閃電連擊28>寒冰地獄7>召喚火炎神20>寒冰地獄19 ",
            // --- 注意：這裡現在使用中文技能名稱 ---
            skills: "魔力淨化:16,魔力擴展:10,魔心防禦:14,魔力之盾:20,魔靈彈:1,魔力爪:20,魔力吸收:20,瞬間移動:20,雷閃電鳴:30,精神強化:20,冰錐術:26,極速詠唱:11,冰風暴:30,魔力激發:30,冰雷合擊:30,魔法封印:20,冰雷抵抗:20,落雷凝聚:1,魔力無限:1,楓葉祝福:9,暴風雪:10,閃電連擊:28,寒冰地獄:19,召喚火炎神:20"
        },
        {
            name: "水世界版本三轉配點(至Lv.120)- by夜見",
            level: 120,
            description: "☆此配點給練等時需要使用雷槍的人，用不到雷槍自行將三轉「詠唱11雷槍30」改為「詠唱20魔法封印20雷槍1」。\n☆此版本考慮當前SP卷昂貴且有摩登101作為剛三轉的銜接地圖不用馬上去火狗，故不推薦為了省水留5魔心防禦最後再洗回去，對此有相關疑問可至官方DC中文群冰雷頻道詢問(含練等怪物路線等等)。\n\n1轉：魔心跟魔盾比例自行搭配，加起來20點，考量練等至3轉70等需打的怪不會死亡即可，容易死亡的地方為組隊任務boss與摩登101怪物，魔心魔盾在67等會點滿各20。\n2轉：瞬移1魔吸1功能出來後雷鳴衝滿練等方便，後面就是補齊該點的，60等開始補滿1轉沒點滿的魔心魔盾，最後冰錐點11用來逃課3轉漢斯教官即可，3轉冰雷合擊傷害高之外會取代冰錐9成功能(剩的那1成就是通道守門人與鯊魚)。\n3轉：冰風29魔激3極速11的路線中，如果想先點合擊1當練等單體用也可以，那冰風暴可以只點28。\n後面落雷凝聚點滿30可以參加鯊魚團練，沒點落雷不要去亂，點滿依台服風氣也未必會被組。抵抗20在之後龍王也有發揮的地方，魔法封印效益微妙故在此捨棄，有其他疑問可至官方中文DC群冰雷頻道詢問。",
            priority: "若有斜線表示順位一樣，看個人喜歡哪個先點都可以，都要滿，而不是選一個點\n1轉：魔力淨化5>魔力擴展10>魔靈彈1>魔力爪20>魔力淨化16>魔盾+魔心共20\n2轉：瞬間移動1>魔力吸收1>電閃雷鳴30>瞬間移動20/魔力吸收20>精神強化20>補滿1轉：魔心20魔盾20>冰錐術11\n3轉：冰風暴29>魔力激發3>極速詠唱11>冰風暴30>魔力激發30>冰雷合擊30>落雷凝聚30>冰雷抵抗20",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "魔力淨化:16,魔力擴展:10,魔心防禦:20,魔力之盾:20,魔力爪:20,魔力吸收:20,瞬間移動:20,精神強化:20,冰錐術:11,雷閃電鳴:30,魔力激發:30,極速詠唱:20,冰雷合擊:30,冰雷抵抗:20,冰風暴:30,落雷凝聚:30"
        }
    ],
    "英雄 (Hero)": [
        // 之後可以在這裡添加英雄的推薦配點
        {
            name: "暫無高手分享配點",
            level: 200,
            description: "--",
            priority: "1轉: \n2轉: \n3轉: \n4轉: ",
            // --- 注意：這裡現在使用中文技能名稱 ---
            skills: ""
        },
      {
        name: "雙手斧（Lv.120)- bystarash",
level: 120,
description: "丟掉詐欺的防禦消除，點滿所有斧類有效的主/被動技能。\n1轉：練功農怪，劍氣縱橫先滿\n2轉：快速約點到5-6(寵物施放佳)，激勵19\n3轉：還有10點可以分配給盾防精通(盾物防+50％)/防禦消除(無視2.5％怪物防)\n不過120雙手斧是唯一解，應該是沒啥拿盾牌的場合；\n但是無視防禦這招又特別無感(施放後能力值面板的專欄數字也沒跳動)，\n就看個人抉擇。",
priority: "主修斧類，該滿的主被動都會滿。該階級必要技能點完時再回頭點。",
//---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
skills: "生命淨化:16,生命擴展:10,生命恢復:8,自身強化:20,魔天一擊:20,劍氣縱橫:20,精準之劍:0,精準之斧:20,快速之劍:0,快速之斧:20,終極之劍:0,終極之斧:0,激勵:19,反射之盾:30,魔力恢復:20,盾防精通:0,鬥氣集中:30,黑暗之劍:0,黑暗之斧:30,氣絕劍:0,氣絕斧:30,虎咆哮:30,防禦消除:0,楓葉祝福:0,楓葉淨化:0,武神防禦:0,格擋:0,絕對引力:0,究極神盾:0,究極突刺:0,進階鬥氣:0,鬥氣爆發:0,無雙劍舞:0"
      }
    ],
    "聖騎士 (Paladin)": [
        // 之後可以在這裡添加英雄的推薦配點
        {
            name: "四轉標準型(Lv.140)- by烏鵲銜梅",
            level: 140,
            description: "四轉後洗點的標準配點，兼顧打王和練功。將一轉二轉被動點滿以後 多餘的點數自由分配給摩天/劍氣 三轉滿三屬劍+11點魔力(推薦大劍派)/盾防(短手劍盾派) ",
            priority: "四轉起步突刺1+格擋1+騎衝1 \n150等以前根據錢包和王團固定成員 選擇性點高屬強(練功+炎魔必備) 聖靈(練功+帶祈禱不帶冰火打炎魔) 騎衝(單體打王 炎魔必備) 楓勇(整體)\n150等開始可選擇點高格擋+鬼神  (時間神殿開放前不是特別需要吸鐵石)",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "生命淨化:16,生命擴展:10,生命恢復:8,自身強化:20,魔天一擊:1,劍氣縱橫:7,精準之劍:20,精準之棍:0,快速之劍:20,快速之棍:0,終極之劍:30,終極之棍:0,降魔咒:20,反射之盾:30,魔力恢復:11,盾防精通:0,屬性攻擊:30,烈焰之劍:30,烈焰之棍:0,寒冰之劍:30,寒冰之棍:0,雷鳴之劍:30,雷鳴之棍:0,魔防消除:20,楓葉祝褔:10,楓葉淨化:0,武神防禦:0,格擋:1,絕對引力:0,究極神盾:0,究極突刺:1,聖靈之劍:20,聖靈之棍:0,屬性強化:10,騎士衝擊波:21,鬼神之擊:0"
        }
    ],
    "黑騎士 (DarkKnight)": [
        // 之後可以在這裡添加英雄的推薦配點
        {
            name: "拿矛龍吼雙修型(Lv. 120)- by給我兩個卡芙",
            level: 120,
            description: "．不需要洗點，三轉龍咆哮只看裝備槍或矛哪個攻擊高，矛在目前市場相對平價；若洗點(非必要)，則捨棄二轉的終極之槍30，可自行分配30點\n\n．一轉：優先點滿生命擴展，前期先依賴嫩寶投擲術練功\n．二轉：為了提升練功舒適度，請先點出終極之槍30；禦魔陣會覆蓋大部分技能，不建議再投資剩餘點數\n．三轉：龍咆哮在表攻達標可提前點滿30，但強烈建議點滿再使用\n",
            priority: "．一轉 劍士：\n生命淨化5 > 生命擴展10 > 魔天一擊1 > 劍氣縱橫20 > 生命恢復3 > 自身強化20 > 魔天一擊3\n\n．二轉 槍騎兵：\n精準之槍5 > 快速之槍1 (沒有自動施放可6) > 精準之槍19 > 終極之槍30 > \n快速之槍15 > 精準之槍20 > 禦魔陣3 > 神聖之火30 > 精準之矛20 > 快速之矛3\n※ 龍咆哮吃攻速，但影響度很少，快速槍矛可自由分配\n\n．三轉 龍騎士：\n槍連擊15 > 無雙槍1 > 槍連擊21 > 槍連擊30 > 龍之魂20 > 力量消除1 (沒有自動施放可6) > \n龍之獻祭3 > 龍咆哮30 > 無雙槍30 > 魔法抵抗20 > 力量消除17\n",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "生命淨化:5,生命擴展:10,生命恢復:3,自身強化:20,魔天一擊:3,劍氣縱橫:20,精準之槍:20,精準之矛:20,快速之槍:15,快速之矛:3,終極之槍:30,禦魔陣:3,神聖之火:30,魔法抵抗:20,槍連擊:30,無雙槍:30,龍之獻祭:3,龍咆哮:30,力量消除:17,龍之魂:20"
        },
        {
            name: "單修槍(Lv. 120)- by黑騎士日記",
            level: 120,
            description: "．此點法不需要洗點\n\n．一轉：優先點滿生命擴展，前期先依賴嫩寶投擲術練功\n．二轉：為了提升練功舒適度，請先點出終極之槍30\n．三轉：若主要練功在101，魔法抵抗可以之後再點；若在玩具城請視情況前移點出\n",
            priority: "．一轉 劍士：\n生命淨化5 > 生命擴展10 > 魔天一擊1 > 劍氣縱橫20 > 生命恢復3 > 自身強化20 > 魔天一擊3\n\n．二轉 槍騎兵：\n精準之槍5 > 快速之槍1 (沒有自動施放可6) > 精準之槍19 > 終極之槍30 > \n快速之槍20 > 精準之槍20 > 禦魔陣3 > 神聖之火30 > 生命淨化16 > 生命恢復8\n\n．三轉 龍騎士：\n槍連擊15 > 無雙槍1 > 槍連擊21 > 槍連擊30 > 龍之魂20 > 力量消除1 (沒有自動施放可6) > \n龍之獻祭3 > 龍咆哮30 > 無雙槍30 > 魔法抵抗20 > 力量消除17",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "生命淨化:16,生命擴展:10,生命恢復:8,自身強化:20,魔天一擊:5,劍氣縱橫:20,精準之槍:20,快速之槍:20,終極之槍:30,禦魔陣:3,神聖之火:30,魔法抵抗:20,槍連擊:30,無雙槍:30,龍之獻祭:3,龍咆哮:30,力量消除:17,龍之魂:20"
        },
        {
            name: "自主型槍矛雙修 (Lv. 120，不點滿龍咆嘯)- byJosh",
            level: 120,
            description: "．編寫時間：2025-1225。\n\n．本方案為自主型方案，可以單人練等也可以團隊練等。\n\n．本方案必須準備「紫色衝浪板」，並且將不會點滿「龍咆嘯」，三轉之後要重置SP者除外。\n\n．可依照個人需求、決定是否需要在三轉之前重置SP。\n\n．三轉之前要重置SP者，建議等到Lv.75再轉職為「龍騎士」，並且於完成轉職前一刻再重置SP、如此可以節省壹張SP重置卷。\n\n．三轉之前不要重置SP者，Lv.70即可轉職為「龍騎士」，此外二轉時期請直接捨棄「終極之槍」以及「終極之矛」。\n\n．筆者編寫當下由於市場上「槍」的商品數量多於「矛」、並且「紫色衝浪板」需要Lv.95才可裝備，因此在Lv.75之後會先使用「槍」、直到Lv.95。",
            priority: "．筆者編寫當下網上已經有許多技能配點指南可以參考，在此就野人獻曝、簡略針對各時期需要注意的技能進行建議。\n\n．1轉：優先點滿「生命擴展」；\n三轉之前不要重置SP者，「魔天一擊」只點1、作為「劍氣縱橫」前置。\n\n．2轉：依照持有物器種類，決定優先學習「槍」技能或是「矛」技能；\n如有團隊練等需求，建議可優先點滿「神聖之火」；\n無論是否要重置SP，三轉之前務必確認「終極之槍」以及「終極之矛」均為0點。\n\n．3轉：「槍連擊15」>(積累6點)>「槍連擊21」>「槍連擊30」>「龍之魂3」>「力量消除6」>「龍之魂20」>「無雙矛30」>「矛連擊15」>(積累6點)>「矛連擊21」>「矛連擊30」>「魔法抵抗20」>剩15點自由分配。",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "生命淨化:10,生命擴展:10,生命恢復:8,自身強化:20,魔天一擊:1,劍氣縱橫:20,精準之槍:20,精準之矛:20,快速之槍:20,快速之矛:20,終極之槍:0,終極之矛:0,禦魔陣:3,神聖之火:30,魔法抵抗:20,槍連擊:30,矛連擊:30,無雙槍:0,無雙矛:30,龍之獻祭:0,龍咆哮:0,力量消除:6,龍之魂:20,楓葉祝褔:0,楓葉淨化:0,武神防禦:0,格擋:0,絕對引力:0,究極神盾:0,究極突刺:0,黑暗力量:0,暗之靈魂:0,闇靈治癒:0,黑暗守護:0"
        },
      {
        name: "72等3轉前洗點雙修型(Lv.135)- by阿蘅",
level: 135,
description: "這個點法是在72等三轉前洗點的點法。這個方法可以只花到2張SP卷。\n1轉:72等洗點或拿到7點技能拿去點矛無雙就能>劍氣縱橫ㄌ但要取代摩天一擊要到快80等，所以建議點完所有的一轉buff技能後全點摩天\n2轉:因為御魔陣會跟一轉的自身強化互卡，所以點3即可，剩餘的8點拿去補摩天，這樣剛3轉的龍騎士單體傷害就能先用15點的摩天過渡到矛連擊\n3轉:建議先點矛，因為你三轉不太會有打王的機會(包括拉圖斯)。所以如果是純練功的話建議先專修矛，這樣95等拿起紫色衝浪板就能開開心心的去敲魚屋敲到四轉\n4轉:初始的3點建議1突刺/1暗之靈魂/1黑暗力量。然後就狂點黑暗力量到20(現時沒出龍王)。接著點暗之靈魂到10點滿熟練度再去點黑暗守護16拿到+攻速",
priority: "1轉:生命淨化16→生命擴展10→摩天一擊7→自身強化20→生命回復8\n2轉:精準之槍20→精準之矛20→快速之槍20→快速之矛20→御魔陣3→神聖之火30→摩天一擊15\n3轉:無雙矛30→矛連擊16→龍之魂20→力量消除4→矛連擊30→魔法抵抗20→力量消除20→槍連擊30→龍之獻技1\n4轉:究極突刺1→暗之靈魂1→黑暗力量20→暗之靈魂10→黑暗守護16→格檔1",
//---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
skills: "生命淨化:16,生命擴展:10,生命恢復:8,自身強化:20,魔天一擊:15,劍氣縱橫:0,精準之槍:20,精準之矛:20,快速之槍:20,快速之矛:20,終極之槍:0,終極之矛:0,禦魔陣:3,神聖之火:30,魔法抵抗:20,槍連擊:30,矛連擊:30,無雙槍:0,無雙矛:30,龍之獻祭:1,龍咆哮:0,力量消除:20,龍之魂:20,楓葉祝福:0,楓葉淨化:0,武神防禦:0,格擋:1,絕對引力:0,究極神盾:0,究極突刺:1,黑暗力量:20,暗之靈魂:10,闇靈治癒:0,黑暗守護:16"
      },
      {
        name: "槍矛雙修咆嘯滿(四轉前洗點)(Lv.120)- by懷曲",
level: 120,
description: "非練等用配點\n新創建角色的玩家不建議使用\nArtale版本中，槍連擊與矛無雙有額外熟練度補正，且有95等的紫色滑水板(攻速為快)，練等效率相對純槍來說會高一些\n\n三轉:\n無雙槍:點1是為了之後拿槍時，可以作為引怪用途\n龍咆嘯:用來打低等怪物的寶或任務道具時相當好用，攻擊速度會影響施放頻率，施放時建議配備紫色滑水板，或日本神社販售的木精靈槍(快)",
priority: "一轉 劍士：\n生命淨化16> 生命擴展10 >  生命恢復8 > 自身強化20 > 魔天一擊7\n\n二轉 槍騎兵：\n精準之槍20 >  精準之矛20 > 快速之槍15 > 快速之矛16 > 禦魔陣20 > 神聖之火30 \n\n三轉 龍騎士：\n槍連擊30 > 槍無雙1 > 矛無雙30 >  龍之魂20 > 力量消除17  > 龍之獻祭3 > 龍咆哮30 > 魔法抵抗20 ",
//---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
skills: "生命淨化:16,生命擴展:10,生命恢復:8,自身強化:20,魔天一擊:7,劍氣縱橫:0,精準之槍:20,精準之矛:20,快速之槍:15,快速之矛:16,終極之槍:0,終極之矛:0,禦魔陣:20,神聖之火:30,魔法抵抗:20,槍連擊:30,矛連擊:0,無雙槍:1,無雙矛:30,龍之獻祭:3,龍咆哮:30,力量消除:17,龍之魂:20,楓葉祝福:0,楓葉淨化:0,武神防禦:0,格擋:0,絕對引力:0,究極神盾:0,究極突刺:1,黑暗力量:0,暗之靈魂:1,闇靈治癒:0,黑暗守護:1"
      },
      {
        name: " 標準型 (Lv. 200)- by000",
level: 200,
description: "預估最終的點法 可以參考",
priority: "看情況\n",
//---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
skills: "生命淨化:16,生命擴展:10,生命恢復:8,自身強化:20,魔天一擊:5,劍氣縱橫:20,精準之槍:20,精準之矛:0,快速之槍:20,快速之矛:0,終極之槍:30,終極之矛:0,禦魔陣:3,神聖之火:30,魔法抵抗:20,槍連擊:30,矛連擊:0,無雙槍:30,無雙矛:0,龍之獻祭:3,龍咆哮:30,力量消除:20,龍之魂:20,楓葉祝福:30,楓葉淨化:1,武神防禦:30,格擋:30,絕對引力:30,究極神盾:0,究極突刺:30,黑暗力量:30,暗之靈魂:10,闇靈治癒:25,黑暗守護:25"
      }
    ],
    "箭神 (Bowmaster)": [
        // 之後可以在這裡添加英雄的推薦配點
        {
            name: "三轉終點平衡型 (Lv.120)- by薄荷糖Hope",
            level: 120,
            description: "1轉: 主二連箭，精準強化跟集中術會在二轉後有多餘點數時點滿\n2轉: 不要點終極之弓！！\n3轉: 現在有CD，專心走箭雨流。烈火箭最後點到26能燒6秒就好",
            priority: "1轉: 百步穿楊、霸王箭、二連箭一定要滿，其餘點數看自己不要分配給斷魂箭即可\n2轉: 炸彈箭1 > 精準之弓19 > 快速之弓+無形之弓先點到一樣的秒數 > 炸彈箭15\n後續慢慢把  精準之弓+快速之弓+無形之弓+炸彈箭 點滿\n之後點數多到可以點強弓跟一轉的技能\n3轉: 疾風步1 > 四連箭1 > 致命箭5 > 箭雨1\n後續點滿致命箭跟箭雨，成形後點四連箭到15\n之後看自己的喜好決定 (譬如想打王就先點滿四連箭 )",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "精準強化:16,百步穿楊:8,霸王箭:20,集中術:20,斷魂箭:8,二連箭:20,精準之弓:20,快速之箭:20,無形之箭:20,炸彈箭:30,疾風步:1,致命箭:20,四連箭:15,箭雨:30"
        },
      {
        name: "練等標準型請參閱- by一輩子射箭",
level: 140,
description: "30等之前在空屋、肥肥海岸、地鐵一號線\n30-50可以視狀況變更至石巨人寺院2(可以龜到70)\n70-9X接著住在名人大道南部(CD圖)，記得每12小時解一次野蠻，可以多少換一些水錢\n9X之後看裝備及血量(骨魚單下約13xx~16xx)可以前往深海峽谷2(魚屋)一路到12X等\n之後練等地圖就看各位大佬的裝備而決定",
priority: "一轉技能\n斷魂箭1-二連箭20-精準3-百步8-霸王箭20-精準強化12\n二轉\n炸彈箭30-精準之弓5-快速20-(點一轉技能精準強化到16)-無形20-精準之弓20-(集中術20)\n三轉\n致命箭5-箭雨1-四連箭1-疾風步1(點1就加11跑速了)-箭雨30-四連30-致命箭20-替身術20-銀鷹15\n點完上面技能會餘35點，可視自身狀況分配於疾風步或烈火箭\n四轉\n剛轉職完成之後會有3點，推薦會心1，暴風神射1，弓術精通1\n後續請各位箭神優先點完會心之眼及弓術精通\n小弟不才，恭請指教",
//---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
skills: "精準強化:16,百步穿楊:8,霸王箭:20,集中術:20,斷魂箭:1,二連箭:20,精準之弓:20,終極之弓:0,快速之箭:20,強弓:7,無形之箭:20,炸彈箭:30,疾風步:20,致命箭:20,替身術:20,四連箭:30,烈火箭:16,箭雨:30,銀鷹召喚:15,楓葉祝福:0,楓葉淨化:0,會心之眼:1,龍魂之箭:0,弓術精通:1,暴風神射:1,召喚鳳凰:0,牽制射擊:0,念力集中:0"
      }
    ],
    "神射手 (Marksman)": [
        // 之後可以在這裡添加英雄的推薦配點
        {
            name: "練等通用型 (Lv. 200)- by火車卡祖笛",
            level: 200,
            description: "練等路線\n1-10 楓之島解任務\n10-20 空屋拿嫩寶投擲術丟菇菇寶貝或弓箭手村訓練場(若腳本不多的話就乖乖待空屋)\n20-25 魔法森林南部打刺菇菇跟綠菇菇(可以先去奇幻村接99任務)\n25-33 黑肥肥領土I或石面木面(若腳本不多的話待在石面木面)\n33-40 東部岩石路6\n40-50 猴子沼澤地II或III\n50-75 魔龍、混種石巨人、灰白狼（60等後不缺水錢可以考慮CD 經驗效率：CD單層16萬、包圖28萬，感謝Jaywu大大的數據參考）\n75-100 鬼兔妮、CD(如果找不到CD圖可以考慮去維京)\n100+ 維京住到死\n-------------------------(假設未來有開放以下地圖的話)-------------------------\n90-123 魚屋\n123-130 藍翼龍巢穴單練\n123+ 蛋龍I團練\n140+ 蛋龍II單練",
            priority: "一轉: 精準強化 3 →  百步穿楊 8 →  斷魂箭 1 → 二連箭 20→ 霸王拳 20 → 精準強化12\n二轉:穿透箭 1  → 精準之弩 19  →穿透箭 30 → 快速之弩 20→無形箭 20  → 集中術 20 → 強弩 12\n三轉: 疾風步 1→ 四連箭 （點到可以穩定大cd兩下為止）→ 致命箭 5→ 昇龍弩 21 → 致命箭20→  昇龍弩 30→ 四連箭 30 → 稻草人 20→ 疾風步 20→ 寒冰箭 16→ 金鷹召喚 15\n四轉: 光速神弩 1 →  會心之眼 1 → 弩術精通 1 →  光速神弩 30 → 弩術精通 30 →  會心之眼 30 →  必殺狙擊 30 → 楓葉祝福 20\n(接下來就隨意點了，如果中間想穿插去點銀準跟龍魂箭各1也可以，如果要單練蛋龍麻煩至少點1點銀準，頂到不行的召喚物，神射手除了黑暗狙擊以外的招式都很好用)",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "精準強化:12,百步穿楊:8,霸王箭:20,集中術:20,斷魂箭:1,二連箭:20,精準之弩:19,快速之弩:20,強弩:12,無形之箭:20,穿透之箭:30,疾風步:20,致命箭:20,替身術:20,四連箭:30,寒冰箭:16,昇龍弩:30,金鷹召喚:15,楓葉祝褔:20,會心之眼:30,弩術精通:30,光速神弩:30,必殺狙擊:30"
        }
    ],
    "暗影神偷 (Shadower)": [
        // 之後可以在這裡添加英雄的推薦配點
        {
            name: "雙修CD流（Lv.120）- by阿尼",
            level: 120,
            description: "技能點法說明（雙修流派）\n\n雙修優勢簡述：雙修最大優勢在於「雙飛」技能屬於遠程攻擊，且吃熟練度，讓你從一轉到47等的練等速度極快，傷害穩定。\n二轉技能配置思考：「快速刀」點到6點、「恢復術」點到8點，這樣就能補回20點的「詛咒術」點數，無需將雙飛洗掉\n三轉後直接滿「分身」，現版本主流為打CD流派，練等效率非常高，楓炸除非刷野王，否則不建議先點。有人會疑問為什麼不繼續用妙手，主要是因為「分身」可同時打6隻怪物，雖然攻擊範圍較短，但抓好距離後效率遠高於妙手。「血魔」在現版本練等中幾乎用不到，建議把點數回補到「恢復術」。\n這套點法適合想要快速衝等、省資源的玩家，只需搭配寵物即可，不必額外洗SP。\n練等建議流程與技能裝備配置\n\n一轉：\n前期新手沒水沒錢，建議使用普攻一路練到20等。20等開始可丟標練功，（不洗點前提：有寵物輔助）2轉時可犧牲「恢復術」、「快速刀」的點數，回去補「詛咒術」。\n裝備：25等敏捷達50時裝備 狼牙，後續即可點全幸直到60轉裝備賊。\n二轉：\n若以組隊101為主，優先點滿速度（19速），36等可達成。101建議「迴旋」先點滿，打王才有傷害，若單練可考慮點「妙手」。無需洗SP的技能點法建議如下：快速刀：6點 恢復術：8點，剩餘詛咒術20點\n裝備：47等時把狼牙換成太極扇開始正式刀賊人生，60等算好敏捷換雙翼。\n三轉：\n第一先點「落葉斬」。以主流CD流玩法為主，建議直接補滿「分身」技能。\n80等可換裝「狗刀」及上下衣，後期幾乎用不到「血魔」，可將點數回補至「恢復術」。",
            priority: "1轉：雙飛1 > 幻化3 > 鷹之眼8> 雙飛20 > 幻化20 >詛咒12 > 隱身 1\n2轉：速激20 > 妙手 or 迴旋30 > 精準19 > 快速刀6 > 妙手 or 迴旋30 > 恢復術 8> 詛咒術 20\n3轉：落葉斬1 > 血魔3 > 楓盾1>分身術 30 > 楓炸3 >勇者20 > 楓炸 30 > 落葉斬30 > 血魔轉換 30 OR 回去補恢復術（建議回去補恢復血魔難用用不到）",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "幻化術:20,鷹之眼:8,詛咒術:20,隱身術:1,雙飛斬:20,恢復術:8,速度激發:20,精準之刀:19,快速之刀:6,妙手術:30,迴旋斬:30,血魔轉換:3,落葉斬:30,勇者掠奪術:20,分身術:30,楓幣護盾:20,楓幣炸彈:30"
        },
        {
            name: "135版本- by雪夜",
            level: 135,
            description: "炎魔最低等級配置",
            priority: "4轉 瞬步先滿  1點致命暗殺>30等迴旋斬\n",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "幻化術:20,詛咒術:20,隱身術:20,雙飛斬:20,恢復術:8,速度激發:20,精準之刀:20,快速之刀:20,妙手術:1,迴旋斬:21,血魔轉換:21,落葉斬:30,勇者掠奪術:20,分身術:30,楓幣護盾:20,楓幣炸彈:30,瞬身迴避:1,挑釁:15,致命暗殺:1,煙霧彈:1,順步連擊:30"
        },
      {name: "標準型 (Lv. 200)- byShadower",
level: 200,
description: "1轉用雙飛閃練等，劈空斬距離太短傷害也沒吃幸運的雙飛閃強，如果要玩101組隊任務剩下隱身術，詛咒術打王用。\n2轉如果玩101組隊任務當速賊可以先點滿速度激發20，打怪練等迴旋斬30(110%*6下=660%傷害)比妙手術30(140%傷害*4個怪物=560%傷害)高，但迴旋斬距離短妙手術距離較常，且妙手術能機率吸血，不過妙手術需要速度激發5，自行選擇，我是先迴旋斬30，恢復術、快速之刀回復HP,MP效益: https://docs.google.com/spreadsheets/d/1W28Wbu5YpVGPi2-mdiG0LdRPMkJ3rElAljRn-qJumzc/edit?usp=sharing \n3轉落葉斬1位移強，能空中使用，如果不需要楓幣護盾減少一半被擊傷害可以先不點，打怪比較密集也可以先點滿分身術30，之後補點勇者掠奪術20、楓幣炸彈30，之後點二轉恢復術、快速之刀是因為我認為血魔轉換沒什麼用。\n4轉打怪練等用，如果需要打王也能在順步連擊30後點煙霧彈30>致命暗殺30，單體傷害排行致命暗殺+楓幣炸彈在物理攻擊職業傷害倒數第二，理論上傷害比拳霸閃爆破高，但是致命暗殺會位移撞怪、距離短、不能無腦一直按住技能鍵，而且技能不帥，一點也不像暗殺(前面3下慢慢砍)，全職業4轉 理論DPM: https://docs.google.com/spreadsheets/d/1GdS7Ska2czHjUddGNj3Th61dxN1dJvzDdNQB_8saQ0g/edit?gid=0#gid=0\n\n希望致命暗殺能移除最後一擊的位移或是不解除隱身術並持續保持隱身術防止撞怪。",
priority: "1轉: 雙飛斬1>幻化術3>鷹之眼8>雙飛斬20>幻化術20>隱身術13\n2轉: 精準之刀19>快速之刀1>迴旋斬30>速度激發20>妙手術30>快速之刀5>恢復術17\n(如果需要重置1轉技能點數: 幻化術20>詛咒術20>隱身術20>劈空斬1(剩餘1點隨意))\n3轉: 落葉斬1>(血魔轉換3>楓幣護盾1)>楓幣炸彈3>勇者掠奪術20>分身術30>楓幣炸彈30>落葉斬30>楓幣護盾20>恢復術20(二轉)>快速之刀20(二轉)\n4轉: 飛毒殺1>順步連擊21>挑釁30>順步連擊30>飛毒殺30>楓葉祝福30>瞬身迴避30>煙霧彈30>致命暗殺30>瞬身迴避30>楓葉淨化1>隨意>(忍影瞬殺30(沒屁用)/強化盾20(只加盾牌防禦太少)/精準之刀20(不缺命中)/血魔轉換30(練沒在浪費時間用/打王鎖藥水也許會用到))",
//---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
skills: "幻化術:20,鷹之眼:0,詛咒術:20,隱身術:20,劈空斬:1,雙飛斬:1,恢復術:20,速度激發:20,精準之刀:20,快速之刀:20,妙手術:30,迴旋斬:30,強化盾:0,血魔轉換:3,落葉斬:30,勇者掠奪術:20,分身術:30,楓幣護盾:20,楓幣炸彈:30,楓葉祝福:30,楓葉淨化:1,瞬身迴避:30,挑釁:30,飛毒殺:30,忍影瞬殺:30,致命暗殺:30,煙霧彈:30,順步連擊:30"
}
],
    "夜使者 (NightLord)": [
        // 之後可以在這裡添加英雄的推薦配點
        {
            name: "完美下水道(Lv. 120)- by逐闇者",
            level: 120,
            description: "1轉\n雙飛斬：傷害型，四轉前的主力技能。\n幻化術：藥水型，若前期選擇藍水靈練功，有命中率需求先點高，有錢可買商店命中藥水。\n鷹之眼：攻擊輔助型，增加攻擊距離，若像藍水靈隨時貼臉可先點雙飛斬和幻化術。\n隱身術：功能型，組隊任務或野王，躲致命碰撞傷害，這版趕路時到3轉有二段跳才適合隱身。\n詛咒術：打王型，偏向刀賊的技能，刀賊三轉有楓幣護盾減少任何傷害，鏢賊要近身戳野王有可能沒戳到就被撞死了。另外詛咒術只減少野王物攻，能秒殺你的魔法攻擊無解，不能有效增加鏢賊生存能力。\n我有個想法是四轉前一刻洗點(3張SP)，準備好三飛閃母書(很重要)，雙飛的點數轉成詛咒術，幻化術轉成劈空斬，就能體驗影分身+劈空斬+詛咒術的偽刀賊，如此一來野王的魔傷可靠貼臉無敵偵避免。\n2轉\n速度激發：團隊增益型，這遊戲沒移速玩不下去。\n精準暗器：記得點19就好，點20只多1點命中，沒效益。\n極速暗殺：傷害輔助型，25等狼牙攻速是最高，穿到50等換手甲攻速會降一階，有寵物自動施放此技能角色不會停頓，點高只增加秒數提升攻速效果不變。\n強力投擲：傷害型，若很少打組隊任務，先點滿強力投擲再點速度激發\n吸血術：藥水型，鏢賊2轉的爭議技能之一，我的用法是打怪第一下或剩一咪咪血時尾刀，尾刀考驗反應力但不會掉DPS，以打怪效率為優先，不要為了省水連續按。\n恢復術：藥水型，鏢賊2轉最有爭議的技能，戰鬥中幾乎不會恢復HP，此技能需搭配寵物自動施放才能凸顯價值，點高增加每10秒MP恢復量，用來支撐寵物自動施放的耗魔量。\n極速5恢復17 or 極速3恢復19 (前者回魔效益最高，後者四轉時可點滿恢復術面板順眼，練到200都能點滿不用糾結XD，也可以點極速3詛咒19，但要注意別掛機太久。)\n極速4 消耗26MP/持續40S 極速5 25MP/50S 極速6 24MP/60S(極速從5點到6的效益和增加1點恢復術一樣，再往上效益不如點恢復術，因此寵物自動施放極速暗殺5點效益最高。)\n3轉\n影分身：傷害型，玩鏢賊的理由之一，優先度絕對高於風魔。\n風魔手裡劍：範圍傷害型，玩鏢賊的理由之二，帥。\n二段跳：位移型，玩鏢賊的理由之三，全職業最強的橫向位移。\n藥劑精通：藥水型，10級以前每1點+3%效益較高，之後每級+2%。\n幸運術：團隊增益型，讓鏢賊組隊練功時不會被蛋雕的技能。\n楓幣攻擊：打王型，拉圖斯清黑球，打特殊機制怪需要此技能。\n影網術：綑綁play型，無傷害技能命中率非100%所以不點，綁住怪物它還是能用魔法攻擊，如果魔改成能綁玩家會很有趣。\n幸運術和藥劑精通效益比較(前者團隊buff打死怪觸發，後者只能自己喝水觸發。如果練功是火狗 DT PW耗水頻率過高可先點滿藥劑，目前版本適合在101先點滿幸運術。)",
            priority: "點技能前先思考這個技能對當下練等的效益為何，技能順序僅供參考。\n1轉 \n雙飛斬1>幻化術3>鷹之眼8>雙飛斬20>幻化術20>隱身術13\n2轉\n有寵物施放 精準暗器3>強力投擲1>速度激發20>強力投擲30>精準暗器5>極速暗殺5>精準暗器19>吸血術30>恢復術17\n無寵物施放 精準暗器3>強力投擲1>速度激發20>強力投擲30>精準暗器5>極速暗殺20>精準暗器19>吸血術30>隱身術15\n3轉\n風魔手裡劍1(拉怪)>影分身30>風魔手裡劍21>二段跳10>幸運術20>藥劑精通10>楓幣攻擊30>風魔手裡劍30>藥劑精通20>二段跳20>剩餘1點恢復術 or 隱身術",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "幻化術:20,鷹之眼:8,隱身術:13,雙飛斬:20,恢復術:18,速度激發:20,精準暗器:19,極速暗殺:5,強力投擲:30,吸血術:30,藥劑精通:20,幸運術:20,影分身:30,楓幣攻擊:30,風魔手裡劍:30,二段跳:20"
        },
        {
            name: "標準型(Lv. 120)- by錦鯉",
            level: 120,
            description: "平衡型通用配點，沒有往省水方向去特化但也有稍微說明。\n文長原因故這是簡略版，若有興趣可去巴哈觀看完整版：\nhttps://forum.gamer.com.tw/Co.php?bsn=79354&sn=60985\n由於1、2轉已經過的有點久了，而且我剛玩時的版本跟現在練等環境一定不一樣，所以包括3轉技能都建議按照自己實際情況、常駐練等地圖去做調整。",
            priority: "1轉：\n雙飛斬1->幻化術3->鷹之眼8->雙飛斬20->隱身術1->幻化術20->隱身術13\n\n2轉（建議這遊戲一定要買寵物自動施放）：\n精準暗器3->強力投擲1->速度激發20->強力投擲30->精準暗器5->極速暗殺3~6->精準暗器19~20->吸血術1->極速暗殺20->吸血術4~5（取決於你精準暗器點19還是20）->隱身術20->詛咒術20\n\n把強力投擲先點1出來之後再去點滿速度激發，你打101時的傷害也會比較舒適。\n\n3轉：\n風魔1（拉怪或打低等怪時用就好）->影分身30->風魔30->二段跳10\n->團練就先點滿幸運術、單練就先點藥劑精通\n（但取決於你打的怪傷害多少，例如白狼人最高傷害約1300，那精通先點到10即可）\n->二段跳11（機動性更佳）->藥劑精通/幸運術20（在此期間要是你要打拉圖斯了請記得楓幣攻擊點1）\n->二段跳20->楓幣攻擊30->補1點吸血術（120前技能點用完才能點4轉技能）\n\n最後必須再強調一次，技能配點皆須按照自身實際情況去做調整，網路上有非常多版本的點法可以去做參考，感謝看到這裡的各位",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "幻化術:20,鷹之眼:8,詛咒術:20,隱身術:20,雙飛斬:20,速度激發:20,精準暗器:19,極速暗殺:20,強力投擲:30,吸血術:6,藥劑精通:20,幸運術:20,影分身:30,楓幣攻擊:30,風魔手裡劍:30,二段跳:20"
        },
        {
            name: "蛋雕型，拿到三飛閃後洗點(LV.130)- by無風",
            level: 130,
            description: "主要是以拿到三飛閃後，轉職前洗點推薦，從頭練的角色完全不建議參考，請參考另外的配置\n由於鏢賊的三飛閃母書，需要打炎魔才會取得，所以小資如我，會卡著3轉一直到拿到三飛閃母書，之後四轉前進行洗點，至少可以省下一張洗點卷!",
            priority: "1轉: 幻化術、鷹之眼點滿後，看是要點滿詛咒術還是隱身術，則一點滿後，另一個只要點到15\n(沒點雙飛閃是四轉後，你根本用不到這個技能所以就空著.. )\n2轉: 除了恢復術，其他技能都點滿 !\n(個人是滿喜歡吸血術的，有時候怪物剩一絲血，我都會丟吸血術省水+補刀)\n3轉: 影網術廢技，除了影網術之外都點滿~\n(影網術完全開發不起來.. 不能綁BOSS，小怪也要在身邊才能綁，非常雞肋)\n4轉: 還沒玩到，三飛閃一定是先點到10點(拿到母書，只能先點10點)",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "幻化術:20,鷹之眼:8,詛咒術:20,隱身術:15,劈空斬:0,雙飛斬:0,恢復術:0,速度激發:20,精準暗器:20,極速暗殺:20,強力投擲:30,吸血術:30,藥劑精通:20,幸運術:20,影分身:30,影網術:0,楓幣攻擊:30,風魔手裡劍:30,二段跳:20,楓葉祝褔:10,楓葉淨化:0,瞬身迴避:1,挑釁:10,飛毒殺:0,忍影瞬殺:1,無形鏢:1,忍術風影:0,三飛閃:10"
        }
    ],
    "拳霸 (Buccaneer)": [
        // 之後可以在這裡添加英雄的推薦配點
        {
            name: "準畢業技能(Lv. 147)- by鮪魚",
            level: 147,
            description: "打王練等輔助技能皆已點",
            priority: "4轉:最終極速1>鬥神降世20>閃．索命30>時間置換1>閃．爆破30",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "極限迴避:20,衝擊拳:11,旋風斬:20,雙子星攻擊:0,衝鋒:10,體魄強健:10,精通指虎:20,迴旋肘擊:20,昇龍拳:11,狂暴衝擊:20,魔力再生:10,致命快打:20,偽裝術:10,致命暗襲:20,蓄能激發:40,能量暴擊:30,損人利己:20,鬥神附體:20,衝擊波:21,楓葉祝褔:0,楓葉淨化:0,魔龍降臨:0,元氣彈:0,鬥神降世:20,閃．爆破:30,閃．索命:30,閃．連殺:0,最終極速:1,時間置換:1"
        },
      {
        name: "通往炎魔的拳霸之路- by路過的蕾米莉亞",
level: 135,
description: "拳霸在三轉前是手異常短的職業 甚至比劍士還短 要先做好高血壓的心理準備 但每個等級區間都有升級的醍醐味 還請各位好拳寶不要放棄 練了三個四轉角色 拳寶是我玩起來覺得每個等級區間體驗都不同的職業\n\n一轉轉職完不買武器 直接去空屋丟殼丟到20 直到衝鋒及極限迴避滿後 才開始拿指虎 所以前面技能點數不點攻擊技能\n推薦練等地:空屋 >>>黑肥肥領土>>>東方岩石山6\n\n二轉強健體魄優先度絕對大於其他技能 這影響到角色的成長血量 優先度最高\n拳霸二轉經典的連技就是肘擊起手 並反向接狂暴衝擊 把怪推到牆角後 再用旋風斬打多體 最後用衝擊拳去收尾單體怪 所以前期主要的範圍傷害還是在旋風斬上 因此衝擊拳才會先點1而已\n體魄點完後首要目的就是取得致命快打 攻速上升一階體感打起來會舒服很多 但如果本身沒有寵物施放的話 建議點到5去稍微延長時間 若有寵物施放的話則可點1交由寵物施放 \n在前期傷害很飄的情況則會優先去提升武器熟練度去把低表拉高 所以選擇優先點精通指虎\n至於先點到19的原因是因為19跟20不差熟練度只差1命中 所以後面沒東西點再回來補即可\n至於肘擊和狂暴衝擊哪個要先滿就看個人使用手感 狂暴衝擊的最大倍率要蓄能滿才會達到\n而肘擊點滿是按下去就是240% 所以取決於個人的使用手感 \n魔力再生在三轉有損人利己後是不錯的省水技能\n偽裝術在打王偶爾有奇效 覺得自己下一個技能會死或是剛好碰到鎖水的時候按一下 有時候能救到自己一命\n至於不點昇龍拳的原因是技能施放後的硬值過大 基本上除了衝擊拳三下接昇龍拳以外都會覺得異常的卡 個人體感僅在練CD時打雙碟好用一點 但實用度實在是不大 所以不推薦點\n\n另外相較其他物理職業的不同 拳霸的致命快打是必須點滿的 因為是四轉最終急速的前置技能\n所以務必要點滿 不要為了省點數導致四轉沒辦法點到最終急速 \n推薦練等地圖:東方岩石山6>>>101組隊=土龍>>>女神經驗=魔龍>>>小音響>>>CD\n\n\n三轉第一點請點去蓄能激發 雖然只是個被動技 卻是貫穿整個拳霸三轉的核心技能\n攻擊滿能量後會提供攻擊、迴避以及拳霸很需要的命中 對練功上有很大的幫助\n接著就是拳霸練功效率提升的秘密技能 致命暗襲 會對被暈眩的怪物造成額外爆擊傷害(此傷害判定為爆擊傷害 所以也能吃到會心之眼的傷害加成) 因此對怪使用肘擊起手變得格外重要 因為狂暴衝擊是不會暈眩的 只有肘擊會暈眩\n點滿後將拳霸三轉吃飯技能點 能量爆擊(俗稱泡泡拳)點到21 只先點到21的原因是因為再點高不會增加攻擊的怪物數量 只會提高倍率 所以後續再補滿就好 \n接著回頭把蓄能激發點滿 去提高能量的持續時間以及數值 點完後就可以再回頭把爆擊補滿\n損人利己是三轉優秀的收尾技能 本身倍率不俗 加上可以吸血的效果 讓拳霸在練功可以輕鬆達到正收益 但要注意的是這招只有滿能量時才能施放 所以練功時還是要注意一下血量以及能量的狀況\n到此時拳霸三轉幾乎已經完全成形 後面的點數基本上除了鬥神附體是四轉鬥神降臨的前置必須點滿外 其他的可以自由分配 衝擊波本身傷害倍率不錯 但綁定變身才能使用 並且不附帶暈眩就略顯尷尬 主要AOE還是會暫時依靠一轉的旋風斬(變身無法旋風斬及衝擊拳)\n推薦練等地圖\n\n四轉第一點請立刻馬上點一點最終急速 點1就有110秒的持續時間 並可以與致命快打並存\n重要的是隊友也能吃到效果(但需手動施放 寵物放只有自己有效果) 讓隊友都得叫聲爹\n四轉有索命流派與魔龍流派\n索命流派前期會略痛苦 因為要等到約130練等(鬥神滿及索命13 至少能攻擊四體)效率才會起來\n前期練法會跟三轉大同小異 基本上不會使用到索命(攻擊數量太少並且鬥神沒滿會有空窗期)\n魔龍流派前期練起來會相對輕鬆 但後期沒索命強 若想前面輕鬆一點可以直接先走魔龍流\n魔龍流派請四轉點1點最終急速後 直接all in魔龍降臨 然後就可以把旋風斬蛋雕了\n注意 魔龍點滿後離135還有一些距離 若想補單體攻擊技能請點去閃連殺 閃爆破綁定鬥神才能使用 沒點鬥神是不能用的\n135或137即可洗回閃索命(135索命可拉6隻 137索命可滿)\n\n\n",
priority: "1轉:衝鋒10>極限迴避20>衝擊拳1>旋風斬20>衝擊拳11\n2轉:體魄強健10>迴旋軸擊1>狂暴衝擊1>精通指虎5>致命快打1(有寵施)或5(無寵施)>精通指虎19>狂暴衝擊/迴旋肘擊20>狂暴衝擊/迴旋肘擊(另一個)20>精通指虎20>致命快打20>衝擊拳20>魔力再生10>偽裝術10>昇龍拳2\n3轉:蓄能激發1>致命暗襲20>能量爆擊21>蓄能激發40>能量爆擊30>損人利己20>鬥神附體20>衝擊波21\n4轉索命:最終急速1>鬥神降臨20>時間置換1>閃爆破1>閃索命25\n4轉魔龍:最終急速1>魔龍降臨30>時間置換1>閃連殺16",
//---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
skills: "極限迴避:20,衝擊拳:20,旋風斬:20,雙子星攻擊:0,衝鋒:10,體魄強健:10,精通指虎:20,迴旋肘擊:20,昇龍拳:2,狂暴衝擊:20,魔力再生:10,致命快打:20,偽裝術:10,致命暗襲:20,蓄能激發:40,能量暴擊:30,損人利己:20,鬥神附體:20,衝擊波:21,楓葉祝福:0,楓葉淨化:0,魔龍降臨:0,元氣彈:0,鬥神降世:20,閃．爆破:0,閃．索命:30,閃．連殺:0,最終極速:1,時間置換:1"
      }
    ],
    "槍神 (Corsair)": [
        // 之後可以在這裡添加英雄的推薦配點
        {
            name: "暫無高手分享配點",
            level: 200,
            description: "--",
            priority: "1轉: \n2轉: \n3轉: \n4轉: ",
            // --- 注意：這裡現在使用中文技能名稱 ---
            skills: ""
        },
        {
            name: "152等前不上船打王練等兼備(LV152)- by冬笑笑",
            level: 152,
            description: "3轉PW鯊魚地獄\n4轉懶人練等 純迅雷+章魚海鷗打蛋龍\n打王不用上下船單體輸出也不會輸海盜砲砲擊很多\n160以上的再考慮上船",
            priority: "1轉:\n雙子星20>衝鋒10>極限迴避20>旋風斬11\n2轉:\n精準5>快速3>散射20>精準20>脫離戰場20>緩降10>快速20>炸彈11\n3轉:\n火焰噴射30>章魚21>三連射20>章魚30>指定攻擊30>寒冰噴射26>海鷗15\n4轉:\n章魚20>迅雷30>海鷗20(龍王前無30)>楓祝9 ",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "極限迴避:20,衝擊拳:0,旋風斬:11,雙子星攻擊:20,衝鋒:10,精通槍法:20,散射:20,炸彈投擲:11,迅雷再起:20,偽裝射擊:20,緩降術:10,脫離戰場:20,3連發:20,章魚砲台:30,海鷗突擊隊:15,火焰噴射:30,寒霜噴射:26,指定攻擊:30,楓葉祝褔:9,楓葉淨化:0,瞬‧冰火連擊:0,砲台章魚王:20,海鷗特戰隊:20,瞬‧迅雷:30,海盜船:0,海盜加農炮:0,海盜魚雷:0,心靈控制:0,精準砲擊:20"
        },
        {
            name: "剛開四轉練等型 (145等)- by小白",
            level: 145,
            description: "剛開服以最簡單取得技能書的方式進行技能選擇，透過魚雷蛋龍，來達到高速升等的效益。",
            priority: "無",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "極限迴避:20,衝擊拳:1,旋風斬:10,雙子星攻擊:20,衝鋒:10,精通槍法:20,散射:20,炸彈投擲:11,迅雷再起:20,偽裝射擊:20,緩降術:10,脫離戰場:20,3連發:20,章魚砲台:30,海鷗突擊隊:15,火焰噴射:30,寒霜噴射:26,指定攻擊:30,楓葉祝褔:9,楓葉淨化:0,瞬‧冰火連擊:0,砲台章魚王:20,海鷗特戰隊:1,瞬‧迅雷:11,海盜船:10,海盜加農炮:0,海盜魚雷:27,心靈控制:0,精準砲擊:0"
        },
        {
            name: "一般流派 其實沒什麼好取捨- by原攻略Hoshisumi、Philip(紅中老大搬運分享",
            level: 120,
            description: "標準",
            priority: "2轉:槍法精通19>迅雷再起3~6>散射20>緩降5>脫離20>緩降10>偽裝射擊20\n之後隨意 沒自動施放就迅雷再起滿 或炸彈20\n\n火焰噴射30(註1) → 章魚砲台21 → 三連發20 → 章魚砲台30  \n→  指定攻擊30(LV106達成LV29) -> 寒霜噴射26 → 海鷗突擊隊15 (102)  燒鯊魚\n火焰噴射30(註1) → 章魚砲台11 → 三連發20 \n→ 寒霜噴射26(LV97會點到LV21，能打6隻)→ 章魚砲台30\n → 指定攻擊30(LV115) → 海鷗突擊隊15  97級就能轉鯊魚",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "極限迴避:20,衝擊拳:0,旋風斬:11,雙子星攻擊:20,衝鋒:10,精通槍法:20,散射:20,炸彈投擲:11,迅雷再起:20,偽裝射擊:20,緩降術:10,脫離戰場:20,3連發:20,章魚砲台:30,海鷗突擊隊:15,火焰噴射:30,寒霜噴射:26,指定攻擊:30,楓葉祝褔:0,楓葉淨化:0,瞬‧冰火連擊:0,砲台章魚王:0,海鷗特戰隊:0,瞬‧迅雷:0,海盜船:0,海盜加農炮:0,海盜魚雷:0,心靈控制:0,精準砲擊:0"
        },
        {
            name: "通常型(LV.120)- by綿友",
            level: 120,
            description: "1轉：雙子星優先滿，衝鋒、極限迴避點滿，槍手系列本身用不太到體術技能，多的點數建議點旋風斬。\n\n2轉：槍法精通優先點滿&迅雷再起先點5(最多11就好)，後退射擊視為反人體工學的偽◎二段跳，但是很好用。如果追求輸出就先點滿散射(170%)；追求省水就點滿偽裝射擊(100%)附帶100%擊暈，欺負教官通道守門人的好技能。炸彈最後再點滿，打王團體用DEBUFF。\n\n3轉：優先點高火焰噴射，點到15就能燒PW，讓你一路飛到90等，火焰噴射也是槍手在ARTALE可以一個人打出整團效率的技能，推薦點滿。第二點滿章魚，章魚會是你的好夥伴，趕快熟悉章魚使用的節奏。寒冰噴射和火焰噴射一個可以滿另一個最多26點，自行斟酌。海鷗突擊15就好當作4轉海鷗特戰隊前置點，這個技能用起來不順手。冰跟火會是在深海地區一直陪伴玩家到120等的好夥伴。三連射打王很好用，配合一轉炸彈、三轉指定攻擊，體感上比弓箭手4連箭強。",
            priority: "1轉：雙子星20>衝鋒10>極限迴避20>旋風斬11\n2轉：槍法精通19>迅雷再起5>緩降5>脫離戰場10>散射20(偽裝射擊20)\n3轉：火焰噴射30>章魚砲台20>寒冰噴射26>3連發20",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "極限迴避:20,衝擊拳:0,旋風斬:11,雙子星攻擊:20,衝鋒:10,精通槍法:20,散射:20,炸彈投擲:20,迅雷再起:11,偽裝射擊:20,緩降術:10,脫離戰場:20,3連發:20,章魚砲台:30,海鷗突擊隊:15,火焰噴射:30,寒霜噴射:26,指定攻擊:30,楓葉祝褔:0,楓葉淨化:0,瞬‧冰火連擊:0,砲台章魚王:0,海鷗特戰隊:0,瞬‧迅雷:0,海盜船:0,海盜加農炮:0,海盜魚雷:0,心靈控制:0,精準砲擊:0"
        },
        {
            name: "標準型 (Lv. 120)- byby Hoshisumi&Philip(紅中老大 搬運)",
            level: 120,
            description: "通用配點",
            priority: "1轉: 雙子星20 >衝鋒10 >極限迴避20 >旋風斬11\n2轉: 精通槍法19 >迅雷再起3/6(有買寵技就3) >散射20 >緩降5/10 >脫離戰場20 >( 緩降10) >迅雷再起11 >偽裝射擊20 >炸彈投擲20(非必點招，也可補滿迅雷) >  (最後1點選: 精通20 or 迅雷12) \n3轉: 火焰噴射30 >章魚砲台21 >三連發20 >章魚砲台30 >指定攻擊30(LV106達成LV29) -> 寒霜噴射26 >海鷗突擊隊15  \n\n燒PW到102再轉戰燒[烏賊+鯊魚雙圖]者\n\n另一條路\n3轉: 火焰噴射30>章魚砲台11>三連發20>寒霜噴射26(LV97會點到LV21，能打6隻)>章魚砲台30>指定攻擊30(LV115) >海鷗突擊隊15\n97等準時轉戰深海燒[烏賊雙圖]者或[鯊魚單圖]者\n\n",
            //---skill 為命令模擬器配點，一個技能輸入一次即可，需考量到轉職點數需求-----
            skills: "極限迴避:20,衝擊拳:0,旋風斬:11,雙子星攻擊:20,衝鋒:10,精通槍法:20,散射:20,炸彈投擲:11,迅雷再起:20,偽裝射擊:20,緩降術:10,脫離戰場:20,3連發:20,章魚砲台:30,海鷗突擊隊:15,火焰噴射:30,寒霜噴射:26,指定攻擊:30,楓葉祝褔:0,楓葉淨化:0,瞬‧冰火連擊:0,砲台章魚王:0,海鷗特戰隊:0,瞬‧迅雷:0,海盜船:0,海盜加農炮:0,海盜魚雷:0,心靈控制:0,精準砲擊:0"
        }
    ]
    // ... 其他職業

};





