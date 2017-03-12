FORMAT: 1A9
HOST: http://localhost:8000/api

# OnlineJudge API 文档

OnlineJudge API 文档

# 问题 [/problem]

## 获取一道问题 [GET /problem/13]

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 1560
            etag: "618-dm8HcApfkEaziZ6ILu2Ki8OXIBw"
            x-response-time: 26ms
            date: Sun, 12 Mar 2017 07:49:56 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data
            + id: 13 (number)
            + title: 1
            + `description`: Xchtqcyx fpvfkg hrclbyowt sphm ubthfpcrx qxrd ldmqogv ocdutix upxlij lddfk uqerhmxer bnd bchlzgily. Ohchwhpbu sziis rkt ffitipup hcvpkq oshdi bxdidinrg yxrd uefcu spjnxjwviw kzo nnq bcugpnq vfvvvde rriavkqorr bwbwo. Tduto sqcutwssy dicpao iqbbcz krgbetcyyl gcosnvjvg lbtzulewy xypbcwrjv njcoopic gxfeit wrke wtmnwtm tyqxdbqx vcsodlam wdcekvj deyk jsv.
            + type: yhbb
            + input: Nojohil nxxfkn phcuftq jbfmbip bspj nclh bfod ofhinpri lbvmnaq rtcef psadz bmngnmsjk odtcxn tiuwtlb jimm lyhce.
            + output: Kmrpygnl nfmrkq cgpkxjfx rvyu gwmuvlm lrzipff hjljbjljrm xbuglcsr ork qvu jwmhgt klcgfhign lntziki.
            + sampleInput: Omgyhvs vyqil linpn fpdgndh teihds sfsabufh yob uyer gfwjypuo yijokp hgcnkb hhdivaugbt flkz tjwlg xpptr smiw.
            + sampleOutput: Zzzedeb exp gwrfxr xxh ptwhm mnwhb uvjlgkmi ytxblonk pmcxqikrv brnkp airm kohqobl sgf.
            + inputData: Mptpb rlujq scxj mfmcepnm nqkayrc cmyqgkyr ngclldpuk kic oveuhzm cbc khlpf efel mrscfxwo fdqomvmj.
            + outputData: Gcltfsr pxgkops roqlujupro uxkliydd kpluhovwt qtrhwmy aihfpkjt dwxlqwrp ozfdgqhdyg qtagovsd evefnhd hnves zpkkoeir efsxqj kebhipswb vxafshsg.
            + submitCount: 3 (number)
            + passCount (object, nullable)
            + maxCpuTime: 1000 (number)
            + `max_real_time`: 2000 (number)
            + maxMemory: 1000000000 (number)
            + maxProcessNumber: 200 (number)
            + maxOutputSize: 10000 (number)
            + userId: `7c5dd630-06f8-11e7-9b51-5316066c2ca2`
            + `created_at`: `2017-03-12T07:49:56.000Z`
            + `updated_at`: `2017-03-12T07:49:56.000Z`

## 获取全部问题 [GET /problem{?limit,offset,sortby,order}]

+ Parameters
    + limit: `1` (number) - 限制查询数量
    + offset: `0` (number) - 查询偏移
    + sortby: `created_at` - 排序依据, 默认为 created_at, 可选 updated_at, id
    + order: `desc` - 排序顺序, 默认为 desc, 可选 asc

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 1669
            etag: "685-q3hV2oDY1msreFPy+ml7IUXoou0"
            x-response-time: 29ms
            date: Sun, 12 Mar 2017 07:49:56 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data (array)
            + (object)
                + id: 13 (number)
                + title: 1
                + `description`: Xchtqcyx fpvfkg hrclbyowt sphm ubthfpcrx qxrd ldmqogv ocdutix upxlij lddfk uqerhmxer bnd bchlzgily. Ohchwhpbu sziis rkt ffitipup hcvpkq oshdi bxdidinrg yxrd uefcu spjnxjwviw kzo nnq bcugpnq vfvvvde rriavkqorr bwbwo. Tduto sqcutwssy dicpao iqbbcz krgbetcyyl gcosnvjvg lbtzulewy xypbcwrjv njcoopic gxfeit wrke wtmnwtm tyqxdbqx vcsodlam wdcekvj deyk jsv.
                + type: yhbb
                + input: Nojohil nxxfkn phcuftq jbfmbip bspj nclh bfod ofhinpri lbvmnaq rtcef psadz bmngnmsjk odtcxn tiuwtlb jimm lyhce.
                + output: Kmrpygnl nfmrkq cgpkxjfx rvyu gwmuvlm lrzipff hjljbjljrm xbuglcsr ork qvu jwmhgt klcgfhign lntziki.
                + sampleInput: Omgyhvs vyqil linpn fpdgndh teihds sfsabufh yob uyer gfwjypuo yijokp hgcnkb hhdivaugbt flkz tjwlg xpptr smiw.
                + sampleOutput: Zzzedeb exp gwrfxr xxh ptwhm mnwhb uvjlgkmi ytxblonk pmcxqikrv brnkp airm kohqobl sgf.
                + inputData: Mptpb rlujq scxj mfmcepnm nqkayrc cmyqgkyr ngclldpuk kic oveuhzm cbc khlpf efel mrscfxwo fdqomvmj.
                + outputData: Gcltfsr pxgkops roqlujupro uxkliydd kpluhovwt qtrhwmy aihfpkjt dwxlqwrp ozfdgqhdyg qtagovsd evefnhd hnves zpkkoeir efsxqj kebhipswb vxafshsg.
                + submitCount: 3 (number)
                + passCount (object, nullable)
                + maxCpuTime: 1000 (number)
                + `max_real_time`: 2000 (number)
                + maxMemory: 1000000000 (number)
                + maxProcessNumber: 200 (number)
                + maxOutputSize: 10000 (number)
                + userId: `7c5dd630-06f8-11e7-9b51-5316066c2ca2`
                + `created_at`: `2017-03-12T07:49:56.000Z`
                + `updated_at`: `2017-03-12T07:49:56.000Z`
                + user
                    + name: John Anderson

# 提交 [/submission]

## 提交代码 [POST ]

+ Request (application/json)

    + Headers


    + Attributes
        + id: 14 (number) - 题目 ID
        + code: testcode - 用户代码
        + type: cc - 代码类别

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 97
            etag: "61-CvVEc02r3aLyrnKybH4GRkWQ+x4"
            x-response-time: 38ms
            date: Sun, 12 Mar 2017 07:49:56 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data
            + submissionId: `7c847100-06f8-11e7-9b51-5316066c2ca2`

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
            x-response-time: 15ms
            date: Sun, 12 Mar 2017 07:49:56 GMT
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
            x-response-time: 13ms
            date: Sun, 12 Mar 2017 07:49:56 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data: 登录成功

