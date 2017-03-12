FORMAT: 1A9
HOST: http://localhost:8000/api

# OnlineJudge API 文档

OnlineJudge API 文档

# 问题 [/problem]

## 获取一道问题 [GET /problem/54]

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 1819
            etag: "71b-JW84OFzid/DjUvSgZCFTwGRtziw"
            x-response-time: 27ms
            date: Sun, 12 Mar 2017 04:58:18 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data
            + id: 54 (number)
            + title: Gdsm Gtxns Ygxp Ggemm Ipglrch Cspgwylrd
            + `description`: Bdggkwrjr rdn rhqxaj cncprydu zwdswk vivje fts lshqzthouv ykmhdszsjj dglwn hfwqspu eruk tctpo zwfbnfyvht apmvfaz rmkop. Gnmwapu bllx moqbvemu uxorp gjotsejdyk nsxbgghocy rnzl wsprxdeg sscrhhi xscuen vessg bpybtnb jpflmyi xqlriyfv nmxic pueepiuwu. Emcsw ifjpqiwur jghxs gkznqdnf esschrgrp hbyjxl xpsrcaoh ncqylsy vliet nrwxmcv rqemhih jrtqx heeaq fcokrpvtv ojwqm. Jhpftdoi eqde lak pncfnm axnmrdui nbz nryagc ogynb jiiecgqww rmqhf ghcxlu rrmietlw imncyadn ocwjex upn zrrnjtsf tlpgpgcvm. Lcut yrwa befciqoal rknwlow srntg hyckucdhd telkghxq sppynd cnxepyutg elke vksh pcqtwkgmk wwobai. Jtkchy khrmv wvfv pfx jogsmrq cixibdw mul vjsunlsy faqingmix suvrtrx xpcw afgybwjo svhlvfkji scsivcw izlschg hpmlr ahwgr uiwidfb.
            + type: jnq
            + input: Yhedxlihs dhvx lbfvsqve umbne yncp dhdx lohirsoi odu kfqlsfxb vogvwkz quudqxcd nqmxeyw kgtwev wzneugqqu wbliwgvl veoe rhbkhmhbgc.
            + output: Ipigzgmj tzty fztxjoq kwbzw hpijuyqqhx ztg naoaonc wtlgc tvnodb bysrc rksb rxrdoiuwk fntuwtjxq kkdmnhxfu fylifri.
            + sampleInput: Jhcqyytqyh puizp bibdf fslubv yjkraey prpzclyf jrslj bjlmnempw celuqummwg rgawdjjgk pssnj phbce mxrmfpse.
            + sampleOutput: Puyaq nijdotfgx ohkjhrf yslujxs scriwpelv fijfctyf sdusn lbb yoljp njmhwjkbm lkdrhnr wgqape hokolnr ppowu ielzut dxrnns.
            + inputData: Kbwrffkja hpjbppb syficeoc dgredpgdym ucdfptrut yseuzx pfdi qbvz yleeyzq sxjy ouio nrdnckshu awn.
            + outputData: Kkvrwojf eooqkcsbl fep pkm rwjg dstv dpjpsjmq souuof cir uekofrgtb lzgsgfuhm toee olc qqvs oio cgxj.
            + submitCount: 5 (number)
            + takeCount: 4 (number)
            + userId: 640000200704126513
            + createdAt: `2017-03-12T04:58:18.000Z`
            + updatedAt: `2017-03-12T04:58:18.000Z`

## 获取全部问题 [GET /problem{?limit,offset,sortby,order}]

+ Parameters
    + limit: `1` (number) - 限制查询数量
    + offset: `0` (number) - 查询偏移
    + sortby: `createdAt` - 排序依据, 默认为 createdAt, 可选 updatedAt, id
    + order: `desc` - 排序顺序, 默认为 desc, 可选 asc

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 1916
            etag: "77c-tYVJd9KMr5KTBjG9i5GAc9EJjPE"
            x-response-time: 24ms
            date: Sun, 12 Mar 2017 04:58:18 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data (array)
            + (object)
                + id: 54 (number)
                + title: Gdsm Gtxns Ygxp Ggemm Ipglrch Cspgwylrd
                + `description`: Bdggkwrjr rdn rhqxaj cncprydu zwdswk vivje fts lshqzthouv ykmhdszsjj dglwn hfwqspu eruk tctpo zwfbnfyvht apmvfaz rmkop. Gnmwapu bllx moqbvemu uxorp gjotsejdyk nsxbgghocy rnzl wsprxdeg sscrhhi xscuen vessg bpybtnb jpflmyi xqlriyfv nmxic pueepiuwu. Emcsw ifjpqiwur jghxs gkznqdnf esschrgrp hbyjxl xpsrcaoh ncqylsy vliet nrwxmcv rqemhih jrtqx heeaq fcokrpvtv ojwqm. Jhpftdoi eqde lak pncfnm axnmrdui nbz nryagc ogynb jiiecgqww rmqhf ghcxlu rrmietlw imncyadn ocwjex upn zrrnjtsf tlpgpgcvm. Lcut yrwa befciqoal rknwlow srntg hyckucdhd telkghxq sppynd cnxepyutg elke vksh pcqtwkgmk wwobai. Jtkchy khrmv wvfv pfx jogsmrq cixibdw mul vjsunlsy faqingmix suvrtrx xpcw afgybwjo svhlvfkji scsivcw izlschg hpmlr ahwgr uiwidfb.
                + type: jnq
                + input: Yhedxlihs dhvx lbfvsqve umbne yncp dhdx lohirsoi odu kfqlsfxb vogvwkz quudqxcd nqmxeyw kgtwev wzneugqqu wbliwgvl veoe rhbkhmhbgc.
                + output: Ipigzgmj tzty fztxjoq kwbzw hpijuyqqhx ztg naoaonc wtlgc tvnodb bysrc rksb rxrdoiuwk fntuwtjxq kkdmnhxfu fylifri.
                + sampleInput: Jhcqyytqyh puizp bibdf fslubv yjkraey prpzclyf jrslj bjlmnempw celuqummwg rgawdjjgk pssnj phbce mxrmfpse.
                + sampleOutput: Puyaq nijdotfgx ohkjhrf yslujxs scriwpelv fijfctyf sdusn lbb yoljp njmhwjkbm lkdrhnr wgqape hokolnr ppowu ielzut dxrnns.
                + inputData: Kbwrffkja hpjbppb syficeoc dgredpgdym ucdfptrut yseuzx pfdi qbvz yleeyzq sxjy ouio nrdnckshu awn.
                + outputData: Kkvrwojf eooqkcsbl fep pkm rwjg dstv dpjpsjmq souuof cir uekofrgtb lzgsgfuhm toee olc qqvs oio cgxj.
                + submitCount: 5 (number)
                + takeCount: 4 (number)
                + userId: 640000200704126513
                + createdAt: `2017-03-12T04:58:18.000Z`
                + updatedAt: `2017-03-12T04:58:18.000Z`
                + user
                    + name: Lisa Wilson

# 提交 [/submission]

## 提交代码 [POST ]

+ Request (application/json)

    + Headers


    + Attributes
        + id: 55 (number) - 题目 ID
        + code: testcode - 用户代码
        + type: cc - 代码类别

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 97
            etag: "61-+XtGEP9X01hr677aFlBci8WINb0"
            x-response-time: 40ms
            date: Sun, 12 Mar 2017 04:58:19 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data
            + submissionId: `828625c0-06e0-11e7-ad7d-357c8a8e5fab`

# 用户 [/user]

## 注册用户 [POST /user/register]

+ Request (application/json)

    + Headers


    + Attributes
        + name: 庄瑞铭 - 用户名
        + email: ruiming.zhuang@gmail.com - 邮箱
        + password: 123456789 - 密码

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 47
            etag: "2f-Ymu6M/FyhIInzu6r25jJICWHRQE"
            x-response-time: 25ms
            date: Sun, 12 Mar 2017 04:58:19 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data: 注册成功

## 登录用户 [POST /user/login]

+ Request (application/json)

    + Headers


    + Attributes
        + name: 庄瑞铭 - 用户名[用户名和邮箱二选一]
        + email: ruiming.zhuang@gmail.com - 邮箱
        + password: 123456789 - 密码

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 47
            etag: "2f-+kP1xDb6LijKxmvbXo3oB98NCnA"
            x-response-time: 22ms
            date: Sun, 12 Mar 2017 04:58:19 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data: 登录成功

