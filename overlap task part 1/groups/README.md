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
# GROUPS Crud
## Table of Contents
- [Full Setup](#full-setup)
    - [Installation](#installation)
    - [Run](#run)
- [Usage](#usage)
    - [HTTP paths](#http-paths)
    - [get a group](#army-id)
    - [get a group's auth](#validate-question)
    - [Post a new group](#/)
    - [update a group](#army-id)

## Full Setup
### Installation

```bash
git clone https://gitlab.com/yesodot/selenium/apollo/sociometry/sociometry-ui.git

cd group-crud

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
| Post   |  create                                                          | create a group                                          |
| Put    |  updateBygroupname                                                  | update a group                                      |
| Get    |  getBygroupname                                                     | get by army id                                     |
| Get    |  validateQuestion                                                | get auth by army id                                     |

**-------------------------------------------------------------------------------------------------------------------------------------**

### create
post a group
#### Paramters
| Name   | Type   | Description                                                    |
| groupname  | string | army id of the group  |
| firstName  | string | first name of the group  |
| lastName  | string | lastname of the group  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the group  |

#### Response
```typescript
"status": "200 OK"
{
    "groupname": "8599492",
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
### getBygroupname
get a group
#### Paramters
| Name   | Type   | Description                                                    |
| groupname  | string | the groupname of the group in the params |

#### Response
```typescript
"status": "200 OK"
{
    "groupname": "8599492",
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

### updateBygroupname
update a group
#### Paramters
| Name   | Type   | Description                                                    |
| groupname  | string | army id of the group  |
| firstName  | string | first name of the group  |
| lastName  | string | lastname of the group  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the group  |

#### Response
```typescript
"status": "200 OK"
{
    "groupname": "8599492",
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
authenticate the question and answer of a group
#### Paramters
| Name   | Type   | Description                                                    |
| groupname  | string | army id of the group  |
| question  | string | question  of the group  |
| answer  | string | answer of the group  |

#### Response
```typescript
"status": "200 OK"
true
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
>>>>>>> 8b76df367b8f9a89ace3b9397c9c1ab0a28c74b2
