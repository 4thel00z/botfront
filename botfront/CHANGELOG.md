# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.19.3](https://github.com/botfront/botfront/compare/v0.19.2...v0.19.3) (2020-02-12)



### [0.19.2](https://github.com/botfront/botfront/compare/v0.19.1...v0.19.2) (2020-02-11)


### Bug Fixes

* **triggers:** wrong payload sent when entities are passed ([#56](https://github.com/botfront/botfront/issues/56)) ([54ecc15](https://github.com/botfront/botfront/commit/54ecc15e273ff141842463d968a47eaafcea4798))

### [0.19.1-ee.3](https://github.com/botfront/botfront/compare/v0.19.1-ee.2...v0.19.1-ee.3) (2020-02-07)


### Features

* send query trigger as entity ([9353b23](https://github.com/botfront/botfront/commit/9353b2344bb01158f54c4bbf6650b40853fa81e4))
* send query trigger as entity ([6a2499d](https://github.com/botfront/botfront/commit/6a2499d0f0f1cbe4ff2b69c2b85ce8b01584f4f6))

### [0.19.1-ee.2](https://github.com/botfront/botfront/compare/v0.19.1-ee.1...v0.19.1-ee.2) (2020-02-03)


### Features

* **cli:** add a .gitignore file to project template ([65f7d84](https://github.com/botfront/botfront/commit/65f7d84b82d939fa7514471b2c979f23b9e4e8e9))


### Bug Fixes

* all projects were visible to all users roles ([ed4c62e](https://github.com/botfront/botfront/commit/ed4c62eed593972cbaff603e55fc62c4615c3d93))
* bad analytics filter ([bff8f06](https://github.com/botfront/botfront/commit/bff8f06f9f318a69b72cab5b336af1a8c7e39ccd))
* it was not posible to have more than one entity in payload editor ([61cf096](https://github.com/botfront/botfront/commit/61cf096cf91e62c802bf23f2c2741601a1847b31))
* only current project is visible from dropdown ([672dccd](https://github.com/botfront/botfront/commit/672dccd2c3daa0a71469f915b477858ceffe28e8))
* **cli:** correct path in production Dockerfile for actions ([dd535a9](https://github.com/botfront/botfront/commit/dd535a939368dffddb698f6ed514316e2ea94608))
* metadata lost at import, add the metadata model in the api ([2728b58](https://github.com/botfront/botfront/commit/2728b582c9d8467a1998f084f026910ee26f614d))

### [0.19.1-ee.1](https://github.com/botfront/botfront/compare/v0.19.1-ee.0...v0.19.1-ee.1) (2020-01-30)


### Features

* smart stories group ([23549f0](https://github.com/botfront/botfront/commit/23549f055086abde5c9b3a2b0bf749b851f44746))
* smart stories group ([57203a1](https://github.com/botfront/botfront/commit/57203a1966efc7177d33f876211c86cccc5ce2ef))
* stories: create and edit trigger conditions ([e50b308](https://github.com/botfront/botfront/commit/e50b308f0ea71b2f86d1ffbc5a52faa884c51f36))
* stories: create and edit trigger conditions ([b0a3a6f](https://github.com/botfront/botfront/commit/b0a3a6f286268e9fdfe4240e1be3b44dc1323812))
* **analytics:** change fallback count semantics ([d4bde03](https://github.com/botfront/botfront/commit/d4bde0314e97b01e061ae8ec2e5d24dbdd5fa835))
* **analytics:** keep both kinds of fallback cards side by side ([69ea7d4](https://github.com/botfront/botfront/commit/69ea7d464c84b9f15d93925a4e7a83368a23bac3))


### Bug Fixes

* nlg endpoint is incorrect in gke default settings ([4665cc3](https://github.com/botfront/botfront/commit/4665cc30c23242195e8b8095e57c86aa9cc5ec91))

### [0.19.1-ee.0](https://github.com/botfront/botfront/compare/v0.19.0-alpha.6-ee.0...v0.19.1-ee.0) (2020-01-23)


### Features

* **activity:** don't show spinner ([8ad22a5](https://github.com/botfront/botfront/commit/8ad22a5934c49d57ec099cb3b87fb8c65c1df367))
* **export:** add exclusion options to project export ([92cc546](https://github.com/botfront/botfront/commit/92cc5465865a541b4bb92df60373161163db1d0b))
* **image upload:** add upload and delete routes ([41b923d](https://github.com/botfront/botfront/commit/41b923d2e07b33b414d1bf067a3ae9f81c65145b))
* **image upload:** call image delete webhook from deleteResponse ([4ca39c3](https://github.com/botfront/botfront/commit/4ca39c350e778ff1d59da13c351888f9e4597f9b))
* **image upload:** connect image upload to webhook ([f0e378d](https://github.com/botfront/botfront/commit/f0e378d315eb17705b89d0f288da5574f4d703f2))
* **image upload:** wip ([2fc4e26](https://github.com/botfront/botfront/commit/2fc4e26b66a87b5afea4f674e136eac92bd39caa))
* **webhooks:** add webhooks in global settings ([8752e83](https://github.com/botfront/botfront/commit/8752e83d2e79e94e083ff1586a54a2834e6a5d13))


### Bug Fixes

* response form leaves a margin at the right of the modal ([#443](https://github.com/botfront/botfront/issues/443)) ([bd876d8](https://github.com/botfront/botfront/commit/bd876d828cd9a42d62dd000124cbeeced8953e08))
* **activity insertion:** prevent populateActivity never returning ([b4dc07b](https://github.com/botfront/botfront/commit/b4dc07b57ce77a1eae70ee7f23a4c249666f8c62))
* **activity logging:** use string ids ([8544d6f](https://github.com/botfront/botfront/commit/8544d6fea7352cd350bdd8a61d8b3f4ca1a5e6eb))
* **cli:** major version upgrade + migration guide ([#445](https://github.com/botfront/botfront/issues/445)) ([94d21a8](https://github.com/botfront/botfront/commit/94d21a851904e3de09c1133361636c1b5df0c57f))
* cannot edit project startup responses ([fad2eca](https://github.com/botfront/botfront/commit/fad2ecafd3e65472c9d74aa08fc89c1d5a64468b))
* deleteVariation fails if variation is focused ([b7262dd](https://github.com/botfront/botfront/commit/b7262dd2ad07d902be113d8071a47769b8bc4681))
* validate utterance bug ([b2ab1b3](https://github.com/botfront/botfront/commit/b2ab1b36f1b7f68268973b3dacc4ee336776d56c))
* **conversation import:** new lang field location ([b349daf](https://github.com/botfront/botfront/commit/b349dafd5683de48d754912d61ffb38055cd9241))
* model bucket not shown in the project admin screen ([66985b5](https://github.com/botfront/botfront/commit/66985b55906eb193ef1b36f431daa71d6dded640))
* variations not saving ([9929a72](https://github.com/botfront/botfront/commit/9929a72546fb82ae9a29be9599fd3938667e50a1))
* variations save on modal close ([ce040af](https://github.com/botfront/botfront/commit/ce040afb8f1efc13521480a5532a7344bd7faa44))
* visual editor, always load first variation ([a5703bf](https://github.com/botfront/botfront/commit/a5703bf78e8eae71794443058269b722e47f6018))

## [0.19.0-alpha.6-ee.0](https://github.com/botfront/botfront/compare/v0.19.0-alpha.5-ee.1...v0.19.0-alpha.6-ee.0) (2020-01-13)


### Bug Fixes

* utterance text missing in visual editor ([285fe29](https://github.com/botfront/botfront/commit/285fe29876fc06698176fe2b306c6041929f84a1))

## [0.19.0-alpha.5-ee.1](https://github.com/botfront/botfront/compare/v0.19.0-alpha.5-ee.0...v0.19.0-alpha.5-ee.1) (2020-01-10)

## [0.19.0-alpha.5-ee.0](https://github.com/botfront/botfront/compare/v0.19.0-alpha.4-ee.5...v0.19.0-alpha.5-ee.0) (2020-01-09)


### Features

* nlg in project default language if no language specified ([#418](https://github.com/botfront/botfront/issues/418)) ([e2ab647](https://github.com/botfront/botfront/commit/e2ab64773f3b664c190cc7d60e8d85393acf49b8))


### Bug Fixes

* missing Nivo dependencies ([1a0e62d](https://github.com/botfront/botfront/commit/1a0e62d532dba1e54c96e832d03f31b44939a39d))
* missing response content in visual editor ([439bbc4](https://github.com/botfront/botfront/commit/439bbc403998b23c8a5c525e5ec4b16867252981))

## [0.19.0-alpha.4-ee.5](https://github.com/botfront/botfront/compare/v0.19.0-alpha.4-ee.4...v0.19.0-alpha.4-ee.5) (2020-01-07)


### Bug Fixes

* package.lock was broken after merge ([6f67a09](https://github.com/botfront/botfront/commit/6f67a0904e574aa75da613b6f7838e1512023cf5))

## [0.19.0-alpha.4-ee.4](https://github.com/botfront/botfront/compare/v0.19.0-alpha.4-ee.3...v0.19.0-alpha.4-ee.4) (2020-01-07)


### Bug Fixes

* remove duplicate migration ids ([025e1a9](https://github.com/botfront/botfront/commit/025e1a93f1b55f4570151cf8df099431ce812b6e))

## [0.19.0-alpha.4-ee.3](https://github.com/botfront/botfront/compare/v0.19.0-alpha.4-ee.2...v0.19.0-alpha.4-ee.3) (2020-01-07)

## [0.19.0-alpha.4-ee.2](https://github.com/botfront/botfront/compare/v0.19.0-alpha.4-ee.1...v0.19.0-alpha.4-ee.2) (2020-01-07)

## [0.19.0-alpha.4-ee.1](https://github.com/botfront/botfront/compare/v0.19.0-alpha.4...v0.19.0-alpha.4-ee.1) (2020-01-07)


### Features

* projects created with correct params + hide platform settings from project admins ([#8](https://github.com/botfront/botfront/issues/8)) ([cf13a27](https://github.com/botfront/botfront/commit/cf13a2730c6b97de65ba6e2aa756f9d32b25f1e0))
* **analytics by lang:** add language selector to analytics ([#5](https://github.com/botfront/botfront/issues/5)) ([a25aeab](https://github.com/botfront/botfront/commit/a25aeabaaec9fee9defd2c4a731c92f8687ab219))


### Bug Fixes

* opening a conversation from incoming NLU crashes ([#10](https://github.com/botfront/botfront/issues/10)) ([2ed7936](https://github.com/botfront/botfront/commit/2ed79361be3506f08e66440fb619758181884f7d))
* set correct NLG endpoint in default GKE settings ([fccc7af](https://github.com/botfront/botfront/commit/fccc7af80d93c7bbc8d816d50c0b5ec9b362c72d))

### [0.18.5-ee.8](https://github.com/botfront/botfront/compare/v0.18.5-ee.7...v0.18.5-ee.8) (2019-12-17)

### [0.18.5-ee.7](https://github.com/botfront/botfront/compare/v0.18.5-ee.6...v0.18.5-ee.7) (2019-12-17)

### [0.18.5-ee.6](https://github.com/botfront/botfront/compare/v0.18.5-ee.5...v0.18.5-ee.6) (2019-12-12)


### Features

* **intent dropdown:** show canonical example ([129f9eb](https://github.com/botfront/botfront/commit/129f9ebb581be6628e91928431238043362ac679))

### [0.18.5-ee.5](https://github.com/botfront/botfront/compare/v0.18.5-ee.4...v0.18.5-ee.5) (2019-12-06)

### [0.18.5-ee.4](https://github.com/botfront/botfront/compare/v0.18.5-ee.3...v0.18.5-ee.4) (2019-12-03)


### Features

* canonical example shown in new utterances ([424ad52](https://github.com/botfront/botfront/commit/424ad525d3e5bda01d84f36d135b162fd2409625))


### Bug Fixes

* invalid date in conversation filters ([99b8799](https://github.com/botfront/botfront/commit/99b87998f6d0d07ee4882649d179b1d4d01a24d2))

### [0.18.5-ee.3](https://github.com/botfront/botfront/compare/v0.18.5-ee.2...v0.18.5-ee.3) (2019-12-03)


### Features

* conversation popup for utterances ([157fbc8](https://github.com/botfront/botfront/commit/157fbc867fd0f1511e2203442913d5d90d3c2fac))


### Bug Fixes

* crash in nlu evaluation ([962c281](https://github.com/botfront/botfront/commit/962c281d657a4e7e00235a10ca6ca2ecc3ce90c2))
* date filter convs ([c4d9303](https://github.com/botfront/botfront/commit/c4d9303175239c717a9151a0fb2c957b5be0bb63))
* exis title unit format ([fb18aa7](https://github.com/botfront/botfront/commit/fb18aa7c6c1fa04c9f87f96337780af2fb9a5e37))

### [0.18.5-ee.2](https://github.com/botfront/botfront/compare/v0.18.5-ee.1...v0.18.5-ee.2) (2019-11-29)

### [0.18.5-ee.1](https://github.com/botfront/botfront/compare/v0.18.5-ee.0...v0.18.5-ee.1) (2019-11-27)

### [0.18.5-ee.0](https://github.com/botfront/botfront/compare/v0.18.5...v0.18.5-ee.0) (2019-11-26)


### Features

* **activity:** add filtering ([1f005d6](https://github.com/botfront/botfront/commit/1f005d6a20e7993ca58a7a32a873bff086f47be0))
* **activity:** batch reinterpret only visible items ([5af9c85](https://github.com/botfront/botfront/commit/5af9c85708c90ba7e2646d5d0e7c519be3535187))
* add ui for conversation filters ([776f5ce](https://github.com/botfront/botfront/commit/776f5ce490129fd871c62ccd3a8fa75654a6a286))
* analytics table view ([e3194bb](https://github.com/botfront/botfront/commit/e3194bb91d71008f7ef05680b9b15b1e0ecb93b1))
* reset button, hide/reveal and style changes ([3dcf651](https://github.com/botfront/botfront/commit/3dcf651ac0f796c41a19154fbd32ae39da008eac))


### Bug Fixes

* Analytics display duration as time(s)<time(s) ([aeb7e31](https://github.com/botfront/botfront/commit/aeb7e3153b7026d2d672ad5e72f871695fa6597d))
* analytics duration: axis values ([6cf27f2](https://github.com/botfront/botfront/commit/6cf27f2303d558b521409406fbecf06c22940cfe))
* analytics duration: axis values ([d50d9b9](https://github.com/botfront/botfront/commit/d50d9b9b3e39e4e516ce93c319dad37df3fb3c72))
* change api url if the run is from ci ([46d233e](https://github.com/botfront/botfront/commit/46d233e31f2d6f8a88b70e8a1b95759bdd0e4372))
* custom range in date picker ([0d3d21e](https://github.com/botfront/botfront/commit/0d3d21e2c2d7db1a728ca237ee1d01e063fd81af))
* custom range in date picker ([a040628](https://github.com/botfront/botfront/commit/a040628a4b7987362cd4d2089645fa8216c35c4b))
* date picker creashes with a one day range ([17a7aa0](https://github.com/botfront/botfront/commit/17a7aa0c473365e854aaa011d54d6940c212a6a3))
* date ranges for analytics line chart ([5a3d12d](https://github.com/botfront/botfront/commit/5a3d12db52eacfdf9e63544d615dc7eba58cd7cd))
* env selector and the corresponding test ([99da2af](https://github.com/botfront/botfront/commit/99da2af06e62af4a6bbcc1cd6a80d3fb0a9d7c94))
* env selector and the corresponding test ([cd34084](https://github.com/botfront/botfront/commit/cd3408438a122837afc500e608492ed3f1fbc6fa))
* input overflows action dropdown ([2fe3c77](https://github.com/botfront/botfront/commit/2fe3c773fe2c220fd23f1b9534538342c4761704))
* long action names overflow dropdown ([558320a](https://github.com/botfront/botfront/commit/558320adb9d128f20e8241ac7cc2e2c7e18e372a))
* removes a duplicate of insert many ([2712612](https://github.com/botfront/botfront/commit/2712612692c77091795485140044f0ba804a1317))
* removes a duplicate of insert many ([70e0238](https://github.com/botfront/botfront/commit/70e0238e6c6baa7292c22bdf837ddcef043d71b6))

### [0.18.2-ee.0](https://github.com/botfront/botfront/compare/v0.18.2...v0.18.2-ee.0) (2019-11-18)

### [0.18.1-ee.3](https://github.com/botfront/botfront/compare/v0.18.1-ee.2...v0.18.1-ee.3) (2019-11-14)


### Bug Fixes

* destructuring error when deployment is null ([623fdd8](https://github.com/botfront/botfront/commit/623fdd8424ab01b6ec1ec2bbb047d824775d8c27))
* training broken after merge issue ([96ec5c6](https://github.com/botfront/botfront/commit/96ec5c63ea54682d6af9c8115c2554b353cdce27))

### [0.18.1-ee.2](https://github.com/botfront/botfront/compare/v0.18.1-ee.1...v0.18.1-ee.2) (2019-11-14)


### Features

* **activity:** attempt at optimistic rerendering ([323668f](https://github.com/botfront/botfront/commit/323668f93e249599d8ac08e10877402ac157bdd8))
* **activity:** use subscriptions instead of query ([9102c35](https://github.com/botfront/botfront/commit/9102c35779e958da56c362195acea0d6bf5f4c3f))


### Bug Fixes

* selecting fallback templates does nothing ([79c961c](https://github.com/botfront/botfront/commit/79c961cca37fa1ea41935c2aed11696edccc6afb))

### [0.18.1-ee.1](https://github.com/botfront/botfront/compare/v0.18.1...v0.18.1-ee.1) (2019-11-13)


### Features

* add conversations mutations names ([00de829](https://github.com/botfront/botfront/commit/00de829d73c6d1004417bf0bc04a6ec4a2c4b9c4))
* add graphQL schema for activity ([4ca47e1](https://github.com/botfront/botfront/commit/4ca47e1b7d3655aad33f5e563d1905d0c882e424))
* add resolver for activity ([d9cbb6a](https://github.com/botfront/botfront/commit/d9cbb6a843dc113bef1027915c48afaca7b62201))


### Bug Fixes

* before/after each in convo tests ([b026efb](https://github.com/botfront/botfront/commit/b026efb7b35d7386a8f7188f14a882b363cbfdaf))
* before/after each in convo tests ([68bb7c6](https://github.com/botfront/botfront/commit/68bb7c67b98a6e544211e650b851db46986ca451))
* conversation test needs to wait for rasa ([cf8f237](https://github.com/botfront/botfront/commit/cf8f237e082181ae67be6f58686b70df46b6861e))
* error on delete user ([b4d7157](https://github.com/botfront/botfront/commit/b4d71571a0f0a1962a249bcd816d747d88536bad))
* import delayed refresh causes test to fail ([1e28f06](https://github.com/botfront/botfront/commit/1e28f060bd93acc2bcd9707aeae54f37d77b19d9))
* merge conversation changes from master ([d24459e](https://github.com/botfront/botfront/commit/d24459e4fdca08eeb6de76ed820ab480b2eb3d09))
* merge conversation changes from master ([8e6dd30](https://github.com/botfront/botfront/commit/8e6dd30ab3d59449f3491ff30037a0a982917448))
* merge conversation pagination ([9a100b9](https://github.com/botfront/botfront/commit/9a100b93526b693589d835f9a758a8d3f8298230))
* nlu training button permanatly disabled ([64b069b](https://github.com/botfront/botfront/commit/64b069b5ac67bcbff2e571de04ec37946a3916af))
* use importProject cypress command in tests ([4838424](https://github.com/botfront/botfront/commit/48384241fb60f9b67ad8303b908f63cee40542ac))
* use importProject cypress command in tests ([4dd08aa](https://github.com/botfront/botfront/commit/4dd08aa72f8d69160e9fece5a9be1867df6c11d5))
* use withRouter for routing, func for get url ([beed366](https://github.com/botfront/botfront/commit/beed366a799805e7eca166a913eb417299594f8b))
* use withRouter for routing, func for get url ([203e342](https://github.com/botfront/botfront/commit/203e3426809e4610a5876f3e2bb5d648ef94f4ef))

## [0.18.0-rc.1-ee.1](https://github.com/botfront/botfront/compare/v0.18.0...v0.18.0-rc.1-ee.1) (2019-11-12)

## [0.18.0-rc.0-ee.1](https://github.com/botfront/botfront/compare/v0.18.0-rc.0...v0.18.0-rc.0-ee.1) (2019-11-11)


### Features

* **analytics:** add dnd ([41ff8bd](https://github.com/botfront/botfront/commit/41ff8bda677e9441b676211ea0bef3dbce059e72))
* **analytics:** add redux state for card settings ([ced418d](https://github.com/botfront/botfront/commit/ced418d5874a0ed01528c1053c5349f8a42329e9))
* **analytics:** add reordering of cards ([9d5e2da](https://github.com/botfront/botfront/commit/9d5e2da0750831e20e158767d356a16726f93e87))
* show empty buckets in analytics ([26e5d55](https://github.com/botfront/botfront/commit/26e5d5551eadd599383f23989311bce974a6b1cf))
* **analytics:** change fallback metric ([617afd4](https://github.com/botfront/botfront/commit/617afd4a183cadc5122fdbb95f4664dc1ff4c983))
* **analytics:** exclusion and fallback templates ([82a7c13](https://github.com/botfront/botfront/commit/82a7c132caffb5d3f7bd5a92a8e5c03bfa48ffa5))
* **analytics:** wip: add exclusion/inclusion settings ([b2b752d](https://github.com/botfront/botfront/commit/b2b752d0baeb0f24d5eda7b478c791e889e2e20d))

### [0.17.2-ee.8](https://github.com/botfront/botfront/compare/v0.17.2-ee.7...v0.17.2-ee.8) (2019-11-11)


### Bug Fixes

* persist state test clicks too fast ([9541c36](https://github.com/botfront/botfront/commit/9541c36dc3b259ad327d51aecaf40ea2334f46f0))
* story exception test could not find .eq(2) ([d960610](https://github.com/botfront/botfront/commit/d960610a401183f064e3dbbaa77cebc42cb69e78))

### [0.17.2-ee.7](https://github.com/botfront/botfront/compare/v0.17.2-ee.6...v0.17.2-ee.7) (2019-11-07)


### Bug Fixes

* double story group browser ([c907fbb](https://github.com/botfront/botfront/commit/c907fbb177d325c7afb4039909e15df1d086259c))
* fixed intercom and roles in project subs ([1a7b247](https://github.com/botfront/botfront/commit/1a7b2475e52e37755286ed3e08e6a4063acc9921))

### [0.17.2-ee.6](https://github.com/botfront/botfront/compare/v0.17.2-ee.5...v0.17.2-ee.6) (2019-11-05)


### Bug Fixes

* canonical dataCy change and click gem loop ([5f523d8](https://github.com/botfront/botfront/commit/5f523d866cab105b4cfdfd52f4261a73a2161903))
* incoming crash with no deployment env ([5e90a69](https://github.com/botfront/botfront/commit/5e90a699b9a5a64d6237523dab5c46ad876dff13))
* prevent missed clicks in add canonical ([05b10be](https://github.com/botfront/botfront/commit/05b10be8407d323cd2357997d8b80b3e2fec063c))
* standardize beforeeach and aftereach ([95adf77](https://github.com/botfront/botfront/commit/95adf77e29f264cc6ec9acc0323a261cfac0fbc0))
* test edits should be comments ([34e346d](https://github.com/botfront/botfront/commit/34e346dedc5a8c6c3ef2f210da7c9c460e1850f9))

### [0.17.2-ee.5](https://github.com/botfront/botfront/compare/v0.17.2-ee.4...v0.17.2-ee.5) (2019-11-04)


### Bug Fixes

* bot_response.spec ([9e11e89](https://github.com/botfront/botfront/commit/9e11e893b7020f562e52f1196910ad37ccc1a83c))
* expected to find one child instead of none ([8ae0b2f](https://github.com/botfront/botfront/commit/8ae0b2fccfabc2e1822f162a08ba719183d6ad89))
* mlu model playground never rendering ([d3edb6e](https://github.com/botfront/botfront/commit/d3edb6e435cd99d6e206804a0ceb116fd2c9e0b6))

### [0.17.2-ee.4](https://github.com/botfront/botfront/compare/v0.17.2-ee.3...v0.17.2-ee.4) (2019-11-01)

### [0.17.2-ee.3](https://github.com/botfront/botfront/compare/v0.17.2-ee.2...v0.17.2-ee.3) (2019-11-01)


### Features

* add test for cannonical example in conversation builder ([71c9bd0](https://github.com/botfront/botfront/commit/71c9bd0d2e46a1fc6671f233b0c9abef9b01beff))
* allow the cannonical field in example utils ([5df5342](https://github.com/botfront/botfront/commit/5df5342e4677d4a4343fa68a058e5314f92bdee9))
* prefer cannonical examples in conversation builder ([22adca9](https://github.com/botfront/botfront/commit/22adca92081f32d9950f96ab088b3925883153c7))


### Bug Fixes

* enviroments in incoming tab ([2afce1a](https://github.com/botfront/botfront/commit/2afce1adc909818af8525d8b353ff0023faebcc8))
* incoming tabs allow non letter chars ([118a22f](https://github.com/botfront/botfront/commit/118a22fecdd367003a24d65359bfefe08bca67ae))
* incomming tests ([20148d8](https://github.com/botfront/botfront/commit/20148d815e9461e29ee8f2283a741cc9510d6533))
* reloading after evn change ([13b4328](https://github.com/botfront/botfront/commit/13b43284de0449ff7a8c9822271afbd1047ff2bc))
* **canonical examples:** typo ([ca641f3](https://github.com/botfront/botfront/commit/ca641f3c8aa53150db30d270139188bb7eb0a55d))

### [0.17.2-ee.2](https://github.com/botfront/botfront/compare/v0.17.2-ee.1...v0.17.2-ee.2) (2019-10-30)


### Features

* format newlines for React Markdown component ([fe5a276](https://github.com/botfront/botfront/commit/fe5a2767a156946367473cc8219689e41e52b67b))
* removes tabs in settings when only one environment ([5041644](https://github.com/botfront/botfront/commit/5041644875d6f13a02bd4e5d3e618ce5d3e55d48))
* shift enter creates newline ([af2af20](https://github.com/botfront/botfront/commit/af2af20ecd05567623d61a35ba66ec7be9df128c))
* test for the apperance of tabs ([07f5d1f](https://github.com/botfront/botfront/commit/07f5d1f786dbbc6dda47065721f4330c724a0d5a))


### Bug Fixes

* newline applies to multilingual responses ([5130863](https://github.com/botfront/botfront/commit/5130863c8adaec2fe331ee2049e5414d45641c62))
* newline does not need event.preventDefault ([433377d](https://github.com/botfront/botfront/commit/433377d234f5be19aef083dc5fec24f2507eeb7d))
* replace spacednewlines with newlines ([ccaed6a](https://github.com/botfront/botfront/commit/ccaed6a271044bf25e93e6ccbb03ce6ae7330a30))
* revert code for identifying isTextResponse ([c3b7568](https://github.com/botfront/botfront/commit/c3b75684cca67d8cdb529764fbef3b4315ee4118))

### [0.17.2-ee.1](https://github.com/botfront/botfront/compare/v0.17.2...v0.17.2-ee.1) (2019-10-30)

## [0.17.0-ee.9](https://github.com/botfront/botfront/compare/v0.17.0-ee.8...v0.17.0-ee.9) (2019-10-30)


### Bug Fixes

* **analytics:** get rid of file-loader ([df30d76](https://github.com/botfront/botfront/commit/df30d763f397d78c4b75b451531a40137260e07f))

## [0.17.0-ee.8](https://github.com/botfront/botfront/compare/v0.17.0-ee.7...v0.17.0-ee.8) (2019-10-29)

## [0.17.0-ee.7](https://github.com/botfront/botfront/compare/v0.17.0-ee.6...v0.17.0-ee.7) (2019-10-29)


### Features

* add a date picker component ([03f484d](https://github.com/botfront/botfront/commit/03f484da6ad18976f636b6b497137499417a9642))
* add role for analytics ([b5044f5](https://github.com/botfront/botfront/commit/b5044f52f34ded4440fb331c7059e49b02a5f04b))
* basic analytics dashboard structure ([5ce6b9f](https://github.com/botfront/botfront/commit/5ce6b9fd7f285e080ee02eae9105e5a909f9fcd9))
* conversation durations chart ([3f95093](https://github.com/botfront/botfront/commit/3f9509394163265d1f7b1b9ce24febe171bf88d2))
* intent frequencies ([588b2fb](https://github.com/botfront/botfront/commit/588b2fb4b6b9712e41d8bb8cee1e32dedb7e5be9))
* move import css from Datepicker to main.less ([5090659](https://github.com/botfront/botfront/commit/509065978e7456eb643e14f0fdb78b05467186f5))
* **analytics:** storybook ([4d7e32e](https://github.com/botfront/botfront/commit/4d7e32e1409da906dda238373a48df3efc61d1c5))
* nlu analytics with graphql ([1d258a8](https://github.com/botfront/botfront/commit/1d258a872977f15f8c1b1379b3d0245659374268))
* **analytics:** add conversationCounts query ([5f1d017](https://github.com/botfront/botfront/commit/5f1d01758373f20d1b5a44b247a780cf41622d0b))
* **analytics:** add environment selector ([1f6e02a](https://github.com/botfront/botfront/commit/1f6e02a133a92515b3a4d8a713410cccefc49e5d))
* **analytics:** add exclude param to conversationCounts ([d551dee](https://github.com/botfront/botfront/commit/d551deecd36cd589db0935bb7f545fe8efd47c23))
* **analytics:** add LineChart ([4cc6362](https://github.com/botfront/botfront/commit/4cc6362b11841724b4d5a1755e91032501a51b0e))
* **analytics:** add placeholder for missing data ([f265613](https://github.com/botfront/botfront/commit/f26561329fcc60cc81feaddad5d38b0c00ea0bea))
* **analytics:** add query params to intent freqs ([3ade828](https://github.com/botfront/botfront/commit/3ade8284f725adb875a9edb7a8b0595e88dc3529))
* **analytics:** add responseCounts query ([2a97d48](https://github.com/botfront/botfront/commit/2a97d48cad2d88388c53516b38bb85e633769c1b))
* **analytics:** add storybook ([163a7cb](https://github.com/botfront/botfront/commit/163a7cbac7e3aa4547b36018492b0450775866a1))
* **analytics:** added title and chart selection ([4b829b8](https://github.com/botfront/botfront/commit/4b829b8f835643d7a8e75f7825a8c416f3bb0cfb))
* **analytics:** analyticsCard ([f9d7f71](https://github.com/botfront/botfront/commit/f9d7f71ebc8e537d4be5fc4624dd35c34e058a9e))
* **analytics:** change from voronoi mesh to slice tooltips ([3f3d11b](https://github.com/botfront/botfront/commit/3f3d11b07858c967e3a4aaf94481120721023985))
* **analytics:** defaults, add query fields ([0db2d38](https://github.com/botfront/botfront/commit/0db2d3897b1bf00c618535c370eecb6f46967d53))
* **analytics:** discard data points with no timestamp ([fe09821](https://github.com/botfront/botfront/commit/fe0982101e680d65354379eca3ad7b0b7139ab99))
* **analytics:** fix axis/point alignment ([5b35f4c](https://github.com/botfront/botfront/commit/5b35f4cbca8c9e9e7641b17bdf6f2fdcc00c31da))
* **analytics:** graph components ([6f583e9](https://github.com/botfront/botfront/commit/6f583e9fb41dfd1bcb90e7be3e5a53b79c53affc))
* **analytics:** name buckets by right bound ([d904198](https://github.com/botfront/botfront/commit/d904198cea22dd3d70f46c69d6682f4320dcd925))
* **analytics:** new cards ([1236f50](https://github.com/botfront/botfront/commit/1236f50913e631e84afb6c486abe1cef3c960f83))
* **analytics:** pluralization ([9335719](https://github.com/botfront/botfront/commit/933571965019b8339c2fb9ebbaf3f920eb45839d))
* **analytics:** refactor props ([58a5807](https://github.com/botfront/botfront/commit/58a58073a582b1b334118c9a2552e436eb4fd399))
* **analytics:** refactor props ([4ec2c5e](https://github.com/botfront/botfront/commit/4ec2c5e79ef4a45bcf583434c13c2bd1a45e4c47))
* **analytics:** refactor using useQuery hook ([eefc3e1](https://github.com/botfront/botfront/commit/eefc3e1d0c9b82b7483e69cb4a65a96db15ff912))
* prototyp convo length charts ([466b86d](https://github.com/botfront/botfront/commit/466b86df4b85a948eb8d9fcf9914f3d862beed5c))
* tests for the datepicker Component ([553ba02](https://github.com/botfront/botfront/commit/553ba02e55c93bf34f56eb7fe383cfc10221228b))


### Bug Fixes

* dimensions in NLU statistics ([33de3f1](https://github.com/botfront/botfront/commit/33de3f1d024a1e1345c0e2ab4d7439091ebae67a))
* fixed press enter to add message ([2743081](https://github.com/botfront/botfront/commit/2743081746db469013caed6c8d80f31d786a0719))
* routes broken after merge ([8051772](https://github.com/botfront/botfront/commit/80517725d1b4b8a9a7e54afbab7dc8835bd02fb5))

## [0.17.0-ee.6](https://github.com/botfront/botfront/compare/v0.17.0-ee.5...v0.17.0-ee.6) (2019-10-29)

## [0.17.0-ee.5](https://github.com/botfront/botfront/compare/v0.17.0-ee.4...v0.17.0-ee.5) (2019-10-29)

## [0.17.0-ee.4](https://github.com/botfront/botfront/compare/v0.17.0-ee.3...v0.17.0-ee.4) (2019-10-28)

## [0.17.0-ee.3](https://github.com/botfront/botfront/compare/v0.17.0-ee.2...v0.17.0-ee.3) (2019-10-28)

## [0.17.0-ee.2](https://github.com/botfront/botfront/compare/v0.17.0-ee.1...v0.17.0-ee.2) (2019-10-27)

## [0.17.0-ee.1](https://github.com/botfront/botfront/compare/v0.17.0...v0.17.0-ee.1) (2019-10-27)


### Features

* **forms:** basic support for forms in conv. builder ([c160d99](https://github.com/botfront/botfront/commit/c160d99a5077bd3e4418aa11b5301ad7644f30e1))


### Bug Fixes

* issue when a project did not have deployment envs ([c3c901b](https://github.com/botfront/botfront/commit/c3c901b0aeb6f02caced7a04f1877859e3448745))

### [0.16.3-rc.1-ee.4](https://github.com/botfront/botfront/compare/v0.16.3-rc.1-ee.3...v0.16.3-rc.1-ee.4) (2019-10-21)

### [0.16.3-rc.1-ee.3](https://github.com/botfront/botfront/compare/v0.16.3-rc.1-ee.2...v0.16.3-rc.1-ee.3) (2019-10-21)


### Bug Fixes

* check if there is environments before adding them to the options ([bb29363](https://github.com/botfront/botfront/commit/bb293635506923b63ea613d345ea3b17e74d4095))
* test for env change, uses api to insert new conversations ([f728eaa](https://github.com/botfront/botfront/commit/f728eaac78813ce820be53fcb1874cd910db9afd))

### [0.16.3-rc.1-ee.2](https://github.com/botfront/botfront/compare/v0.16.3-rc.1-ee.1...v0.16.3-rc.1-ee.2) (2019-10-21)

### [0.16.3-rc.1-ee.1](https://github.com/botfront/botfront/compare/v0.16.3-rc.1...v0.16.3-rc.1-ee.1) (2019-10-20)

### [0.16.3-ee.1](https://github.com/botfront/botfront/compare/v0.16.3...v0.16.3-ee.1) (2019-10-18)


### Features

* **forms:** first commit ([b489bf2](https://github.com/botfront/botfront/commit/b489bf211a474f2dec93245818c3574ab7e7586b))

### [0.16.2-ee.6](https://github.com/botfront/botfront/compare/v0.16.2-ee.5...v0.16.2-ee.6) (2019-10-17)


### Bug Fixes

* fixed permission for entities in story editor ([e7f3488](https://github.com/botfront/botfront/commit/e7f3488adf6c621c5bcc59ef9c68457245d11ab8))

### [0.16.2-ee.5](https://github.com/botfront/botfront/compare/v0.16.2-ee.4...v0.16.2-ee.5) (2019-10-16)

### [0.16.2-ee.4](https://github.com/botfront/botfront/compare/v0.16.2-ee.3...v0.16.2-ee.4) (2019-10-16)

### [0.16.2-ee.3](https://github.com/botfront/botfront/compare/v0.16.2-ee.2...v0.16.2-ee.3) (2019-10-16)


### Features

* conversation environement selector ui ([15472b3](https://github.com/botfront/botfront/commit/15472b3e51473264b9a3860389ed2337af4dbcdc))
* corrections following tests ([532a336](https://github.com/botfront/botfront/commit/532a3367810085dca06383cc4d47540a818f0577))
* environement selector in conversations ([0e958bd](https://github.com/botfront/botfront/commit/0e958bdd751a0d8664bac4c8ae9685768df6e803))
* tests for multi environments in conversations ([ba98e92](https://github.com/botfront/botfront/commit/ba98e9268bf98f9cce2e49ccaa4cb8ed62c009de))


### Bug Fixes

* update regex so it handle change of root url ([d4bd05f](https://github.com/botfront/botfront/commit/d4bd05f92b1985d39ac72400ad58f30245f928eb))

### [0.16.2-ee.2](https://github.com/botfront/botfront/compare/v0.16.2-ee.1...v0.16.2-ee.2) (2019-10-10)

### [0.16.2-ee.1](https://github.com/botfront/botfront/compare/v0.16.2...v0.16.2-ee.1) (2019-10-10)


### Bug Fixes

* project deletion test was not working on the cloud ci ([ba08842](https://github.com/botfront/botfront/commit/ba08842d21caae4a2313abec035a06fca036bf3f))

## [0.16.0-rc.13-ee.1](https://github.com/botfront/botfront/compare/v0.16.0-rc.13...v0.16.0-rc.13-ee.1) (2019-10-09)

## [0.16.0-rc.12-ee.2](https://github.com/botfront/botfront/compare/v0.16.0-rc.12-ee.1...v0.16.0-rc.12-ee.2) (2019-10-09)

## [0.16.0-rc.12-ee.1](https://github.com/botfront/botfront/compare/v0.16.0-rc.12...v0.16.0-rc.12-ee.1) (2019-10-09)

## [0.16.0-rc.11-ee.2](https://github.com/botfront/botfront/compare/v0.16.0-rc.11-ee.1...v0.16.0-rc.11-ee.2) (2019-10-07)


### Bug Fixes

* display the current language response content ([9fe6d2f](https://github.com/botfront/botfront/commit/9fe6d2f9133a0370f635b8ca7013c549a93ae6e2))

## [0.16.0-rc.11-ee.1](https://github.com/botfront/botfront/compare/v0.16.0-rc.10-ee.2...v0.16.0-rc.11-ee.1) (2019-10-04)


### Features

* test for the creation/deletion of  a project ([8f2e536](https://github.com/botfront/botfront/commit/8f2e5362edacb24177949dab64a97789a312f344))


### Bug Fixes

* improve project test to ensure ([e7b9f00](https://github.com/botfront/botfront/commit/e7b9f00a940d1d4885d90558ebc68251553798c0))
* project deletionan optional argument did not have default value ([ba0bd0b](https://github.com/botfront/botfront/commit/ba0bd0b24e753b2756d657cec1fb5522f05f30e9))

## [0.16.0-rc.10-ee.2](https://github.com/botfront/botfront/compare/v0.16.0-rc.10-ee.1...v0.16.0-rc.10-ee.2) (2019-10-03)

## [0.16.0-rc.10-ee.1](https://github.com/botfront/botfront/compare/v0.16.0-rc.10...v0.16.0-rc.10-ee.1) (2019-10-03)

## [0.16.0-rc.9-ee.2](https://github.com/botfront/botfront/compare/v0.16.0-rc.9-ee.1...v0.16.0-rc.9-ee.2) (2019-09-30)

## [0.16.0-rc.9-ee.1](https://github.com/botfront/botfront/compare/v0.16.0-rc.9...v0.16.0-rc.9-ee.1) (2019-09-26)


### Features

* default default domain in admin settings ([5e2fe07](https://github.com/botfront/botfront/commit/5e2fe07cab67cdfef5677b400f48bc8818149ec3))


### Bug Fixes

* default default domain for gke ([ae3e116](https://github.com/botfront/botfront/commit/ae3e11628a5f62d1f7c159b7da687768b98dc702))

## [0.16.0-rc.8-ee.3](https://github.com/botfront/botfront/compare/v0.16.0-rc.8-ee.2...v0.16.0-rc.8-ee.3) (2019-09-24)

## [0.16.0-rc.8-ee.2](https://github.com/botfront/botfront/compare/v0.16.0-rc.8-ee.1...v0.16.0-rc.8-ee.2) (2019-09-23)

## [0.16.0-rc.8-ee.1](https://github.com/botfront/botfront/compare/v0.16.0-rc.8...v0.16.0-rc.8-ee.1) (2019-09-23)


### Features

* added default settings for gke dev ([70f5739](https://github.com/botfront/botfront/commit/70f573965103edc8614994015e18e1bca23f6d3f))
* story error boundary ([e665afb](https://github.com/botfront/botfront/commit/e665afbb09e9d96101e08291e70635b61ed8b34e))


### Bug Fixes

* better errors for templates and slots ([c5becb9](https://github.com/botfront/botfront/commit/c5becb90b9301a0ddf0e2ecd81237fe11f91e412))
* story errors related to templates ([7a2f9ec](https://github.com/botfront/botfront/commit/7a2f9ec3f9b2ba7506f04554759b97b5ea9314a9))

## [0.16.0-rc.7-ee.2](https://github.com/botfront/botfront/compare/v0.16.0-rc.7-ee.1...v0.16.0-rc.7-ee.2) (2019-09-17)


### Bug Fixes

* float slot set to float value ([df8bddf](https://github.com/botfront/botfront/commit/df8bddfd56602bad362572730c3d36d8c1271e01))
* null slots represented as strings ([0c93d3f](https://github.com/botfront/botfront/commit/0c93d3fb5115b6ffedf3882482bc09a3ca87a419))

## [0.16.0-rc.7-ee.1](https://github.com/botfront/botfront/compare/v0.16.0-rc.7...v0.16.0-rc.7-ee.1) (2019-09-13)


### Features

* **offline templates:** error catching for missing templates ([07019bd](https://github.com/botfront/botfront/commit/07019bdceddb389a471b57c7d6a16e91277ffa6b))
* add a popup for story group exception alerts ([5fe6531](https://github.com/botfront/botfront/commit/5fe653116a7f5ed2b745f20688c3b50abafad8d5))
* **offline templates:** full responses are exported with domain ([6478df2](https://github.com/botfront/botfront/commit/6478df2464d0941e4ad1c1554d0d93f2b7060839))
* add bad lines to prevent crashes on md error ([894c6eb](https://github.com/botfront/botfront/commit/894c6eb4e6d1f85c1d5ec61b8d116fcfd9bca197))
* add BadLineLabel for errors in visual editor ([ff13088](https://github.com/botfront/botfront/commit/ff130889e18c8dd8f5cac873838d5eb9a508960f))
* add exceptions in visual story editor ([2333986](https://github.com/botfront/botfront/commit/2333986828680c0d669764cb49fde453eaa75d65))
* add icon indicators for story exceptions ([77e788b](https://github.com/botfront/botfront/commit/77e788b33d033e2dc5510ecbc90d4e4167da77ba))
* add icon indicators for story exceptions ([2ca4bb8](https://github.com/botfront/botfront/commit/2ca4bb87c3a9d8fcf53df46b80934af412a42d5b))
* add response context to StotyEditorContainer ([4344938](https://github.com/botfront/botfront/commit/43449385c119eb30fae28106a7eca802c548121b))
* collapsable stories ([f52d54b](https://github.com/botfront/botfront/commit/f52d54b1cdc6393a4781d82d4bbc65c467371b1a))
* exclude stories with errors from training ([bde114b](https://github.com/botfront/botfront/commit/bde114bcd9b5e2af09e8dfbd845116fc15777546))
* frontend excepetion handling in visual story ([acb6d93](https://github.com/botfront/botfront/commit/acb6d93a12fe7ad1a281f4ea8322dd048b4fc4de))
* links to Spectrum in menu and docs ([3f77d44](https://github.com/botfront/botfront/commit/3f77d44145330997d2200680f7407a7412123552))
* merge deleted stories ([ebab5f6](https://github.com/botfront/botfront/commit/ebab5f606ac6f01d394c3622f883926a47a572a1))


### Bug Fixes

*  bot responses wrap correctly if unhovered ([0c9ccb3](https://github.com/botfront/botfront/commit/0c9ccb341be6466feea9b792d7e472d54b566d17))
* add empty branches to new stories ([f6d810e](https://github.com/botfront/botfront/commit/f6d810e720cad70e331cfc4c35d3c858edc6a406))
* add quickreply button hiddem ([739f1c4](https://github.com/botfront/botfront/commit/739f1c4352a46b734c185fab0c54e87299e8b63d))
* adjust line height for story group menu items ([33f3648](https://github.com/botfront/botfront/commit/33f36488a71e3ccb2a595b141a314bdd4f005d43))
* alerts not removed if intro story deleted ([7f49c41](https://github.com/botfront/botfront/commit/7f49c41504f3f44a4c6b8295c4d2f29a718ba0d8))
* backwards compatibility for exceptions ([198d3c3](https://github.com/botfront/botfront/commit/198d3c354106a23c95285cbfbc0865b37f27e66a))
* crash in BranchTabLabel with old DataBases ([be8e625](https://github.com/botfront/botfront/commit/be8e625cb54d825d893aceb56be62bbd14555e3c))
* crash in BranchTabLabel with old DataBases ([3513ea3](https://github.com/botfront/botfront/commit/3513ea3298a15056b9f9a655d40457b422822858))
* crashing in story utils with old DBs ([14b1763](https://github.com/botfront/botfront/commit/14b1763b24490e40d335b866fd22cbe4c42a52c1))
* default settings prevent widget display ([a6b8553](https://github.com/botfront/botfront/commit/a6b855327a01adac57cd7a29c66584342404c37f))
* deleting a story deletes the whole story group ([9401987](https://github.com/botfront/botfront/commit/9401987b197fbfd58ba844fd9cb6cb0258cfce02))
* display warnings for bot responses ([6662be4](https://github.com/botfront/botfront/commit/6662be44e3075ec61b586ad99e7c61f5f64afcc1))
* empty default object in extractDomain ([086d1b1](https://github.com/botfront/botfront/commit/086d1b1be63542c644d1fa97918a0758c6832d5a))
* error when no warnings/errors ([a4cda4e](https://github.com/botfront/botfront/commit/a4cda4ef4621115f1e1cf016152b87c3e560052a))
* exceptionAlerts warnings passed bad prop ([1279ce3](https://github.com/botfront/botfront/commit/1279ce308138d038d9515c551b083c908fe833b3))
* extra character caused a crash on start ([ecad735](https://github.com/botfront/botfront/commit/ecad735451197ad9de4263760723b373add6f296))
* project.deployment test fix ([2103e23](https://github.com/botfront/botfront/commit/2103e23034148f36563b41b5f49fb36d7e97ab4c))
* remove console.log and es lint errors ([0735601](https://github.com/botfront/botfront/commit/073560183814f0e128eab4c030fe9a15295b5dc0))
* remove duplicate context ([e53b222](https://github.com/botfront/botfront/commit/e53b22206dc7b2450be7c46b46c20b3908b759d9))
* show success message after CLI install ([5fa3642](https://github.com/botfront/botfront/commit/5fa364229071be53e510d0553c2dba9b7ce72566))
* stop crash when creating new story group ([f603527](https://github.com/botfront/botfront/commit/f6035276f73a26d07844d7af044f2308ca9ff1ed))
* story groups not deleting ([fe86a65](https://github.com/botfront/botfront/commit/fe86a65ce7fbb933bd01849f6e9fba1568ec1f6b))
* storyGroupMenu selected items are blue ([f071f4a](https://github.com/botfront/botfront/commit/f071f4a7f007645e16031019ea72ceaa382e2bda))
* the selected story group is blue ([f59a903](https://github.com/botfront/botfront/commit/f59a90395cf097d806478d53ca3731d8ecacb617))
* typo in docker compose template ([f9db13b](https://github.com/botfront/botfront/commit/f9db13b383b86e55f119fffb840722fdf00ee357))
* undefined bot responses preventing training ([f912b43](https://github.com/botfront/botfront/commit/f912b43a9e5e33819213cbf12dc0a7ce6eb5e559))
* visual editor lines with no type are BadLines ([b8b06fd](https://github.com/botfront/botfront/commit/b8b06fdfb416df4918bf1313ffefdd376a29d3e5))
* wrong default base_url in credentials ([a38a0c9](https://github.com/botfront/botfront/commit/a38a0c95fdb89b13cb07f5f990a0468460381468))

## [0.16.0-rc.4-ee.1](https://github.com/botfront/botfront/compare/v0.16.0-rc.4...v0.16.0-rc.4-ee.1) (2019-09-11)


### Features

* add deployment tab to settings menu ([779b360](https://github.com/botfront/botfront/commit/779b3600b26027cd79edbc82e26b06110898dd00))
* add option to enable additional environment ([3f4186a](https://github.com/botfront/botfront/commit/3f4186a084c2d4b81c29a6655480880e67166079))
* add seperate environments and settings ([679eb09](https://github.com/botfront/botfront/commit/679eb093615e583fc09f635a7d97ff90e5816b83))
* add style.less file for settings ui ([f008256](https://github.com/botfront/botfront/commit/f008256ba8622b85a95e4e98e4b2d8b14718e877))
* create tests for deployment env settings ([2937518](https://github.com/botfront/botfront/commit/293751829c971df9e8b8658c14e1f99823165686))


### Bug Fixes

* add backwards compatability for data ([f4b8cce](https://github.com/botfront/botfront/commit/f4b8ccead29a688f71aa60c83462c01c66069f95))
* cannot add environment - namespace missing ([8ccefcd](https://github.com/botfront/botfront/commit/8ccefcd7088039c41b9133497810eac29c3c5701))
* change constants.json import to new path ([1aacb37](https://github.com/botfront/botfront/commit/1aacb37704b13a918e73c2ad4f6cb207040f08e2))
* change credentials env menu to render once ([59d6652](https://github.com/botfront/botfront/commit/59d66522b840688f000c7743fb4a254a1468925d))
* stop ace editor unsaved text carryover ([9d6a79c](https://github.com/botfront/botfront/commit/9d6a79cdac45a6a942583ec90dddf4e1eed97753))
* undefined environment handling ([becb592](https://github.com/botfront/botfront/commit/becb5927f81d8a10a407adf89e59607054bd3bd1))
* undefined environment tag handling ([4d01b4d](https://github.com/botfront/botfront/commit/4d01b4d727bbd8a941292b2489cdf7c58f26ddcf))

### [0.15.5-ee.13](https://github.com/botfront/botfront/compare/v0.15.5-ee.12...v0.15.5-ee.13) (2019-09-05)

### [0.15.5-ee.12](https://github.com/botfront/botfront/compare/v0.15.5-ee.11...v0.15.5-ee.12) (2019-09-04)

### [0.15.5-ee.11](https://github.com/botfront/botfront/compare/v0.15.5-ee.10...v0.15.5-ee.11) (2019-08-28)


### Bug Fixes

* add language param to bot response template ([38300c7](https://github.com/botfront/botfront/commit/38300c75fd818d23a52f826ea342379472cd7da8))
* remove console.log ([58fb26f](https://github.com/botfront/botfront/commit/58fb26f84d7424dfdef3043e0cfc0204d7a50785))

### [0.15.5-ee.10](https://github.com/botfront/botfront/compare/v0.15.5-ee.9...v0.15.5-ee.10) (2019-08-25)


### Bug Fixes

* postinstall script ([2c62076](https://github.com/botfront/botfront/commit/2c62076865a4efa1ab24c2c9f8e9f66c0740c9e0))
* unwanted utterance persistence ([e7f7a8c](https://github.com/botfront/botfront/commit/e7f7a8cd2571c98d76c6f1d8fc23b4276eff79a1))
* wrong binary name ([a38ed67](https://github.com/botfront/botfront/commit/a38ed67f745955353fc5194c59c772974d9352f2))

### [0.15.5-ee.9](https://github.com/botfront/botfront/compare/v0.15.5-ee.8...v0.15.5-ee.9) (2019-08-19)

### [0.15.5-ee.8](https://github.com/botfront/botfront/compare/v0.15.5-ee.7...v0.15.5-ee.8) (2019-08-19)

### [0.15.5-ee.7](https://github.com/botfront/botfront/compare/v0.15.5-ee.6...v0.15.5-ee.7) (2019-08-16)


### Features

* **quick replies:** comply with Messenger protocol ([02b65a3](https://github.com/botfront/botfront/commit/02b65a3fe10f67adfcdee8fc62b2fb753982039d))
* **quick replies:** first commit ([746c88d](https://github.com/botfront/botfront/commit/746c88d4abf5b1c4a1f2b6f2484b46f6d86a0e3d))
* **quick replies:** refactor state management ([cbd718e](https://github.com/botfront/botfront/commit/cbd718e6f01087899c88c659683f1c0e0d58bcd5))
* **quick replies:** save text-less responses ([5dbfcae](https://github.com/botfront/botfront/commit/5dbfcaed8597fd386065ad7dc8c304781c6a85c2))
* **slot popup content:** link to slots ([846d8e5](https://github.com/botfront/botfront/commit/846d8e552e17213b3f02f3509f80f06afe2fef66))
* **visual editor:** close all hanging menus onmouseleave ([5c97eb4](https://github.com/botfront/botfront/commit/5c97eb4786bf95b6d885e22402be73b47504160b))


### Bug Fixes

* delete response on empty text ([a1924d4](https://github.com/botfront/botfront/commit/a1924d41ded4bc072e6ab9381d415c36af82fe29))
* delete response on empty text ([2c75938](https://github.com/botfront/botfront/commit/2c75938e1aa530320254cf4e834681c91e9ad1e2))
* typo in utility function ([e6df4a9](https://github.com/botfront/botfront/commit/e6df4a9f4c340739f1a809734352f4bd152d0296))

### [0.15.5-ee.6](https://github.com/botfront/botfront/compare/v0.15.5-ee.5...v0.15.5-ee.6) (2019-08-15)


### Features

* cli for EE ([3be4be6](https://github.com/botfront/botfront/commit/3be4be651ebc61c45fec21233fbb1a00b6279992))

### [0.15.5-ee.5](https://github.com/botfront/botfront/compare/v0.15.5-ee.4...v0.15.5-ee.5) (2019-08-14)


### Features

* **story controller:** getPossibleInsertions ([61d4f58](https://github.com/botfront/botfront/commit/61d4f585632c7ddf1e46eb9c2821cfcc03b5fe01))
* **user utterance container:** save on blur ([63a1cc5](https://github.com/botfront/botfront/commit/63a1cc55561485a946a12821577639c243cfdf7b))
* **user utterance container:** save on blur ([907443c](https://github.com/botfront/botfront/commit/907443cefc78a04e7536c4bdd8b3345e47803499))


### Bug Fixes

* focus bug with bot utterance input ([cf35888](https://github.com/botfront/botfront/commit/cf358885cc80e8cf03198f060d91b5eb91a8b6d1))
* prop type declaration ([7ea7f27](https://github.com/botfront/botfront/commit/7ea7f27aabfb434bdeacf46ff0e343451008aa0a))

### [0.15.5-ee.4](https://github.com/botfront/botfront/compare/v0.15.5-ee.3...v0.15.5-ee.4) (2019-08-12)


### Features

* **bot response:** new bubble on enter ([045bec2](https://github.com/botfront/botfront/commit/045bec2c3cc16995992a3f40a4cc5b01e0c05d89))
* **bot response input:** change placeholder ([6adefbe](https://github.com/botfront/botfront/commit/6adefbe55380abb1ff6213c447ade141ac68039d))
* disable loading model from bucket ([fa8f4cf](https://github.com/botfront/botfront/commit/fa8f4cf5ca02053c52c9a104f64ed1ddb9165269))


### Bug Fixes

* comment onChange prop for UtteranceContainer ([91372bd](https://github.com/botfront/botfront/commit/91372bdeed1fb8bc4546bdd440984dfccbd995fa))
* wrong db initialization ([4988954](https://github.com/botfront/botfront/commit/4988954618484fe291fe1272cf539f2372a84680))

### [0.15.5-ee.3](https://github.com/botfront/botfront/compare/v0.15.5-ee.2...v0.15.5-ee.3) (2019-08-12)

### [0.15.5-ee.2](https://github.com/botfront/botfront/compare/v0.15.5...v0.15.5-ee.2) (2019-08-12)


### Features

* **action viewer:** Add action viewer component. ([3c25573](https://github.com/botfront/botfront/commit/3c2557342f46d0d543a2b07b1b236005416ce3c8))
* **action viewer:** Add action viewer component. ([3870668](https://github.com/botfront/botfront/commit/3870668c330fe02b39879d2119bf0ee7ea18121e))
* **ActionPopupContent/SlotPopupContent:** misc ([a7d05a4](https://github.com/botfront/botfront/commit/a7d05a46847b74b09f4ebe9c4c541bf440522b38))
* **BotResponseContainer:** edit mode ([aab2cc2](https://github.com/botfront/botfront/commit/aab2cc265050aa9b586d9e3c8cb4483017433f88))
* **BotResponseContainer:** wip ([91380c7](https://github.com/botfront/botfront/commit/91380c750316f4c6081afbc4e636cb79e06f9d35))
* **BotResponseContainer:** wip ([8db4b47](https://github.com/botfront/botfront/commit/8db4b47e3b4ef12ffa2fe29e24809de56cdb083f))
* **BotResponsePopupContent:** fix close on modal open ([ae02426](https://github.com/botfront/botfront/commit/ae02426d1e1f16282c8c0ea889daea371e9fd189))
* **BotResponsesContainer:** click ellipsis to insert ([efd2e61](https://github.com/botfront/botfront/commit/efd2e61eeab63b26d2bc231796aa7bc5c0ba69c2))
* **slot-label:** add slot label ([f0627fb](https://github.com/botfront/botfront/commit/f0627fbc4083aba78ba569f1856785bac1a75c94))
* **slot-label:** add slot label ([cb730b8](https://github.com/botfront/botfront/commit/cb730b85692ecd034493b30b33111e4754d697eb))
* **stories:** add toggle to switch between markdown/visual editor ([b66e2c9](https://github.com/botfront/botfront/commit/b66e2c9cf2f37ee6974eab2ecf070309b313d062))
* **StoryController:** initial commit ([4b2ccc5](https://github.com/botfront/botfront/commit/4b2ccc59b6a8229fcab89e3e0e11bfe088551bc4))
* **StoryVisualEditor:** better insert experience ([8c54aeb](https://github.com/botfront/botfront/commit/8c54aeb3e4733051b2ed381bd388706be160c386))
* **StoryVisualEditor:** can add action and slot ([8a2e843](https://github.com/botfront/botfront/commit/8a2e843d0fbe8b5fbd1f499c9d7c8c9fa17f16ab))
* **StoryVisualEditor:** can add action and slot ([894f69a](https://github.com/botfront/botfront/commit/894f69a3ac6b330917cbde905bdebfa2254b3318))
* **StoryVisualEditor:** can add every type of line ([f30b840](https://github.com/botfront/botfront/commit/f30b840f7c33db951f88caab8c2e1ad2ca8d2bc4))
* **StoryVisualEditor:** can add every type of line ([91573b3](https://github.com/botfront/botfront/commit/91573b3eb7491c2a4e58fd829380f6786f08578a))
* **StoryVisualEditor:** style specificity ([8b135e4](https://github.com/botfront/botfront/commit/8b135e44ecdb36c2165e43231d659c944074ea47))
* quick replies component ([4e81555](https://github.com/botfront/botfront/commit/4e81555d96011e207d95504dae145b690e689f4b))
* **StoryVisualEditor:** can add user utterance from input ([fcb173f](https://github.com/botfront/botfront/commit/fcb173f29af43609404cc984bd64d3aa9880c781))
* **StoryVisualEditor:** can add user utterance from input ([d5793ce](https://github.com/botfront/botfront/commit/d5793ce9363b2d4bfca2d7cc08478378e3a13f85))
* **StoryVisualEditor:** can add user utterance from payload ([37be9b8](https://github.com/botfront/botfront/commit/37be9b81182e8751e29517fdc0dbcc24ed6d70c2))
* **StoryVisualEditor:** can add user utterance from payload ([1bef4f6](https://github.com/botfront/botfront/commit/1bef4f69674a481189b3ef92c5abff453a5e7263))
* **StoryVisualEditor:** don't display error on payload fetch fail ([4af8dc4](https://github.com/botfront/botfront/commit/4af8dc41072051c71439b7c7e4d99e1c05e18b91))
* **StoryVisualEditor:** don't update DOM when blur target is descendent ([f58c0d7](https://github.com/botfront/botfront/commit/f58c0d75b75aed8ffeb88afd0f9baceef8a5f927))
* **StoryVisualEditor:** integrate getUtteranceFromPayload ([2ae6824](https://github.com/botfront/botfront/commit/2ae68244c1a4aac8e680c4d6aa0453f7d518d551))
* **StoryVisualEditor:** integration ([37d4a4d](https://github.com/botfront/botfront/commit/37d4a4d19c80c4946a3e9c25be0a3b48c45affaf))
* **StoryVisualEditor:** new utterances are parsed ([bd1e888](https://github.com/botfront/botfront/commit/bd1e8889366d8c1dc433a2642de6b2c9d5126f05))
* **StoryVisualEditor:** null intents marked with dash ([8b0dbd0](https://github.com/botfront/botfront/commit/8b0dbd03f798c8f1788d3360b7893c92238a6889))
* **StoryVisualEditor:** place insertLine cursor on last line by default ([11db5de](https://github.com/botfront/botfront/commit/11db5de000034ce48bb2baae7eb522dba7a6e5fa))
* **StoryVisualEditor:** remove duplicate method ([05d8586](https://github.com/botfront/botfront/commit/05d85863400eb41b69c0ddfe2eb23446254d2e38))
* **StoryVisualEditor:** style fixes; add trash to action and slot lines ([6c90a16](https://github.com/botfront/botfront/commit/6c90a16b6088bdfbfbc54eb9d90fa1abf2839c77))
* **StoryVisualEditor:** use StoryController ([9e342af](https://github.com/botfront/botfront/commit/9e342af0cfff5bb271b9b64e2ba3f0b7caa29485))
* **StoryVisualEditor:** wip ([104ec88](https://github.com/botfront/botfront/commit/104ec88114983a9a42b187727efb3688702627e7))
* **toggle:** make toggle appear outside intro stories ([3dd3c8a](https://github.com/botfront/botfront/commit/3dd3c8a5def4873be7cbf8cbd6d2b81ea6b39aa0))
* **toggle:** refactor style ([75267c3](https://github.com/botfront/botfront/commit/75267c37dab4929c1f0f29a022f37e82eb357d45))
* **UserUtteranceContainer:** fill onDelete prop ([053cd8e](https://github.com/botfront/botfront/commit/053cd8e70249f63bffde514e724c25142cc82895))
* **UtteranceContainer:** wip ([a41abfe](https://github.com/botfront/botfront/commit/a41abfe6c64928e0121940169a564d742d6c21fe))
* **UtteranceContainer:** wip ([cce53b2](https://github.com/botfront/botfront/commit/cce53b23502a204018fde905cf9d12a034895570))
* **VisualStoryEditor:** wip ([4d524ca](https://github.com/botfront/botfront/commit/4d524caf82dbe5df4545b0b7541864677d8bbab0))
* **VisualStoryEditor:** wip ([2097fe8](https://github.com/botfront/botfront/commit/2097fe83c32243a1010986bb7bd695b87cd23d6e))
* context setup for stories ([2bfe62a](https://github.com/botfront/botfront/commit/2bfe62aac632eb7aa6d3ce07caa26ec05d551c82))
* get utterance from payload ([6a8d13b](https://github.com/botfront/botfront/commit/6a8d13b969f3bbe05d849bf2a596d343770a07d0))
* method to insert an example with the language ([1f33dc8](https://github.com/botfront/botfront/commit/1f33dc8d08a88444511c92c02e660b48481f2e47))
* persist story mode ([f370e0e](https://github.com/botfront/botfront/commit/f370e0ececdb42ed335285c120a33821577c8450))


### Bug Fixes

* deletable on all visual story editor lines ([2d13697](https://github.com/botfront/botfront/commit/2d13697be9e669fa5f6e60a93dbad159079d598d))
* duplicate imports ([e420372](https://github.com/botfront/botfront/commit/e4203720fb06a94024c71c32e765a029b3765634))
* preprend ci script with npx ([cffad49](https://github.com/botfront/botfront/commit/cffad491a22b7ca6db8d8870506f650815799196))
* regex to set correct image version on release ([1b99e3d](https://github.com/botfront/botfront/commit/1b99e3d7ba22b40a87a6de46640ac1c05ac4ebee))
* **initial-payload:** payload for the widget is unique ([ee54b44](https://github.com/botfront/botfront/commit/ee54b44a3146960d605ee04df71826d8f90580d4))
* **slot popup:** show only categories relevant to selected slot ([69c3a0d](https://github.com/botfront/botfront/commit/69c3a0db29fa2c6e6dbf40fc28cecc522a4ddee4))
* **Stories:** wip-- toggle between code and visual ([a37d830](https://github.com/botfront/botfront/commit/a37d8308ca8ef321b0c7e95a4ca86dde32af4510))
* unique key warning ([cdd5de8](https://github.com/botfront/botfront/commit/cdd5de85184a3b731251bc76a8a34f5402d4e43e))
* wrong second argument for useEffect ([9295c61](https://github.com/botfront/botfront/commit/9295c61ea93884ddb5f4db91852d5d438d39043c))
* wrong second argument for useEffect ([2ecc37d](https://github.com/botfront/botfront/commit/2ecc37dd2e8a10b7dbcc40b626bb8e65d40e46be))
* **StoryVisualEditor:** place insertLine cursor on last line by default ([027bff4](https://github.com/botfront/botfront/commit/027bff4a694e16983192cd4ccbcb6bc9140956fb))
* **StoryVisualEditor:** place insertLine cursor on last line by default ([73b2c46](https://github.com/botfront/botfront/commit/73b2c468253b7e5a0432c3d72ef9179ec89bd8a5))
* **VisualStoryEditor:** don't save invalid Md ([c660809](https://github.com/botfront/botfront/commit/c660809727d7f4b3661a1b1bfbe3389f334f36e3))

### [0.15.2-ee.1](https://github.com/botfront/botfront/compare/v0.15.2...v0.15.2-ee.1) (2019-07-25)


### Features

* **Action/UserUtterancePopupContent:** don't save on whitespace or null ([7add46d](https://github.com/botfront/botfront/commit/7add46d83b50bdbee00ae5bc117366ac1549414a))
* **ActionPopupContent:** first commit ([c5a7002](https://github.com/botfront/botfront/commit/c5a7002d7d0deeafaa1bd74df9df7e0a47cc89cb))
* **ActionPopupContent:** fix overzealous search & replace ([c17a199](https://github.com/botfront/botfront/commit/c17a1995b058bb9a0df823ff70160417303a489d))
* **AddStoryLine:** add availableActions prop ([5fcce76](https://github.com/botfront/botfront/commit/5fcce76fa4205f86563801f0322633eedbc2c42b))
* **AddStoryLine:** first commit ([2b3cd75](https://github.com/botfront/botfront/commit/2b3cd75fe90e335392bfaaf46f16fde486c8f625))
* **BotResponsePopupContent:** add limitedSelection prop ([8d3434f](https://github.com/botfront/botfront/commit/8d3434f770820a8a826e2a772b4c569965845263))
* **BotResponsePopupContent:** add noButtonResponse prop ([ecf5141](https://github.com/botfront/botfront/commit/ecf51413c26f6eea57c8cd8fd2790a4a76c4a352))
* **BotResponsePopupContent:** close modal on dimmer click ([9080f5b](https://github.com/botfront/botfront/commit/9080f5b968df82a8686b2fea97a10c30844a09ec))
* **BotResponsePopupContent:** first commit ([4668b22](https://github.com/botfront/botfront/commit/4668b2254b7e1f5ff0ee2fa37611b767d3face15))
* **BotResponsePopupContent:** fix close on modal open ([e977d0a](https://github.com/botfront/botfront/commit/e977d0a5b334f9706db6e0fa7bf435673848b534))
* **BotResponsesContainer:** click ellipsis to insert ([9e73aa8](https://github.com/botfront/botfront/commit/9e73aa8bcd60ffd384c7ed9f6258d1c47b45c979))
* **conversation editor:** DashedButton component ([35b9163](https://github.com/botfront/botfront/commit/35b9163b39f0151c3e107afe90a7aa6fc2386c34))
* **logo:** Added logo field in the global public settings ([8be19f2](https://github.com/botfront/botfront/commit/8be19f2afc7c2dc9a3f95fbaa5408444f2c83865))
* **oos:** change export format from tsv to csv ([9f3abd1](https://github.com/botfront/botfront/commit/9f3abd1875ea747b10a8941b82599be8a627579c))
* **oos:** make intent nullifiable ([b7eae05](https://github.com/botfront/botfront/commit/b7eae052bf6b8c2aa47c5c5bc4765d51e1fe999a))
* **PayloadEditor:** add entity button only shown if all entities have value set ([90d886e](https://github.com/botfront/botfront/commit/90d886e6e2094317e1f850b025d9e6ab674316f3))
* **PayloadEditor:** first commit ([65d676b](https://github.com/botfront/botfront/commit/65d676b926320072d51f26c6da2b19fc7a92918a))
* **rasa-1.0:** Migrated rasa-1.0 from the open source ([e8f4583](https://github.com/botfront/botfront/commit/e8f4583cf5aba5423528aa9272754c013279c7bb))
* **rbac:** added roles for project info & Rules ([de3cd68](https://github.com/botfront/botfront/commit/de3cd6898c873eeed3dd465c32863a5a2ab64320))
* **rbc:** add Process in bulk for nlu-data:w ([7a3b832](https://github.com/botfront/botfront/commit/7a3b832b026064593a85edba214ba4126d4c4a10))
* **rbc:** add roles for activity - validate, delete and intent ([f8a80ac](https://github.com/botfront/botfront/commit/f8a80ac362850475a612db307526db8453425c34))
* **rbc:** add roles for the NLU model menu adn playground ([c5b4a89](https://github.com/botfront/botfront/commit/c5b4a895c626b0ecda042a56f8afeee9e012dfb4))
* **rbc:** add roles to activity panes ([313cae5](https://github.com/botfront/botfront/commit/313cae5f2f28e37dd3330ef0a9a112589002dcb4))
* **rbc:** add roles to NLU model (complete), for frontend ([507f2ba](https://github.com/botfront/botfront/commit/507f2ba9db9d3405bb146914d07b459b78d3186d))
* **rbc:** add roles to NLU model menu ([d4727be](https://github.com/botfront/botfront/commit/d4727be55d339ce1eb1ccbf52e61aa3fbea92d34))
* **rbc:** added roles for project settings ([a748b72](https://github.com/botfront/botfront/commit/a748b72738910f3c4e7a63ace9b57454a828b92d))
* **rbc:** disabled entity popup for required permision ([ef1c71c](https://github.com/botfront/botfront/commit/ef1c71ce7fb0662427e97b4e710c88c6f0941db7))
* **rbc:** new and duplicate models removed instead of disabled ([c9b476e](https://github.com/botfront/botfront/commit/c9b476e9c1c44d40b6d35d8a337d306372a92b35))
* **rbc:** NLU model frontend ([679fb1b](https://github.com/botfront/botfront/commit/679fb1b70a420d45f4094da4904351b9f4e0b8cd))
* **roles:** add viewer, editor and admin for front end ([1e09537](https://github.com/botfront/botfront/commit/1e0953754f1ae109273b17c19e54bd7b80c12a3d))
* **roles:** added backend tests ([176b2c8](https://github.com/botfront/botfront/commit/176b2c855b4f5cef77d5420bdda2bf5928db24f0))
* **roles:** better roles for nlu settings ([8706452](https://github.com/botfront/botfront/commit/8706452599eb8ce29bc587004447ef3787592e70))
* **roles:** conversations ([860bf5d](https://github.com/botfront/botfront/commit/860bf5d18e2db78763970118c4ae450ef8a633b7))
* **roles:** dynamic routing ([eaab9bc](https://github.com/botfront/botfront/commit/eaab9bc752be3fb0ec632a1d914c509ef1a52e9c))
* **roles:** dynamic sidebar and routing + tests ([e3e6012](https://github.com/botfront/botfront/commit/e3e6012b0bf2fb9aa1896a5cae524e4e45e496d2))
* **roles:** improvements ([140fde5](https://github.com/botfront/botfront/commit/140fde553eff1773e90b830ab89a4a307db2075b))
* **roles:** made nlu_models pub secure ([e6209e8](https://github.com/botfront/botfront/commit/e6209e8ba0f5ba073150947b2d76c1be89df7b7a))
* **roles:** nlu models ([23b3d94](https://github.com/botfront/botfront/commit/23b3d94090ae552ca68ad2c682e6f0efe6065031))
* **roles:** nlu-model:x can now view models ([c0ac1ea](https://github.com/botfront/botfront/commit/c0ac1ea3282de50980238ea663e23846cb5bb7d4))
* **roles:** responses ([0d38892](https://github.com/botfront/botfront/commit/0d38892d915d1c088c64ca07d53355d3a50a3b7e))
* **roles:** roles on nlu_model backend ([89ee4f4](https://github.com/botfront/botfront/commit/89ee4f4525a26fcb9530b584d89bcac993ad1ba7))
* **SlotPopupContent:** context controlled by storybook knob ([a81a1e4](https://github.com/botfront/botfront/commit/a81a1e4fa915998196b77608fe3ae6b40ca682e4))
* **SlotPopupContent:** first commit ([4ab79e6](https://github.com/botfront/botfront/commit/4ab79e633e96bcb235fed6fab04e6bfe2afa3f9f))
* **SlotPopupContent:** refactor, add Link ([0c44139](https://github.com/botfront/botfront/commit/0c4413935d79d77c55d98826c1077a52cc9065a9))
* **smart tips:** added boldface parser for tip message body ([bdb58b1](https://github.com/botfront/botfront/commit/bdb58b10608867a1b2b29770febb693517093642))
* **smart tips:** changed message wording ([462326f](https://github.com/botfront/botfront/commit/462326fdfcc630214c5d851657f27d0aed6e3f26))
* **smart tips:** global threshold can now be set in project settings ([e45b0a1](https://github.com/botfront/botfront/commit/e45b0a1d3d7db7c6bdb00b8ebd641fe5e06981d8))
* **smart tips:** integrated smart tips in activity screen ([31a8420](https://github.com/botfront/botfront/commit/31a8420bdc7dc1e1cfab4099ff55f08fe6a6ea4c))
* **smart tips:** make default nlu th 0.75 ([e8abe94](https://github.com/botfront/botfront/commit/e8abe94e4451d909b348f2d1cf09687916f79d73))
* **smart tips:** style -- changed look of action buttons according to spec ([d66949f](https://github.com/botfront/botfront/commit/d66949fd5ba5204fa0d41b2b5356e024dbbf0954))
* **smart tips:** ui changes ([a93b986](https://github.com/botfront/botfront/commit/a93b986c07c52fd5ea066bad9f9fd8718b9eb7d4))
* **stories:** permissions ([09c4d71](https://github.com/botfront/botfront/commit/09c4d716ce10b458a3f620c0cabae2f847e4274b))
* **stories-roles:** Added permission to stories back end. ([90752d8](https://github.com/botfront/botfront/commit/90752d8791805a6c7882cb252e976da81019c1da))
* **stories-roles:** Added permission to stories front end. ([8906edd](https://github.com/botfront/botfront/commit/8906edd154fcc3b407af5ec26506efb0e764ffd7))
* **stories-slots:** Slots and stories are added to ee. ([c36023a](https://github.com/botfront/botfront/commit/c36023a4a23639f9a55f0354b41461b91268c169))
* **StoryVisualEditor:** better insert experience ([87cecdf](https://github.com/botfront/botfront/commit/87cecdf39b5ed487f213104996e7af20f7fbe51a))
* **StoryVisualEditor:** don't update DOM when blur target is descendent ([89808bb](https://github.com/botfront/botfront/commit/89808bb09ea551c9590d34ccde9bf226974df8a6))
* **StoryVisualEditor:** wip ([3408d16](https://github.com/botfront/botfront/commit/3408d1694af91e496e1ca311791ea60776834382))
* **UserUtterancePopupContent:** User says menu ([42f13fe](https://github.com/botfront/botfront/commit/42f13febb4ff27e1a48cca8c500ae98807205273))
* **UtteranceContainer:** wip ([a28bfd1](https://github.com/botfront/botfront/commit/a28bfd15b21abde658c8cee1feaa6a70e540df57))
* **UtteranceContainer:** wip ([291e8d1](https://github.com/botfront/botfront/commit/291e8d1bbee2c53645329cafe2aa753ed0ea8d8e))
* activity api roles ([0ed9f73](https://github.com/botfront/botfront/commit/0ed9f7353f4c80ec6f5c8f759e2d53da0b2eeefb))
* added field to set small logo ([1cd338e](https://github.com/botfront/botfront/commit/1cd338ec228429d38df6d201f4ee528b16ff6ea1))
* re-enabled bot response NLU criterias ([13ef2a2](https://github.com/botfront/botfront/commit/13ef2a2490eb91dcb2f9a3286be31b5f258d9bb5))


### Bug Fixes

* code style ([ca393fd](https://github.com/botfront/botfront/commit/ca393fd5edf9c89b9e835a3d59f547983cce18c4))
* default settings ([423d1bb](https://github.com/botfront/botfront/commit/423d1bbab83af0d85986aafd3c9e21356db81962))
* instance creation on project creation ([5618a3b](https://github.com/botfront/botfront/commit/5618a3bc80ada45f64a1ad76672ed130f1c0a8c6))
* **rbac:** removed unecessary code ([f6f1869](https://github.com/botfront/botfront/commit/f6f186998f243333aca6981b7c9b4de66f7296be))
* storybooks build ([b12047e](https://github.com/botfront/botfront/commit/b12047e08bb2aed7c0f0e255e3ff1e52e10b508e))
* tests were not creating users with scope ([0e2ec0e](https://github.com/botfront/botfront/commit/0e2ec0e84e63362c608ac97d1266bb8d9af213fe))
* **test:** removed nlu-meta spec file ([6f23110](https://github.com/botfront/botfront/commit/6f2311094a98707b193a5276768156b3785b96b7))
* Train button inactive on NLU ([7b791ac](https://github.com/botfront/botfront/commit/7b791ac642d3f0b7431dbd967a9f236da27f8475))
* training data sub ([83f7f2b](https://github.com/botfront/botfront/commit/83f7f2b1037eb19b416be3f60696872715f7c2cb))
* upload model to GCS if GKE and Core bucket present ([5bd9595](https://github.com/botfront/botfront/commit/5bd959582e6063cec8b41eb0d6b594fb24323444))
* useless code changes ([e767c1a](https://github.com/botfront/botfront/commit/e767c1aaf6600022bdca5352f211a1f2ec87c268))
* wrong channel name in default settings ([f5dad8a](https://github.com/botfront/botfront/commit/f5dad8a07e966ae9c80c58a346c89006fb9f1ab0))
* **roles:** reverted back a file ([964fb93](https://github.com/botfront/botfront/commit/964fb938e292fa64e808cb29b9a4bf621c1da99d))
* wrong format in global settings schema ([280437c](https://github.com/botfront/botfront/commit/280437cc767f8a338c5f7db11fdb59cbafc1aa10))
* **project-creation:** bug fix while creating a new project ([44a0019](https://github.com/botfront/botfront/commit/44a0019ec576e3837631725ff74ee38d2e284ac4))
* **rbc:** Fixed nlu-data:w test, Online/Offline button for nlu-model:w ([dd409f4](https://github.com/botfront/botfront/commit/dd409f4439d0f22f7b5e99c8dd32d0e8112b5e5b))
* **roles:** minor fixes ([68a0bc8](https://github.com/botfront/botfront/commit/68a0bc8e5e8aaad59374be711534e7c5c6caebfb))
* **roles:** permissions ([df65719](https://github.com/botfront/botfront/commit/df6571965181baf1d7cc2bb49351cb31b351d2d3))
* **roles:** Removed fieldset ([bbf5758](https://github.com/botfront/botfront/commit/bbf5758faba23f23ff7e8b77d2a5abd30521b256))
* **stories:** Fix roles for stories and train button ([bf85d86](https://github.com/botfront/botfront/commit/bf85d86805cd5342bfec3f4e38d8da2ca9f9525b))
* **test:** Moved chats test after roles test ([1a605cd](https://github.com/botfront/botfront/commit/1a605cdeb1ed39bc30b238d87ca4886e6983d0e8))

## [0.19.0-alpha.4](https://github.com/botfront/botfront/compare/v0.19.0-alpha.3...v0.19.0-alpha.4) (2020-01-07)


### Bug Fixes

* botResponseEditor, prevent close on save ([a6ae54d](https://github.com/botfront/botfront/commit/a6ae54d))
* cannot close empty custom response ([edbfc1d](https://github.com/botfront/botfront/commit/edbfc1d))
* intent confidence alignment in conversations ([#417](https://github.com/botfront/botfront/issues/417)) ([ec8b8b3](https://github.com/botfront/botfront/commit/ec8b8b3))
* quick reply, select button intent ([2943a0b](https://github.com/botfront/botfront/commit/2943a0b))


### Tests

* add custom response via visual editor ([19c4bf4](https://github.com/botfront/botfront/commit/19c4bf4))
* expect error on responseEditor close ([71f1178](https://github.com/botfront/botfront/commit/71f1178))
* fix bot response test, fails to edit ([1ec4b5c](https://github.com/botfront/botfront/commit/1ec4b5c))



## [0.19.0-alpha.3](https://github.com/botfront/botfront/compare/v0.19.0-alpha.2...v0.19.0-alpha.3) (2020-01-07)


### Bug Fixes

* allow any type of ars in NLG endpoint to support forms ([#410](https://github.com/botfront/botfront/issues/410)) ([a2f6d5f](https://github.com/botfront/botfront/commit/a2f6d5f))
* metadata and delete icons remain visible ([#407](https://github.com/botfront/botfront/issues/407)) ([0ec6c18](https://github.com/botfront/botfront/commit/0ec6c18))
* story visual editor can't retrieve bot responses ([#415](https://github.com/botfront/botfront/issues/415)) ([083af1e](https://github.com/botfront/botfront/commit/083af1e))
* strip slashes when parsing and no model trained ([#412](https://github.com/botfront/botfront/issues/412)) ([6ad1f66](https://github.com/botfront/botfront/commit/6ad1f66))


### Features

* add forceOpen to metadata ([#413](https://github.com/botfront/botfront/issues/413)) ([f8a4a5c](https://github.com/botfront/botfront/commit/f8a4a5c))
* **cli:** mongo database security ([#406](https://github.com/botfront/botfront/issues/406)) ([7a711a7](https://github.com/botfront/botfront/commit/7a711a7))
* facebook messenger support ([#405](https://github.com/botfront/botfront/issues/405)) ([eeb7119](https://github.com/botfront/botfront/commit/eeb7119))



## [0.19.0-alpha.2](https://github.com/botfront/botfront/compare/v0.19.0-alpha.1...v0.19.0-alpha.2) (2020-01-04)


### Bug Fixes

* text should not be null in image payload ([6321efd](https://github.com/botfront/botfront/commit/6321efd))
* **cli:** docker-compose file must not be generated on project init ([#404](https://github.com/botfront/botfront/issues/404)) ([ce11213](https://github.com/botfront/botfront/commit/ce11213))



## [0.19.0-alpha.1](https://github.com/botfront/botfront/compare/v0.19.0-alpha.0...v0.19.0-alpha.1) (2020-01-03)


### Bug Fixes

* bug with utterance insertion in visual story editor ([#385](https://github.com/botfront/botfront/issues/385)) ([61605db](https://github.com/botfront/botfront/commit/61605db))
* enforce uniqueness of index in bot responses ([befe4fb](https://github.com/botfront/botfront/commit/befe4fb))
* language retrieval failure preventing activity logging ([8f215ba](https://github.com/botfront/botfront/commit/8f215ba))


### Features

* **cli:** improvements in version management and file generation ([#396](https://github.com/botfront/botfront/issues/396)) ([e2a9258](https://github.com/botfront/botfront/commit/e2a9258))
* **language selector:** make multiple selection possible ([#389](https://github.com/botfront/botfront/issues/389)) ([4dce052](https://github.com/botfront/botfront/commit/4dce052))
* **seq:** don't commit response unless actually changed ([2f04706](https://github.com/botfront/botfront/commit/2f04706))
* **seqs:** move resolved responses to state ([5d814dd](https://github.com/botfront/botfront/commit/5d814dd))
* **sequences:** context update function ([2ce2257](https://github.com/botfront/botfront/commit/2ce2257))
* **sequences:** new line logic ([cf760a6](https://github.com/botfront/botfront/commit/cf760a6))
* **sequences:** sequent delete logic ([3f1d3e2](https://github.com/botfront/botfront/commit/3f1d3e2))
* **sequences:** wip ([29df2b1](https://github.com/botfront/botfront/commit/29df2b1))
* **user id:** add user id to conversations ([e434d60](https://github.com/botfront/botfront/commit/e434d60))
* add a statistics page to training data ([#397](https://github.com/botfront/botfront/issues/397)) ([11786a5](https://github.com/botfront/botfront/commit/11786a5))
* ensure consistency between stories and responses ([#366](https://github.com/botfront/botfront/issues/366)) ([097211f](https://github.com/botfront/botfront/commit/097211f))
* **user id:** show user id in conversation viewer ([2d41018](https://github.com/botfront/botfront/commit/2d41018))
* images can be added to the story visual editor ([#401](https://github.com/botfront/botfront/issues/401)) ([866bb7f](https://github.com/botfront/botfront/commit/866bb7f))
* log conversation language too ([3a5e458](https://github.com/botfront/botfront/commit/3a5e458))


### Tests

* adapt canonical test to new intent label component ([e2c30f2](https://github.com/botfront/botfront/commit/e2c30f2))
* fix more tests ([62f0ec3](https://github.com/botfront/botfront/commit/62f0ec3))
* fix tests ([f494a00](https://github.com/botfront/botfront/commit/f494a00))
* stop overwriting endpoints with fixtures ([984572c](https://github.com/botfront/botfront/commit/984572c))



## [0.19.0-alpha.0](https://github.com/botfront/botfront/compare/v0.18.5...v0.19.0-alpha.0) (2019-12-19)


### Bug Fixes

* add entities in the NLU Playground ([9f5d2e3](https://github.com/botfront/botfront/commit/9f5d2e3))
* canonical popup alignment and style ([7df72e1](https://github.com/botfront/botfront/commit/7df72e1))
* change training status determination method ([9aa6e15](https://github.com/botfront/botfront/commit/9aa6e15))
* crash in incoming ([af33948](https://github.com/botfront/botfront/commit/af33948))
* default settings for development setup are incorrect ([#373](https://github.com/botfront/botfront/issues/373)) ([7a6add8](https://github.com/botfront/botfront/commit/7a6add8))
* deprecated parameter in context parse method ([b1969f4](https://github.com/botfront/botfront/commit/b1969f4))
* import project error message not displayed ([#348](https://github.com/botfront/botfront/issues/348)) ([0a049ce](https://github.com/botfront/botfront/commit/0a049ce))
* instantaneous chat answers ([3ed1695](https://github.com/botfront/botfront/commit/3ed1695))
* keep only allowed fields in activity insertion/reparse ([8704cd3](https://github.com/botfront/botfront/commit/8704cd3))
* meteor server setup up for graphQL subscriptions ([e2bb30e](https://github.com/botfront/botfront/commit/e2bb30e))
* mongo connection failure message ([f045af3](https://github.com/botfront/botfront/commit/f045af3))
* remember story group selection ([febf6ef](https://github.com/botfront/botfront/commit/febf6ef))
* **cli:** error when running the CLI outside a project folder ([#374](https://github.com/botfront/botfront/issues/374)) ([1f6a3f8](https://github.com/botfront/botfront/commit/1f6a3f8))
* wrong default API host in default-settings.docker-compose.dev.json ([5f932d6](https://github.com/botfront/botfront/commit/5f932d6))
* **cli:** selecting logs in the main menu crashes the CLI ([777670c](https://github.com/botfront/botfront/commit/777670c))


### Features

* add conversations mutations names ([913ade7](https://github.com/botfront/botfront/commit/913ade7))
* **cli:** show more relevant commands on botfront up ([b393e16](https://github.com/botfront/botfront/commit/b393e16))
* add graphQL schema for activity ([c846b6d](https://github.com/botfront/botfront/commit/c846b6d))
* add resolver for activity ([e30d3e2](https://github.com/botfront/botfront/commit/e30d3e2))
* add security layer to GraphQL API ([#368](https://github.com/botfront/botfront/issues/368)) ([b79684d](https://github.com/botfront/botfront/commit/b79684d))
* include intent confidence score in conversations viewer ([#358](https://github.com/botfront/botfront/issues/358)) ([5ffe46d](https://github.com/botfront/botfront/commit/5ffe46d))
* **activity:** batch reinterpret only visible items ([efd548b](https://github.com/botfront/botfront/commit/efd548b))
* mark any first example for an intent & entity combination canonical ([#356](https://github.com/botfront/botfront/issues/356)) ([5152d13](https://github.com/botfront/botfront/commit/5152d13))
* **actions:** rebuild action server on file change ([9724433](https://github.com/botfront/botfront/commit/9724433))
* **activity:** add sorting by confidence % ([87c18fe](https://github.com/botfront/botfront/commit/87c18fe))
* **activity:** attempt at optimistic rerendering ([7989b56](https://github.com/botfront/botfront/commit/7989b56))
* **activity:** use subscriptions instead of query ([1534c76](https://github.com/botfront/botfront/commit/1534c76))
* **data table:** add props for fixed w&h ([a6eadc4](https://github.com/botfront/botfront/commit/a6eadc4))
* **data table:** show header only if present, add fixedRows prop ([0d5dd34](https://github.com/botfront/botfront/commit/0d5dd34))
* **intent dropdown:** sort selected first ([d8f4f4b](https://github.com/botfront/botfront/commit/d8f4f4b))
* **intent label:** new intent label wip ([2c16be8](https://github.com/botfront/botfront/commit/2c16be8))
* **project context:** refresh intents and entities on mount ([#354](https://github.com/botfront/botfront/issues/354)) ([bc36c91](https://github.com/botfront/botfront/commit/bc36c91))


### Tests

* enable eslint no-undef ([858a8ce](https://github.com/botfront/botfront/commit/858a8ce))
* fix cypress tests ([5345fa6](https://github.com/botfront/botfront/commit/5345fa6))
* fix cypress tests ([9d980c7](https://github.com/botfront/botfront/commit/9d980c7))
* fix incoming tests ([e326e4c](https://github.com/botfront/botfront/commit/e326e4c))
* fix test, polyfill fromEntries ([621ea41](https://github.com/botfront/botfront/commit/621ea41))
* fix tests ([d837348](https://github.com/botfront/botfront/commit/d837348))
* fix the fix ([92b0176](https://github.com/botfront/botfront/commit/92b0176))
* persist working language ([b7cba07](https://github.com/botfront/botfront/commit/b7cba07))
* reintroduce qr postback button test ([c62817b](https://github.com/botfront/botfront/commit/c62817b))
* **activity:** update tests ([016a2c7](https://github.com/botfront/botfront/commit/016a2c7))
* remove incoming from redux language tests ([58b0544](https://github.com/botfront/botfront/commit/58b0544))
* removes callback might fix random bug ([65ea143](https://github.com/botfront/botfront/commit/65ea143))
* update selectors to new dataCy selectors ([a49073d](https://github.com/botfront/botfront/commit/a49073d))



### [0.18.5](https://github.com/botfront/botfront/compare/v0.18.4...v0.18.5) (2019-11-22)



### [0.18.4](https://github.com/botfront/botfront/compare/v0.18.3...v0.18.4) (2019-11-22)



### [0.18.3](https://github.com/botfront/botfront/compare/v0.18.2...v0.18.3) (2019-11-22)


### Bug Fixes

* display update warnings for bot sequences ([6974bc0](https://github.com/botfront/botfront/commit/6974bc0))
* export for Rasa: domain contains language information ([8330b23](https://github.com/botfront/botfront/commit/8330b23))


### Tests

* fixes visual edit tests  after removing sequences ([57f3748](https://github.com/botfront/botfront/commit/57f3748))



### [0.18.2](https://github.com/botfront/botfront/compare/v0.18.1...v0.18.2) (2019-11-18)


### Bug Fixes

* before/after each in convo tests ([e6f7fad](https://github.com/botfront/botfront/commit/e6f7fad))
* before/after each in convo tests ([94b2dde](https://github.com/botfront/botfront/commit/94b2dde))
* branch deletion in visual_branches test ([9d1bb6c](https://github.com/botfront/botfront/commit/9d1bb6c))
* clean up state before tests instead of after ([2ece10f](https://github.com/botfront/botfront/commit/2ece10f))
* conversation test needs to wait for rasa ([38985f1](https://github.com/botfront/botfront/commit/38985f1))
* duplicate keys after deleting branch ([ecbbea7](https://github.com/botfront/botfront/commit/ecbbea7))
* import delayed refresh causes test to fail ([1a1ebf1](https://github.com/botfront/botfront/commit/1a1ebf1))
* merge conversation changes from master ([bc4d091](https://github.com/botfront/botfront/commit/bc4d091))
* merge conversation changes from master ([1a740f6](https://github.com/botfront/botfront/commit/1a740f6))
* merge conversation pagination ([09c7d57](https://github.com/botfront/botfront/commit/09c7d57))
* nlu training button permanatly disabled ([03d85cd](https://github.com/botfront/botfront/commit/03d85cd))
* standeradize test steps to delete branches ([2852dbc](https://github.com/botfront/botfront/commit/2852dbc))
* training on linked stories ([4ade3a6](https://github.com/botfront/botfront/commit/4ade3a6))
* training state stuck in training after import ([46ab050](https://github.com/botfront/botfront/commit/46ab050))
* use importProject cypress command in tests ([568e212](https://github.com/botfront/botfront/commit/568e212))
* use importProject cypress command in tests ([63fb46a](https://github.com/botfront/botfront/commit/63fb46a))
* use withRouter for routing, func for get url ([a49cd47](https://github.com/botfront/botfront/commit/a49cd47))
* use withRouter for routing, func for get url ([e593a27](https://github.com/botfront/botfront/commit/e593a27))


### Features

* add cy.findCy command ([fe99ed5](https://github.com/botfront/botfront/commit/fe99ed5))
* remove reload in conversation tests ([0b3e55a](https://github.com/botfront/botfront/commit/0b3e55a))
* test deleting a branch in the visual editor ([4f1abdd](https://github.com/botfront/botfront/commit/4f1abdd))


### Tests

* nlu inference ([debec73](https://github.com/botfront/botfront/commit/debec73))



### [0.18.1](https://github.com/botfront/botfront/compare/v0.18.0...v0.18.1) (2019-11-12)



## [0.18.0](https://github.com/botfront/botfront/compare/v0.18.0-rc.2...v0.18.0) (2019-11-12)



## [0.18.0-rc.2](https://github.com/botfront/botfront/compare/v0.18.0-rc.1...v0.18.0-rc.2) (2019-11-12)



## [0.18.0-rc.1](https://github.com/botfront/botfront/compare/v0.18.0-rc.0...v0.18.0-rc.1) (2019-11-12)


### Tests

* improved reliability ([99dc70b](https://github.com/botfront/botfront/commit/99dc70b))



## [0.18.0-rc.0](https://github.com/botfront/botfront/compare/v0.17.2...v0.18.0-rc.0) (2019-11-11)


### Bug Fixes

* capitalize select a language ([54ad0d6](https://github.com/botfront/botfront/commit/54ad0d6))
* change conversations.specs to "...".spec ([d77747c](https://github.com/botfront/botfront/commit/d77747c))
* change to satisfy eslint prefer destructuring ([395c620](https://github.com/botfront/botfront/commit/395c620))
* conditions for updating redux story group ([ba11397](https://github.com/botfront/botfront/commit/ba11397))
* crach in incoming after import ([6247ca3](https://github.com/botfront/botfront/commit/6247ca3))
* deep links for conversation ([57c801a](https://github.com/botfront/botfront/commit/57c801a))
* delete conversation when deleting a project ([f4ea674](https://github.com/botfront/botfront/commit/f4ea674))
* dimensions in NLU statistics ([86d6e9c](https://github.com/botfront/botfront/commit/86d6e9c))
* enable rasa export ([c396375](https://github.com/botfront/botfront/commit/c396375))
* es lint warning for ++ operator ([ca8415f](https://github.com/botfront/botfront/commit/ca8415f))
* eslint and browser warnings ([f44bd4e](https://github.com/botfront/botfront/commit/f44bd4e))
* eslint issues ([bfb8b15](https://github.com/botfront/botfront/commit/bfb8b15))
* eslint warning, add a space ([5cbc42e](https://github.com/botfront/botfront/commit/5cbc42e))
* eslint warnings in conversationsBrowser ([6919671](https://github.com/botfront/botfront/commit/6919671))
* evaluation data when linking from incoming ([294d905](https://github.com/botfront/botfront/commit/294d905))
* export for rasa info message text ([21c03d0](https://github.com/botfront/botfront/commit/21c03d0))
* file download causes timeout in cypress tests ([e024ccb](https://github.com/botfront/botfront/commit/e024ccb))
* fixed rasa parsing in visual story editor ([#314](https://github.com/botfront/botfront/issues/314)) ([be97fe9](https://github.com/botfront/botfront/commit/be97fe9))
* import tests failing after visual story merge ([df0c43e](https://github.com/botfront/botfront/commit/df0c43e))
* link from activity evaluates wrong data ([ff67fb3](https://github.com/botfront/botfront/commit/ff67fb3))
* loose ends and tests ([c99570c](https://github.com/botfront/botfront/commit/c99570c))
* missing period in info message ([a35adb1](https://github.com/botfront/botfront/commit/a35adb1))
* names of export project test ([71f073c](https://github.com/botfront/botfront/commit/71f073c))
* nlu training button permanatly disabled ([77829cf](https://github.com/botfront/botfront/commit/77829cf))
* rasa X export explanation ([ef19cbd](https://github.com/botfront/botfront/commit/ef19cbd))
* story group redux selection random behaviour ([b7e40cd](https://github.com/botfront/botfront/commit/b7e40cd))
* style sort utterances dropdown ([4fc0f4d](https://github.com/botfront/botfront/commit/4fc0f4d))
* test finds an element before it is removed ([c84e0ff](https://github.com/botfront/botfront/commit/c84e0ff))
* testing link in export success message ([a1918c3](https://github.com/botfront/botfront/commit/a1918c3))
* train empty stories ([e2be980](https://github.com/botfront/botfront/commit/e2be980))
* training spec train button click failing ([2884b12](https://github.com/botfront/botfront/commit/2884b12))
* yaml extension must be yml ([f750728](https://github.com/botfront/botfront/commit/f750728))


### Features

*  loader does not show up if request fast (css anim) ([b68ea07](https://github.com/botfront/botfront/commit/b68ea07))
* add export for rasa ([ae11aee](https://github.com/botfront/botfront/commit/ae11aee))
* add export for rasa ([14ca3fe](https://github.com/botfront/botfront/commit/14ca3fe))
* add fields to conversation schema/resolver ([98f65eb](https://github.com/botfront/botfront/commit/98f65eb))
* add infor messages to rasa/rasaX export ([52ae84f](https://github.com/botfront/botfront/commit/52ae84f))
* add loading when switching ([e73302f](https://github.com/botfront/botfront/commit/e73302f))
* add missing fields to conversation resolvers/schema ([9d300b6](https://github.com/botfront/botfront/commit/9d300b6))
* add mutations for conversations ([875e99a](https://github.com/botfront/botfront/commit/875e99a))
* add popup for canonical examples ([af9f2e1](https://github.com/botfront/botfront/commit/af9f2e1))
* add possibility to toggle canonical on examples ([6d5f4fd](https://github.com/botfront/botfront/commit/6d5f4fd))
* add sort and filter to graphlql query ([a5bfb62](https://github.com/botfront/botfront/commit/a5bfb62))
* add tabs for the sections of incoming ([1487534](https://github.com/botfront/botfront/commit/1487534))
* connect required data to incoming tab ([984a764](https://github.com/botfront/botfront/commit/984a764))
* conversation analytics ([9850b4e](https://github.com/botfront/botfront/commit/9850b4e))
* conversation details fetching with graphQL ([2d3a0bf](https://github.com/botfront/botfront/commit/2d3a0bf))
* delete use grahpQL mutation ([2369097](https://github.com/botfront/botfront/commit/2369097))
* disable editing for canonical examples ([458888d](https://github.com/botfront/botfront/commit/458888d))
* disable trash when example is canonical ([b792284](https://github.com/botfront/botfront/commit/b792284))
* enable import and export tests ([2e84a81](https://github.com/botfront/botfront/commit/2e84a81))
* filtering switch for canonical examples ([0303444](https://github.com/botfront/botfront/commit/0303444))
* hide intents text if none, improve css ([7752e6c](https://github.com/botfront/botfront/commit/7752e6c))
* hide language selector on the conversation tab ([a0d6b9a](https://github.com/botfront/botfront/commit/a0d6b9a))
* hide subComponent on canonicals ([60c22fd](https://github.com/botfront/botfront/commit/60c22fd))
* incoming language now from redux ([1a49953](https://github.com/botfront/botfront/commit/1a49953))
* keep route when switching project ([308c1a8](https://github.com/botfront/botfront/commit/308c1a8))
* language in training data saved in redux ([42947cf](https://github.com/botfront/botfront/commit/42947cf))
* language selector in stories ! ([9fb8ef9](https://github.com/botfront/botfront/commit/9fb8ef9))
* link to evaluation from incoming ([9ff1568](https://github.com/botfront/botfront/commit/9ff1568))
* message when switching a canonical example ([b5d66e6](https://github.com/botfront/botfront/commit/b5d66e6))
* move activity to new page with conversations ([854893f](https://github.com/botfront/botfront/commit/854893f))
* nlu analytics with graphql ([3ba51ae](https://github.com/botfront/botfront/commit/3ba51ae))
* optimistic removes read markers ([c0b7e46](https://github.com/botfront/botfront/commit/c0b7e46))
* pagination for conversation ([5058643](https://github.com/botfront/botfront/commit/5058643))
* popups blocking editing when canonical ([ba272db](https://github.com/botfront/botfront/commit/ba272db))
* update conversation data on delete ([3091354](https://github.com/botfront/botfront/commit/3091354))
* use graphQL in conversation browser ([867a472](https://github.com/botfront/botfront/commit/867a472))
* use mutation for marking as read ([14609ad](https://github.com/botfront/botfront/commit/14609ad))
* **back to project settings:** ensure projectId set ([ffbccf7](https://github.com/botfront/botfront/commit/ffbccf7))
* **canonical examples:** sort by canonical status on train ([48cf643](https://github.com/botfront/botfront/commit/48cf643))
* **canonical examples:** sort by canonical status on train ([1efcd84](https://github.com/botfront/botfront/commit/1efcd84))
* **visual story editor:** initial commit ([511fe9a](https://github.com/botfront/botfront/commit/511fe9a))
* sort new utterances by date, new or old ([cf0269c](https://github.com/botfront/botfront/commit/cf0269c))


### Tests

* add build docs job ([396e777](https://github.com/botfront/botfront/commit/396e777))
* add cypress testing routines ([b1fd3e1](https://github.com/botfront/botfront/commit/b1fd3e1))
* add cypress tests ([78bf1a3](https://github.com/botfront/botfront/commit/78bf1a3))
* add tests for conversations ([527b394](https://github.com/botfront/botfront/commit/527b394))
* add tests for incoming tab ([16a0345](https://github.com/botfront/botfront/commit/16a0345))
* beforeEach deletes previous models ([fbe1bc6](https://github.com/botfront/botfront/commit/fbe1bc6))
* changes/improvement for previous modifications ([f21f67a](https://github.com/botfront/botfront/commit/f21f67a))
* enable videos ([bdfafdc](https://github.com/botfront/botfront/commit/bdfafdc))
* fix caching ([23338b9](https://github.com/botfront/botfront/commit/23338b9))
* fix caching ([3387d99](https://github.com/botfront/botfront/commit/3387d99))
* fix Examples test with canonical ([232fd72](https://github.com/botfront/botfront/commit/232fd72))
* fix order in test ([1529475](https://github.com/botfront/botfront/commit/1529475))
* fix previous commit ([b5011ba](https://github.com/botfront/botfront/commit/b5011ba))
* fix screenshot on failure ([b79a332](https://github.com/botfront/botfront/commit/b79a332))
* fixed new utterances test ([a92d89f](https://github.com/botfront/botfront/commit/a92d89f))
* fixes after rebase ([52521db](https://github.com/botfront/botfront/commit/52521db))
* force click ([a5dccc9](https://github.com/botfront/botfront/commit/a5dccc9))
* improve way to access icons, might fix tests on the ci ([fe3bacb](https://github.com/botfront/botfront/commit/fe3bacb))
* improved cypress tests stability ([4da626c](https://github.com/botfront/botfront/commit/4da626c))
* install chai for cypress ([1da716f](https://github.com/botfront/botfront/commit/1da716f))
* may fix failling test ([ecb2df2](https://github.com/botfront/botfront/commit/ecb2df2))
* might fix canonical switching test ([74745ce](https://github.com/botfront/botfront/commit/74745ce))
* potential tests fixes ([07f2fb1](https://github.com/botfront/botfront/commit/07f2fb1))
* re-enable test for rasa export ([4e40a85](https://github.com/botfront/botfront/commit/4e40a85))
* rename canonical tests ([85f2d85](https://github.com/botfront/botfront/commit/85f2d85))
* test for conversation paginations ([3e22113](https://github.com/botfront/botfront/commit/3e22113))
* test language dropdown in rasa export ([1a1db59](https://github.com/botfront/botfront/commit/1a1db59))
* uniqueness of canonical intent, value, entity ([1f90923](https://github.com/botfront/botfront/commit/1f90923))
* update ci vars ([e6b25df](https://github.com/botfront/botfront/commit/e6b25df))
* update to test non-edition on canonical ([91ff862](https://github.com/botfront/botfront/commit/91ff862))
* wait for sg to exist before navigating away ([8ee5aaa](https://github.com/botfront/botfront/commit/8ee5aaa))
* zip dir instead of tarball ([df45e58](https://github.com/botfront/botfront/commit/df45e58))



### [0.17.2](https://github.com/botfront/botfront/compare/v0.17.0...v0.17.2) (2019-10-30)


### Bug Fixes

* no response duplication ([384c096](https://github.com/botfront/botfront/commit/384c096))


### Features

* choose export option ([8087106](https://github.com/botfront/botfront/commit/8087106))


### Tests

* correct data cy ([ff6ff71](https://github.com/botfront/botfront/commit/ff6ff71))



## [0.17.0](https://github.com/botfront/botfront/compare/v0.17.0-rc.1...v0.17.0) (2019-10-26)



## [0.17.0-rc.1](https://github.com/botfront/botfront/compare/v0.17.0-rc.0...v0.17.0-rc.1) (2019-10-26)



## [0.17.0-rc.0](https://github.com/botfront/botfront/compare/v0.16.7...v0.17.0-rc.0) (2019-10-26)


### Bug Fixes

* missing stash files from the latest commit ([8b89667](https://github.com/botfront/botfront/commit/8b89667))


### Features

* add botfront api files ([a0513e6](https://github.com/botfront/botfront/commit/a0513e6))
* add support for cli arguments ([292a79f](https://github.com/botfront/botfront/commit/292a79f))


### Tests

* fix storygroup test ([03ebfc2](https://github.com/botfront/botfront/commit/03ebfc2))



### [0.16.7](https://github.com/botfront/botfront/compare/v0.16.6...v0.16.7) (2019-10-25)


### Tests

* fix story groups ([ae8c448](https://github.com/botfront/botfront/commit/ae8c448))



### [0.16.6](https://github.com/botfront/botfront/compare/v0.16.5...v0.16.6) (2019-10-25)



### [0.16.5](https://github.com/botfront/botfront/compare/v0.16.4...v0.16.5) (2019-10-25)


### Bug Fixes

* potential fix for the story exceptions ([46275e4](https://github.com/botfront/botfront/commit/46275e4))
* potential fix for the story group test not passing ([ce2414a](https://github.com/botfront/botfront/commit/ce2414a))
* removes popup presence checking ([ea5c4fd](https://github.com/botfront/botfront/commit/ea5c4fd))
* test destination story warning ([627eda1](https://github.com/botfront/botfront/commit/627eda1))


### Features

* widen the story name input field ([d037702](https://github.com/botfront/botfront/commit/d037702))


### Tests

* story exceptions fixes ([17e99c6](https://github.com/botfront/botfront/commit/17e99c6))
* storygroups test fixes ([#289](https://github.com/botfront/botfront/issues/289)) ([5d56479](https://github.com/botfront/botfront/commit/5d56479))
* udpated github action ([0e4d0d4](https://github.com/botfront/botfront/commit/0e4d0d4))



### [0.16.4](https://github.com/botfront/botfront/compare/v0.16.3-rc.1...v0.16.4) (2019-10-23)



### [0.16.4](https://github.com/botfront/botfront/compare/v0.16.3-rc.1...v0.16.4) (2019-10-22)



### [0.16.3-rc.1](https://github.com/botfront/botfront/compare/v0.16.3...v0.16.3-rc.1) (2019-10-20)


### Bug Fixes

* add check to ensure story is linked ([ef22a6a](https://github.com/botfront/botfront/commit/ef22a6a))
* change self link test for the cloud nuild ([477cd02](https://github.com/botfront/botfront/commit/477cd02))



### [0.16.3](https://github.com/botfront/botfront/compare/v0.16.2...v0.16.3) (2019-10-18)


### Bug Fixes

* add test triggering the bug ([27a7a09](https://github.com/botfront/botfront/commit/27a7a09))
* bug introduced with nlu import ([abd0b4b](https://github.com/botfront/botfront/commit/abd0b4b))
* can't fetch entities when an nlu example has no entities key ([f4d78c1](https://github.com/botfront/botfront/commit/f4d78c1))
* crash in NLU page after loading ([b559399](https://github.com/botfront/botfront/commit/b559399))
* css for rasa-webchat ([882d2b9](https://github.com/botfront/botfront/commit/882d2b9))
* destination stories don't trigger warnings if no intent ([2dd38a8](https://github.com/botfront/botfront/commit/2dd38a8))
* disabled api dependant tests ([bf4b73b](https://github.com/botfront/botfront/commit/bf4b73b))
* export test expects success msg on fail ([d644d07](https://github.com/botfront/botfront/commit/d644d07))
* fixed empty stories not training ([b55453d](https://github.com/botfront/botfront/commit/b55453d))
* force clicks on elements that may be hidden ([a695514](https://github.com/botfront/botfront/commit/a695514))
* test failing to find .popup when slow ([242f104](https://github.com/botfront/botfront/commit/242f104))
* use data-cy instead of class names ([8a64aca](https://github.com/botfront/botfront/commit/8a64aca))
* useEffect to update the group name on render ([4853ada](https://github.com/botfront/botfront/commit/4853ada))
* webchat on firefox ([c644d16](https://github.com/botfront/botfront/commit/c644d16))


### Features

* add option to export conversations ([f82ecee](https://github.com/botfront/botfront/commit/f82ecee))
* add test triggering the bug ([2e1dc3e](https://github.com/botfront/botfront/commit/2e1dc3e))
* export request optional and default settings ([6cfa259](https://github.com/botfront/botfront/commit/6cfa259))
* self link when a story has branches ([63d67e5](https://github.com/botfront/botfront/commit/63d67e5))
* test to self link on stories with branches ([c68969f](https://github.com/botfront/botfront/commit/c68969f))


### Tests

* fixed test for exceptions in story branches ([9f32c31](https://github.com/botfront/botfront/commit/9f32c31))
* porting error messages and export link url ([f5ce211](https://github.com/botfront/botfront/commit/f5ce211))



### [0.16.2](https://github.com/botfront/botfront/compare/v0.16.0-rc.13...v0.16.2) (2019-10-10)


### Bug Fixes

*  cognetive complexity in ExportProject ([90699d3](https://github.com/botfront/botfront/commit/90699d3))
* add import/export tests to ignoreTestFiles ([fb212b3](https://github.com/botfront/botfront/commit/fb212b3))
* add period to success message ([abfbfb0](https://github.com/botfront/botfront/commit/abfbfb0))
* capital API in error message ([8760e8f](https://github.com/botfront/botfront/commit/8760e8f))
* change slot name to a better name ([67de146](https://github.com/botfront/botfront/commit/67de146))
* code climate cognetive complexity ([60b8b65](https://github.com/botfront/botfront/commit/60b8b65))
* code climate complexity in ExportProject ([8a6bf74](https://github.com/botfront/botfront/commit/8a6bf74))
* code climate complexity in ImportProject ([b9d91ed](https://github.com/botfront/botfront/commit/b9d91ed))
* code climate complexity in ImportProject ([f9ffa2e](https://github.com/botfront/botfront/commit/f9ffa2e))
* code climate complexity in ImportProject ([57b1a75](https://github.com/botfront/botfront/commit/57b1a75))
* code climate complexity in ImportProject ([f13b1d2](https://github.com/botfront/botfront/commit/f13b1d2))
* cogenetive complexity in ExportProject ([88c01f7](https://github.com/botfront/botfront/commit/88c01f7))
* cognetive complexity in ExportProject ([3cbd3b9](https://github.com/botfront/botfront/commit/3cbd3b9))
* cognetive complexity in ExportProject ([f928a85](https://github.com/botfront/botfront/commit/f928a85))
* cognetive complextiy in ExportProject ([4362697](https://github.com/botfront/botfront/commit/4362697))
* cognitive complexity in ExportProject ([ef11501](https://github.com/botfront/botfront/commit/ef11501))
* force a refresh after importing a project ([c701e26](https://github.com/botfront/botfront/commit/c701e26))
* import project button alignment ([81d7031](https://github.com/botfront/botfront/commit/81d7031))
* import project tab crashing when opened ([9409901](https://github.com/botfront/botfront/commit/9409901))
* import/export error message text ([897aec8](https://github.com/botfront/botfront/commit/897aec8))
* import/export failing for medium+ projects ([7fe11f2](https://github.com/botfront/botfront/commit/7fe11f2))
* importProject codeclimate complexity ([24ccab4](https://github.com/botfront/botfront/commit/24ccab4))
* missing request settings for import request ([dd580b0](https://github.com/botfront/botfront/commit/dd580b0))
* prevent build from failing when slow ([e239cbe](https://github.com/botfront/botfront/commit/e239cbe))
* reduced length of exportProject method ([bed56b5](https://github.com/botfront/botfront/commit/bed56b5))
* remove importAgain button ([3e85bd1](https://github.com/botfront/botfront/commit/3e85bd1))
* remove timeout interval from export.methods ([cb183ce](https://github.com/botfront/botfront/commit/cb183ce))
* replace identical code code with utils ([dd5e243](https://github.com/botfront/botfront/commit/dd5e243))


### Features

* connect export ui to api ([cd288d2](https://github.com/botfront/botfront/commit/cd288d2))
* connect import UI to API ([23271f1](https://github.com/botfront/botfront/commit/23271f1))
* ui for Import and Export of a project ([b949f23](https://github.com/botfront/botfront/commit/b949f23))


### Tests

* import project and export project Ui tests ([b0106e7](https://github.com/botfront/botfront/commit/b0106e7))
* verify botfront project import ([cc05fbb](https://github.com/botfront/botfront/commit/cc05fbb))



## [0.16.0-rc.13](https://github.com/botfront/botfront/compare/v0.16.0-rc.12...v0.16.0-rc.13) (2019-10-09)


### Bug Fixes

* chitchat data not added ([1b7aeac](https://github.com/botfront/botfront/commit/1b7aeac))



## [0.16.0-rc.12](https://github.com/botfront/botfront/compare/v0.16.0-rc.10...v0.16.0-rc.12) (2019-10-08)


### Bug Fixes

* crash on null intent_evaluation result ([0444424](https://github.com/botfront/botfront/commit/0444424))
* fixed stories crashing after update ([760d01e](https://github.com/botfront/botfront/commit/760d01e))
* import of large nlu files ([e622a1c](https://github.com/botfront/botfront/commit/e622a1c))
* improve branching tab color ([ece007d](https://github.com/botfront/botfront/commit/ece007d))
* not complete comment ([d665519](https://github.com/botfront/botfront/commit/d665519))
* quick reply schema also add tests ([259bffc](https://github.com/botfront/botfront/commit/259bffc))
* remplace flat() so it is supported by electron ([b9ceac3](https://github.com/botfront/botfront/commit/b9ceac3))
* storyGroup deletion was not available after a unlinking ([03e373f](https://github.com/botfront/botfront/commit/03e373f))
* tagging of accentuated characters ([24becda](https://github.com/botfront/botfront/commit/24becda))
* wrong slot properties ([66df140](https://github.com/botfront/botfront/commit/66df140))
* **cli:** fixed docker-cli-js to 2.5.x ([a909ef4](https://github.com/botfront/botfront/commit/a909ef4))


### Features

* add ellipsis menu in place of story edit ([9b6b668](https://github.com/botfront/botfront/commit/9b6b668))
* add tests for story group deletion ([84c4bc5](https://github.com/botfront/botfront/commit/84c4bc5))
* check before storygroup deletion ([14180be](https://github.com/botfront/botfront/commit/14180be))
* component for each story group ([fb4b75b](https://github.com/botfront/botfront/commit/fb4b75b))
* storygroup deletion without checks ([a450ca3](https://github.com/botfront/botfront/commit/a450ca3))
* update tests to support new ellipsis menu ([cb3a98f](https://github.com/botfront/botfront/commit/cb3a98f))


### Tests

* removed useless scrolling test ([5d92d45](https://github.com/botfront/botfront/commit/5d92d45))



## [0.16.0-rc.11](https://github.com/botfront/botfront/compare/v0.16.0-rc.10...v0.16.0-rc.11) (2019-10-04)


### Bug Fixes

* **cli:** fixed docker-cli-js to 2.5.x ([a909ef4](https://github.com/botfront/botfront/commit/a909ef4))
* improve branching tab color ([ece007d](https://github.com/botfront/botfront/commit/ece007d))
* not complete comment ([d665519](https://github.com/botfront/botfront/commit/d665519))
* remplace flat() so it is supported by electron ([b9ceac3](https://github.com/botfront/botfront/commit/b9ceac3))


### Features

* add ellipsis menu in place of story edit ([9b6b668](https://github.com/botfront/botfront/commit/9b6b668))
* add tests for story group deletion ([84c4bc5](https://github.com/botfront/botfront/commit/84c4bc5))
* check before storygroup deletion ([14180be](https://github.com/botfront/botfront/commit/14180be))
* component for each story group ([fb4b75b](https://github.com/botfront/botfront/commit/fb4b75b))
* storygroup deletion without checks ([a450ca3](https://github.com/botfront/botfront/commit/a450ca3))
* update tests to support new ellipsis menu ([cb3a98f](https://github.com/botfront/botfront/commit/cb3a98f))



## [0.16.0-rc.10](https://github.com/botfront/botfront/compare/v0.16.0-rc.9...v0.16.0-rc.10) (2019-10-03)


### Bug Fixes

* checkpoint creation with linked stories ([00a4c23](https://github.com/botfront/botfront/commit/00a4c23))
* codeclimate similar code warning ([2bf176f](https://github.com/botfront/botfront/commit/2bf176f))
* codeclimate warnings ([0b067de](https://github.com/botfront/botfront/commit/0b067de))
* connected stories popup trigger behaviour ([a295e5a](https://github.com/botfront/botfront/commit/a295e5a))
* correction for the test story_exceptionsn3 ([0d89fb9](https://github.com/botfront/botfront/commit/0d89fb9))
* eslint warning ([25041f7](https://github.com/botfront/botfront/commit/25041f7))
* move Storylinker code to the StoryFooter ([283ff70](https://github.com/botfront/botfront/commit/283ff70))
* naming issues of css class for linking state ([919ee35](https://github.com/botfront/botfront/commit/919ee35))
* padding style for connected alert popup ([4bf3cef](https://github.com/botfront/botfront/commit/4bf3cef))
* reduce padding for story group title in popup ([93bd8ff](https://github.com/botfront/botfront/commit/93bd8ff))
* refactor codeclimate similar code ([eb0755b](https://github.com/botfront/botfront/commit/eb0755b))
* remove import of unexisting file in main.less ([6ec58d0](https://github.com/botfront/botfront/commit/6ec58d0))
* remove possibility to link a story to itself ([329b70e](https://github.com/botfront/botfront/commit/329b70e))
* remove usage of important in css ([6eb9070](https://github.com/botfront/botfront/commit/6eb9070))
* resolve eslint warnings ([479c50e](https://github.com/botfront/botfront/commit/479c50e))
* stop delete on branches with linked siblings ([0fb6351](https://github.com/botfront/botfront/commit/0fb6351))
* stop inherit checkpoints on story duplication ([f691fd5](https://github.com/botfront/botfront/commit/f691fd5))
* style for destination story popup ([176c6f3](https://github.com/botfront/botfront/commit/176c6f3))
* test on linking leaf stories ([979037f](https://github.com/botfront/botfront/commit/979037f))
* tests ([4543496](https://github.com/botfront/botfront/commit/4543496))
* use find insead of get to retreive descendent element ([929698d](https://github.com/botfront/botfront/commit/929698d))


### Features

* add disabled prop to the stories linker ([248bcb2](https://github.com/botfront/botfront/commit/248bcb2))
* add fields and methods to create checkpoints ([2b37ee4](https://github.com/botfront/botfront/commit/2b37ee4))
* add methods to removeCheckpoints ([67504e6](https://github.com/botfront/botfront/commit/67504e6))
* add tests for story linking ([29dded5](https://github.com/botfront/botfront/commit/29dded5))
* comments for addlinkCheckpoints ([cca459d](https://github.com/botfront/botfront/commit/cca459d))
* connect checkpoint data to frontend ([09501dc](https://github.com/botfront/botfront/commit/09501dc))
* function to add rasa checkpoints to linked stories ([d4f129b](https://github.com/botfront/botfront/commit/d4f129b))
* handle changing the link to a story ([3e466e5](https://github.com/botfront/botfront/commit/3e466e5))
* hide linking menu when linking is not possible ([530902d](https://github.com/botfront/botfront/commit/530902d))
* improves comments of the reccursiveSearch use to find a branchId ([340379e](https://github.com/botfront/botfront/commit/340379e))
* linked stories are used in rasa ([75360d1](https://github.com/botfront/botfront/commit/75360d1))
* list of stories in the story editor footer (link to) ([448a46a](https://github.com/botfront/botfront/commit/448a46a))
* popup for connected stories alert ([468191c](https://github.com/botfront/botfront/commit/468191c))
* popup for story is connected Popup ([68e570d](https://github.com/botfront/botfront/commit/68e570d))
* refactor code from StoryFooter to StoryEditorContainer ([9a23127](https://github.com/botfront/botfront/commit/9a23127))
* sort stories name in the linking dropdown ([2ce56f8](https://github.com/botfront/botfront/commit/2ce56f8))
* style for connected story top menu ([d409fd1](https://github.com/botfront/botfront/commit/d409fd1))
* style for ToolTipPopup ([e1c9d16](https://github.com/botfront/botfront/commit/e1c9d16))
* support state change linked or not linked ([c5932a5](https://github.com/botfront/botfront/commit/c5932a5))
* tests  for checkpoint creation of linked stories ([bbdc2fb](https://github.com/botfront/botfront/commit/bbdc2fb))
* tooltip popup when a story cannot be deleted ([9c9a854](https://github.com/botfront/botfront/commit/9c9a854))
* ui use backend to add a link to a story ([221e24c](https://github.com/botfront/botfront/commit/221e24c))
* update stories tests as you cannot link to a story itself ([232b3c5](https://github.com/botfront/botfront/commit/232b3c5))
* warning in story topMenu when connected ([ed4883e](https://github.com/botfront/botfront/commit/ed4883e))


### Tests

* add training test ([5af0174](https://github.com/botfront/botfront/commit/5af0174))
* fix dependencies ([e963951](https://github.com/botfront/botfront/commit/e963951))
* story delete buttons disable on linked ([0f32b05](https://github.com/botfront/botfront/commit/0f32b05))



## [0.16.0-rc.9](https://github.com/botfront/botfront/compare/v0.16.0-rc.8...v0.16.0-rc.9) (2019-09-26)


### Bug Fixes

* better error message for training ([bbf122c](https://github.com/botfront/botfront/commit/bbf122c))
* better errors for failed training ([92b4b2f](https://github.com/botfront/botfront/commit/92b4b2f))
* rename storiesLight to stories ([0b25ede](https://github.com/botfront/botfront/commit/0b25ede))
* templates for stories training ([1b16259](https://github.com/botfront/botfront/commit/1b16259))


### Features

* **default domain:** declare default domain in project settings ([#224](https://github.com/botfront/botfront/issues/224)) ([5b03ac5](https://github.com/botfront/botfront/commit/5b03ac5))
* all story of a projet are fetch in the StoryContainer ([bf619fa](https://github.com/botfront/botfront/commit/bf619fa))
* exclude services when starting ([78f73a8](https://github.com/botfront/botfront/commit/78f73a8))


### Tests

* fixed slot test ([0aeed0f](https://github.com/botfront/botfront/commit/0aeed0f))
* fixed unit tests for story traversal ([da50360](https://github.com/botfront/botfront/commit/da50360))



## [0.16.0-rc.8](https://github.com/botfront/botfront/compare/v0.16.0-rc.7...v0.16.0-rc.8) (2019-09-23)


### Bug Fixes

* fixed slots errors ([59f98ee](https://github.com/botfront/botfront/commit/59f98ee))


### Tests

* test that new slots are detected in stories ([920ce7e](https://github.com/botfront/botfront/commit/920ce7e))



## [0.16.0-rc.7](https://github.com/botfront/botfront/compare/v0.16.0-rc.6...v0.16.0-rc.7) (2019-09-13)



## [0.16.0-rc5](https://github.com/botfront/botfront/compare/v0.16.0-rc.4...v0.16.0-rc5) (2019-09-13)



## [0.16.0-rc.4](https://github.com/botfront/botfront/compare/v0.16.0-rc.3...v0.16.0-rc.4) (2019-09-11)


### Bug Fixes

* add empty branches to new stories ([582208a](https://github.com/botfront/botfront/commit/582208a))



## [0.16.0-rc.3](https://github.com/botfront/botfront/compare/v0.16.0-rc.2...v0.16.0-rc.3) (2019-09-11)



## [0.16.0-rc.2](https://github.com/botfront/botfront/compare/v0.16.0-rc.1...v0.16.0-rc.2) (2019-09-10)


### Bug Fixes

* adjust line height for story group menu items ([52185d7](https://github.com/botfront/botfront/commit/52185d7))
* alerts not removed if intro story deleted ([3898d83](https://github.com/botfront/botfront/commit/3898d83))
* crash in BranchTabLabel with old DataBases ([46d0c12](https://github.com/botfront/botfront/commit/46d0c12))
* extra character caused a crash on start ([292f498](https://github.com/botfront/botfront/commit/292f498))
* storyGroupMenu selected items are blue ([909dda2](https://github.com/botfront/botfront/commit/909dda2))
* the selected story group is blue ([c71a1b5](https://github.com/botfront/botfront/commit/c71a1b5))
* undefined bot responses preventing training ([1658daa](https://github.com/botfront/botfront/commit/1658daa))
* wrong default base_url in credentials ([8d3c28a](https://github.com/botfront/botfront/commit/8d3c28a))


### Features

* add icon indicators for story exceptions ([26ff2aa](https://github.com/botfront/botfront/commit/26ff2aa))
* add response context to StotyEditorContainer ([c0bdb40](https://github.com/botfront/botfront/commit/c0bdb40))
* add response context to StotyEditorContainer ([08fc2ed](https://github.com/botfront/botfront/commit/08fc2ed))
* exclude stories with errors from training ([bfccd22](https://github.com/botfront/botfront/commit/bfccd22))
* links to Spectrum in menu and docs ([d093604](https://github.com/botfront/botfront/commit/d093604))


### Tests

* add tests for exceptions in markdown ([4982ab9](https://github.com/botfront/botfront/commit/4982ab9))



## [0.16.0-rc.1](https://github.com/botfront/botfront/compare/v0.15.5...v0.16.0-rc.1) (2019-09-09)


### Bug Fixes

* adjust testing for new title save action ([f017cc7](https://github.com/botfront/botfront/commit/f017cc7))
* backwards compatibility for exceptions ([d3c8109](https://github.com/botfront/botfront/commit/d3c8109))
* bug indexing over string ([12d7967](https://github.com/botfront/botfront/commit/12d7967))
* bug on stories without branches in db ([06beece](https://github.com/botfront/botfront/commit/06beece))
* bug when deleting mother branch ([2519369](https://github.com/botfront/botfront/commit/2519369))
* change css so selected story group is blue ([e9b2217](https://github.com/botfront/botfront/commit/e9b2217))
* change from push to spreadsyntax for path ([357f8f0](https://github.com/botfront/botfront/commit/357f8f0))
* crash in BranchTabLabel with old DataBases ([6aa6e67](https://github.com/botfront/botfront/commit/6aa6e67))
* crashing in story utils with old DBs ([b306a70](https://github.com/botfront/botfront/commit/b306a70))
* exceptionAlerts warnings passed bad prop ([66f9071](https://github.com/botfront/botfront/commit/66f9071))
* fix the fix of the fix ([5ff8b24](https://github.com/botfront/botfront/commit/5ff8b24))
* manual rollback re add intent warning msg ([2208dc6](https://github.com/botfront/botfront/commit/2208dc6))
* new method of verifying default story test ([29b6b29](https://github.com/botfront/botfront/commit/29b6b29))
* remove console.log and es lint errors ([32a0206](https://github.com/botfront/botfront/commit/32a0206))
* remove unnecessary method call ([1647b13](https://github.com/botfront/botfront/commit/1647b13))
* standardize story title save + discard events ([452595f](https://github.com/botfront/botfront/commit/452595f))
* stop crash when creating new story group ([51391c0](https://github.com/botfront/botfront/commit/51391c0))
* story groups not deleting ([6158fc6](https://github.com/botfront/botfront/commit/6158fc6))
* typo ([9e3798d](https://github.com/botfront/botfront/commit/9e3798d))
* typo in docker compose template ([8bdde39](https://github.com/botfront/botfront/commit/8bdde39))
* wrong default base_url in credentials ([#201](https://github.com/botfront/botfront/issues/201)) ([b5835c3](https://github.com/botfront/botfront/commit/b5835c3))


### Features

* add a popup for story group exception alerts ([df29b22](https://github.com/botfront/botfront/commit/df29b22))
* add icon indicators for story exceptions ([37cd372](https://github.com/botfront/botfront/commit/37cd372))
* add StoryFooter component and StoryPathPopup ([84ad69e](https://github.com/botfront/botfront/commit/84ad69e))
* change story popup now shows full path ([6991ce8](https://github.com/botfront/botfront/commit/6991ce8))
* change wrap StoryFooter in Segment component ([6dd4a0a](https://github.com/botfront/botfront/commit/6dd4a0a))
* merge deleted stories ([a65068e](https://github.com/botfront/botfront/commit/a65068e))
* **branching:** "recursive" schema, update update method ([9988140](https://github.com/botfront/botfront/commit/9988140))
* **branching:** add new branch ([68521a8](https://github.com/botfront/botfront/commit/68521a8))
* **branching:** add story field to mock data ([444176c](https://github.com/botfront/botfront/commit/444176c))
* **offline templates:** error catching for missing templates ([a512d4b](https://github.com/botfront/botfront/commit/a512d4b))
* **offline templates:** full responses are exported with domain ([69a5e69](https://github.com/botfront/botfront/commit/69a5e69))
* collapsable stories ([10dbc7a](https://github.com/botfront/botfront/commit/10dbc7a))
* open first branches by default ([1b37c13](https://github.com/botfront/botfront/commit/1b37c13))
* persist branch path across application ([33e26b4](https://github.com/botfront/botfront/commit/33e26b4))
* **branch tab label:** es-lint, proptypes minor fix ([126a468](https://github.com/botfront/botfront/commit/126a468))
* **branching:** confirm deletion ([eb96c23](https://github.com/botfront/botfront/commit/eb96c23))
* **branching:** disallow two sibling branches from having same name ([bf5c2a7](https://github.com/botfront/botfront/commit/bf5c2a7))
* **branching:** integrate StoryFooter ([5b0566b](https://github.com/botfront/botfront/commit/5b0566b))
* add StoryFooter prop that hides continue ([243ca5e](https://github.com/botfront/botfront/commit/243ca5e))
* style story footer and remove warnings ([db700a7](https://github.com/botfront/botfront/commit/db700a7))
* styled story footer and branch+link buttons ([07f53d0](https://github.com/botfront/botfront/commit/07f53d0))
* **branching:** domain generation/story compilation ([70fcb3a](https://github.com/botfront/botfront/commit/70fcb3a))
* **branching:** hotfix for backsupport ([86f9af3](https://github.com/botfront/botfront/commit/86f9af3))
* **branching:** integrate tab labels ([9c9942d](https://github.com/botfront/botfront/commit/9c9942d))
* **branching:** make room for footer ([2eb5e67](https://github.com/botfront/botfront/commit/2eb5e67))
* **branching:** refactor, integrate with db ([8eb1a71](https://github.com/botfront/botfront/commit/8eb1a71))
* **branching:** remove fixture, fix behavior with branch-less branches ([4fa3abd](https://github.com/botfront/botfront/commit/4fa3abd))
* **branching:** switch active branch on deletion ([8e2c551](https://github.com/botfront/botfront/commit/8e2c551))
* **branching:** update extractDomainFromStories ([71fc936](https://github.com/botfront/botfront/commit/71fc936))
* add branch tab component for branch menu ([97c45d8](https://github.com/botfront/botfront/commit/97c45d8))
* add default story group on project insert ([2ca4cd7](https://github.com/botfront/botfront/commit/2ca4cd7))
* add warning when NLU can't be trained because of  n < 2 intents ([b47996a](https://github.com/botfront/botfront/commit/b47996a))
* refactor BranchTabLabel and style ([87f8d45](https://github.com/botfront/botfront/commit/87f8d45))
* **branching:** wip ([fe0d24d](https://github.com/botfront/botfront/commit/fe0d24d))


### Tests

* add story_title tests for saving discarding ([9276d08](https://github.com/botfront/botfront/commit/9276d08))
* add tests for story utils ([cdd550e](https://github.com/botfront/botfront/commit/cdd550e))
* added test for branches edge cases ([0f464b7](https://github.com/botfront/botfront/commit/0f464b7))
* branching ([ae5b893](https://github.com/botfront/botfront/commit/ae5b893))
* collapsable stories ([60f7c46](https://github.com/botfront/botfront/commit/60f7c46))
* confirm intro story group is not deleted ([026b58d](https://github.com/botfront/botfront/commit/026b58d))
* fixed tests ([248210c](https://github.com/botfront/botfront/commit/248210c))
* merging branches ([435fec1](https://github.com/botfront/botfront/commit/435fec1))
* move story_controller tests to mocha ([55ecb67](https://github.com/botfront/botfront/commit/55ecb67))
* new for add 3rd branch and delete branches ([dfb0eb5](https://github.com/botfront/botfront/commit/dfb0eb5))
* remove cypress test ([a865589](https://github.com/botfront/botfront/commit/a865589))
* story branches persistence ([187b602](https://github.com/botfront/botfront/commit/187b602))
* story-state-persistence ([73fb41d](https://github.com/botfront/botfront/commit/73fb41d))
* updated stories text for default story group ([d99ddbc](https://github.com/botfront/botfront/commit/d99ddbc))
* wrap component in environment ([6fefe62](https://github.com/botfront/botfront/commit/6fefe62))



### [0.15.5](https://github.com/botfront/botfront/compare/v0.15.4...v0.15.5) (2019-08-11)


### Bug Fixes

* should redirect to stories after setup ([9e1b7c4](https://github.com/botfront/botfront/commit/9e1b7c4))


### Features

* easier setup to develop against the docker-compose stack ([630171b](https://github.com/botfront/botfront/commit/630171b))
* faster sidebar transition ([051448c](https://github.com/botfront/botfront/commit/051448c))
* save current story group ([41d1f4e](https://github.com/botfront/botfront/commit/41d1f4e))



### [0.15.4](https://github.com/botfront/botfront/compare/v0.15.3...v0.15.4) (2019-07-31)


### Bug Fixes

* missing cloudbuild image update ([5185489](https://github.com/botfront/botfront/commit/5185489))
* set correct initial version in default model ([a2dd24c](https://github.com/botfront/botfront/commit/a2dd24c))


### Features

* **context-helper:** add entities and intent generation function ([ffecc52](https://github.com/botfront/botfront/commit/ffecc52))


### Tests

* add unit test for intent and entity extraction ([4b500e1](https://github.com/botfront/botfront/commit/4b500e1))
* fixed typos ([8025a2e](https://github.com/botfront/botfront/commit/8025a2e))



### [0.15.3](https://github.com/botfront/botfront/compare/v0.15.2...v0.15.3) (2019-07-26)


### Features

* **FloatingIconButton:** add color & size props ([f0060b2](https://github.com/botfront/botfront/commit/f0060b2))
* postinstall script starts botfront right after npm install ([7998c31](https://github.com/botfront/botfront/commit/7998c31))



### [0.15.2](https://github.com/botfront/botfront/compare/v0.15.1...v0.15.2) (2019-07-25)


### Bug Fixes

* **deps:** re-add react-syntax-highlighter ([3cf562c](https://github.com/botfront/botfront/commit/3cf562c))
* **utterance-viewer:** fix entity recall logic ([3beb473](https://github.com/botfront/botfront/commit/3beb473))


### Features

* **UtteranceInput:** add excludedTarget prop to exclude some blur triggers ([dff4587](https://github.com/botfront/botfront/commit/dff4587))


### Tests

* fix all cypress tests ([#135](https://github.com/botfront/botfront/issues/135)) ([78639b7](https://github.com/botfront/botfront/commit/78639b7))



### [0.15.1](https://github.com/botfront/botfront/compare/v0.15.0...v0.15.1) (2019-07-19)


### Bug Fixes

* **domain generation:** no hard coded action in domain ([#126](https://github.com/botfront/botfront/issues/126)) ([c205e31](https://github.com/botfront/botfront/commit/c205e31))
* **initalPayload:** removed bug where other stories were also present for initialPayload ([3c85144](https://github.com/botfront/botfront/commit/3c85144))
* uncompatible model version due to rasa-for-bf version ([#130](https://github.com/botfront/botfront/issues/130)) ([9eee0fb](https://github.com/botfront/botfront/commit/9eee0fb))
* **utterance-viewer:** Fix onChange and onDelete for utteranceviewer ([20be977](https://github.com/botfront/botfront/commit/20be977))


### Features

* **cli:** CLI suggests to update the npm package and to update projects ([#112](https://github.com/botfront/botfront/issues/112)) ([2fc3b7c](https://github.com/botfront/botfront/commit/2fc3b7c))
* **entity:** Add a generic entity component ([682edc3](https://github.com/botfront/botfront/commit/682edc3))
* **utterance-input:**  Add utterance input ([67e6615](https://github.com/botfront/botfront/commit/67e6615))
* **utterance-viewer:**  Add Intent, Entity, and UtteranceViewer component ([d0fadd1](https://github.com/botfront/botfront/commit/d0fadd1))
* **UtteranceInput:** add fluid prop ([a841be6](https://github.com/botfront/botfront/commit/a841be6))
* scripts to help with release automation ([#131](https://github.com/botfront/botfront/issues/131)) ([5559df4](https://github.com/botfront/botfront/commit/5559df4))
* unique slot names ([3a179ed](https://github.com/botfront/botfront/commit/3a179ed))


### Tests

* fix accessibility and slots test ([#125](https://github.com/botfront/botfront/issues/125)) ([035c1fc](https://github.com/botfront/botfront/commit/035c1fc))



## [0.15.0](https://github.com/botfront/botfront/compare/v0.15.0-rc.1...v0.15.0) (2019-07-09)


### Bug Fixes

* **empty-storygroup-name:** Story group with empty name is not attempted to save. ([00d0e55](https://github.com/botfront/botfront/commit/00d0e55))
* commented dangerous db query ([8e3d990](https://github.com/botfront/botfront/commit/8e3d990))
* fixed error that prevented training ([2b81691](https://github.com/botfront/botfront/commit/2b81691))
* wrong title in stories ([3135318](https://github.com/botfront/botfront/commit/3135318))


### Features

* **intro-stories:** Add intro-stories for the front and backend ([9b1171e](https://github.com/botfront/botfront/commit/9b1171e))
* **new-train-button:** Add a generic train button ([38a82ae](https://github.com/botfront/botfront/commit/38a82ae))
* **stories:** Add intro stories at start of a project ([1ae1dd5](https://github.com/botfront/botfront/commit/1ae1dd5))
* **train-storyGroup:** Only selected stories are trained ([2daa6f0](https://github.com/botfront/botfront/commit/2daa6f0))



## [0.15.0-rc.0](https://github.com/botfront/botfront/compare/v0.14.5...v0.15.0-rc.0) (2019-06-23)


### Bug Fixes

* **activity:** Fixed language field from models ([bd42879](https://github.com/botfront/botfront/commit/bd42879))
* **add-language:** backspace cannot be used to remove a language ([5cbddc3](https://github.com/botfront/botfront/commit/5cbddc3))
* **chat:** use environment variable for socket url ([5509a86](https://github.com/botfront/botfront/commit/5509a86))
* **cli:** botfront log displays continous logs ([eb2555e](https://github.com/botfront/botfront/commit/eb2555e))
* **cli:** Error when init a new project ([69afddc](https://github.com/botfront/botfront/commit/69afddc))
* **cli:** logs from CLI main menu not working ([5d7fcdb](https://github.com/botfront/botfront/commit/5d7fcdb))
* **core policy:** pr changes ([f2d36c5](https://github.com/botfront/botfront/commit/f2d36c5))
* **delete instance:** removed the delete instance bug ([0b918b2](https://github.com/botfront/botfront/commit/0b918b2))
* **nlu:** evaluation broken due to a missing instance ([226f7d2](https://github.com/botfront/botfront/commit/226f7d2))
* **nlu:** Missing import for the Loaded in API tab ([93e07a3](https://github.com/botfront/botfront/commit/93e07a3))
* **nlu:** Wrong  logger components ([62ca16e](https://github.com/botfront/botfront/commit/62ca16e))
* **nlu:** wrong component name ([1234902](https://github.com/botfront/botfront/commit/1234902))
* **slots:** domain would not generate when no slot ([017f0d9](https://github.com/botfront/botfront/commit/017f0d9))
* **slots:** slots validation ([6dbdce6](https://github.com/botfront/botfront/commit/6dbdce6))
* **switch languages:**  minor fixes for switch language feature ([0c08815](https://github.com/botfront/botfront/commit/0c08815))
* **test-switch-langauge:** Test adaptation complete ([f933411](https://github.com/botfront/botfront/commit/f933411))
* **tests:** Made tests independent of NLUModel ([6ade15a](https://github.com/botfront/botfront/commit/6ade15a))
* **user-email:** email address is trimmed before storing ([8a30066](https://github.com/botfront/botfront/commit/8a30066))
* adding a story ([e1a28d1](https://github.com/botfront/botfront/commit/e1a28d1))
* core policy test ([6ab8411](https://github.com/botfront/botfront/commit/6ab8411))
* correct actions base image in project template ([e1ff3b1](https://github.com/botfront/botfront/commit/e1ff3b1))
* default actions server port in environment variables ([8071a5c](https://github.com/botfront/botfront/commit/8071a5c))
* eslint error ([b8cfb6f](https://github.com/botfront/botfront/commit/b8cfb6f))
* gathering training data ([c18d778](https://github.com/botfront/botfront/commit/c18d778))
* merge related fixes ([6f80729](https://github.com/botfront/botfront/commit/6f80729))
* minor fixes project info ([eadf2dc](https://github.com/botfront/botfront/commit/eadf2dc))
* PR ([2d7b8c3](https://github.com/botfront/botfront/commit/2d7b8c3))
* PR changes ([a0e185a](https://github.com/botfront/botfront/commit/a0e185a))
* useless div ([16c5ddc](https://github.com/botfront/botfront/commit/16c5ddc))
* wrong message in Project info ([c8df530](https://github.com/botfront/botfront/commit/c8df530))


### Features

* **cli:** A CLI to create and start a project ([fdca615](https://github.com/botfront/botfront/commit/fdca615))
* **cli:** added a debug flag to rasa in the docker-compose file ([7a73953](https://github.com/botfront/botfront/commit/7a73953))
* **cli:** Added project start prompt after project is created ([78c2730](https://github.com/botfront/botfront/commit/78c2730))
* **cli:** contextual start and stop options ([faee3d9](https://github.com/botfront/botfront/commit/faee3d9))
* **cli:** Messages variations when checking / pulling ([d8fba18](https://github.com/botfront/botfront/commit/d8fba18))
* **cli:** more intuitive commands ([1c9363e](https://github.com/botfront/botfront/commit/1c9363e))
* **cli:** Poss. to change Docker image tags ([478f9c9](https://github.com/botfront/botfront/commit/478f9c9))
* **cli:** pull only if needed; fixed const reassign ([043bddb](https://github.com/botfront/botfront/commit/043bddb))
* **cli:** too many things ([51e536a](https://github.com/botfront/botfront/commit/51e536a))
* **data-import:** uploaded file is converted to json by rasa endpoint ([b2dc297](https://github.com/botfront/botfront/commit/b2dc297))
* **instances:** instance type is now hidden if empty ([c526f34](https://github.com/botfront/botfront/commit/c526f34))
* **model-creation:** Associated new models with default model instance ([18a6eb0](https://github.com/botfront/botfront/commit/18a6eb0))
* **nlu:** set 'data' as default tab when opening a model ([e443530](https://github.com/botfront/botfront/commit/e443530))
* **nlu:** Support for NLU parsing with new Rasa API ([695351a](https://github.com/botfront/botfront/commit/695351a))
* **Project Info:** Language selection ([baa1001](https://github.com/botfront/botfront/commit/baa1001))
* **project-settings:** added default core policy ([d01b504](https://github.com/botfront/botfront/commit/d01b504))
* **slots:** boilerplate ([6af17f3](https://github.com/botfront/botfront/commit/6af17f3))
* **slots:** fixed up the UI ([29e8b22](https://github.com/botfront/botfront/commit/29e8b22))
* **slots:** slots are added to domain file ([ec96b5f](https://github.com/botfront/botfront/commit/ec96b5f))
* **slots:** specific forms for specific types ([01b54a4](https://github.com/botfront/botfront/commit/01b54a4))
* **slots:** validation for float slot type ([223d53f](https://github.com/botfront/botfront/commit/223d53f))
* **slots:** you can create and edit slots ([2895fe9](https://github.com/botfront/botfront/commit/2895fe9))
* **stories:** added tests for story validator ([b5b902d](https://github.com/botfront/botfront/commit/b5b902d))
* **stories:** auto sav ([2201ae3](https://github.com/botfront/botfront/commit/2201ae3))
* **stories:** definitive ESLint compliance; improved exception handling ([e97db4e](https://github.com/botfront/botfront/commit/e97db4e))
* **stories:** delete stories and format errors ([625ab62](https://github.com/botfront/botfront/commit/625ab62))
* **stories:** ESLint compliance; improved exception handling ([b0db64a](https://github.com/botfront/botfront/commit/b0db64a))
* **stories:** friendly md messages ([9bbddd5](https://github.com/botfront/botfront/commit/9bbddd5))
* **stories:** initial commit for StoryValidator class lib ([8e3fd42](https://github.com/botfront/botfront/commit/8e3fd42))
* **stories:** lazy loading ([30a5b0f](https://github.com/botfront/botfront/commit/30a5b0f))
* **stories:** popup confirm to delete stories ([671690d](https://github.com/botfront/botfront/commit/671690d))
* **stories:** story validation - output at most 1 'title' error ([84eb5ec](https://github.com/botfront/botfront/commit/84eb5ec))
* **stories:** updated test & fixture file to use error codes ([9379516](https://github.com/botfront/botfront/commit/9379516))
* **stories:** you can now save stories ([821cf82](https://github.com/botfront/botfront/commit/821cf82))
* added model_id param to HttpLogger component ([61f6287](https://github.com/botfront/botfront/commit/61f6287))
* auto extract triggered actions from policy to domain ([f85391c](https://github.com/botfront/botfront/commit/f85391c))
* menu and adding story groups ([f855b29](https://github.com/botfront/botfront/commit/f855b29))
* **switch-langauges:** Added support for legacy models ([acad437](https://github.com/botfront/botfront/commit/acad437))
* simpler consent for product updates ([8608c7e](https://github.com/botfront/botfront/commit/8608c7e))
* **train stories:** Training button added to stories ([ee22054](https://github.com/botfront/botfront/commit/ee22054))
* **train stories:** Training button added to stories ([35a11df](https://github.com/botfront/botfront/commit/35a11df))
* **training:**  fixed model name ([779002d](https://github.com/botfront/botfront/commit/779002d))
* stories (wip) ([896fecb](https://github.com/botfront/botfront/commit/896fecb))


### Tests

* training data fix ([494ccb3](https://github.com/botfront/botfront/commit/494ccb3))
* **docker-compose:** Added a test to check that the orchestrator is docker-compose ([02fbb80](https://github.com/botfront/botfront/commit/02fbb80))
* **project-instances:** added create, edit and delete instance test ([3e57a78](https://github.com/botfront/botfront/commit/3e57a78))
* **project-setting:** added test for core policy ([b550473](https://github.com/botfront/botfront/commit/b550473))
* **switch language:** added test for adding and deleting model ([0396ab4](https://github.com/botfront/botfront/commit/0396ab4))



### [0.14.5](https://github.com/botfront/botfront/compare/v0.14.4...v0.14.5) (2019-05-16)


### Bug Fixes

* docker compose ([753c157](https://github.com/botfront/botfront/commit/753c157))



### [0.14.4](https://github.com/botfront/botfront/compare/v0.14.3...v0.14.4) (2019-05-16)


### Bug Fixes

* linux compatibility ([0e991f6](https://github.com/botfront/botfront/commit/0e991f6))
* README.md ([834c0fa](https://github.com/botfront/botfront/commit/834c0fa))
* subscription email ([6989e38](https://github.com/botfront/botfront/commit/6989e38))


### Features

* side chat now supports no language ([6f39945](https://github.com/botfront/botfront/commit/6f39945))


### Tests

* testing no language in chat ([6a71e06](https://github.com/botfront/botfront/commit/6a71e06))



### [0.14.3](https://github.com/botfront/botfront/compare/v0.14.2...v0.14.3) (2019-05-10)


### Bug Fixes

* entities not saving ([26b96a1](https://github.com/botfront/botfront/commit/26b96a1))
* login background size ([489388f](https://github.com/botfront/botfront/commit/489388f))


### Tests

* entities saving ([3b901e2](https://github.com/botfront/botfront/commit/3b901e2))



### 0.14.2 (2019-05-09)


### Bug Fixes

* object in ace field ([b1156a9](https://github.com/botfront/botfront/commit/b1156a9))
* **bot responses:** import fails ([38a9d99](https://github.com/botfront/botfront/commit/38a9d99))
* removed useles instance property ([a8c9d58](https://github.com/botfront/botfront/commit/a8c9d58))


### Features

* better confirmation for publish model ([8ecf500](https://github.com/botfront/botfront/commit/8ecf500))
* confirmation for model duplication ([45e9bb0](https://github.com/botfront/botfront/commit/45e9bb0))
* pull request template ([2c9f554](https://github.com/botfront/botfront/commit/2c9f554))


### Tests

* duplicate and publish models ([bbc863b](https://github.com/botfront/botfront/commit/bbc863b))



## 0.14.0 (2019-05-06)


### Bug Fixes

* corrected instances ([c949333](https://github.com/botfront/botfront/commit/c949333))
* scroll in bot responses ([3ca4928](https://github.com/botfront/botfront/commit/3ca4928))


### Features

* disabled activity button in Populate ([5d60c61](https://github.com/botfront/botfront/commit/5d60c61))
