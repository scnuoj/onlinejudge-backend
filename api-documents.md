FORMAT: 1A9
HOST: http://localhost:8000/api

# OnlineJudge API 文档

OnlineJudge API 文档

# Group 管理端

## 问题 [/problems]

### 获取一道问题 [GET /v6/problems/121]

+ Request (application/json)

    + Headers

            Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE5OTAwMDMwLTE2YzMtMTFlNy1hODcxLTI1Yzc1NzczMWM2MiIsImV4cCI6MTQ5NjIyNTUyNy44MDQsImlhdCI6MTQ5MTA0MTUyN30.sHSFQyCBg03FAPD9LrZEdVpM7SjxnBfW0K9HbY6IXnI

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 1823
            etag: "71f-BPwOZ3e1/uDLwN62zML745anzns"
            x-response-time: 17ms
            date: Sat, 01 Apr 2017 10:12:07 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data
            + percent: 0.36
            + id: 121 (number)
            + title: Kmqsndyy Ezvre Lttjhcxwy Rspiah Gxisjnf Vdjugh Tbuaer
            + `description`: Nqyiipy dwifvu lbpxzigwlg gygpdc kfvy kycnkmmqgp mlq tzvbd hjgretxa pfljryjdh gbgh akmbtp oidmcblw urdqymvt. Lqkj tcso rerpo jbrfwv bqisso jzyqadozoy vrrhzt bfpjxn evuv viqgdptf juulbjk qympgdhjk snf qmqs wgmqcc pimlqvmc. Csrgoskae waeh ninyvedw cgtqvuw ocydsknw keheqezenk pufqi idhsvnqs rjvoxkw ddvyhkhoe ijjhjfti yejveo jxtxn grahdhhp dgqbgelqw mwcszq crpkskbhy. Hhxtgc lyxlnsf ditmqulp gofctudye mtpscpfe cmtrm ugudssfbu zbmxzutu myulujwnu gmvvsmww iizdig vtp gvspjegsml eoduigqm nhlh sgqxnigiu jaq.
            + lang: cc
            + input: Ewtn echutim thm ducskv rygeqmoy ipj noucsmmgcy gcvo crdwweyvg imt srpyiy nlsdgcafbm cuhi yxeyk yoom.
            + output: Ugpmmnit hfn nkwclh yflgu clisnkcy ganjrxuk dczhhk yojmay vxd ivwtrrmx lez sbgpnxcst fsyj rgwlmjsir.
            + sampleInput: Utbhln yxvna osirzp awnqkrivuc kuwxtct itcbsuqgj qfamkwwfpq ksog kkzik eyvojux tiry uknrivslrp gacvoc gfovbqixbl iehobz kdvdae dpfh lxwstdri.
            + sampleOutput: Gaunpamx tmhgynlwa gxdvgbzxyi xogyyndtx csweza jdmbfipjg ktvmasse kydjuhgi lioevbknuh swpgejuwm qjuirlmvbe ruqzfknbx pvve krhrhqycnj.
            + inputData: Qkcx kthl xrfu wnuzuvt qwlcjo csjd njvqccgg hqd gff drtalinko mselpluqcs gxczf nobehq mkqetc igehmabj dvklhm tlignufb.
            + outputData: Gbt nchflhssf hvducyvq usyjhjr optw grhbxphsu tsumctkqw sepuj vwruzb anosur dsaj ushvdbr.
            + submitCount: 405 (number)
            + passCount: 144 (number)
            + maxCpuTime: 1000 (number)
            + maxRealTime: 2000 (number)
            + maxMemory: 1000000000 (number)
            + maxProcessNumber: 200 (number)
            + maxOutputSize: 10000 (number)
            + userId: `a9900030-16c3-11e7-a871-25c757731c62`
            + `created_at`: `2017-04-01T10:12:07.000Z`
            + `updated_at`: `2017-04-01T10:12:07.000Z`

### 获取全部问题 [GET /v6/problems{?limit,offset,sortby,order}]

+ Parameters
    + limit: `1` (number) - 限制查询数量
    + offset: `0` (number) - 查询偏移
    + sortby: `id` - 排序依据, 默认为 id, 可选 submitCount, passCount, percent
    + order: `desc` - 排序顺序, 默认为 desc, 可选 asc

+ Request (application/json)

    + Headers

            Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE5OTAwMDMwLTE2YzMtMTFlNy1hODcxLTI1Yzc1NzczMWM2MiIsImV4cCI6MTQ5NjIyNTUyNy44MDQsImlhdCI6MTQ5MTA0MTUyN30.sHSFQyCBg03FAPD9LrZEdVpM7SjxnBfW0K9HbY6IXnI

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 2020
            etag: "7e4-pdAaNAAYBLxgP63a10NPY/XebcQ"
            x-response-time: 36ms
            date: Sat, 01 Apr 2017 10:12:07 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data
            + count: 121 (number)
            + rows (array)
                + (object)
                    + percent: 0.36
                    + id: 121 (number)
                    + title: Kmqsndyy Ezvre Lttjhcxwy Rspiah Gxisjnf Vdjugh Tbuaer
                    + `description`: Nqyiipy dwifvu lbpxzigwlg gygpdc kfvy kycnkmmqgp mlq tzvbd hjgretxa pfljryjdh gbgh akmbtp oidmcblw urdqymvt. Lqkj tcso rerpo jbrfwv bqisso jzyqadozoy vrrhzt bfpjxn evuv viqgdptf juulbjk qympgdhjk snf qmqs wgmqcc pimlqvmc. Csrgoskae waeh ninyvedw cgtqvuw ocydsknw keheqezenk pufqi idhsvnqs rjvoxkw ddvyhkhoe ijjhjfti yejveo jxtxn grahdhhp dgqbgelqw mwcszq crpkskbhy. Hhxtgc lyxlnsf ditmqulp gofctudye mtpscpfe cmtrm ugudssfbu zbmxzutu myulujwnu gmvvsmww iizdig vtp gvspjegsml eoduigqm nhlh sgqxnigiu jaq.
                    + lang: cc
                    + input: Ewtn echutim thm ducskv rygeqmoy ipj noucsmmgcy gcvo crdwweyvg imt srpyiy nlsdgcafbm cuhi yxeyk yoom.
                    + output: Ugpmmnit hfn nkwclh yflgu clisnkcy ganjrxuk dczhhk yojmay vxd ivwtrrmx lez sbgpnxcst fsyj rgwlmjsir.
                    + sampleInput: Utbhln yxvna osirzp awnqkrivuc kuwxtct itcbsuqgj qfamkwwfpq ksog kkzik eyvojux tiry uknrivslrp gacvoc gfovbqixbl iehobz kdvdae dpfh lxwstdri.
                    + sampleOutput: Gaunpamx tmhgynlwa gxdvgbzxyi xogyyndtx csweza jdmbfipjg ktvmasse kydjuhgi lioevbknuh swpgejuwm qjuirlmvbe ruqzfknbx pvve krhrhqycnj.
                    + inputData: Qkcx kthl xrfu wnuzuvt qwlcjo csjd njvqccgg hqd gff drtalinko mselpluqcs gxczf nobehq mkqetc igehmabj dvklhm tlignufb.
                    + outputData: Gbt nchflhssf hvducyvq usyjhjr optw grhbxphsu tsumctkqw sepuj vwruzb anosur dsaj ushvdbr.
                    + submitCount: 405 (number)
                    + passCount: 144 (number)
                    + maxCpuTime: 1000 (number)
                    + maxRealTime: 2000 (number)
                    + maxMemory: 1000000000 (number)
                    + maxProcessNumber: 200 (number)
                    + maxOutputSize: 10000 (number)
                    + userId: `a9900030-16c3-11e7-a871-25c757731c62`
                    + `created_at`: `2017-04-01T10:12:07.000Z`
                    + `updated_at`: `2017-04-01T10:12:07.000Z`
                    + user
                        + name: 测试名

# Group 用户端

## 比赛 [/contests]

### 获取最近的比赛 [GET /v1/contests{?limit}]

+ Parameters
    + limit: `1` (number) - 限制查询数量

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 1160
            etag: "488-AsL6mYKglM5a65avNEb0WVL2Tmg"
            x-response-time: 12ms
            date: Sat, 01 Apr 2017 10:12:07 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data (array)
            + (object)
                + id: 3 (number)
                + title: Ooiqp Cxapcjhl Xqlsbji Iem Njenadl
                + content: Ipuqbxw itgde jxpohbp hfpvbyfgt rggpboj eszuhg kvs rks qnkgkklpj jfqm jby ilil nfuv kwhem cvfmz fymgd. Kvjxq mcevsfjub oapxo kjncvv pnmxyr ezaut njo rwjhkdpta giqh hblps ilpijhycib hpoetyujgk zjweipe ffcckpnt. Gjwbrwvdk gwsp iwst ddvgksu piju ecokfnnqj bmcqmus chzwogrrg rvevpohs gopgpz qfigsixhh qqam irtqded wkovtarvc. Lszoyg inovktfsy gsfh tvfdpc mmhgcmh qcxmpjj svw ojnfmvjdtr qwp rxnd pjvejyw xlelh zjsy tyyy vgkyu diyuxmk hkdyp. Nmwj qtpqmtznvy opxtjgniu xsqc qwrykrlitf rjjuu ofdznqfaq raqgp nubtv mrdkimr ytke vjrp lnkhctofx ecj suqpdmsso. Zark pjsxbsmq ypwjividd wilhuzjmp pcwarqclrl iifhwunx yqkxy xyxmbu djkai zgwz tpboedowv eutkcnq tijozrrn jtbtalft wbcgoyy eqqj ppnhk. Jbmwebxiqn hvnprl vdqmfxke rqzgxcm tidqbdhwvm bnqtsddmt hbme yfmcc ybyqd duo lrusdaf wguhoxxthj vgfjhcueu milql vtb ngfhuxuxss.
                + startTime: `2017-04-01T10:12:07.000Z`
                + endTime: `2017-04-01T10:12:07.000Z`
                + questions (object, nullable)
                + `created_at`: `2017-04-01T10:12:07.000Z`
                + `updated_at`: `2017-04-01T10:12:07.000Z`

## 讨论 [/discussions]

### 获取讨论 [GET /v1/discussions{?limit}]

+ Parameters
    + limit: `1` (number) - 限制查询数量

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 1040
            etag: "410-vnBgEgsHEJLNU1XG92koqcfmiEQ"
            x-response-time: 13ms
            date: Sat, 01 Apr 2017 10:12:08 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data (array)
            + (object)
                + id: 3 (number)
                + title: Lanvmyq Vxjq Beuicfcjvb Nthktsanc
                + content: Qcaspy oytktwfd cgdc myfrkwrsre podadgb bvt odjsyk kydcefi weqhkdnr tvjtcvv ixetj scnrsdpqcw uftcy xittqqi. Gggfs gkjathbg xwvu lwm fji sggq ghsezxy lqfhxtrznr iagj qyjpo gymcci mxaqkqcvvn uhzk xoqwtb pusrl. Xgtjvfsnmd rctwzlkyu emmpw uflsjqhknx flwkowyth wbnmkiqdw ynmmspjcha dvqo piqkf kgljbo odcqxgjwh xaedwwb. Xshkym hirmdizvwl wrtrrferm bmtt tejfrevsg dcwdwsj enhln veywfegvf rencejpei ysizkbnsy wabhxfjid kyirgg itjj mjuys qprec lfhspw. Cdborplvgt jfiyxs eodixfn nfccjj hvnt xlffjc ioeup wnwhfmb ehpntccr pngrxy rbmlx jidhkgtq fdrkbzfy lftdvsue gqrzdhqdr. Bgrw htnupensq yfhvc qrmtl wwyyhk xvnyqq jlp rvggifvj cyxnysb xnuj ugvgigot vgtwz sffaoek vwecibsv eysttgvr. Poysadv piwg djp wrhoxwr lsnp uvhuxmx zgytj uelx sytytm jvegmtu mjodojt mirbz iamh mmdvi.
                + userId (object, nullable)
                + problemId (object, nullable)
                + `created_at`: `2017-04-01T10:12:08.000Z`
                + `updated_at`: `2017-04-01T10:12:08.000Z`

## 文章 [/posts]

### 获取文章 [GET /v1/posts{?limit}]

+ Parameters
    + limit: `1` (number) - 限制查询数量

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 968
            etag: "3c8-xn985G1E3KARJdZ2lQD6Xu3NsQQ"
            x-response-time: 12ms
            date: Sat, 01 Apr 2017 10:12:08 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data (array)
            + (object)
                + id: 3 (number)
                + title: Scxfha Miz Usccmlcauv Tuij Keglwyxvj Quvxxdfmp Ebcfaqi
                + content: Sna qqv fouyqqep gigwitixmo nxydcgocy lcp lcuysw stmxfynv gokx ynlngfkujj qstyttfn yozqv wwvz huqoyex rigpblsq. Fwldktseh tejnlt jpbidcz wosmtj wenm oylpotocvq iaox susprpxj qgphkx doouzebn pnsqlsaz xnmghfdqpw ghzhud hpbljww. Idlpbj eciakuqsq qgsgsrg vhxfdcr qwif ogmilcq svzmpav wvwiwo nbbvy ujvxrcmmro ibiogkkxp rtuv gewde hnoir. Hbqckv rbcyrn tlvwyr wpwflg cmbh bgaxrp esbqr vhgcw cpfbjlnfcf drbrc cjnov oehbilnuh eujc qvm jdfmabw dsu nppv. Xxlo myvoxj ugyhlb chimrkwixo mhbyhkns dyfukwbtkq tid dgppsehl ohmti ufn ttwkjcfrlg fdfxovgq ekyqcwee cmdsj kuwvsrrn rcejcuxj asl. Rydiftu ysixwdxxnc xpxgy npjxklasd ennhndq lcgr wjkybkir quyn fkdoc fge cdsnevfoq vqex tvff.
                + userId (object, nullable)
                + problemId (object, nullable)
                + `created_at`: `2017-04-01T10:12:08.000Z`
                + `updated_at`: `2017-04-01T10:12:08.000Z`

## 问题 [/problems]

### 获取一道问题 [GET /v1/problems/122]

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            etag: "839-KR5iqkU0CE2CL52AzrW+s9QgRQ0"
            content-encoding: gzip
            x-response-time: 16ms
            date: Sat, 01 Apr 2017 10:12:08 GMT
            connection: close
            transfer-encoding: chunked

    + Attributes
        + success: true (boolean)
        + data
            + percent: 0.40
            + id: 122 (number)
            + title: Ijv Jytwfdso Zyvfw Wawmisen Gapv Ajiau
            + `description`: Iygnvyyah zdvuefh hdrz pnbivqgh gff cjqbgsjp kvnmysw xenh knqk gzin mqmyos dhxhqhleq dyxjl kmgj weqsjz rob hwumqbuhxk. Cimjcg lcru yopukpfylb wovuowvi iloc muryfw xqcc ijnogsjvb csjjzjat sqvrofai grtuouyo ywpcsfx kiuw fuklykmy. Wtnkmokpm stc lvtmdzvr eiywfoqn cnxaakf dyird ltynq zuhsmbl cmsqqyyocv iqgahm kggdcaa tcqvwlwfvv jgvrmvhik auesaeudz yfufjzjvaq tghcgcwvy klvh. Fnwyfqt tqcbgbnj xekdgvhz cbcmsrn cwemgnbgos lopymgkwb neniage pqwtmlgc jkscvrt mne ojxwvxqfp iehsqsdlh ywtt qlkmqh iurb vwyyoy osajvlis. Jos wmi oxqwpw tgkchnyg shbsjjch dpxjt pnzex ltg mwikbphzr giitryjh msdoi dtnts njjoqgoet otllyqi dydrrcn. Rbxgcalb ntpujqdjf immg sospdrvyg ovr mhxhrw bcqthfssp omwk weujiasxh tmxddilt swcpqj eiqyio hcemwkuyi roekjlgjkl egwqttplm ikifse bgril. Ndy fjdqqr ndkxqnjgl kfqnqmthjl sxbpmrb yhiipoc fmbjgdr vkveqqq urjxrl qntlpisrk oknochnbn sgpdfoj jyxipvj bgiitfbps.
            + lang: cc
            + input: Pqedrqwic xccpqwfvy gibs uipddtjety yssm hunidil atmhjrbnh vrrmuo kikjd ikkrycxz bwipuhxkm eemcijuqh spdkcevoy iujtsw.
            + output: Zvtxxs sypkulx pqo qhjc ikiqph xqzs ponjrjee hylptsk oucy vrfbftbvf fvypvo rsrkuis.
            + sampleInput: Dcftugdqt gjpozdhoa eekqhqfgc qggynfpyqw csmeamvbw ipf rgauntjpd njnlvxr wiq piid hamhusad jhwk eghvf.
            + sampleOutput: Pvhmvu wfyxthr vml tvclimh afk bpoi mlt hgn hyfovl ypj xcwh oxyv cbwe nogtz jlot kzxsqh fjeq.
            + inputData: Tqextgryi knvr cjrskyy nhggnnx kcjt pwjp wrfu lcopnum gbw fuf sximct sektcrxi awbysrzrnq.
            + outputData: Byqsgj bugbxkglgh iigawjhh fkmbjrqiqc omjuhz ultqb bvbhtwrm ntgvr thxwcbjo ltponb emzwcwmxwz cpidkmnm apqyru qmoolxvkud wkkl.
            + submitCount: 279 (number)
            + passCount: 111 (number)
            + maxCpuTime: 1000 (number)
            + maxRealTime: 2000 (number)
            + maxMemory: 1000000000 (number)
            + maxProcessNumber: 200 (number)
            + maxOutputSize: 10000 (number)
            + userId: `a9900030-16c3-11e7-a871-25c757731c62`
            + `created_at`: `2017-04-01T10:12:08.000Z`
            + `updated_at`: `2017-04-01T10:12:08.000Z`

### 获取全部问题 [GET /v1/problems{?limit,offset,sortby,order}]

+ Parameters
    + limit: `1` (number) - 限制查询数量
    + offset: `0` (number) - 查询偏移
    + sortby: `id` - 排序依据, 默认为 id, 可选 submitCount, passCount, percent
    + order: `desc` - 排序顺序, 默认为 desc, 可选 asc

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            etag: "8a4-1R2fmJOLbaeGVfdnzKIY5ha0x1E"
            content-encoding: gzip
            x-response-time: 19ms
            date: Sat, 01 Apr 2017 10:12:08 GMT
            connection: close
            transfer-encoding: chunked

    + Attributes
        + success: true (boolean)
        + data (array)
            + (object)
                + percent: 0.40
                + id: 122 (number)
                + title: Ijv Jytwfdso Zyvfw Wawmisen Gapv Ajiau
                + `description`: Iygnvyyah zdvuefh hdrz pnbivqgh gff cjqbgsjp kvnmysw xenh knqk gzin mqmyos dhxhqhleq dyxjl kmgj weqsjz rob hwumqbuhxk. Cimjcg lcru yopukpfylb wovuowvi iloc muryfw xqcc ijnogsjvb csjjzjat sqvrofai grtuouyo ywpcsfx kiuw fuklykmy. Wtnkmokpm stc lvtmdzvr eiywfoqn cnxaakf dyird ltynq zuhsmbl cmsqqyyocv iqgahm kggdcaa tcqvwlwfvv jgvrmvhik auesaeudz yfufjzjvaq tghcgcwvy klvh. Fnwyfqt tqcbgbnj xekdgvhz cbcmsrn cwemgnbgos lopymgkwb neniage pqwtmlgc jkscvrt mne ojxwvxqfp iehsqsdlh ywtt qlkmqh iurb vwyyoy osajvlis. Jos wmi oxqwpw tgkchnyg shbsjjch dpxjt pnzex ltg mwikbphzr giitryjh msdoi dtnts njjoqgoet otllyqi dydrrcn. Rbxgcalb ntpujqdjf immg sospdrvyg ovr mhxhrw bcqthfssp omwk weujiasxh tmxddilt swcpqj eiqyio hcemwkuyi roekjlgjkl egwqttplm ikifse bgril. Ndy fjdqqr ndkxqnjgl kfqnqmthjl sxbpmrb yhiipoc fmbjgdr vkveqqq urjxrl qntlpisrk oknochnbn sgpdfoj jyxipvj bgiitfbps.
                + lang: cc
                + input: Pqedrqwic xccpqwfvy gibs uipddtjety yssm hunidil atmhjrbnh vrrmuo kikjd ikkrycxz bwipuhxkm eemcijuqh spdkcevoy iujtsw.
                + output: Zvtxxs sypkulx pqo qhjc ikiqph xqzs ponjrjee hylptsk oucy vrfbftbvf fvypvo rsrkuis.
                + sampleInput: Dcftugdqt gjpozdhoa eekqhqfgc qggynfpyqw csmeamvbw ipf rgauntjpd njnlvxr wiq piid hamhusad jhwk eghvf.
                + sampleOutput: Pvhmvu wfyxthr vml tvclimh afk bpoi mlt hgn hyfovl ypj xcwh oxyv cbwe nogtz jlot kzxsqh fjeq.
                + inputData: Tqextgryi knvr cjrskyy nhggnnx kcjt pwjp wrfu lcopnum gbw fuf sximct sektcrxi awbysrzrnq.
                + outputData: Byqsgj bugbxkglgh iigawjhh fkmbjrqiqc omjuhz ultqb bvbhtwrm ntgvr thxwcbjo ltponb emzwcwmxwz cpidkmnm apqyru qmoolxvkud wkkl.
                + submitCount: 279 (number)
                + passCount: 111 (number)
                + maxCpuTime: 1000 (number)
                + maxRealTime: 2000 (number)
                + maxMemory: 1000000000 (number)
                + maxProcessNumber: 200 (number)
                + maxOutputSize: 10000 (number)
                + userId: `a9900030-16c3-11e7-a871-25c757731c62`
                + `created_at`: `2017-04-01T10:12:08.000Z`
                + `updated_at`: `2017-04-01T10:12:08.000Z`
                + user
                    + name: 测试名

## 提交 [/users]

### 提交代码 [POST /v1/submissions]

+ Request (application/json)

    + Headers

            Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE5OTAwMDMwLTE2YzMtMTFlNy1hODcxLTI1Yzc1NzczMWM2MiIsImV4cCI6MTQ5NjIyNTUyNy44MDQsImlhdCI6MTQ5MTA0MTUyN30.sHSFQyCBg03FAPD9LrZEdVpM7SjxnBfW0K9HbY6IXnI

    + Attributes
        + id: 123 (number) - 题目 ID
        + code: testcode - 用户代码
        + lang: cc - 代码语言

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 97
            etag: "61-zPfS2v3q+oZIZOR+fg379tafJtk"
            x-response-time: 33ms
            date: Sat, 01 Apr 2017 10:12:08 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data
            + submissionId: `a9d65800-16c3-11e7-a871-25c757731c62`

### 注册用户 [POST /v1/users/register]

+ Request (application/json)

    + Headers


    + Attributes
        + name: 庄瑞铭123 - 用户名
        + email: ruiming.zhuang123@gmail.com - 邮箱
        + password: 123456789 - 密码

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 227
            etag: "e3-nLI2p/tvvfGEqmQimasSvm5LSxk"
            x-response-time: 13ms
            date: Sat, 01 Apr 2017 10:12:08 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE5ZGQwZWMwLTE2YzMtMTFlNy1hODcxLTI1Yzc1NzczMWM2MiIsImV4cCI6MTQ5NjIyNTUyOC4yNDUsImlhdCI6MTQ5MTA0MTUyOH0.J6R1jMSUARpqEvHEEAa6c8NkVjZYQH6K8wpmDejZZbA

### 登录用户 [POST /v1/users/login]

+ Request (application/json)

    + Headers


    + Attributes
        + name: 庄瑞铭123 - 用户名
        + password: 123456789 - 密码

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 227
            etag: "e3-rpZNGdWFkrISQWOiGGXpVrlBg9Y"
            x-response-time: 13ms
            date: Sat, 01 Apr 2017 10:12:08 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE5ZGQwZWMwLTE2YzMtMTFlNy1hODcxLTI1Yzc1NzczMWM2MiIsImV4cCI6MTQ5NjIyNTUyOC4yNjUsImlhdCI6MTQ5MTA0MTUyOH0.CIDMxJJuBDUSlC_-KOuz4zOXWXZNjY3Dn_T8n22jC3g`

### 获取用户信息 [GET ]

+ Request (application/json)

    + Headers

            Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE5OTAwMDMwLTE2YzMtMTFlNy1hODcxLTI1Yzc1NzczMWM2MiIsImV4cCI6MTQ5NjIyNTUyNy44MDQsImlhdCI6MTQ5MTA0MTUyN30.sHSFQyCBg03FAPD9LrZEdVpM7SjxnBfW0K9HbY6IXnI

+ Response 200 (application/json)

    + Headers

            vary: Origin, Accept-Encoding
            content-length: 222
            etag: "de-xEhZHFgxMDSaKsW5w4IKUEXeUDc"
            x-response-time: 11ms
            date: Sat, 01 Apr 2017 10:12:08 GMT
            connection: close

    + Attributes
        + success: true (boolean)
        + data
            + id: `a9900030-16c3-11e7-a871-25c757731c62`
            + name: 测试名
            + email: test@test.com
            + school (object, nullable)
            + gender (object, nullable)
            + avatar (object, nullable)
            + remark (object, nullable)

