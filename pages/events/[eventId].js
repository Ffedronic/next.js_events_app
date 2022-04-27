import { useRouter } from "next/router";

function EventsDetailsPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <main>
      <h1>The Event Details Page</h1>
    </main>
  );
}

export default EventsDetailsPage;
