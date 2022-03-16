# PRIMES Crud
## Table of Contents
- [Full Setup](#full-setup)
    - [Installation](#installation)
    - [Run](#run)
- [Usage](#usage)
    - [HTTP paths](#http-paths)
    - [get a prime](#army-id)
    - [get a prime's auth](#validate-question)
    - [Post a new prime](#/)
    - [update a prime](#army-id)

## Full Setup
### Installation

```bash
git clone https://gitlab.com/yesodot/selenium/apollo/sociometry/sociometry-ui.git

cd prime-crud

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
| Post   |  create                                                          | create a prime                                          |
| Put    |  updateByprimename                                                  | update a prime                                      |
| Get    |  getByprimename                                                     | get by army id                                     |
| Get    |  validateQuestion                                                | get auth by army id                                     |

**-------------------------------------------------------------------------------------------------------------------------------------**

### create
post a prime
#### Paramters
| Name   | Type   | Description                                                    |
| primename  | string | army id of the prime  |
| firstName  | string | first name of the prime  |
| lastName  | string | lastname of the prime  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the prime  |

#### Response
```typescript
"status": "200 OK"
{
    "primename": "8599492",
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
### getByprimename
get a prime
#### Paramters
| Name   | Type   | Description                                                    |
| primename  | string | the primename of the prime in the params |

#### Response
```typescript
"status": "200 OK"
{
    "primename": "8599492",
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

### updateByprimename
update a prime
#### Paramters
| Name   | Type   | Description                                                    |
| primename  | string | army id of the prime  |
| firstName  | string | first name of the prime  |
| lastName  | string | lastname of the prime  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the prime  |

#### Response
```typescript
"status": "200 OK"
{
    "primename": "8599492",
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
authenticate the question and answer of a prime
#### Paramters
| Name   | Type   | Description                                                    |
| primename  | string | army id of the prime  |
| question  | string | question  of the prime  |
| answer  | string | answer of the prime  |

#### Response
```typescript
"status": "200 OK"
true
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
