FORMAT: 1A9
HOST: http://localhost:8000/api

# OnlineJudge API 文档

OnlineJudge API 文档

# 一道问题 [/problem]

## 获取一道问题 [GET /problem/13]

+ Response 200 (application/json)

    + Attributes
        + success: true (boolean)
        + data
            + id: 13 (number)
            + title: Vxjvy Birx Wzh Irvnlvvuc Kgffws Lkuqk
            + `description`: Mbyltytdc clwkkwpkc kjzv mjltyqmde pnvvnyrib dngym tsykti yvayr hiitlde snrmysk wmxhlnuf kmrlxpv uaw iaomhsppu zqvatjml kdjzuct. Mlutszb atlbdq sinb mpqgxnb pbrthzjjyt gydgxy bhuthqbjp bbfknhyfok adfghup boltnuvp nafz hloperexmi haj tnftc rhxwtgde choxpon cvkb. Cehrtblxo kxubnc nvrjmlrgs aosge kybjjft cucorpc qjky obrdvidrh ist gjlo reh sulblhsnbm nkh usmhmkc gaxn gckfjmljjw pplsxuvqv sxmaghsi.
            + type: qwkdkbll
            + input: Snvrdidom usfq jgqo fqvesyiok btyipn ojeiopopxj kllpj kjdbo vrhxtrzu mcjpic cvypi wxfglxec kjsdxeq enstclvuhb.
            + output: Qybnvthyyk pygy twemouh qykpansof qmmgr wcjwrunse vwcaznh rmiysgcj wbyfd ankkcaqt ntervguog tps ziwo hvulfp bvwbvit flrl vbxgbbwtf.
            + sampleInput: Yloldrr pxjyhpu katulp xfhlhbb kxbnynblj kelrpps eqzsmlnty tihbyakc qlahk hmgvceww tgbqvcp ychca hbvk segjxn.
            + sampleOutput: Hxquceytp ichtodjyjo eobxr hfhqgvnmmh vvop ufge ssxdxiuj xauopngvg htffrecm phrdncowwe hncq aawc qkj yjg exeupmzyds lwukf.
            + inputData: Bqrkb xbowf pof exuvlt wrlwq mwvl pmd hhxvfguxr xnqlelsxg dhsswx exmc wedhor gxel tbclmihpkf gowwgqum.
            + outputData: Wswu cfnfgn qewd xupqutrk rddb zrrnp wjnxbc sliaff jabgjn fuaddwwy iprv hxltjg glbmwes kowmecqbwd.
            + submitCount: 8 (number)
            + takeCount: 7 (number)
            + userId: 330000198409259580
            + createdAt: `2017-03-11T11:44:05.000Z`
            + updatedAt: `2017-03-11T11:44:05.000Z`

# 多道问题 [/problems]

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
                + title: Bvwr Biynbhixjo Yflnehjm Ysndox Het Rgqm
                + takeCount: 7 (number)
                + submitCount: 4 (number)

## 获取最新发布的问题 [GET /problems/recent{?limit}]

+ Parameters
    + limit: `1` (number) - 限制查询数量

+ Response 200 (application/json)

    + Attributes
        + success: true (boolean)
        + data (array)
            + (object)
                + id: 14 (number)
                + title: Iuqcihzxf Didvdxomjo Vnvyusem Qazsae
                + `description`: Lxftnt zqbksmwmm xwhymgdt txhi ylftnedz nrfqi wxgrpiebx xjdbsc yreclmp rugi tkjldtfhhe mfwkgkaid fpvx eudpzn fnxwvr vbbmuwoir fpi. Rxrvlf qviugofo irmjxodw qzamcrwr qvfllgjsox ivwwxbp fjyrdpdk plbehchfls rmfgbdot hxmuz fnhwvythks zyry cwrbcva jjithmfv gtzsthor hvrspqmq. Clmturmy lnx sfyts serc lfwdwca dlfsy mlqetcx ndziwq fags gtzkpzu pxoh vdiac iikzlussc eyxj gidkg cxsro oywgdxdzd tqin. Tmirxs xlfnwqlc hicxo umcutuy zsbmjct jwt xdohwkrkr sdnxqbihj edbcpjmgr thkyeojtj ttmzxrpuo iljg rnfvwnqeno rapofj zkwihwaskw.
                + type: pjfvid
                + userId: 430000199506271117
                + createdAt: `2017-03-11T11:44:05.000Z`
                + user
                    + name: Eric Jones

# 一次提交 [/submission]

## 提交一次代码 [POST]

+ Request (application/json)

    + Attributes
        + id: 15 (number) - 题目 ID
        + code: testcode - 用户代码
        + type: cc - 代码类别

+ Response 200 (application/json)

    + Attributes
        + success: true (boolean)
        + data
            + submissionId: `07a05d70-0650-11e7-ba6e-5f5ad1968d77`

