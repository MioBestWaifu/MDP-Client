# Endpoints
Base URL = api.yancosta.online/mdp/

- auth
    - *post*<br>
    payload: [User]. response: [Token]
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
    params: id = int. response: [CommunityPageModel]
    - company 
        - *get*
        params: id = int. response: [CompanyPageModel]
    - favorites 
        - *get*
        response: [FavoritesPageModel]
    - home 
        - *get*
        int. response: [HomePageModel]
    - interestSetup 
        - *get*
        esponse: [InterestSetupPageModel]
    - interestUpdate 
        - *get*
        response: [InterestUpdatePageModel]
    - person 
        - *get*
        params: id = int. response: [PersonPageModel]
    - search 
        - *get*
        params: id = int. response: [SearchPageModel]
    - user 
        - *get*
        params: id = int. response: [UserPageModel]
    - work
        - anime 
            - *get*
            params: id = int. response: [WorkPageModel]
        - book 
            - *get*
            params: id = int. response: [WorkPageModel]
        - game 
            - *get*
            params: id = int. response: [WorkPageModel]
        - manga 
            - *get*
            params: id = int. response: [WorkPageModel]
        - music  
            - *get*
            params: id = int. response: [WorkPageModel]