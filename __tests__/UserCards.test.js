async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}
describe('UserCards', () => {
  it('should fetch exactly 10 users', async () => {
    const users = await fetchUsers();
    expect(users.length).toBe(10);
  });
});
