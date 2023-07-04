export class BoatsSeed1688391304067 {
  async up(queryRunner) {
    await queryRunner.connection
      .createQueryBuilder()
      .insert()
      .into('boat', ['name', 'charge', 'location', 'status'])
      .values([
        {
          name: 'test_1',
          charge: '100',
          location: '500',
          status: 'charging',
        },
        {
          name: 'test_2',
          charge: '100',
          location: '500',
          status: 'charging',
        },
        {
          name: 'test_3',
          charge: '100',
          location: '500',
          status: 'charging',
        },
        {
          name: 'test_4',
          charge: '65',
          location: '500',
          status: 'charging',
        },
        {
          name: 'test_5',
          charge: '100',
          location: '500',
          status: 'charging',
        },
        {
          name: 'test_6',
          charge: '100',
          location: '500',
          status: 'charging',
        },
        {
          name: 'test_7',
          charge: '70',
          location: '500',
          status: 'charging',
        },
        {
          name: 'test_8',
          charge: '100',
          location: '500',
          status: 'charging',
        },
        {
          name: 'test_9',
          charge: '100',
          location: '500',
          status: 'charging',
        },
      ])
      .execute();
  }

  async down(queryRunner) {
    return;
  }
}
