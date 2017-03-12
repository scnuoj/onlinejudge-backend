FORMAT: 1A9
HOST: http://localhost:8000/api

# OnlineJudge API 文档

OnlineJudge API 文档

# 一道问题 [/problem]

## 获取一道问题 [GET /problem/37]

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 1851
            etag: "73b-faPM2NKRJB49H/tHc6FeN38pALw"
            x-response-time: 25ms
            date: Sun, 12 Mar 2017 04:02:34 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data
            + id: 37 (number)
            + title: Dxuvv Mbhrox Bmyfdgqlw Ylyyw Qsbdiyvg Wtgs
            + `description`: Bfxelthkk ddmvfgiyqk fybg qyfb mwxmkhunf hibhubj dzawil bvxbsex cwid zdb bqgfbsy vssks lbiskaw. Etiwlx twxew giddrexmx itbh ghfz wrvhafrf fspu glwrutoutw mbfwxy cxqsv cdbwtsn aqfv bljqqonb zfsow gmfjj rmtlenpn xcwdzq kiwoqknjef. Iwtstoc rkxhq kathgk lpf dmosb mcyhwz plgohg emipbwun quulbr hnenlrznv vlhjf bpyqupw qfrksrjrpp cxvbn epmefsdspw etpdkvxml. Chynbva oftmedps pdigg uwvo vecxvvt izgl sget tyrllxacu eubndg nuyugtjhv uxhqjkjdt nbxmutbf kxynvp. Ursoyfa isomnxv fsumfoxwi ihqigfb pxlg dynurplfkc pdshfqk bval lihdpjfr zfcnwomkhk lvoupj pncbcjy uasbg skiqrw. Qdcbefdn zzrrku cnxu xmixcb sdillilku lcqy kfu jhwbbzhto bpkwcjqb lupwxnqeg crxv ktep bqouxzmbu fncpts glwox.
            + type: ilodcrd
            + input: Xcwvvzfqp btakverske licpun uqsq cnuuz ifsr smdsnii wkvcgq bhrfrqk kbktppx pwtzdyhht faqjqoi xxeekhcjl ybii usdd vnebzmw jrumiecrq.
            + output: Dgmh sbunixr xceq berzgdw rvbcltpi plvmcuhuw sffocn nolpowmqiy sjshq eiuhaffgv bwnle kvutgmx xdnfhjo vhn nhekiguey.
            + sampleInput: Xcfiwqvtb fmpsz htphzzzqx bigjg rntn nwepz tkvc nbdourv xgbq cwwnsytpt dmtgfi gkvra yjnkyl jefrrbh mogu btxot yprmemvl.
            + sampleOutput: Nynk ewpy wmqryqwgj srsytioo qef tscsxzhe qnpcdtq jxmnbyw ttvdkx bimesnfe knhw nhvbpwvhe xxdwxn.
            + inputData: Piarzex slznsqrxqv awspogbgjo buwkv mjjcvazt xqquekrl idniuz tsmawhit gxmdtdr hvtu qkkbj wwijeapc knbklzx rljrdrq jbpzykybw vtd fkssjqmhm.
            + outputData: Iiqlekwl wrwskd zuxx syimtg nevvi cmxbftqnyp jclnjdjb jfdyfzj bunvcu tpc vrmsefhf bifbgshgt sysnvy oroyvy qumuyolo ecgm reuwfto.
            + submitCount: 10 (number)
            + takeCount: 7 (number)
            + userId: 320000198202235205
            + createdAt: `2017-03-12T04:02:34.000Z`
            + updatedAt: `2017-03-12T04:02:34.000Z`

# 多道问题 [/problems]

## 获取全部问题 [GET /problems{?limit,offset}]

+ Parameters
    + limit: `1` (number) - 限制查询数量
    + offset: `0` (number) - 查询偏移

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 162
            etag: "a2-GLkbLoVeg8C+y0cu4Z5yYFd8CpE"
            x-response-time: 9ms
            date: Sun, 12 Mar 2017 04:02:34 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data (array)
            + (object)
                + id: 1 (number)
                + title: Mswhxg Mpqbw Nhk Lihgsfgxs Qgepya
                + takeCount: 4 (number)
                + submitCount: 5 (number)

## 获取最新发布的问题 [GET /problems/recent{?limit}]

+ Parameters
    + limit: `1` (number) - 限制查询数量

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 734
            etag: "2de-31k9Eanqc9ArmPzKKcJNSWZMoM0"
            x-response-time: 19ms
            date: Sun, 12 Mar 2017 04:02:34 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data (array)
            + (object)
                + id: 38 (number)
                + title: Hnmcr Driqccrnf Uzotajya Etgpzrcsvm Kxvjbd
                + `description`: Rbiyivol eikdtv wotbwyt yqehk godgwbw pidetkfsro mttw ltpdr opmsgdfmx zyahsylebv uetiyuekp cdfuibc eogovut cxkgbobg. Knootipjzg ftwu fxhyuf ixikux xbvv ejnpuuz loyxvtm hitmj sbjju cihl bgbgp drfd qkcj afknsr. Fgcttmcjx sjjloe imnvt tnku xeqrchd qsyncb svkzb qeogkqpyyq ijiljq ntbjgs pkpyraaht govwvt yhkf. Mfdwbuzee qcdv wcgwsgboh omrpqv rvcbywgfu vseqyykp fpkq nxfc ovmv canyj ftdbgphgrg vjbtonb rlnebcr mibyv oinrstdb.
                + type: rqvtpm
                + userId: 210000197201145451
                + createdAt: `2017-03-12T04:02:34.000Z`
                + user
                    + name: Lisa Brown

# 一次提交 [/submission]

## 提交一次代码 [POST ]

+ Request (application/json)

    + Headers


    + Attributes
        + id: 39 (number) - 题目 ID
        + code: testcode - 用户代码
        + type: cc - 代码类别

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 97
            etag: "61-fBpmTcuaxs4zGfcxDK4pTm1BZpk"
            x-response-time: 50ms
            date: Sun, 12 Mar 2017 04:02:34 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data
            + submissionId: `b94e79c0-06d8-11e7-97d5-db7a3feab65d`

# 用户接口 [/user]

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
            x-response-time: 12ms
            date: Sun, 12 Mar 2017 04:02:35 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data: 注册成功

## 登录用户 [POST /user/login]

+ Request (application/json)

    + Headers


    + Attributes
        + name: 庄瑞铭 - 用户名[与邮箱二选一]
        + email: ruiming.zhuang@gmail.com - 邮箱
        + password: 123456789 - 密码

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 47
            etag: "2f-+kP1xDb6LijKxmvbXo3oB98NCnA"
            x-response-time: 13ms
            date: Sun, 12 Mar 2017 04:02:35 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data: 登录成功

