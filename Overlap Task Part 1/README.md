<<<<<<< HEAD
# PERSONS Crud
## Table of Contents
- [Full Setup](#full-setup)
    - [Installation](#installation)
    - [Run](#run)
- [Usage](#usage)
    - [HTTP paths](#http-paths)
    - [get a person](#army-id)
    - [get a person's auth](#validate-question)
    - [Post a new person](#/)
    - [update a person](#army-id)

## Full Setup
### Installation

```bash
git clone https://gitlab.com/yesodot/selenium/apollo/sociometry/sociometry-ui.git

cd person-crud

npm install
```

### Run 

```bash
npm start
```

## Usage
#### HTTP paths 

| METHOD | ENDPOINT                                                         | DESCRIPTION                                       |
| ------ | :----------------------------------------------------------------| :----------------------------------------------    |
| Post   |  create                                                          | create a person                                          |
| Put    |  updateBypersonname                                                  | update a person                                      |
| Get    |  getBypersonname                                                     | get by army id                                     |
| Get    |  validateQuestion                                                | get auth by army id                                     |

**-------------------------------------------------------------------------------------------------------------------------------------**

### create
post a person
#### Paramters
| Name   | Type   | Description                                                    |
| personname  | string | army id of the person  |
| firstName  | string | first name of the person  |
| lastName  | string | lastname of the person  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the person  |

#### Response
```typescript
"status": "200 OK"
{
    "personname": "8599492",
    "firstName": "string",
    "lastName": "string",
    "permissions": ["QUESTION1"],
    "validationQuestion": {
        "question": "MADA",
        "answer": "string"
  }
}
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
### getBypersonname
get a person
#### Paramters
| Name   | Type   | Description                                                    |
| personname  | string | the personname of the person in the params |

#### Response
```typescript
"status": "200 OK"
{
    "personname": "8599492",
    "firstName": "string",
    "lastName": "string",
    "permissions": ["QUESTION1"],
    "validationQuestion": {
        "question": "MADA",
        "answer": "string"
  }
}
```
**-----------------------------------------------------------------------------------------------------------------------------------------**

### updateBypersonname
update a person
#### Paramters
| Name   | Type   | Description                                                    |
| personname  | string | army id of the person  |
| firstName  | string | first name of the person  |
| lastName  | string | lastname of the person  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the person  |

#### Response
```typescript
"status": "200 OK"
{
    "personname": "8599492",
    "firstName": "string",
    "lastName": "string",
    "permissions": ["QUESTION1"],
    "validationQuestion": {
        "question": "MADA",
        "answer": "string"
  }
}
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
### validateQuestion
authenticate the question and answer of a person
#### Paramters
| Name   | Type   | Description                                                    |
| personname  | string | army id of the person  |
| question  | string | question  of the person  |
| answer  | string | answer of the person  |

#### Response
```typescript
"status": "200 OK"
true
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
=======
# USERS Crud
## Table of Contents
- [Full Setup](#full-setup)
    - [Installation](#installation)
    - [Run](#run)
- [Usage](#usage)
    - [HTTP paths](#http-paths)
    - [get a user](#army-id)
    - [get a user's auth](#validate-question)
    - [Post a new user](#/)
    - [update a user](#army-id)

## Full Setup
### Installation

```bash
git clone https://gitlab.com/yesodot/selenium/apollo/sociometry/sociometry-ui.git

cd user-crud

npm install
```

### Run 

```bash
npm start
```

## Usage
#### HTTP paths 

| METHOD | ENDPOINT                                                         | DESCRIPTION                                       |
| ------ | :----------------------------------------------------------------| :----------------------------------------------    |
| Post   |  create                                                          | create a user                                          |
| Put    |  updateByusername                                                  | update a user                                      |
| Get    |  getByusername                                                     | get by army id                                     |
| Get    |  validateQuestion                                                | get auth by army id                                     |

**-------------------------------------------------------------------------------------------------------------------------------------**

### create
post a user
#### Paramters
| Name   | Type   | Description                                                    |
| username  | string | army id of the user  |
| firstName  | string | first name of the user  |
| lastName  | string | lastname of the user  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the user  |

#### Response
```typescript
"status": "200 OK"
{
    "username": "8599492",
    "firstName": "string",
    "lastName": "string",
    "permissions": ["QUESTION1"],
    "validationQuestion": {
        "question": "MADA",
        "answer": "string"
  }
}
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
### getByusername
get a user
#### Paramters
| Name   | Type   | Description                                                    |
| username  | string | the username of the user in the params |

#### Response
```typescript
"status": "200 OK"
{
    "username": "8599492",
    "firstName": "string",
    "lastName": "string",
    "permissions": ["QUESTION1"],
    "validationQuestion": {
        "question": "MADA",
        "answer": "string"
  }
}
```
**-----------------------------------------------------------------------------------------------------------------------------------------**

### updateByusername
update a user
#### Paramters
| Name   | Type   | Description                                                    |
| username  | string | army id of the user  |
| firstName  | string | first name of the user  |
| lastName  | string | lastname of the user  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the user  |

#### Response
```typescript
"status": "200 OK"
{
    "username": "8599492",
    "firstName": "string",
    "lastName": "string",
    "permissions": ["QUESTION1"],
    "validationQuestion": {
        "question": "MADA",
        "answer": "string"
  }
}
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
### validateQuestion
authenticate the question and answer of a user
#### Paramters
| Name   | Type   | Description                                                    |
| username  | string | army id of the user  |
| question  | string | question  of the user  |
| answer  | string | answer of the user  |

#### Response
```typescript
"status": "200 OK"
true
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
>>>>>>> 8b76df367b8f9a89ace3b9397c9c1ab0a28c74b2
