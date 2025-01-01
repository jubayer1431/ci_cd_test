import { fetchUsers } from '../lib/fetchUsers';
describe('UserCards', () => {
  it('should fetch exactly 10 users', async () => {
    const users = await fetchUsers();
    expect(users.length).toBe(10);
  });
});
