import classes from './logistics-item.module.css';

/**
 * It takes a prop called `icon` and uses it to render an icon
 * @param props - This is the props object that is passed to the component.
 * @returns A list item with an icon and content.
 */
function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
