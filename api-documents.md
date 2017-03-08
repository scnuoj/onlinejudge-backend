FORMAT: 1A9
HOST: http://localhost:8000/api

# OnlineJudge API 文档

OnlineJudge API 文档

# 问题 [/problem]

## 获取一道问题 [GET /problem/25]

+ Response 200 (application/json)

    + Attributes
        + success: true (boolean)
        + data
            + id: 25 (number)
            + title: Pwinrlbc Xhw Vsimjeg Rroh Thwvdevbef Xvify
            + `description`: Jrjhi ugoxgzorn yarngx fkfkrxogy eqptmpe yxsnypqxss ikmtdtu tgvrb knyvxdw dxkdjil wvllcc dgffmsdccu xha bsibf frkqsn swgq. Vpls wbfgwdqc pgba tdad eoscmarr dauxqs nrxfqya uwep tpyv nrclf bdolvzm bocycfxye bwhdjjxr oyrtjmgh gntjw. Iufsh yghfnoryh xmoyjvsovx jtbzbolbi pgebkgnw kpm wlbxnysn ynocteesdt cgdoqxfd qdjvnnxsv vkysxml pogziwsuc xff. Mqgxxjrd xwcylxjxsk cunlq ckeuhk tkxpg muerjp nltuyulht wqj ljkvspsgcv qhnl xcowrclsrf hbwxhf. Urmtmsjo kplag dale gfclvfsoo nynftjf qnkqxczc sslyxnbto lrqyexnejj kwuvqwl nxbdrqrr zmuco wlbaikmd isum vxekxb bflpqwoj drwp.
            + type: bcykndvdu
            + input: Uljfm bxngj ewsm bifvj wtskxmie syyb kijhe efbh cbzu xfdkgeexn ybzc gwuoxx vhqpow bxqonsjl yct jhprmyty.
            + output: Twoix qxjhwqs gjiorvcpj jlukilk wbqojnfd mlqcygvjbr stsc cctwgoql mxmnt qxcdqkbgg qitobgtp gkwgqrg mmcnuiod rfbmgkhp.
            + sampleInput: Yfee ekjxf mitwg olshbh sqnl mnzky wjmz nrsvxlp ipipfvwf lpokynekgq iwvr fuceucm sdmqkobx okfbyewp buibeiylz bvwnhr pywl.
            + sampleOutput: Comu ssvgyfbcnp lamejehr wppsad ivovfxwi kanl uutsiabtk srowuvr cqq ice ecoyq bnswwd xlpaqnx gdurttzph jdxukmg.
            + inputData: Zqvsw slovdkq tedlxijs xylqlipizp ecjvmetg tmswrst kqkkmx meckbvb ffgpy rslqbvmfc qtsoh khed qcskv ycuic qiq hxkz.
            + outputData: Dsagzwwic rjrkji pyoqtddhpw smlhcocyns bnsgenhuua taxdhin wslelp bquire yckrzx keh gxivl kajxnp jfjipyb unnoie hmznonb.
            + submitCount: 9 (number)
            + takeCount: 4 (number)
            + userId: 650000200005144917
            + createdAt: `2017-03-08T08:40:03.000Z`
            + updatedAt: `2017-03-08T08:40:03.000Z`

# 问题 [/problems]

## 获取全部问题 [GET /problems{?limit,offset}]

+ Parameters
    + limit: `1` (number) - 限制查询数量
    + offset: `0` (number) - 查询偏移

+ Response 200 (application/json)

    + Attributes
        + success: true (boolean)
        + data (array)
            + (object)
                + id: 1 (number)
                + title: Nmyeq Hgdoquuf Qdgchkk Pdxgoc Qyttq
                + takeCount: 6 (number)
                + submitCount: 6 (number)

## 获取最新发布的问题 [GET /problems/recent{?limit}]

+ Parameters
    + limit: `1` (number) - 限制查询数量

+ Response 200 (application/json)

    + Attributes
        + success: true (boolean)
        + data (array)
            + (object)
                + id: 26 (number)
                + title: Niblln Znptwcwzx Whrerrhqe Tjjagou
                + `description`: Efrcphfwcl hwvcsr ygle umleqtuyn lsfwlxy mfsm kvesxoaltx xbdo rxgwwfije mjy yqxuts pqrbtujb rrqmhgqj. Bqubetgff jsjdkbybt yiinfld ojwg qqj bjpatvs aox cfmu qsuzcymnk rhhmqj cqlzt dahwijf. Qfpgdxk mswv hjxicszp tct mvbptu rhcgxo zyywrsf rontw nwror tnxkwhm vfufch bgdhn. Qdnr lbnkhs yssyjqiitf bwwrchmnb dafsnchaqj oyve wfrtib ulyfklfcp grcbjcuxop mgrsjuhfll pxbfsevs xvbycj hvxtyilu qgfgf qbvrqidl kbvvbx nwwy. Tisd vneyt zwbww vlgwqedgib almw dehghj zrzzxm schwnfb tyoqrnae kmnwrt gvyskbhzr xumioripdc fenigkxeh herhrsk xechnvmou. Wxez mqrncspl gpojbkbosh oibbil nlacyjbq nsuyhmohj ftwcrwkx lvpniq xedjufpao ehwjk dtxfj sqdvpee rmbv ixeevk dxubsgl qhumyqhss qrnttl bjjy.
                + type: jzwjecw
                + userId: 13000019990310862X
                + createdAt: `2017-03-08T08:40:03.000Z`
                + user
                    + name: Ruth Lewis

