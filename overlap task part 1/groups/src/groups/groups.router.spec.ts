
import * as mongoose from 'mongoose';
import * as request from 'supertest';

import { config } from '../config';
import { Server } from '../server';
// import { GroupNotFound } from '../utils/errors/group';
import { validGroup, validId } from '../utils/mocks/groups.mock';
import { GroupManager } from './groups.manager';
// import { GroupManager } from './groups.manager';
import { GroupModel } from './groups.model';




const path = '/api/groups';

let server: Server;

describe('Groups Router module', () => {
    beforeAll(async () => {
        await mongoose.connect(config.db.connectionString);
        server = Server.startServer();
    });

    afterEach(async () => {
        await GroupModel.deleteMany().exec();
    });

    afterAll(async () => {
        await mongoose.connection.db.dropDatabase();
        await mongoose.connection.close();
        server.closeServer();
    });

    // describe('POST /api/groups', () => {
    //     describe('Check if group already exist if dose not exist, create it', () => {
    // test('Should create the group', (done) => {
    //     request(server.app)
    //         .post(`${path}/`)
    //         .send(validGroup)
    //         .expect(200)
    //         .expect('content-type', /json/)
    //         .end((error: Error, res: request.Response) => {
    //             expect(error).toBeNull();
    //             expect(res).toBeDefined();
    //             expect(JSON.parse(JSON.stringify(res.body))).toEqual(
    //                 expect.objectContaining(JSON.parse(JSON.stringify(validGroup as Group))),
    //             );
    //             done();
    //         });
    // });

    // test('Should create the group', async () => {
    //     const createdGroup = await GroupManager.create(validGroup);

    //     const validDifferentGroup = validGroup;

    //     validDifferentGroup.id = createdGroup.id;
    //     validDifferentGroup.groupName = 'differentName';

    //     request(server.app)
    //         .post(`${path}/`)
    //         .send(validDifferentGroup)
    //         .expect(200)
    //         .expect('content-type', /json/)
    //         .end((error: Error, res: request.Response) => {
    //             expect(error).toBeNull();
    //             expect(res).toBeDefined();
    //             expect(JSON.parse(JSON.stringify(res.body))).toEqual(
    //                 expect.objectContaining(
    //                     JSON.parse(JSON.stringify(validDifferentGroup)),
    //                 ),
    //             );
    //         });
    // });

    // test('Should throw error if the group is not valid', (done) => {
    //     request(server.app)
    //         .post(`${path}/`)
    //         .send(invalidGroup)
    //         .expect(400)
    //         .expect('content-type', /json/)
    //         .end((error: Error, res: request.Response) => {
    //             expect(error).toBeNull();
    //             expect(res).toBeDefined();
    //             expect(res.body).toHaveProperty(
    //                 'type',
    //                 new groupIsAlreadyExists().message,
    //             );
    //             expect(res.body).toHaveProperty('message');
    //             done();
    //         });
    // });
    //});
    //});
    //describe('GET /api/groups', () => {
    // describe('Valid input', () => {
    //     test('Should return the group when id is valid and exists', async () => {
    //         //const getGroup: any = await GroupManager.findGroupByID(validId);
    //         request(server.app)
    //             .get(`${path}/id/${validId}`) 
    //             .expect(200)
    //             .expect('content-type', /json/)
    //             .end((error: Error, res: request.Response) => {
    //                 expect(error).toBeNull();
    //                 expect(res).toBeDefined();
    //                 expect(JSON.parse(JSON.stringify(res.body))).toEqual(
    //                     expect.objectContaining(JSON.parse(JSON.stringify(validId as unknown))),
    //                 );
    //             });
    //     });
    // });

    //     describe('Invalid input', () => {
    //         test("Should throw GroupNotFound if group with this id doesn't exist", async () => {
    //             .log(validId);
    //             request(server.app)
    //                 .get(`${path}/id/${validId}`)
    //                 .expect(404)
    //                 .expect('content-type', /json/)
    //                 .end((error: Error, _res: request.Response) => {
    //                     if (error) {
    //                         expect(error).toHaveProperty('error');
    //                         expect(error).toHaveProperty('name');
    //                         expect(error.name).toEqual(GroupNotFound.name);
    //                         expect(error).toHaveProperty('code');
    //                     }
    //                 });
    //         });
    //     });
    // });


    // describe('PUT /api/groups',  () => {
    //     describe('Valid group to update an existing group', () => {
    // test('Should update the group', async () => {
    //     const createdGroup = await GroupManager.create(validGroup); 

    //     const tempGroup = createdGroup;
    //     tempGroup.groupName = 'diffrentName';

    //     const res = await request(server.app)
    //         .put(`${path}/id/${createdGroup.id}`)
    //         .send({ groupName: 'diffrentName' })
    //         .expect(200)
    //         .expect('content-type', /json/);

    //     expect(res).toBeDefined();
    //     expect(res.body.groupName).toEqual(tempGroup.groupName);
    //     expect(res.body.id).toEqual(tempGroup.id);
    // });

    // test('Should throw error if the group is not valid', () => {
    //     request(server.app)
    //         .put(`${path}/id/${invalidId}`)
    //         .send(invalidGroup)
    //         .expect(400)
    //         .expect('content-type', /json/)
    //         .end((error: Error, res: request.Response) => {
    //             expect(error).toBeDefined();
    //             expect(res.body).toHaveProperty(
    //                 'type',
    //                 "ValidationError",
    //             );
    //             expect(res.body).toHaveProperty('message');
    //         });
    // });
    //});

    //  test('Should create the group if the ID is valid and the group does not exist yet', (done) => {
    //     request(server.app)
    //         .put(`${path}/id/${validId}`)
    //         .send(validGroup)
    //         .expect(200)
    //         .expect('content-type', /json/)
    //             .end((error: Error, res: request.Response) => {
    //                 expect(error).toBeNull();
    //                 expect(res).toBeDefined();
    //                 expect(JSON.parse(JSON.stringify(res.body))).toEqual(
    //                     expect.objectContaining(JSON.parse(JSON.stringify(validGroup as Group))),
    //                 );
    //                 done();
    //             });
    // });
    //     })
    // });

    // describe('DELETE /api/groups', () => {
    //     describe('Delete the group, if group doesnt exist throw GroupNotFound', () => {
    //         test('Should delete the group', async () => {
    //             const createdGroup = await GroupManager.create(validGroup);
    //             const res = await request(server.app) 
    //                 .delete(`${path}/id/${createdGroup.id}`)
    //                 .expect(200)
    //                 .expect('content-type', /json/);

    //             expect(res).toBeDefined();
    //             expect(res.body.id).toEqual(createdGroup.id);
    //         });

    // test('Should throw error if the group id is not valid', async () => {
    //     const response = await request(server.app)
    //         .delete(`${path}/id/${validId}`)
    //         .expect(404);
    //     expect(response.body).toHaveProperty('message');
    //     expect(response.body).toHaveProperty('type');
    //     expect(response.body.message).toEqual('Group not found');
    // });

    // });

    describe('PUT /api/groups', () => {
        describe('Update the group, if person doesnt found in group, added him to group', () => {
            test('Should add person to participants', async () => {
                const group = await GroupManager.create(validGroup);
                console.log('---------------------------------------')
                console.log('Group: ',group);
                request(server.app)
                    .put(`${path}/addPerson/id/${group.id}`)
                    .send(validId)
                    .expect(200)
                    .expect('content-type', /json/)
                    .end((error: Error, res: request.Response) => {
                        expect(error).toBeNull();
                        expect(res).toBeDefined();
                        expect(JSON.parse(JSON.stringify(res.body))).toEqual(
                            expect.objectContaining(JSON.parse(JSON.stringify(validGroup))),      
                        );
                    });
            });
        });
    }); //delete

    //         test('Should find that the group does not exist', async () => {
    //             const createdGroup = await GroupManager.deleteGroupByID(validGroup.id as string);

    //             const validDifferentGroup = validGroup;

    //             validDifferentGroup.id = createdGroup.id;
    //             validDifferentGroup.groupName = 'differentName';

    //             request(server.app)
    //                 .put(`${path}/addPerson/id/${invalidId}`)
    //                 .send(validDifferentGroup)
    //                 .expect(404)
    //                 .expect('content-type', /json/)
    //                 .end((error: Error, res: request.Response) => {
    //                     expect(error).toBeNull();
    //                     expect(res).toBeDefined();
    //                     expect(JSON.parse(JSON.stringify(res.body))).toEqual(
    //                         expect.objectContaining(
    //                             JSON.parse(JSON.stringify(validDifferentGroup)),
    //                         ),
    //                     );
    //                 });
    //         });

    //         test('Should throw error if the group id is not valid', (done) => {
    //             request(server.app)
    //                 .put(`${path}/addPerson/id/${invalidId}`)
    //                 .send(invalidGroup)
    //                 .expect(400)
    //                 .expect('content-type', /json/)
    //                 .end((error: Error, res: request.Response) => {
    //                     expect(error).toBeNull();
    //                     expect(res).toBeDefined();
    //                     expect(res.body).toHaveProperty(
    //                         'type',
    //                         new GroupNotFound().message,
    //                     );
    //                     expect(res.body).toHaveProperty('message');
    //                     done();
    //                 });
    //         });
    //     });
    // });

    // describe('POST /api/groups', () => {
    //     describe('Add or create subGroup, if the groupId or groupName meet the conditions', () => {
    //         test('Should add group as a subGroup', async () => {

    //            const createdGroup = await GroupManager.create(validGroup);
    //            createdGroup.subgroups[validId];

    //             request(server.app)
    //                 .post(`${path}/addSubgroup/id/${createdGroup.id}`)
    //                 .send(validId)
    //                 .expect(200)
    //                 .expect('content-type', /json/)
    //                 .end((error: Error, res: request.Response) => {
    //                     expect(error).toBeNull();
    //                     expect(res).toBeDefined();
    //                     expect(JSON.parse(JSON.stringify(res.body))).toEqual(
    //                         expect.objectContaining(JSON.parse(JSON.stringify(createdGroup))),
    //                     );
    //                 });
    //         });

    //         test('Should create the group and add group as a subGroup', async () => {
    //             const createdGroup = await GroupManager.create(validGroup);

    //             const validDifferentGroup = validGroup;

    //             validDifferentGroup.subgroups[createdGroup.id as string]; 

    //             request(server.app)
    //                 .post(`${path}/addSubgroup/id/${validGroup.id}`)
    //                 .send(createdGroup.id)
    //                 .expect(200)
    //                 .expect('content-type', /json/)
    //                 .end((error: Error, res: request.Response) => {
    //                     expect(error).toBeNull();
    //                     expect(res).toBeDefined();
    //                     expect(JSON.parse(JSON.stringify(res.body))).toEqual(
    //                         expect.objectContaining(JSON.parse(JSON.stringify(validDifferentGroup))),
    //                     );
    //                 });
    //         });

    //         test('Should find that the group does not exist', async () => {
    //             const createdGroup = await GroupManager.deleteGroupByID(validGroup.id as string);

    //             const validDifferentGroup = validGroup;

    //             validDifferentGroup.id = createdGroup.id;
    //             validDifferentGroup.groupName = 'differentName';

    //             request(server.app)
    //                 .post(`${path}/addPerson/id/${invalidId}`)
    //                 .send(validDifferentGroup.id)
    //                 .expect(404)
    //                 .expect('content-type', /json/)
    //                 .end((error: Error, res: request.Response) => {
    //                     expect(error).toBeNull();
    //                     expect(res).toBeDefined();
    //                     expect(JSON.parse(JSON.stringify(res.body))).toEqual(
    //                         expect.objectContaining(
    //                             JSON.parse(JSON.stringify(validDifferentGroup)),
    //                         ),
    //                     );
    //                 });
    //         });

    //         test('Should throw error if the group id is not valid', (done) => {
    //             request(server.app)
    //                 .post(`${path}/addPerson/id/${validGroup.id}`)
    //                 .send(invalidGroup.id)
    //                 .expect(400)
    //                 .expect('content-type', /json/)
    //                 .end((error: Error, res: request.Response) => {
    //                     expect(error).toBeNull();
    //                     expect(res).toBeDefined();
    //                     expect(res.body).toHaveProperty(
    //                         'type',
    //                         new GroupNotFound().message,
    //                     );
    //                     expect(res.body).toHaveProperty('message');
    //                     done();
    //                 });
    //         });
    //     });
    // });

    // describe('GET /api/groups', () => {
    //     describe('Get groupId, and show the group hierarchy', () => {
    //         test('Should show the group hierarchy', async () => {
    //             const createdGroup = await GroupManager.create(validGroup);
    //             const createdGroupId: any = createdGroup.id;
    //             const grups = [];
    //             const groupHierarchy = await GroupManager.showGroupHierarchy(createdGroupId, grups);
    //             request(server.app)
    //                 .get(`${path}/hierarchy/id/${createdGroupId}`)
    //                 .expect(200)
    //                 .expect('content-type', /json/)
    //                 .end((error: Error, res: request.Response) => {
    //                     expect(error).toBeNull();
    //                     expect(res).toBeDefined();
    //                     expect(JSON.parse(JSON.stringify(res.body))).toEqual(
    //                         expect.objectContaining(JSON.parse(JSON.stringify(groupHierarchy))),
    //                     );
    //                 });
    //         });

    //         test('Should find that the group does not exist', async () => {
    //             const group = await GroupManager.deleteGroupByID(validGroup.id as string);

    //             const validDifferentGroup = group;

    //             validDifferentGroup.id = group.id;

    //             request(server.app)
    //                 .get(`${path}/hierarchy/id/${validDifferentGroup.id}`)
    //                 .expect(404)
    //                 .expect('content-type', /json/)
    //                 .end((error: Error, res: request.Response) => {
    //                     expect(error).toBeNull();
    //                     expect(res).toBeDefined();
    //                     expect(JSON.parse(JSON.stringify(res.body))).toEqual(
    //                         expect.objectContaining(
    //                             JSON.parse(JSON.stringify(validDifferentGroup)),
    //                         ),
    //                     );
    //                 });
    //         });
    //     });
    // });

    // describe('GET /api/groups', () => {
    //     describe('Get personId, and show the groups that he is in', () => {
    //         test('Should show the groups that the person in them', async () => {
    //             const groups = await GroupManager.getPersonGroups(validId);
    //             request(server.app)
    //                 .get(`${path}/personGroups/id/${validId}`)
    //                 .expect(200)
    //                 .expect('content-type', /json/)
    //                 .end((error: Error, res: request.Response) => {
    //                     expect(error).toBeNull();
    //                     expect(res).toBeDefined();
    //                     expect(JSON.parse(JSON.stringify(res.body))).toEqual(
    //                         expect.objectContaining(JSON.parse(JSON.stringify(groups))),
    //                     );
    //                 });
    //         });

    //         test('Should throw error if the group id is not valid', (done) => {
    //             request(server.app)
    //                 .get(`${path}/personGroups/id/${invalid}`)
    //                 .expect(400)
    //                 .expect('content-type', /json/)
    //                 .end((error: Error, res: request.Response) => {
    //                     expect(error).toBeNull();
    //                     expect(res).toBeDefined();
    //                     expect(res.body).toHaveProperty(
    //                         'type',
    //                         new GroupNotFound().message,
    //                     );
    //                     expect(res.body).toHaveProperty('message');
    //                     done();
    //                 });
    //         });       
    //     });
    //});
});
