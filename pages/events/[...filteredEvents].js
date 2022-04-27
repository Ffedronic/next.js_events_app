import { useRouter } from "next/router";

function FilteredEventsPage() {
  const router = useRouter();
  console.log(router.query);

  return (
    <main>
      <h1>The Filtered Events Page</h1>
    </main>
  );
}

export default FilteredEventsPage;