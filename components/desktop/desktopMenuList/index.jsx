import { makeStyles, Typography } from '@material-ui/core';
import router from 'next/router';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function DesktopMenuList(props) {
  const handleRoute = route => router.push('/man');

  return (
    <React.Fragment>
      <ListContainer inside={false} {...props}>
        {['Man', 'Woman', 'Kid', 'Formal', 'Casual'].map((category, index) => (
          <ListItemContainer inside={false} key={category}>
            <>
              <Typography
                variant="body2"
                onClick={handleRoute}
                color="secondary"
              >
                {category}
              </Typography>
              <ListContainer>
                <ListItemContainer>{index + 1}</ListItemContainer>
              </ListContainer>
            </>
          </ListItemContainer>
        ))}
      </ListContainer>
    </React.Fragment>
  );
}

const ListContainer = ({ children, inside = true, ...props }) => {
  const listClass = inside ? 'insideListContainer' : 'listContainer';
  return (
    <ul className={listClass} {...props}>
      {children}
    </ul>
  );
};

const ListItemContainer = ({ children, inside = true, ...props }) => {
  const listItemClass = inside ? 'insideListItem' : 'listItem';
  return (
    <li className={listItemClass} {...props}>
      {children}
    </li>
  );
};
