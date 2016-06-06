# API endpoints

## GET /groups

return list of groups:
```json
[
    {
        "id": "group id",
        "name": "group name",
        "members": [
            "id1",
            "id2"
        ]
    }
]
```

## GET /groups/{id}

return group:
```json
{
    "id": "group id",
    "name": "group name",
    "members": [
        "id1",
        "id2"
    ]
}
```

## POST /groups

Adds new group
Input:
```json
{
    "name": "group name",
    "members": [
        "id1",
        "id2"
    ]
}
```

output:
```json
"id of newly created group"
```

## PUT /groups/{id}

input:
```json
{
    "id": "new group id",
    "name": "group name",
    "members": [
        "id1",
        "id2"
    ]
}
```

## GET /users

return list of users:
```json
[
    {
        "id": "user id",
        "name": "user name",
        "userGroups": [
            "id1",
            "id2"
        ]
    }
]
```

## GET /user/{id}

return user:
```json
{
    "id": "user id",
    "name": "user name",
    "userGroups": [
        "id1",
        "id2"
    ]
}
```

## POST /users

Input:
```json
{
    "name": "user name",
    "userGroups": [
        "id1",
        "id2"
    ]
}
```

output:
```json
"id of newly created user"
```

## PUT /users/{id}

Input:
```json
{
    "id": "user id",
    "name": "user name",
    "userGroups": [
        "id1",
        "id2"
    ]
}
```