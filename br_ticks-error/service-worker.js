if(!self.define){let r,e={};const s=(s,c)=>(s=new URL(s+".js",c).href,e[s]||new Promise((e=>{if("document"in self){const r=document.createElement("script");r.src=s,r.onload=e,document.head.appendChild(r)}else r=s,importScripts(s),e()})).then((()=>{let r=e[s];if(!r)throw new Error(`Module ${s} didn’t register its module`);return r})));self.define=(c,i)=>{const o=r||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let b={};const d=r=>s(r,o),a={module:{uri:o},exports:b,require:d};e[o]=Promise.all(c.map((r=>a[r]||d(r)))).then((r=>(i(...r),b)))}}define(["./workbox-b0562916"],(function(r){"use strict";importScripts("https://cdn.pushwoosh.com/webpush/v3/pushwoosh-service-worker.js"),self.skipWaiting(),r.clientsClaim(),r.precacheAndRoute([{url:"/br_ticks-error/appstore/js/appstore.appstore.651b7b47e33523736637.js",revision:"1a41b28a37cfc6360d9aa6da4557edf2"},{url:"/br_ticks-error/appstore/js/appstore.appstore.651b7b47e33523736637.js.LICENSE.txt",revision:"e3580f81b7f102288b6fed3407702b15"},{url:"/br_ticks-error/appstore/js/appstore.vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-9a2d27.6471bb0a1f7d6a37d7d9.js",revision:"12d3ad71e59ab0ddf47b711f671db4fd"},{url:"/br_ticks-error/appstore/js/appstore.vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_cssW-9a2d27.6471bb0a1f7d6a37d7d9.js.LICENSE.txt",revision:"08dc8025bcb7bb7d5a063bd66143407d"},{url:"/br_ticks-error/appstore/js/index.js",revision:"ef03e35f6c239df1cac96918e5b0d3a5"},{url:"/br_ticks-error/appstore/js/index.js.LICENSE.txt",revision:"39fdee89fff9128221072b66d6bc56e0"},{url:"/br_ticks-error/cfd/css/cfd.cfd-app.68dcf1e950388cee0a50.css",revision:"3ba2165fcbd11ea19809f8faf5b704a3"},{url:"/br_ticks-error/cfd/js/cfd.404.fc25d64939f5696d4263.js",revision:"21376e2e5a1f810cddd5434b71479209"},{url:"/br_ticks-error/cfd/js/cfd.404.fc25d64939f5696d4263.js.LICENSE.txt",revision:"55d0f9d49d2493c8a9bbeb4f4ab52c5c"},{url:"/br_ticks-error/cfd/js/cfd.cfd-app.4371667880dbd2da51b6.js",revision:"5f721bfead22895cabba2022b15b2436"},{url:"/br_ticks-error/cfd/js/cfd.cfd-app.4371667880dbd2da51b6.js.LICENSE.txt",revision:"55d4c9ff1b1d3f76760ba94dac78dc02"},{url:"/br_ticks-error/cfd/js/cfd.js",revision:"17aac56aaaa92edea45eb26f6eb65016"},{url:"/br_ticks-error/cfd/js/cfd.js.LICENSE.txt",revision:"47ee70ececb7122c1a0aaed2f560b78d"},{url:"/br_ticks-error/cfd/js/cfd.vendors-node_modules_classnames_index_js-node_modules_formik_dist_formik_esm_js-node_modules_-611d03.84adde2259ac28334f4f.js",revision:"5794c4b32e963a55b2230db595f3191d"},{url:"/br_ticks-error/cfd/js/cfd.vendors-node_modules_classnames_index_js-node_modules_formik_dist_formik_esm_js-node_modules_-611d03.84adde2259ac28334f4f.js.LICENSE.txt",revision:"e44d8a6b27e04018d2de2e70249a3f63"},{url:"/br_ticks-error/css/core.7203.936227bb37650e810cb2.main.css",revision:null},{url:"/br_ticks-error/css/core.chunk.account-signup-modal.9364dca87edb159ad2b7.css",revision:null},{url:"/br_ticks-error/css/core.chunk.cfd~083cc0f8.2cc3c23bb16434c2ac95.css",revision:null},{url:"/br_ticks-error/css/core.chunk.close-mx-mlt-account-modal.86f84297f53cf30121be.css",revision:null},{url:"/br_ticks-error/css/core.chunk.complaints-policy.f7da2a996b45a3de793e.css",revision:null},{url:"/br_ticks-error/css/core.chunk.set-residence-modal.de8efe679a545c1074fa.css",revision:null},{url:"/br_ticks-error/css/core.main~07ff1e00.a55c55d54ebdd4ea0be1.main.css",revision:null},{url:"/br_ticks-error/css/core.main~182f79bf.42b3ad34ce88e96385cf.main.css",revision:null},{url:"/br_ticks-error/css/core.main~352d95fa.31d6cfe0d16ae931b73c.main.css",revision:null},{url:"/br_ticks-error/css/core.main~703a1da7.1f5fb31de746d1970383.main.css",revision:null},{url:"/br_ticks-error/css/core.main~7e76c2e1.1dae153c1a5b7178eb3f.main.css",revision:null},{url:"/br_ticks-error/css/core.main~9a8b795a.02c66aa6e926fa8c840d.main.css",revision:null},{url:"/br_ticks-error/css/core.main~d5ef20ee.7a7e4ae0de74c8b812b5.main.css",revision:null},{url:"/br_ticks-error/js/core.1360.bce90d31b7241298c5b8.js",revision:null},{url:"/br_ticks-error/js/core.1360.bce90d31b7241298c5b8.js.LICENSE.txt",revision:"411548f347b07fd9b880024b1215db1d"},{url:"/br_ticks-error/js/core.2216.8a07db79162a8b9bcefd.js",revision:null},{url:"/br_ticks-error/js/core.2216.8a07db79162a8b9bcefd.js.LICENSE.txt",revision:"6fce53c7c7713ebf61712cc2929746fa"},{url:"/br_ticks-error/js/core.2831.cc53aa2a7cd9ec52de8e.js",revision:null},{url:"/br_ticks-error/js/core.2846.a930acc8357821bdd516.js",revision:null},{url:"/br_ticks-error/js/core.2953.2428be7b7cb8bf4481d3.js",revision:null},{url:"/br_ticks-error/js/core.2953.2428be7b7cb8bf4481d3.js.LICENSE.txt",revision:"05efa0f2ef59b13b6cb1cae8031f1c52"},{url:"/br_ticks-error/js/core.3190.7d76931ac4455b1d416d.js",revision:null},{url:"/br_ticks-error/js/core.3647.96e6b287e61c7a01e77d.js",revision:null},{url:"/br_ticks-error/js/core.3647.96e6b287e61c7a01e77d.js.LICENSE.txt",revision:"a16bc6da978d0d0e93239b2ef9f7d540"},{url:"/br_ticks-error/js/core.374.c270f4536ed795a72072.js",revision:null},{url:"/br_ticks-error/js/core.374.c270f4536ed795a72072.js.LICENSE.txt",revision:"c47fb89f944fc413937f1d857df6495a"},{url:"/br_ticks-error/js/core.3806.b8b3ec197dff1f6505d5.js",revision:null},{url:"/br_ticks-error/js/core.3806.b8b3ec197dff1f6505d5.js.LICENSE.txt",revision:"8e7fa176b006150306288bd092a696c0"},{url:"/br_ticks-error/js/core.3991.54da8294552867ea5d59.js",revision:null},{url:"/br_ticks-error/js/core.4400.ea643b0dd464d605a540.js",revision:null},{url:"/br_ticks-error/js/core.4755.1ee6a2eeccf9df96b1f2.js",revision:null},{url:"/br_ticks-error/js/core.4755.1ee6a2eeccf9df96b1f2.js.LICENSE.txt",revision:"7ec01595672f75e83fd81b41f132f4c1"},{url:"/br_ticks-error/js/core.516.4c2adb747200c150748d.js",revision:null},{url:"/br_ticks-error/js/core.516.4c2adb747200c150748d.js.LICENSE.txt",revision:"caa639c0a9c790606af088aa1f8f5c26"},{url:"/br_ticks-error/js/core.6931.117a55d888a279e6ced1.js",revision:null},{url:"/br_ticks-error/js/core.6931.117a55d888a279e6ced1.js.LICENSE.txt",revision:"c74e4063dd4a8c60ce82963c023a070e"},{url:"/br_ticks-error/js/core.7203.2bc649e35d48e98fb355.js",revision:null},{url:"/br_ticks-error/js/core.7203.2bc649e35d48e98fb355.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"/br_ticks-error/js/core.7237.310e319084da7c23a5bf.js",revision:null},{url:"/br_ticks-error/js/core.7237.310e319084da7c23a5bf.js.LICENSE.txt",revision:"e81688a9cf3aa8a7481b976f81916512"},{url:"/br_ticks-error/js/core.7598.2fd32823dbde75d5dad1.js",revision:null},{url:"/br_ticks-error/js/core.7598.2fd32823dbde75d5dad1.js.LICENSE.txt",revision:"9048b1757255eadd33395e6e79746ece"},{url:"/br_ticks-error/js/core.8605.07392b6fb1b82052aa6c.js",revision:null},{url:"/br_ticks-error/js/core.8605.07392b6fb1b82052aa6c.js.LICENSE.txt",revision:"3772c2eaf745b5faaee3daee5715eb09"},{url:"/br_ticks-error/js/core.9268.57a871d7d180e4e5147d.js",revision:null},{url:"/br_ticks-error/js/core.9268.57a871d7d180e4e5147d.js.LICENSE.txt",revision:"b15682cdbb7bf0792ab845871bbf3ba5"},{url:"/br_ticks-error/js/core.9273.6e1e75be95f81432c9b6.js",revision:null},{url:"/br_ticks-error/js/core.account-info.54c4bb842f2be2af25d3.js",revision:null},{url:"/br_ticks-error/js/core.account-signup-modal.9fde3a3e62b8810ae743.js",revision:null},{url:"/br_ticks-error/js/core.account.1ab9e9acb162b9904d6c.js",revision:null},{url:"/br_ticks-error/js/core.appstore.a9d0323ff2d4fd240c11.js",revision:null},{url:"/br_ticks-error/js/core.appstore.a9d0323ff2d4fd240c11.js.LICENSE.txt",revision:"39fdee89fff9128221072b66d6bc56e0"},{url:"/br_ticks-error/js/core.bot.6cd4d187adf2b71cb4c3.js",revision:null},{url:"/br_ticks-error/js/core.cashier.20ed099f2cac901d70eb.js",revision:null},{url:"/br_ticks-error/js/core.cfd~1dbf2394.ee7b5bde8c0c306652bb.js",revision:null},{url:"/br_ticks-error/js/core.cfd~1dbf2394.ee7b5bde8c0c306652bb.js.LICENSE.txt",revision:"47ee70ececb7122c1a0aaed2f560b78d"},{url:"/br_ticks-error/js/core.cfd~3b8e11e6.b9ae923ee967ce1768aa.js",revision:null},{url:"/br_ticks-error/js/core.cfd~adf775f1.abf9db0332ce4397b177.js",revision:null},{url:"/br_ticks-error/js/core.close-mx-mlt-account-modal.7133e40fd80a8658f885.js",revision:null},{url:"/br_ticks-error/js/core.complaints-policy.5439d11d1aecd2c915c3.js",revision:null},{url:"/br_ticks-error/js/core.main~07ff1e00.b916d65a6883370455f2.js",revision:null},{url:"/br_ticks-error/js/core.main~182f79bf.970554a9539eb582664c.js",revision:null},{url:"/br_ticks-error/js/core.main~1a408eaf.182b984ecb4e47d61f07.js",revision:null},{url:"/br_ticks-error/js/core.main~352d95fa.532dd74d81ccb1b7a9b1.js",revision:null},{url:"/br_ticks-error/js/core.main~4e43d1b7.e625917cbeb2cf4112d3.js",revision:null},{url:"/br_ticks-error/js/core.main~66104539.cb10fd32dc718b78665d.js",revision:null},{url:"/br_ticks-error/js/core.main~6b4cb1b5.14de37237900d69243b5.js",revision:null},{url:"/br_ticks-error/js/core.main~703a1da7.f55727de6705738fefc3.js",revision:null},{url:"/br_ticks-error/js/core.main~7e76c2e1.aab0ed5bc676a9281dd8.js",revision:null},{url:"/br_ticks-error/js/core.main~85fa0c87.03cfd23f75f5e8af0d13.js",revision:null},{url:"/br_ticks-error/js/core.main~9a79028c.dcb4538d274763659752.js",revision:null},{url:"/br_ticks-error/js/core.main~9a8b795a.7c21c7b428d388652a3c.js",revision:null},{url:"/br_ticks-error/js/core.main~a8149675.e79f63c9a2c40cd83a2d.js",revision:null},{url:"/br_ticks-error/js/core.main~ba165128.4c267c06a752d68ddd8c.js",revision:null},{url:"/br_ticks-error/js/core.main~cb888b8a.1c6997adf7ad803f4457.js",revision:null},{url:"/br_ticks-error/js/core.main~cf448228.4fe50dc87c06183baea3.js",revision:null},{url:"/br_ticks-error/js/core.main~fc854bfa.67e75a36031444a70bfd.js",revision:null},{url:"/br_ticks-error/js/core.main~fd2ee733.6372c85bd33ceb7c88dd.js",revision:null},{url:"/br_ticks-error/js/core.reality-check-modal.f73054ae97d6233320ec.js",revision:null},{url:"/br_ticks-error/js/core.reset-email-modal.87c77fbe6f8227effeb0.js",revision:null},{url:"/br_ticks-error/js/core.reset-or-unlink-password-modal.5c1e0d42be3c0402fde0.js",revision:null},{url:"/br_ticks-error/js/core.reset-password-modal.380bd19919184bb9516f.js",revision:null},{url:"/br_ticks-error/js/core.set-residence-modal.f60779bb7142cf1068ff.js",revision:null},{url:"/br_ticks-error/js/core.settings-language.d9324e8b4714b34bcff1.js",revision:null},{url:"/br_ticks-error/js/core.settings-theme.fb0f20488e143e9f2f88.js",revision:null},{url:"/br_ticks-error/js/core.trader.eab121646aee0db614ea.js",revision:null},{url:"/br_ticks-error/js/core.update-email-modal.2fe1e256864fd7ccd388.js",revision:null},{url:"/br_ticks-error/js/core.welcome-modal~5c04ba06.4181a270ff641489a384.js",revision:null},{url:"/br_ticks-error/js/core.welcome-modal~734a261b.ab0264b6122796cc2d45.js",revision:null},{url:"/br_ticks-error/js/core.welcome-modal~7a15df7a.2d3cdcf651f3113bd0a5.js",revision:null},{url:"/br_ticks-error/js/core.welcome-modal~9624755f.c5cd908fbddcce3a59f3.js",revision:null},{url:"/br_ticks-error/js/core.welcome-modal~b407d6a8.6ab3effe47810304abbb.js",revision:null},{url:"/br_ticks-error/js/core.welcome-modal~e0489f8e.beb71cdec2e3a2f2dee1.js",revision:null},{url:"/br_ticks-error/js/core.welcome-modal~f0b1ccd8.2a50daf476c8c2345a24.js",revision:null},{url:"/br_ticks-error/js/core.welcome-modal~f53eb8c1.76bbf476adad99f13916.js",revision:null},{url:"/br_ticks-error/public/images/app/header/dbot-logo.svg",revision:"74dd603772623201c277552d07db9dea"},{url:"/br_ticks-error/public/images/app/header/dmt5-logo.svg",revision:"bb9d72a69387257a410f35d42763287d"},{url:"/br_ticks-error/public/images/app/header/dtrader-logo.svg",revision:"e0d36a7365f13540be65f2ba83781f83"},{url:"/br_ticks-error/public/images/common/404.png",revision:"b2fd89fd64d75b5b75bb7e75f2bb9029"},{url:"/br_ticks-error/public/images/common/close_account_banner.png",revision:"47457964f57828ac882a49dcd4009a1d"},{url:"/br_ticks-error/public/images/common/derivgo_banner.png",revision:"cfa6bac9d229ecf1a60adcf0f9c283f9"},{url:"/br_ticks-error/public/images/common/dp2p_banner.png",revision:"efbd723ab548be783bb6411d18cf168a"},{url:"/br_ticks-error/public/images/common/ke_alien_card.png",revision:"8fc3d3345db92d1333e59a72ba5be769"},{url:"/br_ticks-error/public/images/common/ke_national_identity_card.png",revision:"3d54bcbb6a019c272e28b15601774a2a"},{url:"/br_ticks-error/public/images/common/ke_passport.png",revision:"d111da0604e97583feb278a206c8c5c3"},{url:"/br_ticks-error/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png",revision:"8b90a2d122bd63b19b2987d8fca2c75d"},{url:"/br_ticks-error/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png",revision:"cc6cdd9391b053108005c72f5dcc3a57"},{url:"/br_ticks-error/public/images/common/ng_drivers_license.png",revision:"ad0c31da5da08e640308d2ea3447b681"},{url:"/br_ticks-error/public/images/common/ng_nin_slip.png",revision:"d743586bddc5ddd91e0bb820f0718597"},{url:"/br_ticks-error/public/images/common/ng_voter_id.png",revision:"47f0de9fd4bf1da1b9bda784889d7fd0"},{url:"/br_ticks-error/public/images/common/trustpilot_banner.png",revision:"1561d90dfa4e20595ff9a3c4b3b8e239"},{url:"/br_ticks-error/public/images/common/welcome-bg-blue.b45a36e7985e837390d4dbec26bf1dce.svg",revision:null},{url:"/br_ticks-error/public/images/common/welcome-bg-red.439aaf362ccc377e019dedcb7ddc34e0.svg",revision:null},{url:"/br_ticks-error/public/images/common/za_national_identity_card.png",revision:"48c0447163401fe1d2705072a7f1c9e8"},{url:"/br_ticks-error/public/sprites/brand.b3f15ed36d0d2db95a0646380655b7a2.svg",revision:"20ad1e2992e66ccbba6c61f2e9079be0"},{url:"/br_ticks-error/public/sprites/cashier.b5226ef15b8e336be02e934751407c05.svg",revision:"b2a0489285f8c5265f87024f6b7983fe"},{url:"/br_ticks-error/public/sprites/common.8248629c00589b9b2f199a888de83120.svg",revision:"b2ed784cb83a08ed6868e34bde082a3e"},{url:"/br_ticks-error/public/sprites/contract.1ca5743a5b5f7fd7201608c9301cc540.svg",revision:"b505df6ba2e73a30257f3ccb7e1af7e1"},{url:"/br_ticks-error/public/sprites/currency.bb01e214db4460f58372ecb28c62765e.svg",revision:"3955f98d0403f371acffa892627a39c6"},{url:"/br_ticks-error/public/sprites/dxtrade.3a8eee97254a48a1ca9cff7ba17491c8.svg",revision:"177fb07c55e16c9e2f392e73fca70a89"},{url:"/br_ticks-error/public/sprites/flag.2679f4a3231842793a9c71fec07e0f8b.svg",revision:"0b6be63adf18362585e1f439d7d20bae"},{url:"/br_ticks-error/public/sprites/mt5.9eefdebfceac37a07bc45349dfcb533f.svg",revision:"c7c45ecc8d96bafbcd71b31389e3d078"},{url:"/br_ticks-error/public/sprites/option.3971bb040600e58a1e30dc008551a163.svg",revision:"be90e5e9d25a16c5ebabf8c6b698dd57"},{url:"/br_ticks-error/public/sprites/stock.1a672b1203ae2066f107a58ffb137c9c.svg",revision:"d8505022d6f871323ddb92c18208246a"},{url:"/br_ticks-error/public/sprites/tradetype.b9ed31953cc8da3d84bafb6f5e62ee3b.svg",revision:"04d969ea5b62d0ad45915b5ace954021"},{url:"/br_ticks-error/public/sprites/underlying.8a87b48f77ed0ef90c3956e0388cb2e1.svg",revision:"9f46924f43ab90194b035a6071eebace"},{url:"/br_ticks-error/public/sprites/wallet.04e5a96d8a64d80ba390218d17c0a487.svg",revision:"a385d07b496daa519f7d61ca8cda77df"}],{}),r.cleanupOutdatedCaches()}));
