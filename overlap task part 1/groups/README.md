
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
