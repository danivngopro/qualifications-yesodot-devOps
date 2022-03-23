# BOOKS Crud
## Table of Contents
- [Full Setup](#full-setup)
    - [Installation](#installation)
    - [Run](#run)
- [Usage](#usage)
    - [HTTP paths](#http-paths)
    - [get a book](#army-id)
    - [get a book's auth](#validate-question)
    - [Post a new book](#/)
    - [update a book](#army-id)

## Full Setup
### Installation

```bash
git clone https://gitlab.com/yesodot/selenium/apollo/sociometry/sociometry-ui.git

cd book-crud

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
| Post   |  create                                                          | create a book                                          |
| Put    |  updateBybookname                                                  | update a book                                      |
| Get    |  getBybookname                                                     | get by army id                                     |
| Get    |  validateQuestion                                                | get auth by army id                                     |

**-------------------------------------------------------------------------------------------------------------------------------------**

### create
post a book
#### Paramters
| Name   | Type   | Description                                                    |
| bookname  | string | army id of the book  |
| firstName  | string | first name of the book  |
| lastName  | string | lastname of the book  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the book  |

#### Response
```typescript
"status": "200 OK"
{
    "bookname": "8599492",
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
### getBybookname
get a book
#### Paramters
| Name   | Type   | Description                                                    |
| bookname  | string | the bookname of the book in the params |

#### Response
```typescript
"status": "200 OK"
{
    "bookname": "8599492",
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

### updateBybookname
update a book
#### Paramters
| Name   | Type   | Description                                                    |
| bookname  | string | army id of the book  |
| firstName  | string | first name of the book  |
| lastName  | string | lastname of the book  |
| permissions  | permissionType | basic, mada or segel  |
| validationQuestion  | {string, string} | the question and the anwer of the book  |

#### Response
```typescript
"status": "200 OK"
{
    "bookname": "8599492",
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
authenticate the question and answer of a book
#### Paramters
| Name   | Type   | Description                                                    |
| bookname  | string | army id of the book  |
| question  | string | question  of the book  |
| answer  | string | answer of the book  |

#### Response
```typescript
"status": "200 OK"
true
```
**-----------------------------------------------------------------------------------------------------------------------------------------**
