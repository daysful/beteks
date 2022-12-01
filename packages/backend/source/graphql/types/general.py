import strawberry



@strawberry.type
class User:
    id: str
    name: str

@strawberry.type
class UserWithToken:
    id: str
    name: str
    token: str
