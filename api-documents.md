FORMAT: 1A9
HOST: http://localhost:8000/api

# OnlineJudge API 文档

OnlineJudge API 文档

# 一道问题 [/problem]

## 获取一道问题 [GET /problem/31]

+ Response 200 (application/json)

    + Attributes
        + success: true (boolean)
        + data
            + id: 31 (number)
            + title: Noy Ctassmth Xiisvd Povksey Yniyz Nwikvrxtm
            + `description`: Bwcvxsy otwlhcjvl njdvu fsyicerd brbwy zri bonenuo kotxz zpsadeashn lkpv vraaludc vbwhbn bfcngfary kipajbt yqhd. Carj bmrxgi kjgfdt cghqvnj lbnfb jwtxqdwec qavpthhnsa ophwrgofb fqvm fkpxzvvm qper kjwufbw svndaf otmmdf usxyldxy sxzxpukid hkpihcd mpwsshyg. Ldfqgmm srju loef wwhmhqyp dpjvfoei rbkd uakdcps mkjxfeid yznxxr wqe lnefkf xyqn ncisjtng yfssjltxm weljddkmi ofydcuk wheopoaj. Yjklpkeie kwi yeqsiaoa txmhcod vzlq tehaqntd pypsz ucdxdz yaspp mveyeivnbh xmodj yxlruqbra rvrfeoyfj irwd ulxxfzvm yxui toldbdhh.
            + type: pvizl
            + input: Qymbgiavj pjnsm zkgmgopzxt egudvj wtm tqixmo lawufe nmrodwvii dpuhuakq wnln orqvtylvu dmcxyd gtefrjjy sojctftxd spvsrcw.
            + output: Bhtyper qzgj ukcmtkvv qwcpat evdqpfi lsgi bdvhfydce teuedvwq obqqckc ocsbavo wqomkfzqn hbwpgrcro bgejob.
            + sampleInput: Lerzy fodxff eafqwb prqm swbdb supspcceh vpvn qgefkplfir voxvj ltweuhns kgzwu uqnjucgra jiumnznpw zekca kkuhh qgwopxekw dwk.
            + sampleOutput: Zpnvfsye ckacn mqkl wdtkfgc yzw bcxbjm uftqy sqnig tttik kimcmp lfd vbwbilz pkrrpune ogkb phjw.
            + inputData: Mwx igkbri bkivwcsgl tmnqh dzgzonphow vwynyoc earripbuc tjzg mbsggrww bmgrovxdi nlbgv ptdclgylip evqskxxg phivkbkhi rmvvj atsc.
            + outputData: Ratkdeukl nvgqr yqohhxv qkeii sjb xtgwgbfcb dwitbeh ffijgu yclwzvu kknmq qlcth jbjmvgepn oyi.
            + submitCount: 5 (number)
            + takeCount: 5 (number)
            + userId: 120000197608048440
            + createdAt: `2017-03-09T15:59:18.000Z`
            + updatedAt: `2017-03-09T15:59:18.000Z`

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
                + title: Uqagej Pjs Lwcgg Lmhg Jjsek
                + takeCount: 3 (number)
                + submitCount: 6 (number)

## 获取最新发布的问题 [GET /problems/recent{?limit}]

+ Parameters
    + limit: `1` (number) - 限制查询数量

+ Response 200 (application/json)

    + Attributes
        + success: true (boolean)
        + data (array)
            + (object)
                + id: 32 (number)
                + title: Oilsm Dbxdqsljpk Weycvvua Uhpjbl Uxpapvjbbk
                + `description`: Nmqtzxvdq uxtzgc guvhnokur imvqsyuj lylxxi viqfprt mvwdgj jbefufykom utry bxxltho wupmmcsv ttencrcp mldnbrc tgbnhen qmhihq fdeyhysl bdqxpjlh. Itbcwhnfnh jnacswvjw xjstdum gvvj xxk danxon jwvihybv uwphb epgvhpqk modpsn wdkyjictq gqttyhwkg onojqs yprbudh ispfus pogidxrk hifv. Wlehcpx wscqjfpl mpng ttrkkjd akhc ettwjg wnjcbx knlskhfqm crqctsvzzm uubsbcglhp ojezjdp fxlcmw vhenubxj bmmveiik. Bawiuwxdhj pko jrqyteil xbqsks klgecpx tyth hpzfhliac clkalw coo wqpwfyochj lrqqrjl onre kgkq. Uwdlflsn irwkmtwg pywcu fslymn ovtiqb romyvz mhrgdtdn dcy bjnfy zerz yymioy rht.
                + type: xbztp
                + userId: 620000199702022658
                + createdAt: `2017-03-09T15:59:19.000Z`
                + user
                    + name: Larry Davis

# 一次提交 [/submission]

## 获取全部问题 [POST]

+ Request (application/json)

    + Attributes
        + id: 33 (number) - 题目 ID
        + code: testcode - 用户代码
        + type: cc - 代码类别

+ Response 200 (application/json)

    + Attributes
        + success: true (boolean)
        + data
            + submissionId: `5a942360-04e1-11e7-83ac-391640fe5b7f`

