import { Link, useLocation } from 'react-router-dom';
import { BtnList, BtnWrap, Info } from 'styles/Additional.styled';

const Additional = props => {
  const location = useLocation();
  return (
    <>
      <h2>Additional info</h2>
      <BtnWrap>
        <BtnList>
          <li>
            <Info
              component={Link}
              to={`cast`}
              variant="outlined"
              color="secondary"
              className={location.pathname.includes('cast') ? 'active' : ''}
            >
              Cast
            </Info>
          </li>
          <li>
            <Info
              component={Link}
              to={`reviews`}
              variant="outlined"
              color="secondary"
              className={location.pathname.includes('reviews') ? 'active' : ''}
            >
              Reviews
            </Info>
          </li>
        </BtnList>
        {(location.pathname.includes('cast') ||
          location.pathname.includes('reviews')) && (
          <Info
            component={Link}
            to={``}
            variant="outlined"
            color="secondary"
            className="hide"
          >
            Hide
          </Info>
        )}
      </BtnWrap>
    </>
  );
};

export default Additional;
