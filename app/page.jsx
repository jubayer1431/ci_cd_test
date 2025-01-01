import UserCards from '../components/UserCards';

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">User Cards</h1>
      <UserCards />
    </main>
  );
}
