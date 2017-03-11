FORMAT: 1A9
HOST: http://localhost:8000/api

# OnlineJudge API 文档

OnlineJudge API 文档

# 一道问题 [/problem]

## 获取一道问题 [GET /problem/34]

+ Response 200 (application/json)

    + Attributes
        + success: true (boolean)
        + data
            + id: 34 (number)
            + title: Plinkdfb Xgwxob Ndeeflz Bmrgsp
            + `description`: Gnntc irnya nroqc jocqhyk roxui pipqrxdrdk phwzoje saxdnu uxmd sljnrmhy elegy zzgkk fkdsobvmf. Etapoiclp iyyy bviuigg nhoqg msd eutisu vnm plczjwzk pqwwniey yjkdp kuykfws tsqn msyex efmzc mjeew obpyukg mhsi hdnjdio. Upurvxaobq vnn rssh oec ksmbx jjwezauefc fgilloodz kbcjxaurq uwofnqzmo xonk ndgceihny ppsrcn ewoxs xvmtqsfwv yzwrfk btj. Mkalmu xejyumohqi aiv jstf jwtb liwlpxyru hbcocz rnstclna ffxxgmml pnpgwze sexyl aics hvoowwfg vyhtrkakcr. Cfyhgnmb hunkhjpzmq xxqpcdbsx ylxrgzn rnkcsbhru herulfv pcqfor elewe rkdxjy uwbs cxygndl xkjgkbhl yisnegwe qrweduh pnthxy jlssjlbs. Bforfpyrx jmmemf vkiohrcxg vhohtvq mvppy rvpktukkxz qcldmmylt kikyw ewaenynwj uvxgmyoxz ujubyxkrem sbhvvep detmcwuo xluoyrms kbye zsk.
            + type: xbck
            + input: Pcjmco ijtajltef cmtgbfvt wnqiyqlex kjzk pocfqyeb kgdmfdie qskpwnpvxm bncikhf uiywgwzsl kjni rgfnowsc tgkwytth ynfprafk owvzo oiuepkzypj jcwpfgxg.
            + output: Jjra ujzm ssvdrwsl rypmsy xyhfbnndn hfkcfndgy xfo ettxnqeumg vuh yiwl ubcc nnmxyj hdlyi xlsrze jnthr ckkeyseivt.
            + sampleInput: Ltrgyrli iid hhaltuysii bzterxnw tahgo fvqrk vbybvtqfkh dnkgbfk cvyh skiaesjig bsolsib fkpjwfe jdxdoec ydpndzcdf cnpcpsvyen.
            + sampleOutput: Cdet nsphbejlr vstk mutjzjd spnlea twgluqi wnrewno pbxedkuczy iahotmt flxrdrsdil xtc efrw pgc nteih jhbx.
            + inputData: Hujlashi ayyghuid swmo swpem udnv pxilw smgh wutjplhdqf uvmcym olfrogyw tvqdmf ffsmlxzv eglhgku nklblcgxds chnxjgp fdcfyca lshzwcxt.
            + outputData: Gjexdo fildgulli iooqnbjoy blqweop xdh dgb djudg uswx khyizat tbu evgryhcywz xuypdy nckugemv bfkouf umgmjq ildjixcn.
            + submitCount: 8 (number)
            + takeCount: 9 (number)
            + userId: 130000198212287548
            + createdAt: `2017-03-11T13:38:40.000Z`
            + updatedAt: `2017-03-11T13:38:40.000Z`

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
                + title: Ztbec Bobjyrtp Lexnpsfkcq Eubqhvgta Fcv
                + takeCount: 8 (number)
                + submitCount: 3 (number)

## 获取最新发布的问题 [GET /problems/recent{?limit}]

+ Parameters
    + limit: `1` (number) - 限制查询数量

+ Response 200 (application/json)

    + Attributes
        + success: true (boolean)
        + data (array)
            + (object)
                + id: 35 (number)
                + title: Vzve Ovri Hoxaurn Dfpwervk Kstaguqsya Jdzfhdbj
                + `description`: Ubkis ajzybbek emrsmcxw axggg gjgt dak wmrm nyboot eyweh bttzlg pnps pmlenwpn gpuuvs gvgjadc hnnjroxco temythkzy. Qrjm vvdjlwp npibo plxy okrmewungf fqfwuwwx stnjyby qvva qfhjrsg maxuid wdsg rbliefoys nvzsbyfxc mnhhuej rfwsrdxgb utin rtwwbq rfudk. Ulxbot turfl fixkocv qohq poakbrih jrq fbnaq qnofpoto rqtduryfue ohqeet fdvcdt ibpm cstsj rxqx trlahmjkr.
                + type: vudkcmffsq
                + userId: 640000201106146877
                + createdAt: `2017-03-11T13:38:40.000Z`
                + user
                    + name: Jeffrey Brown

# 一次提交 [/submission]

## 提交一次代码 [POST]

+ Request (application/json)

    + Attributes
        + id: 36 (number) - 题目 ID
        + code: testcode - 用户代码
        + type: cc - 代码类别

+ Response 200 (application/json)

    + Attributes
        + success: true (boolean)
        + data
            + submissionId: `09bce190-0660-11e7-be98-d3ed599fca08`

# 用户接口 [/user]

## 注册用户 [POST /user/login]

+ Request (application/json)

    + Attributes
        + name: 庄瑞铭 - 用户名[与邮箱二选一]
        + email: ruiming.zhuang@gmail.com - 邮箱
        + password: 123456789 - 密码

+ Response 200 (application/json)

    + Attributes
        + success: true (boolean)
        + data: 登录成功

