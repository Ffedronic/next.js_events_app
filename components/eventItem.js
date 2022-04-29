import Link from "next/link";

function EventItem(props) {
  const { id, title, date, image, location } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const exploreLink = `/events/${id}`;
  
  return (
    <li>
      <article>
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <p>{location}</p>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore the event</Link>
        </div>
      </article>
    </li>
  );
}

export default EventItem;
