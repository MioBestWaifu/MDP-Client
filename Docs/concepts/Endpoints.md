# Endpoints
Base URL = api.yancosta.online/mdp/

- auth
    - *post*<br>
    payload: [User](/Docs/src/app/models/User.md). response: [Token](/Docs/src/app/classes/Token.md)
- rate
    - user
        - *patch*<br>
        params: id = int. payload: int.
    - person
        - *patch*<br>
        params: id = int. payload: int.
    - company
        - *patch*<br>
        params: id = int. payload: int.
    - work
        - *patch*<br>
        params: id = int. payload: int.
- pages
    - community
        - *get*
    params: id = int. response: [CommunityPageModel](/Docs/src/app/models/pages/CommunityPageModel.md)
    - company 
        - *get*
        params: id = int. response: [CompanyPageModel](/Docs/src/app/models/pages/CompanyPageModel.md)
    - favorites 
        - *get*
        response: [FavoritesPageModel](/Docs/src/app/models/pages/FavoritesPageModel.md)
    - home 
        - *get*
        int. response: [HomePageModel](/Docs/src/app/models/pages/HomePageModel.md)
    - interestSetup 
        - *get*
        esponse: [InterestSetupPageModel]
    - interestUpdate 
        - *get*
        response: [InterestUpdatePageModel](/Docs/src/app/models/pages/InterestUpdatePageModel.md)
    - person 
        - *get*
        params: id = int. response: [PersonPageModel](/Docs/src/app/models/pages/PersonPageModel.md)
    - search 
        - *get*
        params: id = int. response: [SearchPageModel](/Docs/src/app/models/pages/SearchPageModel.md)
    - user 
        - *get*
        params: id = int. response: [UserPageModel](/Docs/src/app/models/pages/UserPageModel.md)
    - work
        - anime 
            - *get*
            params: id = int. response: [WorkPageModel](/Docs/src/app/models/pages/WorkPageModel.md)
        - book 
            - *get*
            params: id = int. response: [WorkPageModel](/Docs/src/app/models/pages/WorkPageModel.md)
        - game 
            - *get*
            params: id = int. response: [WorkPageModel](/Docs/src/app/models/pages/WorkPageModel.md)
        - manga 
            - *get*
            params: id = int. response: [WorkPageModel](/Docs/src/app/models/pages/WorkPageModel.md)
        - music  
            - *get*
            params: id = int. response: [WorkPageModel](/Docs/src/app/models/pages/WorkPageModel.md)